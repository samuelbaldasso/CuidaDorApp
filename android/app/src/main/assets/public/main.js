(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4528:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about.component.html */ 9740);
/* harmony import */ var _about_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.scss */ 7374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() { }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_about_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutComponent);



/***/ }),

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 4528);
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help/help.component */ 665);
/* harmony import */ var _help2_help2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help2/help2.component */ 1048);
/* harmony import */ var _help3_help3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help3/help3.component */ 8022);
/* harmony import */ var _howto_howto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./howto/howto.component */ 8685);
/* harmony import */ var _howto2_howto2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./howto2/howto2.component */ 2597);
/* harmony import */ var _howto3_howto3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./howto3/howto3.component */ 2288);
/* harmony import */ var _howto4_howto4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./howto4/howto4.component */ 2509);
/* harmony import */ var _howto5_howto5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./howto5/howto5.component */ 3754);
/* harmony import */ var _howto6_howto6_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./howto6/howto6.component */ 5330);
/* harmony import */ var _howto7_howto7_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./howto7/howto7.component */ 4945);
/* harmony import */ var _howto8_howto8_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./howto8/howto8.component */ 5858);
/* harmony import */ var _howto9_howto9_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./howto9/howto9.component */ 9837);
/* harmony import */ var _ifprematuro_ifprematuro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ifprematuro/ifprematuro.component */ 4297);
/* harmony import */ var _ifprematuro2_ifprematuro2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ifprematuro2/ifprematuro2.component */ 4620);
/* harmony import */ var _pain_pain_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pain/pain.component */ 9873);
/* harmony import */ var _pain2_pain2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pain2/pain2.component */ 9193);
/* harmony import */ var _pain3_pain3_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pain3/pain3.component */ 361);
/* harmony import */ var _pain4_pain4_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pain4/pain4.component */ 978);
/* harmony import */ var _pain5_pain5_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pain5/pain5.component */ 2327);
/* harmony import */ var _prematuro_prematuro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./prematuro/prematuro.component */ 3081);
/* harmony import */ var _prematuro2_prematuro2_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./prematuro2/prematuro2.component */ 1278);
/* harmony import */ var _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./screen1/screen1.component */ 2777);
/* harmony import */ var _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./screen2/screen2.component */ 6310);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./summary/summary.component */ 1324);




























const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 8245)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'summary', component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_24__.SummaryComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_summary_summary_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./summary/summary.module */ 1354)).then(m => m.SummaryModule)
    },
    {
        path: 'screen1', component: _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_22__.Screen1Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_screen1_screen1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./screen1/screen1.module */ 6492)).then(m => m.Screen1Module)
    },
    {
        path: 'screen2', component: _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_23__.Screen2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_screen2_screen2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./screen2/screen2.module */ 6608)).then(m => m.Screen2Module)
    },
    {
        path: 'prematuro', component: _prematuro_prematuro_component__WEBPACK_IMPORTED_MODULE_20__.PrematuroComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_prematuro_prematuro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./prematuro/prematuro.module */ 6927)).then(m => m.PrematuroModule)
    },
    {
        path: 'prematuro2', component: _prematuro2_prematuro2_component__WEBPACK_IMPORTED_MODULE_21__.Prematuro2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_prematuro2_prematuro2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./prematuro2/prematuro2.module */ 5569)).then(m => m.Prematuro2Module)
    },
    {
        path: 'ifprematuro', component: _ifprematuro_ifprematuro_component__WEBPACK_IMPORTED_MODULE_13__.IfprematuroComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ifprematuro_ifprematuro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ifprematuro/ifprematuro.module */ 7466)).then(m => m.IfPrematuroModule)
    },
    {
        path: 'ifprematuro2', component: _ifprematuro2_ifprematuro2_component__WEBPACK_IMPORTED_MODULE_14__.Ifprematuro2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ifprematuro2_ifprematuro2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ifprematuro2/ifprematuro2.module */ 3228)).then(m => m.IfPrematuro2Module)
    },
    {
        path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 4671)).then(m => m.AboutModule)
    },
    {
        path: 'pain', component: _pain_pain_component__WEBPACK_IMPORTED_MODULE_15__.PainComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pain_pain_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pain/pain.module */ 2434)).then(m => m.PainModule)
    },
    {
        path: 'pain2', component: _pain2_pain2_component__WEBPACK_IMPORTED_MODULE_16__.Pain2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pain_pain_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pain/pain.module */ 2434)).then(m => m.PainModule)
    },
    {
        path: 'pain3', component: _pain3_pain3_component__WEBPACK_IMPORTED_MODULE_17__.Pain3Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pain_pain_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pain/pain.module */ 2434)).then(m => m.PainModule)
    },
    {
        path: 'pain4', component: _pain4_pain4_component__WEBPACK_IMPORTED_MODULE_18__.Pain4Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pain_pain_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pain/pain.module */ 2434)).then(m => m.PainModule)
    },
    {
        path: 'pain5', component: _pain5_pain5_component__WEBPACK_IMPORTED_MODULE_19__.Pain5Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pain_pain_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pain/pain.module */ 2434)).then(m => m.PainModule)
    },
    {
        path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_1__.HelpComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_help_help_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./help/help.module */ 6035)).then(m => m.HelpModule)
    },
    {
        path: 'help2', component: _help2_help2_component__WEBPACK_IMPORTED_MODULE_2__.Help2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_help_help_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./help/help.module */ 6035)).then(m => m.HelpModule)
    },
    {
        path: 'help3', component: _help3_help3_component__WEBPACK_IMPORTED_MODULE_3__.Help3Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_help_help_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./help/help.module */ 6035)).then(m => m.HelpModule)
    },
    {
        path: 'how', component: _howto_howto_component__WEBPACK_IMPORTED_MODULE_4__.HowtoComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 5367)).then(m => m.HowtoModule)
    },
    {
        path: 'how2', component: _howto2_howto2_component__WEBPACK_IMPORTED_MODULE_5__.Howto2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 5367)).then(m => m.HowtoModule)
    },
    {
        path: 'how3', component: _howto3_howto3_component__WEBPACK_IMPORTED_MODULE_6__.Howto3Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 5367)).then(m => m.HowtoModule)
    },
    {
        path: 'how4', component: _howto4_howto4_component__WEBPACK_IMPORTED_MODULE_7__.Howto4Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 5367)).then(m => m.HowtoModule)
    },
    {
        path: 'how5', component: _howto5_howto5_component__WEBPACK_IMPORTED_MODULE_8__.Howto5Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 5367)).then(m => m.HowtoModule)
    },
    {
        path: 'how6', component: _howto6_howto6_component__WEBPACK_IMPORTED_MODULE_9__.Howto6Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 5367)).then(m => m.HowtoModule)
    },
    {
        path: 'how7', component: _howto7_howto7_component__WEBPACK_IMPORTED_MODULE_10__.Howto7Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 5367)).then(m => m.HowtoModule)
    },
    {
        path: 'how8', component: _howto8_howto8_component__WEBPACK_IMPORTED_MODULE_11__.Howto8Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 5367)).then(m => m.HowtoModule)
    },
    {
        path: 'how9', component: _howto9_howto9_component__WEBPACK_IMPORTED_MODULE_12__.Howto9Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 5367)).then(m => m.HowtoModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_26__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_27__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);







let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 1048:
/*!******************************************!*\
  !*** ./src/app/help2/help2.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Help2Component": () => (/* binding */ Help2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_help2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./help2.component.html */ 3195);
/* harmony import */ var _help2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help2.component.scss */ 6750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Help2Component = class Help2Component {
    constructor() { }
    ngOnInit() { }
};
Help2Component.ctorParameters = () => [];
Help2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-help2',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_help2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_help2_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Help2Component);



/***/ }),

/***/ 8022:
/*!******************************************!*\
  !*** ./src/app/help3/help3.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Help3Component": () => (/* binding */ Help3Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_help3_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./help3.component.html */ 7690);
/* harmony import */ var _help3_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help3.component.scss */ 9484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Help3Component = class Help3Component {
    constructor() { }
    ngOnInit() { }
};
Help3Component.ctorParameters = () => [];
Help3Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-help3',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_help3_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_help3_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Help3Component);



