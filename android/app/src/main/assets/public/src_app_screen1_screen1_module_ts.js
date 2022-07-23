"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_screen1_screen1_module_ts"],{

/***/ 6082:
/*!***************************************************!*\
  !*** ./src/app/screen1/screen1-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen1RoutingModule": () => (/* binding */ Screen1RoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../screen1/screen1.component */ 678);




const routes = [
    {
        path: 'screen1', component: _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_0__.Screen1Component
    },
];
let Screen1RoutingModule = class Screen1RoutingModule {
};
Screen1RoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Screen1RoutingModule);



/***/ }),

/***/ 8931:
/*!*******************************************!*\
  !*** ./src/app/screen1/screen1.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen1Module": () => (/* binding */ Screen1Module)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _screen1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen1.component */ 678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 1789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _screen1_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen1-routing.module */ 6082);







let Screen1Module = class Screen1Module {
};
Screen1Module = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _screen1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Screen1RoutingModule
        ],
        declarations: [_screen1_component__WEBPACK_IMPORTED_MODULE_0__.Screen1Component]
    })
], Screen1Module);



/***/ })

}]);
//# sourceMappingURL=src_app_screen1_screen1_module_ts.js.map