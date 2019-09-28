(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ "./src/app/pages/landing-page/landing-page.component.ts");
/* harmony import */ var _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/search-page/search-page.component */ "./src/app/pages/search-page/search-page.component.ts");



const routes = [
    {
        path: 'home', component: _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"]
    },
    {
        path: 'search', component: _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_2__["SearchPageComponent"],
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
class AppRoutingModule {
}


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component.ngfactory */ "./src/app/components/header/header.component.ngfactory.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_4__["NYTimesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
class AppComponent {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _pages_landing_page_landing_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component.ngfactory */ "./src/app/pages/landing-page/landing-page.component.ngfactory.js");
/* harmony import */ var _pages_search_page_search_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/search-page/search-page.component.ngfactory */ "./src/app/pages/search-page/search-page.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_bottom_sheet_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/@angular/material/bottom-sheet/typings/index.ngfactory */ "./node_modules/@angular/material/bottom-sheet/typings/index.ngfactory.js");
/* harmony import */ var _modals_detail_view_detail_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/detail-view/detail-view.component.ngfactory */ "./src/app/modals/detail-view/detail-view.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm2015/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ "./src/app/pages/landing-page/landing-page.component.ts");
/* harmony import */ var _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/search-page/search-page.component */ "./src/app/pages/search-page/search-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm2015/ngx-masonry.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var lottie_angular2_dist_esm_src_lottieAnimationView_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! lottie-angular2/dist/esm/src/lottieAnimationView.module */ "./node_modules/lottie-angular2/dist/esm/src/lottieAnimationView.module.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _pages_landing_page_landing_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponentNgFactory"], _pages_search_page_search_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SearchPageComponentNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TooltipComponentNgFactory"], _node_modules_angular_material_bottom_sheet_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetContainerNgFactory"], _modals_detail_view_detail_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DetailViewComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_17__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_service_worker_service_worker_a"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_service_worker_service_worker_d"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["SwPush"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["SwPush"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["SwUpdate"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["SwUpdate"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_service_worker_service_worker_b"], "ngsw-worker.js", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["SwRegistrationOptions"], { enabled: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2, p2_3) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_i"](p1_0), _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_service_worker_service_worker_c"](p2_0, p2_1, p2_2, p2_3)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_service_worker_service_worker_b"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["PathLocationStrategy"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () { return [[{ path: "home", component: _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_27__["LandingPageComponent"] }, { path: "search", component: _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_28__["SearchPageComponent"] }, { path: "", redirectTo: "/home", pathMatch: "full" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_30__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_30__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_34__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_34__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_35__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_35__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__["MatBottomSheetModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__["MatBottomSheetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_masonry__WEBPACK_IMPORTED_MODULE_40__["NgxMasonryModule"], ngx_masonry__WEBPACK_IMPORTED_MODULE_40__["NgxMasonryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_41__["NgxSkeletonLoaderModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_41__["NgxSkeletonLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, lottie_angular2_dist_esm_src_lottieAnimationView_module__WEBPACK_IMPORTED_MODULE_42__["LottieAnimationViewModule"], lottie_angular2_dist_esm_src_lottieAnimationView_module__WEBPACK_IMPORTED_MODULE_42__["LottieAnimationViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ServiceWorkerModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ServiceWorkerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
class AppModule {
}


/***/ }),

/***/ "./src/app/components/header/header.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/header/header.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function() { return RenderType_HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function() { return View_HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function() { return View_HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function() { return HeaderComponentNgFactory; });
/* harmony import */ var _header_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.scss.ngstyle */ "./src/app/components/header/header.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/core/typings/index.ngfactory */ "./node_modules/@angular/material/core/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _node_modules_angular_material_select_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/select/typings/index.ngfactory */ "./node_modules/@angular/material/select/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/services/search/search.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var styles_HeaderComponent = [_header_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.select(_v.parent.context.$implicit.group, _v.context.$implicit.name) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[2, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit.name; _ck(_v, 1, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multiple; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).active; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSelected(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit.label; _ck(_v, 2, 0, currVal_9); }); }
function View_HeaderComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "mat-optgroup", [["class", "mat-optgroup"], ["role", "group"]], [[2, "mat-optgroup-disabled", null], [1, "aria-disabled", 0], [1, "aria-labelledby", 0]], null, null, _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOptgroup_0"], _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOptgroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[3, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], [], { label: [0, "label"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_HeaderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_3 = _v.context.$implicit.group; _ck(_v, 1, 0, currVal_3); var currVal_4 = _v.context.$implicit.options; _ck(_v, 3, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString(); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._labelId; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_HeaderComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit; _ck(_v, 1, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multiple; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).active; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSelected(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit; _ck(_v, 2, 0, currVal_9); }); }
function View_HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { optionSelect: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 43, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "jumia-logo"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Jumia News "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 38, "div", [["class", "end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 37, "form", [["class", "search-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 17, "div", [["class", "filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "button", [["mat-icon-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeSelect() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["filter_list"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 11, "mat-select", [["class", "mat-select"], ["formControlName", "options"], ["role", "listbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._onFocus() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._onBlur() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_select_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatSelect_0"], _node_modules_angular_material_select_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 2080768, [[1, 4], ["optionSelect", 4]], 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { optionGroups: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { customTrigger: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_HeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 6, "div", [["class", "input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 5, "input", [["formControlName", "search"], ["placeholder", "Search"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 5, "div", [["class", "search-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 4, "button", [["mat-icon-button", ""], ["type", "submit"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.search() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["search"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 4, 0, "/"); _ck(_v, 3, 0, currVal_0); var currVal_8 = _co.headerForm; _ck(_v, 9, 0, currVal_8); _ck(_v, 16, 0); var currVal_35 = "options"; _ck(_v, 21, 0, currVal_35); _ck(_v, 24, 0); var currVal_36 = _co.optionsGroup; _ck(_v, 29, 0, currVal_36); var currVal_44 = "search"; _ck(_v, 34, 0, currVal_44); var currVal_45 = _co.articles; _ck(_v, 38, 0, currVal_45); _ck(_v, 43, 0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPending; _ck(_v, 7, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled || null); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._animationMode === "NoopAnimations"); _ck(_v, 13, 0, currVal_9, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).inline; var currVal_12 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).color !== "warn")); _ck(_v, 15, 0, currVal_11, currVal_12); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).id; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).tabIndex; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._getAriaLabel(); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._getAriaLabelledby(); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).required.toString(); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled.toString(); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).errorState; var currVal_27 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._optionIds : null); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).multiple; var currVal_29 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._ariaDescribedby || null); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._getAriaActiveDescendant(); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).errorState; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).required; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).empty; _ck(_v, 18, 1, [currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34]); var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassUntouched; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassTouched; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPristine; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassDirty; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassValid; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassInvalid; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPending; _ck(_v, 31, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43); var currVal_46 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled || null); var currVal_47 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._animationMode === "NoopAnimations"); _ck(_v, 40, 0, currVal_46, currVal_47); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).inline; var currVal_49 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).color !== "warn")); _ck(_v, 42, 0, currVal_48, currVal_49); }); }
function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], [_services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_19__["NYTimesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_20__["SearchService"]], null, null)], null, null); }
var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/header/header.component.scss.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.scss.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["app-header .header {\n  padding-top: env(safe-area-inset-top);\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: var(--header-height);\n  z-index: 999;\n  background: var(--header-background);\n  display: flex;\n  align-items: center;\n}\n@supports ((-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))) or (-webkit-backdrop-filter: blur(15px)) {\n  app-header .header {\n    background: var(--header-background-blur);\n    backdrop-filter: blur(15px);\n    -webkit-backdrop-filter: blur(15px);\n  }\n  app-header .header .search .input {\n    background: var(--search-input-background) !important;\n  }\n}\napp-header .header .jumia-logo {\n  font-family: \"Playfair Display\", serif;\n  font-weight: bold;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 1.2rem;\n  cursor: pointer;\n  margin-left: 4%;\n}\napp-header .header .search, app-header .header .settings {\n  align-self: flex-end;\n}\napp-header .header .search-form {\n  display: flex;\n}\napp-header .header .end {\n  display: flex;\n  margin: auto 30px auto auto;\n}\napp-header .header .end .input {\n  max-width: 300px;\n  background: var(--search-input-background);\n  padding: 5px 16px;\n  border-radius: 20px;\n  font-size: 1.2rem !important;\n}\napp-header .header .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\napp-header .header .form-field {\n  width: 100%;\n}\napp-header .filter {\n  height: 40px;\n  text-align: center;\n}\napp-header .filter .mat-select-trigger {\n  opacity: 0;\n  width: 80px;\n}\n.mat-select-panel {\n  background: var(--main-card-background) !important;\n}\n.mat-select-panel .mat-optgroup-label {\n  opacity: 0.8;\n}\n.mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option-text {\n  color: var(--main-text-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRyb21vbnRlaXJvL0Rlc2t0b3AvTmV3WW9ya1RpbWVzL0p1bWlhTmV3cy9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUUscUNBQUE7RUFFQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFFQSxvQ0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQ0xKO0FET0k7RUFDRTtJQUNFLHlDQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQ0FBQTtFQ0xOO0VET0k7SUFDRSxxREFBQTtFQ0xOO0FBQ0Y7QURTSTtFQUNFLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDUE47QURVSTtFQUNFLG9CQUFBO0FDUk47QURXSTtFQUNFLGFBQUE7QUNUTjtBRFlJO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FDVk47QURZTTtFQUNFLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNWUjtBRGNJO0VBQ0UsNEJBQUE7QUNaTjtBRGVJO0VBQ0UsV0FBQTtBQ2JOO0FEaUJFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDZko7QURpQkk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ2ZOO0FEb0JBO0VBQ0Usa0RBQUE7QUNqQkY7QURtQkU7RUFDRSxZQUFBO0FDakJKO0FEb0JFO0VBQ0Usd0NBQUE7QUNsQkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVhZGVyIHtcblxuICAuaGVhZGVyIHtcbiAgICAvLyBQcmV2ZW50IGlwaG9uZS9hbmRyb2lkIG5vdGNoXG4gICAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcblxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gICAgei1pbmRleDogOTk5O1xuXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgQHN1cHBvcnRzIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCkpIG9yICgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KSkge1xuICAgICAgJiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWJsdXIpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAgICAgfVxuICAgICAgJiAuc2VhcmNoIC5pbnB1dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlYXJjaC1pbnB1dC1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgLmp1bWlhLWxvZ28ge1xuICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgfVxuXG4gICAgLnNlYXJjaCwgLnNldHRpbmdzIHtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgIC5zZWFyY2gtZm9ybSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5lbmQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbjogYXV0byAzMHB4IGF1dG8gYXV0bztcblxuICAgICAgLmlucHV0IHtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VhcmNoLWlucHV0LWJhY2tncm91bmQpO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAwMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZm9ybS1maWVsZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAuZmlsdGVyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgfVxuICB9XG59XG5cbi5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jYXJkLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG5cbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgLm1hdC1vcHRncm91cC1sYWJlbCwgLm1hdC1vcHRpb24tdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcikgIWltcG9ydGFudDtcbiAgfVxufVxuXG4iLCJhcHAtaGVhZGVyIC5oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBzdXBwb3J0cyAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpKSBvciAoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCkpIHtcbiAgYXBwLWhlYWRlciAuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1ibHVyKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gIH1cbiAgYXBwLWhlYWRlciAuaGVhZGVyIC5zZWFyY2ggLmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWFyY2gtaW5wdXQtYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbiAgfVxufVxuYXBwLWhlYWRlciAuaGVhZGVyIC5qdW1pYS1sb2dvIHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogNCU7XG59XG5hcHAtaGVhZGVyIC5oZWFkZXIgLnNlYXJjaCwgYXBwLWhlYWRlciAuaGVhZGVyIC5zZXR0aW5ncyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuYXBwLWhlYWRlciAuaGVhZGVyIC5zZWFyY2gtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5hcHAtaGVhZGVyIC5oZWFkZXIgLmVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0byAzMHB4IGF1dG8gYXV0bztcbn1cbmFwcC1oZWFkZXIgLmhlYWRlciAuZW5kIC5pbnB1dCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlYXJjaC1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogNXB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG59XG5hcHAtaGVhZGVyIC5oZWFkZXIgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuYXBwLWhlYWRlciAuaGVhZGVyIC5mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5hcHAtaGVhZGVyIC5maWx0ZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmFwcC1oZWFkZXIgLmZpbHRlciAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jYXJkLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG4ubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRncm91cC1sYWJlbCwgLm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRpb24tdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XG59Il19 */"];



/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/services/search/search.service.ts");





class HeaderComponent {
    constructor(nyTimesService, router, searchService) {
        this.nyTimesService = nyTimesService;
        this.router = router;
        this.searchService = searchService;
        this.headerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            options: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.optionsGroup = [];
        // TODO Externalize this options/config
        this.optionsGroup = [
            {
                group: 'Type',
                options: [{
                        label: 'Article',
                        name: 'Article'
                    }, {
                        label: 'Audio',
                        name: 'Audio'
                    }, {
                        label: 'Video',
                        name: 'Video'
                    }
                ]
            },
            {
                group: 'Section',
                options: [
                    {
                        label: 'Arts',
                        name: 'Arts'
                    },
                    {
                        label: 'Business',
                        name: 'Business'
                    },
                    {
                        label: 'Opinion',
                        name: 'Opinion'
                    },
                    {
                        label: 'World',
                        name: 'World'
                    }
                ]
            }
        ];
    }
    /**
     * When click search it uses the value in the search input box,
     * and redirects to search page with the respective value.
     */
    search() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const searchValue = this.headerForm.get('search').value;
            yield this.searchService.emitSearch(searchValue);
            yield this.router.navigate(['/search'], { queryParams: { search: searchValue } });
        });
    }
    changeSelect() {
        this.optionSelect.open();
    }
    select(group, option) {
        alert('WIP (work in progress)\nGroup: ' + group + ' Option:' + option);
    }
}


/***/ }),

/***/ "./src/app/components/new-preview/new-preview.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/new-preview/new-preview.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_NewPreviewComponent, View_NewPreviewComponent_0, View_NewPreviewComponent_Host_0, NewPreviewComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NewPreviewComponent", function() { return RenderType_NewPreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewPreviewComponent_0", function() { return View_NewPreviewComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewPreviewComponent_Host_0", function() { return View_NewPreviewComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPreviewComponentNgFactory", function() { return NewPreviewComponentNgFactory; });
/* harmony import */ var _new_preview_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-preview.component.scss.ngstyle */ "./src/app/components/new-preview/new-preview.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _new_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-preview.component */ "./src/app/components/new-preview/new-preview.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_NewPreviewComponent = [_new_preview_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NewPreviewComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_NewPreviewComponent, data: {} });

function View_NewPreviewComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.image; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.new.headLine; _ck(_v, 4, 0, currVal_1); }); }
function View_NewPreviewComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "only-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.new.headLine; _ck(_v, 1, 0, currVal_0); }); }
function View_NewPreviewComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "preview-card"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showDetail() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPreviewComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPreviewComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "abstract"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.image; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.image; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.new.abstract; _ck(_v, 7, 0, currVal_2); }); }
function View_NewPreviewComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-new-preview", [], null, null, null, View_NewPreviewComponent_0, RenderType_NewPreviewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _new_preview_component__WEBPACK_IMPORTED_MODULE_3__["NewPreviewComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_5__["NYTimesService"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"]], null, null)], null, null); }
var NewPreviewComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-new-preview", _new_preview_component__WEBPACK_IMPORTED_MODULE_3__["NewPreviewComponent"], View_NewPreviewComponent_Host_0, { new: "new" }, {}, []);



/***/ }),