/***/ }),

/***/ 665:
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpComponent": () => (/* binding */ HelpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_help_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./help.component.html */ 3239);
/* harmony import */ var _help_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.component.scss */ 7467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let HelpComponent = class HelpComponent {
    constructor() { }
    ngOnInit() { }
};
HelpComponent.ctorParameters = () => [];
HelpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-help',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_help_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_help_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HelpComponent);



/***/ }),

/***/ 2597:
/*!********************************************!*\
  !*** ./src/app/howto2/howto2.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto2Component": () => (/* binding */ Howto2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./howto2.component.html */ 5792);
/* harmony import */ var _howto2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto2.component.scss */ 5472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Howto2Component = class Howto2Component {
    constructor() { }
    ngOnInit() { }
};
Howto2Component.ctorParameters = () => [];
Howto2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto2',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_howto2_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto2Component);



/***/ }),

/***/ 2288:
/*!********************************************!*\
  !*** ./src/app/howto3/howto3.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto3Component": () => (/* binding */ Howto3Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto3_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./howto3.component.html */ 7224);
/* harmony import */ var _howto3_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto3.component.scss */ 7194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Howto3Component = class Howto3Component {
    constructor() { }
    ngOnInit() { }
};
Howto3Component.ctorParameters = () => [];
Howto3Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto3',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto3_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_howto3_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto3Component);



/***/ }),

/***/ 2509:
/*!********************************************!*\
  !*** ./src/app/howto4/howto4.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto4Component": () => (/* binding */ Howto4Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto4_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./howto4.component.html */ 2786);
/* harmony import */ var _howto4_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto4.component.scss */ 3294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Howto4Component = class Howto4Component {
    constructor() { }
    ngOnInit() { }
};
Howto4Component.ctorParameters = () => [];
Howto4Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto4',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto4_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_howto4_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto4Component);



/***/ }),

/***/ 3754:
/*!********************************************!*\
  !*** ./src/app/howto5/howto5.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto5Component": () => (/* binding */ Howto5Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto5_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./howto5.component.html */ 3804);
/* harmony import */ var _howto5_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto5.component.scss */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Howto5Component = class Howto5Component {
    constructor() { }
    ngOnInit() { }
};
Howto5Component.ctorParameters = () => [];
Howto5Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto5',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto5_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_howto5_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto5Component);



/***/ }),

/***/ 5330:
/*!********************************************!*\
  !*** ./src/app/howto6/howto6.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto6Component": () => (/* binding */ Howto6Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto6_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./howto6.component.html */ 7610);
/* harmony import */ var _howto6_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto6.component.scss */ 514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Howto6Component = class Howto6Component {
    constructor() { }
    ngOnInit() { }
};
Howto6Component.ctorParameters = () => [];
Howto6Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto6',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto6_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_howto6_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto6Component);



/***/ }),

/***/ 4945:
/*!********************************************!*\
  !*** ./src/app/howto7/howto7.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto7Component": () => (/* binding */ Howto7Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto7_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./howto7.component.html */ 1118);
/* harmony import */ var _howto7_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto7.component.scss */ 3905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Howto7Component = class Howto7Component {
    constructor() { }
    ngOnInit() { }
};
Howto7Component.ctorParameters = () => [];
Howto7Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto7',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto7_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_howto7_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto7Component);



/***/ }),

/***/ 5858:
/*!********************************************!*\
  !*** ./src/app/howto8/howto8.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto8Component": () => (/* binding */ Howto8Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto8_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./howto8.component.html */ 9173);
/* harmony import */ var _howto8_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto8.component.scss */ 7405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Howto8Component = class Howto8Component {
    constructor() { }
    ngOnInit() { }
};
Howto8Component.ctorParameters = () => [];
Howto8Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto8',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto8_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_howto8_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto8Component);



/***/ }),

/***/ 9837:
/*!********************************************!*\
  !*** ./src/app/howto9/howto9.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto9Component": () => (/* binding */ Howto9Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto9_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./howto9.component.html */ 4098);
/* harmony import */ var _howto9_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto9.component.scss */ 3746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Howto9Component = class Howto9Component {
    constructor() { }
    ngOnInit() { }
};
Howto9Component.ctorParameters = () => [];
Howto9Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto9',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto9_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_howto9_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto9Component);



/***/ }),

/***/ 8685:
/*!******************************************!*\
  !*** ./src/app/howto/howto.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowtoComponent": () => (/* binding */ HowtoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./howto.component.html */ 95);
/* harmony import */ var _howto_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto.component.scss */ 5568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let HowtoComponent = class HowtoComponent {
    constructor() { }
    ngOnInit() { }
};
HowtoComponent.ctorParameters = () => [];
HowtoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_howto_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_howto_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HowtoComponent);



/***/ }),

/***/ 4620:
/*!********************************************************!*\
  !*** ./src/app/ifprematuro2/ifprematuro2.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ifprematuro2Component": () => (/* binding */ Ifprematuro2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ifprematuro2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ifprematuro2.component.html */ 9267);
/* harmony import */ var _ifprematuro2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ifprematuro2.component.scss */ 2583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Ifprematuro2Component = class Ifprematuro2Component {
    constructor() { }
    ngOnInit() { }
};
Ifprematuro2Component.ctorParameters = () => [];
Ifprematuro2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ifprematuro2',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ifprematuro2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ifprematuro2_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Ifprematuro2Component);



/***/ }),

/***/ 4297:
/*!******************************************************!*\
  !*** ./src/app/ifprematuro/ifprematuro.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IfprematuroComponent": () => (/* binding */ IfprematuroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ifprematuro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ifprematuro.component.html */ 7485);
/* harmony import */ var _ifprematuro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ifprematuro.component.scss */ 9901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let IfprematuroComponent = class IfprematuroComponent {
    constructor() { }
    ngOnInit() { }
};
IfprematuroComponent.ctorParameters = () => [];
IfprematuroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ifprematuro',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ifprematuro_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ifprematuro_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IfprematuroComponent);



/***/ }),

/***/ 9193:
/*!******************************************!*\
  !*** ./src/app/pain2/pain2.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pain2Component": () => (/* binding */ Pain2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pain2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pain2.component.html */ 5592);
/* harmony import */ var _pain2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pain2.component.scss */ 5582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Pain2Component = class Pain2Component {
    constructor() { }
    ngOnInit() { }
};
Pain2Component.ctorParameters = () => [];
Pain2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pain2',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pain2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pain2_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Pain2Component);



/***/ }),

/***/ 361:
/*!******************************************!*\
  !*** ./src/app/pain3/pain3.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pain3Component": () => (/* binding */ Pain3Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pain3_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pain3.component.html */ 9596);
/* harmony import */ var _pain3_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pain3.component.scss */ 913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Pain3Component = class Pain3Component {
    constructor() { }
    ngOnInit() { }
};
Pain3Component.ctorParameters = () => [];
Pain3Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pain3',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pain3_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pain3_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Pain3Component);



/***/ }),

/***/ 978:
/*!******************************************!*\
  !*** ./src/app/pain4/pain4.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pain4Component": () => (/* binding */ Pain4Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pain4_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pain4.component.html */ 751);
/* harmony import */ var _pain4_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pain4.component.scss */ 3950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Pain4Component = class Pain4Component {
    constructor() { }
    ngOnInit() { }
};
Pain4Component.ctorParameters = () => [];
Pain4Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pain4',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pain4_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pain4_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Pain4Component);



/***/ }),

/***/ 2327:
/*!******************************************!*\
  !*** ./src/app/pain5/pain5.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pain5Component": () => (/* binding */ Pain5Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pain5_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pain5.component.html */ 5477);
/* harmony import */ var _pain5_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pain5.component.scss */ 7789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Pain5Component = class Pain5Component {
    constructor() { }
    ngOnInit() { }
};
Pain5Component.ctorParameters = () => [];
Pain5Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pain5',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pain5_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pain5_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Pain5Component);



/***/ }),

