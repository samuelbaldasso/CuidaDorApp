(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.html?ngResource */ 5133);
/* harmony import */ var _about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.scss?ngResource */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() { }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutComponent);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz/quiz.component */ 425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help/help.component */ 9002);
/* harmony import */ var _help2_help2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help2/help2.component */ 4765);
/* harmony import */ var _help3_help3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help3/help3.component */ 2857);
/* harmony import */ var _howto_howto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./howto/howto.component */ 3042);
/* harmony import */ var _howto2_howto2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./howto2/howto2.component */ 1453);
/* harmony import */ var _howto3_howto3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./howto3/howto3.component */ 5522);
/* harmony import */ var _howto4_howto4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./howto4/howto4.component */ 8228);
/* harmony import */ var _howto5_howto5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./howto5/howto5.component */ 1411);
/* harmony import */ var _howto6_howto6_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./howto6/howto6.component */ 1407);
/* harmony import */ var _howto7_howto7_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./howto7/howto7.component */ 9052);
/* harmony import */ var _howto8_howto8_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./howto8/howto8.component */ 2151);
/* harmony import */ var _howto9_howto9_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./howto9/howto9.component */ 1149);
/* harmony import */ var _ifprematuro_ifprematuro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ifprematuro/ifprematuro.component */ 3110);
/* harmony import */ var _ifprematuro2_ifprematuro2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ifprematuro2/ifprematuro2.component */ 5856);
/* harmony import */ var _pain_pain_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pain/pain.component */ 7096);
/* harmony import */ var _pain2_pain2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pain2/pain2.component */ 7523);
/* harmony import */ var _pain3_pain3_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pain3/pain3.component */ 8125);
/* harmony import */ var _pain4_pain4_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pain4/pain4.component */ 7969);
/* harmony import */ var _pain5_pain5_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pain5/pain5.component */ 7621);
/* harmony import */ var _prematuro_prematuro_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./prematuro/prematuro.component */ 5971);
/* harmony import */ var _prematuro2_prematuro2_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./prematuro2/prematuro2.component */ 8093);
/* harmony import */ var _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./screen1/screen1.component */ 678);
/* harmony import */ var _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./screen2/screen2.component */ 9575);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./summary/summary.component */ 6155);
/* harmony import */ var _quiz2_quiz2_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./quiz2/quiz2.component */ 1033);
/* harmony import */ var _quiz3_quiz3_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./quiz3/quiz3.component */ 1828);
/* harmony import */ var _quiz4_quiz4_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./quiz4/quiz4.component */ 9850);
/* harmony import */ var _quiz5_quiz5_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./quiz5/quiz5.component */ 1993);
/* harmony import */ var _quiz6_quiz6_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./quiz6/quiz6.component */ 523);
/* harmony import */ var _quiz7_quiz7_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./quiz7/quiz7.component */ 1798);



































const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'summary', component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_25__.SummaryComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_summary_summary_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./summary/summary.module */ 7001)).then(m => m.SummaryModule)
    },
    {
        path: 'screen1', component: _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_23__.Screen1Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_screen1_screen1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./screen1/screen1.module */ 8931)).then(m => m.Screen1Module)
    },
    {
        path: 'screen2', component: _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_24__.Screen2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_screen2_screen2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./screen2/screen2.module */ 8067)).then(m => m.Screen2Module)
    },
    {
        path: 'prematuro', component: _prematuro_prematuro_component__WEBPACK_IMPORTED_MODULE_21__.PrematuroComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_prematuro_prematuro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./prematuro/prematuro.module */ 2349)).then(m => m.PrematuroModule)
    },
    {
        path: 'prematuro2', component: _prematuro2_prematuro2_component__WEBPACK_IMPORTED_MODULE_22__.Prematuro2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_prematuro2_prematuro2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./prematuro2/prematuro2.module */ 7461)).then(m => m.Prematuro2Module)
    },
    {
        path: 'ifprematuro', component: _ifprematuro_ifprematuro_component__WEBPACK_IMPORTED_MODULE_14__.IfprematuroComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ifprematuro_ifprematuro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ifprematuro/ifprematuro.module */ 4557)).then(m => m.IfPrematuroModule)
    },
    {
        path: 'ifprematuro2', component: _ifprematuro2_ifprematuro2_component__WEBPACK_IMPORTED_MODULE_15__.Ifprematuro2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ifprematuro2_ifprematuro2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ifprematuro2/ifprematuro2.module */ 5737)).then(m => m.IfPrematuro2Module)
    },
    {
        path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 6985)).then(m => m.AboutModule)
    },
    {
        path: 'pain', component: _pain_pain_component__WEBPACK_IMPORTED_MODULE_16__.PainComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pain_pain_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pain/pain.module */ 7071)).then(m => m.PainModule)
    },
    {
        path: 'pain2', component: _pain2_pain2_component__WEBPACK_IMPORTED_MODULE_17__.Pain2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pain_pain_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pain/pain.module */ 7071)).then(m => m.PainModule)
    },
    {
        path: 'pain3', component: _pain3_pain3_component__WEBPACK_IMPORTED_MODULE_18__.Pain3Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pain_pain_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pain/pain.module */ 7071)).then(m => m.PainModule)
    },
    {
        path: 'pain4', component: _pain4_pain4_component__WEBPACK_IMPORTED_MODULE_19__.Pain4Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pain_pain_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pain/pain.module */ 7071)).then(m => m.PainModule)
    },
    {
        path: 'pain5', component: _pain5_pain5_component__WEBPACK_IMPORTED_MODULE_20__.Pain5Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pain_pain_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pain/pain.module */ 7071)).then(m => m.PainModule)
    },
    {
        path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_2__.HelpComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_help_help_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./help/help.module */ 6700)).then(m => m.HelpModule)
    },
    {
        path: 'help2', component: _help2_help2_component__WEBPACK_IMPORTED_MODULE_3__.Help2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_help_help_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./help/help.module */ 6700)).then(m => m.HelpModule)
    },
    {
        path: 'help3', component: _help3_help3_component__WEBPACK_IMPORTED_MODULE_4__.Help3Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_help_help_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./help/help.module */ 6700)).then(m => m.HelpModule)
    },
    {
        path: 'how', component: _howto_howto_component__WEBPACK_IMPORTED_MODULE_5__.HowtoComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 4540)).then(m => m.HowtoModule)
    },
    {
        path: 'how2', component: _howto2_howto2_component__WEBPACK_IMPORTED_MODULE_6__.Howto2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 4540)).then(m => m.HowtoModule)
    },
    {
        path: 'how3', component: _howto3_howto3_component__WEBPACK_IMPORTED_MODULE_7__.Howto3Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 4540)).then(m => m.HowtoModule)
    },
    {
        path: 'how4', component: _howto4_howto4_component__WEBPACK_IMPORTED_MODULE_8__.Howto4Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 4540)).then(m => m.HowtoModule)
    },
    {
        path: 'how5', component: _howto5_howto5_component__WEBPACK_IMPORTED_MODULE_9__.Howto5Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 4540)).then(m => m.HowtoModule)
    },
    {
        path: 'how6', component: _howto6_howto6_component__WEBPACK_IMPORTED_MODULE_10__.Howto6Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 4540)).then(m => m.HowtoModule)
    },
    {
        path: 'how7', component: _howto7_howto7_component__WEBPACK_IMPORTED_MODULE_11__.Howto7Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 4540)).then(m => m.HowtoModule)
    },
    {
        path: 'how8', component: _howto8_howto8_component__WEBPACK_IMPORTED_MODULE_12__.Howto8Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 4540)).then(m => m.HowtoModule)
    },
    {
        path: 'how9', component: _howto9_howto9_component__WEBPACK_IMPORTED_MODULE_13__.Howto9Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_howto_howto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./howto/howto.module */ 4540)).then(m => m.HowtoModule)
    },
    {
        path: 'quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_0__.QuizComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quiz_quiz_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quiz/quiz.module */ 7002)).then(m => m.QuizModule)
    },
    {
        path: 'quiz2', component: _quiz2_quiz2_component__WEBPACK_IMPORTED_MODULE_26__.Quiz2Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quiz_quiz_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quiz/quiz.module */ 7002)).then(m => m.QuizModule)
    },
    {
        path: 'quiz3', component: _quiz3_quiz3_component__WEBPACK_IMPORTED_MODULE_27__.Quiz3Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quiz_quiz_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quiz/quiz.module */ 7002)).then(m => m.QuizModule)
    },
    {
        path: 'quiz4', component: _quiz4_quiz4_component__WEBPACK_IMPORTED_MODULE_28__.Quiz4Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quiz_quiz_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quiz/quiz.module */ 7002)).then(m => m.QuizModule)
    },
    {
        path: 'quiz5', component: _quiz5_quiz5_component__WEBPACK_IMPORTED_MODULE_29__.Quiz5Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quiz_quiz_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quiz/quiz.module */ 7002)).then(m => m.QuizModule)
    },
    {
        path: 'quiz6', component: _quiz6_quiz6_component__WEBPACK_IMPORTED_MODULE_30__.Quiz6Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quiz_quiz_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quiz/quiz.module */ 7002)).then(m => m.QuizModule)
    },
    {
        path: 'quiz7', component: _quiz7_quiz7_component__WEBPACK_IMPORTED_MODULE_31__.Quiz7Component,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quiz_quiz_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quiz/quiz.module */ 7002)).then(m => m.QuizModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_32__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_33__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_34__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 2009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);







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

/***/ 9002:
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpComponent": () => (/* binding */ HelpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _help_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.component.html?ngResource */ 5063);
/* harmony import */ var _help_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.component.scss?ngResource */ 5814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let HelpComponent = class HelpComponent {
    constructor() { }
    ngOnInit() { }
};
HelpComponent.ctorParameters = () => [];
HelpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-help',
        template: _help_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_help_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HelpComponent);



/***/ }),

/***/ 4765:
/*!******************************************!*\
  !*** ./src/app/help2/help2.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Help2Component": () => (/* binding */ Help2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _help2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help2.component.html?ngResource */ 8556);
/* harmony import */ var _help2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help2.component.scss?ngResource */ 8858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Help2Component = class Help2Component {
    constructor() { }
    ngOnInit() { }
};
Help2Component.ctorParameters = () => [];
Help2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-help2',
        template: _help2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_help2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Help2Component);



/***/ }),

/***/ 2857:
/*!******************************************!*\
  !*** ./src/app/help3/help3.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Help3Component": () => (/* binding */ Help3Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _help3_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help3.component.html?ngResource */ 2495);
/* harmony import */ var _help3_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help3.component.scss?ngResource */ 3735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Help3Component = class Help3Component {
    constructor() { }
    ngOnInit() { }
};
Help3Component.ctorParameters = () => [];
Help3Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-help3',
        template: _help3_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_help3_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Help3Component);



/***/ }),

/***/ 3042:
/*!******************************************!*\
  !*** ./src/app/howto/howto.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowtoComponent": () => (/* binding */ HowtoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _howto_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howto.component.html?ngResource */ 9872);
/* harmony import */ var _howto_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto.component.scss?ngResource */ 8222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let HowtoComponent = class HowtoComponent {
    constructor() { }
    ngOnInit() { }
};
HowtoComponent.ctorParameters = () => [];
HowtoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto',
        template: _howto_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_howto_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HowtoComponent);



/***/ }),

