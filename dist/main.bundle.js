webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/agmaps/agmaps.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nagm-map {\r\n  height: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/agmaps/agmaps.component.html":
/***/ (function(module, exports) {

module.exports = "\n<agm-map \n  [latitude]=\"lat\"\n  [longitude]=\"lng\"\n  [zoom]=\"16\"\n  [disableDefaultUI]=\"true\"\n  [zoomControl]=\"true\">\n\n  <agm-marker \n      [latitude]=\"lat\"\n      [longitude]=\"lng\"\n      [label]=\"\"\n      [markerDraggable]=\"false\">\n  </agm-marker>\n</agm-map>"

/***/ }),

/***/ "./src/app/agmaps/agmaps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GmapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GmapsComponent = /** @class */ (function () {
    function GmapsComponent() {
    }
    GmapsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], GmapsComponent.prototype, "lat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], GmapsComponent.prototype, "lng", void 0);
    GmapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-gmaps',
            template: __webpack_require__("./src/app/agmaps/agmaps.component.html"),
            styles: [__webpack_require__("./src/app/agmaps/agmaps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GmapsComponent);
    return GmapsComponent;
}());

//# sourceMappingURL=agmaps.component.js.map

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_application_layout_application_component__ = __webpack_require__("./src/app/layout-application/layout-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__submit_layout_survey_submit_layout_survey_component__ = __webpack_require__("./src/app/submit-layout-survey/submit-layout-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approve_survey_approve_survey_component__ = __webpack_require__("./src/app/approve-survey/approve-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_land_record_view_land_record_component__ = __webpack_require__("./src/app/view-land-record/view-land-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'submitLayoutSurvey', component: __WEBPACK_IMPORTED_MODULE_1__submit_layout_survey_submit_layout_survey_component__["a" /* SubmitLayoutSurveyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'layoutApplication', component: __WEBPACK_IMPORTED_MODULE_0__layout_application_layout_application_component__["a" /* LayoutApplicationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'layoutApplication/:id', component: __WEBPACK_IMPORTED_MODULE_0__layout_application_layout_application_component__["a" /* LayoutApplicationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'approveSurveys', component: __WEBPACK_IMPORTED_MODULE_2__approve_survey_approve_survey_component__["a" /* ApproveSurveyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'viewLandRecord/:id', component: __WEBPACK_IMPORTED_MODULE_6__view_land_record_view_land_record_component__["a" /* ViewlandrecordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', redirectTo: '/login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/*add all css here */\r\n/*custom theme for bootswatch space-lab */"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This would embed the container class of bootstrap-->\r\n<div class=\"container-fluid\">\r\n<!-- Header Section starts here-->\r\n<header class=\"header_bg\">\r\n  <div class=\"header_left\"></div>\r\n  <div class=\"header_right\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"logo_pharma\"> <a href=\"#\"><img src=\"/assets/images/logo.png\" alt=\"logo\"/></a> </div>\r\n    <div class=\"banner_text_right\"> Blockchain for Business<br>\r\n      <b>WITH IBM BLOCKCHAIN</b> </div>\r\n  </div>\r\n</header>\r\n<!-- Header Section ends here--> \r\n<!-- Content Section starts here-->\r\n<router-outlet></router-outlet>\r\n<!-- Content Section ends here-->\r\n<!-- Footer Section starts here-->\r\n<footer class=\"footer\">©  copyright 2018</footer>\r\n<!-- Footer Section ends here--> \r\n</div>\r\n<script>\r\n$(document).ready(function(){\r\n    $(\".dropdown-toggle\").dropdown();\r\n});\r\n</script>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(location) {
        this.location = location;
        this.title = 'app';
        var pathString = location.path();
        console.log('appComponent: pathString...');
        console.log(pathString);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__show_validation_error_show_validation_error_component__ = __webpack_require__("./src/app/show-validation-error/show-validation-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_application_layout_application_component__ = __webpack_require__("./src/app/layout-application/layout-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_survey_data_service__ = __webpack_require__("./src/app/services/survey-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__approve_survey_approve_survey_component__ = __webpack_require__("./src/app/approve-survey/approve-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agmaps_agmaps_component__ = __webpack_require__("./src/app/agmaps/agmaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_land_record_view_land_record_component__ = __webpack_require__("./src/app/view-land-record/view-land-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_login_authentication_service__ = __webpack_require__("./src/app/services/login-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_file_upload_service__ = __webpack_require__("./src/app/services/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__submit_layout_survey_submit_layout_survey_component__ = __webpack_require__("./src/app/submit-layout-survey/submit-layout-survey.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__show_validation_error_show_validation_error_component__["a" /* ShowValidationErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__layout_application_layout_application_component__["a" /* LayoutApplicationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__approve_survey_approve_survey_component__["a" /* ApproveSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__agmaps_agmaps_component__["a" /* GmapsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__view_land_record_view_land_record_component__["a" /* ViewlandrecordComponent */],
                __WEBPACK_IMPORTED_MODULE_17__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__submit_layout_survey_submit_layout_survey_component__["a" /* SubmitLayoutSurveyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I' //credentials for Angular google maps
                }),
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_survey_data_service__["a" /* SurveyDataService */], __WEBPACK_IMPORTED_MODULE_9__services_managelandrecords_service__["a" /* ManageLandRecordsService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_login_authentication_service__["a" /* LoginAuthenticationService */], __WEBPACK_IMPORTED_MODULE_18__services_file_upload_service__["a" /* FileUploadService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/approve-survey/approve-survey.component.css":
/***/ (function(module, exports) {

module.exports = "/*CSS to come here */"

/***/ }),

/***/ "./src/app/approve-survey/approve-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title_banner\">\n  <div class=\"container\" style=\"width:1230px;\">\n    <h1>One click away for Land Registry</h1>\n    <h2>Online Land Records</h2>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"titlebar\">Approve Survey Applications <img src=\"/assets/images/user_icon.png\">\n    <div class=\"dropdown\" style=\"float: right;\">\n      <button style=\"background-color: transparent; border: 0px; text-transform: uppercase; color:#27bed9; font-size: 14px;\" type=\"button\" data-toggle=\"dropdown\">MAPPROVER <span class=\"caret\"></span></button>\n      <ul class=\"dropdown-menu\">\n        <app-logout></app-logout>\n      </ul>\n    </div>\n  </div>\n  <div class=\"mojani_form\">\n    <div *ngIf=\"approveSuccess; then successMsg else approveForm\" ></div>\n    <ng-template #approveForm>\n      <h2>Search Criteria</h2>\n      <div class=\"form-group block\">\n        <div class=\"col-lg-4\">\n          <label for=\"wardNo\" class=\"control-label required\">Ward #</label>\n          <input type=\"text\" id=\"wardNo\" name=\"wardNo\" class=\"form-control\"  [(ngModel)]=\"wardNo\"  />\n        </div>\n        <div class=\"col-lg-4\">\n          <label>Plot/Site No.</label>\n          <input type=\"submit\" value=\"Search\" (click)= \"search()\">\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n      <hr />\n      <!--Search results of the land records for approval -->\n      <div *ngIf= \"fetchComplete\" >\n      <div class=\"block\">\n      <table>\n        <tr>\n          <th>Property ID</th>\n          <th>Ward No</th>\n          <th>Area Code</th>\n          <th>Site No</th>\n          <th>Total Area</th>\n          <th>Action</th>\n        </tr>\n        <tr *ngFor=\"let land of landRecords\">\n          <td><a [routerLink] = \"['/viewLandRecord', land.pid]\">{{land.pid}}</a></td>\n          <td>{{land.wardNo}}</td>\n          <td>{{land.areaCode}}</td>\n          <td>{{land.siteNo}}</td>\n          <td>{{land.geoData.totalArea}}</td>\n          <td><input type=\"checkbox\" name='approval'  [(ngModel)]='land.isMojaniApproved'  #approval=\"ngModel\" /></td>\n        </tr>\n      </table> \n      </div>\n   <div *ngIf='noSearchResults' style='color:red;margin-right: 40px;' align='center'><strong>No matching results found !</strong></div>\n   <br/>\n   <div *ngIf='!noSearchResults' align='right' style='margin-right: 40px;'>\n     \n   <button type=\"submit\" class=\"btn btn-danger\" (click)= \"onReject()\">Reject</button>\n   <button type=\"submit\" class=\"btn btn-primary\" (click)= \"onSubmit()\">Approve</button>\n   </div>\n   </div>\n   </ng-template>\n   <!--Success message for the approval-->\n   <ng-template #successMsg >\n   <div  class=\"alert alert-success\"> <strong>Success!</strong>\n   <span *ngIf = 'approveAction'>\n     All the below approved records have been committed to the HyperLedger. Their unique digital Ids are listed below :\n   </span>\n   <span *ngIf = '!approveAction'>\n     All the records with below PIDs have been rejected!\n   </span>\n     <ul *ngFor= \"let rec of approvedRecords\">\n     <li>{{rec.pid}}</li>\n   </ul>\n   </div>\n     <div class=\"alert alert-info\">\n       Please click on <strong>OK</strong> to approve other applications !\n     </div>\n     <div align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"submitNew()\">OK</button></div>\n    <br/>\n     <div align=\"center\"><iframe src=\"https://blockdatalandrecord.mybluemix.net/\" width=\"1000px\" height= \"680px\" frameborder=\"0\"></iframe></div>\n   </ng-template>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/approve-survey/approve-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_survey_data_service__ = __webpack_require__("./src/app/services/survey-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApproveSurveyComponent = /** @class */ (function () {
    function ApproveSurveyComponent(manageLandRecordsService, surveyDataService) {
        this.manageLandRecordsService = manageLandRecordsService;
        this.surveyDataService = surveyDataService;
        this.approveSuccess = false;
        this.fetchComplete = false;
        this.noSearchResults = false;
        this.approveAction = false;
    }
    ApproveSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.surveyDataService.currentLandRecords.subscribe(function (records) {
            _this.landRecords = records;
            if (_this.landRecords != null && _this.landRecords.length > 0) {
                _this.fetchComplete = true;
                _this.noSearchResults = false;
            }
        });
    };
    ApproveSurveyComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("ApplicationData" + JSON.stringify(this.landRecords));
        this.approveAction = true;
        //To add records to block chain
        this.approvedRecords = this.landRecords.filter(function (rec) { return rec.isMojaniApproved; });
        this.manageLandRecordsService.updateMojaniApprovedRecords(this.approvedRecords)
            .subscribe(function (response) {
            console.log("res received updateLandrecordMojani service" + JSON.stringify(response));
            if (response != null && response.success) {
                _this.approveSuccess = true;
                _this.blockExplorerURL = "https://blockdatalandrecord.mybluemix.net/";
            }
        });
    };
    ApproveSurveyComponent.prototype.onReject = function () {
        var _this = this;
        this.approveAction = false;
        console.log("ApplicationData" + JSON.stringify(this.landRecords));
        this.approvedRecords = this.landRecords.filter(function (rec) { return rec.isMojaniApproved; });
        this.approvedRecords.forEach(function (record, index) {
            record.isMojaniRejected = true;
            record.isMojaniApproved = false;
        });
        this.manageLandRecordsService.updateMojaniApprovedRecords(this.approvedRecords)
            .subscribe(function (response) {
            console.log("res received updateLandrecordMojani service" + JSON.stringify(response));
            if (response != null && response.success) {
                _this.approveSuccess = true;
            }
        });
    };
    ApproveSurveyComponent.prototype.submitNew = function () {
        this.landRecords = [];
        this.approveSuccess = false;
        this.wardNo = null;
        this.fetchComplete = false;
    };
    ApproveSurveyComponent.prototype.search = function () {
        var _this = this;
        console.log("ward No :" + this.wardNo);
        this.manageLandRecordsService.getLandRecordsMojaniByWard(this.wardNo)
            .subscribe(function (response) {
            console.log("res received from getLandRecords service" + JSON.stringify(response));
            if (response != null) {
                //  this.router.navigate(['/success', this.landRecord.pid]);
                _this.landRecords = response.landRecords.filter(function (landRec) { return !landRec.isMojaniApproved; });
                if (_this.landRecords != null && _this.landRecords.length > 0) {
                    _this.noSearchResults = false;
                }
                else {
                    _this.noSearchResults = true;
                }
                _this.fetchComplete = true;
                _this.surveyDataService.updateLandRecords(_this.landRecords);
            }
        });
    };
    ApproveSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-approve-survey',
            template: __webpack_require__("./src/app/approve-survey/approve-survey.component.html"),
            styles: [__webpack_require__("./src/app/approve-survey/approve-survey.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_managelandrecords_service__["a" /* ManageLandRecordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_managelandrecords_service__["a" /* ManageLandRecordsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_survey_data_service__["a" /* SurveyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_survey_data_service__["a" /* SurveyDataService */]) === "function" && _b || Object])
    ], ApproveSurveyComponent);
    return ApproveSurveyComponent;
    var _a, _b;
}());

//# sourceMappingURL=approve-survey.component.js.map

/***/ }),

/***/ "./src/app/guards/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__ = __webpack_require__("./src/app/services/login-authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginAuthService, router) {
        this.loginAuthService = loginAuthService;
        this.router = router;
    }
    //implement canActivate Interface to check if user is already logged in
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        console.log('State Url:' + url);
        if (this.loginAuthService.isUserLoggedIn()) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__["a" /* LoginAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__["a" /* LoginAuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "./src/app/layout-application/layout-application.component.css":
/***/ (function(module, exports) {

module.exports = ".required:after {\r\n  content: \" *\";\r\n  color : red;\r\n}\r\n\r\n\r\nagm-map {\r\n  height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/layout-application/layout-application.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title_banner\">\r\n  <div class=\"container\" style=\"width:1230px;\">\r\n    <h1>One click away for Land Registry</h1>\r\n    <h2>Online Land Records</h2>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"titlebar\">Application for Land Survey <img src=\"/assets/images/user_icon.png\">\r\n    <div class=\"dropdown\" style=\"float: right;\">\r\n      <button style=\"background-color: transparent; border: 0px; text-transform: uppercase; color:#27bed9; font-size: 14px;\" type=\"button\" data-toggle=\"dropdown\">MSURVEY <span class=\"caret\"></span></button>\r\n      <ul class=\"dropdown-menu\">\r\n        <app-logout></app-logout>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div *ngIf =\"!submitSuccess;then applicationForm else applicationSuccess\"></div>\r\n  <ng-template #applicationForm>\r\n  <div class=\"mojani_form\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"layoutForm\" (ngSubmit)=\"onSubmit()\">\r\n      <fieldset disabled>\r\n        <h2>Land Details</h2>\r\n        <div class=\"form-group block\">\r\n          <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('wardNo')\">\r\n            <label for=\"wardNo\">Ward #</label>\r\n            <input type=\"text\" id=\"wardNo\" class=\"form-control\" formControlName=\"wardNo\" />\r\n            <app-show-validation-error [displayError]=\"isFieldValid('wardNo')\" errorMsg=\"Please enter a valid ward #\"></app-show-validation-error>\r\n          </div>\r\n          <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('areaCode')\">\r\n            <label for=\"areaCode\" >Area Code</label>\r\n            <input type=\"text\" id=\"areaCode\" class=\"form-control\" formControlName=\"areaCode\" />\r\n            <app-show-validation-error [displayError]=\"isFieldValid('areaCode')\" errorMsg=\"Please enter a valid area code\"></app-show-validation-error>\r\n          </div>\r\n          <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('siteNo')\">\r\n            <label for=\"siteNo\">Plot/Site #</label>\r\n            <input type=\"text\" id=\"siteNo\" class=\"form-control\" formControlName=\"siteNo\" />\r\n            <app-show-validation-error [displayError]=\"isFieldValid('siteNo')\" errorMsg=\"Please enter a valid site #\"></app-show-validation-error>\r\n          </div>\r\n        </div>\r\n    </fieldset>\r\n    <fieldset [disabled]='isReadOnly'>\r\n      <hr />\r\n      <h2>Geographical Data</h2>\r\n        <div formGroupName=\"geoData\" class=\"block\">\r\n          <div class=\"form-group\">\r\n            <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('geoData.latitude')\">\r\n              <label for=\"latitude\" class=\"required\">Latitude</label>\r\n              <input type=\"text\" id=\"latitude\" class=\"form-control\" formControlName=\"latitude\" (change)=\"setGeoCordinates()\" />\r\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.latitude')\" errorMsg=\"Valid latitue is required\"></app-show-validation-error>\r\n            </div>\r\n            <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('geoData.longitude')\">\r\n              <label for=\"Longitude\" class=\"required\">Longitude</label>\r\n              <input type=\"text\" id=\"longitude\" class=\"form-control\" formControlName=\"longitude\" (change)=\"setGeoCordinates()\" />\r\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.longitude')\" errorMsg=\"Valid longitude is required\"></app-show-validation-error>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('geoData.length')\">\r\n              <label for=\"length\" class=\"required\">Plot Length (ft.)</label>\r\n              <input type=\"text\" id=\"length\" class=\"form-control\" formControlName=\"length\" (change) = \"calculateTotalArea()\" />\r\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.length')\" errorMsg=\"Valid plot length is required\"></app-show-validation-error>\r\n            </div>\r\n            <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('geoData.width')\">\r\n              <label for=\"width\" class=\"required\">Plot Width (ft.)</label>\r\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"width\" (change) = \"calculateTotalArea()\" />\r\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.width')\" errorMsg=\"Valid plot width is required\"></app-show-validation-error>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <label for=\"width\">Total Plot Area (sq. ft.)</label>\r\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"totalArea\" readonly />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('geoData.address')\">\r\n              <label for=\"address\" class=\"required\">Property Address</label>\r\n              <textarea type=\"text\" id=\"address\" class=\"form-control\" formControlName=\"address\"></textarea>\r\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.address')\" errorMsg=\"Valid plot address is required\"></app-show-validation-error>\r\n            </div>\r\n            <div class=\"col-lg-8\" *ngIf=\"lat && long\">\r\n              <app-gmaps [lat]=\"lat\"  [lng]=\"long\"></app-gmaps>\r\n            </div>\r\n          </div> \r\n        </div>\r\n        <hr />\r\n        <h2>Pre Mutation Sketch</h2>\r\n        <div class=\"block\">\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-4\" *ngIf=\"!isReadOnly\" >\r\n            <label for=\"sketch\" class=\"required\">Upload Plot Sketch</label>\r\n            <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\"image/*\" name=\"sketch\" formControlName=\"sketch\">\r\n            <app-show-validation-error [displayError]=\"isFieldValid('sketch')\" errorMsg=\"Pre mutation sketch of the plot is required\"></app-show-validation-error>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\" *ngIf=\"sketchURL!=null && sketchURL!=''\">\r\n        <a [href]='sketchURL' target = '_blank'>View Sketch</a>\r\n        </div>\r\n        </div>\r\n        <hr />\r\n        <h2>Land Allottee Details</h2>\r\n          <div formGroupName=\"ownerDetails\" class=\"block\">\r\n            <div class=\"form-group\">\r\n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.ownerName')\">\r\n                <label for=\"ownerName\" class=\"required\">Allottee Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"ownerName\" formControlName=\"ownerName\">\r\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.ownerName')\" errorMsg=\"Valid allottee name is required\"></app-show-validation-error>\r\n              </div>\r\n  \r\n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.aadharNo')\">\r\n                <label for=\"aadharNo\" class=\"required\">Aadhar #</label>\r\n                <input type=\"text\" id=\"aadharNo\" class=\"form-control\" formControlName=\"aadharNo\" />\r\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.aadharNo')\" errorMsg=\"valid aadhar# is required\"></app-show-validation-error>\r\n              </div>\r\n  \r\n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.gender')\">\r\n                <div> <label class=\"required\">Gender</label></div>\r\n                <label class=\"lg-check radio-inline\">\r\n                  <input type=\"radio\" value=\"M\" name=\"gender\" formControlName=\"gender\">Male\r\n                </label>\r\n                <label class=\"lg-check radio-inline\">\r\n                  <input type=\"radio\" value=\"F\" name=\"gender\" formControlName=\"gender\">Female\r\n                </label>\r\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.gender')\" errorMsg=\"Gender is mandatory\"></app-show-validation-error>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.mobileNo')\">\r\n                <label for=\"mobileNo\" class=\"required\">Mobile</label>\r\n                <input type=\"text\" id=\"mobileNo\" class=\"form-control\" formControlName=\"mobileNo\" />\r\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.mobileNo')\" errorMsg=\"Valid mobile # is required\"></app-show-validation-error>\r\n              </div>\r\n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.emailID')\">\r\n                <label for=\"emailID\" class=\"required\">Email ID</label>\r\n                <input type=\"text\" id=\"emailID\" class=\"form-control\" formControlName=\"emailID\" />\r\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.emailID')\" errorMsg=\"Valid email Id is required\"></app-show-validation-error>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.address')\">\r\n                <label for=\"ownerAddress\" class=\"required\">Allottee Address</label>\r\n                <textarea type=\"text\" id=\"ownerAddress\" class=\"form-control\" formControlName=\"address\" ></textarea>\r\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.address')\" errorMsg=\"Valid allottee address is required\"></app-show-validation-error>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </fieldset>\r\n      <div align=\"center\">\r\n        <button type=\"button\" class=\"btn btn-danger\" (click) = 'goBack()'>Back</button>\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]='isReadOnly'>Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  </ng-template>\r\n  \r\n  <ng-template #applicationSuccess>\r\n    <div class=\"alert alert-success\"> <strong>Success!</strong>Application has been submitted successfully ! The digital Idenfication number for this record is <strong>{{landRecord.pid}}</strong></div>\r\n    <div class=\"alert alert-info\">\r\n      Please click on <strong>OK</strong> to return to the survey layout page !\r\n    </div>\r\n    <div align=\"center\">      \r\n      <button type=\"button\" class=\"btn btn-primary\" (click) = 'goBack()'>OK</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layout-application/layout-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_file_upload_service__ = __webpack_require__("./src/app/services/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_LandRecord__ = __webpack_require__("./src/app/models/LandRecord.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LayoutApplicationComponent = /** @class */ (function () {
    function LayoutApplicationComponent(formBuilder, manageLandRecordsService, http, filUploadService, router, route, location) {
        this.formBuilder = formBuilder;
        this.manageLandRecordsService = manageLandRecordsService;
        this.http = http;
        this.filUploadService = filUploadService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.landRecord = new __WEBPACK_IMPORTED_MODULE_7__models_LandRecord__["a" /* LandRecord */](); //initialize land record object
        this.submitSuccess = false;
        this.isReadOnly = false;
        this.filesToUpload = [];
        this.formData = new FormData();
    }
    LayoutApplicationComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LayoutApplicationComponent.prototype.ngOnDestroy = function () {
        this.getDetailsSub.unsubscribe();
    };
    LayoutApplicationComponent.prototype.createForm = function () {
        var _this = this;
        this.submitSuccess = false;
        this.lat = null;
        this.long = null;
        this.layoutForm = this.formBuilder.group({
            pid: '',
            wardNo: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            areaCode: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            siteNo: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            geoData: this.formBuilder.group({
                latitude: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{1,2}\\.{0,1}[0-9]{0,8}')]],
                longitude: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{1,2}\\.{0,1}[0-9]{0,8}')]],
                length: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{1,3}')]],
                width: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                totalArea: '',
                address: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
            }),
            sketch: [null],
            ownerDetails: this.formBuilder.group({
                ownerName: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z\\s]*')]],
                gender: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                aadharNo: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{12}')]],
                mobileNo: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{10}')]],
                emailID: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
                address: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
            })
        });
        this.getDetailsSub = this.route.queryParams.subscribe(function (params) {
            var pid = +params['pid'] || 0; // + converts string pid to number
            _this.manageLandRecordsService.getLandRecordsMojaniByPid(pid).subscribe(function (response) {
                console.log("res received getLandRecordbyPid service" + JSON.stringify(response));
                //parse the reponse for already existing record
                if (response != null && response.success) {
                    if (response.landRecords != null) {
                        delete response.landRecords["sketch"];
                        _this.landRecord = response.landRecords;
                        console.log("landRecord object received:" + JSON.stringify(_this.landRecord));
                        _this.layoutForm.patchValue(_this.landRecord); //set the form model object from data model object
                        _this.setGeoCordinates();
                    }
                    if (response.sketchURL != null && response.sketchURL != "") {
                        _this.sketchURL = response.sketchURL;
                    }
                    if (_this.landRecord.isMojaniSubmitted) { //set the form to read only if already submitted
                        _this.isReadOnly = true;
                    }
                }
            });
        });
    };
    LayoutApplicationComponent.prototype.isFieldValid = function (field) {
        return !this.layoutForm.get(field).valid && this.layoutForm.get(field).touched && !this.isReadOnly;
    };
    LayoutApplicationComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    LayoutApplicationComponent.prototype.setGeoCordinates = function () {
        this.lat = parseFloat(this.layoutForm.get('geoData.latitude').value);
        this.long = parseFloat(this.layoutForm.get('geoData.longitude').value);
    };
    LayoutApplicationComponent.prototype.calculateTotalArea = function () {
        var length = parseFloat(this.layoutForm.get('geoData.length').value);
        var width = parseFloat(this.layoutForm.get('geoData.width').value);
        var totalArea = length * width;
        if (!isNaN(totalArea)) {
            console.log("Total Area: " + totalArea);
            this.layoutForm.patchValue({ 'geoData': { 'totalArea': totalArea } });
        }
    };
    LayoutApplicationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.layoutForm.valid) {
            console.log('form valid success');
            //sync the form model with the data model
            this.landRecord = this.layoutForm.value;
            this.landRecord.pid = parseInt(this.landRecord.wardNo.toString().substr(0, 3) + this.landRecord.areaCode.toString().substr(0, 3) + this.landRecord.siteNo.toString().substr(0, 3));
            console.log("pid generated: " + this.landRecord.pid);
            this.landRecord.isMojaniSubmitted = true; // make the submitted flag as true
            this.manageLandRecordsService.updateMojaniSubmitRecord(this.landRecord)
                .subscribe(function (response) {
                console.log("res received updateLandRecord service" + JSON.stringify(response));
                if (response != null && response.success) {
                    _this.submitSuccess = true;
                    var files = _this.filesToUpload;
                    //uplod the file as attachment to the document once documents updated
                    if (files.length > 0) {
                        var file = files[0]; //construct file name before upload
                        var fileName = _this.landRecord.pid + "_sketch" + "." + file['name'].split(".")[1];
                        _this.formData.append("uploads[]", file, fileName);
                        console.log("file name :" + file['name']);
                        //Upload the files to server
                        _this.filUploadService.uploadFiles(_this.formData)
                            .subscribe(function (files) { return console.log('files uploaded :' + files); });
                    }
                }
            });
        }
        else {
            this.validateAllFormFields(this.layoutForm);
        }
    };
    LayoutApplicationComponent.prototype.goBack = function () {
        this.location.back();
    };
    LayoutApplicationComponent.prototype.fileChange = function (event) {
        this.filesToUpload = event.target.files;
    };
    LayoutApplicationComponent.prototype.submitNew = function () {
        this.createForm();
    };
    LayoutApplicationComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            console.log(field);
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    LayoutApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-layout-application',
            template: __webpack_require__("./src/app/layout-application/layout-application.component.html"),
            styles: [__webpack_require__("./src/app/layout-application/layout-application.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_managelandrecords_service__["a" /* ManageLandRecordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_managelandrecords_service__["a" /* ManageLandRecordsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_file_upload_service__["a" /* FileUploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_file_upload_service__["a" /* FileUploadService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _g || Object])
    ], LayoutApplicationComponent);
    return LayoutApplicationComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=layout-application.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/* CSS */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home_banner\">\n<div class=\"container\" style=\"width:1230px;\">\n    <h1>Mojani</h1>\n    <h2>One click away for Land Registry</h2>\n    <h3>Online Land Records</h3>\n</div>\n</div>\n<div class=\"login_container\">\n    <div class=\"container\" style=\"width:1230px; background: url(/assets/images/sign_in_title.png) no-repeat left center;\n    padding: 30px 0 40px 0; \">\n    <div class=\"col-lg-2\">&nbsp;</div>\n    <form #userlogin = \"ngForm\" (ngSubmit) = \"onSubmit(userlogin)\" novalidate> \n    <div class=\"form-group col-lg-4\" [ngClass]=\"{ 'has-error': userlogin.submitted && !username.valid }\">\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"login.username\" #username=\"ngModel\" required>\n    </div>\n    <div class=\"form-group col-lg-4\" [ngClass]=\"{ 'has-error': userlogin.submitted && !password.valid }\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"login.password\" #password=\"ngModel\" required>\n    </div>        \n    <div class=\"form-group col-lg-2\">\n        <input type=\"submit\" value=\"LOG IN\">\n    </div>     \n    </form>\n    <div *ngIf=\"authMessage && authMessage!=''\" class=\"alert alert-danger\" ><b>{{authMessage}}</b></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_authentication_service__ = __webpack_require__("./src/app/services/login-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginAuthService, router) {
        this.loginAuthService = loginAuthService;
        this.router = router;
        this.login = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // document.body.classList.add("loginPage");
        document.body.style.backgroundImage = "url('/assets/images/survey-bg.jpg')";
        document.body.style.backgroundSize = "cover";
        //document.getElementById("loginbox").classList.add("loginLabels");
        //document.getElementById("headerTitle").classList.add("header");
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        // document.body.classList.remove("loginPage");
        document.body.removeAttribute("style");
    };
    LoginComponent.prototype.onSubmit = function (userlogin) {
        var _this = this;
        if (userlogin.valid) {
            this.loading = true; // validation in progress
            console.log("Form values :" + JSON.stringify(this.login));
            var user = { "userId": this.login.username, "password": this.login.password };
            //check for user authentication
            this.loginAuthService.isUserAuthenticated(user)
                .subscribe(function (authenticated) {
                _this.loading = false;
                console.log("res received authentication service :" + authenticated);
                if (authenticated) {
                    _this.authMessage = null;
                    //if auth success route according to the role
                    console.log("logged in role :" + _this.loginAuthService.getLoggedInRole());
                    if (_this.loginAuthService.getLoggedInRole() == "Mojani_Surveyor") {
                        console.log("inside mojani survey");
                        _this.router.navigateByUrl('/submitLayoutSurvey');
                    }
                    else if (_this.loginAuthService.getLoggedInRole() == "Mojani_Approver") {
                        console.log("Inside mojani approver");
                        _this.router.navigateByUrl('/approveSurveys');
                    }
                }
                else {
                    _this.authMessage = _this.loginAuthService.getAuthMessage();
                }
            });
        }
        else {
            if ((this.login.username == null || this.login.username == "") && (this.login.password == null || this.login.password == "")) {
                this.authMessage = "Username & password are required !";
            }
            else if (this.login.username == null || this.login.username == "") {
                this.authMessage = "Username is required !";
            }
            else if (this.login.password == null || this.login.password == "") {
                this.authMessage = "Password is required !";
            }
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_authentication_service__["a" /* LoginAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_authentication_service__["a" /* LoginAuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = "/* CSS */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<li><a href=\"#\" (click)='logout()'>LOG OUT</a></li>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__ = __webpack_require__("./src/app/services/login-authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.authService.getLoggedInUser();
        this.userRole = this.authService.getLoggedInRole();
    };
    LogoutComponent.prototype.logout = function () {
        //redirect to login screen after logout
        this.authService.logoutUser();
        this.router.navigateByUrl('/Login');
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__["a" /* LoginAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__["a" /* LoginAuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b;
}());

//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "./src/app/models/LandRecord.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandRecord; });
/* unused harmony export GeoData */
/* unused harmony export Owner */
var LandRecord = /** @class */ (function () {
    function LandRecord() {
    }
    return LandRecord;
}());

var GeoData = /** @class */ (function () {
    function GeoData() {
    }
    return GeoData;
}());

var Owner = /** @class */ (function () {
    function Owner() {
    }
    return Owner;
}());

//# sourceMappingURL=LandRecord.js.map

/***/ }),

/***/ "./src/app/services/file-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileUploadService = /** @class */ (function () {
    function FileUploadService(http) {
        this.http = http;
    }
    FileUploadService.prototype.uploadFiles = function (formData) {
        console.log("Inside File upload service");
        return this.http.post('/uploads/fileUpload', formData)
            .map(function (files) { return files.json(); });
    };
    FileUploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], FileUploadService);
    return FileUploadService;
    var _a;
}());

//# sourceMappingURL=file-upload.service.js.map

/***/ }),

