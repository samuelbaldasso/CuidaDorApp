"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_summary_summary_module_ts"],{

/***/ 3608:
/*!***************************************************!*\
  !*** ./src/app/summary/summary-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryRoutingModule": () => (/* binding */ SummaryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary.component */ 6155);




const routes = [
    {
        path: 'summary', component: _summary_component__WEBPACK_IMPORTED_MODULE_0__.SummaryComponent
    },
];
let SummaryRoutingModule = class SummaryRoutingModule {
};
SummaryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SummaryRoutingModule);



/***/ }),

/***/ 7001:
/*!*******************************************!*\
  !*** ./src/app/summary/summary.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryModule": () => (/* binding */ SummaryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 1789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary-routing.module */ 3608);
/* harmony import */ var _summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary.component */ 6155);







let SummaryModule = class SummaryModule {
};
SummaryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _summary_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummaryRoutingModule
        ],
        declarations: [_summary_component__WEBPACK_IMPORTED_MODULE_1__.SummaryComponent]
    })
], SummaryModule);



/***/ })

}]);
//# sourceMappingURL=src_app_summary_summary_module_ts.js.map