/***/ 1453:
/*!********************************************!*\
  !*** ./src/app/howto2/howto2.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto2Component": () => (/* binding */ Howto2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _howto2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howto2.component.html?ngResource */ 4967);
/* harmony import */ var _howto2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto2.component.scss?ngResource */ 6598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Howto2Component = class Howto2Component {
    constructor() { }
    ngOnInit() { }
};
Howto2Component.ctorParameters = () => [];
Howto2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto2',
        template: _howto2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_howto2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto2Component);



/***/ }),

/***/ 5522:
/*!********************************************!*\
  !*** ./src/app/howto3/howto3.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto3Component": () => (/* binding */ Howto3Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _howto3_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howto3.component.html?ngResource */ 2818);
/* harmony import */ var _howto3_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto3.component.scss?ngResource */ 5414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Howto3Component = class Howto3Component {
    constructor() { }
    ngOnInit() { }
};
Howto3Component.ctorParameters = () => [];
Howto3Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto3',
        template: _howto3_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_howto3_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto3Component);



/***/ }),

/***/ 8228:
/*!********************************************!*\
  !*** ./src/app/howto4/howto4.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto4Component": () => (/* binding */ Howto4Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _howto4_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howto4.component.html?ngResource */ 6611);
/* harmony import */ var _howto4_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto4.component.scss?ngResource */ 6136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Howto4Component = class Howto4Component {
    constructor() { }
    ngOnInit() { }
};
Howto4Component.ctorParameters = () => [];
Howto4Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto4',
        template: _howto4_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_howto4_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto4Component);



/***/ }),

/***/ 1411:
/*!********************************************!*\
  !*** ./src/app/howto5/howto5.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto5Component": () => (/* binding */ Howto5Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _howto5_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howto5.component.html?ngResource */ 8187);
/* harmony import */ var _howto5_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto5.component.scss?ngResource */ 7881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Howto5Component = class Howto5Component {
    constructor() { }
    ngOnInit() { }
};
Howto5Component.ctorParameters = () => [];
Howto5Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto5',
        template: _howto5_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_howto5_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto5Component);



/***/ }),

/***/ 1407:
/*!********************************************!*\
  !*** ./src/app/howto6/howto6.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto6Component": () => (/* binding */ Howto6Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _howto6_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howto6.component.html?ngResource */ 2098);
/* harmony import */ var _howto6_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto6.component.scss?ngResource */ 6279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Howto6Component = class Howto6Component {
    constructor() { }
    ngOnInit() { }
};
Howto6Component.ctorParameters = () => [];
Howto6Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto6',
        template: _howto6_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_howto6_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto6Component);



/***/ }),

/***/ 9052:
/*!********************************************!*\
  !*** ./src/app/howto7/howto7.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto7Component": () => (/* binding */ Howto7Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _howto7_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howto7.component.html?ngResource */ 8694);
/* harmony import */ var _howto7_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto7.component.scss?ngResource */ 7186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Howto7Component = class Howto7Component {
    constructor() { }
    ngOnInit() { }
};
Howto7Component.ctorParameters = () => [];
Howto7Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto7',
        template: _howto7_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_howto7_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto7Component);



/***/ }),

/***/ 2151:
/*!********************************************!*\
  !*** ./src/app/howto8/howto8.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto8Component": () => (/* binding */ Howto8Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _howto8_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howto8.component.html?ngResource */ 8742);
/* harmony import */ var _howto8_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto8.component.scss?ngResource */ 8143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Howto8Component = class Howto8Component {
    constructor() { }
    ngOnInit() { }
};
Howto8Component.ctorParameters = () => [];
Howto8Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto8',
        template: _howto8_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_howto8_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto8Component);



/***/ }),

/***/ 1149:
/*!********************************************!*\
  !*** ./src/app/howto9/howto9.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Howto9Component": () => (/* binding */ Howto9Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _howto9_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howto9.component.html?ngResource */ 2361);
/* harmony import */ var _howto9_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howto9.component.scss?ngResource */ 2303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Howto9Component = class Howto9Component {
    constructor() { }
    ngOnInit() { }
};
Howto9Component.ctorParameters = () => [];
Howto9Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-howto9',
        template: _howto9_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_howto9_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Howto9Component);



/***/ }),

/***/ 3110:
/*!******************************************************!*\
  !*** ./src/app/ifprematuro/ifprematuro.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IfprematuroComponent": () => (/* binding */ IfprematuroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _ifprematuro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ifprematuro.component.html?ngResource */ 7541);
/* harmony import */ var _ifprematuro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ifprematuro.component.scss?ngResource */ 753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let IfprematuroComponent = class IfprematuroComponent {
    constructor() { }
    ngOnInit() { }
};
IfprematuroComponent.ctorParameters = () => [];
IfprematuroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ifprematuro',
        template: _ifprematuro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ifprematuro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IfprematuroComponent);



/***/ }),

/***/ 5856:
/*!********************************************************!*\
  !*** ./src/app/ifprematuro2/ifprematuro2.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ifprematuro2Component": () => (/* binding */ Ifprematuro2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _ifprematuro2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ifprematuro2.component.html?ngResource */ 6759);
/* harmony import */ var _ifprematuro2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ifprematuro2.component.scss?ngResource */ 3979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Ifprematuro2Component = class Ifprematuro2Component {
    constructor() { }
    ngOnInit() { }
};
Ifprematuro2Component.ctorParameters = () => [];
Ifprematuro2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ifprematuro2',
        template: _ifprematuro2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ifprematuro2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Ifprematuro2Component);



/***/ }),

/***/ 7096:
/*!****************************************!*\
  !*** ./src/app/pain/pain.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PainComponent": () => (/* binding */ PainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _pain_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pain.component.html?ngResource */ 121);
/* harmony import */ var _pain_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pain.component.scss?ngResource */ 555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let PainComponent = class PainComponent {
    constructor() { }
    ngOnInit() { }
};
PainComponent.ctorParameters = () => [];
PainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pain',
        template: _pain_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pain_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PainComponent);



/***/ }),

/***/ 7523:
/*!******************************************!*\
  !*** ./src/app/pain2/pain2.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pain2Component": () => (/* binding */ Pain2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _pain2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pain2.component.html?ngResource */ 9241);
/* harmony import */ var _pain2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pain2.component.scss?ngResource */ 7269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Pain2Component = class Pain2Component {
    constructor() { }
    ngOnInit() { }
};
Pain2Component.ctorParameters = () => [];
Pain2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pain2',
        template: _pain2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pain2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Pain2Component);



/***/ }),

/***/ 8125:
/*!******************************************!*\
  !*** ./src/app/pain3/pain3.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pain3Component": () => (/* binding */ Pain3Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _pain3_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pain3.component.html?ngResource */ 9257);
/* harmony import */ var _pain3_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pain3.component.scss?ngResource */ 2806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Pain3Component = class Pain3Component {
    constructor() { }
    ngOnInit() { }
};
Pain3Component.ctorParameters = () => [];
Pain3Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pain3',
        template: _pain3_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pain3_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Pain3Component);



/***/ }),

/***/ 7969:
/*!******************************************!*\
  !*** ./src/app/pain4/pain4.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pain4Component": () => (/* binding */ Pain4Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _pain4_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pain4.component.html?ngResource */ 899);
/* harmony import */ var _pain4_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pain4.component.scss?ngResource */ 1295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Pain4Component = class Pain4Component {
    constructor() { }
    ngOnInit() { }
};
Pain4Component.ctorParameters = () => [];
Pain4Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pain4',
        template: _pain4_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pain4_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Pain4Component);



/***/ }),

/***/ 7621:
/*!******************************************!*\
  !*** ./src/app/pain5/pain5.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pain5Component": () => (/* binding */ Pain5Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _pain5_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pain5.component.html?ngResource */ 6210);
/* harmony import */ var _pain5_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pain5.component.scss?ngResource */ 4778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Pain5Component = class Pain5Component {
    constructor() { }
    ngOnInit() { }
};
Pain5Component.ctorParameters = () => [];
Pain5Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pain5',
        template: _pain5_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pain5_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Pain5Component);



/***/ }),

/***/ 5971:
/*!**************************************************!*\
  !*** ./src/app/prematuro/prematuro.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrematuroComponent": () => (/* binding */ PrematuroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _prematuro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prematuro.component.html?ngResource */ 8121);
/* harmony import */ var _prematuro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prematuro.component.scss?ngResource */ 2986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let PrematuroComponent = class PrematuroComponent {
    constructor() { }
    ngOnInit() { }
};
PrematuroComponent.ctorParameters = () => [];
PrematuroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-prematuro',
        template: _prematuro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_prematuro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrematuroComponent);



/***/ }),

/***/ 8093:
/*!****************************************************!*\
  !*** ./src/app/prematuro2/prematuro2.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prematuro2Component": () => (/* binding */ Prematuro2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _prematuro2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prematuro2.component.html?ngResource */ 5570);
/* harmony import */ var _prematuro2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prematuro2.component.scss?ngResource */ 7642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Prematuro2Component = class Prematuro2Component {
    constructor() { }
    ngOnInit() { }
};
Prematuro2Component.ctorParameters = () => [];
Prematuro2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-prematuro2',
        template: _prematuro2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_prematuro2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Prematuro2Component);



/***/ }),

/***/ 425:
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizComponent": () => (/* binding */ QuizComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _quiz_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz.component.html?ngResource */ 7089);
/* harmony import */ var _quiz_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.component.scss?ngResource */ 2268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let QuizComponent = class QuizComponent {
    constructor() { }
    ngOnInit() { }
};
QuizComponent.ctorParameters = () => [];
QuizComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-quiz',
        template: _quiz_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_quiz_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuizComponent);



/***/ }),

/***/ 1033:
/*!******************************************!*\
  !*** ./src/app/quiz2/quiz2.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quiz2Component": () => (/* binding */ Quiz2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _quiz2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz2.component.html?ngResource */ 6076);
/* harmony import */ var _quiz2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz2.component.scss?ngResource */ 1176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);





let Quiz2Component = class Quiz2Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    selectedButton1() {
        this.isTrue = true;
        setTimeout(() => {
            this.router.navigateByUrl('/quiz3');
        }, 2000);
    }
    selectedButton2() {
        this.isTrue = false;
        const but = document.querySelector('.btn2');
        but.classList.remove('hide');
    }
};
Quiz2Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
Quiz2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-quiz2',
        template: _quiz2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_quiz2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Quiz2Component);



/***/ }),

/***/ 1828:
/*!******************************************!*\
  !*** ./src/app/quiz3/quiz3.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quiz3Component": () => (/* binding */ Quiz3Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _quiz3_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz3.component.html?ngResource */ 8282);
/* harmony import */ var _quiz3_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz3.component.scss?ngResource */ 1107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);





let Quiz3Component = class Quiz3Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    selectedButton1() {
        this.isTrue = true;
        setTimeout(() => {
            this.router.navigateByUrl('/quiz4');
        }, 2000);
    }
    selectedButton2() {
        this.isTrue = false;
        const but = document.querySelector('.btn2');
        but.classList.remove('hide');
    }
};
Quiz3Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
Quiz3Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-quiz3',
        template: _quiz3_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_quiz3_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Quiz3Component);



/***/ }),

/***/ 9850:
/*!******************************************!*\
  !*** ./src/app/quiz4/quiz4.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quiz4Component": () => (/* binding */ Quiz4Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _quiz4_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz4.component.html?ngResource */ 5885);