/***/ 9873:
/*!****************************************!*\
  !*** ./src/app/pain/pain.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PainComponent": () => (/* binding */ PainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pain_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pain.component.html */ 9178);
/* harmony import */ var _pain_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pain.component.scss */ 194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let PainComponent = class PainComponent {
    constructor() { }
    ngOnInit() { }
};
PainComponent.ctorParameters = () => [];
PainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pain',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pain_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pain_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PainComponent);



/***/ }),

/***/ 1278:
/*!****************************************************!*\
  !*** ./src/app/prematuro2/prematuro2.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prematuro2Component": () => (/* binding */ Prematuro2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_prematuro2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./prematuro2.component.html */ 1208);
/* harmony import */ var _prematuro2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prematuro2.component.scss */ 9044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Prematuro2Component = class Prematuro2Component {
    constructor() { }
    ngOnInit() { }
};
Prematuro2Component.ctorParameters = () => [];
Prematuro2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-prematuro2',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_prematuro2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_prematuro2_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Prematuro2Component);



/***/ }),

/***/ 3081:
/*!**************************************************!*\
  !*** ./src/app/prematuro/prematuro.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrematuroComponent": () => (/* binding */ PrematuroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_prematuro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./prematuro.component.html */ 1589);
/* harmony import */ var _prematuro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prematuro.component.scss */ 4518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let PrematuroComponent = class PrematuroComponent {
    constructor() { }
    ngOnInit() { }
};
PrematuroComponent.ctorParameters = () => [];
PrematuroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-prematuro',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_prematuro_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_prematuro_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrematuroComponent);



/***/ }),

/***/ 2777:
/*!**********************************************!*\
  !*** ./src/app/screen1/screen1.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen1Component": () => (/* binding */ Screen1Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_screen1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./screen1.component.html */ 6241);
/* harmony import */ var _screen1_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen1.component.scss */ 3784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Screen1Component = class Screen1Component {
    constructor() { }
    ngOnInit() { }
};
Screen1Component.ctorParameters = () => [];
Screen1Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-screen1',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_screen1_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_screen1_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Screen1Component);



/***/ }),

/***/ 6310:
/*!**********************************************!*\
  !*** ./src/app/screen2/screen2.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen2Component": () => (/* binding */ Screen2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_screen2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./screen2.component.html */ 2858);
/* harmony import */ var _screen2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen2.component.scss */ 773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Screen2Component = class Screen2Component {
    constructor() { }
    ngOnInit() { }
};
Screen2Component.ctorParameters = () => [];
Screen2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-screen2',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_screen2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_screen2_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Screen2Component);



/***/ }),

/***/ 1324:
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_summary_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./summary.component.html */ 5989);
/* harmony import */ var _summary_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary.component.scss */ 8833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let SummaryComponent = class SummaryComponent {
    constructor() { }
    ngOnInit() { }
};
SummaryComponent.ctorParameters = () => [];
SummaryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-summary',
        template: _C_Users_sbaldass_Downloads_app_cuida_dor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_summary_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_summary_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SummaryComponent);