/***/ "./src/app/components/new-preview/new-preview.component.scss.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/components/new-preview/new-preview.component.scss.ngstyle.js ***!
  \******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".preview-card {\n  background: var(--main-card-background);\n  box-shadow: var(--card-shadow);\n  width: 100%;\n}\n.preview-card .only-title {\n  background: var(--card-title-background);\n  font-weight: bold;\n  font-size: 1.2rem;\n  padding: 10px;\n}\n@supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) or (--webkit-backdrop-filter: blur(10px)) {\n  .preview-card .only-title {\n    background: var(--card-title-background-blur);\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n  }\n}\n.preview-card .header {\n  height: 30%;\n  max-height: 300px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.preview-card .header .image {\n  height: 100%;\n  width: 100%;\n  min-height: 60px;\n}\n.preview-card .header .image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.preview-card .header .title {\n  position: absolute;\n  font-weight: bold;\n  font-size: 1.2rem;\n  background: var(--card-title-background);\n  padding: 10px;\n  bottom: 0;\n  width: calc(100% - 20px);\n}\n@supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) or (--webkit-backdrop-filter: blur(10px)) {\n  .preview-card .header .title {\n    background: var(--card-title-background-blur);\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n  }\n}\n.preview-card .header .full {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 50px;\n}\n.preview-card .content {\n  height: 70%;\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRyb21vbnRlaXJvL0Rlc2t0b3AvTmV3WW9ya1RpbWVzL0p1bWlhTmV3cy9zcmMvYXBwL2NvbXBvbmVudHMvbmV3LXByZXZpZXcvbmV3LXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXByZXZpZXcvbmV3LXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx1Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0FGO0FERUU7RUFDRSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNFO0lBQ0UsNkNBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDQU47QUFDRjtBRElFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRElJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0ZOO0FESU07RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGUjtBRE1JO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FDSk47QURPTTtFQUNFO0lBQ0UsNkNBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDTFI7QUFDRjtBRFNJO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1BOO0FEV0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXctcHJldmlldy9uZXctcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3LWNhcmQge1xuXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY2FyZC1iYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICB3aWR0aDogMTAwJTtcblxuICAub25seS10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC10aXRsZS1iYWNrZ3JvdW5kKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgQHN1cHBvcnRzIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkpIG9yICgtLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkpIHtcbiAgICAgICYge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLXRpdGxlLWJhY2tncm91bmQtYmx1cik7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC10aXRsZS1iYWNrZ3JvdW5kKTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG5cblxuICAgICAgQHN1cHBvcnRzIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkpIG9yICgtLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkpIHtcbiAgICAgICAgJiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC10aXRsZS1iYWNrZ3JvdW5kLWJsdXIpO1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5mdWxsIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbn1cbiIsIi5wcmV2aWV3LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNhcmQtYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJldmlldy1jYXJkIC5vbmx5LXRpdGxlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC10aXRsZS1iYWNrZ3JvdW5kKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuQHN1cHBvcnRzIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkpIG9yICgtLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkpIHtcbiAgLnByZXZpZXctY2FyZCAub25seS10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC10aXRsZS1iYWNrZ3JvdW5kLWJsdXIpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgfVxufVxuLnByZXZpZXctY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAzMCU7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByZXZpZXctY2FyZCAuaGVhZGVyIC5pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG4ucHJldmlldy1jYXJkIC5oZWFkZXIgLmltYWdlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByZXZpZXctY2FyZCAuaGVhZGVyIC50aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLXRpdGxlLWJhY2tncm91bmQpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbkBzdXBwb3J0cyAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpKSBvciAoLS13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpKSB7XG4gIC5wcmV2aWV3LWNhcmQgLmhlYWRlciAudGl0bGUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtdGl0bGUtYmFja2dyb3VuZC1ibHVyKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIH1cbn1cbi5wcmV2aWV3LWNhcmQgLmhlYWRlciAuZnVsbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ucHJldmlldy1jYXJkIC5jb250ZW50IHtcbiAgaGVpZ2h0OiA3MCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59Il19 */"];



