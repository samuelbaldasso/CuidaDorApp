"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_screen2_screen2_module_ts"],{

/***/ 2581:
/*!***************************************************!*\
  !*** ./src/app/screen2/screen2-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen2RoutingModule": () => (/* binding */ Screen2RoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../screen2/screen2.component */ 6310);




const routes = [
    {
        path: 'screen2', component: _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_0__.Screen2Component
    },
];
let Screen2RoutingModule = class Screen2RoutingModule {
};
Screen2RoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Screen2RoutingModule);



/***/ }),

/***/ 6608:
/*!*******************************************!*\
  !*** ./src/app/screen2/screen2.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen2Module": () => (/* binding */ Screen2Module)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _screen2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen2.component */ 6310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _screen2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen2-routing.module */ 2581);







let Screen2Module = class Screen2Module {
};
Screen2Module = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _screen2_routing_module__WEBPACK_IMPORTED_MODULE_1__.Screen2RoutingModule
        ],
        declarations: [_screen2_component__WEBPACK_IMPORTED_MODULE_0__.Screen2Component]
    })
], Screen2Module);



/***/ })

}]);
//# sourceMappingURL=src_app_screen2_screen2_module_ts.js.map