/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9740:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/about/about.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h1>Obrigado por chegar até aqui!</h1>\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      Parabéns, você chegou ao final do aplicativo! Esperamos que vocês, pai,\r\n      mãe e família, tenham aprendido mais sobre o importante papel da família\r\n      na prevenção e alívio da dor do bebê prematuro.\r\n    </p>\r\n\r\n    <p>\r\n      Este material foi desenvolvido por Enfermeiras especialistas em dor e\r\n      Cuidado Intensivo Neonatal, estudante de Enfermagem e profissionais das\r\n      áreas de Tecnologia e Design, pensando em toda a família do bebê\r\n      prematuro.\r\n    </p>\r\n\r\n    <!-- <p>\r\n      Caso tenha permanecido com algum dúvida ou alguma sugestão que irá\r\n      contribuir com outros pais, mães e familiares o espaço abaixo está\r\n      disponível!\r\n    </p> -->\r\n  </div>\r\n\r\n  <!-- <div class=\"button\">\r\n    <div id=\"but1\">\r\n      <p>NOME:</p>\r\n      <p>EMAIL:</p>\r\n      <p>SUGESTÃO:</p>\r\n    </div>\r\n  </div> -->\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but2\" routerLink=\"/summary\">MENU</a>\r\n</div>\r\n");

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 3195:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/help2/help2.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 4 - VOCÊS PODEM AJUDAR O SEU FILHO OU FILHA!</h3>\r\n    <h1>Vocês podem ajudar o seu bebê!</h1>\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div> -->\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      É fundamental que vocês conheçam mais sobre as respostas de dor do seu\r\n      bebê durante os procedimentos e que façam perguntas a equipe! Tirem as\r\n      dúvidas quanto a realização dos procedimentos e o tratamento do seu filho\r\n      ou sua filha!\r\n    </p>\r\n\r\n    <p>\r\n      <strong\r\n        >A equipe de saúde está aqui para ajudar vocês!\r\n      </strong>\r\n    </p>\r\n\r\n    <p>\r\n      <strong>Lembre-se: </strong><u>Todo o recém-nascido tem o\r\n        direito de não sentir dor, quando existem\r\n        meios para evitá-la!</u> Está escrito no\r\n        Estatuto da Criança e do AdolescenteLei 8069/1990, a Resolução no 41 de\r\n        1995 – Direitos das Crianças e\r\n        Adolescentes Hospitalizados, e a\r\n        Declaração Universal de Direitos para o\r\n        Bebê Prematuro.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/help3\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 7690:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/help3/help3.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 4 - VOCÊS PODEM AJUDAR O SEU FILHO OU FILHA!</h3>\r\n    <h1>Como ajudar o meu filho ou filha antes do procedimento?</h1>\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div> -->\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n     <strong>1º</strong> Importante mãe e pai estarem calmos, pois\r\n     a ansiedade e o nervosismo podem ser\r\n     sentidos pelo seu filho ou filha. Tirar todas as\r\n     dúvidas com a equipe de saúde que irá\r\n     realizar o procedimento. A informação é\r\n     fundamental para vocês se sentirem seguros.\r\n    </p>\r\n\r\n    <p>\r\n      <strong>2º</strong> Entender a mímica facial e o movimento do\r\n      corpo do seu bebê é essencial! Assim vocês\r\n      podem identificar quando seu bebê sente ou\r\n      não dor e ajudá-lo.\r\n\r\n     </p>\r\n\r\n     <p>\r\n      <strong>3º</strong> Ajudar o seu filho ou filha a se acalmar,\r\n      caso ele esteja chorando muito ou agitado.\r\n     <strong>Mas como?</strong>\r\n\r\n     </p>\r\n  </div>\r\n\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/14.jpg\" alt=\"\" />\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/summary\">MENU</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 3239:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/help/help.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 4 - VOCÊS PODEM AJUDAR O SEU FILHO OU FILHA!</h3>\r\n    <h1>Sim! Vocês podem ajudar o seu bebê!</h1>\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div> -->\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      A participação de vocês pais reduz a\r\n      exposição do recém-nascido ao desconforto e\r\n      ao estresse. Vocês podem ajudar seu filho\r\n      sua filha através do toque, posição canguru,\r\n      comunicação corporal e não verbal afetiva,\r\n      falar com uma voz carinhosa durante os\r\n      momentos de aproximação e interação.\r\n    </p>\r\n\r\n    <p>\r\n      <strong>A equipe de saúde estará sempre com vocês,\r\n        apoiando e ajudando!\r\n        </strong>\r\n    </p>\r\n\r\n    <p>\r\n      Vocês PODEM, caso desejem e se sintam\r\n      seguros, participar estando junto ao seu filho\r\n      ou sua filha durante a realização de\r\n      procedimentos dolorosos.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/27.png\" alt=\"\" />\r\n    <!-- <img src=\"../../assets/imgs/12.png\" alt=\"\" /> -->\r\n  </div>\r\n\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/help2\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 5792:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/howto2/howto2.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>\r\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\r\n      DOLOROSO E/OU ESTRESSANTE?\r\n    </h3>\r\n    <h1>Durante o procedimento:</h1>\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n    <!-- <ul>\r\n      <li>\r\n        Procure olhar nos olhos de seu filho ou sua filha, quando estiverem\r\n        abertos.\r\n      </li>\r\n      <li>\r\n        Converse com ele ou ela quanto ao procedimento, e que vocês estarão\r\n        juntos! A voz materna/paterna é uma ponte importante para a ligação\r\n        emocional e afetiva entre os pais e o prematuro.\r\n      </li>\r\n      <li>Cantar baixinho também pode acalmar seu bebê.</li>\r\n      <li>\r\n        Ao tocar seu filho, sua filha evitar mudanças súbitas de postura ou\r\n        realizá-las com ele ou ela bem aconchegado em flexão e com as mãos\r\n        próximas à boca.\r\n      </li>\r\n      <li>\r\n        Vocês devem estar em uma posição bem confortável, de preferência\r\n        sentados para dar o colo materno ou paterno.\r\n      </li>\r\n      <li>\r\n        Sempre transmitir segurança e conforto através da voz e do toque das\r\n        mãos.\r\n      </li>\r\n    </ul> -->\r\n\r\n    <p>A equipe de enfermagem e os neonatologistas\r\n      sempre irão ajudá-los a aprender formas de\r\n      tocar e confortar o seu filho ou sua filha até\r\n      que vocês se sintam seguros para estarem\r\n      fazendo isso sozinhos.\r\n      </p>\r\n\r\n      <h5>SE SEU FILHO OU FILHA NÃO PUDER SAIR DA\r\n        INCUBADORA DURANTE O PROCEDIMENTO:</h5>\r\n  </div>\r\n\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/15.png\" alt=\"\">\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n   <p>A equipe de saúde irá orientar vocês pais a\r\n    utilizar algumas medidas:\r\n    </p>\r\n    <p>1.O toque positivo – parado.</p>\r\n    <p>2.A contenção facilitada.</p>\r\n    <p>3.Enrolamento.</p>\r\n    <p>4.Sucção Não Nutritiva com dedo mínimo\r\n      enluvado.</p>\r\n    <p>5. Glicose Oral a 25% ou leite da própria mãe\r\n      associado à sucção não nutritiva.\r\n      </p>\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/how3\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 7224:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/howto3/howto3.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>\r\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\r\n      DOLOROSO E/OU ESTRESSANTE?\r\n    </h3>\r\n    <h1>Como isso irá ocorrer?</h1>\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      <strong>1. O toque positivo – parado,</strong> envolve a colocação das\r\n      mãos paradas sobre o corpo do recém-nascido, usando toque firme e com\r\n      pressão constante. Uma mão envolve a cabeça, a outra contém os pés ou as\r\n      mãos.\r\n    </p>\r\n\r\n    <p>\r\n     <strong>2. A contenção facilitada,</strong> é uma contenção motora gentil dos braços e das\r\n      pernas em flexão, posicionados em direção à linha média, próximos do\r\n      tronco e da face, em decúbito lateral ou supino. A contenção é firme, mas\r\n      elástica. Importante fazer com a ajuda de um dos profissionais de saúde.\r\n    </p>\r\n\r\n    <p>\r\n     <strong>3. O enrolamento</strong> consiste em segurar os\r\n      braços e as pernas em posição fletida, mãos\r\n      próximas à boca. Deve ser firme o suficiente\r\n      para não permitir o deslocamento do tecido\r\n      usado, a fim de evitar o risco de sufocamento.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/16.jpg\" alt=\"\" />\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/how4\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 2786:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/howto4/howto4.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>\r\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\r\n      DOLOROSO E/OU ESTRESSANTE?\r\n    </h3>\r\n    <h1>Como isso irá ocorrer?</h1>\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      4. Na <strong>Sucção Não Nutritiva com dedo mínimo enluvado</strong> o\r\n      dedo materno ou paterno enluvado deve ser introduzido na boca do\r\n      recémnascido e deve ser mantido durante todo o procedimento.\r\n    </p>\r\n\r\n    <p>\r\n      Quando o recém-nascido suga o dedo enluvado isso estimula o reflexo de\r\n      sucção, além de liberar Serotonina conhecida como o hormônio da felicidade\r\n      regulando o ritmo cardíaco, sono, apetite, memória e a temperatura do\r\n      corpo.\r\n    </p>\r\n\r\n    <p>\r\n      A Sucção Não Nutritiva pode ser associada as soluções adocicadas: glicose\r\n      oral a 25% e leite humano ordenhado da própria mãe, potencializando seu\r\n      efeito.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/17.png\" alt=\"\" />\r\n    <img src=\"../../assets/imgs/29.png\" alt=\"\" />\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/how5\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 3804:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/howto5/howto5.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>\r\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\r\n      DOLOROSO E/OU ESTRESSANTE?\r\n    </h3>\r\n    <h1>Como isso irá ocorrer?</h1>\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      5. As soluções adocicadas podem ser glicose oral a 25% e leite humano\r\n      ordenhado da própria mãe.\r\n    </p>\r\n\r\n    <p>\r\n      <strong>Atenção:</strong> A Glicose oral a 25% é sempre recomendada pelo\r\n      médico. É administrada lentamente na porção anterior da língua; após dois\r\n      minutos o procedimento é realizado. Uma nova dose pode ser administrada\r\n      durante o procedimento. Não devem ser utilizadas mais de três doses\r\n      durante um único procedimento.\r\n    </p>\r\n\r\n    <p>\r\n      No caso do <u>Leite Humano Ordenhado (LHO)</u> você, mãe, pode retirar o\r\n      colostro/leite ao lado da incubadora do seu filho ou filha e, administrar\r\n      lentamente na porção anterior da língua.\r\n    </p>\r\n\r\n    <p>A Glicose Oral a 25% ou leite da própria mãe\r\n      ordenhado associado à sucção não nutritiva\r\n      dois minutos antes do procedimento, na parte\r\n      anterior da língua também é recomendado. Os\r\n      pais sempre devem, assim que possível,\r\n      utilizar o contato pele a pele ou a\r\n      amamentação.\r\n      </p>\r\n  </div>\r\n\r\n  <!-- <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/17.png\" alt=\"\" />\r\n    <img src=\"../../assets/imgs/29.png\" alt=\"\" />\r\n  </div> -->\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/how6\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 7610:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/howto6/howto6.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <div class=\"subtitle\">\n    <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Durante o procedimento:</h1>\n\n    <h4>\n      SE SEU FILHO OU FILHA PUDER SAIR DA INCUBADORA DURANTE O PROCEDIMENTO:\n    </h4>\n  </div>\n\n  <div class=\"p\">\n    <p>\n      <strong>1. Posição Canguru ou Contato pele a pele:</strong>\n      Consiste em manter o RN, em contato pele a pele, somente de fraldas, meias\n      e gorro na posição vertical junto ao seu tórax ou peito, envolvidos por\n      uma manta ou camisola aguardando o tempo mínimo necessário para respeitar\n      a estabilização do RN e pelo tempo máximo que ambos entenderem ser\n      prazeroso e suficiente.\n    </p>\n\n    <p>\n      Em contato pele a pele ou posição canguru o seu filho, sua filha está\n      aquecido, ouvindo os batimentos cardíacos (sons do coração) e sentindo o\n      cheiro materno/paterno o que promove uma sensação de conforto e segurança,\n      sendo capaz de acalmá-lo durante a realização dos procedimentos dolorosos.\n    </p>\n\n   \n  </div>\n\n  <!-- <div class=\"photo\">\n    <img src=\"../../assets/imgs/17.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/29.png\" alt=\"\" />\n  </div> -->\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/how7\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n");

/***/ }),

/***/ 1118:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/howto7/howto7.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <div class=\"subtitle\">\n    <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Durante o procedimento:</h1>\n  </div>\n\n  <div class=\"p\">\n    <ul>\n      <li> É muito importante que após o procedimento seu filho ou filha permaneça em\n        contato pele a pele no mínimo uma hora.</li>\n\n    <li>\n      Não se preocupem! A equipe de saúde está treinada para orientar vocês de\n      maneira segura.\n    </li>\n  </ul>\n  </div>\n\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/18.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/19.png\" alt=\"\" />\n  </div>\n\n  <div class=\"photo-solo\">\n    <img src=\"../../assets/imgs/20.png\" alt=\"\" />\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/how8\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n");

