(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html, body {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  background: #eecda3;\n  background: linear-gradient(to right, #eecda3, #ef629f);\n}\nhtml *, body * {\n  box-sizing: border-box;\n}\n.blink {\n  -webkit-animation: blinker 500ms linear infinite;\n          animation: blinker 500ms linear infinite;\n}\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n.debug {\n  position: fixed;\n  bottom: 16px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.watch-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n.watch {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 250px;\n  height: 200px;\n  border: 2px solid #000;\n  border-radius: 20px/50%;\n  background-color: #f0f0f0;\n}\n.watch__model {\n  position: absolute;\n  top: 10px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n  color: #888;\n}\n.watch__section {\n  position: absolute;\n  bottom: 12px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n  color: #888;\n  font-size: 12px;\n}\n.watch__screen {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 45px auto;\n  grid-template-areas: \"alarm1    alarm2    chime   stopwatch\" \"display   display   display   display\";\n  width: 180px;\n  height: 120px;\n  border: 2px solid #000;\n  border-radius: 10px;\n  background-color: #fff;\n  font-size: 28px;\n  font-family: monospace;\n}\n.watch__screen--lighted {\n  background-color: #aeffff;\n}\n.watch__status {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  position: relative;\n  opacity: 0.4;\n}\n.watch__status--enabled {\n  opacity: 1;\n}\n.watch__status--highlight:after {\n  content: \"\";\n  position: absolute;\n  bottom: 4px;\n  left: calc(50% - 2px);\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background-color: #000;\n}\n.watch__display {\n  grid-area: display;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 2px solid #000;\n}\n.button {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  border: 2px solid #000;\n  border-radius: 40px;\n  background-color: #f0f0f0;\n  padding: 4px;\n  transition: transform 150ms ease-out;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.button .__button {\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  outline: none;\n  border: 2px solid #000;\n}\n.button .__label {\n  white-space: nowrap;\n}\n.button:active {\n  transform: scale(0.97) translateX(-5px);\n}\n.button--a:active {\n  transform: scale(0.97) translateX(5px);\n}\n.button--a .__button {\n  background-color: #fff;\n}\n.button--b .__button {\n  background-color: #ffd000;\n}\n.button--c .__button {\n  background-color: #2acf90;\n}\n.button--d .__button {\n  background-color: #213239;\n  color: #fff;\n}\n.button--a {\n  right: calc(100% - 22px);\n}\n.button--a .__label,\n.button--a .__button {\n  margin-left: 4px;\n}\n.button--b, .button--c, .button--d {\n  left: calc(100% - 22px);\n  flex-direction: row-reverse;\n}\n.button--b .__label,\n.button--b .__button, .button--c .__label,\n.button--c .__button, .button--d .__label,\n.button--d .__button {\n  margin-right: 4px;\n}\n.button--a, .button--b {\n  top: 8px;\n}\n.button--c {\n  top: calc(50% - 20px - $border);\n}\n.button--d {\n  bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3VwL0NvZGUvZG91cC1zdGF0ZXdhdGNoL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMEpBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0FDQ0o7QURFSTtFQUNJLHNCQUFBO0FDQVI7QURJQTtFQUNJLGdEQUFBO1VBQUEsd0NBQUE7QUNESjtBRElBO0VBQ0k7SUFDRSxVQUFBO0VDREo7QUFDRjtBREZBO0VBQ0k7SUFDRSxVQUFBO0VDREo7QUFDRjtBRElBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDRko7QURLQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNGSjtBREtBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDRko7QURJSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRlI7QURLSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0hSO0FETUk7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLG9HQUNJO0VBRUosWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNOUjtBRFFRO0VBQ0kseUJBQUE7QUNOWjtBRFVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDUlI7QURVUTtFQUNJLFVBQUE7QUNSWjtBRFdRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDVFo7QURhSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQ1hSO0FEZUE7RUFPSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBVlM7RUFXVCx5QkFBQTtFQUNBLFlBWFU7RUFZVixvQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ2xCSjtBRG9CSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBcEJXO0VBcUJYLFlBckJXO0VBc0JYLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDbEJSO0FEcUJJO0VBQ0ksbUJBQUE7QUNuQlI7QUR1Qkk7RUFDSSx1Q0FBQTtBQ3JCUjtBRHdCSTtFQUNJLHNDQUFBO0FDdEJSO0FEMEJJO0VBQWlCLHNCQUFBO0FDdkJyQjtBRHdCSTtFQUFpQix5QkFBQTtBQ3JCckI7QURzQkk7RUFBaUIseUJBQUE7QUNuQnJCO0FEb0JJO0VBQWlCLHlCQUFBO0VBQTJCLFdBQUE7QUNoQmhEO0FEbUJJO0VBQ0ksd0JBQUE7QUNqQlI7QURtQlE7O0VBRUksZ0JBckRFO0FDb0NkO0FEc0JJO0VBR0ksdUJBQUE7RUFDQSwyQkFBQTtBQ3RCUjtBRHdCUTs7OztFQUVJLGlCQWxFRTtBQzhDZDtBRHlCSTtFQUVJLFFBdkVTO0FDK0NqQjtBRDRCSTtFQUNJLCtCQUFBO0FDMUJSO0FEOEJJO0VBQ0ksV0FqRlM7QUNxRGpCIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBiYWNrZ3JvdW5kOiAjZWVjZGEzO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlY2RhMywgI2VmNjI5Zik7XG5cblxuICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cblxuLmJsaW5rIHtcbiAgICBhbmltYXRpb246IGJsaW5rZXIgNTAwbXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuLmRlYnVnIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxNnB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndhdGNoLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLndhdGNoIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAvIDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuXG4gICAgJl9fbW9kZWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjODg4O1xuICAgIH1cblxuICAgICZfX3NlY3Rpb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMTJweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgJl9fc2NyZWVuIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcImFsYXJtMSAgICBhbGFybTIgICAgY2hpbWUgICBzdG9wd2F0Y2hcIlxuICAgICAgICAgICAgXCJkaXNwbGF5ICAgZGlzcGxheSAgIGRpc3BsYXkgICBkaXNwbGF5XCI7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuXG4gICAgICAgICYtLWxpZ2h0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZmZmZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3N0YXR1cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuXG4gICAgICAgICYtLWVuYWJsZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLWhpZ2hsaWdodDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNHB4O1xuICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAycHgpO1xuICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19kaXNwbGF5IHtcbiAgICAgICAgZ3JpZC1hcmVhOiBkaXNwbGF5O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDA7XG4gICAgfVxufVxuXG4uYnV0dG9uIHtcbiAgICAkaGVpZ2h0OiA0MHB4O1xuICAgICRwYWRkaW5nOiA0cHg7XG4gICAgJGJ1dHRvbkhlaWdodDogJGhlaWdodCAtICRwYWRkaW5nICogMjtcbiAgICAkbWFyZ2luRWRnZTogOHB4O1xuICAgICRib3JkZXI6IDJweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAkaGVpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgcGFkZGluZzogJHBhZGRpbmc7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2Utb3V0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIC5fX2J1dHRvbiB7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6ICRidXR0b25IZWlnaHQ7XG4gICAgICAgIGhlaWdodDogJGJ1dHRvbkhlaWdodDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICB9XG5cbiAgICAuX19sYWJlbCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLy8gQlVUVE9OIFBSRVNTIEFOSU1BVElPTlxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOTcpIHRyYW5zbGF0ZVgoLTVweCk7XG4gICAgfVxuXG4gICAgJi0tYTphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45NykgdHJhbnNsYXRlWCg1cHgpO1xuICAgIH1cblxuICAgIC8vIEJVVFRPTiBDT0xPUlNcbiAgICAmLS1hIC5fX2J1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cbiAgICAmLS1iIC5fX2J1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICNmZmQwMDA7IH1cbiAgICAmLS1jIC5fX2J1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICMyYWNmOTA7IH1cbiAgICAmLS1kIC5fX2J1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICMyMTMyMzk7IGNvbG9yOiAjZmZmOyB9XG5cbiAgICAvLyBMRUZUXG4gICAgJi0tYSB7XG4gICAgICAgIHJpZ2h0OiBjYWxjKDEwMCUgLSAjeyRidXR0b25IZWlnaHQgLyAyICsgJHBhZGRpbmcgKyAkYm9yZGVyfSk7XG5cbiAgICAgICAgLl9fbGFiZWwsXG4gICAgICAgIC5fX2J1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogJHBhZGRpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSSUdIVFxuICAgICYtLWIsXG4gICAgJi0tYyxcbiAgICAmLS1kIHtcbiAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gI3skYnV0dG9uSGVpZ2h0IC8gMiArICRwYWRkaW5nICsgJGJvcmRlcn0pO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgICAgICAgLl9fbGFiZWwsXG4gICAgICAgIC5fX2J1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRwYWRkaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9QXG4gICAgJi0tYSxcbiAgICAmLS1iIHtcbiAgICAgICAgdG9wOiAkbWFyZ2luRWRnZTtcbiAgICB9XG5cbiAgICAvLyBNSURETEVcbiAgICAmLS1jIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtICN7JGhlaWdodCAvIDJ9IC0gJGJvcmRlcik7XG4gICAgfVxuXG4gICAgLy8gQk9UVE9NXG4gICAgJi0tZCB7XG4gICAgICAgIGJvdHRvbTogJG1hcmdpbkVkZ2U7XG4gICAgfVxufVxuIiwiaHRtbCwgYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBiYWNrZ3JvdW5kOiAjZWVjZGEzO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZWNkYTMsICNlZjYyOWYpO1xufVxuaHRtbCAqLCBib2R5ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYmxpbmsge1xuICBhbmltYXRpb246IGJsaW5rZXIgNTAwbXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5kZWJ1ZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxNnB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndhdGNoLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ud2F0Y2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHgvNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuLndhdGNoX19tb2RlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4ODg7XG59XG4ud2F0Y2hfX3NlY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ud2F0Y2hfX3NjcmVlbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFsYXJtMSAgICBhbGFybTIgICAgY2hpbWUgICBzdG9wd2F0Y2hcIiBcImRpc3BsYXkgICBkaXNwbGF5ICAgZGlzcGxheSAgIGRpc3BsYXlcIjtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG4ud2F0Y2hfX3NjcmVlbi0tbGlnaHRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWZmZmY7XG59XG4ud2F0Y2hfX3N0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMC40O1xufVxuLndhdGNoX19zdGF0dXMtLWVuYWJsZWQge1xuICBvcGFjaXR5OiAxO1xufVxuLndhdGNoX19zdGF0dXMtLWhpZ2hsaWdodDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMnB4KTtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4ud2F0Y2hfX2Rpc3BsYXkge1xuICBncmlkLWFyZWE6IGRpc3BsYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzAwMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgcGFkZGluZzogNHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uYnV0dG9uIC5fX2J1dHRvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cbi5idXR0b24gLl9fbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpIHRyYW5zbGF0ZVgoLTVweCk7XG59XG4uYnV0dG9uLS1hOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NykgdHJhbnNsYXRlWCg1cHgpO1xufVxuLmJ1dHRvbi0tYSAuX19idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJ1dHRvbi0tYiAuX19idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkMDAwO1xufVxuLmJ1dHRvbi0tYyAuX19idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFjZjkwO1xufVxuLmJ1dHRvbi0tZCAuX19idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzMjM5O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idXR0b24tLWEge1xuICByaWdodDogY2FsYygxMDAlIC0gMjJweCk7XG59XG4uYnV0dG9uLS1hIC5fX2xhYmVsLFxuLmJ1dHRvbi0tYSAuX19idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmJ1dHRvbi0tYiwgLmJ1dHRvbi0tYywgLmJ1dHRvbi0tZCB7XG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDIycHgpO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4uYnV0dG9uLS1iIC5fX2xhYmVsLFxuLmJ1dHRvbi0tYiAuX19idXR0b24sIC5idXR0b24tLWMgLl9fbGFiZWwsXG4uYnV0dG9uLS1jIC5fX2J1dHRvbiwgLmJ1dHRvbi0tZCAuX19sYWJlbCxcbi5idXR0b24tLWQgLl9fYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4uYnV0dG9uLS1hLCAuYnV0dG9uLS1iIHtcbiAgdG9wOiA4cHg7XG59XG4uYnV0dG9uLS1jIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDIwcHggLSAkYm9yZGVyKTtcbn1cbi5idXR0b24tLWQge1xuICBib3R0b206IDhweDtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/doup/Code/doup-statewatch/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map