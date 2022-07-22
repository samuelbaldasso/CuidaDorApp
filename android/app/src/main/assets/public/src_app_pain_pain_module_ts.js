"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pain_pain_module_ts"],{

/***/ 5457:
/*!*********************************************!*\
  !*** ./src/app/pain/pain-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PainRoutingModule": () => (/* binding */ PainRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _pain2_pain2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pain2/pain2.component */ 9193);
/* harmony import */ var _pain3_pain3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pain3/pain3.component */ 361);
/* harmony import */ var _pain4_pain4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pain4/pain4.component */ 978);
/* harmony import */ var _pain5_pain5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pain5/pain5.component */ 2327);
/* harmony import */ var _pain_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pain.component */ 9873);








const routes = [
    {
        path: 'pain', component: _pain_component__WEBPACK_IMPORTED_MODULE_4__.PainComponent, children: [
            { path: 'pain2', component: _pain2_pain2_component__WEBPACK_IMPORTED_MODULE_0__.Pain2Component },
            { path: 'pain3', component: _pain3_pain3_component__WEBPACK_IMPORTED_MODULE_1__.Pain3Component },
            { path: 'pain4', component: _pain4_pain4_component__WEBPACK_IMPORTED_MODULE_2__.Pain4Component },
            { path: 'pain5', component: _pain5_pain5_component__WEBPACK_IMPORTED_MODULE_3__.Pain5Component }
        ]
    }
];
let PainRoutingModule = class PainRoutingModule {
};
PainRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    })
], PainRoutingModule);



/***/ }),

/***/ 2434:
/*!*************************************!*\
  !*** ./src/app/pain/pain.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PainModule": () => (/* binding */ PainModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _pain_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pain-routing.module */ 5457);
/* harmony import */ var _pain_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pain.component */ 9873);
/* harmony import */ var _pain2_pain2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pain2/pain2.component */ 9193);
/* harmony import */ var _pain3_pain3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pain3/pain3.component */ 361);
/* harmony import */ var _pain4_pain4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pain4/pain4.component */ 978);
/* harmony import */ var _pain5_pain5_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pain5/pain5.component */ 2327);











let PainModule = class PainModule {
};
PainModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _pain_routing_module__WEBPACK_IMPORTED_MODULE_0__.PainRoutingModule
        ],
        declarations: [_pain_component__WEBPACK_IMPORTED_MODULE_1__.PainComponent, _pain2_pain2_component__WEBPACK_IMPORTED_MODULE_2__.Pain2Component, _pain3_pain3_component__WEBPACK_IMPORTED_MODULE_3__.Pain3Component, _pain4_pain4_component__WEBPACK_IMPORTED_MODULE_4__.Pain4Component, _pain5_pain5_component__WEBPACK_IMPORTED_MODULE_5__.Pain5Component]
    })
], PainModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pain_pain_module_ts.js.map