/***/ "./src/app/services/login-authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginAuthenticationService = /** @class */ (function () {
    function LoginAuthenticationService(http) {
        this.http = http;
        this.isLoggedIn = false;
    }
    // API: POST /UserAuthentication
    LoginAuthenticationService.prototype.isUserAuthenticated = function (userInfo) {
        var _this = this;
        console.log("Inside isUserAuthenticated function in authentication service");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/login/api/authentication', JSON.stringify(userInfo), { headers: headers })
            .map(function (res) {
            var jsonRes = res.json();
            if (jsonRes.authSuccess) {
                _this.isLoggedIn = true;
                _this.loggedInRole = jsonRes.role;
                _this.authMessage = jsonRes.message;
                _this.loggedInUser = jsonRes.user;
                return true;
            }
            else {
                _this.isLoggedIn = false;
                _this.authMessage = jsonRes.message;
                return false;
            }
        });
    };
    LoginAuthenticationService.prototype.isUserLoggedIn = function () {
        return this.isLoggedIn;
    };
    LoginAuthenticationService.prototype.logoutUser = function () {
        this.isLoggedIn = false;
    };
    LoginAuthenticationService.prototype.getLoggedInRole = function () {
        return this.loggedInRole;
    };
    LoginAuthenticationService.prototype.getAuthMessage = function () {
        return this.authMessage;
    };
    LoginAuthenticationService.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    LoginAuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], LoginAuthenticationService);
    return LoginAuthenticationService;
    var _a;
}());

