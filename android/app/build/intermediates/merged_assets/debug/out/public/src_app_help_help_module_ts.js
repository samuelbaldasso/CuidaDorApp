"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_help_help_module_ts"],{

/***/ 370:
/*!*********************************************!*\
  !*** ./src/app/help/help-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpRoutingModule": () => (/* binding */ HelpRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _help2_help2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../help2/help2.component */ 1048);
/* harmony import */ var _help3_help3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../help3/help3.component */ 8022);
/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help.component */ 665);






const routes = [
    {
        path: 'help', component: _help_component__WEBPACK_IMPORTED_MODULE_2__.HelpComponent, children: [
            { path: 'help2', component: _help2_help2_component__WEBPACK_IMPORTED_MODULE_0__.Help2Component },
            { path: 'help3', component: _help3_help3_component__WEBPACK_IMPORTED_MODULE_1__.Help3Component },
            // {path: 'pain4', component: Pain4Component},
            // {path: 'pain5', component: Pain5Component}
        ]
    }
];
let HelpRoutingModule = class HelpRoutingModule {
};
HelpRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], HelpRoutingModule);



/***/ }),

/***/ 6035:
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpModule": () => (/* binding */ HelpModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-routing.module */ 370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.component */ 665);
/* harmony import */ var _help2_help2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help2/help2.component */ 1048);
/* harmony import */ var _help3_help3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../help3/help3.component */ 8022);









let HelpModule = class HelpModule {
};
HelpModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _help_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpRoutingModule
        ],
        declarations: [_help_component__WEBPACK_IMPORTED_MODULE_1__.HelpComponent, _help2_help2_component__WEBPACK_IMPORTED_MODULE_2__.Help2Component, _help3_help3_component__WEBPACK_IMPORTED_MODULE_3__.Help3Component]
    })
], HelpModule);



/***/ })

}]);
//# sourceMappingURL=src_app_help_help_module_ts.js.map