/***/ }),

/***/ 9173:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/howto8/howto8.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <div class=\"subtitle\">\n    <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Durante o procedimento:</h1>\n  </div>\n\n  <div class=\"p\">\n    <p>\n      <strong>2. Amamentação: </strong>\n    </p>\n\n    <p>\n      A amamentação é uma medida muito importante que além de promover todos os\n      nutrientes necessários para o crescimento e desenvolvimento do seu filho\n      ou filha está associada a muitos outros benefícios, sendo um deles o\n      alívio da dor quando realizada antes, durante e após procedimentos\n      dolorosos.\n    </p>\n\n    <p>\n      Em contato pele a pele ou posição canguru o seu filho, sua filha está\n      aquecido, ouvindo os batimentos cardíacos (sons do coração) e sentindo o\n      cheiro materno/paterno o que promove uma sensação de conforto e segurança,\n      sendo capaz de acalmá-lo durante a realização dos procedimentos dolorosos.\n    </p>\n\n    <p>\n      É importante consultar os médicos e enfermeiros que estão cuidando de seu\n      filho ou filha para saber se ele ou ela já é capaz de receber o leite\n      materno através do seio pois para isso ele ou ela precisa ser capaz de\n      sugar o seio, respirar e deglutir o leite ao mesmo tempo.\n    </p>\n  </div>\n\n  <h4>\n    A EQUIPE DE SAÚDE VAI APOIAR A AMAMENTAÇÃO SEMPRE!\n  </h4>\n\n  <!-- <div class=\"photo\">\n    <img src=\"../../assets/imgs/17.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/29.png\" alt=\"\" />\n  </div> -->\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/how9\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n");

/***/ }),

/***/ 4098:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/howto9/howto9.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <div class=\"subtitle\">\n    <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Durante o procedimento:</h1>\n  </div>\n\n  <div class=\"p\">\n    <p>\n      Para que esse momento seja confortável tanto para você, mãe, quanto para o\n      seu filho ou filha é importante que você esteja em poltrona confortável\n      próximo a incubadora, ou se estiver na cama a cabeceira deve estar elevada\n      permitindo um posicionamento confortável e seguro.\n    </p>\n\n    <p>\n      <strong\n        >A amamentação deve ser iniciada cerca de 5 minutos ANTES do início do\n        procedimento doloroso e permanecer todo o tempo DURANTE o procedimento\n        doloroso. Após o procedimento o bebê deve permanecer no seio materno até\n        estar organizado, saciado e pleno.</strong\n      >\n    </p>\n  </div>\n\n  <!-- <div class=\"photo\">\n    <img src=\"../../assets/imgs/18.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/19.png\" alt=\"\" />\n  </div> -->\n\n  <div class=\"photo-solo\">\n    <img src=\"../../assets/imgs/21.jpg\" alt=\"\" />\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/summary\">MENU</a>\n  </div>\n</div>\n");

/***/ }),