//# sourceMappingURL=login-authentication.service.js.map

/***/ }),

/***/ "./src/app/services/managelandrecords.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageLandRecordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageLandRecordsService = /** @class */ (function () {
    function ManageLandRecordsService(http) {
        this.http = http;
    }
    // API: GET /landRecords/:wardNo
    ManageLandRecordsService.prototype.getLandRecordsMojaniByWard = function (wardNo) {
        console.log("Inside getLandRecordsMojaniByWard method in manageLandRecord service");
        return this.http.get('/manageLandRecords/api/getLandRecordsMojaniByWard/' + wardNo)
            .map(function (res) { return res.json(); });
    };
    // API: GET /landRecords/:pId
    ManageLandRecordsService.prototype.getLandRecordsMojaniByPid = function (pId) {
        console.log("Inside getLandRecordsMojaniByPid method in manageLandRecord service");
        return this.http.get('/manageLandRecords/api/getLandRecordsMojaniByPid/' + pId)
            .map(function (res) { return res.json(); });
    };
    // API: GET /landRecords/:wardNo/:areaCode
    ManageLandRecordsService.prototype.getLandRecordsMojaniInLayout = function (layout) {
        console.log("Inside getLandRecordsMojaniInLayout method in manageLandRecord service");
        return this.http.get('/manageLandRecords/api/getLandRecordsMojaniInLayout/' + layout.wardNo + "/" + layout.areaCode)
            .map(function (res) { return res.json(); });
    };
    // API: POST /landRecord
    ManageLandRecordsService.prototype.addLandRecordMojani = function (landRecord) {
        console.log("Inside addLandRecordMojani method in manageLandRecord service");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/manageLandRecords/api/addLandRecordMojani', JSON.stringify(landRecord), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // API: POST /landRecords[]
    ManageLandRecordsService.prototype.updateMojaniApprovedRecords = function (landRecords) {
        console.log("Inside updateMojaniApprovedRecords method in manageLandRecord service");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/manageLandRecords/api/updateMojaniApprovedStatus', JSON.stringify(landRecords), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // API: POST /landRecord
    ManageLandRecordsService.prototype.updateMojaniSubmitRecord = function (landRecord) {
        console.log("Inside updateMojaniSubmitRecord method in manageLandRecord service");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/manageLandRecords/api/updateLandRecordMojani', JSON.stringify(landRecord), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ManageLandRecordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ManageLandRecordsService);
    return ManageLandRecordsService;
    var _a;
}());

//# sourceMappingURL=managelandrecords.service.js.map

/***/ }),

