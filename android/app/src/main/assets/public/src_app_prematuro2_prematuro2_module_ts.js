"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_prematuro2_prematuro2_module_ts"],{

/***/ 7215:
/*!*********************************************************!*\
  !*** ./src/app/prematuro2/prematuro2-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prematuro2RoutingModule": () => (/* binding */ Prematuro2RoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _prematuro2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prematuro2.component */ 1278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);




const routes = [
    {
        path: 'prematuro2', component: _prematuro2_component__WEBPACK_IMPORTED_MODULE_0__.Prematuro2Component
    }
];
let Prematuro2RoutingModule = class Prematuro2RoutingModule {
};
Prematuro2RoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Prematuro2RoutingModule);



/***/ }),

/***/ 5569:
/*!*************************************************!*\
  !*** ./src/app/prematuro2/prematuro2.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prematuro2Module": () => (/* binding */ Prematuro2Module)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _prematuro2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prematuro2.component */ 1278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _prematuro2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prematuro2-routing.module */ 7215);







let Prematuro2Module = class Prematuro2Module {
};
Prematuro2Module = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prematuro2_routing_module__WEBPACK_IMPORTED_MODULE_1__.Prematuro2RoutingModule
        ],
        declarations: [_prematuro2_component__WEBPACK_IMPORTED_MODULE_0__.Prematuro2Component]
    })
], Prematuro2Module);



/***/ })

}]);
//# sourceMappingURL=src_app_prematuro2_prematuro2_module_ts.js.map