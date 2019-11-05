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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_shared_asyncServices_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/shared/asyncServices/services/global.service */ "./src/app/shared/asyncServices/services/global.service.ts");
/* harmony import */ var _shared_asyncServices_services_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/asyncServices/services/cookie.service */ "./src/app/shared/asyncServices/services/cookie.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AppComponent = /** @class */ (function () {
    function AppComponent(platformId, globalService, cookieService, renderer2) {
        var _this = this;
        this.platformId = platformId;
        this.globalService = globalService;
        this.cookieService = cookieService;
        this.renderer2 = renderer2;
        this.renderer = '';
        this.title = 'app';
        cookieService.get('hostClass')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return value.newValue; }))
            .subscribe(function (value) {
            if (value) {
                _this.renderer2.addClass(document.body, value);
            }
            else {
                _this.renderer2.removeClass(document.body, '_css_dark');
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.renderer = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId) ? 'Browser' : 'Server';
    };
    AppComponent.prototype.initializeHostClass = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [String, _app_shared_asyncServices_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _shared_asyncServices_services_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _shared_asyncServices_http_service_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/asyncServices/http/service.core */ "./src/app/shared/asyncServices/http/service.core.ts");
/* harmony import */ var _shared_asyncServices_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/asyncServices/services/global.service */ "./src/app/shared/asyncServices/services/global.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_asyncServices_services_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/asyncServices/services/cookie.service */ "./src/app/shared/asyncServices/services/cookie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { LazyLoadImageModule } from 'ng-lazyload-image';






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            ],
            imports: [
                // LazyLoadImageModule,
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'angular-universal-fireba-75b35' })
            ],
            providers: [
                _shared_asyncServices_http_service_core__WEBPACK_IMPORTED_MODULE_5__["ServiceCore"],
                _shared_asyncServices_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"],
                _shared_asyncServices_services_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");

var ROUTES = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], pathMatch: 'full' },
];


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.shareView = false;
        this.homeView = 'home';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.changeView = function (value) {
        this.homeView = value;
    };
    HomeComponent.prototype.share = function (value) {
        console.log(value);
        this.shareView = value;
        if (value === true) {
            document.body.style.backgroundColor = "#e1e1e1";
        }
        else {
            document.body.style.backgroundColor = "white";
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.template.html */ "./src/app/pages/home/home.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.template.html":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.template.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"_css_flex _css_flex--column _css_padding--md\" *ngIf=\"homeView==='home'\">\r\n    <span class=\"_css_round _css_margin-down--sm\">\r\n  \r\n    </span>\r\n    <span class=\"_css_text--bold _css_text--lg _css_margin-down--sm\">\r\n      My Desires\r\n    </span>\r\n    <span class=\"_css_text--md _css_margin-down--md\">\r\n      Your total saving is $2 344\r\n    </span>\r\n  \r\n    <div class=\"_css_flex _css_flex--between _css_margin-down--sm\">\r\n      <button class=\"_css_full--width _css_margin--right-xs\" (click)='changeView(\"dialog\")'>\r\n        <span class=\"fas fa-plus _css_padding--right-xs\"></span>\r\n        Create\r\n      </button>\r\n      <button class=\"_css_full--width _css_margin--right-xs\">\r\n        <span class=\"fas fa-globe-americas _css_padding--right-xs\"></span>\r\n        Insight\r\n      </button>\r\n      <button class=\"_css_full--width _css_margin--right-xs\">\r\n        <span class=\"fab fa-buffer _css_padding--right-xs\"></span>\r\n        Explore\r\n      </button>\r\n    </div>\r\n    <div class=\"_css_border _css_margin-down--md\">\r\n    </div>\r\n  \r\n    <span class=\"_css_text--md _css_text--bold  _css_margin-down--md\">\r\n      Challange\r\n    </span>\r\n    <div class=\"_css_card _css_padding--sm _css_margin-down--md\">\r\n      <span class=\"_css_margin-down--sm\">\r\n        Your friend supported to you\r\n      </span>\r\n      <div class=\"_css_flex _css_flex--align\">\r\n        <span class=\"_css_round-orange _css_margin--right-xs\">\r\n        </span>\r\n        <div class=\"_css_flex _css_flex--column\">\r\n          <span class=\"_css_text--bold\">\r\n            Special offer\r\n          </span>\r\n          <span>\r\n            with Zoommer\r\n          </span>\r\n        </div>\r\n        <button class=\"_css_margin-auto\" (click)=\"changeView('details')\">\r\n          Open\r\n        </button>\r\n      </div>\r\n    </div>\r\n  \r\n    <span class=\"_css_text--md _css_text--bold  _css_margin-down--md\">\r\n      Ongoing Desires\r\n    </span>\r\n  \r\n    <div class=\"_css_flex\">\r\n      <div class=\"_css_flex _css_flex--column _css_flex--between _css_ongoing _css_margin--right-xs\"\r\n        (click)=\"changeView('details')\">\r\n        <span class=\"_css_ongoing-icon\">\r\n  \r\n        </span>\r\n        <div class=\"_css_flex _css_flex--column\">\r\n          <span class=\"_css_text--bold _css_margin-down--sm\">\r\n            Apple Wath Sries 5\r\n          </span>\r\n          <div class=\"_progress-wrapp _css_margin-down--sm\">\r\n            <div class=\"_progress-content _progress-40\">\r\n  \r\n            </div>\r\n          </div>\r\n          <span class=\"_css_text--bold\">\r\n            40%\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"_css_flex _css_flex--column _css_flex--between _css_ongoing\">\r\n        <span class=\"_css_ongoing-icon\">\r\n  \r\n        </span>\r\n        <div class=\"_css_flex _css_flex--column\">\r\n          <span class=\"_css_text--bold _css_margin-down--sm\">\r\n            Summer Camping\r\n          </span>\r\n          <div class=\"_progress-wrapp _css_margin-down--sm\">\r\n            <div class=\"_progress-content _progress-10\">\r\n  \r\n            </div>\r\n          </div>\r\n          <span class=\"_css_text--bold\">\r\n            10%\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  \r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  <div class=\"_css_modal\" *ngIf=\"homeView==='dialog'\">\r\n    <div class=\"_css_flex _css_flex--center _css_flex--align _css_position-r _css_padding--md _css_border-header\">\r\n      <span class=\"_close\" (click)=\"changeView('home')\">x</span>\r\n      <span class=\"_css_text--bold _css_text--md\">\r\n        What do You desire?\r\n      </span>\r\n    </div>\r\n    <div class=\"_css_flex _css_flex--column _css_padding--md _css_full--height\">\r\n      <span class=\"_css_text--bold _css_text--md\">\r\n        Name it\r\n      </span>\r\n      <input type=\"text\" placeholder=\"Just name it here\" />\r\n      <span class=\"_css_text--bold  _css_text--md\">\r\n        How much do you need?\r\n      </span>\r\n      <input type=\"number\" placeholder=\"00.00 GEL\" />\r\n      <span class=\"_css_text--bold _css_margin-down--sm _css_text--md\">\r\n        When do you need it?\r\n      </span>\r\n      <span>In 1 month</span>\r\n    </div>\r\n    <div class=\"_css_border-header\">\r\n  \r\n    </div>\r\n    <div class=\"_css_flex _css_flex--center _css_flex--align _css_padding--sm\">\r\n      <button class=\"_css_full--width\" (click)=\"changeView('editView')\">Next</button>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"_css_position-r\" *ngIf=\"homeView==='editView'\">\r\n    <div class=\"_css_flex _css_flex--between _css_flex--align _css_position-r _css_padding--md _css_border-header\">\r\n      <span class=\"_close _css_position-r\" (click)=\"changeView('home')\">x</span>\r\n      <span class=\"_css_text--bold _css_text--md\">\r\n        Apple Wath Series 5\r\n      </span>\r\n      <button (click)=\"changeView('home')\"> save</button>\r\n    </div>\r\n  \r\n    <div class=\"_css_padding--md _css_flex _css_flex--column\">\r\n      <div class=\"_css_flex _css_flex--between _css_margin-down--sm\">\r\n        <span>Today</span>\r\n        <span>31 Dec 2019</span>\r\n      </div>\r\n      <div class=\"_progress-wrapp _css_margin-down--sm\">\r\n        <div class=\"_progress-content _progress-10\">\r\n        </div>\r\n      </div>\r\n      <div class=\"_css_flex _css_flex--between\">\r\n        <div class=\"_css_flex _css_flex--column\">\r\n          <span class=\"_css_text--bold\">\r\n            $00,00\r\n          </span>\r\n          <span class=\"_css_text--bold\">\r\n            saved\r\n            <i class=\"fas fa-plus-circle\"></i>\r\n          </span>\r\n        </div>\r\n        <div class=\"_css_flex _css_flex--column\">\r\n          <span class=\"_css_text--bold\">\r\n            $120,00\r\n          </span>\r\n          <span class=\"_css_text--bold\">\r\n            Per payday\r\n            <i class=\"fas fa-chevron-circle-down\"></i>\r\n          </span>\r\n        </div>\r\n        <div class=\"_css_flex _css_flex--column\">\r\n          <span class=\"_css_text--bold\">\r\n            $450,00\r\n          </span>\r\n          <span class=\"_css_text--bold\">\r\n            Target\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"_css_border _css_margin-top--sm _css_margin-down--sm\">\r\n      </div>\r\n  \r\n  \r\n      <span class=\"_css_text--md _css_text--bold\">\r\n        Speed up your saving\r\n      </span>\r\n      <span class=\"\">\r\n        By getting support from your friends\r\n      </span>\r\n  \r\n      <div class=\"_css_flex\">\r\n        <span class=\"_css_user _css_user-black _css_position-r _css_padding--sm\">\r\n          <i class=\"fas fa-user\"></i>\r\n          <span class=\"fas fa-plus-circle _avatar\"></span>\r\n        </span>\r\n        <span class=\"_css_user _css_user-gray _css_padding--sm\">\r\n          <i class=\"fas fa-user\"></i>\r\n        </span>\r\n        <span class=\"_css_user _css_user-gray _css_padding--sm\">\r\n          <i class=\"fas fa-user\"></i>\r\n        </span>\r\n      </div>\r\n      <div class=\"_css_card _css_padding--sm _css_margin-down--md\">\r\n        <div class=\"_css_flex _css_flex--align\">\r\n          <div class=\"_css_flex _css_flex--column\">\r\n            <span class=\"_css_text--bold\">\r\n              Reach 20% of your balance\r\n            </span>\r\n            <span>\r\n              Get 5% of\r\n            </span>\r\n          </div>\r\n          <button class=\"_css_margin-auto\" (click)=\"share(true)\">\r\n            Share\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"_css_border _css_margin-top--sm _css_margin-down--sm\">\r\n      </div>\r\n  \r\n      <span class=\"_css_text--bold _css_text--md\">\r\n        Get it Right Now!\r\n      </span>\r\n      <div class=\"_css_flex\">\r\n        <div class=\"_css_flex _css_flex--column gr-7\">\r\n          <span class=\"_css_margin-down--sm\">\r\n            Special offer\r\n          </span>\r\n          <span class=\"_css_text--sm _css_margin-down--sm\">\r\n            With Zoomer\r\n          </span>\r\n          <span class=\"_css_text--sm _css_margin-down--sm\">\r\n            6% OFF\r\n          </span>\r\n          <span class=\"_css_text--sm _css_margin-down--sm\">\r\n            $50.00 per payday\r\n          </span>\r\n          <span class=\"_css_text--sm _css_margin-down--sm\">\r\n            8 month\r\n            <i class=\"fas fa-chevron-circle-down\"></i>\r\n          </span>\r\n          <button class=\"gr-5 _css_margin-down--sm\">\r\n            Claim\r\n          </button>\r\n          <span class=\"_css_text--xs\">\r\n            Annual interest rate from 9%\r\n          </span>\r\n          <span class=\"_css_text--xs\">\r\n            Effective interest rate from 15%\r\n          </span>\r\n        </div>\r\n        <div class=\"_css_apple gr-5\">\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"_css_padding--md _share_modal\" *ngIf=\"shareView===true\">\r\n      <div class=\"_css_flex _css_flex--column\">\r\n        <span class=\"_css_text--bold _css_text--md\">\r\n          Attach ote\r\n        </span>\r\n        <span>\r\n          Please, support me to get 5% of Apple watch Series 5\r\n        </span>\r\n      </div>\r\n      <div class=\"_css_flex _css_flex--column\" >\r\n          <div class=\"_css_border-header _css_margin-down--md\"></div>\r\n          <button (click)=\"share(false)\">\r\n            Send\r\n          </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"\" *ngIf=\"homeView==='details'\">\r\n    <div class=\"_css_flex _css_flex--center _css_flex--align _css_position-r _css_padding--md _css_border-header\">\r\n      <span class=\"_close\" (click)=\"changeView('home')\">x</span>\r\n      <span class=\"_css_text--bold _css_text--md\">\r\n        Apple Wath Series 5\r\n      </span>\r\n    </div>\r\n  \r\n    <div class=\"_css_padding--md _css_flex _css_flex--column\">\r\n      <div class=\"_css_flex _css_flex--between _css_margin-down--sm\">\r\n        <span>Today</span>\r\n        <span>31 Dec 2019</span>\r\n      </div>\r\n      <div class=\"_progress-wrapp _css_margin-down--sm\">\r\n        <div class=\"_progress-content _progress-10\">\r\n        </div>\r\n      </div>\r\n      <div class=\"_css_flex _css_flex--between\">\r\n        <div class=\"_css_flex _css_flex--column\">\r\n          <span class=\"_css_text--bold\">\r\n            $200,00\r\n          </span>\r\n          <span class=\"_css_text--bold\">\r\n            saved\r\n            <i class=\"fas fa-plus-circle\"></i>\r\n          </span>\r\n        </div>\r\n        <div class=\"_css_flex _css_flex--column\">\r\n          <span class=\"_css_text--bold\">\r\n            $120,00\r\n          </span>\r\n          <span class=\"_css_text--bold\">\r\n            Per payday\r\n            <i class=\"fas fa-chevron-circle-down\"></i>\r\n          </span>\r\n        </div>\r\n        <div class=\"_css_flex _css_flex--column\">\r\n          <span class=\"_css_text--bold\">\r\n            $450,00\r\n          </span>\r\n          <span class=\"_css_text--bold\">\r\n            Target\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"_css_border _css_margin-top--sm _css_margin-down--sm\">\r\n      </div>\r\n  \r\n      <span class=\"_css_text--bold _css_text--md _css_margin-down--sm\">\r\n        Your Challange\r\n      </span>\r\n      <span class=\"_css_text--bold _css_margin-down--sm\">\r\n        Friends supported to you\r\n      </span>\r\n      <div class=\"_css_flex\">\r\n        <div class=\"_css_flex _css_flex--column gr-7\">\r\n          <span class=\"\">\r\n            Special offer\r\n          </span>\r\n          <span class=\"_css_text--sm _css_margin-down--sm\">\r\n            With Zoomer\r\n          </span>\r\n          <span class=\"_css_text--sm _css_margin-down--sm\">\r\n            10% OFF\r\n          </span>\r\n          <button class=\"gr-5 _css_margin-down--sm\">\r\n            Claim\r\n          </button>\r\n        </div>\r\n        <div class=\"_css_apple gr-5\">\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n  \r\n      <div class=\"_css_border _css_margin-top--sm _css_margin-down--sm\">\r\n      </div>\r\n  \r\n      <span class=\"_css_text--bold _css_text--md\">\r\n        Get it Right Now!\r\n      </span>\r\n      <div class=\"_css_flex\">\r\n        <div class=\"_css_flex _css_flex--column gr-7\">\r\n          <span class=\"_css_text--sm _css_margin-down--sm\">\r\n            $50.00 per payday\r\n          </span>\r\n          <span class=\"_css_text--sm _css_margin-down--sm\">\r\n            8 month\r\n            <i class=\"fas fa-chevron-circle-down\"></i>\r\n          </span>\r\n          <button class=\"gr-5 _css_margin-down--sm\">\r\n            Claim\r\n          </button>\r\n          <span class=\"_css_text--xs\">\r\n            Annual interest rate from 9%\r\n          </span>\r\n          <span class=\"_css_text--xs\">\r\n            Effective interest rate from 15%\r\n          </span>\r\n        </div>\r\n        <div class=\" gr-5\">\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/shared/asyncServices/http/service.core.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/asyncServices/http/service.core.ts ***!
  \***********************************************************/
/*! exports provided: ServiceCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCore", function() { return ServiceCore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceCore = /** @class */ (function () {
    function ServiceCore() {
    }
    ServiceCore.prototype.fetchData = function (resp) {
        return resp;
    };
    ServiceCore.prototype.errorHandler = function (e) {
    };
    ServiceCore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ServiceCore);
    return ServiceCore;
}());



/***/ }),

