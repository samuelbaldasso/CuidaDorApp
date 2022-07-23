"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_howto_howto_module_ts"],{

/***/ 9014:
/*!***********************************************!*\
  !*** ./src/app/howto/howto-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowtoRoutingModule": () => (/* binding */ HowtoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _howto2_howto2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../howto2/howto2.component */ 1453);
/* harmony import */ var _howto3_howto3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../howto3/howto3.component */ 5522);
/* harmony import */ var _howto4_howto4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../howto4/howto4.component */ 8228);
/* harmony import */ var _howto5_howto5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../howto5/howto5.component */ 1411);
/* harmony import */ var _howto6_howto6_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../howto6/howto6.component */ 1407);
/* harmony import */ var _howto7_howto7_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../howto7/howto7.component */ 9052);
/* harmony import */ var _howto8_howto8_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../howto8/howto8.component */ 2151);
/* harmony import */ var _howto9_howto9_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../howto9/howto9.component */ 1149);
/* harmony import */ var _howto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./howto.component */ 3042);












const routes = [
    {
        path: 'how', component: _howto_component__WEBPACK_IMPORTED_MODULE_8__.HowtoComponent, children: [
            { path: 'how2', component: _howto2_howto2_component__WEBPACK_IMPORTED_MODULE_0__.Howto2Component },
            { path: 'how3', component: _howto3_howto3_component__WEBPACK_IMPORTED_MODULE_1__.Howto3Component },
            { path: 'how4', component: _howto4_howto4_component__WEBPACK_IMPORTED_MODULE_2__.Howto4Component },
            { path: 'how5', component: _howto5_howto5_component__WEBPACK_IMPORTED_MODULE_3__.Howto5Component },
            { path: 'how6', component: _howto6_howto6_component__WEBPACK_IMPORTED_MODULE_4__.Howto6Component },
            { path: 'how7', component: _howto7_howto7_component__WEBPACK_IMPORTED_MODULE_5__.Howto7Component },
            { path: 'how8', component: _howto8_howto8_component__WEBPACK_IMPORTED_MODULE_6__.Howto8Component },
            { path: 'how9', component: _howto9_howto9_component__WEBPACK_IMPORTED_MODULE_7__.Howto9Component },
        ]
    }
];
let HowtoRoutingModule = class HowtoRoutingModule {
};
HowtoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
    })
], HowtoRoutingModule);



/***/ }),

/***/ 4540:
/*!***************************************!*\
  !*** ./src/app/howto/howto.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowtoModule": () => (/* binding */ HowtoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _howto5_howto5_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../howto5/howto5.component */ 1411);
/* harmony import */ var _howto_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto-routing.module */ 9014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 1789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _howto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./howto.component */ 3042);
/* harmony import */ var _howto2_howto2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../howto2/howto2.component */ 1453);
/* harmony import */ var _howto3_howto3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../howto3/howto3.component */ 5522);
/* harmony import */ var _howto4_howto4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../howto4/howto4.component */ 8228);
/* harmony import */ var _howto6_howto6_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../howto6/howto6.component */ 1407);
/* harmony import */ var _howto7_howto7_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../howto7/howto7.component */ 9052);
/* harmony import */ var _howto8_howto8_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../howto8/howto8.component */ 2151);
/* harmony import */ var _howto9_howto9_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../howto9/howto9.component */ 1149);















let HowtoModule = class HowtoModule {
};
HowtoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule, _howto_routing_module__WEBPACK_IMPORTED_MODULE_1__.HowtoRoutingModule],
        declarations: [
            _howto_component__WEBPACK_IMPORTED_MODULE_2__.HowtoComponent,
            _howto2_howto2_component__WEBPACK_IMPORTED_MODULE_3__.Howto2Component,
            _howto3_howto3_component__WEBPACK_IMPORTED_MODULE_4__.Howto3Component,
            _howto4_howto4_component__WEBPACK_IMPORTED_MODULE_5__.Howto4Component,
            _howto5_howto5_component__WEBPACK_IMPORTED_MODULE_0__.Howto5Component,
            _howto6_howto6_component__WEBPACK_IMPORTED_MODULE_6__.Howto6Component,
            _howto7_howto7_component__WEBPACK_IMPORTED_MODULE_7__.Howto7Component,
            _howto8_howto8_component__WEBPACK_IMPORTED_MODULE_8__.Howto8Component,
            _howto9_howto9_component__WEBPACK_IMPORTED_MODULE_9__.Howto9Component
        ],
    })
], HowtoModule);



/***/ })

}]);
//# sourceMappingURL=src_app_howto_howto_module_ts.js.map