/***/ 95:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/howto/howto.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>\r\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\r\n      DOLOROSO E/OU ESTRESSANTE?\r\n    </h3>\r\n    <h1>Antes do procedimento:</h1>\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n    <ul>\r\n      <li>\r\n        Procure olhar nos olhos de seu filho ou sua filha, quando estiverem\r\n        abertos.\r\n      </li>\r\n      <li>\r\n        Converse com ele ou ela quanto ao procedimento, e que vocês estarão\r\n        juntos! A voz materna/paterna é uma ponte importante para a ligação\r\n        emocional e afetiva entre os pais e o prematuro.\r\n      </li>\r\n      <li>Cantar baixinho também pode acalmar seu bebê.</li>\r\n      <li>\r\n        Ao tocar seu filho, sua filha evitar mudanças súbitas de postura ou\r\n        realizá-las com ele ou ela bem aconchegado em flexão e com as mãos\r\n        próximas à boca.\r\n      </li>\r\n      <li>\r\n        Vocês devem estar em uma posição bem confortável, de preferência\r\n        sentados para dar o colo materno ou paterno.\r\n      </li>\r\n      <li>\r\n        Sempre transmitir segurança e conforto através da voz e do toque das\r\n        mãos.\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/how2\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 9267:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ifprematuro2/ifprematuro2.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 2: NASCEU PREMATURO. . . E AGORA?</h3>\r\n    <h1>Nasceu prematuro e agora? Como será?</h1>\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div> -->\r\n  <!--\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/2.jpg\" alt=\"\" />\r\n  </div> -->\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      No ambiente da UTIN os recém-nascidos prematuros podem ser expostos a\r\n      luzes intensas e sons/ruídos fortes e submetidos a procedimentos dolorosos\r\n      várias vezes ao dia, tais como: aspiração da boca, nariz ou traqueia\r\n      através de um tubo; remoção de curativos da pele; punção arterial e venosa\r\n      para coleta de sangue e administração de medicamentos; punção do calcâneo.\r\n    </p>\r\n\r\n    <p>\r\n     <strong>Lembre-se: </strong>Todos os prematuros necessitam de cuidados especiais realizados\r\n      pela equipe de saúde. Quanto mais imaturo o prematuro for, maior é o\r\n      número de procedimentos dolorosos que ele/ela será submetido, e maior a\r\n      sua exposição à dor. Cada procedimento é importante para melhora e\r\n      recuperação do seu filho/filha, mas muitos deles provocam sensações\r\n      desagradáveis, que podem gerar dor.\r\n    </p>\r\n\r\n    <p>\r\n     <strong>Mas vocês podem aprender a ajudar seu filho ou sua filha quando ele sente\r\n      dor! Você sabia disso?</strong>\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/summary\">MENU</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 7485:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ifprematuro/ifprematuro.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 2: NASCEU PREMATURO. . . E AGORA?</h3>\r\n    <h1>Nasceu prematuro e agora? Como será?</h1>\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div> -->\r\n  <!--\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/2.jpg\" alt=\"\" />\r\n  </div> -->\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      Quando um bebê nasce prematuro é muito comum que os pais sintam medo ou\r\n      angústia, ansiedade e até mesmo culpa.\r\n      <strong> Mas vocês não estarão sozinhos! </strong> Toda a equipe de saúde\r\n      da Unidade de Terapia Intensiva Neonatal (UTIN) estará com vocês!\r\n    </p>\r\n\r\n    <p>\r\n      Fiquem tranquilos, pois a equipe de saúde <strong>SEMPRE</strong> irá\r\n      conversar com vocês antes do encontro com seu filho ou sua filha na UTIN,\r\n      informando sobre as condições clínicas e comportamentais de seu bebê.\r\n    </p>\r\n\r\n  <p>\r\n    É importante dizer que, dependendo da classificação do prematuro, seu filho\r\n    ou sua filha poderá passar um longo período internado na UTIN, pois seus\r\n    órgãos como o coração, pulmão e cérebro ainda não estão maduros o suficiente\r\n    e poderão necessitar de algum tipo de cuidado especial.\r\n  </p>\r\n  </div>\r\n  \r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/ifprematuro2\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 5592:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pain2/pain2.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 3 - O MEU FILHO/FILHA PODE SENTIR DOR?</h3>\r\n    <h1>Mas como isso ocorre?</h1>\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div> -->\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      Após um procedimento doloroso o cérebro do recém-nascido recebe a mensagem\r\n      da dor e os neurônios (células presentes no cérebro) transmitem os sinais\r\n      de dor para os músculos e demais órgãos do corpo como: pulmão, coração e\r\n      pele.\r\n    </p>\r\n\r\n    <p>\r\n      Dessa forma, os prematuros respondem a esse estímulo e\r\n      <strong\r\n        >expressam a sua dor através de uma linguagem própria chamada de\r\n        linguagem não verbal.</strong\r\n      >\r\n    </p>\r\n\r\n    <div class=\"photo\">\r\n      <img src=\"../../assets/imgs/8.png\" alt=\"\" />\r\n    </div>\r\n\r\n    <p>\r\n      O estímulo nervoso, produzido pelo procedimento, percorre o SN do bebê e\r\n      desencadeia uma série de respostas em seu corpo.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/pain3\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 9596:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pain3/pain3.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 3 - O MEU FILHO/FILHA PODE SENTIR DOR?</h3>\r\n    <h1>Como o prematuro reage a dor?</h1>\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div> -->\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      O recém-nascido não fala, mas ele possui uma linguagem não verbal. Essa\r\n      linguagem pode ser expressa através:\r\n    </p>\r\n\r\n    <p>\r\n      <strong>1) Mímica facial:</strong> O prematuro apresenta: contração da\r\n      testa com abaixamento das sobrancelhas, estreitamento das pálpebras e/ou\r\n      fechamento dos olhos, nariz franzido e/ou bochechas levantadas, boca\r\n      entreaberta e/ou lábios esticados e língua esticada com as bordas tensas.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/9.png\" alt=\"\" />\r\n    <img src=\"../../assets/imgs/10.png\" alt=\"\" />\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      <strong>2) Sono e vigília:</strong> Os bebes prematuros reagem a dor\r\n      através dos estados de sono – profundo ou irregular e vigília – olhos bem\r\n      abertos e atentos. O prematuro pode dormir fácil ou apresentar dificuldade\r\n      para pegar no sono tendo sonecas curtas e agitadas ou até mesmo não\r\n      dormindo.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/pain4\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 751:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pain4/pain4.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 3 - O MEU FILHO/FILHA PODE SENTIR DOR?</h3>\r\n    <h1>Como o prematuro reage a dor?</h1>\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      <strong>3) Movimentos corporais:</strong> O recém-nascido pode apresentar\r\n      braços e pernas agitadas, rigidez e arqueamento do tórax. Abertura das\r\n      mãos com os dedos estendidos e separados. Dedos fletidos e fortemente\r\n      fechados sobre a palma das mãos formando deixando a mão fechada (SBP,\r\n      2018).\r\n    </p>\r\n\r\n    <p>\r\n      <strong>4) Choro ou choramingar:</strong> 50% dos recémnascidos não choram\r\n      durante um procedimento doloroso. O choro é pouco específico, podendo ser\r\n      desencadeado por outros estímulos como fome e frio. O prematuro pode\r\n      apresentar ausência de choro, gemência ou choro mínimo com estímulo\r\n      doloroso. Irritabilidade ou choro intermitente que pode ser consolado ou\r\n      choro alto ou silencioso contínuo inconsolável.\r\n    </p>\r\n\r\n    <p>\r\n     <strong>Atenção!</strong> Quanto menor o prematuro, menor poderá ser a sua expressão facial\r\n      de dor, ou seja, pode expressar esses sinais sutilmente. Sendo mais\r\n      difícil de identificar que ele(a) está sentindo dor. O bebê pode ficar\r\n      quieto ou parado, <strong><u>mas isso não quer dizer que não sente dor.</u></strong>\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/pain5\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 5477:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pain5/pain5.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 3 - O MEU FILHO/FILHA PODE SENTIR DOR?</h3>\r\n    <h1>Como o prematuro reage a dor?</h1>\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div> -->\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      <strong\r\n        ><u\r\n          >Estar atento aos sinais de comportamento do seu filho/filha é\r\n          essencial para ajudá-lo!</u\r\n        ></strong\r\n      >\r\n    </p>\r\n\r\n    <p>\r\n     <strong>5) Sinais de contato e consolo:</strong> Importante observar <u>sinais de contato</u>\r\n      como: se está atento à voz, apresenta tensão durante a interação, chora à\r\n      mínima manipulação, ou não há contato, geme à manipulação.\r\n    </p>\r\n\r\n    <p>E os <u>sinais de consolo</u> como: se está quieto e\r\n      relaxado, ou acalma rápido com voz, carinho\r\n      ou sucção, ou acalma com dificuldade, ou não\r\n      acalma, ou suga desesperadamente.</p>\r\n  </div>\r\n\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/11.png\" alt=\"\" />\r\n    <img src=\"../../assets/imgs/12.png\" alt=\"\" />\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p>\r\n      <strong>2) Sono e vigília:</strong> Os bebes prematuros reagem a dor\r\n      através dos estados de sono – profundo ou irregular e vigília – olhos bem\r\n      abertos e atentos. O prematuro pode dormir fácil ou apresentar dificuldade\r\n      para pegar no sono tendo sonecas curtas e agitadas ou até mesmo não\r\n      dormindo.\r\n    </p>\r\n  </div> -->\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/summary\">MENU</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 9178:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pain/pain.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 3 - O MEU FILHO/FILHA PODE SENTIR DOR?</h3>\r\n    <h1>O que é a dor?</h1>\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div> -->\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      A dor pode ser um sinal de que algo não vai bem no nosso corpo! E cada\r\n      pessoa sabe o quanto dói a sua dor.\r\n    </p>\r\n\r\n    <p>\r\n      A dor é uma sensação de alerta produzida\r\n      pelo nosso Sistema Nervoso geralmente\r\n      devido a uma lesão na pele, como uma ferida.\r\n      Ela é um aviso que algo não está certo no\r\n      nosso organismo e por isso é muito\r\n      importante para a sobrevivência dos seres\r\n      humanos.\r\n    </p>\r\n\r\n    <p>\r\n    <strong>Mas pode o meu bebê prematuro sentir dor?</strong>\r\n    </p>\r\n\r\n    <p>\r\n      <u>SIM! Quando o prematuro é furado por uma\r\n        agulha na mão ou no calcanhar, ele sente dor.\r\n        </u>\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/7.png\" alt=\"\" />\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/pain2\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 1208:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/prematuro2/prematuro2.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 1: A PREMATURIDADE</h3>\r\n    <h1>Classificação</h1>\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div> -->\r\n  <!--\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/2.jpg\" alt=\"\" />\r\n  </div> -->\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      Entre os bebês prematuros ainda existem outras classificações de acordo\r\n      com as semanas da gestação (SBP, 2017):\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"pt\">\r\n    <div class=\"photo\">\r\n      <img src=\"../../assets/imgs/3.jpg\" alt=\"\" />\r\n      <div class=\"text\">\r\n        <h3>PREMATURO EXTREMO</h3>\r\n        <p>Nascido antes de completar 28 semanas de gestação.</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"photo\">\r\n      <img src=\"../../assets/imgs/4.jpg\" alt=\"\" />\r\n      <div class=\"text\">\r\n        <h3>MUITO PREMATURO</h3>\r\n        <p>Nascido entre 28 a 31 semanas e 6 dias de gestação.</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"photo\">\r\n      <img src=\"../../assets/imgs/5.jpg\" alt=\"\" />\r\n      <div class=\"text\">\r\n        <h3>PREMATURO MODERADO</h3>\r\n        <p>Nascido entre 31 e 33 semanas e 6 dias de gestação.</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"photo\">\r\n      <img src=\"../../assets/imgs/6.jpg\" alt=\"\" />\r\n      <div class=\"text\">\r\n        <h3>PREMATURO TARDIO</h3>\r\n        <p>Nascido entre 34 e 36 semanas e 6 dias de gestação.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/summary\">MENU</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 1589:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/prematuro/prematuro.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"subtitle\">\r\n    <h3>TÓPICO 1: A PREMATURIDADE</h3>\r\n    <h1>O prematuro</h1>\r\n  </div>\r\n\r\n  <!-- <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div> -->\r\n\r\n  <div class=\"photo\">\r\n    <img src=\"../../assets/imgs/2.jpg\" alt=\"\" />\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n    <p>\r\n      <strong\r\n        >Você sabia que seu filho ou sua filha nascida antes do tempo é chamado\r\n        de prematuro ou pré-termo?\r\n      </strong>\r\n    </p>\r\n\r\n    <p>\r\n      Então... antes de falar sobre como prevenir e aliviar a dor do\r\n      recém-nascido prematuro precisamos entender\r\n      <strong> o que é um recém nascido prematuro.</strong>\r\n    </p>\r\n\r\n    <p>\r\n      O bebê a termo nasce quando a mãe está entre a 37ª e 42ª. semanas de\r\n      gestação, porém alguns motivos podem levar a um nascimento antes do tempo,\r\n      ou seja, com menos de 37 semanas de gestação, e quando isso acontece o\r\n      bebê é chamado de <u>PREMATURO.</u>\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/prematuro2\">PRÓXIMA PÁGINA</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 6241:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/screen1/screen1.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"title\">\r\n    <h1>Olá, mamãe e papai!</h1>\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Você teve um filho ou uma filha que nasceu antes do tempo? Ele ou Ela\r\n      precisa ficar internado na Unidade Neonatal?\r\n    </p>\r\n\r\n    <p>\r\n      São momentos difíceis, cansativos e muito desgastantes emocionalmente para\r\n      vocês e toda a família, não é mesmo? Mas é fundamental para seu filho ou\r\n      sua filha receber todo o seu carinho, afeto e amor.\r\n    </p>\r\n\r\n    <p>\r\n      Sabemos o quanto é importante para você, Pai, Mãe e Família, ser informado\r\n      sobre o tratamento e os procedimentos a serem realizados pela equipe de\r\n      saúde para a recuperação de seu bebê.\r\n    </p>\r\n\r\n    <p>Durante a internação seu filho ou sua filha\r\n      passa por muitos procedimentos <strong> importantes\r\n        e necessários</strong> para a recuperação, tais como\r\n      furo com agulhas para coleta de sangue ou\r\n      colocação de um tubinho (cateter) para\r\n      receber líquidos (soro ou medicamentos)\r\n      através da veia da mão ou do braço, porém\r\n      <strong>estes procedimentos são considerados\r\n        dolorosos e estressantes para o bebê</strong>.\r\n      </p>\r\n  </div>\r\n\r\n  <div class=\"button\">\r\n    <a id=\"but1\" routerLink=\"/screen2\">PRÓXIMO</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 2858:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/screen2/screen2.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"title\">\r\n    <h1>Mas afinal... Vocês sabem o que é a dor?</h1>\r\n  </div>\r\n\r\n  <div class=\"p\">\r\n    <p class=\"p-sub\">\r\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\r\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\r\n    </p>\r\n</div>\r\n\r\n    <div class=\"photo\">\r\n      <img src=\"../../assets/imgs/1.jpg\" alt=\"\" />\r\n    </div>\r\n\r\n    <div class=\"p\">\r\n      <p>\r\n       <strong>Lembre-se:</strong> Todo recém-nascido sente dor! Principalmente durante os\r\n        primeiros dias de vida, após o nascimento.\r\n      </p>\r\n\r\n      <p>\r\n       <strong>E não se esqueçam:</strong> Vocês podem contar com todo o apoio da equipe de\r\n        saúde, afinal eles farão de tudo para que seu filho ou sua filha NÃO\r\n        sinta dor.\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"button\">\r\n      <a id=\"but1\" routerLink=\"/summary\">MENU</a>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ 5989:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/summary/summary.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <h1 class=\"title\">MENU</h1>\r\n\r\n  <div class=\"button\">\r\n    <button id=\"but1\" routerLink=\"/prematuro\">A PREMATURIDADE</button>\r\n\r\n    <button id=\"but1\" routerLink=\"/ifprematuro\">NASCEU PREMATURO... E AGORA?</button>\r\n\r\n    <button id=\"but1\" routerLink=\"/pain\">O MEU FILHO/FILHA PODE SENTIR DOR?</button>\r\n\r\n    <button id=\"but1\" routerLink=\"/help\">VOCÊS PODEM AJUDAR O SEU FILHO OU FILHA!</button>\r\n\r\n    <button id=\"but1\" routerLink=\"/how\">\r\n      COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO DOLOROSO E/OU\r\n      ESTRESSANTE?\r\n    </button>\r\n\r\n    <!-- <button id=\"but1\">\r\n      QUIZ\r\n    </button> -->\r\n\r\n    <button id=\"but1\" routerLink=\"/about\">\r\n    CONCLUSÃO\r\n    </button>\r\n\r\n    <a id=\"but1\" routerLink=\"/home\">\r\n      HOME\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ 7374:
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: left;\n  font-weight: 400;\n  color: #fff;\n  width: 80vw;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG90byBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBtYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG4ucCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnAtc3ViIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uc3VidGl0bGUgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoMyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2J1dDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuI2J1dDIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6750:
/*!********************************************!*\
  !*** ./src/app/help2/help2.component.scss ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiaGVscDIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG90byBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBtYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG4ucCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnAtc3ViIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uc3VidGl0bGUgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoMyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2J1dDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcblxyXG4jYnV0MiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 9484:
/*!********************************************!*\
  !*** ./src/app/help3/help3.component.scss ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiaGVscDMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG90byBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBtYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG4ucCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnAtc3ViIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uc3VidGl0bGUgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoMyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2J1dDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcblxyXG4jYnV0MiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7467:
/*!******************************************!*\
  !*** ./src/app/help/help.component.scss ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJoZWxwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbjogMCAxMnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGhvdG8gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luOiAwIDhweDtcclxufVxyXG5cclxuLnAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5wLXN1YiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uc3VidGl0bGUgaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNidXQxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuI2J1dDIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 5472:
/*!**********************************************!*\
  !*** ./src/app/howto2/howto2.component.scss ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 120px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\nh5 {\n  color: #9e6dcc;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUFGIiwiZmlsZSI6Imhvd3RvMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW46IDAgMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob3RvIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuXHJcbi5wIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5wLXN1YiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuaDUge1xyXG4gIGNvbG9yOiByZ2IoMTU4LCAxMDksIDIwNCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgzIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jYnV0MSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcblxyXG4vLyAjYnV0MiB7XHJcbi8vICAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4vLyAgIHBhZGRpbmc6IDE2cHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4vLyB9XHJcbiJdfQ== */";

