"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _prematuro_prematuro_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prematuro/prematuro.component */ 5971);
/* harmony import */ var _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../screen1/screen1.component */ 678);
/* harmony import */ var _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screen2/screen2.component */ 9575);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../summary/summary.component */ 6155);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ 2267);








const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_4__.HomePage,
    },
    {
        path: 'summary', component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__.SummaryComponent,
        children: [
            {
                path: 'prematuro', component: _prematuro_prematuro_component__WEBPACK_IMPORTED_MODULE_0__.PrematuroComponent
            }
        ]
    },
    {
        path: 'screen1', component: _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_1__.Screen1Component
    },
    {
        path: 'screen2', component: _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_2__.Screen2Component
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 1789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 1670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 7206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 7206:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  justify-content: center;\n  text-align: center;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  margin-top: 40px;\n}\n\n.title h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 48px;\n  text-align: center;\n  font-weight: 700;\n  color: #fff;\n}\n\nion-content {\n  --ion-background-color:#4854e0;\n}\n\n.button {\n  display: flex;\n  gap: 24px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  width: 135px;\n  border-radius: 15%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  width: 135px;\n  border-radius: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLDhCQUFBO0FBRkY7O0FBS0E7RUFFRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSEY7O0FBT0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lclxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvLyBtYXJnaW4tdG9wOiA4MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5we1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4udGl0bGUgaDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1jb250ZW50e1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM0ODU0ZTA7XG59XG5cbi5idXR0b25cbntcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG59XG5cbiNidXQxe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG59XG5cbiNidXQye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAgcmdiKDEyMCwgNjgsIDE2OCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiAxMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xufVxuIl19 */";

/***/ }),

/***/ 1670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"container\">\n\n    <div class=\"title\">\n      <h1>\n        CuidaDOR <br />\n        Neonatal\n      </h1>\n    </div>\n\n    <div class=\"p\">\n      <p>Pronto para descobrir mais sobre a dor do recém-nascido prematuro?</p>\n    </div>\n\n    <div class=\"button\">\n      <button id=\"but1\" routerLink=\"/screen1\">\n        INTRODUÇÃO\n      </button>\n\n      <button id=\"but2\" routerLink=\"/summary\">\n        MENU\n      </button>\n    </div>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map