/***/ "./src/app/services/survey-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyDataService = /** @class */ (function () {
    function SurveyDataService() {
        this.landRecords = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.currentLandRecords = this.landRecords.asObservable();
        this.wardNo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.currentWardNo = this.wardNo.asObservable();
        this.siteNo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.currentSiteNo = this.siteNo.asObservable();
        this.areaCode = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.currentAreaCode = this.areaCode.asObservable();
    }
    SurveyDataService.prototype.updateLandRecords = function (records) {
        this.landRecords.next(records);
    };
    SurveyDataService.prototype.updateWardNo = function (wardNo) {
        this.wardNo.next(wardNo);
    };
    SurveyDataService.prototype.updateSiteNo = function (siteNo) {
        this.siteNo.next(siteNo);
    };
    SurveyDataService.prototype.updateAreaCode = function (areaCode) {
        this.areaCode.next(areaCode);
    };
    SurveyDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SurveyDataService);
    return SurveyDataService;
}());

//# sourceMappingURL=survey-data.service.js.map

/***/ }),

/***/ "./src/app/show-validation-error/show-validation-error.component.css":
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  color: #a94442;\n}\n\n.fix-error-icon {\n  top: 27px;\n}\n\n.required:after {\n  content: \" *\";\n}\n"

/***/ }),