/***/ }),

/***/ 7194:
/*!**********************************************!*\
  !*** ./src/app/howto3/howto3.component.scss ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Imhvd3RvMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW46IDAgMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob3RvIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuXHJcbi5wIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4ucC1zdWIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgzIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jYnV0MSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbiNidXQyIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3294:
/*!**********************************************!*\
  !*** ./src/app/howto4/howto4.component.scss ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Imhvd3RvNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW46IDAgMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob3RvIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuXHJcbi5wIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4ucC1zdWIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgzIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jYnV0MSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbiNidXQyIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6738:
/*!**********************************************!*\
  !*** ./src/app/howto5/howto5.component.scss ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvNS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Imhvd3RvNS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW46IDAgMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob3RvIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuXHJcbi5wIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4ucC1zdWIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgzIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jYnV0MSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbiNidXQyIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 514:
/*!**********************************************!*\
  !*** ./src/app/howto6/howto6.component.scss ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\nh4 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvNi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Imhvd3RvNi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW46IDAgMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob3RvIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuXHJcbi5wIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uc3VidGl0bGUgaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNidXQxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuI2J1dDIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3905:
/*!**********************************************!*\
  !*** ./src/app/howto7/howto7.component.scss ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.photo-solo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  padding-right: 32px;\n  font-weight: 400;\n  color: #7844a8;\n}\n\nh4 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvNy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Imhvd3RvNy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW46IDAgMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob3RvIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuXHJcbi5waG90by1zb2xvIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG59XHJcblxyXG4ucCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uc3VidGl0bGUgaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNidXQxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuI2J1dDIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 7405:
/*!**********************************************!*\
  !*** ./src/app/howto8/howto8.component.scss ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\nh4 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvOC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Imhvd3RvOC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW46IDAgMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob3RvIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuXHJcbi5wIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uc3VidGl0bGUgaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNidXQxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuI2J1dDIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3746:
/*!**********************************************!*\
  !*** ./src/app/howto9/howto9.component.scss ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.photo-solo img {\n  border-radius: 15%;\n  width: 280px;\n  height: 180px;\n  margin: 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\nh4 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvOS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJob3d0bzkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG90byBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBtYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG4ucGhvdG8tc29sbyBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLnAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gcGFkZGluZy1yaWdodDogMzJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgzIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jYnV0MSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbiNidXQyIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5568:
/*!********************************************!*\
  !*** ./src/app/howto/howto.component.scss ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: left;\n  padding-right: 32px;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJob3d0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW46IDAgMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob3RvIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuXHJcbi5wIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4ucC1zdWIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgzIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jYnV0MSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbiNidXQyIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 2583:
/*!**********************************************************!*\
  !*** ./src/app/ifprematuro2/ifprematuro2.component.scss ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlmcHJlbWF0dXJvMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBS0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFFRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQUpGOztBQVFBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxGIiwiZmlsZSI6ImlmcHJlbWF0dXJvMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW46IDAgMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob3RvIGltZ1xyXG57XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4ucHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICByZ2IoMTIwLCA2OCwgMTY4KTtcclxuXHJcbn1cclxuXHJcbi5wLXN1YiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAgcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcblxyXG4uc3VidGl0bGUgaDF7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgze1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5idXR0b25cclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG59XHJcblxyXG4jYnV0MXtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbiNidXQye1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAgcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9901:
/*!********************************************************!*\
  !*** ./src/app/ifprematuro/ifprematuro.component.scss ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlmcHJlbWF0dXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFLQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBTUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUVFLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGdCQUFBO0FBSkY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEYiLCJmaWxlIjoiaWZwcmVtYXR1cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG90byBpbWdcclxue1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLnB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAgcmdiKDEyMCwgNjgsIDE2OCk7XHJcblxyXG59XHJcblxyXG4ucC1zdWIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG5cclxuLnN1YnRpdGxlIGgxe1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoM3tcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uYnV0dG9uXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxufVxyXG5cclxuI2J1dDF7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcblxyXG4jYnV0MntcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 5582:
/*!********************************************!*\
  !*** ./src/app/pain2/pain2.component.scss ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 300px;\n  height: 200px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW4yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFLQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBTUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUVFLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGdCQUFBO0FBSkY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEYiLCJmaWxlIjoicGFpbjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG90byBpbWdcclxue1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLnB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAgcmdiKDEyMCwgNjgsIDE2OCk7XHJcblxyXG59XHJcblxyXG4ucC1zdWIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG5cclxuLnN1YnRpdGxlIGgxe1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoM3tcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uYnV0dG9uXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxufVxyXG5cclxuI2J1dDF7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcblxyXG4jYnV0MntcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 913:
/*!********************************************!*\
  !*** ./src/app/pain3/pain3.component.scss ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW4zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InBhaW4zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbjogMCAxMnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGhvdG8gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luOiAwIDhweDtcclxufVxyXG5cclxuLnAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5wLXN1YiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uc3VidGl0bGUgaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNidXQxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbiNidXQyIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3950:
/*!********************************************!*\
  !*** ./src/app/pain4/pain4.component.scss ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 250px;\n  height: 200px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW40LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InBhaW40LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbjogMCAxMnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGhvdG8gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luOiAwIDhweDtcclxufVxyXG5cclxuLnAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5wLXN1YiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uc3VidGl0bGUgaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNidXQxIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbiNidXQyIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 7789:
/*!********************************************!*\
  !*** ./src/app/pain5/pain5.component.scss ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW41LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoicGFpbjUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG90byBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBtYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG4ucCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnAtc3ViIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uc3VidGl0bGUgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBoMyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2J1dDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcblxyXG4jYnV0MiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 194:
/*!******************************************!*\
  !*** ./src/app/pain/pain.component.scss ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 300px;\n  height: 200px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUtBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFNQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBRUUsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFMRiIsImZpbGUiOiJwYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbjogMCAxMnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGhvdG8gaW1nXHJcbntcclxuICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5we1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIHJnYigxMjAsIDY4LCAxNjgpO1xyXG5cclxufVxyXG5cclxuLnAtc3ViIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuXHJcbi5zdWJ0aXRsZSBoMXtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG4uc3VidGl0bGUgaDN7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLmJ1dHRvblxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbn1cclxuXHJcbiNidXQxe1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuI2J1dDJ7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 9044:
/*!******************************************************!*\
  !*** ./src/app/prematuro2/prematuro2.component.scss ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  margin-bottom: 20px;\n}\n\n.photo {\n  display: flex;\n  grid-gap: 4px;\n  gap: 4px;\n}\n\n.text, .p {\n  margin-top: 4px;\n}\n\np {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\nh1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\nh3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZW1hdHVybzIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFLQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBRUUsYUFBQTtBQUhGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUhGIiwiZmlsZSI6InByZW1hdHVybzIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG90byBpbWdcclxue1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucGhvdG97XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLnRleHQsIC5we1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxucHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICByZ2IoMTIwLCA2OCwgMTY4KTtcclxuXHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbmgze1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5idXR0b25cclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNidXQxe1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuI2J1dDJ7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4518:
/*!****************************************************!*\
  !*** ./src/app/prematuro/prematuro.component.scss ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZW1hdHVyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBS0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFFRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQUpGOztBQVFBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxGIiwiZmlsZSI6InByZW1hdHVyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW46IDAgMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob3RvIGltZ1xyXG57XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4ucHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICByZ2IoMTIwLCA2OCwgMTY4KTtcclxuXHJcbn1cclxuXHJcbi5wLXN1YiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAgcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcblxyXG4uc3VidGl0bGUgaDF7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlIGgze1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5idXR0b25cclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG59XHJcblxyXG4jYnV0MXtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbiNidXQye1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAgcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3784:
/*!************************************************!*\
  !*** ./src/app/screen1/screen1.component.scss ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  margin: 0 12px;\n  align-items: center;\n  height: 100%;\n  margin-top: 30px;\n  justify-content: center;\n  text-align: center;\n}\n\n.p {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n  margin-top: 40px;\n  text-decoration: underline;\n}\n\n.title h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbjEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBS0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFGRjs7QUFNQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFFRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQUpGOztBQVFBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxGIiwiZmlsZSI6InNjcmVlbjEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICAvLyBtYXJnaW4tdG9wOiAxNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5we1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAgcmdiKDEyMCwgNjgsIDE2OCk7XHJcblxyXG59XHJcblxyXG4ucC1zdWIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIHJnYigxMjAsIDY4LCAxNjgpO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcblxyXG4udGl0bGUgaDF7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxufVxyXG5cclxuLmJ1dHRvblxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbn1cclxuXHJcbiNidXQxe1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuI2J1dDJ7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICByZ2IoMTIwLCA2OCwgMTY4KTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 773:
/*!************************************************!*\
  !*** ./src/app/screen2/screen2.component.scss ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n  color: #7844a8;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.title h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUtBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFNQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFFRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQUpGOztBQVFBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxGIiwiZmlsZSI6InNjcmVlbjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG90byBpbWdcclxue1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLnB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAgcmdiKDEyMCwgNjgsIDE2OCk7XHJcblxyXG59XHJcblxyXG4ucC1zdWIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIHJnYigxMjAsIDY4LCAxNjgpO1xyXG59XHJcblxyXG5cclxuLnRpdGxlIGgxe1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbn1cclxuXHJcbi5idXR0b25cclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG59XHJcblxyXG4jYnV0MXtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbiNidXQye1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAgcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 8833:
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.scss ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  justify-content: center;\n  text-align: center;\n}\n\n.title {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 48px;\n  text-align: center;\n  font-weight: 700;\n  color: #7844a8;\n}\n\n.button {\n  display: flex;\n  flex-direction: column;\n  margin: 0 24px;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQU1BO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFKRiIsImZpbGUiOiJzdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXJcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvblxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMCAyNHB4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jYnV0MXtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAzJTtcclxufVxyXG4iXX0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map