/* harmony import */ var _quiz4_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz4.component.scss?ngResource */ 1205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);





let Quiz4Component = class Quiz4Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    selectedButton1() {
        this.isTrue = true;
        setTimeout(() => {
            this.router.navigateByUrl('/quiz5');
        }, 2000);
    }
    selectedButton2() {
        this.isTrue = false;
        const but = document.querySelector('.btn2');
        but.classList.remove('hide');
    }
};
Quiz4Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
Quiz4Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-quiz4',
        template: _quiz4_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_quiz4_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Quiz4Component);



/***/ }),

/***/ 1993:
/*!******************************************!*\
  !*** ./src/app/quiz5/quiz5.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quiz5Component": () => (/* binding */ Quiz5Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _quiz5_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz5.component.html?ngResource */ 1229);
/* harmony import */ var _quiz5_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz5.component.scss?ngResource */ 3035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);





let Quiz5Component = class Quiz5Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    selectedButton1() {
        this.isTrue = true;
        setTimeout(() => {
            this.router.navigateByUrl('/quiz6');
        }, 2000);
    }
    selectedButton2() {
        this.isTrue = false;
        const but = document.querySelector('.btn2');
        but.classList.remove('hide');
    }
};
Quiz5Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
Quiz5Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-quiz5',
        template: _quiz5_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_quiz5_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Quiz5Component);



/***/ }),

/***/ 523:
/*!******************************************!*\
  !*** ./src/app/quiz6/quiz6.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quiz6Component": () => (/* binding */ Quiz6Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _quiz6_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz6.component.html?ngResource */ 78);
/* harmony import */ var _quiz6_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz6.component.scss?ngResource */ 6659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);





let Quiz6Component = class Quiz6Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    selectedButton1() {
        this.isTrue = true;
        setTimeout(() => {
            this.router.navigateByUrl('/quiz7');
        }, 2000);
    }
    selectedButton2() {
        this.isTrue = false;
        const but = document.querySelector('.btn2');
        but.classList.remove('hide');
    }
};
Quiz6Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
Quiz6Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-quiz6',
        template: _quiz6_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_quiz6_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Quiz6Component);



/***/ }),

/***/ 1798:
/*!******************************************!*\
  !*** ./src/app/quiz7/quiz7.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quiz7Component": () => (/* binding */ Quiz7Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _quiz7_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz7.component.html?ngResource */ 83);
/* harmony import */ var _quiz7_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz7.component.scss?ngResource */ 3259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);





let Quiz7Component = class Quiz7Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    selectedButton1() {
        this.isTrue = true;
        setTimeout(() => {
            this.router.navigateByUrl('/about');
        }, 2000);
    }
    selectedButton2() {
        this.isTrue = false;
        const but = document.querySelector('.btn2');
        but.classList.remove('hide');
    }
};
Quiz7Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
Quiz7Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-quiz7',
        template: _quiz7_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_quiz7_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Quiz7Component);



/***/ }),

/***/ 678:
/*!**********************************************!*\
  !*** ./src/app/screen1/screen1.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen1Component": () => (/* binding */ Screen1Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _screen1_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen1.component.html?ngResource */ 7699);
/* harmony import */ var _screen1_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen1.component.scss?ngResource */ 1782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Screen1Component = class Screen1Component {
    constructor() { }
    ngOnInit() { }
};
Screen1Component.ctorParameters = () => [];
Screen1Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-screen1',
        template: _screen1_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_screen1_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Screen1Component);



/***/ }),

/***/ 9575:
/*!**********************************************!*\
  !*** ./src/app/screen2/screen2.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen2Component": () => (/* binding */ Screen2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _screen2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen2.component.html?ngResource */ 8317);
/* harmony import */ var _screen2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen2.component.scss?ngResource */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Screen2Component = class Screen2Component {
    constructor() { }
    ngOnInit() { }
};
Screen2Component.ctorParameters = () => [];
Screen2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-screen2',
        template: _screen2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_screen2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Screen2Component);



/***/ }),

/***/ 6155:
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _summary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary.component.html?ngResource */ 2497);
/* harmony import */ var _summary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary.component.scss?ngResource */ 4931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let SummaryComponent = class SummaryComponent {
    constructor() { }
    ngOnInit() { }
};
SummaryComponent.ctorParameters = () => [];
SummaryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-summary',
        template: _summary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_summary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SummaryComponent);



/***/ }),

/***/ 2340:
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4909);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




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
		470,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		2725,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6149,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9288,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		1031,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		8310,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		1983,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		7039,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7945,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8714,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		1786,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4702,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		4094,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		795,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6976,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1417,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		8412,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4706,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		3459,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3354,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		1025,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		2526,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2447,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4820,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3212,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		7557,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8692,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3544,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		42,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		718,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		5981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		6488,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7937,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		942,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		816,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		9062,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		3466,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		8404,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		953,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4254,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5195,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		6116,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		9781,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8323,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		376,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2072,
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

/***/ 8764:
/*!*******************************************************!*\
  !*** ./src/app/about/about.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: left;\n  font-weight: 400;\n  color: #fff;\n  width: 80vw;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0byAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIGltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cblxuLnBob3RvIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4ucCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnAtc3ViIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2J1dDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDgwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQyIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 2009:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 5814:
/*!*****************************************************!*\
  !*** ./src/app/help/help.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiaGVscC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0byAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIGltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5waG90byBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAwIDhweDtcbn1cblxuLnAge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5wLXN1YiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1YnRpdGxlIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDMge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNidXQxIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuI2J1dDIge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 8858:
/*!*******************************************************!*\
  !*** ./src/app/help2/help2.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImhlbHAyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvIDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24gaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnBob3RvIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4ucCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnAtc3ViIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2J1dDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4jYnV0MiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuIl19 */";

/***/ }),

/***/ 3735:
/*!*******************************************************!*\
  !*** ./src/app/help3/help3.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  background: white;\n  width: 50px;\n  height: 50px;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImhlbHAzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvIDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24gaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnBob3RvIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4ucCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnAtc3ViIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2J1dDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4jYnV0MiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuIl19 */";

/***/ }),

/***/ 8222:
/*!*******************************************************!*\
  !*** ./src/app/howto/howto.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  background: white;\n  width: 50px;\n  height: 50px;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: left;\n  padding-right: 32px;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiaG93dG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG8gMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiBpbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucGhvdG8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5wIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnAtc3ViIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2J1dDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4jYnV0MiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuIl19 */";

/***/ }),

/***/ 6598:
/*!*********************************************************!*\
  !*** ./src/app/howto2/howto2.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 120px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUhGIiwiZmlsZSI6Imhvd3RvMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0byAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIGltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5waG90byBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luOiAwIDhweDtcbn1cblxuLnAge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5wLXN1YiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLy8gaDUge1xuLy8gICBjb2xvcjogcmdiKDE1OCwgMTA5LCAyMDQpO1xuLy8gfVxuXG4uc3VidGl0bGUgaDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNidXQxIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuLy8gI2J1dDIge1xuLy8gICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4vL1xuLy8gICBwYWRkaW5nOiAxNnB4O1xuLy8gICBib3JkZXItcmFkaXVzOiAxMCU7XG4vLyB9XG4iXX0= */";

/***/ }),

/***/ 5414:
/*!*********************************************************!*\
  !*** ./src/app/howto3/howto3.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJob3d0bzMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG8gMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiBpbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucGhvdG8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5wIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucC1zdWIge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1YnRpdGxlIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jYnV0MSB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQyIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG4iXX0= */";

/***/ }),

/***/ 6136:
/*!*********************************************************!*\
  !*** ./src/app/howto4/howto4.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  display: flex;\n  flex-direction: row;\n  border-radius: 15%;\n  width: 100px;\n  height: 100px;\n  margin: 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJob3d0bzQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG8gMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiBpbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucGhvdG8gaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4ucCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnAtc3ViIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2J1dDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4jYnV0MiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuIl19 */";

/***/ }),

/***/ 7881:
/*!*********************************************************!*\
  !*** ./src/app/howto5/howto5.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvNS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJob3d0bzUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG8gMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiBpbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucGhvdG8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5wIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucC1zdWIge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1YnRpdGxlIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jYnV0MSB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQyIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG4iXX0= */";

/***/ }),

/***/ 6279:
/*!*********************************************************!*\
  !*** ./src/app/howto6/howto6.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\nh4 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvNi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJob3d0bzYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG8gMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiBpbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucGhvdG8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5wIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1YnRpdGxlIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDMge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNidXQxIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuI2J1dDIge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 7186:
/*!*********************************************************!*\
  !*** ./src/app/howto7/howto7.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 100px;\n  height: 100px;\n  margin: 0 8px;\n}\n\n.photo-solo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n  margin: 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  padding-right: 32px;\n  font-weight: 400;\n}\n\nh4 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvNy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJob3d0bzcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG8gMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiBpbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucGhvdG8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5waG90by1zb2xvIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDhweDtcbn1cblxuLnAge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2J1dDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4jYnV0MiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuIl19 */";

/***/ }),

/***/ 8143:
/*!*********************************************************!*\
  !*** ./src/app/howto8/howto8.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\nh4 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvOC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJob3d0bzguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG8gMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiBpbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucGhvdG8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5wIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1YnRpdGxlIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDMge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNidXQxIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuI2J1dDIge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 2303:
/*!*********************************************************!*\
  !*** ./src/app/howto9/howto9.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 150px;\n  height: 150px;\n  margin: 0 8px;\n}\n\n.photo-solo img {\n  border-radius: 15%;\n  width: 280px;\n  height: 180px;\n  margin: 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\nh4 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd3RvOS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoiaG93dG85LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvIDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24gaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnBob3RvIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4ucGhvdG8tc29sbyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5wIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1YnRpdGxlIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDMge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNidXQxIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuI2J1dDIge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 753:
/*!*******************************************************************!*\
  !*** ./src/app/ifprematuro/ifprematuro.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlmcHJlbWF0dXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtBQUFGOztBQUdBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUtBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBRUUsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUpGOztBQVFBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEYiLCJmaWxlIjoiaWZwcmVtYXR1cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luOiAwIDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIGltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5waG90byBpbWdcbntcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5we1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbn1cblxuLnAtc3ViIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5cbi5zdWJ0aXRsZSBoMXtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDN7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvblxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbn1cblxuI2J1dDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3979:
/*!*********************************************************************!*\
  !*** ./src/app/ifprematuro2/ifprematuro2.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlmcHJlbWF0dXJvMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFLQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFNQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUVFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxGIiwiZmlsZSI6ImlmcHJlbWF0dXJvMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW46IDAgMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24gaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnBob3RvIGltZ1xue1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcblxufVxuXG4ucC1zdWIge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cblxuLnN1YnRpdGxlIGgxe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoM3tcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcblxufVxuXG4jYnV0MXtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuI2J1dDJ7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuIl19 */";

/***/ }),