/***/ "./src/app/show-validation-error/show-validation-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\">\r\n  <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span>\r\n  <span class=\"sr-only\">(error)</span>\r\n  <div class=\"error-msg\">\r\n    {{ errorMsg }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/show-validation-error/show-validation-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowValidationErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowValidationErrorComponent = /** @class */ (function () {
    function ShowValidationErrorComponent() {
    }
    ShowValidationErrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ShowValidationErrorComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ShowValidationErrorComponent.prototype, "displayError", void 0);
    ShowValidationErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-show-validation-error',
            template: __webpack_require__("./src/app/show-validation-error/show-validation-error.component.html"),
            styles: [__webpack_require__("./src/app/show-validation-error/show-validation-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowValidationErrorComponent);
    return ShowValidationErrorComponent;
}());

//# sourceMappingURL=show-validation-error.component.js.map

/***/ }),

/***/ "./src/app/submit-layout-survey/submit-layout-survey.component.css":
/***/ (function(module, exports) {

module.exports = "/*CSS to go here */"

/***/ }),

/***/ "./src/app/submit-layout-survey/submit-layout-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title_banner\">\n  <div class=\"container\" style=\"width:1230px;\">\n    <h1>One click away for Land Registry</h1>\n    <h2>Online Land Records</h2>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"titlebar\">Submit Survey for Layout <img src=\"/assets/images/user_icon.png\">\n    <div class=\"dropdown\" style=\"float: right;\">\n      <button style=\"background-color: transparent; border: 0px; text-transform: uppercase; color:#27bed9; font-size: 14px;\" type=\"button\" data-toggle=\"dropdown\">MSURVEY <span class=\"caret\"></span></button>\n      <ul class=\"dropdown-menu\">\n        <app-logout></app-logout>\n      </ul>\n    </div>\n  </div>\n  <div class=\"mojani_form\">\n    <div *ngIf=\"submitSuccess; then successMsg else approveForm\" ></div>\n    <ng-template #approveForm>\n      <h2>Search Criteria</h2> \n        <div class=\"form-group block\">\n          <div class=\"col-lg-4\">\n            <label for=\"wardNo\" required>Ward # <span class=\"red\">*</span></label>\n            <input type=\"text\" id=\"wardNo\" name=\"wardNo\" class=\"form-control\"  [(ngModel)]=\"wardNo\"  />\n          </div>\n          <div class=\"col-lg-4\">\n            <label for=\"areaCode\" required>Area Code <span class=\"red\">*</span></label>\n            <input type=\"text\" id=\"areaCode\" name=\"areaCode\" class=\"form-control\"  [(ngModel)]=\"areaCode\"  />\n          </div>\n          <div class=\"col-lg-4\">\n            <label>Plot/Site No.</label>\n            <input type=\"submit\" value=\"Search\" (click)= \"search()\">\n          </div>\n          <div class=\"clearfix\"></div>\n        </div> \n        <hr />\n      <!--Search results of the land records for approval -->\n      <div *ngIf= \"fetchComplete\" >\n        <div class=\"block\">\n        <table>\n          <tr>\n            <th>PID</th>\n            <th>Site No</th>\n            <th>Total Area</th>\n            <th>Latitude</th>\n            <th>Longitude</th>\n            <th>Status</th>\n          </tr>\n          <tr *ngFor=\"let land of landRecords;let i = index\">\n              <td><a [routerLink] = \"['/layoutApplication']\" [queryParams]=\"{pid:land.pid}\">{{land.pid}}</a></td>\n              <td>{{land.siteNo}}</td>\n              <td>{{land.geoData.totalArea}}</td>\n              <td>{{land.geoData.latitude}}</td>\n              <td>{{land.geoData.longitude}}</td>\n              <td>{{getApplicationStatus(land)}}</td>\n          </tr>\n        </table> \n      <div *ngIf='noSearchResults' style='color:red;' align='center'><strong>No matching results found !</strong></div>\n      </div>\n      </div>\n    </ng-template>\n    <!--Success message for the approval-->\n    <ng-template #successMsg >\n      <div class=\"alert alert-success\"> <strong>Success!</strong>\n      The survey application has been submitted successfully !\n      </div>\n      <div class=\"alert alert-info\">\n        Please click on <strong>OK</strong> to submit a new application !\n      </div>\n      <div align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"submitNew()\">OK</button></div>\n    </ng-template>\n  </div>\n</div>\n\n\n "