/***/ "./src/app/shared/asyncServices/services/cookie.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/asyncServices/services/cookie.service.ts ***!
  \*****************************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CookieService = /** @class */ (function () {
    function CookieService(platformId) {
        var _this = this;
        this.platformId = platformId;
        this.cookie$ = new Map();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.listCookies().forEach(function (item) {
                if (!_this.cookie$.has(item.name)) {
                    _this.cookie$.set(item.name, new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ name: name, newValue: item.value }));
                }
                else {
                    var cookie$ = _this.cookie$.get(item.name);
                    cookie$.next({ newValue: item.value, oldValue: cookie$.getValue() });
                }
            });
        }
    }
    CookieService.prototype.get = function (name) {
        if (!this.cookie$.has(name)) {
            var cookie$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ newValue: undefined });
            this.cookie$.set(name, cookie$);
            return cookie$;
        }
        else {
            return this.cookie$.get(name);
        }
    };
    CookieService.prototype.listCookies = function () {
        var theCookies = document.cookie.split(';');
        var aString = [];
        for (var i = 1; i <= theCookies.length; i++) {
            var record = theCookies[i - 1].split('=');
            aString.push({ name: record[0], value: record[1] });
        }
        return aString;
    };
    /**
    *
    * @param name          Name of the cookie to be returned
    * @return {string}     cookie value
    */
    CookieService.prototype.readCookie = function (name) {
        var value = '; ' + document.cookie;
        var parts = value.split('; ' + name + '=');
        if (parts.length > 1) {
            return parts.pop().split(';').shift();
        }
        return undefined;
    };
    CookieService.prototype.setCookies = function (name, value, days) {
        if (days === void 0) { days = 0; }
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = ';expires=' + date.toUTCString();
        }
        /*if (!domainOfCookie)*/
        var newValue;
        if (!expires) {
            newValue = name + "=" + value + "?;path=/";
            document.cookie = name + "=" + value + ";path=/";
        }
        else {
            newValue = name + "=" + value + "?" + expires + "?;path=/";
            document.cookie = name + "=" + value + expires + ";path=/";
        }
        var cookie$ = this.get(name);
        cookie$.next({ newValue: value, oldValue: cookie$.getValue() });
        return newValue;
    };
    CookieService.prototype.deleteCookie = function (name) {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    };
    CookieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [String])
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/shared/asyncServices/services/global.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/asyncServices/services/global.service.ts ***!
  \*****************************************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var GlobalService = /** @class */ (function () {
    function GlobalService(platformId) {
        this.platformId = platformId;
        this.hostClass = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.$isMobile = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.scrollTop = function () {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        };
        this.getDeviceType();
    }
    GlobalService.prototype.onScroll = function () {
    };
    GlobalService.prototype.getDeviceType = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            if (window.innerWidth < 998) {
                this.$isMobile.next(true);
            }
            else {
                this.$isMobile.next(false);
            }
        }
    };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [String])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\Desire\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map