/***/ }),

/***/ "./src/app/components/new-preview/new-preview.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-preview/new-preview.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPreviewComponent", function() { return NewPreviewComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _modals_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modals/detail-view/detail-view.component */ "./src/app/modals/detail-view/detail-view.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





class NewPreviewComponent {
    constructor(router, nyTimesService, bottomSheet) {
        this.router = router;
        this.nyTimesService = nyTimesService;
        this.bottomSheet = bottomSheet;
    }
    get new() {
        return this._new;
    }
    set new(new_) {
        let imageUrl = '';
        this._new = new_;
        if (!this._new.multimedia) {
            return;
        }
        if (!this._new.multimedia) {
            return;
        }
        if (this._new.multimedia.length === 0) {
            return;
        }
        /**
         * Usually the picture 32 uses a nice resolution,
         * however sometime this picture does not exist so we must use the first one (default)
         */
        if (this._new.multimedia[32]) {
            imageUrl = this._new.multimedia[32].url;
        }
        else {
            imageUrl = this._new.multimedia[0].url;
        }
        this.image = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["api"].nytimesResources.baseUrl + imageUrl;
    }
    /**
     * Open the details of the active new
     */
    showDetail() {
        this.nyTimesService.activeNew = this.new;
        this.bottomSheet.open(_modals_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_3__["DetailViewComponent"]);
    }
}


/***/ }),

/***/ "./src/app/components/new-search-preview/new-search-preview.component.ngfactory.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/new-search-preview/new-search-preview.component.ngfactory.js ***!
  \*****************************************************************************************/
/*! exports provided: RenderType_NewSearchPreviewComponent, View_NewSearchPreviewComponent_0, View_NewSearchPreviewComponent_Host_0, NewSearchPreviewComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NewSearchPreviewComponent", function() { return RenderType_NewSearchPreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewSearchPreviewComponent_0", function() { return View_NewSearchPreviewComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewSearchPreviewComponent_Host_0", function() { return View_NewSearchPreviewComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSearchPreviewComponentNgFactory", function() { return NewSearchPreviewComponentNgFactory; });
/* harmony import */ var _new_search_preview_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-search-preview.component.scss.ngstyle */ "./src/app/components/new-search-preview/new-search-preview.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _new_search_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-search-preview.component */ "./src/app/components/new-search-preview/new-search-preview.component.ts");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_NewSearchPreviewComponent = [_new_search_preview_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NewSearchPreviewComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_NewSearchPreviewComponent, data: {} });

function View_NewSearchPreviewComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "search-result"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showDetail() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "author"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.new.headLine; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.new.abstract; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.new.byline; _ck(_v, 6, 0, currVal_2); }); }
function View_NewSearchPreviewComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewSearchPreviewComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.new; _ck(_v, 1, 0, currVal_0); }, null); }
function View_NewSearchPreviewComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-new-search-preview", [], null, null, null, View_NewSearchPreviewComponent_0, RenderType_NewSearchPreviewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _new_search_preview_component__WEBPACK_IMPORTED_MODULE_3__["NewSearchPreviewComponent"], [_services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_4__["NYTimesService"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"]], null, null)], null, null); }
var NewSearchPreviewComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-new-search-preview", _new_search_preview_component__WEBPACK_IMPORTED_MODULE_3__["NewSearchPreviewComponent"], View_NewSearchPreviewComponent_Host_0, { new: "new" }, {}, []);



/***/ }),

/***/ "./src/app/components/new-search-preview/new-search-preview.component.scss.ngstyle.js":
/*!********************************************************************************************!*\
  !*** ./src/app/components/new-search-preview/new-search-preview.component.scss.ngstyle.js ***!
  \********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["app-new-search-preview .search-result {\n  width: 90%;\n  max-width: 700px;\n  background: var(--main-card-background);\n  box-shadow: var(--card-shadow);\n  margin: auto;\n  padding: 20px;\n}\napp-new-search-preview .search-result .title {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\napp-new-search-preview .search-result .text {\n  font-size: 1rem;\n  margin-top: 10px;\n}\napp-new-search-preview .search-result .author {\n  font-size: 0.8rem;\n  background-color: rgba(205, 205, 205, 0.2);\n  border-radius: 10px;\n  padding: 5px 16px;\n  margin: 20px 10px auto auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRyb21vbnRlaXJvL0Rlc2t0b3AvTmV3WW9ya1RpbWVzL0p1bWlhTmV3cy9zcmMvYXBwL2NvbXBvbmVudHMvbmV3LXNlYXJjaC1wcmV2aWV3L25ldy1zZWFyY2gtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uZXctc2VhcmNoLXByZXZpZXcvbmV3LXNlYXJjaC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNBTjtBREdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRE47QURJSTtFQUNFLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXNlYXJjaC1wcmV2aWV3L25ldy1zZWFyY2gtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1uZXctc2VhcmNoLXByZXZpZXcge1xuICAuc2VhcmNoLXJlc3VsdCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY2FyZC1iYWNrZ3JvdW5kKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5hdXRob3Ige1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNSwgMjA1LCAyMDUsIDAuMjApO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgbWFyZ2luOiAyMHB4IDEwcHggYXV0byBhdXRvO1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiYXBwLW5ldy1zZWFyY2gtcHJldmlldyAuc2VhcmNoLXJlc3VsdCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY2FyZC1iYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5hcHAtbmV3LXNlYXJjaC1wcmV2aWV3IC5zZWFyY2gtcmVzdWx0IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmFwcC1uZXctc2VhcmNoLXByZXZpZXcgLnNlYXJjaC1yZXN1bHQgLnRleHQge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5hcHAtbmV3LXNlYXJjaC1wcmV2aWV3IC5zZWFyY2gtcmVzdWx0IC5hdXRob3Ige1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDUsIDIwNSwgMjA1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTZweDtcbiAgbWFyZ2luOiAyMHB4IDEwcHggYXV0byBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59Il19 */"];