/***/ 555:
/*!*****************************************************!*\
  !*** ./src/app/pain/pain.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: 0 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 180px;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 20px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBREY7O0FBSUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBS0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBTUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFFRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSkY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFMRiIsImZpbGUiOiJwYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5waG90byBpbWdcbntcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTgwcHg7XG59XG5cbi5pY29uIGltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5we1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbn1cblxuLnAtc3ViIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5cbi5zdWJ0aXRsZSBoMXtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDN7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvblxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbn1cblxuI2J1dDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 7269:
/*!*******************************************************!*\
  !*** ./src/app/pain2/pain2.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  overflow-y: scroll;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 300px;\n  height: 200px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW4yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBQUY7O0FBR0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBS0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBTUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFFRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSkY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFMRiIsImZpbGUiOiJwYWluMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW46IDAgMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiBpbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucGhvdG8gaW1nXG57XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ucHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuXG59XG5cbi5wLXN1YiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuXG4uc3VidGl0bGUgaDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1YnRpdGxlIGgze1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b25cbntcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG59XG5cbiNidXQxe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4jYnV0MntcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG4iXX0= */";

/***/ }),

/***/ 2806:
/*!*******************************************************!*\
  !*** ./src/app/pain3/pain3.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo {\n  display: flex;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 100px;\n  height: 100px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW4zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJwYWluMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0byAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIGltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5waG90b3tcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnBob3RvIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4ucCB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnAtc3ViIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2J1dDEge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4jYnV0MiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuIl19 */";

/***/ }),

/***/ 1295:
/*!*******************************************************!*\
  !*** ./src/app/pain4/pain4.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 250px;\n  height: 200px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW40LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJwYWluNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0byAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIGltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5waG90byBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiAwIDhweDtcbn1cblxuLnAge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5wLXN1YiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1YnRpdGxlIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDMge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNidXQxIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuI2J1dDIge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 4778:
/*!*******************************************************!*\
  !*** ./src/app/pain5/pain5.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto 12px;\n  align-items: center;\n  overflow-y: scroll;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo {\n  display: flex;\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 100px;\n  height: 100px;\n  margin: 0 8px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  margin-top: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW41LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InBhaW41LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvIDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24gaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnBob3Rve1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGhvdG8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5wIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucC1zdWIge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZSBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1YnRpdGxlIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jYnV0MSB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQyIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG4iXX0= */";

/***/ }),

/***/ 2986:
/*!***************************************************************!*\
  !*** ./src/app/prematuro/prematuro.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.subtitle h3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZW1hdHVyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFLQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFNQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUVFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFMRiIsImZpbGUiOiJwcmVtYXR1cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luOiAwIDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIGltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5waG90byBpbWdcbntcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5we1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbn1cblxuLnAtc3ViIHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5cbi5zdWJ0aXRsZSBoMXtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidGl0bGUgaDN7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1dHRvblxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbn1cblxuI2J1dDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAgcmdiKDEyMCwgNjgsIDE2OCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 7642:
/*!*****************************************************************!*\
  !*** ./src/app/prematuro2/prematuro2.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  margin: 0 12px;\n  justify-content: center;\n  overflow-y: scroll;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 50%;\n  width: 100px;\n  height: 80px;\n  margin-bottom: 2px;\n}\n\n.photo {\n  display: flex;\n  gap: 4px;\n}\n\np {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\nh1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\nh3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZW1hdHVybzIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBQUY7O0FBR0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBREY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBU0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTkY7O0FBU0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTkY7O0FBU0E7RUFFRSxhQUFBO0FBUEY7O0FBVUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFQRiIsImZpbGUiOiJwcmVtYXR1cm8yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAxMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIGltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5waG90byBpbWdcbntcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4ucGhvdG97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xufVxuXG4vLyAudGV4dCwgLnB7XG4vLyAgIG1hcmdpbi10b3A6IDRweDtcbi8vIH1cblxucHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuXG59XG5cbmgxe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgze1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b25cbntcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2J1dDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 2268:
/*!*****************************************************!*\
  !*** ./src/app/quiz/quiz.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  margin: auto 12px;\n  justify-content: center;\n  overflow-y: scroll;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  margin-bottom: 2px;\n}\n\n.photo {\n  display: flex;\n  gap: 4px;\n}\n\np {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\nh1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\nh3 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtBQUFGOztBQUdBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQURGOztBQVFBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTkYiLCJmaWxlIjoicXVpei5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG8gMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiBpbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucGhvdG8gaW1nXG57XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5waG90b3tcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG59XG5cbi8vIC50ZXh0LCAucHtcbi8vICAgbWFyZ2luLXRvcDogNHB4O1xuLy8gfVxuXG5we1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbn1cblxuaDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDN7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI2J1dDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 1176:
/*!*******************************************************!*\
  !*** ./src/app/quiz2/quiz2.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  margin: auto 12px;\n  justify-content: center;\n  overflow-y: scroll;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.hide {\n  display: none;\n}\n\n.green {\n  background-color: green;\n}\n\n.red {\n  background-color: red;\n}\n\n.photo img {\n  width: 200px;\n  height: 150px;\n  margin-bottom: 2px;\n}\n\n.paragraphs {\n  display: flex;\n  flex-direction: column;\n  background-color: grey;\n  border-radius: 12px;\n  padding: 0 12px;\n  margin: 12px;\n}\n\np {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\nh2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: red;\n}\n\n.btn1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: lightgreen;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXoyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBREY7O0FBU0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTkY7O0FBVUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFQRiIsImZpbGUiOiJxdWl6Mi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG8gMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiBpbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uaGlkZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmdyZWVue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnJlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ucGhvdG8gaW1nXG57XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4ucGFyYWdyYXBocyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgbWFyZ2luOiAxMnB4O1xufVxuXG4vLyAucGhvdG97XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGdhcDogNHB4O1xuLy8gfVxuXG5we1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbn1cblxuaDJ7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ0bjJ7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmJ0bjF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbiNidXQxe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4jYnV0MntcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG4iXX0= */";

/***/ }),

/***/ 1107:
/*!*******************************************************!*\
  !*** ./src/app/quiz3/quiz3.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  margin: auto 12px;\n  justify-content: center;\n  overflow-y: scroll;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  width: 200px;\n  height: 150px;\n  margin-bottom: 2px;\n}\n\n.paragraphs {\n  display: flex;\n  flex-direction: column;\n  background-color: grey;\n  border-radius: 12px;\n  padding: 0 12px;\n  margin: 12px;\n}\n\np {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\nh2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: red;\n}\n\n.btn1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: lightgreen;\n}\n\n.hide {\n  display: none;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXozLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQURGOztBQVNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFQRjs7QUFVQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUEYiLCJmaWxlIjoicXVpejMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIDEycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24gaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnBob3RvIGltZ1xue1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnBhcmFncmFwaHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG1hcmdpbjogMTJweDtcbn1cblxuLy8gLnBob3Rve1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBnYXA6IDRweDtcbi8vIH1cblxucHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuXG59XG5cbmgye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG4ye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5idG4xe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBsaWdodGdyZWVuO1xufVxuXG4uaGlkZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2J1dDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 1205:
/*!*******************************************************!*\
  !*** ./src/app/quiz4/quiz4.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  margin: auto 12px;\n  justify-content: center;\n  overflow-y: scroll;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  width: 200px;\n  height: 150px;\n  margin-bottom: 2px;\n}\n\n.paragraphs {\n  display: flex;\n  flex-direction: column;\n  background-color: grey;\n  border-radius: 12px;\n  padding: 0 12px;\n  margin: 12px;\n}\n\np {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\nh2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: red;\n}\n\n.btn1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: lightgreen;\n}\n\n.hide {\n  display: none;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXo0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQURGOztBQVNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFQRjs7QUFVQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUEYiLCJmaWxlIjoicXVpejQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIDEycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24gaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnBob3RvIGltZ1xue1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnBhcmFncmFwaHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG1hcmdpbjogMTJweDtcbn1cblxuLy8gLnBob3Rve1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBnYXA6IDRweDtcbi8vIH1cblxucHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuXG59XG5cbmgye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG4ye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5idG4xe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBsaWdodGdyZWVuO1xufVxuXG4uaGlkZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2J1dDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3035:
/*!*******************************************************!*\
  !*** ./src/app/quiz5/quiz5.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  margin: auto 12px;\n  justify-content: center;\n  overflow-y: scroll;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  width: 200px;\n  height: 150px;\n  margin-bottom: 2px;\n}\n\n.paragraphs {\n  display: flex;\n  flex-direction: column;\n  background-color: grey;\n  border-radius: 12px;\n  padding: 0 12px;\n  margin: 12px;\n}\n\np {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\nh2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: red;\n}\n\n.btn1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: lightgreen;\n}\n\n.hide {\n  display: none;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXo1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQURGOztBQVNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFQRjs7QUFVQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUEYiLCJmaWxlIjoicXVpejUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIDEycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24gaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnBob3RvIGltZ1xue1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnBhcmFncmFwaHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG1hcmdpbjogMTJweDtcbn1cblxuLy8gLnBob3Rve1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBnYXA6IDRweDtcbi8vIH1cblxucHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuXG59XG5cbmgye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG4ye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5idG4xe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBsaWdodGdyZWVuO1xufVxuXG4uaGlkZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2J1dDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 6659:
/*!*******************************************************!*\
  !*** ./src/app/quiz6/quiz6.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  margin: auto 12px;\n  justify-content: center;\n  overflow-y: scroll;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  background: white;\n  width: 50px;\n  height: 50px;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  width: 200px;\n  height: 150px;\n  margin-bottom: 2px;\n}\n\n.paragraphs {\n  display: flex;\n  flex-direction: column;\n  background-color: grey;\n  border-radius: 12px;\n  padding: 0 12px;\n  margin: 12px;\n}\n\np {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\nh2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: red;\n}\n\n.btn1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: lightgreen;\n}\n\n.hide {\n  display: none;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXo2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQURGOztBQVNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFQRjs7QUFVQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUEYiLCJmaWxlIjoicXVpejYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIDEycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24gaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnBob3RvIGltZ1xue1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnBhcmFncmFwaHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG1hcmdpbjogMTJweDtcbn1cblxuLy8gLnBob3Rve1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBnYXA6IDRweDtcbi8vIH1cblxucHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuXG59XG5cbmgye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG4ye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5idG4xe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBsaWdodGdyZWVuO1xufVxuXG4uaGlkZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2J1dDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3259:
/*!*******************************************************!*\
  !*** ./src/app/quiz7/quiz7.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  margin: auto 12px;\n  justify-content: center;\n  overflow-y: scroll;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  width: 200px;\n  height: 150px;\n  margin-bottom: 2px;\n}\n\n.paragraphs {\n  display: flex;\n  flex-direction: column;\n  background-color: grey;\n  border-radius: 12px;\n  padding: 0 12px;\n  margin: 12px;\n}\n\np {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\nh2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.btn2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: red;\n}\n\n.btn1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: lightgreen;\n}\n\n.hide {\n  display: none;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXo3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQURGOztBQVNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFQRjs7QUFVQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUEYiLCJmaWxlIjoicXVpejcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIDEycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24gaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnBob3RvIGltZ1xue1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnBhcmFncmFwaHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG1hcmdpbjogMTJweDtcbn1cblxuLy8gLnBob3Rve1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBnYXA6IDRweDtcbi8vIH1cblxucHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuXG59XG5cbmgye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG4ye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5idG4xe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBsaWdodGdyZWVuO1xufVxuXG4uaGlkZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2J1dDF7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDY4LCAxNjgpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNidXQye1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 1782:
/*!***********************************************************!*\
  !*** ./src/app/screen1/screen1.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  margin: 0 12px;\n  align-items: center;\n  height: 100%;\n  justify-content: center;\n  text-align: center;\n  overflow-y: scroll;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.p {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  text-decoration: underline;\n}\n\n.title h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: white;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbjEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFJQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQURGOztBQUtBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBRUUsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU9BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSkYiLCJmaWxlIjoic2NyZWVuMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwIDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uaWNvbiBpbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuXG59XG5cbi5wLXN1YiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLnRpdGxlIGgxe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b25cbntcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG59XG5cbiNidXQxe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNjgsIDE2OCk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuI2J1dDJ7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuIl19 */";

