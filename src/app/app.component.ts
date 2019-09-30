import { Component, OnInit, NgZone } from '@angular/core';
import { Machine, interpret, State, HistoryStateNodeConfig, EventObject } from 'xstate';
import { fromEventPattern, Observable } from 'rxjs';

const machine = Machine({
    id: 'watch',
    type: 'parallel',
    states: {
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
                                D_DOWN: 'date',
                                C_DOWN: 'wait',
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
                                                },
                                                off: {
                                                    on: {
                                                        B_DOWN: 'on',
                                                    }
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

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    states: string[] = [];
    buttons = [
        { value: 'A', label: 'Mode' },
        { value: 'B', label: 'Light + Start/Stop' },
        { value: 'C', label: 'Select' },
        { value: 'D', label: 'Lap/Reset + Read/Set' },
    ];

    constructor(
        protected zone: NgZone,
    ) {}

    ngOnInit() {
        state$.subscribe(([state]) => {
            this.zone.run(() => {
                this.states = state.toStrings();
            });
        });
    }

    down(button: string) {
        // service.send(['ANY_DOWN', `${button}_DOWN`]);
        service.send(`${button}_DOWN`);
    }

    in(state) {
        return this.states.indexOf(state) !== -1;
    }

    up(button: string) {
        // service.send(['ANY_UP', `${button}_UP`]);
        service.send(`${button}_UP`);
    }
}