/***/ }),

/***/ "./src/app/components/new-search-preview/new-search-preview.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/new-search-preview/new-search-preview.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewSearchPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSearchPreviewComponent", function() { return NewSearchPreviewComponent; });
/* harmony import */ var _modals_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modals/detail-view/detail-view.component */ "./src/app/modals/detail-view/detail-view.component.ts");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



class NewSearchPreviewComponent {
    constructor(nyTimesService, bottomSheet) {
        this.nyTimesService = nyTimesService;
        this.bottomSheet = bottomSheet;
    }
    /**
     * Open the details of the active new.
     * In this case, the new selected on the search page
     */
    showDetail() {
        this.nyTimesService.activeNew = this.new;
        this.bottomSheet.open(_modals_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_0__["DetailViewComponent"]);
    }
}


/***/ }),

/***/ "./src/app/components/skeleton/skeleton.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/skeleton/skeleton.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_SkeletonComponent, View_SkeletonComponent_0, View_SkeletonComponent_Host_0, SkeletonComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SkeletonComponent", function() { return RenderType_SkeletonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SkeletonComponent_0", function() { return View_SkeletonComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SkeletonComponent_Host_0", function() { return View_SkeletonComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonComponentNgFactory", function() { return SkeletonComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/ngx-skeleton-loader/ngx-skeleton-loader.ngfactory */ "./node_modules/ngx-skeleton-loader/ngx-skeleton-loader.ngfactory.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var _skeleton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skeleton.component */ "./src/app/components/skeleton/skeleton.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_SkeletonComponent = [];
var RenderType_SkeletonComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_SkeletonComponent, data: {} });

function View_SkeletonComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ngx-skeleton-loader", [], null, null, null, _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgxSkeletonLoaderComponent_0"], _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgxSkeletonLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__["NgxSkeletonLoaderComponent"], [], { count: [0, "count"], appearance: [1, "appearance"], theme: [2, "theme"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { "background-color": 0, "background-image": 1 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.count; var currVal_1 = _co.appearance; var currVal_2 = _ck(_v, 2, 0, "var(--loader-color)", "linear-gradient(90deg,rgba(var(--main-text-background-rgb), 0),rgba(var(--main-text-background-rgb), 0.6),rgba(var(--main-text-background-rgb),0))"); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_SkeletonComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-skeleton", [], null, null, null, View_SkeletonComponent_0, RenderType_SkeletonComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _skeleton_component__WEBPACK_IMPORTED_MODULE_3__["SkeletonComponent"], [], null, null)], null, null); }
var SkeletonComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-skeleton", _skeleton_component__WEBPACK_IMPORTED_MODULE_3__["SkeletonComponent"], View_SkeletonComponent_Host_0, { count: "count", appearance: "appearance" }, {}, []);



/***/ }),

/***/ "./src/app/components/skeleton/skeleton.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/skeleton/skeleton.component.ts ***!
  \***********************************************************/
/*! exports provided: SkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonComponent", function() { return SkeletonComponent; });
/**
 * A simple component that uses ngx-skeleton-loader but adds the functionality to work with dark mode
 */
class SkeletonComponent {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/modals/detail-view/detail-view.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/modals/detail-view/detail-view.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_DetailViewComponent, View_DetailViewComponent_0, View_DetailViewComponent_Host_0, DetailViewComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DetailViewComponent", function() { return RenderType_DetailViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DetailViewComponent_0", function() { return View_DetailViewComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DetailViewComponent_Host_0", function() { return View_DetailViewComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewComponentNgFactory", function() { return DetailViewComponentNgFactory; });
/* harmony import */ var _detail_view_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-view.component.scss.ngstyle */ "./src/app/modals/detail-view/detail-view.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _detail_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail-view.component */ "./src/app/modals/detail-view/detail-view.component.ts");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_DetailViewComponent = [_detail_view_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DetailViewComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_DetailViewComponent, data: {} });

function View_DetailViewComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.image; _ck(_v, 1, 0, currVal_0); }); }
function View_DetailViewComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "div", [["class", "detail-view"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "header-tools"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "button", [["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.dismiss() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 9, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DetailViewComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "div", [["class", "text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "div", [["class", "content-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 4, "div", [["class", "detail-view-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "div", [["class", "main-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["class", "author"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 3, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "button", [["class", "keep-reading-btn"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goToLink() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Keep Reading"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_4 = _co.image; _ck(_v, 9, 0, currVal_4); var currVal_5 = "text"; var currVal_6 = (!_co.image ? "full-title" : ""); _ck(_v, 12, 0, currVal_5, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).inline; var currVal_3 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "warn")); _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_7 = _co.activeNew.headLine; _ck(_v, 14, 0, currVal_7); var currVal_8 = _co.activeNew.main_text; _ck(_v, 16, 0, currVal_8); var currVal_9 = _co.activeNew.abstract; _ck(_v, 19, 0, currVal_9); var currVal_10 = _co.activeNew.byline; _ck(_v, 21, 0, currVal_10); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled || null); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._animationMode === "NoopAnimations"); _ck(_v, 23, 0, currVal_11, currVal_12); }); }
function View_DetailViewComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DetailViewComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.activeNew; _ck(_v, 1, 0, currVal_0); }, null); }
function View_DetailViewComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-detail-view", [], null, null, null, View_DetailViewComponent_0, RenderType_DetailViewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _detail_view_component__WEBPACK_IMPORTED_MODULE_9__["DetailViewComponent"], [_services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_10__["NYTimesService"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DetailViewComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-detail-view", _detail_view_component__WEBPACK_IMPORTED_MODULE_9__["DetailViewComponent"], View_DetailViewComponent_Host_0, { url: "url" }, {}, []);



/***/ }),