/***/ }),

/***/ 704:
/*!***********************************************************!*\
  !*** ./src/app/screen2/screen2.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 60px;\n  margin: 0 12px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow-y: scroll;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  padding: 12px;\n  width: 50px;\n  height: 50px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.photo img {\n  border-radius: 15%;\n  width: 200px;\n  height: 150px;\n}\n\n.p {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.p-sub {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.title h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 10%;\n}\n\n#but2 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFLQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFNQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUVFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxGIiwiZmlsZSI6InNjcmVlbjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luOiAwIDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmljb24gaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnBob3RvIGltZ1xue1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcblxufVxuXG4ucC1zdWIge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cblxuLnRpdGxlIGgxe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b25cbntcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG59XG5cbiNidXQxe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4jYnV0MntcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG4iXX0= */";

/***/ }),

/***/ 4931:
/*!***********************************************************!*\
  !*** ./src/app/summary/summary.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: scroll;\n  margin: auto 12px;\n  height: 100%;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon img {\n  display: flex;\n  align-items: flex-start;\n  width: 50px;\n  height: 50px;\n  padding: 12px;\n  background: white;\n  border: 3px solid var(--ion-background-color);\n}\n\n.title {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 18px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.button {\n  display: flex;\n  flex-direction: column;\n  margin: auto 4px;\n  gap: 4px;\n}\n\n#but1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400;\n  color: #fff;\n  background-color: #7844a8;\n  padding: 16px;\n  border-radius: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtBQURGOztBQUlBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUtBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0FBSEY7O0FBTUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBSEYiLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lclxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1hcmdpbjogYXV0byAxMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIGltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi50aXRsZXtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuXG59XG5cbi5idXR0b25cbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiBhdXRvIDRweDtcbiAgZ2FwOiA0cHg7XG59XG5cbiNidXQxe1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCA2OCwgMTY4KTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMyU7XG59XG4iXX0= */";

/***/ }),

