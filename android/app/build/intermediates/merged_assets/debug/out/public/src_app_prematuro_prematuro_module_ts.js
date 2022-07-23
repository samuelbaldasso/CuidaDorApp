"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_prematuro_prematuro_module_ts"],{

/***/ 8429:
/*!*******************************************************!*\
  !*** ./src/app/prematuro/prematuro-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrematuroRoutingModule": () => (/* binding */ PrematuroRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _prematuro_prematuro_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prematuro/prematuro.component */ 5971);




const routes = [
    {
        path: 'prematuro', component: _prematuro_prematuro_component__WEBPACK_IMPORTED_MODULE_0__.PrematuroComponent
    }
];
let PrematuroRoutingModule = class PrematuroRoutingModule {
};
PrematuroRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], PrematuroRoutingModule);



/***/ }),

/***/ 2349:
/*!***********************************************!*\
  !*** ./src/app/prematuro/prematuro.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrematuroModule": () => (/* binding */ PrematuroModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _prematuro_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prematuro.component */ 5971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 1789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _prematuro_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prematuro-routing.module */ 8429);







let PrematuroModule = class PrematuroModule {
};
PrematuroModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prematuro_routing_module__WEBPACK_IMPORTED_MODULE_1__.PrematuroRoutingModule
        ],
        declarations: [_prematuro_component__WEBPACK_IMPORTED_MODULE_0__.PrematuroComponent]
    })
], PrematuroModule);



/***/ })

}]);
//# sourceMappingURL=src_app_prematuro_prematuro_module_ts.js.map