/***/ "./src/app/modals/detail-view/detail-view.component.scss.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/modals/detail-view/detail-view.component.scss.ngstyle.js ***!
  \**************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["app-detail-view .detail-view .header {\n  display: flex;\n  margin-bottom: 20px;\n}\napp-detail-view .detail-view .header .title {\n  font-size: 3rem;\n  font-family: \"Playfair Display\", serif;\n  font-weight: bold;\n  padding: 0px 10px;\n  margin-bottom: 20px;\n}\napp-detail-view .detail-view .header .full-title {\n  width: 100%;\n}\napp-detail-view .detail-view .header .image {\n  width: 50%;\n  margin-right: 20px;\n}\napp-detail-view .detail-view .header .image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\napp-detail-view .detail-view .text {\n  display: table;\n  width: 50%;\n}\napp-detail-view .detail-view .content-text {\n  padding: 10px;\n  text-align: justify;\n  font-size: 1.2rem;\n}\napp-detail-view .detail-view .main-text {\n  padding: 10px;\n  text-align: justify;\n  opacity: 0.9;\n  font-size: 1.1rem;\n}\napp-detail-view .detail-view .author {\n  text-align: end;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  width: calc(100% - 10px);\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\napp-detail-view .detail-view .footer {\n  width: 100%;\n  margin-top: 30px;\n  margin-bottom: 20px;\n  text-align: center;\n}\napp-detail-view .detail-view .footer .keep-reading-btn {\n  border-color: rgba(var(--main-text-rgb), 0.4);\n}\napp-detail-view .header-tools {\n  margin-bottom: 10px;\n  width: 100%;\n  text-align: end;\n}\napp-detail-view .header-tools .dismiss-btn {\n  border-color: rgba(var(--main-text-rgb), 0.4);\n}\n@media screen and (max-width: 750px) {\n  app-detail-view .header {\n    display: block !important;\n  }\n  app-detail-view .header .image {\n    width: 100% !important;\n    margin: 20px auto !important;\n  }\n  app-detail-view .header .text {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRyb21vbnRlaXJvL0Rlc2t0b3AvTmV3WW9ya1RpbWVzL0p1bWlhTmV3cy9zcmMvYXBwL21vZGFscy9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2RldGFpbC12aWV3L2RldGFpbC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDRE47QURHTTtFQUNFLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RSO0FESU07RUFDRSxXQUFBO0FDRlI7QURLTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES1E7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNIVjtBRFFJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNOTjtBRFNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNQTjtBRFVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDUk47QURXSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVE47QURZSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNWTjtBRFlNO0VBQ0UsNkNBQUE7QUNWUjtBRGVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2JKO0FEZUk7RUFDRSw2Q0FBQTtBQ2JOO0FEaUJFO0VBQ0U7SUFDRSx5QkFBQTtFQ2ZKO0VEaUJJO0lBQ0Usc0JBQUE7SUFDQSw0QkFBQTtFQ2ZOO0VEa0JJO0lBQ0Usc0JBQUE7RUNoQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1kZXRhaWwtdmlldyB7XG4gIC5kZXRhaWwtdmlldyB7XG4gICAgLmhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuZnVsbC10aXRsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuaW1hZ2Uge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtdGV4dCB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cblxuICAgIC5tYWluLXRleHQge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG5cbiAgICAuYXV0aG9yIHtcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLmtlZXAtcmVhZGluZy1idG4ge1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEodmFyKC0tbWFpbi10ZXh0LXJnYiksIDAuNCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci10b29scyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG5cbiAgICAuZGlzbWlzcy1idG4ge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLW1haW4tdGV4dC1yZ2IpLCAwLjQpO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgLmhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuXG4gICAgICAuaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0byAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsImFwcC1kZXRhaWwtdmlldyAuZGV0YWlsLXZpZXcgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5hcHAtZGV0YWlsLXZpZXcgLmRldGFpbC12aWV3IC5oZWFkZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5hcHAtZGV0YWlsLXZpZXcgLmRldGFpbC12aWV3IC5oZWFkZXIgLmZ1bGwtdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbn1cbmFwcC1kZXRhaWwtdmlldyAuZGV0YWlsLXZpZXcgLmhlYWRlciAuaW1hZ2Uge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5hcHAtZGV0YWlsLXZpZXcgLmRldGFpbC12aWV3IC5oZWFkZXIgLmltYWdlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuYXBwLWRldGFpbC12aWV3IC5kZXRhaWwtdmlldyAudGV4dCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogNTAlO1xufVxuYXBwLWRldGFpbC12aWV3IC5kZXRhaWwtdmlldyAuY29udGVudC10ZXh0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5hcHAtZGV0YWlsLXZpZXcgLmRldGFpbC12aWV3IC5tYWluLXRleHQge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBvcGFjaXR5OiAwLjk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuYXBwLWRldGFpbC12aWV3IC5kZXRhaWwtdmlldyAuYXV0aG9yIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuYXBwLWRldGFpbC12aWV3IC5kZXRhaWwtdmlldyAuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmFwcC1kZXRhaWwtdmlldyAuZGV0YWlsLXZpZXcgLmZvb3RlciAua2VlcC1yZWFkaW5nLWJ0biB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1tYWluLXRleHQtcmdiKSwgMC40KTtcbn1cbmFwcC1kZXRhaWwtdmlldyAuaGVhZGVyLXRvb2xzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbmFwcC1kZXRhaWwtdmlldyAuaGVhZGVyLXRvb2xzIC5kaXNtaXNzLWJ0biB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1tYWluLXRleHQtcmdiKSwgMC40KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIGFwcC1kZXRhaWwtdmlldyAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIGFwcC1kZXRhaWwtdmlldyAuaGVhZGVyIC5pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDIwcHggYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIGFwcC1kZXRhaWwtdmlldyAuaGVhZGVyIC50ZXh0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/modals/detail-view/detail-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modals/detail-view/detail-view.component.ts ***!
  \*************************************************************/
/*! exports provided: DetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewComponent", function() { return DetailViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Utils */ "./src/app/utils/Utils.ts");





class DetailViewComponent {
    constructor(nyTimesService, bottomSheetRef) {
        this.nyTimesService = nyTimesService;
        this.bottomSheetRef = bottomSheetRef;
        this.image = '';
    }
    ngOnInit() {
        this.activeNew = this.nyTimesService.activeNew;
        let imageUrl = '';
        if (!this.activeNew.multimedia) {
            return;
        }
        if (this.activeNew.multimedia.length === 0) {
            return;
        }
        /**
         * TODO Create a method in Utils to handle this, since we got the same behaviour in the new-preview component
         * Usually the picture 32 uses a nice resolution,
         * however sometime this picture does not exist so we must use the first one (default)
         */
        if (this.activeNew.multimedia[32]) {
            imageUrl = this.activeNew.multimedia[32].url;
        }
        else {
            imageUrl = this.activeNew.multimedia[0].url;
        }
        this.image = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["api"].nytimesResources.baseUrl + imageUrl;
    }
    dismiss() {
        this.bottomSheetRef.dismiss();
    }
    /**
     * Open the active new in the New York Times page
     */
    goToLink() {
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__["WebUtils"].goToLink(this.activeNew.redirect);
    }
}


/***/ }),

/***/ "./src/app/model/News.ts":
/*!*******************************!*\
  !*** ./src/app/model/News.ts ***!
  \*******************************/
/*! exports provided: SimpleSearchNew */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSearchNew", function() { return SimpleSearchNew; });
class SimpleSearchNew {
    constructor(nytimesSearchNew) {
        if (!nytimesSearchNew) {
            this.byline = '';
            this.headLine = '';
            this.main_text = '';
            this.redirect = '';
            this.multimedia = [];
            this.abstract = '';
            this.date = '';
        }
        else {
            this.byline = nytimesSearchNew.byline.original;
            this.headLine = nytimesSearchNew.headline.main;
            this.main_text = nytimesSearchNew.lead_paragraph;
            this.redirect = nytimesSearchNew.web_url;
            this.multimedia = nytimesSearchNew.multimedia;
            this.abstract = nytimesSearchNew.abstract;
            this.date = nytimesSearchNew.pub_date;
        }
    }
}


/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_LandingPageComponent, View_LandingPageComponent_0, View_LandingPageComponent_Host_0, LandingPageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LandingPageComponent", function() { return RenderType_LandingPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingPageComponent_0", function() { return View_LandingPageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingPageComponent_Host_0", function() { return View_LandingPageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponentNgFactory", function() { return LandingPageComponentNgFactory; });
/* harmony import */ var _landing_page_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page.component.scss.ngstyle */ "./src/app/pages/landing-page/landing-page.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm2015/ngx-masonry.js");
/* harmony import */ var _components_skeleton_skeleton_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/skeleton/skeleton.component.ngfactory */ "./src/app/components/skeleton/skeleton.component.ngfactory.js");
/* harmony import */ var _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/skeleton/skeleton.component */ "./src/app/components/skeleton/skeleton.component.ts");
/* harmony import */ var _node_modules_ngx_masonry_ngx_masonry_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ngx-masonry/ngx-masonry.ngfactory */ "./node_modules/ngx-masonry/ngx-masonry.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_new_preview_new_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/new-preview/new-preview.component.ngfactory */ "./src/app/components/new-preview/new-preview.component.ngfactory.js");
/* harmony import */ var _components_new_preview_new_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/new-preview/new-preview.component */ "./src/app/components/new-preview/new-preview.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _pipes_mock_number_mock_number_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/mock-number/mock-number.pipe */ "./src/app/pipes/mock-number/mock-number.pipe.ts");
/* harmony import */ var _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/paginator/typings/index.ngfactory */ "./node_modules/@angular/material/paginator/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/pages/landing-page/landing-page.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















var styles_LandingPageComponent = [_landing_page_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LandingPageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_LandingPageComponent, data: {} });