/***/ 5133:
/*!*******************************************************!*\
  !*** ./src/app/about/about.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h1>Obrigado por chegar até aqui!</h1>\n  </div>\n\n  <div class=\"p\">\n    <p>\n      Parabéns, você chegou ao final do aplicativo! Esperamos que vocês, pai,\n      mãe e família, tenham aprendido mais sobre o importante papel da família\n      na prevenção e alívio da dor do bebê prematuro.\n    </p>\n\n    <p>\n      Este material foi desenvolvido por Enfermeiras especialistas em dor e\n      Cuidado Intensivo Neonatal, estudante de Enfermagem e profissionais das\n      áreas de Tecnologia e Design, pensando em toda a família do bebê\n      prematuro.\n    </p>\n\n    <!-- <p>\n      Caso tenha permanecido com algum dúvida ou alguma sugestão que irá\n      contribuir com outros pais, mães e familiares o espaço abaixo está\n      disponível!\n    </p> -->\n  </div>\n\n  <!-- <div class=\"button\">\n    <div id=\"but1\">\n      <p>NOME:</p>\n      <p>EMAIL:</p>\n      <p>SUGESTÃO:</p>\n    </div>\n  </div> -->\n\n  <div class=\"button\">\n    <a id=\"but2\" routerLink=\"\">HOME</a>\n</div>\n";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 5063:
/*!*****************************************************!*\
  !*** ./src/app/help/help.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h3>TÓPICO 4 - VOCÊS PODEM AJUDAR O SEU FILHO OU FILHA!</h3>\n    <h1>Sim! Vocês podem ajudar o seu bebê!</h1>\n  </div>\n\n  <!-- <div class=\"p\">\n    <p class=\"p-sub\">\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\n    </p>\n</div> -->\n\n  <div class=\"p\">\n    <p>\n      A participação de vocês pais reduz a\n      exposição do recém-nascido ao desconforto e\n      ao estresse. Vocês podem ajudar seu filho\n      sua filha através do toque, posição canguru,\n      comunicação corporal e não verbal afetiva,\n      falar com uma voz carinhosa durante os\n      momentos de aproximação e interação.\n    </p>\n\n    <p>\n      <strong>A equipe de saúde estará sempre com vocês,\n        apoiando e ajudando!\n        </strong>\n    </p>\n\n    <p>\n      Vocês PODEM, caso desejem e se sintam\n      seguros, participar estando junto ao seu filho\n      ou sua filha durante a realização de\n      procedimentos dolorosos.\n    </p>\n  </div>\n\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/27.png\" alt=\"\" />\n    <!-- <img src=\"../../assets/imgs/12.png\" alt=\"\" /> -->\n  </div>\n\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/help2\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 8556:
/*!*******************************************************!*\
  !*** ./src/app/help2/help2.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/help\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <!-- <div class=\"subtitle\">\n    <h3>TÓPICO 4 - VOCÊS PODEM AJUDAR O SEU FILHO OU FILHA!</h3>\n    <h1>Vocês podem ajudar o seu bebê!</h1>\n  </div> -->\n\n  <!-- <div class=\"p\">\n    <p class=\"p-sub\">\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\n    </p>\n</div> -->\n\n  <div class=\"p\">\n    <p>\n      É fundamental que vocês conheçam mais sobre as respostas de dor do seu\n      bebê durante os procedimentos e que façam perguntas a equipe! Tirem as\n      dúvidas quanto a realização dos procedimentos e o tratamento do seu filho\n      ou sua filha!\n    </p>\n\n    <p>\n      <strong\n        >A equipe de saúde está aqui para ajudar vocês!\n      </strong>\n    </p>\n\n    <p>\n      <strong>Lembre-se: </strong><u>Todo o recém-nascido tem o\n        direito de não sentir dor, quando existem\n        meios para evitá-la!</u> Está escrito no\n        Estatuto da Criança e do AdolescenteLei 8069/1990, a Resolução no 41 de\n        1995 – Direitos das Crianças e\n        Adolescentes Hospitalizados, e a\n        Declaração Universal de Direitos para o\n        Bebê Prematuro.\n    </p>\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/help3\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 2495:
/*!*******************************************************!*\
  !*** ./src/app/help3/help3.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/help2\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <!-- <h3>TÓPICO 4 - VOCÊS PODEM AJUDAR O SEU FILHO OU FILHA!</h3> -->\n    <h1>Como ajudar o meu filho ou filha antes do procedimento?</h1>\n  </div>\n\n  <!-- <div class=\"p\">\n    <p class=\"p-sub\">\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\n    </p>\n</div> -->\n\n  <div class=\"p\">\n    <p>\n     <strong>1º</strong> Importante mãe e pai estarem calmos, pois\n     a ansiedade e o nervosismo podem ser\n     sentidos pelo seu filho ou filha. Tirar todas as\n     dúvidas com a equipe de saúde que irá\n     realizar o procedimento. A informação é\n     fundamental para vocês se sentirem seguros.\n    </p>\n\n    <p>\n      <strong>2º</strong> Entender a mímica facial e o movimento do\n      corpo do seu bebê é essencial! Assim vocês\n      podem identificar quando seu bebê sente ou\n      não dor e ajudá-lo.\n\n     </p>\n\n     <p>\n      <strong>3º</strong> Ajudar o seu filho ou filha a se acalmar,\n      caso ele esteja chorando muito ou agitado.\n     <strong>Mas como?</strong>\n\n     </p>\n  </div>\n\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/14.jpg\" alt=\"\" />\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/summary\">MENU</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 9872:
/*!*******************************************************!*\
  !*** ./src/app/howto/howto.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/summary\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Antes do procedimento:</h1>\n  </div>\n\n  <div class=\"p\">\n    <ul>\n      <li>\n        Procure olhar nos olhos de seu filho ou sua filha, quando estiverem\n        abertos.\n      </li>\n      <li>\n        Converse com ele ou ela quanto ao procedimento, e que vocês estarão\n        juntos! A voz materna/paterna é uma ponte importante para a ligação\n        emocional e afetiva entre os pais e o prematuro.\n      </li>\n      <li>Cantar baixinho também pode acalmar seu bebê.</li>\n      <li>\n        Ao tocar seu filho, sua filha evitar mudanças súbitas de postura ou\n        realizá-las com ele ou ela bem aconchegado em flexão e com as mãos\n        próximas à boca.\n      </li>\n      <li>\n        Vocês devem estar em uma posição bem confortável, de preferência\n        sentados para dar o colo materno ou paterno.\n      </li>\n      <li>\n        Sempre transmitir segurança e conforto através da voz e do toque das\n        mãos.\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/how2\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 4967:
/*!*********************************************************!*\
  !*** ./src/app/howto2/howto2.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/how\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <!-- <div class=\"subtitle\">\n    <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Durante o procedimento:</h1>\n  </div> -->\n\n  <div class=\"p\">\n\n    <p>A equipe de enfermagem e os neonatologistas\n      sempre irão ajudá-los a aprender formas de\n      tocar e confortar o seu filho ou sua filha até\n      que vocês se sintam seguros para estarem\n      fazendo isso sozinhos.\n      </p>\n\n      <h5>SE SEU FILHO OU FILHA NÃO PUDER SAIR DA\n        INCUBADORA DURANTE O PROCEDIMENTO:</h5>\n  </div>\n\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/15.png\" alt=\"\">\n  </div>\n\n  <div class=\"p\">\n   <p>A equipe de saúde irá orientar vocês pais a\n    utilizar algumas medidas:\n    </p>\n    <p>1.O toque positivo – parado.</p>\n    <p>2.A contenção facilitada.</p>\n    <p>3.Enrolamento.</p>\n    <p>4.Sucção Não Nutritiva com dedo mínimo\n      enluvado.</p>\n    <p>5. Glicose Oral a 25% ou leite da própria mãe\n      associado à sucção não nutritiva.\n      </p>\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/how3\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 2818:
/*!*********************************************************!*\
  !*** ./src/app/howto3/howto3.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/how2\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <!-- <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3> -->\n    <h1>Como isso irá ocorrer?</h1>\n  </div>\n\n  <div class=\"p\">\n    <p>\n      <strong>1. O toque positivo – parado,</strong> envolve a colocação das\n      mãos paradas sobre o corpo do recém-nascido, usando toque firme e com\n      pressão constante. Uma mão envolve a cabeça, a outra contém os pés ou as\n      mãos.\n    </p>\n\n    <p>\n     <strong>2. A contenção facilitada,</strong> é uma contenção motora gentil dos braços e das\n      pernas em flexão, posicionados em direção à linha média, próximos do\n      tronco e da face, em decúbito lateral ou supino. A contenção é firme, mas\n      elástica. Importante fazer com a ajuda de um dos profissionais de saúde.\n    </p>\n\n    <p>\n     <strong>3. O enrolamento</strong> consiste em segurar os\n      braços e as pernas em posição fletida, mãos\n      próximas à boca. Deve ser firme o suficiente\n      para não permitir o deslocamento do tecido\n      usado, a fim de evitar o risco de sufocamento.\n    </p>\n  </div>\n\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/16.jpg\" alt=\"\" />\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/how4\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 6611:
/*!*********************************************************!*\
  !*** ./src/app/howto4/howto4.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/how3\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <!-- <div class=\"subtitle\">\n    <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Como isso irá ocorrer?</h1>\n  </div> -->\n\n  <div class=\"p\">\n    <p>\n      4. Na <strong>Sucção Não Nutritiva com dedo mínimo enluvado</strong> o\n      dedo materno ou paterno enluvado deve ser introduzido na boca do\n      recémnascido e deve ser mantido durante todo o procedimento.\n    </p>\n\n    <p>\n      Quando o recém-nascido suga o dedo enluvado isso estimula o reflexo de\n      sucção, além de liberar Serotonina conhecida como o hormônio da felicidade\n      regulando o ritmo cardíaco, sono, apetite, memória e a temperatura do\n      corpo.\n    </p>\n\n    <p>\n      A Sucção Não Nutritiva pode ser associada as soluções adocicadas: glicose\n      oral a 25% e leite humano ordenhado da própria mãe, potencializando seu\n      efeito.\n    </p>\n  </div>\n\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/17.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/29.png\" alt=\"\" />\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/how5\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 8187:
/*!*********************************************************!*\
  !*** ./src/app/howto5/howto5.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/how4\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <!-- <div class=\"subtitle\">\n    <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Como isso irá ocorrer?</h1>\n  </div> -->\n\n  <div class=\"p\">\n    <p>\n      5. As soluções adocicadas podem ser glicose oral a 25% e leite humano\n      ordenhado da própria mãe.\n    </p>\n\n    <p>\n      <strong>Atenção:</strong> A Glicose oral a 25% é sempre recomendada pelo\n      médico. É administrada lentamente na porção anterior da língua; após dois\n      minutos o procedimento é realizado. Uma nova dose pode ser administrada\n      durante o procedimento. Não devem ser utilizadas mais de três doses\n      durante um único procedimento.\n    </p>\n\n    <p>\n      No caso do <u>Leite Humano Ordenhado (LHO)</u> você, mãe, pode retirar o\n      colostro/leite ao lado da incubadora do seu filho ou filha e, administrar\n      lentamente na porção anterior da língua.\n    </p>\n\n    <p>A Glicose Oral a 25% ou leite da própria mãe\n      ordenhado associado à sucção não nutritiva\n      dois minutos antes do procedimento, na parte\n      anterior da língua também é recomendado. Os\n      pais sempre devem, assim que possível,\n      utilizar o contato pele a pele ou a\n      amamentação.\n      </p>\n  </div>\n\n  <!-- <div class=\"photo\">\n    <img src=\"../../assets/imgs/17.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/29.png\" alt=\"\" />\n  </div> -->\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/how6\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 2098:
/*!*********************************************************!*\
  !*** ./src/app/howto6/howto6.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/how5\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <!-- <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Durante o procedimento:</h1> -->\n\n    <h4>\n      SE SEU FILHO OU FILHA PUDER SAIR DA INCUBADORA DURANTE O PROCEDIMENTO:\n    </h4>\n  </div>\n\n  <div class=\"p\">\n    <p>\n      <strong>1. Posição Canguru ou Contato pele a pele:</strong>\n      Consiste em manter o RN, em contato pele a pele, somente de fraldas, meias\n      e gorro na posição vertical junto ao seu tórax ou peito, envolvidos por\n      uma manta ou camisola aguardando o tempo mínimo necessário para respeitar\n      a estabilização do RN e pelo tempo máximo que ambos entenderem ser\n      prazeroso e suficiente.\n    </p>\n\n    <p>\n      Em contato pele a pele ou posição canguru o seu filho, sua filha está\n      aquecido, ouvindo os batimentos cardíacos (sons do coração) e sentindo o\n      cheiro materno/paterno o que promove uma sensação de conforto e segurança,\n      sendo capaz de acalmá-lo durante a realização dos procedimentos dolorosos.\n    </p>\n\n\n  </div>\n\n  <!-- <div class=\"photo\">\n    <img src=\"../../assets/imgs/17.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/29.png\" alt=\"\" />\n  </div> -->\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/how7\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 8694:
/*!*********************************************************!*\
  !*** ./src/app/howto7/howto7.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/how6\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <!-- <div class=\"subtitle\">\n    <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Durante o procedimento:</h1>\n  </div> -->\n\n  <div class=\"p\">\n    <ul>\n      <li> É muito importante que após o procedimento seu filho ou filha permaneça em\n        contato pele a pele no mínimo uma hora.</li>\n\n    <li>\n      Não se preocupem! A equipe de saúde está treinada para orientar vocês de\n      maneira segura.\n    </li>\n  </ul>\n  </div>\n\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/18.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/19.png\" alt=\"\" />\n  </div>\n\n  <div class=\"photo-solo\">\n    <img src=\"../../assets/imgs/20.png\" alt=\"\" />\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/how8\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 8742:
/*!*********************************************************!*\
  !*** ./src/app/howto8/howto8.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/how5\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <!-- <div class=\"subtitle\">\n    <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Durante o procedimento:</h1>\n  </div> -->\n\n  <div class=\"p\">\n    <p>\n      <strong>2. Amamentação: </strong>\n    </p>\n\n    <p>\n      A amamentação é uma medida muito importante que além de promover todos os\n      nutrientes necessários para o crescimento e desenvolvimento do seu filho\n      ou filha está associada a muitos outros benefícios, sendo um deles o\n      alívio da dor quando realizada antes, durante e após procedimentos\n      dolorosos.\n    </p>\n\n    <p>\n      Em contato pele a pele ou posição canguru o seu filho, sua filha está\n      aquecido, ouvindo os batimentos cardíacos (sons do coração) e sentindo o\n      cheiro materno/paterno o que promove uma sensação de conforto e segurança,\n      sendo capaz de acalmá-lo durante a realização dos procedimentos dolorosos.\n    </p>\n\n    <p>\n      É importante consultar os médicos e enfermeiros que estão cuidando de seu\n      filho ou filha para saber se ele ou ela já é capaz de receber o leite\n      materno através do seio pois para isso ele ou ela precisa ser capaz de\n      sugar o seio, respirar e deglutir o leite ao mesmo tempo.\n    </p>\n  </div>\n\n  <h4>\n    A EQUIPE DE SAÚDE VAI APOIAR A AMAMENTAÇÃO SEMPRE!\n  </h4>\n\n  <!-- <div class=\"photo\">\n    <img src=\"../../assets/imgs/17.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/29.png\" alt=\"\" />\n  </div> -->\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/how9\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 2361:
/*!*********************************************************!*\
  !*** ./src/app/howto9/howto9.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/how8\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <!-- <div class=\"subtitle\">\n    <h3>\n      TÓPICO 5: COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO\n      DOLOROSO E/OU ESTRESSANTE?\n    </h3>\n    <h1>Durante o procedimento:</h1>\n  </div> -->\n\n  <div class=\"p\">\n    <p>\n      Para que esse momento seja confortável tanto para você, mãe, quanto para o\n      seu filho ou filha é importante que você esteja em poltrona confortável\n      próximo a incubadora, ou se estiver na cama a cabeceira deve estar elevada\n      permitindo um posicionamento confortável e seguro.\n    </p>\n\n    <p>\n      <strong\n        >A amamentação deve ser iniciada cerca de 5 minutos ANTES do início do\n        procedimento doloroso e permanecer todo o tempo DURANTE o procedimento\n        doloroso. Após o procedimento o bebê deve permanecer no seio materno até\n        estar organizado, saciado e pleno.</strong\n      >\n    </p>\n  </div>\n\n  <!-- <div class=\"photo\">\n    <img src=\"../../assets/imgs/18.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/19.png\" alt=\"\" />\n  </div> -->\n\n  <div class=\"photo-solo\">\n    <img src=\"../../assets/imgs/21.jpg\" alt=\"\" />\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/summary\">MENU</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 7541:
/*!*******************************************************************!*\
  !*** ./src/app/ifprematuro/ifprematuro.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h3>TÓPICO 2: NASCEU PREMATURO. . . E AGORA?</h3>\n    <h1>Nasceu prematuro e agora? Como será?</h1>\n  </div>\n\n  <!-- <div class=\"p\">\n    <p class=\"p-sub\">\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\n    </p>\n</div> -->\n  <!--\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/2.jpg\" alt=\"\" />\n  </div> -->\n\n  <div class=\"p\">\n    <p>\n      Quando um bebê nasce prematuro é muito comum que os pais sintam medo ou\n      angústia, ansiedade e até mesmo culpa.\n      <strong> Mas vocês não estarão sozinhos! </strong> Toda a equipe de saúde\n      da Unidade de Terapia Intensiva Neonatal (UTIN) estará com vocês!\n    </p>\n\n    <p>\n      Fiquem tranquilos, pois a equipe de saúde <strong>SEMPRE</strong> irá\n      conversar com vocês antes do encontro com seu filho ou sua filha na UTIN,\n      informando sobre as condições clínicas e comportamentais de seu bebê.\n    </p>\n\n  <p>\n    É importante dizer que, dependendo da classificação do prematuro, seu filho\n    ou sua filha poderá passar um longo período internado na UTIN, pois seus\n    órgãos como o coração, pulmão e cérebro ainda não estão maduros o suficiente\n    e poderão necessitar de algum tipo de cuidado especial.\n  </p>\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/ifprematuro2\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 6759:
/*!*********************************************************************!*\
  !*** ./src/app/ifprematuro2/ifprematuro2.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/ifprematuro\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <!-- <h3>TÓPICO 2: NASCEU PREMATURO. . . E AGORA?</h3> -->\n    <h1>Nasceu prematuro e agora? Como será?</h1>\n  </div>\n\n  <!-- <div class=\"p\">\n    <p class=\"p-sub\">\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\n    </p>\n</div> -->\n  <!--\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/2.jpg\" alt=\"\" />\n  </div> -->\n\n  <div class=\"p\">\n    <p>\n      No ambiente da UTIN os recém-nascidos prematuros podem ser expostos a\n      luzes intensas e sons/ruídos fortes e submetidos a procedimentos dolorosos\n      várias vezes ao dia, tais como: aspiração da boca, nariz ou traqueia\n      através de um tubo; remoção de curativos da pele; punção arterial e venosa\n      para coleta de sangue e administração de medicamentos; punção do calcâneo.\n    </p>\n\n    <p>\n     <strong>Lembre-se: </strong>Todos os prematuros necessitam de cuidados especiais realizados\n      pela equipe de saúde. Quanto mais imaturo o prematuro for, maior é o\n      número de procedimentos dolorosos que ele/ela será submetido, e maior a\n      sua exposição à dor. Cada procedimento é importante para melhora e\n      recuperação do seu filho/filha, mas muitos deles provocam sensações\n      desagradáveis, que podem gerar dor.\n    </p>\n\n    <p>\n     <strong>Mas vocês podem aprender a ajudar seu filho ou sua filha quando ele sente\n      dor! Você sabia disso?</strong>\n    </p>\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/summary\">MENU</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 121:
/*!*****************************************************!*\
  !*** ./src/app/pain/pain.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h3>TÓPICO 3 - O MEU FILHO/FILHA PODE SENTIR DOR?</h3>\n    <h1>O que é a dor?</h1>\n  </div>\n\n  <!-- <div class=\"p\">\n    <p class=\"p-sub\">\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\n    </p>\n</div> -->\n\n  <div class=\"p\">\n    <p>\n      A dor pode ser um sinal de que algo não vai bem no nosso corpo! E cada\n      pessoa sabe o quanto dói a sua dor.\n    </p>\n\n    <p>\n      A dor é uma sensação de alerta produzida\n      pelo nosso Sistema Nervoso geralmente\n      devido a uma lesão na pele, como uma ferida.\n      Ela é um aviso que algo não está certo no\n      nosso organismo e por isso é muito\n      importante para a sobrevivência dos seres\n      humanos.\n    </p>\n\n    <p>\n    <strong>Mas pode o meu bebê prematuro sentir dor?</strong>\n    </p>\n\n    <p>\n      <u>SIM! Quando o prematuro é furado por uma\n        agulha na mão ou no calcanhar, ele sente dor.\n        </u>\n    </p>\n  </div>\n\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/7.png\" alt=\"\" />\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/pain2\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 9241:
/*!*******************************************************!*\
  !*** ./src/app/pain2/pain2.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/pain\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <!-- <h3>TÓPICO 3 - O MEU FILHO/FILHA PODE SENTIR DOR?</h3> -->\n    <h1>Mas como isso ocorre?</h1>\n  </div>\n\n  <!-- <div class=\"p\">\n    <p class=\"p-sub\">\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\n    </p>\n</div> -->\n\n  <div class=\"p\">\n    <p>\n      Após um procedimento doloroso o cérebro do recém-nascido recebe a mensagem\n      da dor e os neurônios (células presentes no cérebro) transmitem os sinais\n      de dor para os músculos e demais órgãos do corpo como: pulmão, coração e\n      pele.\n    </p>\n\n    <p>\n      Dessa forma, os prematuros respondem a esse estímulo e\n      <strong\n        >expressam a sua dor através de uma linguagem própria chamada de\n        linguagem não verbal.</strong\n      >\n    </p>\n\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/8.png\" alt=\"\" />\n    </div>\n\n    <p>\n      O estímulo nervoso, produzido pelo procedimento, percorre o SN do bebê e\n      desencadeia uma série de respostas em seu corpo.\n    </p>\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/pain3\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 9257:
/*!*******************************************************!*\
  !*** ./src/app/pain3/pain3.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/pain2\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <!-- <h3>TÓPICO 3 - O MEU FILHO/FILHA PODE SENTIR DOR?</h3> -->\n    <h1>Como o prematuro reage a dor?</h1>\n  </div>\n\n  <!-- <div class=\"p\">\n    <p class=\"p-sub\">\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\n    </p>\n</div> -->\n\n  <div class=\"p\">\n    <p>\n      O recém-nascido não fala, mas ele possui uma linguagem não verbal. Essa\n      linguagem pode ser expressa através:\n    </p>\n\n    <p>\n      <strong>1) Mímica facial:</strong> O prematuro apresenta: contração da\n      testa com abaixamento das sobrancelhas, estreitamento das pálpebras e/ou\n      fechamento dos olhos, nariz franzido e/ou bochechas levantadas, boca\n      entreaberta e/ou lábios esticados e língua esticada com as bordas tensas.\n    </p>\n  </div>\n\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/9.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/10.png\" alt=\"\" />\n  </div>\n\n  <div class=\"p\">\n    <p>\n      <strong>2) Sono e vigília:</strong> Os bebes prematuros reagem a dor\n      através dos estados de sono – profundo ou irregular e vigília – olhos bem\n      abertos e atentos. O prematuro pode dormir fácil ou apresentar dificuldade\n      para pegar no sono tendo sonecas curtas e agitadas ou até mesmo não\n      dormindo.\n    </p>\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/pain4\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 899:
/*!*******************************************************!*\
  !*** ./src/app/pain4/pain4.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/pain3\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <!-- <h3>TÓPICO 3 - O MEU FILHO/FILHA PODE SENTIR DOR?</h3> -->\n    <!-- <h1>Como o prematuro reage a dor?</h1> -->\n  </div>\n\n  <div class=\"p\">\n    <p>\n      <strong>3) Movimentos corporais:</strong> O recém-nascido pode apresentar\n      braços e pernas agitadas, rigidez e arqueamento do tórax. Abertura das\n      mãos com os dedos estendidos e separados. Dedos fletidos e fortemente\n      fechados sobre a palma das mãos formando deixando a mão fechada (SBP,\n      2018).\n    </p>\n\n    <p>\n      <strong>4) Choro ou choramingar:</strong> 50% dos recémnascidos não choram\n      durante um procedimento doloroso. O choro é pouco específico, podendo ser\n      desencadeado por outros estímulos como fome e frio. O prematuro pode\n      apresentar ausência de choro, gemência ou choro mínimo com estímulo\n      doloroso. Irritabilidade ou choro intermitente que pode ser consolado ou\n      choro alto ou silencioso contínuo inconsolável.\n    </p>\n\n    <p>\n     <strong>Atenção!</strong> Quanto menor o prematuro, menor poderá ser a sua expressão facial\n      de dor, ou seja, pode expressar esses sinais sutilmente. Sendo mais\n      difícil de identificar que ele(a) está sentindo dor. O bebê pode ficar\n      quieto ou parado, <strong><u>mas isso não quer dizer que não sente dor.</u></strong>\n    </p>\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/pain5\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 6210:
/*!*******************************************************!*\
  !*** ./src/app/pain5/pain5.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/pain4\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <!-- <h3>TÓPICO 3 - O MEU FILHO/FILHA PODE SENTIR DOR?</h3>\n    <h1>Como o prematuro reage a dor?</h1> -->\n  </div>\n\n  <!-- <div class=\"p\">\n    <p class=\"p-sub\">\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\n    </p>\n</div> -->\n\n  <div class=\"p\">\n    <p>\n      <strong\n        ><u\n          >Estar atento aos sinais de comportamento do seu filho/filha é\n          essencial para ajudá-lo!</u\n        ></strong\n      >\n    </p>\n\n    <p>\n     <strong>5) Sinais de contato e consolo:</strong> Importante observar <u>sinais de contato</u>\n      como: se está atento à voz, apresenta tensão durante a interação, chora à\n      mínima manipulação, ou não há contato, geme à manipulação.\n    </p>\n\n    <p>E os <u>sinais de consolo</u> como: se está quieto e\n      relaxado, ou acalma rápido com voz, carinho\n      ou sucção, ou acalma com dificuldade, ou não\n      acalma, ou suga desesperadamente.</p>\n  </div>\n\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/11.png\" alt=\"\" />\n    <img src=\"../../assets/imgs/12.png\" alt=\"\" />\n  </div>\n\n  <!-- <div class=\"p\">\n    <p>\n      <strong>2) Sono e vigília:</strong> Os bebes prematuros reagem a dor\n      através dos estados de sono – profundo ou irregular e vigília – olhos bem\n      abertos e atentos. O prematuro pode dormir fácil ou apresentar dificuldade\n      para pegar no sono tendo sonecas curtas e agitadas ou até mesmo não\n      dormindo.\n    </p>\n  </div> -->\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/summary\">MENU</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 8121:
/*!***************************************************************!*\
  !*** ./src/app/prematuro/prematuro.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h3>TÓPICO 1: A PREMATURIDADE</h3>\n    <h1>O prematuro</h1>\n  </div>\n\n  <!-- <div class=\"p\">\n    <p class=\"p-sub\">\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\n    </p>\n</div> -->\n\n  <div class=\"photo\">\n    <img src=\"../../assets/imgs/2.jpg\" alt=\"\" />\n  </div>\n\n  <div class=\"p\">\n    <p>\n      <strong\n        >Você sabia que seu filho ou sua filha nascida antes do tempo é chamado\n        de prematuro ou pré-termo?\n      </strong>\n    </p>\n\n    <p>\n      Então... antes de falar sobre como prevenir e aliviar a dor do\n      recém-nascido prematuro precisamos entender\n      <strong> o que é um recém nascido prematuro.</strong>\n    </p>\n\n    <p>\n      O bebê a termo nasce quando a mãe está entre a 37ª e 42ª. semanas de\n      gestação, porém alguns motivos podem levar a um nascimento antes do tempo,\n      ou seja, com menos de 37 semanas de gestação, e quando isso acontece o\n      bebê é chamado de <u>PREMATURO.</u>\n    </p>\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/prematuro2\">PRÓXIMA PÁGINA</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 5570:
/*!*****************************************************************!*\
  !*** ./src/app/prematuro2/prematuro2.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/prematuro\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h1>Classificação</h1>\n  </div>\n\n  <div class=\"p\">\n    <p>\n      Entre os bebês prematuros ainda existem outras classificações de acordo\n      com as semanas da gestação (SBP, 2017):\n    </p>\n  </div>\n\n  <div class=\"pt\">\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/3.jpg\" alt=\"\" />\n      <div class=\"text\">\n        <h3>PREMATURO EXTREMO</h3>\n        <p>Nascido antes de completar 28 semanas de gestação.</p>\n      </div>\n    </div>\n\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/4.jpg\" alt=\"\" />\n      <div class=\"text\">\n        <h3>MUITO PREMATURO</h3>\n        <p>Nascido entre 28 a 31 semanas e 6 dias de gestação.</p>\n      </div>\n    </div>\n\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/5.jpg\" alt=\"\" />\n      <div class=\"text\">\n        <h3>PREMATURO MODERADO</h3>\n        <p>Nascido entre 31 e 33 semanas e 6 dias de gestação.</p>\n      </div>\n    </div>\n\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/6.jpg\" alt=\"\" />\n      <div class=\"text\">\n        <h3>PREMATURO TARDIO</h3>\n        <p>Nascido entre 34 e 36 semanas e 6 dias de gestação.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/summary\">MENU</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 7089:
/*!*****************************************************!*\
  !*** ./src/app/quiz/quiz.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/summary\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h1>TÓPICO 5: QUIZ</h1>\n\n    <div class=\"p\">\n      <p>Agora que você já sabe um\n        pouco mais sobre como ajudar\n        o seu bebê, que tal reforçar\n        o que aprendeu com um jogo?</p>\n\n        <p>Neste jogo você verá imagens\n          reais de bebês prematuros em\n          situações que podem acontecer\n          com seu bebê internado na\n          Unidade Neonatal.</p>\n\n          <p>O objetivo deste jogo é que\n            essas situações reais lhe\n            ajudem a identificar e cuidar\n            de seu bebê prematuro quando\n            o mesmo sente dor. Vamos lá?</p>\n    </div>\n\n    <div class=\"button\">\n      <button id=\"but1\" routerLink=\"/quiz2\">JOGAR</button>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 6076:
/*!*******************************************************!*\
  !*** ./src/app/quiz2/quiz2.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/quiz\" src=\"../../assets/icon/arrow.png\" />\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h2>OBSERVE ATENTAMENTE O BEBÊ.</h2>\n\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/30.png\" alt=\"\" />\n    </div>\n\n    <div class=\"p\">\n      <p>Agora responda: O bebê está com dor?</p>\n\n      <div class=\"paragraphs\">\n        <p class=\"right\" (click)=\"selectedButton1()\">\n          Sim, é possível observar através da mímica facial e os movimentos do\n          bebê.\n        </p>\n      </div>\n      <div class=\"paragraphs\">\n        <p class=\"wrong\" (click)=\"selectedButton2()\">Não, o bebê não apresenta sinais sugestivos de dor.</p>\n      </div>\n    </div>\n\n    <div class=\"button\">\n      <h3 class=\"btn2 hide\" *ngIf=\"!isTrue\">TENTE NOVAMENTE...</h3>\n      <h3 class=\"btn1\" *ngIf=\"isTrue\">ACERTOU!!!</h3>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 8282:
/*!*******************************************************!*\
  !*** ./src/app/quiz3/quiz3.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/quiz2\" src=\"../../assets/icon/arrow.png\" />\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h2>OBSERVE ATENTAMENTE O BEBÊ.</h2>\n\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/23.png\" alt=\"\" />\n    </div>\n\n    <div class=\"p\">\n      <p>Agora responda: O bebê está com dor?</p>\n\n      <div class=\"paragraphs\">\n        <p class=\"wrong\" (click)=\"selectedButton2()\">\n          Sim, é possível observar através da mímica facial e os movimentos do\n          bebê.\n        </p>\n      </div>\n      <div class=\"paragraphs\">\n        <p class=\"right\" (click)=\"selectedButton1()\">Não, o bebê não apresenta sinais sugestivos de dor.</p>\n      </div>\n    </div>\n\n    <div class=\"button\">\n      <h3 class=\"btn2 hide\" *ngIf=\"!isTrue\">TENTE NOVAMENTE...</h3>\n      <h3 class=\"btn1\" *ngIf=\"isTrue\">ACERTOU!!!</h3>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 5885:
/*!*******************************************************!*\
  !*** ./src/app/quiz4/quiz4.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/quiz3\" src=\"../../assets/icon/arrow.png\" />\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h2>OBSERVE O BEBÊ PREMATURO QUE NÃO PODE SAIR DA INCUBADORA.</h2>\n\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/24.png\" alt=\"\" />\n    </div>\n\n    <div class=\"p\">\n      <p>\n        Agora responda: Qual das condutas a seguir você usaria para acalmá-lo\n        durante procedimentos dolorosos?\n      </p>\n\n      <div class=\"paragraphs\">\n        <p class=\"right\" (click)=\"selectedButton1()\">\n          Sucção Não-Nutritiva + Glicose Oral a 25% ou gotas de leite da própria\n          mãe\n        </p>\n      </div>\n      <div class=\"paragraphs\">\n        <p class=\"wrong\" (click)=\"selectedButton2()\">\n          Aleitamento materno ou contato pele-a-pele\n        </p>\n      </div>\n    </div>\n\n    <div class=\"button\">\n      <h3 class=\"btn2 hide\" *ngIf=\"!isTrue\">TENTE NOVAMENTE...</h3>\n      <h3 class=\"btn1\" *ngIf=\"isTrue\">ACERTOU!!!</h3>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 1229:
/*!*******************************************************!*\
  !*** ./src/app/quiz5/quiz5.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/quiz4\" src=\"../../assets/icon/arrow.png\" />\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h2>OBSERVE ATENTAMENTE A IMAGEM.</h2>\n\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/26.png\" alt=\"\" />\n    </div>\n\n    <div class=\"p\">\n      <p>\n        Agora responda: Qual conduta está sendo realizada com o bebê prematuro?\n      </p>\n\n      <div class=\"paragraphs\">\n        <p class=\"wrong\" (click)=\"selectedButton2()\">Aleitamento materno.</p>\n      </div>\n      <div class=\"paragraphs\">\n        <p class=\"right\" (click)=\"selectedButton1()\">\n          Contato pele-a-pele ou posição canguru.\n        </p>\n      </div>\n      <div class=\"paragraphs\">\n        <p class=\"wrong\" (click)=\"selectedButton2()\">\n          Sucção Não-Nutritiva + Glicose Oral a 25% ou gotas de leite da própria\n          mãe.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"button\">\n      <h3 class=\"btn2 hide\" *ngIf=\"!isTrue\">TENTE NOVAMENTE...</h3>\n      <h3 class=\"btn1\" *ngIf=\"isTrue\">ACERTOU!!!</h3>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 78:
/*!*******************************************************!*\
  !*** ./src/app/quiz6/quiz6.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/quiz5\" src=\"../../assets/icon/arrow.png\" />\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h2>OBSERVE ATENTAMENTE A IMAGEM.</h2>\n\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/27.jpg\" alt=\"\" />\n    </div>\n\n    <div class=\"p\">\n      <p>\n        Agora responda: Qual medida para aliviar a dor está sendo realizada?\n      </p>\n\n      <div class=\"paragraphs\">\n        <p class=\"wrong\" (click)=\"selectedButton2()\">Aleitamento materno.</p>\n      </div>\n      <div class=\"paragraphs\">\n        <p class=\"wrong\" (click)=\"selectedButton2()\">\n          Contato pele-a-pele ou posição canguru.\n        </p>\n      </div>\n      <div class=\"paragraphs\">\n        <p class=\"right\" (click)=\"selectedButton1()\">\n          Sucção Não-Nutritiva + Glicose Oral a 25% ou gotas de leite da própria\n          mãe.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"button\">\n      <h3 class=\"btn2 hide\" *ngIf=\"!isTrue\">TENTE NOVAMENTE...</h3>\n      <h3 class=\"btn1\" *ngIf=\"isTrue\">ACERTOU!!!</h3>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 83:
/*!*******************************************************!*\
  !*** ./src/app/quiz7/quiz7.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/quiz6\" src=\"../../assets/icon/arrow.png\" />\n</div>\n\n<div class=\"container\">\n  <div class=\"subtitle\">\n    <h2>OBSERVE ATENTAMENTE A IMAGEM.</h2>\n\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/21.jpg\" alt=\"\" />\n    </div>\n\n    <div class=\"p\">\n      <p>Agora responda: Qual medida está sendo realizada com o bebê?</p>\n\n      <div class=\"paragraphs\">\n        <p class=\"right\" (click)=\"selectedButton1()\">Aleitamento materno.</p>\n      </div>\n      <div class=\"paragraphs\">\n        <p class=\"wrong\" (click)=\"selectedButton2()\">\n          Contato pele-a-pele ou posição canguru.\n        </p>\n      </div>\n      <div class=\"paragraphs\">\n        <p class=\"wrong\" (click)=\"selectedButton2()\">\n          Sucção Não-Nutritiva + Glicose Oral a 25% ou gotas de leite da própria\n          mãe.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"button\">\n      <h3 class=\"btn2 hide\" *ngIf=\"!isTrue\">TENTE NOVAMENTE...</h3>\n      <h3 class=\"btn1\" *ngIf=\"isTrue\">ACERTOU!!!</h3>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 7699:
/*!***********************************************************!*\
  !*** ./src/app/screen1/screen1.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n\n  <div class=\"title\">\n    <h1>Olá, mamãe e papai!</h1>\n  </div>\n\n  <div class=\"p\">\n    <p class=\"p-sub\">\n      Você teve um filho ou uma filha que nasceu antes do tempo? Ele ou Ela\n      precisa ficar internado na Unidade Neonatal?\n    </p>\n\n    <p>\n      São momentos difíceis, cansativos e muito desgastantes emocionalmente para\n      vocês e toda a família, não é mesmo? Mas é fundamental para seu filho ou\n      sua filha receber todo o seu carinho, afeto e amor.\n    </p>\n\n    <p>\n      Sabemos o quanto é importante para você, Pai, Mãe e Família, ser informado\n      sobre o tratamento e os procedimentos a serem realizados pela equipe de\n      saúde para a recuperação de seu bebê.\n    </p>\n\n    <p>\n      Durante a internação seu filho ou sua filha passa por muitos procedimentos\n      <strong> importantes e necessários</strong> para a recuperação, tais como\n      furo com agulhas para coleta de sangue ou colocação de um tubinho\n      (cateter) para receber líquidos (soro ou medicamentos) através da veia da\n      mão ou do braço, porém\n      <strong\n        >estes procedimentos são considerados dolorosos e estressantes para o\n        bebê</strong\n      >.\n    </p>\n  </div>\n\n  <div class=\"button\">\n    <a id=\"but1\" routerLink=\"/screen2\">PRÓXIMO</a>\n  </div>\n</div>\n";

/***/ }),