/***/ }),

/***/ "./src/app/submit-layout-survey/submit-layout-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitLayoutSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_survey_data_service__ = __webpack_require__("./src/app/services/survey-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmitLayoutSurveyComponent = /** @class */ (function () {
    function SubmitLayoutSurveyComponent(manageLandRecordsService, surveyDataService) {
        this.manageLandRecordsService = manageLandRecordsService;
        this.surveyDataService = surveyDataService;
        this.fetchComplete = false;
        this.noSearchResults = false;
    }
    SubmitLayoutSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.surveyDataService.currentWardNo.subscribe(function (records) {
            if (records)
                _this.wardNo = Number(records);
        });
        this.surveyDataService.currentAreaCode.subscribe(function (records) {
            if (records)
                _this.areaCode = Number(records);
        });
        //search the results if areacode and ward number present
        var criteria = { "wardNo": this.wardNo, "areaCode": this.areaCode };
        if (this.wardNo != null && this.areaCode != null) {
            this.manageLandRecordsService.getLandRecordsMojaniInLayout(criteria)
                .subscribe(function (response) {
                console.log("res received from getLandRecords service" + JSON.stringify(response));
                if (response != null) {
                    delete response.landRecords['sketch'];
                    _this.landRecords = response.landRecords;
                    if (_this.landRecords != null && _this.landRecords.length > 0) {
                        _this.noSearchResults = false;
                    }
                    else {
                        _this.noSearchResults = true;
                    }
                    _this.fetchComplete = true;
                }
            });
        }
    };
    SubmitLayoutSurveyComponent.prototype.search = function () {
        var _this = this;
        console.log("ward No & Area Code:" + this.wardNo + "-" + this.areaCode);
        var criteria = { "wardNo": this.wardNo, "areaCode": this.areaCode };
        this.manageLandRecordsService.getLandRecordsMojaniInLayout(criteria)
            .subscribe(function (response) {
            console.log("res received from getLandRecords service" + JSON.stringify(response));
            if (response != null) {
                delete response.landRecords['sketch'];
                _this.landRecords = response.landRecords;
                if (_this.landRecords != null && _this.landRecords.length > 0) {
                    _this.noSearchResults = false;
                }
                else {
                    _this.noSearchResults = true;
                }
                _this.fetchComplete = true;
                _this.surveyDataService.updateWardNo(_this.wardNo);
                _this.surveyDataService.updateAreaCode(_this.areaCode);
            }
        });
    };
    SubmitLayoutSurveyComponent.prototype.getApplicationStatus = function (landRecord) {
        if (landRecord && landRecord.isMojaniSubmitted) {
            if (landRecord.isMojaniApproved) {
                return "Approved";
            }
            else if (landRecord.isMojaniRejected) {
                return "Rejected";
            }
            else {
                return "Submitted";
            }
        }
        return "Not Submitted";
    };
    SubmitLayoutSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-submit-layout-survey',
            template: __webpack_require__("./src/app/submit-layout-survey/submit-layout-survey.component.html"),
            styles: [__webpack_require__("./src/app/submit-layout-survey/submit-layout-survey.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_managelandrecords_service__["a" /* ManageLandRecordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_managelandrecords_service__["a" /* ManageLandRecordsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_survey_data_service__["a" /* SurveyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_survey_data_service__["a" /* SurveyDataService */]) === "function" && _b || Object])
    ], SubmitLayoutSurveyComponent);
    return SubmitLayoutSurveyComponent;
    var _a, _b;
}());