function View_LandingPageComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "new skel"], ["ngxMasonryItem", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4341760, null, 0, ngx_masonry__WEBPACK_IMPORTED_MODULE_2__["NgxMasonryDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_masonry__WEBPACK_IMPORTED_MODULE_2__["NgxMasonryComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-skeleton", [["appearance", "line"], ["class", "skel-image"], ["count", "1"]], null, null, null, _components_skeleton_skeleton_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_SkeletonComponent_0"], _components_skeleton_skeleton_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_SkeletonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_4__["SkeletonComponent"], [], { count: [0, "count"], appearance: [1, "appearance"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "app-skeleton", [["appearance", "line"], ["class", "skel-title"], ["count", "1"]], null, null, null, _components_skeleton_skeleton_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_SkeletonComponent_0"], _components_skeleton_skeleton_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_SkeletonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_4__["SkeletonComponent"], [], { count: [0, "count"], appearance: [1, "appearance"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-skeleton", [["appearance", "line"], ["class", "skel-description"], ["count", "3"]], null, null, null, _components_skeleton_skeleton_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_SkeletonComponent_0"], _components_skeleton_skeleton_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_SkeletonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_4__["SkeletonComponent"], [], { count: [0, "count"], appearance: [1, "appearance"] }, null)], function (_ck, _v) { var currVal_0 = "1"; var currVal_1 = "line"; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = "1"; var currVal_3 = "line"; _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_4 = "3"; var currVal_5 = "line"; _ck(_v, 7, 0, currVal_4, currVal_5); }, null); }
function View_LandingPageComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "ngx-masonry", [["class", "grid"]], null, null, null, _node_modules_ngx_masonry_ngx_masonry_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_NgxMasonryComponent_0"], _node_modules_ngx_masonry_ngx_masonry_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_NgxMasonryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, ngx_masonry__WEBPACK_IMPORTED_MODULE_2__["NgxMasonryComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { options: [0, "options"], useImagesLoaded: [1, "useImagesLoaded"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_LandingPageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.gridOptionsMock; var currVal_1 = true; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), 10)); _ck(_v, 3, 0, currVal_2); }, null); }
function View_LandingPageComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "new"], ["ngxMasonryItem", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4341760, null, 0, ngx_masonry__WEBPACK_IMPORTED_MODULE_2__["NgxMasonryDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_masonry__WEBPACK_IMPORTED_MODULE_2__["NgxMasonryComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-new-preview", [], null, null, null, _components_new_preview_new_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_NewPreviewComponent_0"], _components_new_preview_new_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_NewPreviewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _components_new_preview_new_preview_component__WEBPACK_IMPORTED_MODULE_8__["NewPreviewComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_10__["NYTimesService"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheet"]], { new: [0, "new"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 3, 0, currVal_0); }, null); }
function View_LandingPageComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "ngx-masonry", [["class", "grid"]], null, null, null, _node_modules_ngx_masonry_ngx_masonry_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_NgxMasonryComponent_0"], _node_modules_ngx_masonry_ngx_masonry_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_NgxMasonryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, ngx_masonry__WEBPACK_IMPORTED_MODULE_2__["NgxMasonryComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { options: [0, "options"], useImagesLoaded: [1, "useImagesLoaded"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_LandingPageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.gridOptions; var currVal_1 = true; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.news; _ck(_v, 3, 0, currVal_2); }, null); }
function View_LandingPageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_mock_number_mock_number_pipe__WEBPACK_IMPORTED_MODULE_12__["MockNumberPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "page-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Latest News\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "latest-news content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LandingPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LandingPageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "paginator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "div", [["class", "text"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goToLink() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Data provided by "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["The New York Times"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "mat-paginator", [["class", "mat-paginator"]], null, [[null, "page"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("page" === en)) {
        var pd_0 = (_co.onPage($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatPaginator_0"], _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatPaginator"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 245760, null, 0, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { length: [0, "length"], pageSize: [1, "pageSize"] }, { page: "page" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loading; _ck(_v, 5, 0, currVal_0); var currVal_1 = !_co.loading; _ck(_v, 7, 0, currVal_1); var currVal_2 = 50; var currVal_3 = 10; _ck(_v, 14, 0, currVal_2, currVal_3); }, null); }
function View_LandingPageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-landing-page", [], null, null, null, View_LandingPageComponent_0, RenderType_LandingPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _landing_page_component__WEBPACK_IMPORTED_MODULE_15__["LandingPageComponent"], [_services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_10__["NYTimesService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LandingPageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-landing-page", _landing_page_component__WEBPACK_IMPORTED_MODULE_15__["LandingPageComponent"], View_LandingPageComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.component.scss.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.scss.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["app-landing-page .skel .skel-image .loader {\n  height: 80px;\n}\napp-landing-page .skel .skel-text .loader {\n  height: 20px;\n}\napp-landing-page .skel .skel-description .loader {\n  height: 10px;\n}\napp-landing-page .latest-news .grid {\n  margin: auto;\n  justify-content: center;\n}\napp-landing-page .latest-news .grid .new {\n  width: var(--card-preview-size);\n  margin: 30px;\n}\napp-landing-page .paginator {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background: var(--header-background);\n  padding-bottom: env(safe-area-inset-bottom);\n}\napp-landing-page .paginator .text {\n  margin-left: 20px;\n  cursor: pointer;\n}\n@supports ((-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))) or (-webkit-backdrop-filter: blur(15px)) {\n  app-landing-page .paginator {\n    background: var(--header-background-blur);\n    -webkit-backdrop-filter: blur(15px);\n            backdrop-filter: blur(15px);\n  }\n  app-landing-page .paginator .search .input {\n    background: rgba(218, 218, 218, 0.57) !important;\n  }\n}\napp-landing-page .paginator .mat-paginator {\n  background: transparent !important;\n  color: var(--main-text-color);\n  margin: auto 20px auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRyb21vbnRlaXJvL0Rlc2t0b3AvTmV3WW9ya1RpbWVzL0p1bWlhTmV3cy9zcmMvYXBwL3BhZ2VzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSU07RUFDRSxZQUFBO0FDSFI7QURTTTtFQUNFLFlBQUE7QUNQUjtBRFlNO0VBQ0UsWUFBQTtBQ1ZSO0FEa0JJO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FDaEJOO0FEa0JNO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0FDaEJSO0FEcUJFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFJQSwyQ0FBQTtBQ3RCSjtBRHdCSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ3RCTjtBRHlCSTtFQUNFO0lBQ0UseUNBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDdkJOO0VEMEJJO0lBQ0UsZ0RBQUE7RUN4Qk47QUFDRjtBRDJCSTtFQUNFLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQ3pCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbGFuZGluZy1wYWdlIHtcblxuICAuc2tlbCB7XG4gICAgLnNrZWwtaW1hZ2Uge1xuICAgICAgLmxvYWRlciB7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2tlbC10ZXh0IHtcblxuICAgICAgLmxvYWRlciB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2tlbC1kZXNjcmlwdGlvbiB7XG4gICAgICAubG9hZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLmxhdGVzdC1uZXdzIHtcblxuICAgIC5ncmlkIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAubmV3IHtcbiAgICAgICAgd2lkdGg6IHZhcigtLWNhcmQtcHJldmlldy1zaXplKTtcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wYWdpbmF0b3Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcblxuXG4gICAgLy8gUHJldmVudCBpcGhvbmUvYW5kcm9pZCBub3RjaFxuICAgIHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG5cbiAgICAudGV4dCB7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBAc3VwcG9ydHMgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KSkgb3IgKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpKSB7XG4gICAgICAmIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtYmx1cik7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgICAgIH1cblxuICAgICAgJiAuc2VhcmNoIC5pbnB1dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjE4LCAyMTgsIDIxOCwgMC41NykgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXBhZ2luYXRvciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XG4gICAgICBtYXJnaW46IGF1dG8gMjBweCBhdXRvIGF1dG87XG4gICAgfVxuICB9XG59XG4iLCJhcHAtbGFuZGluZy1wYWdlIC5za2VsIC5za2VsLWltYWdlIC5sb2FkZXIge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5hcHAtbGFuZGluZy1wYWdlIC5za2VsIC5za2VsLXRleHQgLmxvYWRlciB7XG4gIGhlaWdodDogMjBweDtcbn1cbmFwcC1sYW5kaW5nLXBhZ2UgLnNrZWwgLnNrZWwtZGVzY3JpcHRpb24gLmxvYWRlciB7XG4gIGhlaWdodDogMTBweDtcbn1cbmFwcC1sYW5kaW5nLXBhZ2UgLmxhdGVzdC1uZXdzIC5ncmlkIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmFwcC1sYW5kaW5nLXBhZ2UgLmxhdGVzdC1uZXdzIC5ncmlkIC5uZXcge1xuICB3aWR0aDogdmFyKC0tY2FyZC1wcmV2aWV3LXNpemUpO1xuICBtYXJnaW46IDMwcHg7XG59XG5hcHAtbGFuZGluZy1wYWdlIC5wYWdpbmF0b3Ige1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbn1cbmFwcC1sYW5kaW5nLXBhZ2UgLnBhZ2luYXRvciAudGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5Ac3VwcG9ydHMgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KSkgb3IgKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpKSB7XG4gIGFwcC1sYW5kaW5nLXBhZ2UgLnBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtYmx1cik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICB9XG4gIGFwcC1sYW5kaW5nLXBhZ2UgLnBhZ2luYXRvciAuc2VhcmNoIC5pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTgsIDIxOCwgMjE4LCAwLjU3KSAhaW1wb3J0YW50O1xuICB9XG59XG5hcHAtbGFuZGluZy1wYWdlIC5wYWdpbmF0b3IgLm1hdC1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luOiBhdXRvIDIwcHggYXV0byBhdXRvO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.ts ***!
  \**************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Utils */ "./src/app/utils/Utils.ts");




class LandingPageComponent {
    constructor(nyTimesService) {
        this.nyTimesService = nyTimesService;
        this.news = [];
        this.loading = true;
        this.gridOptions = {
            transitionDuration: '1.2s',
            fitWidth: true
        };
        this.gridOptionsMock = {
            transitionDuration: '0',
            fitWidth: true
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.news = yield this.nyTimesService.getLatestNews(0);
            this.loading = false;
        });
    }
    /**
     * Triggered when the page (pagination) changes
     * @param event - includes a pageIndex property, that returns the page index
     */
    onPage(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const pageIndex = event.pageIndex;
            this.news = [];
            this.loading = true;
            this.news = yield this.nyTimesService.getLatestNews(pageIndex);
            this.loading = false;
        });
    }
    /**
     * Go to the API author page, as specified in https://developer.nytimes.com/branding
     */
    goToLink() {
        _utils_Utils__WEBPACK_IMPORTED_MODULE_3__["WebUtils"].goToLink('https://developer.nytimes.com');
    }
}