/***/ 8317:
/*!***********************************************************!*\
  !*** ./src/app/screen2/screen2.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"/screen1\" src=\"../../assets/icon/arrow.png\">\n</div>\n\n<div class=\"container\">\n  <div class=\"title\">\n    <h1>Mas afinal... Vocês sabem o que é a dor?</h1>\n  </div>\n\n  <div class=\"p\">\n    <p class=\"p-sub\">\n      Aqui você encontrará informações sobre a dor e como vocês (pais ou\n      familiares) podem ajudar o seu filho ou sua filha durante a internação.\n    </p>\n</div>\n\n    <div class=\"photo\">\n      <img src=\"../../assets/imgs/1.jpg\" alt=\"\" />\n    </div>\n\n    <div class=\"p\">\n      <p>\n       <strong>Lembre-se:</strong> Todo recém-nascido sente dor! Principalmente durante os\n        primeiros dias de vida, após o nascimento.\n      </p>\n\n      <p>\n       <strong>E não se esqueçam:</strong> Vocês podem contar com todo o apoio da equipe de\n        saúde, afinal eles farão de tudo para que seu filho ou sua filha NÃO\n        sinta dor.\n      </p>\n    </div>\n\n    <div class=\"button\">\n      <a id=\"but1\" routerLink=\"/summary\">MENU</a>\n    </div>\n  </div>\n";

/***/ }),

/***/ 2497:
/*!***********************************************************!*\
  !*** ./src/app/summary/summary.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"icon\">\n  <img routerLink=\"\" src=\"../../assets/icon/home.png\">\n</div>\n\n<div class=\"container\">\n  <h1 class=\"title\">MENU</h1>\n\n  <div class=\"button\">\n    <button id=\"but1\" routerLink=\"/prematuro\">A PREMATURIDADE</button>\n\n    <button id=\"but1\" routerLink=\"/ifprematuro\">NASCEU PREMATURO... E AGORA?</button>\n\n    <button id=\"but1\" routerLink=\"/pain\">O MEU FILHO/FILHA PODE SENTIR DOR?</button>\n\n    <button id=\"but1\" routerLink=\"/help\">VOCÊS PODEM AJUDAR O SEU FILHO OU FILHA!</button>\n\n    <button id=\"but1\" routerLink=\"/how\">\n      COMO AJUDAR O MEU FILHO OU FILHA DURANTE UM PROCEDIMENTO DOLOROSO E/OU\n      ESTRESSANTE?\n    </button>\n\n    <button id=\"but1\" routerLink=\"/quiz\">\n      QUIZ\n    </button>\n  </div>\n</div>\n\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map