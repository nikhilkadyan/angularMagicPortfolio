webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-parallax [themeData]=\"Theme\"></app-parallax>\n  <app-navbar [themeData]=\"Theme\" [newTheme]=\"newThemeFunction\"></app-navbar>\n  <app-landing  [themeData]=\"Theme\"></app-landing>\n  <app-about></app-about>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\nbody {\n  font-family: 'Roboto', sans-serif; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_themes_service__ = __webpack_require__("./src/app/services/themes.service.ts");
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
    function AppComponent(themesService) {
        this.themesService = themesService;
        this.title = 'app';
        this.Theme = this.themesService.theme;
    }
    AppComponent.prototype.getTheme = function () {
        var _this = this;
        this.themesService.getTheme().subscribe(function (theme) { return _this.Theme = theme; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getTheme();
        this.newThemeFunction = this.newTheme.bind(this);
    };
    AppComponent.prototype.newTheme = function () {
        var currentTheme = this.Theme.name;
        var themesWithoutCurrentTheme = this.themesService.allThemes.filter(function (theme) { return theme.name !== currentTheme.name; });
        var randomThemeIndex = Math.floor((Math.random() * (themesWithoutCurrentTheme.length)));
        this.Theme = themesWithoutCurrentTheme[randomThemeIndex];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_themes_service__["a" /* ThemesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_themes_service__["a" /* ThemesService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_parallax_parallax_component__ = __webpack_require__("./src/app/components/parallax/parallax.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing_component__ = __webpack_require__("./src/app/pages/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about_component__ = __webpack_require__("./src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_portfolio_portfolio_component__ = __webpack_require__("./src/app/pages/portfolio/portfolio.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_parallax_parallax_component__["a" /* ParallaxComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_portfolio_portfolio_component__["a" /* PortfolioComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav [ngStyle]=\"{'color':themeData.colorPrimary}\">\n  <span (click)=\"newTheme()\" class=\"themeChange\">\n    <i class=\"fas fa-edit\"></i>\n  </span>\n  <div class=\"menu\"  *ngFor=\"let item of items\">\n    <a  href=\"{{item.link}}\"\n        class=\"menu_item\"\n        [ngStyle]=\"{'color':themeData.colorPrimary}\">{{item.name}}</a>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = "nav {\n  width: 100%;\n  position: fixed; }\n  nav .themeChange {\n    float: left;\n    font-size: 5vh;\n    margin-top: -3px;\n    -webkit-animation: 0.8s bounce-xy infinite;\n            animation: 0.8s bounce-xy infinite; }\n  nav .themeChange:hover {\n      cursor: pointer; }\n  nav .menu_item {\n    float: right;\n    text-decoration: none;\n    margin: 0px 20px 5px 20px;\n    padding: 4px 2px 7px 2px;\n    font-size: 22px;\n    font-family: 'Roboto', sans-serif; }\n  nav .menu_item:hover {\n      border-bottom: 1px solid; }\n  @-webkit-keyframes bounce-xy {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0) translateX(0);\n            transform: translateY(0) translateX(0); }\n  40% {\n    -webkit-transform: translateY(2px) translateX(2px);\n            transform: translateY(2px) translateX(2px); }\n  60% {\n    -webkit-transform: translateY(1px) translateX(1px);\n            transform: translateY(1px) translateX(1px); } }\n  @keyframes bounce-xy {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0) translateX(0);\n            transform: translateY(0) translateX(0); }\n  40% {\n    -webkit-transform: translateY(2px) translateX(2px);\n            transform: translateY(2px) translateX(2px); }\n  60% {\n    -webkit-transform: translateY(1px) translateX(1px);\n            transform: translateY(1px) translateX(1px); } }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.items = [
            { name: 'Porfolio', link: '#' },
            { name: 'About', link: '/about' }
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "themeData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Function)
    ], NavbarComponent.prototype, "newTheme", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/parallax/parallax.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\"  [ngStyle]=\"{'background-color': themeData.bgPrimary, 'color' : themeData.colorPrimary}\">\n  <div id=\"stars1\"></div>\n  <div id=\"stars2\"></div>\n  <div id=\"stars3\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/parallax/parallax.component.scss":
/***/ (function(module, exports) {

module.exports = ".parallax {\n  position: fixed;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  width: calc(100vw - 0.0001px);\n  min-height: 100%;\n  height: auto; }\n  .parallax #stars1 {\n    width: 1px;\n    height: 1px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 449px 139px , 1060px 1067px , 163px 143px , 1486px 658px , 1576px 171px , 1079px 961px , 507px 579px , 1713px 1055px , 1078px 53px , 1679px 1064px , 520px 5px , 291px 1301px , 1055px 1278px , 695px 471px , 1008px 698px , 1214px 332px , 293px 251px , 268px 1215px , 1937px 711px , 819px 1478px , 647px 1055px , 34px 333px , 1855px 328px , 1485px 784px , 253px 1692px , 1793px 1000px , 1466px 374px , 1212px 185px , 1188px 1949px , 838px 401px , 1368px 546px , 894px 653px , 895px 984px , 1976px 1876px , 717px 98px , 798px 900px , 1333px 962px , 1770px 1029px , 759px 1110px , 1762px 1358px , 1550px 1726px , 1852px 506px , 1688px 415px , 884px 1022px , 404px 1379px , 94px 1957px , 1950px 1502px , 632px 748px , 561px 1543px , 1908px 1189px , 1599px 318px , 661px 867px , 225px 864px , 1897px 1824px , 1797px 1984px , 1152px 1468px , 187px 666px , 774px 860px , 1010px 390px , 567px 1658px , 1800px 230px , 1879px 1368px , 1828px 218px , 1118px 498px , 483px 34px , 951px 1952px , 1165px 1571px , 1732px 1656px , 1119px 1779px , 1413px 293px , 1846px 659px , 1957px 556px , 1070px 251px , 946px 1154px , 841px 184px , 181px 798px , 1475px 1709px , 1164px 662px , 1388px 145px , 464px 781px , 1249px 1877px , 1160px 1497px , 358px 1552px , 1723px 1214px , 1926px 437px , 1600px 1430px , 491px 1709px , 1233px 374px , 1060px 426px , 1728px 41px , 1555px 1872px , 1039px 1077px , 146px 787px , 366px 884px , 1728px 1993px , 886px 1449px , 1898px 1601px , 720px 1054px , 1275px 485px , 1753px 683px , 1814px 1933px , 1463px 1099px , 1093px 233px , 9px 1976px , 835px 853px , 465px 1396px , 901px 494px , 1446px 1133px , 1998px 580px , 363px 1196px , 1279px 525px , 626px 43px , 1100px 689px , 467px 32px , 1613px 1129px , 462px 490px , 1521px 212px , 1327px 1603px , 66px 339px , 249px 1769px , 557px 756px , 607px 13px , 981px 1931px , 1899px 1183px , 1234px 1593px , 792px 644px , 654px 244px , 602px 1917px , 74px 1396px , 319px 1156px , 1656px 1527px , 1337px 1966px , 583px 119px , 143px 283px , 565px 458px , 1082px 1182px , 189px 704px , 1430px 1016px , 1606px 1269px , 204px 1618px , 488px 1394px , 1327px 1514px , 806px 1812px , 1898px 463px , 336px 676px , 1550px 1342px , 1506px 1061px , 1469px 1607px , 147px 762px , 1640px 1918px , 210px 561px , 446px 1908px , 442px 435px , 1051px 1810px , 1956px 760px , 1197px 348px , 1526px 269px , 1741px 1481px , 1882px 899px , 1920px 1787px , 1621px 1686px , 1478px 637px , 1806px 1952px , 62px 1720px , 1661px 1906px , 1892px 244px , 1038px 20px , 1282px 1814px , 17px 343px , 556px 1113px , 336px 59px , 691px 914px , 931px 552px , 1901px 1301px , 703px 656px , 234px 403px , 24px 1944px , 1770px 1766px , 771px 1060px , 941px 1839px , 1908px 965px , 1016px 1620px , 717px 1166px , 802px 1475px , 1613px 459px , 770px 1793px , 1544px 1926px , 1596px 858px , 1468px 746px , 748px 149px , 1895px 1286px , 206px 1087px , 1115px 1767px , 1546px 1692px , 838px 453px , 1251px 768px , 857px 1005px , 1695px 516px , 1312px 78px , 184px 852px , 160px 1440px , 799px 1736px , 1388px 1973px , 1486px 1814px , 1379px 167px , 654px 481px , 690px 938px , 1675px 1126px , 615px 895px , 1283px 1507px , 281px 1372px , 200px 1207px , 1210px 1102px , 753px 26px , 137px 823px , 392px 1959px , 1735px 1391px , 37px 681px , 970px 61px , 527px 1899px , 172px 973px , 1601px 1149px , 1294px 654px , 362px 1189px , 1383px 626px , 1013px 1468px , 1193px 254px , 1278px 1178px , 242px 1858px , 1179px 1968px , 1905px 956px , 28px 23px , 1737px 264px , 1342px 903px , 1755px 708px , 1078px 493px , 1746px 1660px , 1906px 1151px , 1955px 774px , 1598px 984px , 1825px 1356px , 72px 1269px , 259px 1904px , 281px 446px , 1942px 1028px , 1856px 1018px , 1689px 983px , 1394px 1860px , 182px 859px , 683px 1733px , 1175px 1106px , 505px 1095px , 1709px 1476px , 29px 1412px , 570px 1709px , 496px 1893px , 1612px 1262px , 1073px 326px , 645px 353px , 1673px 288px , 371px 1149px , 1590px 237px , 843px 1035px , 1441px 1369px , 1110px 709px , 385px 463px , 517px 1012px , 1175px 1284px , 665px 1216px , 799px 851px , 154px 797px , 989px 24px , 1290px 758px , 1965px 415px , 139px 684px , 1249px 1437px , 607px 374px , 257px 829px , 137px 729px , 1475px 1262px , 1215px 1005px , 44px 143px , 313px 770px , 1827px 1317px , 644px 425px , 176px 1503px , 588px 497px , 1173px 484px , 803px 678px , 1906px 1035px , 861px 1352px , 644px 1679px , 1647px 1811px , 1155px 1666px , 470px 1728px , 1963px 178px , 819px 44px , 721px 1317px , 173px 1168px , 1433px 667px , 1285px 525px , 1829px 1031px , 273px 513px , 1829px 872px , 275px 1540px , 586px 167px , 419px 1940px , 593px 1620px , 1600px 62px , 248px 688px , 759px 17px , 1074px 20px , 1225px 220px , 555px 1527px , 1691px 1395px , 1466px 1981px , 158px 121px , 1568px 371px , 1071px 1907px , 1685px 1603px , 1747px 1685px , 220px 1289px , 1537px 842px , 478px 672px , 1086px 245px , 615px 1327px , 1237px 890px , 1341px 1576px , 129px 466px , 889px 621px , 1494px 347px , 547px 1667px , 120px 926px , 761px 1891px , 1373px 1028px , 1946px 1908px , 477px 1620px , 1771px 16px , 453px 981px , 576px 1366px , 1587px 843px , 792px 665px , 1969px 1708px , 1520px 1698px , 213px 1392px , 637px 926px , 537px 1989px , 1143px 70px , 860px 869px , 790px 1349px , 141px 815px , 860px 1807px , 1178px 346px , 1469px 1816px , 1543px 1078px , 1807px 225px , 1765px 112px , 1870px 588px , 351px 433px , 1265px 1061px , 538px 1455px , 260px 1658px , 103px 1353px , 142px 769px , 1030px 604px , 1190px 294px , 1320px 1303px , 131px 96px , 1537px 1706px , 820px 700px , 426px 1642px , 639px 1887px , 811px 519px , 1190px 47px , 1898px 280px , 897px 1831px , 1196px 826px , 799px 70px , 1365px 896px , 1711px 1868px , 313px 1688px , 1917px 898px , 1268px 1346px , 1603px 769px , 616px 1122px , 739px 216px , 499px 1300px , 1980px 1773px , 1880px 602px , 1757px 1009px , 1378px 1092px , 1485px 1644px , 1164px 1706px , 488px 517px , 480px 1620px , 1017px 1814px , 1959px 95px , 658px 1369px , 563px 135px , 1982px 1999px , 1790px 1598px , 1321px 1812px , 554px 1984px , 1009px 1122px , 322px 6px , 715px 630px , 829px 116px , 1494px 1788px , 1408px 1641px , 153px 163px , 1344px 785px , 1124px 568px , 532px 179px , 288px 1355px , 430px 1201px , 176px 1236px , 395px 1393px , 997px 1301px , 1982px 414px , 596px 1982px , 139px 905px , 638px 1874px , 242px 1462px , 1954px 1185px , 1765px 990px , 286px 901px , 178px 1641px , 1438px 282px , 360px 780px , 1753px 1415px , 1759px 204px , 941px 1774px , 1599px 517px , 280px 378px , 1043px 908px , 1514px 1238px , 1019px 952px , 1284px 1324px , 1175px 693px , 62px 1925px , 168px 1818px , 1300px 658px , 366px 1820px , 375px 1403px , 1158px 893px , 168px 603px , 901px 629px , 900px 696px , 809px 1509px , 783px 1777px , 376px 1119px , 1941px 1882px , 1895px 1431px , 69px 990px , 1849px 1435px , 958px 1652px , 385px 1386px , 1746px 752px , 1586px 1655px , 329px 588px , 1433px 537px , 8px 578px , 1277px 676px , 1925px 54px , 1763px 1432px , 1153px 705px , 587px 751px , 455px 18px , 441px 315px , 1127px 81px , 1413px 1628px , 1327px 1180px , 1846px 1764px , 1596px 1710px , 877px 301px , 804px 857px , 63px 551px , 496px 1209px , 874px 1530px , 1108px 1253px , 794px 1530px , 1381px 1028px , 713px 922px , 478px 423px , 1408px 535px , 495px 273px , 1584px 196px , 466px 476px , 172px 121px , 21px 1030px , 331px 1456px , 1389px 599px , 1255px 1608px , 900px 1895px , 292px 1742px , 185px 1845px , 1010px 1956px , 534px 1700px , 1635px 1104px , 576px 331px , 1559px 1254px , 1145px 151px , 746px 297px , 110px 211px , 1585px 1221px , 641px 173px , 1257px 1013px , 214px 1143px , 1396px 317px , 1990px 93px , 922px 1866px , 1183px 350px , 1105px 199px , 669px 624px , 1622px 1549px , 1490px 1790px , 1359px 894px , 530px 825px , 1005px 1896px , 38px 613px , 1239px 1201px , 1710px 261px , 319px 712px , 173px 625px , 333px 1325px , 608px 950px , 1692px 1180px , 1063px 964px , 1223px 1653px , 1075px 1696px , 1587px 1597px , 321px 702px , 1236px 851px , 889px 1897px , 640px 1746px , 1069px 938px , 815px 1604px , 730px 1426px , 1490px 1168px , 1663px 1132px , 1296px 580px , 1006px 1231px , 802px 1015px , 1493px 67px , 415px 1822px , 1797px 1525px , 861px 1399px , 1546px 1512px , 1459px 1495px , 541px 6px , 62px 709px , 321px 489px , 778px 49px , 1598px 758px , 70px 1260px , 788px 292px , 1267px 378px , 849px 1356px , 1187px 1359px , 497px 165px , 1254px 1910px , 1991px 604px , 1844px 384px , 435px 187px , 29px 1677px , 704px 1973px , 1668px 1947px , 558px 1692px , 1111px 1207px , 321px 475px , 1490px 350px , 504px 1596px , 6px 488px , 1316px 119px , 747px 890px , 9px 1149px , 402px 407px , 1239px 294px , 393px 1019px , 1521px 1455px , 1341px 1368px , 257px 947px , 948px 291px , 1468px 635px , 1961px 764px , 1643px 530px , 1015px 1931px , 67px 1294px , 962px 546px , 1800px 762px , 779px 1741px , 1687px 724px , 1420px 1956px , 1869px 164px , 1226px 177px , 1192px 516px , 250px 191px , 1798px 340px , 661px 486px , 1449px 358px , 1668px 1850px , 1035px 1370px , 1644px 1557px , 1305px 626px , 985px 317px , 812px 643px , 1549px 156px , 1753px 866px , 37px 228px , 1699px 377px , 418px 268px , 1225px 1796px , 1533px 34px , 737px 719px , 704px 1706px , 1292px 1831px , 846px 1272px , 1619px 1726px , 1952px 421px , 1352px 1558px , 1749px 1894px , 748px 84px , 871px 461px , 979px 986px , 449px 938px , 204px 1237px , 170px 414px , 1757px 5px , 1525px 1824px , 267px 545px , 515px 1211px , 1328px 1098px , 1804px 239px , 344px 1100px , 1947px 1532px , 1977px 1342px , 1334px 1672px , 614px 1322px , 919px 1266px , 1678px 943px , 313px 756px , 27px 1909px , 1718px 1228px , 203px 1608px , 1760px 1356px , 1311px 1398px , 1269px 1679px , 150px 1157px , 1961px 29px , 653px 402px , 447px 800px , 1922px 1864px , 1386px 894px , 1335px 1075px , 598px 1364px , 225px 848px , 960px 1342px , 1098px 137px , 1339px 854px , 975px 243px , 914px 96px , 1669px 1681px , 1605px 1653px , 563px 1141px , 1044px 1200px , 1606px 1067px , 952px 1570px , 677px 739px , 1507px 651px , 1660px 1647px , 423px 672px , 54px 445px , 310px 1465px , 422px 1663px , 245px 784px , 530px 1490px , 1143px 748px , 1287px 160px , 573px 1207px , 1990px 1239px , 955px 1924px , 394px 164px , 441px 53px , 1444px 847px , 896px 1496px , 1998px 417px , 86px 1836px , 200px 1144px , 1390px 258px , 262px 1163px , 1202px 1056px , 1300px 1741px , 455px 1046px , 711px 1971px , 669px 508px , 353px 236px , 1082px 1556px , 555px 432px , 593px 951px , 198px 1923px;\n            box-shadow: 449px 139px , 1060px 1067px , 163px 143px , 1486px 658px , 1576px 171px , 1079px 961px , 507px 579px , 1713px 1055px , 1078px 53px , 1679px 1064px , 520px 5px , 291px 1301px , 1055px 1278px , 695px 471px , 1008px 698px , 1214px 332px , 293px 251px , 268px 1215px , 1937px 711px , 819px 1478px , 647px 1055px , 34px 333px , 1855px 328px , 1485px 784px , 253px 1692px , 1793px 1000px , 1466px 374px , 1212px 185px , 1188px 1949px , 838px 401px , 1368px 546px , 894px 653px , 895px 984px , 1976px 1876px , 717px 98px , 798px 900px , 1333px 962px , 1770px 1029px , 759px 1110px , 1762px 1358px , 1550px 1726px , 1852px 506px , 1688px 415px , 884px 1022px , 404px 1379px , 94px 1957px , 1950px 1502px , 632px 748px , 561px 1543px , 1908px 1189px , 1599px 318px , 661px 867px , 225px 864px , 1897px 1824px , 1797px 1984px , 1152px 1468px , 187px 666px , 774px 860px , 1010px 390px , 567px 1658px , 1800px 230px , 1879px 1368px , 1828px 218px , 1118px 498px , 483px 34px , 951px 1952px , 1165px 1571px , 1732px 1656px , 1119px 1779px , 1413px 293px , 1846px 659px , 1957px 556px , 1070px 251px , 946px 1154px , 841px 184px , 181px 798px , 1475px 1709px , 1164px 662px , 1388px 145px , 464px 781px , 1249px 1877px , 1160px 1497px , 358px 1552px , 1723px 1214px , 1926px 437px , 1600px 1430px , 491px 1709px , 1233px 374px , 1060px 426px , 1728px 41px , 1555px 1872px , 1039px 1077px , 146px 787px , 366px 884px , 1728px 1993px , 886px 1449px , 1898px 1601px , 720px 1054px , 1275px 485px , 1753px 683px , 1814px 1933px , 1463px 1099px , 1093px 233px , 9px 1976px , 835px 853px , 465px 1396px , 901px 494px , 1446px 1133px , 1998px 580px , 363px 1196px , 1279px 525px , 626px 43px , 1100px 689px , 467px 32px , 1613px 1129px , 462px 490px , 1521px 212px , 1327px 1603px , 66px 339px , 249px 1769px , 557px 756px , 607px 13px , 981px 1931px , 1899px 1183px , 1234px 1593px , 792px 644px , 654px 244px , 602px 1917px , 74px 1396px , 319px 1156px , 1656px 1527px , 1337px 1966px , 583px 119px , 143px 283px , 565px 458px , 1082px 1182px , 189px 704px , 1430px 1016px , 1606px 1269px , 204px 1618px , 488px 1394px , 1327px 1514px , 806px 1812px , 1898px 463px , 336px 676px , 1550px 1342px , 1506px 1061px , 1469px 1607px , 147px 762px , 1640px 1918px , 210px 561px , 446px 1908px , 442px 435px , 1051px 1810px , 1956px 760px , 1197px 348px , 1526px 269px , 1741px 1481px , 1882px 899px , 1920px 1787px , 1621px 1686px , 1478px 637px , 1806px 1952px , 62px 1720px , 1661px 1906px , 1892px 244px , 1038px 20px , 1282px 1814px , 17px 343px , 556px 1113px , 336px 59px , 691px 914px , 931px 552px , 1901px 1301px , 703px 656px , 234px 403px , 24px 1944px , 1770px 1766px , 771px 1060px , 941px 1839px , 1908px 965px , 1016px 1620px , 717px 1166px , 802px 1475px , 1613px 459px , 770px 1793px , 1544px 1926px , 1596px 858px , 1468px 746px , 748px 149px , 1895px 1286px , 206px 1087px , 1115px 1767px , 1546px 1692px , 838px 453px , 1251px 768px , 857px 1005px , 1695px 516px , 1312px 78px , 184px 852px , 160px 1440px , 799px 1736px , 1388px 1973px , 1486px 1814px , 1379px 167px , 654px 481px , 690px 938px , 1675px 1126px , 615px 895px , 1283px 1507px , 281px 1372px , 200px 1207px , 1210px 1102px , 753px 26px , 137px 823px , 392px 1959px , 1735px 1391px , 37px 681px , 970px 61px , 527px 1899px , 172px 973px , 1601px 1149px , 1294px 654px , 362px 1189px , 1383px 626px , 1013px 1468px , 1193px 254px , 1278px 1178px , 242px 1858px , 1179px 1968px , 1905px 956px , 28px 23px , 1737px 264px , 1342px 903px , 1755px 708px , 1078px 493px , 1746px 1660px , 1906px 1151px , 1955px 774px , 1598px 984px , 1825px 1356px , 72px 1269px , 259px 1904px , 281px 446px , 1942px 1028px , 1856px 1018px , 1689px 983px , 1394px 1860px , 182px 859px , 683px 1733px , 1175px 1106px , 505px 1095px , 1709px 1476px , 29px 1412px , 570px 1709px , 496px 1893px , 1612px 1262px , 1073px 326px , 645px 353px , 1673px 288px , 371px 1149px , 1590px 237px , 843px 1035px , 1441px 1369px , 1110px 709px , 385px 463px , 517px 1012px , 1175px 1284px , 665px 1216px , 799px 851px , 154px 797px , 989px 24px , 1290px 758px , 1965px 415px , 139px 684px , 1249px 1437px , 607px 374px , 257px 829px , 137px 729px , 1475px 1262px , 1215px 1005px , 44px 143px , 313px 770px , 1827px 1317px , 644px 425px , 176px 1503px , 588px 497px , 1173px 484px , 803px 678px , 1906px 1035px , 861px 1352px , 644px 1679px , 1647px 1811px , 1155px 1666px , 470px 1728px , 1963px 178px , 819px 44px , 721px 1317px , 173px 1168px , 1433px 667px , 1285px 525px , 1829px 1031px , 273px 513px , 1829px 872px , 275px 1540px , 586px 167px , 419px 1940px , 593px 1620px , 1600px 62px , 248px 688px , 759px 17px , 1074px 20px , 1225px 220px , 555px 1527px , 1691px 1395px , 1466px 1981px , 158px 121px , 1568px 371px , 1071px 1907px , 1685px 1603px , 1747px 1685px , 220px 1289px , 1537px 842px , 478px 672px , 1086px 245px , 615px 1327px , 1237px 890px , 1341px 1576px , 129px 466px , 889px 621px , 1494px 347px , 547px 1667px , 120px 926px , 761px 1891px , 1373px 1028px , 1946px 1908px , 477px 1620px , 1771px 16px , 453px 981px , 576px 1366px , 1587px 843px , 792px 665px , 1969px 1708px , 1520px 1698px , 213px 1392px , 637px 926px , 537px 1989px , 1143px 70px , 860px 869px , 790px 1349px , 141px 815px , 860px 1807px , 1178px 346px , 1469px 1816px , 1543px 1078px , 1807px 225px , 1765px 112px , 1870px 588px , 351px 433px , 1265px 1061px , 538px 1455px , 260px 1658px , 103px 1353px , 142px 769px , 1030px 604px , 1190px 294px , 1320px 1303px , 131px 96px , 1537px 1706px , 820px 700px , 426px 1642px , 639px 1887px , 811px 519px , 1190px 47px , 1898px 280px , 897px 1831px , 1196px 826px , 799px 70px , 1365px 896px , 1711px 1868px , 313px 1688px , 1917px 898px , 1268px 1346px , 1603px 769px , 616px 1122px , 739px 216px , 499px 1300px , 1980px 1773px , 1880px 602px , 1757px 1009px , 1378px 1092px , 1485px 1644px , 1164px 1706px , 488px 517px , 480px 1620px , 1017px 1814px , 1959px 95px , 658px 1369px , 563px 135px , 1982px 1999px , 1790px 1598px , 1321px 1812px , 554px 1984px , 1009px 1122px , 322px 6px , 715px 630px , 829px 116px , 1494px 1788px , 1408px 1641px , 153px 163px , 1344px 785px , 1124px 568px , 532px 179px , 288px 1355px , 430px 1201px , 176px 1236px , 395px 1393px , 997px 1301px , 1982px 414px , 596px 1982px , 139px 905px , 638px 1874px , 242px 1462px , 1954px 1185px , 1765px 990px , 286px 901px , 178px 1641px , 1438px 282px , 360px 780px , 1753px 1415px , 1759px 204px , 941px 1774px , 1599px 517px , 280px 378px , 1043px 908px , 1514px 1238px , 1019px 952px , 1284px 1324px , 1175px 693px , 62px 1925px , 168px 1818px , 1300px 658px , 366px 1820px , 375px 1403px , 1158px 893px , 168px 603px , 901px 629px , 900px 696px , 809px 1509px , 783px 1777px , 376px 1119px , 1941px 1882px , 1895px 1431px , 69px 990px , 1849px 1435px , 958px 1652px , 385px 1386px , 1746px 752px , 1586px 1655px , 329px 588px , 1433px 537px , 8px 578px , 1277px 676px , 1925px 54px , 1763px 1432px , 1153px 705px , 587px 751px , 455px 18px , 441px 315px , 1127px 81px , 1413px 1628px , 1327px 1180px , 1846px 1764px , 1596px 1710px , 877px 301px , 804px 857px , 63px 551px , 496px 1209px , 874px 1530px , 1108px 1253px , 794px 1530px , 1381px 1028px , 713px 922px , 478px 423px , 1408px 535px , 495px 273px , 1584px 196px , 466px 476px , 172px 121px , 21px 1030px , 331px 1456px , 1389px 599px , 1255px 1608px , 900px 1895px , 292px 1742px , 185px 1845px , 1010px 1956px , 534px 1700px , 1635px 1104px , 576px 331px , 1559px 1254px , 1145px 151px , 746px 297px , 110px 211px , 1585px 1221px , 641px 173px , 1257px 1013px , 214px 1143px , 1396px 317px , 1990px 93px , 922px 1866px , 1183px 350px , 1105px 199px , 669px 624px , 1622px 1549px , 1490px 1790px , 1359px 894px , 530px 825px , 1005px 1896px , 38px 613px , 1239px 1201px , 1710px 261px , 319px 712px , 173px 625px , 333px 1325px , 608px 950px , 1692px 1180px , 1063px 964px , 1223px 1653px , 1075px 1696px , 1587px 1597px , 321px 702px , 1236px 851px , 889px 1897px , 640px 1746px , 1069px 938px , 815px 1604px , 730px 1426px , 1490px 1168px , 1663px 1132px , 1296px 580px , 1006px 1231px , 802px 1015px , 1493px 67px , 415px 1822px , 1797px 1525px , 861px 1399px , 1546px 1512px , 1459px 1495px , 541px 6px , 62px 709px , 321px 489px , 778px 49px , 1598px 758px , 70px 1260px , 788px 292px , 1267px 378px , 849px 1356px , 1187px 1359px , 497px 165px , 1254px 1910px , 1991px 604px , 1844px 384px , 435px 187px , 29px 1677px , 704px 1973px , 1668px 1947px , 558px 1692px , 1111px 1207px , 321px 475px , 1490px 350px , 504px 1596px , 6px 488px , 1316px 119px , 747px 890px , 9px 1149px , 402px 407px , 1239px 294px , 393px 1019px , 1521px 1455px , 1341px 1368px , 257px 947px , 948px 291px , 1468px 635px , 1961px 764px , 1643px 530px , 1015px 1931px , 67px 1294px , 962px 546px , 1800px 762px , 779px 1741px , 1687px 724px , 1420px 1956px , 1869px 164px , 1226px 177px , 1192px 516px , 250px 191px , 1798px 340px , 661px 486px , 1449px 358px , 1668px 1850px , 1035px 1370px , 1644px 1557px , 1305px 626px , 985px 317px , 812px 643px , 1549px 156px , 1753px 866px , 37px 228px , 1699px 377px , 418px 268px , 1225px 1796px , 1533px 34px , 737px 719px , 704px 1706px , 1292px 1831px , 846px 1272px , 1619px 1726px , 1952px 421px , 1352px 1558px , 1749px 1894px , 748px 84px , 871px 461px , 979px 986px , 449px 938px , 204px 1237px , 170px 414px , 1757px 5px , 1525px 1824px , 267px 545px , 515px 1211px , 1328px 1098px , 1804px 239px , 344px 1100px , 1947px 1532px , 1977px 1342px , 1334px 1672px , 614px 1322px , 919px 1266px , 1678px 943px , 313px 756px , 27px 1909px , 1718px 1228px , 203px 1608px , 1760px 1356px , 1311px 1398px , 1269px 1679px , 150px 1157px , 1961px 29px , 653px 402px , 447px 800px , 1922px 1864px , 1386px 894px , 1335px 1075px , 598px 1364px , 225px 848px , 960px 1342px , 1098px 137px , 1339px 854px , 975px 243px , 914px 96px , 1669px 1681px , 1605px 1653px , 563px 1141px , 1044px 1200px , 1606px 1067px , 952px 1570px , 677px 739px , 1507px 651px , 1660px 1647px , 423px 672px , 54px 445px , 310px 1465px , 422px 1663px , 245px 784px , 530px 1490px , 1143px 748px , 1287px 160px , 573px 1207px , 1990px 1239px , 955px 1924px , 394px 164px , 441px 53px , 1444px 847px , 896px 1496px , 1998px 417px , 86px 1836px , 200px 1144px , 1390px 258px , 262px 1163px , 1202px 1056px , 1300px 1741px , 455px 1046px , 711px 1971px , 669px 508px , 353px 236px , 1082px 1556px , 555px 432px , 593px 951px , 198px 1923px;\n    -webkit-animation: animStar 150s linear infinite;\n            animation: animStar 150s linear infinite; }\n  .parallax #stars1:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 1px;\n      height: 1px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 449px 139px , 1060px 1067px , 163px 143px , 1486px 658px , 1576px 171px , 1079px 961px , 507px 579px , 1713px 1055px , 1078px 53px , 1679px 1064px , 520px 5px , 291px 1301px , 1055px 1278px , 695px 471px , 1008px 698px , 1214px 332px , 293px 251px , 268px 1215px , 1937px 711px , 819px 1478px , 647px 1055px , 34px 333px , 1855px 328px , 1485px 784px , 253px 1692px , 1793px 1000px , 1466px 374px , 1212px 185px , 1188px 1949px , 838px 401px , 1368px 546px , 894px 653px , 895px 984px , 1976px 1876px , 717px 98px , 798px 900px , 1333px 962px , 1770px 1029px , 759px 1110px , 1762px 1358px , 1550px 1726px , 1852px 506px , 1688px 415px , 884px 1022px , 404px 1379px , 94px 1957px , 1950px 1502px , 632px 748px , 561px 1543px , 1908px 1189px , 1599px 318px , 661px 867px , 225px 864px , 1897px 1824px , 1797px 1984px , 1152px 1468px , 187px 666px , 774px 860px , 1010px 390px , 567px 1658px , 1800px 230px , 1879px 1368px , 1828px 218px , 1118px 498px , 483px 34px , 951px 1952px , 1165px 1571px , 1732px 1656px , 1119px 1779px , 1413px 293px , 1846px 659px , 1957px 556px , 1070px 251px , 946px 1154px , 841px 184px , 181px 798px , 1475px 1709px , 1164px 662px , 1388px 145px , 464px 781px , 1249px 1877px , 1160px 1497px , 358px 1552px , 1723px 1214px , 1926px 437px , 1600px 1430px , 491px 1709px , 1233px 374px , 1060px 426px , 1728px 41px , 1555px 1872px , 1039px 1077px , 146px 787px , 366px 884px , 1728px 1993px , 886px 1449px , 1898px 1601px , 720px 1054px , 1275px 485px , 1753px 683px , 1814px 1933px , 1463px 1099px , 1093px 233px , 9px 1976px , 835px 853px , 465px 1396px , 901px 494px , 1446px 1133px , 1998px 580px , 363px 1196px , 1279px 525px , 626px 43px , 1100px 689px , 467px 32px , 1613px 1129px , 462px 490px , 1521px 212px , 1327px 1603px , 66px 339px , 249px 1769px , 557px 756px , 607px 13px , 981px 1931px , 1899px 1183px , 1234px 1593px , 792px 644px , 654px 244px , 602px 1917px , 74px 1396px , 319px 1156px , 1656px 1527px , 1337px 1966px , 583px 119px , 143px 283px , 565px 458px , 1082px 1182px , 189px 704px , 1430px 1016px , 1606px 1269px , 204px 1618px , 488px 1394px , 1327px 1514px , 806px 1812px , 1898px 463px , 336px 676px , 1550px 1342px , 1506px 1061px , 1469px 1607px , 147px 762px , 1640px 1918px , 210px 561px , 446px 1908px , 442px 435px , 1051px 1810px , 1956px 760px , 1197px 348px , 1526px 269px , 1741px 1481px , 1882px 899px , 1920px 1787px , 1621px 1686px , 1478px 637px , 1806px 1952px , 62px 1720px , 1661px 1906px , 1892px 244px , 1038px 20px , 1282px 1814px , 17px 343px , 556px 1113px , 336px 59px , 691px 914px , 931px 552px , 1901px 1301px , 703px 656px , 234px 403px , 24px 1944px , 1770px 1766px , 771px 1060px , 941px 1839px , 1908px 965px , 1016px 1620px , 717px 1166px , 802px 1475px , 1613px 459px , 770px 1793px , 1544px 1926px , 1596px 858px , 1468px 746px , 748px 149px , 1895px 1286px , 206px 1087px , 1115px 1767px , 1546px 1692px , 838px 453px , 1251px 768px , 857px 1005px , 1695px 516px , 1312px 78px , 184px 852px , 160px 1440px , 799px 1736px , 1388px 1973px , 1486px 1814px , 1379px 167px , 654px 481px , 690px 938px , 1675px 1126px , 615px 895px , 1283px 1507px , 281px 1372px , 200px 1207px , 1210px 1102px , 753px 26px , 137px 823px , 392px 1959px , 1735px 1391px , 37px 681px , 970px 61px , 527px 1899px , 172px 973px , 1601px 1149px , 1294px 654px , 362px 1189px , 1383px 626px , 1013px 1468px , 1193px 254px , 1278px 1178px , 242px 1858px , 1179px 1968px , 1905px 956px , 28px 23px , 1737px 264px , 1342px 903px , 1755px 708px , 1078px 493px , 1746px 1660px , 1906px 1151px , 1955px 774px , 1598px 984px , 1825px 1356px , 72px 1269px , 259px 1904px , 281px 446px , 1942px 1028px , 1856px 1018px , 1689px 983px , 1394px 1860px , 182px 859px , 683px 1733px , 1175px 1106px , 505px 1095px , 1709px 1476px , 29px 1412px , 570px 1709px , 496px 1893px , 1612px 1262px , 1073px 326px , 645px 353px , 1673px 288px , 371px 1149px , 1590px 237px , 843px 1035px , 1441px 1369px , 1110px 709px , 385px 463px , 517px 1012px , 1175px 1284px , 665px 1216px , 799px 851px , 154px 797px , 989px 24px , 1290px 758px , 1965px 415px , 139px 684px , 1249px 1437px , 607px 374px , 257px 829px , 137px 729px , 1475px 1262px , 1215px 1005px , 44px 143px , 313px 770px , 1827px 1317px , 644px 425px , 176px 1503px , 588px 497px , 1173px 484px , 803px 678px , 1906px 1035px , 861px 1352px , 644px 1679px , 1647px 1811px , 1155px 1666px , 470px 1728px , 1963px 178px , 819px 44px , 721px 1317px , 173px 1168px , 1433px 667px , 1285px 525px , 1829px 1031px , 273px 513px , 1829px 872px , 275px 1540px , 586px 167px , 419px 1940px , 593px 1620px , 1600px 62px , 248px 688px , 759px 17px , 1074px 20px , 1225px 220px , 555px 1527px , 1691px 1395px , 1466px 1981px , 158px 121px , 1568px 371px , 1071px 1907px , 1685px 1603px , 1747px 1685px , 220px 1289px , 1537px 842px , 478px 672px , 1086px 245px , 615px 1327px , 1237px 890px , 1341px 1576px , 129px 466px , 889px 621px , 1494px 347px , 547px 1667px , 120px 926px , 761px 1891px , 1373px 1028px , 1946px 1908px , 477px 1620px , 1771px 16px , 453px 981px , 576px 1366px , 1587px 843px , 792px 665px , 1969px 1708px , 1520px 1698px , 213px 1392px , 637px 926px , 537px 1989px , 1143px 70px , 860px 869px , 790px 1349px , 141px 815px , 860px 1807px , 1178px 346px , 1469px 1816px , 1543px 1078px , 1807px 225px , 1765px 112px , 1870px 588px , 351px 433px , 1265px 1061px , 538px 1455px , 260px 1658px , 103px 1353px , 142px 769px , 1030px 604px , 1190px 294px , 1320px 1303px , 131px 96px , 1537px 1706px , 820px 700px , 426px 1642px , 639px 1887px , 811px 519px , 1190px 47px , 1898px 280px , 897px 1831px , 1196px 826px , 799px 70px , 1365px 896px , 1711px 1868px , 313px 1688px , 1917px 898px , 1268px 1346px , 1603px 769px , 616px 1122px , 739px 216px , 499px 1300px , 1980px 1773px , 1880px 602px , 1757px 1009px , 1378px 1092px , 1485px 1644px , 1164px 1706px , 488px 517px , 480px 1620px , 1017px 1814px , 1959px 95px , 658px 1369px , 563px 135px , 1982px 1999px , 1790px 1598px , 1321px 1812px , 554px 1984px , 1009px 1122px , 322px 6px , 715px 630px , 829px 116px , 1494px 1788px , 1408px 1641px , 153px 163px , 1344px 785px , 1124px 568px , 532px 179px , 288px 1355px , 430px 1201px , 176px 1236px , 395px 1393px , 997px 1301px , 1982px 414px , 596px 1982px , 139px 905px , 638px 1874px , 242px 1462px , 1954px 1185px , 1765px 990px , 286px 901px , 178px 1641px , 1438px 282px , 360px 780px , 1753px 1415px , 1759px 204px , 941px 1774px , 1599px 517px , 280px 378px , 1043px 908px , 1514px 1238px , 1019px 952px , 1284px 1324px , 1175px 693px , 62px 1925px , 168px 1818px , 1300px 658px , 366px 1820px , 375px 1403px , 1158px 893px , 168px 603px , 901px 629px , 900px 696px , 809px 1509px , 783px 1777px , 376px 1119px , 1941px 1882px , 1895px 1431px , 69px 990px , 1849px 1435px , 958px 1652px , 385px 1386px , 1746px 752px , 1586px 1655px , 329px 588px , 1433px 537px , 8px 578px , 1277px 676px , 1925px 54px , 1763px 1432px , 1153px 705px , 587px 751px , 455px 18px , 441px 315px , 1127px 81px , 1413px 1628px , 1327px 1180px , 1846px 1764px , 1596px 1710px , 877px 301px , 804px 857px , 63px 551px , 496px 1209px , 874px 1530px , 1108px 1253px , 794px 1530px , 1381px 1028px , 713px 922px , 478px 423px , 1408px 535px , 495px 273px , 1584px 196px , 466px 476px , 172px 121px , 21px 1030px , 331px 1456px , 1389px 599px , 1255px 1608px , 900px 1895px , 292px 1742px , 185px 1845px , 1010px 1956px , 534px 1700px , 1635px 1104px , 576px 331px , 1559px 1254px , 1145px 151px , 746px 297px , 110px 211px , 1585px 1221px , 641px 173px , 1257px 1013px , 214px 1143px , 1396px 317px , 1990px 93px , 922px 1866px , 1183px 350px , 1105px 199px , 669px 624px , 1622px 1549px , 1490px 1790px , 1359px 894px , 530px 825px , 1005px 1896px , 38px 613px , 1239px 1201px , 1710px 261px , 319px 712px , 173px 625px , 333px 1325px , 608px 950px , 1692px 1180px , 1063px 964px , 1223px 1653px , 1075px 1696px , 1587px 1597px , 321px 702px , 1236px 851px , 889px 1897px , 640px 1746px , 1069px 938px , 815px 1604px , 730px 1426px , 1490px 1168px , 1663px 1132px , 1296px 580px , 1006px 1231px , 802px 1015px , 1493px 67px , 415px 1822px , 1797px 1525px , 861px 1399px , 1546px 1512px , 1459px 1495px , 541px 6px , 62px 709px , 321px 489px , 778px 49px , 1598px 758px , 70px 1260px , 788px 292px , 1267px 378px , 849px 1356px , 1187px 1359px , 497px 165px , 1254px 1910px , 1991px 604px , 1844px 384px , 435px 187px , 29px 1677px , 704px 1973px , 1668px 1947px , 558px 1692px , 1111px 1207px , 321px 475px , 1490px 350px , 504px 1596px , 6px 488px , 1316px 119px , 747px 890px , 9px 1149px , 402px 407px , 1239px 294px , 393px 1019px , 1521px 1455px , 1341px 1368px , 257px 947px , 948px 291px , 1468px 635px , 1961px 764px , 1643px 530px , 1015px 1931px , 67px 1294px , 962px 546px , 1800px 762px , 779px 1741px , 1687px 724px , 1420px 1956px , 1869px 164px , 1226px 177px , 1192px 516px , 250px 191px , 1798px 340px , 661px 486px , 1449px 358px , 1668px 1850px , 1035px 1370px , 1644px 1557px , 1305px 626px , 985px 317px , 812px 643px , 1549px 156px , 1753px 866px , 37px 228px , 1699px 377px , 418px 268px , 1225px 1796px , 1533px 34px , 737px 719px , 704px 1706px , 1292px 1831px , 846px 1272px , 1619px 1726px , 1952px 421px , 1352px 1558px , 1749px 1894px , 748px 84px , 871px 461px , 979px 986px , 449px 938px , 204px 1237px , 170px 414px , 1757px 5px , 1525px 1824px , 267px 545px , 515px 1211px , 1328px 1098px , 1804px 239px , 344px 1100px , 1947px 1532px , 1977px 1342px , 1334px 1672px , 614px 1322px , 919px 1266px , 1678px 943px , 313px 756px , 27px 1909px , 1718px 1228px , 203px 1608px , 1760px 1356px , 1311px 1398px , 1269px 1679px , 150px 1157px , 1961px 29px , 653px 402px , 447px 800px , 1922px 1864px , 1386px 894px , 1335px 1075px , 598px 1364px , 225px 848px , 960px 1342px , 1098px 137px , 1339px 854px , 975px 243px , 914px 96px , 1669px 1681px , 1605px 1653px , 563px 1141px , 1044px 1200px , 1606px 1067px , 952px 1570px , 677px 739px , 1507px 651px , 1660px 1647px , 423px 672px , 54px 445px , 310px 1465px , 422px 1663px , 245px 784px , 530px 1490px , 1143px 748px , 1287px 160px , 573px 1207px , 1990px 1239px , 955px 1924px , 394px 164px , 441px 53px , 1444px 847px , 896px 1496px , 1998px 417px , 86px 1836px , 200px 1144px , 1390px 258px , 262px 1163px , 1202px 1056px , 1300px 1741px , 455px 1046px , 711px 1971px , 669px 508px , 353px 236px , 1082px 1556px , 555px 432px , 593px 951px , 198px 1923px;\n              box-shadow: 449px 139px , 1060px 1067px , 163px 143px , 1486px 658px , 1576px 171px , 1079px 961px , 507px 579px , 1713px 1055px , 1078px 53px , 1679px 1064px , 520px 5px , 291px 1301px , 1055px 1278px , 695px 471px , 1008px 698px , 1214px 332px , 293px 251px , 268px 1215px , 1937px 711px , 819px 1478px , 647px 1055px , 34px 333px , 1855px 328px , 1485px 784px , 253px 1692px , 1793px 1000px , 1466px 374px , 1212px 185px , 1188px 1949px , 838px 401px , 1368px 546px , 894px 653px , 895px 984px , 1976px 1876px , 717px 98px , 798px 900px , 1333px 962px , 1770px 1029px , 759px 1110px , 1762px 1358px , 1550px 1726px , 1852px 506px , 1688px 415px , 884px 1022px , 404px 1379px , 94px 1957px , 1950px 1502px , 632px 748px , 561px 1543px , 1908px 1189px , 1599px 318px , 661px 867px , 225px 864px , 1897px 1824px , 1797px 1984px , 1152px 1468px , 187px 666px , 774px 860px , 1010px 390px , 567px 1658px , 1800px 230px , 1879px 1368px , 1828px 218px , 1118px 498px , 483px 34px , 951px 1952px , 1165px 1571px , 1732px 1656px , 1119px 1779px , 1413px 293px , 1846px 659px , 1957px 556px , 1070px 251px , 946px 1154px , 841px 184px , 181px 798px , 1475px 1709px , 1164px 662px , 1388px 145px , 464px 781px , 1249px 1877px , 1160px 1497px , 358px 1552px , 1723px 1214px , 1926px 437px , 1600px 1430px , 491px 1709px , 1233px 374px , 1060px 426px , 1728px 41px , 1555px 1872px , 1039px 1077px , 146px 787px , 366px 884px , 1728px 1993px , 886px 1449px , 1898px 1601px , 720px 1054px , 1275px 485px , 1753px 683px , 1814px 1933px , 1463px 1099px , 1093px 233px , 9px 1976px , 835px 853px , 465px 1396px , 901px 494px , 1446px 1133px , 1998px 580px , 363px 1196px , 1279px 525px , 626px 43px , 1100px 689px , 467px 32px , 1613px 1129px , 462px 490px , 1521px 212px , 1327px 1603px , 66px 339px , 249px 1769px , 557px 756px , 607px 13px , 981px 1931px , 1899px 1183px , 1234px 1593px , 792px 644px , 654px 244px , 602px 1917px , 74px 1396px , 319px 1156px , 1656px 1527px , 1337px 1966px , 583px 119px , 143px 283px , 565px 458px , 1082px 1182px , 189px 704px , 1430px 1016px , 1606px 1269px , 204px 1618px , 488px 1394px , 1327px 1514px , 806px 1812px , 1898px 463px , 336px 676px , 1550px 1342px , 1506px 1061px , 1469px 1607px , 147px 762px , 1640px 1918px , 210px 561px , 446px 1908px , 442px 435px , 1051px 1810px , 1956px 760px , 1197px 348px , 1526px 269px , 1741px 1481px , 1882px 899px , 1920px 1787px , 1621px 1686px , 1478px 637px , 1806px 1952px , 62px 1720px , 1661px 1906px , 1892px 244px , 1038px 20px , 1282px 1814px , 17px 343px , 556px 1113px , 336px 59px , 691px 914px , 931px 552px , 1901px 1301px , 703px 656px , 234px 403px , 24px 1944px , 1770px 1766px , 771px 1060px , 941px 1839px , 1908px 965px , 1016px 1620px , 717px 1166px , 802px 1475px , 1613px 459px , 770px 1793px , 1544px 1926px , 1596px 858px , 1468px 746px , 748px 149px , 1895px 1286px , 206px 1087px , 1115px 1767px , 1546px 1692px , 838px 453px , 1251px 768px , 857px 1005px , 1695px 516px , 1312px 78px , 184px 852px , 160px 1440px , 799px 1736px , 1388px 1973px , 1486px 1814px , 1379px 167px , 654px 481px , 690px 938px , 1675px 1126px , 615px 895px , 1283px 1507px , 281px 1372px , 200px 1207px , 1210px 1102px , 753px 26px , 137px 823px , 392px 1959px , 1735px 1391px , 37px 681px , 970px 61px , 527px 1899px , 172px 973px , 1601px 1149px , 1294px 654px , 362px 1189px , 1383px 626px , 1013px 1468px , 1193px 254px , 1278px 1178px , 242px 1858px , 1179px 1968px , 1905px 956px , 28px 23px , 1737px 264px , 1342px 903px , 1755px 708px , 1078px 493px , 1746px 1660px , 1906px 1151px , 1955px 774px , 1598px 984px , 1825px 1356px , 72px 1269px , 259px 1904px , 281px 446px , 1942px 1028px , 1856px 1018px , 1689px 983px , 1394px 1860px , 182px 859px , 683px 1733px , 1175px 1106px , 505px 1095px , 1709px 1476px , 29px 1412px , 570px 1709px , 496px 1893px , 1612px 1262px , 1073px 326px , 645px 353px , 1673px 288px , 371px 1149px , 1590px 237px , 843px 1035px , 1441px 1369px , 1110px 709px , 385px 463px , 517px 1012px , 1175px 1284px , 665px 1216px , 799px 851px , 154px 797px , 989px 24px , 1290px 758px , 1965px 415px , 139px 684px , 1249px 1437px , 607px 374px , 257px 829px , 137px 729px , 1475px 1262px , 1215px 1005px , 44px 143px , 313px 770px , 1827px 1317px , 644px 425px , 176px 1503px , 588px 497px , 1173px 484px , 803px 678px , 1906px 1035px , 861px 1352px , 644px 1679px , 1647px 1811px , 1155px 1666px , 470px 1728px , 1963px 178px , 819px 44px , 721px 1317px , 173px 1168px , 1433px 667px , 1285px 525px , 1829px 1031px , 273px 513px , 1829px 872px , 275px 1540px , 586px 167px , 419px 1940px , 593px 1620px , 1600px 62px , 248px 688px , 759px 17px , 1074px 20px , 1225px 220px , 555px 1527px , 1691px 1395px , 1466px 1981px , 158px 121px , 1568px 371px , 1071px 1907px , 1685px 1603px , 1747px 1685px , 220px 1289px , 1537px 842px , 478px 672px , 1086px 245px , 615px 1327px , 1237px 890px , 1341px 1576px , 129px 466px , 889px 621px , 1494px 347px , 547px 1667px , 120px 926px , 761px 1891px , 1373px 1028px , 1946px 1908px , 477px 1620px , 1771px 16px , 453px 981px , 576px 1366px , 1587px 843px , 792px 665px , 1969px 1708px , 1520px 1698px , 213px 1392px , 637px 926px , 537px 1989px , 1143px 70px , 860px 869px , 790px 1349px , 141px 815px , 860px 1807px , 1178px 346px , 1469px 1816px , 1543px 1078px , 1807px 225px , 1765px 112px , 1870px 588px , 351px 433px , 1265px 1061px , 538px 1455px , 260px 1658px , 103px 1353px , 142px 769px , 1030px 604px , 1190px 294px , 1320px 1303px , 131px 96px , 1537px 1706px , 820px 700px , 426px 1642px , 639px 1887px , 811px 519px , 1190px 47px , 1898px 280px , 897px 1831px , 1196px 826px , 799px 70px , 1365px 896px , 1711px 1868px , 313px 1688px , 1917px 898px , 1268px 1346px , 1603px 769px , 616px 1122px , 739px 216px , 499px 1300px , 1980px 1773px , 1880px 602px , 1757px 1009px , 1378px 1092px , 1485px 1644px , 1164px 1706px , 488px 517px , 480px 1620px , 1017px 1814px , 1959px 95px , 658px 1369px , 563px 135px , 1982px 1999px , 1790px 1598px , 1321px 1812px , 554px 1984px , 1009px 1122px , 322px 6px , 715px 630px , 829px 116px , 1494px 1788px , 1408px 1641px , 153px 163px , 1344px 785px , 1124px 568px , 532px 179px , 288px 1355px , 430px 1201px , 176px 1236px , 395px 1393px , 997px 1301px , 1982px 414px , 596px 1982px , 139px 905px , 638px 1874px , 242px 1462px , 1954px 1185px , 1765px 990px , 286px 901px , 178px 1641px , 1438px 282px , 360px 780px , 1753px 1415px , 1759px 204px , 941px 1774px , 1599px 517px , 280px 378px , 1043px 908px , 1514px 1238px , 1019px 952px , 1284px 1324px , 1175px 693px , 62px 1925px , 168px 1818px , 1300px 658px , 366px 1820px , 375px 1403px , 1158px 893px , 168px 603px , 901px 629px , 900px 696px , 809px 1509px , 783px 1777px , 376px 1119px , 1941px 1882px , 1895px 1431px , 69px 990px , 1849px 1435px , 958px 1652px , 385px 1386px , 1746px 752px , 1586px 1655px , 329px 588px , 1433px 537px , 8px 578px , 1277px 676px , 1925px 54px , 1763px 1432px , 1153px 705px , 587px 751px , 455px 18px , 441px 315px , 1127px 81px , 1413px 1628px , 1327px 1180px , 1846px 1764px , 1596px 1710px , 877px 301px , 804px 857px , 63px 551px , 496px 1209px , 874px 1530px , 1108px 1253px , 794px 1530px , 1381px 1028px , 713px 922px , 478px 423px , 1408px 535px , 495px 273px , 1584px 196px , 466px 476px , 172px 121px , 21px 1030px , 331px 1456px , 1389px 599px , 1255px 1608px , 900px 1895px , 292px 1742px , 185px 1845px , 1010px 1956px , 534px 1700px , 1635px 1104px , 576px 331px , 1559px 1254px , 1145px 151px , 746px 297px , 110px 211px , 1585px 1221px , 641px 173px , 1257px 1013px , 214px 1143px , 1396px 317px , 1990px 93px , 922px 1866px , 1183px 350px , 1105px 199px , 669px 624px , 1622px 1549px , 1490px 1790px , 1359px 894px , 530px 825px , 1005px 1896px , 38px 613px , 1239px 1201px , 1710px 261px , 319px 712px , 173px 625px , 333px 1325px , 608px 950px , 1692px 1180px , 1063px 964px , 1223px 1653px , 1075px 1696px , 1587px 1597px , 321px 702px , 1236px 851px , 889px 1897px , 640px 1746px , 1069px 938px , 815px 1604px , 730px 1426px , 1490px 1168px , 1663px 1132px , 1296px 580px , 1006px 1231px , 802px 1015px , 1493px 67px , 415px 1822px , 1797px 1525px , 861px 1399px , 1546px 1512px , 1459px 1495px , 541px 6px , 62px 709px , 321px 489px , 778px 49px , 1598px 758px , 70px 1260px , 788px 292px , 1267px 378px , 849px 1356px , 1187px 1359px , 497px 165px , 1254px 1910px , 1991px 604px , 1844px 384px , 435px 187px , 29px 1677px , 704px 1973px , 1668px 1947px , 558px 1692px , 1111px 1207px , 321px 475px , 1490px 350px , 504px 1596px , 6px 488px , 1316px 119px , 747px 890px , 9px 1149px , 402px 407px , 1239px 294px , 393px 1019px , 1521px 1455px , 1341px 1368px , 257px 947px , 948px 291px , 1468px 635px , 1961px 764px , 1643px 530px , 1015px 1931px , 67px 1294px , 962px 546px , 1800px 762px , 779px 1741px , 1687px 724px , 1420px 1956px , 1869px 164px , 1226px 177px , 1192px 516px , 250px 191px , 1798px 340px , 661px 486px , 1449px 358px , 1668px 1850px , 1035px 1370px , 1644px 1557px , 1305px 626px , 985px 317px , 812px 643px , 1549px 156px , 1753px 866px , 37px 228px , 1699px 377px , 418px 268px , 1225px 1796px , 1533px 34px , 737px 719px , 704px 1706px , 1292px 1831px , 846px 1272px , 1619px 1726px , 1952px 421px , 1352px 1558px , 1749px 1894px , 748px 84px , 871px 461px , 979px 986px , 449px 938px , 204px 1237px , 170px 414px , 1757px 5px , 1525px 1824px , 267px 545px , 515px 1211px , 1328px 1098px , 1804px 239px , 344px 1100px , 1947px 1532px , 1977px 1342px , 1334px 1672px , 614px 1322px , 919px 1266px , 1678px 943px , 313px 756px , 27px 1909px , 1718px 1228px , 203px 1608px , 1760px 1356px , 1311px 1398px , 1269px 1679px , 150px 1157px , 1961px 29px , 653px 402px , 447px 800px , 1922px 1864px , 1386px 894px , 1335px 1075px , 598px 1364px , 225px 848px , 960px 1342px , 1098px 137px , 1339px 854px , 975px 243px , 914px 96px , 1669px 1681px , 1605px 1653px , 563px 1141px , 1044px 1200px , 1606px 1067px , 952px 1570px , 677px 739px , 1507px 651px , 1660px 1647px , 423px 672px , 54px 445px , 310px 1465px , 422px 1663px , 245px 784px , 530px 1490px , 1143px 748px , 1287px 160px , 573px 1207px , 1990px 1239px , 955px 1924px , 394px 164px , 441px 53px , 1444px 847px , 896px 1496px , 1998px 417px , 86px 1836px , 200px 1144px , 1390px 258px , 262px 1163px , 1202px 1056px , 1300px 1741px , 455px 1046px , 711px 1971px , 669px 508px , 353px 236px , 1082px 1556px , 555px 432px , 593px 951px , 198px 1923px; }\n  .parallax #stars2 {\n    width: 2px;\n    height: 2px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 1323px 1216px , 1632px 1990px , 432px 1825px , 1418px 944px , 567px 1003px , 1390px 1438px , 1769px 930px , 933px 858px , 1961px 999px , 1990px 1826px , 1963px 299px , 762px 565px , 1696px 818px , 1066px 1914px , 865px 1522px , 1284px 1811px , 1061px 1048px , 1212px 996px , 1855px 461px , 1966px 267px , 1865px 1976px , 1144px 213px , 171px 780px , 1777px 193px , 1835px 1782px , 1148px 1px , 1589px 1605px , 1338px 554px , 1626px 835px , 114px 119px , 1671px 1157px , 1258px 1145px , 1770px 675px , 1849px 1525px , 796px 580px , 844px 1047px , 1997px 206px , 1024px 828px , 1987px 1538px , 1301px 965px , 907px 1184px , 766px 1665px , 965px 1982px , 1081px 936px , 1256px 849px , 404px 695px , 1443px 1900px , 1879px 95px , 506px 281px , 1156px 1477px , 1948px 1661px , 1357px 919px , 837px 342px , 1911px 1828px , 1206px 518px , 1226px 1134px , 1620px 1138px , 1924px 834px , 751px 387px , 74px 1408px , 1073px 1041px , 1164px 235px , 1214px 237px , 1253px 933px , 729px 225px , 820px 404px , 1468px 811px , 1228px 1181px , 1854px 493px , 208px 1510px , 243px 461px , 342px 238px , 1409px 1949px , 1766px 1163px , 1477px 1005px , 1399px 306px , 1280px 80px , 251px 1315px , 192px 1718px , 816px 1992px , 1087px 220px , 482px 1008px , 1916px 49px , 13px 1854px , 893px 1220px , 1615px 1433px , 1623px 1122px , 1993px 1465px , 1859px 1459px , 1417px 1165px , 1957px 1378px , 1952px 1257px , 963px 1570px , 581px 892px , 1368px 839px , 840px 574px , 1250px 1807px , 983px 1008px , 1917px 1243px , 1645px 761px , 899px 1507px , 1253px 1145px , 1598px 1978px , 1211px 758px , 384px 1938px , 1929px 941px , 849px 1700px , 1428px 1130px , 1106px 1656px , 1720px 986px , 1274px 371px , 230px 46px , 1845px 1265px , 811px 1077px , 1933px 347px , 243px 292px , 1455px 1385px , 736px 1621px , 234px 603px , 321px 1624px , 364px 1455px , 1251px 370px , 1312px 737px , 1082px 846px , 1270px 22px , 626px 1695px , 1556px 1296px , 730px 864px , 1888px 750px , 1595px 1107px , 65px 753px , 794px 1045px , 1283px 27px , 1821px 55px , 718px 191px , 1121px 1435px , 22px 341px , 125px 1635px , 1145px 738px , 887px 697px , 1460px 1435px , 675px 1786px , 163px 607px , 142px 1378px , 1427px 275px , 1047px 848px , 1693px 892px , 955px 1018px , 1516px 721px , 1383px 508px , 1769px 1700px , 1908px 1380px , 1584px 203px , 1215px 1518px , 1268px 1927px , 808px 541px , 47px 1374px , 834px 201px , 1864px 1908px , 369px 1996px , 1856px 935px , 1559px 1980px , 1684px 557px , 489px 1066px , 1633px 1372px , 1249px 1503px , 148px 1312px , 114px 138px , 1393px 1893px , 725px 190px , 523px 534px , 138px 1047px , 1447px 479px , 1648px 1473px , 527px 1676px , 189px 120px , 99px 1637px , 787px 526px , 338px 1845px , 1761px 580px , 1750px 1524px , 147px 1108px , 262px 1882px , 1175px 1773px , 1655px 1992px , 1990px 813px , 953px 1387px , 13px 1771px , 1924px 1017px , 348px 647px , 1201px 1788px , 1126px 525px , 1890px 528px , 1726px 982px , 1283px 352px , 495px 1946px , 1235px 434px , 937px 693px , 60px 341px , 561px 1256px;\n            box-shadow: 1323px 1216px , 1632px 1990px , 432px 1825px , 1418px 944px , 567px 1003px , 1390px 1438px , 1769px 930px , 933px 858px , 1961px 999px , 1990px 1826px , 1963px 299px , 762px 565px , 1696px 818px , 1066px 1914px , 865px 1522px , 1284px 1811px , 1061px 1048px , 1212px 996px , 1855px 461px , 1966px 267px , 1865px 1976px , 1144px 213px , 171px 780px , 1777px 193px , 1835px 1782px , 1148px 1px , 1589px 1605px , 1338px 554px , 1626px 835px , 114px 119px , 1671px 1157px , 1258px 1145px , 1770px 675px , 1849px 1525px , 796px 580px , 844px 1047px , 1997px 206px , 1024px 828px , 1987px 1538px , 1301px 965px , 907px 1184px , 766px 1665px , 965px 1982px , 1081px 936px , 1256px 849px , 404px 695px , 1443px 1900px , 1879px 95px , 506px 281px , 1156px 1477px , 1948px 1661px , 1357px 919px , 837px 342px , 1911px 1828px , 1206px 518px , 1226px 1134px , 1620px 1138px , 1924px 834px , 751px 387px , 74px 1408px , 1073px 1041px , 1164px 235px , 1214px 237px , 1253px 933px , 729px 225px , 820px 404px , 1468px 811px , 1228px 1181px , 1854px 493px , 208px 1510px , 243px 461px , 342px 238px , 1409px 1949px , 1766px 1163px , 1477px 1005px , 1399px 306px , 1280px 80px , 251px 1315px , 192px 1718px , 816px 1992px , 1087px 220px , 482px 1008px , 1916px 49px , 13px 1854px , 893px 1220px , 1615px 1433px , 1623px 1122px , 1993px 1465px , 1859px 1459px , 1417px 1165px , 1957px 1378px , 1952px 1257px , 963px 1570px , 581px 892px , 1368px 839px , 840px 574px , 1250px 1807px , 983px 1008px , 1917px 1243px , 1645px 761px , 899px 1507px , 1253px 1145px , 1598px 1978px , 1211px 758px , 384px 1938px , 1929px 941px , 849px 1700px , 1428px 1130px , 1106px 1656px , 1720px 986px , 1274px 371px , 230px 46px , 1845px 1265px , 811px 1077px , 1933px 347px , 243px 292px , 1455px 1385px , 736px 1621px , 234px 603px , 321px 1624px , 364px 1455px , 1251px 370px , 1312px 737px , 1082px 846px , 1270px 22px , 626px 1695px , 1556px 1296px , 730px 864px , 1888px 750px , 1595px 1107px , 65px 753px , 794px 1045px , 1283px 27px , 1821px 55px , 718px 191px , 1121px 1435px , 22px 341px , 125px 1635px , 1145px 738px , 887px 697px , 1460px 1435px , 675px 1786px , 163px 607px , 142px 1378px , 1427px 275px , 1047px 848px , 1693px 892px , 955px 1018px , 1516px 721px , 1383px 508px , 1769px 1700px , 1908px 1380px , 1584px 203px , 1215px 1518px , 1268px 1927px , 808px 541px , 47px 1374px , 834px 201px , 1864px 1908px , 369px 1996px , 1856px 935px , 1559px 1980px , 1684px 557px , 489px 1066px , 1633px 1372px , 1249px 1503px , 148px 1312px , 114px 138px , 1393px 1893px , 725px 190px , 523px 534px , 138px 1047px , 1447px 479px , 1648px 1473px , 527px 1676px , 189px 120px , 99px 1637px , 787px 526px , 338px 1845px , 1761px 580px , 1750px 1524px , 147px 1108px , 262px 1882px , 1175px 1773px , 1655px 1992px , 1990px 813px , 953px 1387px , 13px 1771px , 1924px 1017px , 348px 647px , 1201px 1788px , 1126px 525px , 1890px 528px , 1726px 982px , 1283px 352px , 495px 1946px , 1235px 434px , 937px 693px , 60px 341px , 561px 1256px;\n    -webkit-animation: animStar 100s linear infinite;\n            animation: animStar 100s linear infinite; }\n  .parallax #stars2:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 2px;\n      height: 2px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 1323px 1216px , 1632px 1990px , 432px 1825px , 1418px 944px , 567px 1003px , 1390px 1438px , 1769px 930px , 933px 858px , 1961px 999px , 1990px 1826px , 1963px 299px , 762px 565px , 1696px 818px , 1066px 1914px , 865px 1522px , 1284px 1811px , 1061px 1048px , 1212px 996px , 1855px 461px , 1966px 267px , 1865px 1976px , 1144px 213px , 171px 780px , 1777px 193px , 1835px 1782px , 1148px 1px , 1589px 1605px , 1338px 554px , 1626px 835px , 114px 119px , 1671px 1157px , 1258px 1145px , 1770px 675px , 1849px 1525px , 796px 580px , 844px 1047px , 1997px 206px , 1024px 828px , 1987px 1538px , 1301px 965px , 907px 1184px , 766px 1665px , 965px 1982px , 1081px 936px , 1256px 849px , 404px 695px , 1443px 1900px , 1879px 95px , 506px 281px , 1156px 1477px , 1948px 1661px , 1357px 919px , 837px 342px , 1911px 1828px , 1206px 518px , 1226px 1134px , 1620px 1138px , 1924px 834px , 751px 387px , 74px 1408px , 1073px 1041px , 1164px 235px , 1214px 237px , 1253px 933px , 729px 225px , 820px 404px , 1468px 811px , 1228px 1181px , 1854px 493px , 208px 1510px , 243px 461px , 342px 238px , 1409px 1949px , 1766px 1163px , 1477px 1005px , 1399px 306px , 1280px 80px , 251px 1315px , 192px 1718px , 816px 1992px , 1087px 220px , 482px 1008px , 1916px 49px , 13px 1854px , 893px 1220px , 1615px 1433px , 1623px 1122px , 1993px 1465px , 1859px 1459px , 1417px 1165px , 1957px 1378px , 1952px 1257px , 963px 1570px , 581px 892px , 1368px 839px , 840px 574px , 1250px 1807px , 983px 1008px , 1917px 1243px , 1645px 761px , 899px 1507px , 1253px 1145px , 1598px 1978px , 1211px 758px , 384px 1938px , 1929px 941px , 849px 1700px , 1428px 1130px , 1106px 1656px , 1720px 986px , 1274px 371px , 230px 46px , 1845px 1265px , 811px 1077px , 1933px 347px , 243px 292px , 1455px 1385px , 736px 1621px , 234px 603px , 321px 1624px , 364px 1455px , 1251px 370px , 1312px 737px , 1082px 846px , 1270px 22px , 626px 1695px , 1556px 1296px , 730px 864px , 1888px 750px , 1595px 1107px , 65px 753px , 794px 1045px , 1283px 27px , 1821px 55px , 718px 191px , 1121px 1435px , 22px 341px , 125px 1635px , 1145px 738px , 887px 697px , 1460px 1435px , 675px 1786px , 163px 607px , 142px 1378px , 1427px 275px , 1047px 848px , 1693px 892px , 955px 1018px , 1516px 721px , 1383px 508px , 1769px 1700px , 1908px 1380px , 1584px 203px , 1215px 1518px , 1268px 1927px , 808px 541px , 47px 1374px , 834px 201px , 1864px 1908px , 369px 1996px , 1856px 935px , 1559px 1980px , 1684px 557px , 489px 1066px , 1633px 1372px , 1249px 1503px , 148px 1312px , 114px 138px , 1393px 1893px , 725px 190px , 523px 534px , 138px 1047px , 1447px 479px , 1648px 1473px , 527px 1676px , 189px 120px , 99px 1637px , 787px 526px , 338px 1845px , 1761px 580px , 1750px 1524px , 147px 1108px , 262px 1882px , 1175px 1773px , 1655px 1992px , 1990px 813px , 953px 1387px , 13px 1771px , 1924px 1017px , 348px 647px , 1201px 1788px , 1126px 525px , 1890px 528px , 1726px 982px , 1283px 352px , 495px 1946px , 1235px 434px , 937px 693px , 60px 341px , 561px 1256px;\n              box-shadow: 1323px 1216px , 1632px 1990px , 432px 1825px , 1418px 944px , 567px 1003px , 1390px 1438px , 1769px 930px , 933px 858px , 1961px 999px , 1990px 1826px , 1963px 299px , 762px 565px , 1696px 818px , 1066px 1914px , 865px 1522px , 1284px 1811px , 1061px 1048px , 1212px 996px , 1855px 461px , 1966px 267px , 1865px 1976px , 1144px 213px , 171px 780px , 1777px 193px , 1835px 1782px , 1148px 1px , 1589px 1605px , 1338px 554px , 1626px 835px , 114px 119px , 1671px 1157px , 1258px 1145px , 1770px 675px , 1849px 1525px , 796px 580px , 844px 1047px , 1997px 206px , 1024px 828px , 1987px 1538px , 1301px 965px , 907px 1184px , 766px 1665px , 965px 1982px , 1081px 936px , 1256px 849px , 404px 695px , 1443px 1900px , 1879px 95px , 506px 281px , 1156px 1477px , 1948px 1661px , 1357px 919px , 837px 342px , 1911px 1828px , 1206px 518px , 1226px 1134px , 1620px 1138px , 1924px 834px , 751px 387px , 74px 1408px , 1073px 1041px , 1164px 235px , 1214px 237px , 1253px 933px , 729px 225px , 820px 404px , 1468px 811px , 1228px 1181px , 1854px 493px , 208px 1510px , 243px 461px , 342px 238px , 1409px 1949px , 1766px 1163px , 1477px 1005px , 1399px 306px , 1280px 80px , 251px 1315px , 192px 1718px , 816px 1992px , 1087px 220px , 482px 1008px , 1916px 49px , 13px 1854px , 893px 1220px , 1615px 1433px , 1623px 1122px , 1993px 1465px , 1859px 1459px , 1417px 1165px , 1957px 1378px , 1952px 1257px , 963px 1570px , 581px 892px , 1368px 839px , 840px 574px , 1250px 1807px , 983px 1008px , 1917px 1243px , 1645px 761px , 899px 1507px , 1253px 1145px , 1598px 1978px , 1211px 758px , 384px 1938px , 1929px 941px , 849px 1700px , 1428px 1130px , 1106px 1656px , 1720px 986px , 1274px 371px , 230px 46px , 1845px 1265px , 811px 1077px , 1933px 347px , 243px 292px , 1455px 1385px , 736px 1621px , 234px 603px , 321px 1624px , 364px 1455px , 1251px 370px , 1312px 737px , 1082px 846px , 1270px 22px , 626px 1695px , 1556px 1296px , 730px 864px , 1888px 750px , 1595px 1107px , 65px 753px , 794px 1045px , 1283px 27px , 1821px 55px , 718px 191px , 1121px 1435px , 22px 341px , 125px 1635px , 1145px 738px , 887px 697px , 1460px 1435px , 675px 1786px , 163px 607px , 142px 1378px , 1427px 275px , 1047px 848px , 1693px 892px , 955px 1018px , 1516px 721px , 1383px 508px , 1769px 1700px , 1908px 1380px , 1584px 203px , 1215px 1518px , 1268px 1927px , 808px 541px , 47px 1374px , 834px 201px , 1864px 1908px , 369px 1996px , 1856px 935px , 1559px 1980px , 1684px 557px , 489px 1066px , 1633px 1372px , 1249px 1503px , 148px 1312px , 114px 138px , 1393px 1893px , 725px 190px , 523px 534px , 138px 1047px , 1447px 479px , 1648px 1473px , 527px 1676px , 189px 120px , 99px 1637px , 787px 526px , 338px 1845px , 1761px 580px , 1750px 1524px , 147px 1108px , 262px 1882px , 1175px 1773px , 1655px 1992px , 1990px 813px , 953px 1387px , 13px 1771px , 1924px 1017px , 348px 647px , 1201px 1788px , 1126px 525px , 1890px 528px , 1726px 982px , 1283px 352px , 495px 1946px , 1235px 434px , 937px 693px , 60px 341px , 561px 1256px; }\n  .parallax #stars3 {\n    width: 3px;\n    height: 3px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 1034px 733px , 1031px 341px , 51px 1216px , 767px 1231px , 1490px 1054px , 1797px 1176px , 35px 251px , 1520px 1640px , 1137px 722px , 1643px 656px , 108px 832px , 1754px 868px , 1858px 58px , 968px 1719px , 119px 126px , 326px 288px , 614px 1776px , 1925px 1822px , 1911px 1127px , 1235px 971px , 1569px 1725px , 1614px 1054px , 732px 1048px , 1711px 1795px , 921px 566px , 94px 1112px , 326px 669px , 430px 1739px , 1591px 743px , 550px 741px , 1408px 474px , 1999px 287px , 224px 1042px , 1707px 1938px , 874px 1763px , 555px 1548px , 840px 411px , 925px 1105px , 1439px 365px , 44px 1154px , 2000px 1521px , 573px 1523px , 1196px 761px , 1862px 366px , 740px 752px , 1138px 1785px , 188px 256px , 1851px 949px , 419px 198px , 770px 1993px , 31px 62px , 1278px 1432px , 190px 1289px , 348px 148px , 1118px 1058px , 267px 371px , 66px 1619px , 240px 1442px , 862px 262px , 526px 1393px , 1097px 673px , 1879px 251px , 1037px 940px , 548px 258px , 457px 698px , 495px 674px , 795px 1665px , 702px 109px , 1942px 438px , 1989px 1256px , 1528px 1622px , 512px 578px , 1095px 812px , 937px 629px , 390px 556px , 1021px 1495px , 1954px 1976px , 891px 933px , 1607px 1102px , 1594px 1697px , 1676px 152px , 439px 6px , 1995px 1928px , 607px 394px , 1199px 1568px , 459px 675px , 952px 1790px , 560px 1498px , 1254px 1622px , 1828px 380px , 666px 510px , 620px 481px , 337px 1432px , 1666px 391px , 811px 1307px , 1272px 1357px , 1009px 1323px , 805px 630px , 225px 324px , 1243px 441px;\n            box-shadow: 1034px 733px , 1031px 341px , 51px 1216px , 767px 1231px , 1490px 1054px , 1797px 1176px , 35px 251px , 1520px 1640px , 1137px 722px , 1643px 656px , 108px 832px , 1754px 868px , 1858px 58px , 968px 1719px , 119px 126px , 326px 288px , 614px 1776px , 1925px 1822px , 1911px 1127px , 1235px 971px , 1569px 1725px , 1614px 1054px , 732px 1048px , 1711px 1795px , 921px 566px , 94px 1112px , 326px 669px , 430px 1739px , 1591px 743px , 550px 741px , 1408px 474px , 1999px 287px , 224px 1042px , 1707px 1938px , 874px 1763px , 555px 1548px , 840px 411px , 925px 1105px , 1439px 365px , 44px 1154px , 2000px 1521px , 573px 1523px , 1196px 761px , 1862px 366px , 740px 752px , 1138px 1785px , 188px 256px , 1851px 949px , 419px 198px , 770px 1993px , 31px 62px , 1278px 1432px , 190px 1289px , 348px 148px , 1118px 1058px , 267px 371px , 66px 1619px , 240px 1442px , 862px 262px , 526px 1393px , 1097px 673px , 1879px 251px , 1037px 940px , 548px 258px , 457px 698px , 495px 674px , 795px 1665px , 702px 109px , 1942px 438px , 1989px 1256px , 1528px 1622px , 512px 578px , 1095px 812px , 937px 629px , 390px 556px , 1021px 1495px , 1954px 1976px , 891px 933px , 1607px 1102px , 1594px 1697px , 1676px 152px , 439px 6px , 1995px 1928px , 607px 394px , 1199px 1568px , 459px 675px , 952px 1790px , 560px 1498px , 1254px 1622px , 1828px 380px , 666px 510px , 620px 481px , 337px 1432px , 1666px 391px , 811px 1307px , 1272px 1357px , 1009px 1323px , 805px 630px , 225px 324px , 1243px 441px;\n    -webkit-animation: animStar 50s linear infinite;\n            animation: animStar 50s linear infinite; }\n  .parallax #stars3:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 3px;\n      height: 3px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 1034px 733px , 1031px 341px , 51px 1216px , 767px 1231px , 1490px 1054px , 1797px 1176px , 35px 251px , 1520px 1640px , 1137px 722px , 1643px 656px , 108px 832px , 1754px 868px , 1858px 58px , 968px 1719px , 119px 126px , 326px 288px , 614px 1776px , 1925px 1822px , 1911px 1127px , 1235px 971px , 1569px 1725px , 1614px 1054px , 732px 1048px , 1711px 1795px , 921px 566px , 94px 1112px , 326px 669px , 430px 1739px , 1591px 743px , 550px 741px , 1408px 474px , 1999px 287px , 224px 1042px , 1707px 1938px , 874px 1763px , 555px 1548px , 840px 411px , 925px 1105px , 1439px 365px , 44px 1154px , 2000px 1521px , 573px 1523px , 1196px 761px , 1862px 366px , 740px 752px , 1138px 1785px , 188px 256px , 1851px 949px , 419px 198px , 770px 1993px , 31px 62px , 1278px 1432px , 190px 1289px , 348px 148px , 1118px 1058px , 267px 371px , 66px 1619px , 240px 1442px , 862px 262px , 526px 1393px , 1097px 673px , 1879px 251px , 1037px 940px , 548px 258px , 457px 698px , 495px 674px , 795px 1665px , 702px 109px , 1942px 438px , 1989px 1256px , 1528px 1622px , 512px 578px , 1095px 812px , 937px 629px , 390px 556px , 1021px 1495px , 1954px 1976px , 891px 933px , 1607px 1102px , 1594px 1697px , 1676px 152px , 439px 6px , 1995px 1928px , 607px 394px , 1199px 1568px , 459px 675px , 952px 1790px , 560px 1498px , 1254px 1622px , 1828px 380px , 666px 510px , 620px 481px , 337px 1432px , 1666px 391px , 811px 1307px , 1272px 1357px , 1009px 1323px , 805px 630px , 225px 324px , 1243px 441px;\n              box-shadow: 1034px 733px , 1031px 341px , 51px 1216px , 767px 1231px , 1490px 1054px , 1797px 1176px , 35px 251px , 1520px 1640px , 1137px 722px , 1643px 656px , 108px 832px , 1754px 868px , 1858px 58px , 968px 1719px , 119px 126px , 326px 288px , 614px 1776px , 1925px 1822px , 1911px 1127px , 1235px 971px , 1569px 1725px , 1614px 1054px , 732px 1048px , 1711px 1795px , 921px 566px , 94px 1112px , 326px 669px , 430px 1739px , 1591px 743px , 550px 741px , 1408px 474px , 1999px 287px , 224px 1042px , 1707px 1938px , 874px 1763px , 555px 1548px , 840px 411px , 925px 1105px , 1439px 365px , 44px 1154px , 2000px 1521px , 573px 1523px , 1196px 761px , 1862px 366px , 740px 752px , 1138px 1785px , 188px 256px , 1851px 949px , 419px 198px , 770px 1993px , 31px 62px , 1278px 1432px , 190px 1289px , 348px 148px , 1118px 1058px , 267px 371px , 66px 1619px , 240px 1442px , 862px 262px , 526px 1393px , 1097px 673px , 1879px 251px , 1037px 940px , 548px 258px , 457px 698px , 495px 674px , 795px 1665px , 702px 109px , 1942px 438px , 1989px 1256px , 1528px 1622px , 512px 578px , 1095px 812px , 937px 629px , 390px 556px , 1021px 1495px , 1954px 1976px , 891px 933px , 1607px 1102px , 1594px 1697px , 1676px 152px , 439px 6px , 1995px 1928px , 607px 394px , 1199px 1568px , 459px 675px , 952px 1790px , 560px 1498px , 1254px 1622px , 1828px 380px , 666px 510px , 620px 481px , 337px 1432px , 1666px 391px , 811px 1307px , 1272px 1357px , 1009px 1323px , 805px 630px , 225px 324px , 1243px 441px; }\n  @-webkit-keyframes animStar {\n  from {\n    -webkit-transform: translateY(-2000px);\n            transform: translateY(-2000px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n  @keyframes animStar {\n  from {\n    -webkit-transform: translateY(-2000px);\n            transform: translateY(-2000px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n"

/***/ }),

/***/ "./src/app/components/parallax/parallax.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxComponent = /** @class */ (function () {
    function ParallaxComponent() {
    }
    ParallaxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ParallaxComponent.prototype, "themeData", void 0);
    ParallaxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-parallax',
            template: __webpack_require__("./src/app/components/parallax/parallax.component.html"),
            styles: [__webpack_require__("./src/app/components/parallax/parallax.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParallaxComponent);
    return ParallaxComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__("./src/app/pages/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'color':themeData.colorPrimary}\" class=\"landing-container\">\n  <h1>Hello, I'm Nikhil!</h1>\n  <span>Full Stack Dev | Open Source Enthusiast | Gamer</span>\n  <div class=\"icons\">\n\n    <a  href=\"https://github.com/nikhilkadyan\"\n        [ngStyle]=\"{'color':themeData.colorPrimary}\">\n      <i class=\"fab fa-github\"></i>\n    </a>\n      \n    <a  href=\"https://twitter.com/kadyanikhil\"\n        [ngStyle]=\"{'color':themeData.colorPrimary}\">\n      <i class=\"fab fa-twitter\"></i>\n    </a>\n\n    <a  href=\"https://www.instagram.com/nikhil_kadyan_/\"\n        [ngStyle]=\"{'color':themeData.colorPrimary}\">\n      <i class=\"fab fa-instagram\"></i>\n    </a>\n\n    <a  href=\"https://in.linkedin.com/in/nikhil-kadyan-4a6374134\"\n        [ngStyle]=\"{'color':themeData.colorPrimary}\">\n      <i class=\"fab fa-linkedin\"></i>\n    </a>\n  </div>\n\n  <div class=\"bottom-nav\" [ngStyle]=\"{ 'color': themeData.colorPrimary }\">\n      <div class=\"scroll-text\">Click Me</div>\n      <button class=\"fas fa-chevron-down fa-2x\" href=\"#\"></button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.scss":
/***/ (function(module, exports) {

module.exports = ".landing-container {\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  padding-top: 18vh; }\n  .landing-container h1 {\n    font-size: 11vh; }\n  .landing-container span {\n    font-size: 3.4vh; }\n  .landing-container .icons {\n    padding-top: 5vh;\n    font-size: 8vh; }\n  .landing-container .icons a {\n      text-decoration: none;\n      padding: 0 5px; }\n  .landing-container .bottom-nav {\n    padding-top: 25vh;\n    padding-bottom: 3vh;\n    font-size: 10px;\n    -webkit-animation: bounce 1.4s infinite ease-in-out;\n            animation: bounce 1.4s infinite ease-in-out; }\n  @-webkit-keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); } }\n  @keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); } }\n  @media only screen and (max-width: 600px) {\n  .landing-container {\n    padding: 30vh 5px 0 5px;\n    font-size: 18px; }\n    .landing-container h1 {\n      font-size: 7vh; }\n    .landing-container span {\n      font-size: 2.4vh; } }\n"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], LandingComponent.prototype, "themeData", void 0);
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("./src/app/pages/landing/landing.component.html"),
            styles: [__webpack_require__("./src/app/pages/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  portfolio works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("./src/app/pages/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("./src/app/pages/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/services/themes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__themes__ = __webpack_require__("./src/app/services/themes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemesService = /** @class */ (function () {
    function ThemesService() {
        this.allThemes = Object(__WEBPACK_IMPORTED_MODULE_1__themes__["a" /* getThemes */])();
    }
    ThemesService.prototype.getTheme = function () {
        this.theme = this.allThemes[Math.floor((Math.random() * (this.allThemes.length)))];
        console.log(this.theme);
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.theme);
    };
    ThemesService.prototype.getNewTheme = function () {
        var currentTheme = this.theme;
        var themesWithoutCurrentTheme = this.allThemes.filter(function (theme) { return theme.name !== currentTheme.name; });
        var randomThemeIndex = Math.floor((Math.random() * (themesWithoutCurrentTheme.length)));
        this.theme = themesWithoutCurrentTheme[randomThemeIndex];
        console.log(this.theme);
    };
    ThemesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ThemesService);
    return ThemesService;
}());



/***/ }),

/***/ "./src/app/services/themes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getThemes; });
var Themes = [
    {
        name: 'blue',
        colorPrimary: '#4ea9da',
        colorAlternate: '#FAFAFA',
        colorHighlight: '#daedf7',
        textPrimary: '#202121',
        navAlpha: 'rgba(250, 250, 250, 0.75)'
    },
    {
        name: 'cyan',
        colorPrimary: '#3dc0b0',
        colorAlternate: '#FAFAFA',
        colorHighlight: '#d7f2ef',
        textPrimary: '#202121',
        navAlpha: 'rgba(250, 250, 250, 0.75)'
    },
    {
        name: 'blue-alt',
        colorPrimary: '#FAFAFA',
        colorAlternate: '#4ea9da',
        colorHighlight: '#2a93cb',
        textPrimary: '#FAFAFA',
        navAlpha: 'rgba(78, 169, 218, 0.75)'
    },
    {
        name: 'cyan-alt',
        colorPrimary: '#FAFAFA',
        colorAlternate: '#3dc0b0',
        colorHighlight: '#35a698',
        textPrimary: '#FAFAFA',
        navAlpha: 'rgba(61, 192, 176, 0.75)'
    },
    {
        name: 'green',
        colorPrimary: '#5BA150',
        colorAlternate: '#FAFAFA',
        colorHighlight: '#e1efdf',
        textPrimary: '#202121',
        navAlpha: 'rgba(250, 250, 250, 0.75)'
    },
    {
        name: 'brown',
        colorPrimary: '#A26836',
        colorAlternate: '#FAFAFA',
        colorHighlight: '#f5ebe2',
        textPrimary: '#202121',
        navAlpha: 'rgba(250, 250, 250, 0.75)'
    },
    {
        name: 'orange',
        colorPrimary: '#e17421',
        colorAlternate: '#FAFAFA',
        colorHighlight: '#f9e4d5',
        textPrimary: '#202121',
        navAlpha: 'rgba(250, 250, 250, 0.75)'
    },
    {
        name: 'crimson-red',
        colorPrimary: '#e64f52',
        colorAlternate: '#FAFAFA',
        colorHighlight: '#fbe4e4',
        textPrimary: '#202121',
        navAlpha: 'rgba(250, 250, 250, 0.75)'
    },
    {
        name: 'red',
        colorPrimary: '#af3d4e',
        colorAlternate: '#FAFAFA',
        colorHighlight: '#f6e4e7',
        textPrimary: '#202121',
        navAlpha: 'rgba(250, 250, 250, 0.75)'
    },
    {
        name: 'red-alt',
        colorPrimary: '#FFFFFF',
        colorAlternate: '#89303d',
        colorHighlight: '#63232c',
        textPrimary: '#FFFFFF',
        navAlpha: 'rgba(137, 48, 61, 0.75)'
    },
    {
        name: 'indigo-alt',
        colorPrimary: '#FAFAFA',
        colorAlternate: '#394ed3',
        colorHighlight: '#242f78',
        textPrimary: '#FAFAFA',
        navAlpha: 'rgba(48, 63, 159, 0.75)'
    },
    {
        name: 'grey-alt',
        colorPrimary: '#FFFFFF',
        colorAlternate: '#485564',
        colorHighlight: '#333c46',
        textPrimary: '#FFFFFF',
        navAlpha: 'rgba(72, 85, 100, 0.75)'
    },
    {
        name: 'material-cyan',
        colorPrimary: '#00BCD4',
        colorAlternate: '#FFFFFF',
        colorHighlight: '#d4faff',
        textPrimary: '#212121',
        navAlpha: 'rgba(255, 255, 255, 0.75)'
    },
    {
        name: 'material-brown',
        colorPrimary: '#845c4e',
        colorAlternate: '#FFFFFF',
        colorHighlight: '#eee6e3',
        textPrimary: '#212121',
        navAlpha: 'rgba(255, 255, 255, 0.75)'
    },
    {
        name: 'material-grey',
        colorPrimary: '#607D8B',
        colorAlternate: '#FFFFFF',
        colorHighlight: '#dfe6e9',
        textPrimary: '#212121',
        navAlpha: 'rgba(255, 255, 255, 0.75)'
    },
    {
        name: 'material-grey-alt',
        colorPrimary: '#FFFFFF',
        colorAlternate: '#455A64',
        colorHighlight: '#374850',
        textPrimary: '#FAFAFA',
        navAlpha: 'rgba(69, 90, 100, 0.75)'
    }
];
// export default Themes;
var getThemes = function () {
    return Themes.map(function (theme) {
        return {
            name: theme.name,
            colorPrimary: theme.colorPrimary,
            colorAlternate: theme.colorAlternate,
            colorHighlight: theme.colorHighlight,
            bgPrimary: theme.colorAlternate,
            bgAlternate: theme.colorPrimary,
            textPrimary: theme.textPrimary,
            textAlternate: theme.colorAlternate,
            parallaxStars: theme.colorPrimary,
            navAlpha: theme.navAlpha
        };
    });
};


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


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map