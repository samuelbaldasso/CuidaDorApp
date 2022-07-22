"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ifprematuro_ifprematuro_module_ts"],{

/***/ 9915:
/*!***********************************************************!*\
  !*** ./src/app/ifprematuro/ifprematuro-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IfPrematuroRoutingModule": () => (/* binding */ IfPrematuroRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ifprematuro_ifprematuro_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ifprematuro/ifprematuro.component */ 4297);




const routes = [
    {
        path: 'ifprematuro', component: _ifprematuro_ifprematuro_component__WEBPACK_IMPORTED_MODULE_0__.IfprematuroComponent
    }
];
let IfPrematuroRoutingModule = class IfPrematuroRoutingModule {
};
IfPrematuroRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], IfPrematuroRoutingModule);



/***/ }),

/***/ 7466:
/*!***************************************************!*\
  !*** ./src/app/ifprematuro/ifprematuro.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IfPrematuroModule": () => (/* binding */ IfPrematuroModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ifprematuro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ifprematuro-routing.module */ 9915);
/* harmony import */ var _ifprematuro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ifprematuro.component */ 4297);







let IfPrematuroModule = class IfPrematuroModule {
};
IfPrematuroModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ifprematuro_routing_module__WEBPACK_IMPORTED_MODULE_0__.IfPrematuroRoutingModule
        ],
        declarations: [_ifprematuro_component__WEBPACK_IMPORTED_MODULE_1__.IfprematuroComponent]
    })
], IfPrematuroModule);



/***/ })

}]);
//# sourceMappingURL=src_app_ifprematuro_ifprematuro_module_ts.js.map