/***/ }),

/***/ "./src/app/pages/search-page/search-page.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/pages/search-page/search-page.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_SearchPageComponent, View_SearchPageComponent_0, View_SearchPageComponent_Host_0, SearchPageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SearchPageComponent", function() { return RenderType_SearchPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SearchPageComponent_0", function() { return View_SearchPageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SearchPageComponent_Host_0", function() { return View_SearchPageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponentNgFactory", function() { return SearchPageComponentNgFactory; });
/* harmony import */ var _search_page_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-page.component.scss.ngstyle */ "./src/app/pages/search-page/search-page.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_lottie_angular2_dist_esm_src_lottieAnimationView_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/lottie-angular2/dist/esm/src/lottieAnimationView.component.ngfactory */ "./node_modules/lottie-angular2/dist/esm/src/lottieAnimationView.component.ngfactory.js");
/* harmony import */ var lottie_angular2_dist_esm_src_lottieAnimationView_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-angular2/dist/esm/src/lottieAnimationView.component */ "./node_modules/lottie-angular2/dist/esm/src/lottieAnimationView.component.js");
/* harmony import */ var _components_new_search_preview_new_search_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/new-search-preview/new-search-preview.component.ngfactory */ "./src/app/components/new-search-preview/new-search-preview.component.ngfactory.js");
/* harmony import */ var _components_new_search_preview_new_search_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/new-search-preview/new-search-preview.component */ "./src/app/components/new-search-preview/new-search-preview.component.ts");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _search_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-page.component */ "./src/app/pages/search-page/search-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/services/search/search.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_SearchPageComponent = [_search_page_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SearchPageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_SearchPageComponent, data: {} });

function View_SearchPageComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "not-found"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "lottie-animation-view", [["height", "500"]], null, null, null, _node_modules_lottie_angular2_dist_esm_src_lottieAnimationView_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LottieAnimationViewComponent_0"], _node_modules_lottie_angular2_dist_esm_src_lottieAnimationView_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LottieAnimationViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, lottie_angular2_dist_esm_src_lottieAnimationView_component__WEBPACK_IMPORTED_MODULE_3__["LottieAnimationViewComponent"], [], { options: [0, "options"], height: [1, "height"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Sorry We couldn't find any result for your search "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.lottieConfigNotFound; var currVal_1 = "500"; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_SearchPageComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "loading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "lottie-animation-view", [["height", "500"]], null, null, null, _node_modules_lottie_angular2_dist_esm_src_lottieAnimationView_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LottieAnimationViewComponent_0"], _node_modules_lottie_angular2_dist_esm_src_lottieAnimationView_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LottieAnimationViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, lottie_angular2_dist_esm_src_lottieAnimationView_component__WEBPACK_IMPORTED_MODULE_3__["LottieAnimationViewComponent"], [], { options: [0, "options"], height: [1, "height"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" We are looking for the best news of course... "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.lottieConfigLoading; var currVal_1 = "500"; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_SearchPageComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "new-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-new-search-preview", [], null, null, null, _components_new_search_preview_new_search_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NewSearchPreviewComponent_0"], _components_new_search_preview_new_search_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NewSearchPreviewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _components_new_search_preview_new_search_preview_component__WEBPACK_IMPORTED_MODULE_5__["NewSearchPreviewComponent"], [_services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_6__["NYTimesService"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"]], { new: [0, "new"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SearchPageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "page-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Search "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "next-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "div", [["class", "search content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SearchPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SearchPageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "news-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SearchPageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.notFound; _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.loading; _ck(_v, 8, 0, currVal_2); var currVal_3 = _co.searchNews; _ck(_v, 11, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.searchTerm; _ck(_v, 3, 0, currVal_0); }); }
function View_SearchPageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-search-page", [], null, null, null, View_SearchPageComponent_0, RenderType_SearchPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _search_page_component__WEBPACK_IMPORTED_MODULE_9__["SearchPageComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_6__["NYTimesService"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_11__["SearchService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SearchPageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-search-page", _search_page_component__WEBPACK_IMPORTED_MODULE_9__["SearchPageComponent"], View_SearchPageComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/search-page/search-page.component.scss.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/pages/search-page/search-page.component.scss.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["app-search-page .not-found, app-search-page .loading {\n  font-size: 3rem;\n  width: 70%;\n  margin: auto;\n  text-align: center;\n}\napp-search-page .news-list .new-item {\n  margin: 40px;\n  -webkit-animation: enter-new 1.2s ease-in-out forwards;\n          animation: enter-new 1.2s ease-in-out forwards;\n  opacity: 0;\n}\n@-webkit-keyframes enter-new {\n  0% {\n    opacity: 0;\n    transform: translateY(50px) scale(0.8);\n  }\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n@keyframes enter-new {\n  0% {\n    opacity: 0;\n    transform: translateY(50px) scale(0.8);\n  }\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\napp-search-page .new-item:nth-child(0n) {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\napp-search-page .new-item:nth-child(1n) {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\napp-search-page .new-item:nth-child(2n) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\napp-search-page .new-item:nth-child(3n) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\napp-search-page .new-item:nth-child(4n) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\napp-search-page .new-item:nth-child(5n) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\napp-search-page .new-item:nth-child(6n) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\napp-search-page .new-item:nth-child(7n) {\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s;\n}\napp-search-page .new-item:nth-child(8n) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\napp-search-page .new-item:nth-child(9n) {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZWRyb21vbnRlaXJvL0Rlc2t0b3AvTmV3WW9ya1RpbWVzL0p1bWlhTmV3cy9zcmMvYXBwL3BhZ2VzL3NlYXJjaC1wYWdlL3NlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gtcGFnZS9zZWFyY2gtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREo7QURLSTtFQUNFLFlBQUE7RUFDQSxzREFBQTtVQUFBLDhDQUFBO0VBQ0EsVUFBQTtBQ0hOO0FET0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQ0FBQTtFQ0xKO0VEUUU7SUFDRSxpQ0FBQTtJQUNBLFVBQUE7RUNOSjtBQUNGO0FESEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQ0FBQTtFQ0xKO0VEUUU7SUFDRSxpQ0FBQTtJQUNBLFVBQUE7RUNOSjtBQUNGO0FEV0k7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDVE47QURRSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUNOTjtBREtJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ0hOO0FERUk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDQU47QURESTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUNHTjtBREpJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ01OO0FEUEk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDU047QURWSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUNZTjtBRGJJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ2VOO0FEaEJJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ2tCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1wYWdlL3NlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXNlYXJjaC1wYWdlIHtcblxuICAubm90LWZvdW5kLCAubG9hZGluZyB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5uZXdzLWxpc3Qge1xuICAgIC5uZXctaXRlbSB7XG4gICAgICBtYXJnaW46IDQwcHg7XG4gICAgICBhbmltYXRpb246IGVudGVyLW5ldyAxLjJzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGVudGVyLW5ldyB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KSBzY2FsZSgwLjgpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICAvLyBBbmltYXRlIGVhY2ggbmV3LCB3ZSBjYW4gc2V0IDEwIGJlY2F1c2Ugb25seSAxMCBuZXdzIGFyZSBsb2FkZWQgZnJvbSB0aGUgQVBJXG4gIEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggOSB7XG4gICAgLm5ldy1pdGVtOm50aC1jaGlsZCgjeyRpfW4pIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogI3skaSAqIDAuMX1zO1xuICAgIH1cbiAgfVxufVxuIiwiYXBwLXNlYXJjaC1wYWdlIC5ub3QtZm91bmQsIGFwcC1zZWFyY2gtcGFnZSAubG9hZGluZyB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5hcHAtc2VhcmNoLXBhZ2UgLm5ld3MtbGlzdCAubmV3LWl0ZW0ge1xuICBtYXJnaW46IDQwcHg7XG4gIGFuaW1hdGlvbjogZW50ZXItbmV3IDEuMnMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIG9wYWNpdHk6IDA7XG59XG5Aa2V5ZnJhbWVzIGVudGVyLW5ldyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KSBzY2FsZSgwLjgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5hcHAtc2VhcmNoLXBhZ2UgLm5ldy1pdGVtOm50aC1jaGlsZCgwbikge1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xufVxuYXBwLXNlYXJjaC1wYWdlIC5uZXctaXRlbTpudGgtY2hpbGQoMW4pIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xufVxuYXBwLXNlYXJjaC1wYWdlIC5uZXctaXRlbTpudGgtY2hpbGQoMm4pIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuYXBwLXNlYXJjaC1wYWdlIC5uZXctaXRlbTpudGgtY2hpbGQoM24pIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xufVxuYXBwLXNlYXJjaC1wYWdlIC5uZXctaXRlbTpudGgtY2hpbGQoNG4pIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuYXBwLXNlYXJjaC1wYWdlIC5uZXctaXRlbTpudGgtY2hpbGQoNW4pIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuYXBwLXNlYXJjaC1wYWdlIC5uZXctaXRlbTpudGgtY2hpbGQoNm4pIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuYXBwLXNlYXJjaC1wYWdlIC5uZXctaXRlbTpudGgtY2hpbGQoN24pIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xufVxuYXBwLXNlYXJjaC1wYWdlIC5uZXctaXRlbTpudGgtY2hpbGQoOG4pIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuYXBwLXNlYXJjaC1wYWdlIC5uZXctaXRlbTpudGgtY2hpbGQoOW4pIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/pages/search-page/search-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/search-page/search-page.component.ts ***!
  \************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_nytimes_nytimes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/nytimes/nytimes.service */ "./src/app/services/nytimes/nytimes.service.ts");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/services/search/search.service.ts");





class SearchPageComponent {
    constructor(route, nyTimesService, searchService) {
        this.route = route;
        this.nyTimesService = nyTimesService;
        this.searchService = searchService;
        this.notFound = false;
        this.loading = false;
        this.searchTerm = '';
        this.lottieConfigNotFound = {
            path: 'assets/lottie/not_found.json',
            autoplay: true,
            loop: true
        };
        this.lottieConfigLoading = {
            path: 'assets/lottie/loading.json',
            autoplay: true,
            loop: true
        };
        /**
         * When tha search button is clicked, it emits the following event
         */
        this.onSearchSubscriber = this.searchService.searchSubscription().subscribe((query) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.doSearch(query);
        }));
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.route.queryParams.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (!params) {
                    return;
                }
                if (!params.search === ( false || undefined)) {
                    return;
                }
                yield this.doSearch(params.search);
            }));
        });
    }
    ngOnDestroy() {
        if (this.onSearchSubscriber) {
            this.onSearchSubscriber.unsubscribe();
        }
    }
    /**
     * Handles the search of a query
     * @param query - value to search
     */
    doSearch(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.notFound = false;
            this.loading = true;
            this.searchNews = [];
            this.searchTerm = query;
            this.searchNews = yield this.nyTimesService.articleSearch(query);
            this.loading = false;
            if (this.searchNews.length === 0) {
                this.notFound = true;
            }
        });
    }
}


