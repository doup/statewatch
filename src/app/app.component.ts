import { Component, OnInit, NgZone } from '@angular/core';
import { Machine, interpret, State, HistoryStateNodeConfig, EventObject, assign } from 'xstate';
import { fromEventPattern, Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

const timeTick$ = interval(1000).pipe(map(() => Date.now()));

const machine = Machine({
    id: 'watch',
    context: {
        time: Date.now(),
    },
    type: 'parallel',
    meta: {
        A: 'Mode',
        B: 'Light',
        C: '',
        D: '',
    },
    states: {
        clock: {
            invoke: {
                src: 'timeTick$',
            },
            on: {
                UPDATE_TIME: {
                    actions: ['updateTime'],
                },
            }
        },
        main: {
            initial: 'displays',
            states: {
                displays: {
                    initial: 'time',
                    states: {
                        time: {
                            on: {
                                // TODO: (HISTORY_HACK) this should be just "alarm1", see: https://github.com/davidkpiano/xstate/issues/686
                                A_DOWN: 'alarm1.lastMode',
                                C_DOWN: 'wait',
                                D_DOWN: 'date',
                            },
                            meta: {
                                C: 'Update (long-press)',
                                D: 'Date',
                            },
                        },
                        wait: {
                            on: {
                                C_UP: 'time',
                            },
                            after: {
                                2000: 'update',
                            },
                        },
                        update: {
                            initial: 'seconds',
                            states: {
                                seconds: {
                                    on: {
                                        C_DOWN: 'minutes',
                                    },
                                },
                                minutes: {
                                    on: {
                                        C_DOWN: 'minutes10',
                                    },
                                },
                                minutes10: {
                                    on: {
                                        C_DOWN: 'hours',
                                    },
                                },
                                hours: {
                                    on: {
                                        C_DOWN: 'month',
                                    },
                                },
                                month: {
                                    on: {
                                        C_DOWN: 'date',
                                    },
                                },
                                date: {
                                    on: {
                                        C_DOWN: 'day',
                                    },
                                },
                                day: {
                                    on: {
                                        C_DOWN: 'year',
                                    },
                                },
                                year: {
                                    on: {
                                        C_DOWN: 'mode',
                                    },
                                },
                                mode: {
                                    on: {
                                        // Transition to parent sibling state `time`
                                        C_DOWN: '#watch.main.displays.time',
                                    },
                                },
                                // After entering this state it returns to the previously active sibling state
                                increment: {
                                    type: 'history',
                                }
                            },
                            on: {
                                B_DOWN: 'time',
                                D_DOWN: '.increment',
                            },
                        },
                        date: {
                            on: {
                                D_DOWN: 'time',
                            },
                            after: {
                                5000: 'time',
                            },
                        },
                        alarm1: {
                            initial: 'lastMode',
                            states: {
                                on: {
                                    on: {
                                        D_DOWN: 'off',
                                    },
                                },
                                off: {
                                    on: {
                                        D_DOWN: 'on',
                                    },
                                },
                                lastMode: {
                                    type: 'history',
                                    target: 'off',
                                } as HistoryStateNodeConfig<any, any>,
                            },
                            on: {
                                A_DOWN: 'alarm2',
                                C_DOWN: 'updateAlarm1',
                            },
                            meta: {
                                C: 'Change',
                            },
                        },
                        updateAlarm1: {
                            initial: 'hours',
                            states: {
                                hours: {
                                    on: {
                                        C_DOWN: 'minutes10',
                                    },
                                },
                                minutes10: {
                                    on: {
                                        C_DOWN: 'minutes',
                                    },
                                },
                                minutes: {
                                    on: {
                                        // TODO: See HISTORY_HACK
                                        C_DOWN: '#watch.main.displays.alarm1.lastMode',
                                    },
                                },
                                increment: {
                                    type: 'history',
                                    target: 'hours',
                                } as HistoryStateNodeConfig<any, any>
                            },
                            on: {
                                // TODO: See HISTORY_HACK
                                B_DOWN: 'alarm1.lastMode',
                                D_DOWN: '.increment'
                            },
                        },
                        alarm2: {
                            on: {
                                A_DOWN: 'chime',
                            },
                        },
                        chime: {
                            on: {
                                A_DOWN: 'stopwatch.lastState',
                            },
                        },
                        stopwatch: {
                            initial: 'zero',
                            states: {
                                zero: {
                                    on: {
                                        B_DOWN: 'config',
                                    },
                                    meta: {
                                        B: 'Start',
                                    },
                                },
                                config: {
                                    type: 'parallel',
                                    states: {
                                        display: {
                                            initial: 'regular',
                                            states: {
                                                regular: {
                                                    on: {
                                                        D_DOWN: [
                                                            {
                                                                target: 'lap',
                                                                in: '#watch.main.displays.stopwatch.config.run.on',
                                                            },
                                                            {
                                                                target: '#watch.main.displays.stopwatch.zero',
                                                                in: '#watch.main.displays.stopwatch.config.run.off',
                                                            },
                                                        ],
                                                    },
                                                },
                                                lap: {
                                                    on: {
                                                        D_DOWN: 'regular',
                                                    },
                                                },
                                            }
                                        },
                                        run: {
                                            initial: 'on',
                                            states: {
                                                on: {
                                                    on: {
                                                        B_DOWN: 'off',
                                                    },
                                                    meta: {
                                                        B: 'Stop',
                                                    },
                                                },
                                                off: {
                                                    on: {
                                                        B_DOWN: 'on',
                                                    },
                                                    meta: {
                                                        B: 'Start',
                                                        D: 'Reset',
                                                    },
                                                },
                                            },
                                        },
                                    }
                                },
                                lastState: {
                                    type: 'history',
                                    history: 'deep',
                                    target: 'zero',
                                } as HistoryStateNodeConfig<any, any>,
                            },
                            on: {
                                A_DOWN: 'time',
                            },
                            meta: {
                                B: '',
                                C: '',
                                D: '',
                            },
                        },
                    }
                },
                alarmsBeep: {
                    activities: ['beeping'],
                    states: {
                        alarm1: {},
                        alarm2: {},
                        both: {},
                    },
                    on: {
                        ANY_DOWN: 'displays',
                    },
                    after: {
                        5000: 'displays',
                    },
                }
            },
        },
        alarm1Status: {
            initial: 'disabled',
            states: {
                enabled: {
                    on: {
                        D_DOWN: {
                            target: 'disabled',
                            in: '#watch.main.displays.alarm1.on',
                        },
                    },
                },
                disabled: {
                    on: {
                        D_DOWN: {
                            target: 'enabled',
                            in: '#watch.main.displays.alarm1.off',
                        },
                    },
                },
            }
        },
        alarm2Status: {},
        chimeStatus: {},
        light: {
            initial: 'off',
            states: {
                on: {
                    on: {
                        B_UP: 'off',
                    },
                },
                off: {
                    on: {
                        B_DOWN: 'on',
                    },
                },
            },
        },
        power: {},
    },
}, {
    actions: {
        updateTime: assign({ time: (_, event) => event.value }),
    },
    services: {
        timeTick$: (context, event) => {
            console.log(context, event);

            return timeTick$.pipe(map(time => ({ type: 'UPDATE_TIME', value: time })));
        },
    }
});

const service = interpret(machine);
const state$: Observable<[State<any, any>, EventObject]> = fromEventPattern(
    (handler) => {
        service.onTransition(handler).start();

        return service;
    },
    (_, svc) => {
        svc.stop();
    },
);

function mergeMeta(meta) {
    return Object.keys(meta).reduce((acc, key) => {
        const value = meta[key];

        // Assuming each meta value is an object
        Object.assign(acc, value);

        return acc;
    }, {});
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    meta: object;
    state: State<any, any>;
    buttons = ['A', 'B', 'C', 'D'];

    constructor(
        protected zone: NgZone,
    ) {}

    ngOnInit() {
        state$.subscribe(([state]) => {
            this.zone.run(() => {
                this.meta = mergeMeta(state.meta);
                this.state = state;
            });
        });
    }

    down(button: string) {
        service.send(`${button}_DOWN`);
    }

    up(button: string) {
        service.send(`${button}_UP`);
    }
}