//# sourceMappingURL=submit-layout-survey.component.js.map

/***/ }),

/***/ "./src/app/view-land-record/view-land-record.component.css":
/***/ (function(module, exports) {

module.exports = "/*add css here */"

/***/ }),

/***/ "./src/app/view-land-record/view-land-record.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title_banner\">\n  <div class=\"container\" style=\"width:1230px;\">\n    <h1>One click away for Land Registry</h1>\n    <h2>Online Land Records</h2>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"titlebar\">View Application for Land Survey <img src=\"/assets/images/user_icon.png\">\n    <div class=\"dropdown\" style=\"float: right;\">\n      <button style=\"background-color: transparent; border: 0px; text-transform: uppercase; color:#27bed9; font-size: 14px;\" type=\"button\" data-toggle=\"dropdown\">MAPPROVER <span class=\"caret\"></span></button>\n      <ul class=\"dropdown-menu\">\n        <app-logout></app-logout>\n      </ul>\n    </div>\n  </div>\n  <div class=\"mojani_form\">\n    <form class=\"form-horizontal\" [formGroup]=\"layoutForm\" (ngSubmit)=\"onSubmit()\">\n      <fieldset disabled>\n        <h2>Land Details</h2>\n        <div class=\"form-group block\">\n          <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('wardNo')\">\n            <label for=\"wardNo\" class=\"required\">Ward #</label>\n            <input type=\"text\" id=\"wardNo\" class=\"form-control\" formControlName=\"wardNo\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('wardNo')\" errorMsg=\"Ward # is mandatory\"></app-show-validation-error>\n          </div>\n          <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('areaCode')\">\n            <label for=\"areaCode\" class=\"required\">Area Code</label>\n            <input type=\"text\" id=\"areaCode\" class=\"form-control\" formControlName=\"areaCode\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('areaCode')\" errorMsg=\"Area code is mandatory\"></app-show-validation-error>\n          </div>\n          <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('siteNo')\">\n            <label for=\"siteNo\" class=\"required\">Plot/Site #</label>\n            <input type=\"text\" id=\"siteNo\" class=\"form-control\" formControlName=\"siteNo\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('siteNo')\" errorMsg=\"Plot/Site # is mandatory\"></app-show-validation-error>\n          </div>\n        </div>\n        <hr />\n        <h2>Geographic Data</h2>\n        <div formGroupName=\"geoData\" >\n          <div class=\"form-group block\">\n            <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('geoData.latitude')\">\n              <label for=\"latitude\" class=\"required\">Latitude</label>\n              <input type=\"text\" id=\"latitude\" class=\"form-control\" formControlName=\"latitude\" (change)=\"setGeoCordinates()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.latitude')\" errorMsg=\"Latitude is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('geoData.longitude')\">\n              <label for=\"Longitude\" class=\"required\">Longitude</label>\n              <input type=\"text\" id=\"longitude\" class=\"form-control\" formControlName=\"longitude\" (change)=\"setGeoCordinates()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.longitude')\" errorMsg=\"Longitude is mandatory\"></app-show-validation-error>\n            </div>\n          </div>\n          <div class=\"form-group block\">\n            <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('geoData.length')\">\n              <label for=\"length\" class=\"required\">Plot Length (ft.)</label>\n              <input type=\"text\" id=\"length\" class=\"form-control\" formControlName=\"length\" (change) = \"calculateTotalArea()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.length')\" errorMsg=\"Plot length is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('geoData.width')\">\n              <label for=\"width\" class=\"required\">Plot Width (ft.)</label>\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"width\" (change) = \"calculateTotalArea()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.width')\" errorMsg=\"Plot width is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-lg-4\">\n              <label for=\"width\">Total Plot Area (sq. ft.)</label>\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"totalArea\" readonly />\n            </div>\n          </div>\n          <div class=\"form-group block\">\n            <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('geoData.address')\">\n              <label for=\"address\" class=\"required\">Property Address</label>\n              <textarea type=\"text\" id=\"address\" class=\"form-control\" formControlName=\"address\" ></textarea>\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.address')\" errorMsg=\"Plot address is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-lg-8\" *ngIf=\"lat && long\">\n              <app-gmaps [lat]=\"lat\"  [lng]=\"long\"></app-gmaps>\n            </div>\n          </div>          \n          </div>\n          <hr />\n          <h2>Pre Mutation Sketch</h2>\n          <div class=\"block\">\n          <div class=\"col-lg-4\" *ngIf=\"sketchURL!=null && sketchURL!=''\">\n          <a [href]='sketchURL' target = '_blank'>View Sketch</a>\n          </div>\n          </div>\n          <hr />\n          <h2>Land Allottee Details</h2>\n          <div formGroupName=\"ownerDetails\">\n            <div class=\"form-group block\">\n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.ownerName')\">\n                <label for=\"ownerName\" class=\"required\">Allottee Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"ownerName\" formControlName=\"ownerName\">\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.ownerName')\" errorMsg=\"Property allotee Name is mandatory\"></app-show-validation-error>\n              </div>\n  \n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.aadharNo')\">\n                <label for=\"aadharNo\" class=\"required\">Aadhar #</label>\n                <input type=\"text\" id=\"aadharNo\" class=\"form-control\" formControlName=\"aadharNo\" />\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.aadharNo')\" errorMsg=\"Aadhar # is mandatory\"></app-show-validation-error>\n              </div>\n  \n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.gender')\">\n                <div> <label class=\"required\">Gender</label></div>\n                <label class=\"lg-check radio-inline\">\n                  <input type=\"radio\" value=\"M\" name=\"gender\" formControlName=\"gender\">Male\n                </label>\n                <label class=\"lg-check radio-inline\">\n                  <input type=\"radio\" value=\"F\" name=\"gender\" formControlName=\"gender\">Female\n                </label>\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.gender')\" errorMsg=\"Gender is mandatory\"></app-show-validation-error>\n              </div>\n            </div>\n            <div class=\"form-group block\">\n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.mobileNo')\">\n                <label for=\"mobileNo\" class=\"required\">Mobile</label>\n                <input type=\"text\" id=\"mobileNo\" class=\"form-control\" formControlName=\"mobileNo\" />\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.mobileNo')\" errorMsg=\"Mobile number is mandatory\"></app-show-validation-error>\n              </div>\n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.emailID')\">\n                <label for=\"emailID\" class=\"required\">Email ID</label>\n                <input type=\"text\" id=\"emailID\" class=\"form-control\" formControlName=\"emailID\" />\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.emailID')\" errorMsg=\"Email ID is mandatory\"></app-show-validation-error>\n              </div>\n            </div>\n            <div class=\"form-group block\">\n              <div class=\"col-lg-4\" [ngClass]=\"displayFieldCss('ownerDetails.address')\">\n                <label for=\"ownerAddress\" class=\"required\">Allottee Address</label>\n                <textarea type=\"text\" id=\"ownerAddress\" class=\"form-control\" formControlName=\"address\"></textarea>\n                <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.address')\" errorMsg=\"Allotee address is mandatory\"></app-show-validation-error>\n              </div>\n            </div>\n          </div>\n    </fieldset>\n    <div align=\"center\">\n      <button type=\"submit\" class=\"btn btn-primary\">Back</button>\n    </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/view-land-record/view-land-record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewlandrecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_LandRecord__ = __webpack_require__("./src/app/models/LandRecord.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewlandrecordComponent = /** @class */ (function () {
    function ViewlandrecordComponent(formBuilder, location, manageLandRecordsService, router, route) {
        this.formBuilder = formBuilder;
        this.location = location;
        this.manageLandRecordsService = manageLandRecordsService;
        this.router = router;
        this.route = route;
        this.landRecord = new __WEBPACK_IMPORTED_MODULE_5__models_LandRecord__["a" /* LandRecord */](); //initialize land record object
        this.submitSuccess = false;
    }
    ViewlandrecordComponent.prototype.ngOnInit = function () {
        this.loadForm();
    };
    ViewlandrecordComponent.prototype.loadForm = function () {
        var _this = this;
        this.submitSuccess = false;
        this.lat = null;
        this.long = null;
        this.layoutForm = this.formBuilder.group({
            pid: [''],
            wardNo: [null],
            areaCode: [null,],
            siteNo: [null,],
            geoData: this.formBuilder.group({
                latitude: [null],
                longitude: [null],
                length: [null],
                width: [null],
                totalArea: '',
                address: [null]
            }),
            preMutationSketch: [null],
            ownerDetails: this.formBuilder.group({
                ownerName: [null],
                gender: [null],
                aadharNo: [null],
                mobileNo: [null],
                emailID: [null],
                address: [null]
            })
        });
        this.route.params
            .switchMap(function (params) { return _this.manageLandRecordsService.getLandRecordsMojaniByPid(params['id']); })
            .subscribe(function (response) {
            console.log("res received getLandRecordbyPid service" + JSON.stringify(response));
            if (response != null && response.success) {
                _this.landRecord = response.landRecords;
                console.log("landRecord object received:" + _this.landRecord);
                _this.layoutForm.patchValue(_this.landRecord);
                _this.setGeoCordinates();
                if (response.sketchURL != null && response.sketchURL != "") {
                    _this.sketchURL = response.sketchURL;
                }
            }
        });
    };
    ViewlandrecordComponent.prototype.onSubmit = function () {
        this.location.back();
    };
    ViewlandrecordComponent.prototype.isFieldValid = function (field) {
        return !this.layoutForm.get(field).valid && this.layoutForm.get(field).touched;
    };
    ViewlandrecordComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    ViewlandrecordComponent.prototype.setGeoCordinates = function () {
        this.lat = parseFloat(this.layoutForm.get('geoData.latitude').value);
        this.long = parseFloat(this.layoutForm.get('geoData.longitude').value);
    };
    ViewlandrecordComponent.prototype.calculateTotalArea = function () {
        var length = parseFloat(this.layoutForm.get('geoData.length').value);
        var width = parseFloat(this.layoutForm.get('geoData.width').value);
        var totalArea = length * width;
        if (!isNaN(totalArea)) {
            console.log("Total Area: " + totalArea);
            this.layoutForm.patchValue({ 'geoData': { 'totalArea': totalArea } });
        }
    };
    ViewlandrecordComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            console.log("file :" + file);
        }
    };
    ViewlandrecordComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            console.log(field);
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ViewlandrecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-viewlandrecord',
            template: __webpack_require__("./src/app/view-land-record/view-land-record.component.html"),
            styles: [__webpack_require__("./src/app/view-land-record/view-land-record.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_managelandrecords_service__["a" /* ManageLandRecordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_managelandrecords_service__["a" /* ManageLandRecordsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
    ], ViewlandrecordComponent);
    return ViewlandrecordComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=view-land-record.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map