/***/ }),

/***/ "./src/app/pipes/mock-number/mock-number.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/pipes/mock-number/mock-number.pipe.ts ***!
  \*******************************************************/
/*! exports provided: MockNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockNumberPipe", function() { return MockNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/**
 * A simple pipe to simplify the repetition of mock elements in html
 */
class MockNumberPipe {
    transform(value, args) {
        const res = [];
        for (let i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    }
}


/***/ }),

/***/ "./src/app/services/nytimes/nytimes.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/nytimes/nytimes.service.ts ***!
  \*****************************************************/
/*! exports provided: NYTimesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NYTimesService", function() { return NYTimesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Utils */ "./src/app/utils/Utils.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_News__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/News */ "./src/app/model/News.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







class NYTimesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Returns the latest news in NY Times. . Performs an HTTP request to the NY Times API
     * @param page - index of page (page results) to search, defaults to 0 if it does not exist.
     */
    getLatestNews(page = 0) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["ApiUtils"].buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["api"].nytimesSearch.endpoint +
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__["api"].nytimesSearch.articleSearch + '?' +
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__["api"].nytimesSearch.search + '&' +
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__["api"].nytimesSearch.sort + 'newest&' +
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__["api"].nytimesSearch.page + page + '&' +
                _environments_environment__WEBPACK_IMPORTED_MODULE_3__["api"].nytimesSearch.filter + 'type_of_material=Article');
            const result = yield this.httpClient.get(url).toPromise();
            const jumiaNews = result.response.docs.map((new_) => {
                return new _model_News__WEBPACK_IMPORTED_MODULE_4__["SimpleSearchNew"](new_);
            });
            return jumiaNews;
        });
    }
    /**
     * Search an article by query. Performs an HTTP request to the NY Times API
     * @param query - value to search
     */
    articleSearch(query = '') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["ApiUtils"].buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["api"].nytimesSearch.endpoint + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["api"].nytimesSearch.articleSearch + '?' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["api"].nytimesSearch.search + query);
            const result = yield this.httpClient.get(url).toPromise();
            const filteredNews = result.response.docs.map((new_) => {
                return new _model_News__WEBPACK_IMPORTED_MODULE_4__["SimpleSearchNew"](new_);
            });
            return filteredNews;
        });
    }
}
NYTimesService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ factory: function NYTimesService_Factory() { return new NYTimesService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: NYTimesService, providedIn: "root" });


/***/ }),

/***/ "./src/app/services/search/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/search/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * TODO Check if this service is necessary
 * Simple service to handle search events
 */
class SearchService {
    constructor() {
        this.onSearch_ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    emitSearch(query) {
        this.onSearch_.emit(query);
    }
    searchSubscription() {
        return this.onSearch_;
    }
}
SearchService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function SearchService_Factory() { return new SearchService(); }, token: SearchService, providedIn: "root" });


/***/ }),

/***/ "./src/app/utils/Utils.ts":
/*!********************************!*\
  !*** ./src/app/utils/Utils.ts ***!
  \********************************/
/*! exports provided: ApiUtils, WebUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUtils", function() { return ApiUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebUtils", function() { return WebUtils; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

/**
 * A list of functions/helpers, it helps remove code duplications
 */
var ApiUtils;
(function (ApiUtils) {
    function buildUrl(enpointInfo) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["api"].nytimesBaseUrl + enpointInfo + '&api-key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["keys"].nytimesKey;
    }
    ApiUtils.buildUrl = buildUrl;
})(ApiUtils || (ApiUtils = {}));
var WebUtils;
(function (WebUtils) {
    function goToLink(link) {
        window.open(link, '_blank');
    }
    WebUtils.goToLink = goToLink;
})(WebUtils || (WebUtils = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, keys, api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const keys = {
    nytimesKey: 'IvhQAFMzllOVhuieLKqSJUUAFwGKCUPZ'
};
const api = {
    nytimesBaseUrl: 'https://api.nytimes.com',
    nytimesNewswire: {
        endpoint: '/svc/news/v3/content',
        all: '/all/all.json',
    },
    nytimesSearch: {
        endpoint: '/svc/search/v2',
        articleSearch: '/articlesearch.json',
        filter: 'fq=',
        sort: 'sort=',
        page: 'page=',
        search: 'q='
    },
    nytimesResources: {
        baseUrl: 'https://www.nytimes.com/'
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AppModuleNgFactory"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pedromonteiro/Desktop/NewYorkTimes/JumiaNews/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map