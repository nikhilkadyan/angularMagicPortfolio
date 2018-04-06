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

module.exports = "<div>\n  <app-parallax [themeData]=\"Theme\"></app-parallax>\n  <app-navbar [themeData]=\"Theme\" [newTheme]=\"newThemeFunction\"></app-navbar>\n  <app-landing  [themeData]=\"Theme\"></app-landing>\n  <app-about  [themeData]=\"Theme\"></app-about>\n  <app-portfolio [themeData]=\"Theme\"></app-portfolio>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

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

module.exports = "<nav [ngStyle]=\"{'color':themeData.colorPrimary, 'background': themeData.navAlpha}\"> \n  <span (click)=\"newTheme()\" class=\"themeChange\">\n    <i class=\"fas fa-edit\"></i>Click Me\n  </span>\n  <div class=\"menu\">\n    <span class=\"menu_item\" [ngStyle]=\"{'color':themeData.colorPrimary}\">Howdy!</span>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = "nav {\n  width: 100%;\n  top: 0;\n  left: 0;\n  padding: 7px 15px;\n  position: fixed; }\n  nav .themeChange {\n    float: left;\n    font-size: 5vh;\n    margin-top: -3px;\n    -webkit-animation: 0.8s bounce-xy infinite;\n            animation: 0.8s bounce-xy infinite; }\n  nav .themeChange:hover {\n      cursor: pointer; }\n  nav .menu_item {\n    position: absolute;\n    top: 12px;\n    right: 35px;\n    font-size: 22px; }\n  nav .menu_item:hover {\n      border-bottom: 1px solid; }\n  @-webkit-keyframes bounce-xy {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0) translateX(0);\n            transform: translateY(0) translateX(0); }\n  40% {\n    -webkit-transform: translateX(15px);\n            transform: translateX(15px); }\n  60% {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px); } }\n  @keyframes bounce-xy {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0) translateX(0);\n            transform: translateY(0) translateX(0); }\n  40% {\n    -webkit-transform: translateX(15px);\n            transform: translateX(15px); }\n  60% {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px); } }\n"

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

module.exports = ".parallax {\n  position: fixed;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  width: calc(100vw - 0.0001px);\n  min-height: 100%;\n  height: auto; }\n  .parallax #stars1 {\n    width: 1px;\n    height: 1px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 1108px 1083px , 167px 907px , 1240px 607px , 1419px 1577px , 128px 852px , 405px 1517px , 1986px 698px , 1888px 432px , 1870px 758px , 1142px 1722px , 1367px 1143px , 711px 1456px , 257px 1850px , 1204px 1506px , 941px 682px , 1416px 1482px , 1148px 1321px , 542px 1226px , 1665px 1225px , 1005px 1258px , 1476px 96px , 1091px 628px , 494px 1946px , 1363px 452px , 1500px 1688px , 1406px 1200px , 434px 1764px , 90px 1385px , 1119px 527px , 864px 1689px , 1836px 529px , 420px 1280px , 161px 1176px , 1186px 1745px , 322px 1325px , 72px 1468px , 341px 1379px , 1129px 470px , 1696px 1322px , 916px 83px , 1764px 169px , 295px 1407px , 292px 1250px , 423px 508px , 1382px 590px , 1858px 364px , 1009px 142px , 441px 921px , 174px 1380px , 1783px 1021px , 902px 1211px , 686px 1376px , 1941px 1390px , 1618px 1041px , 1822px 246px , 992px 780px , 1504px 1572px , 1115px 1597px , 874px 279px , 1074px 1349px , 1781px 282px , 800px 1844px , 1920px 1578px , 1565px 1640px , 1577px 1067px , 454px 1974px , 58px 1370px , 333px 1931px , 98px 800px , 1495px 388px , 720px 228px , 1109px 1812px , 723px 1004px , 1139px 1288px , 1022px 1510px , 1214px 649px , 1193px 806px , 1767px 1268px , 1426px 977px , 1878px 1928px , 1941px 1998px , 255px 594px , 723px 1936px , 1803px 539px , 150px 329px , 224px 1961px , 833px 980px , 490px 1979px , 860px 1697px , 1578px 1465px , 996px 998px , 268px 1718px , 1206px 1802px , 1545px 1913px , 195px 596px , 1549px 374px , 845px 1675px , 1481px 355px , 42px 1711px , 390px 1912px , 517px 649px , 747px 634px , 1138px 656px , 85px 1506px , 155px 1535px , 917px 1230px , 678px 354px , 1648px 1322px , 1623px 34px , 1302px 1804px , 1206px 408px , 997px 1058px , 917px 855px , 989px 353px , 1365px 1527px , 861px 913px , 461px 813px , 666px 505px , 1541px 631px , 283px 499px , 1857px 1343px , 868px 891px , 971px 1657px , 1391px 362px , 1541px 1496px , 1004px 1718px , 1644px 453px , 36px 1236px , 900px 1452px , 1704px 1770px , 677px 1422px , 492px 167px , 190px 1517px , 13px 1293px , 1400px 1775px , 1594px 1988px , 1362px 626px , 247px 1091px , 1754px 1565px , 1835px 847px , 1401px 1298px , 1178px 1354px , 1560px 1475px , 714px 317px , 1653px 1903px , 261px 16px , 171px 1495px , 1313px 1563px , 1817px 655px , 481px 950px , 1736px 621px , 486px 212px , 49px 1450px , 1229px 323px , 1154px 1101px , 1058px 502px , 88px 48px , 1486px 402px , 1341px 1671px , 1367px 462px , 1369px 12px , 1995px 1285px , 1461px 1771px , 591px 1862px , 1362px 1151px , 1493px 437px , 660px 1854px , 1114px 1297px , 1820px 70px , 1px 1600px , 958px 1895px , 1376px 621px , 1118px 833px , 229px 189px , 466px 904px , 442px 1522px , 1499px 1351px , 1237px 1211px , 762px 954px , 1940px 212px , 680px 1780px , 415px 519px , 1181px 773px , 468px 455px , 1246px 1585px , 127px 144px , 977px 1969px , 996px 755px , 976px 503px , 1604px 339px , 310px 1273px , 223px 346px , 575px 23px , 318px 1831px , 1374px 1480px , 1669px 1858px , 913px 169px , 222px 18px , 689px 1640px , 1381px 106px , 324px 1085px , 828px 184px , 850px 1498px , 710px 597px , 1615px 134px , 48px 587px , 872px 784px , 1170px 828px , 1686px 302px , 338px 369px , 1225px 510px , 89px 1308px , 1504px 1154px , 1570px 1426px , 969px 103px , 1075px 1366px , 1347px 1045px , 1471px 262px , 1351px 481px , 501px 1106px , 966px 733px , 652px 1308px , 1118px 798px , 1939px 1027px , 1128px 1589px , 720px 1770px , 562px 770px , 1757px 1955px , 1127px 1596px , 211px 271px , 1424px 1739px , 415px 1446px , 478px 1677px , 287px 462px , 1930px 433px , 376px 1906px , 1282px 1219px , 43px 83px , 1334px 1069px , 558px 355px , 1789px 1283px , 307px 1500px , 447px 1502px , 262px 380px , 1128px 986px , 512px 1412px , 1286px 1578px , 172px 1025px , 680px 224px , 503px 233px , 1222px 552px , 1578px 677px , 474px 1197px , 1712px 720px , 1789px 263px , 618px 1732px , 107px 516px , 1336px 805px , 634px 534px , 1795px 1671px , 1453px 724px , 1950px 1530px , 1744px 1845px , 1204px 1961px , 1203px 505px , 147px 1520px , 1150px 1839px , 511px 1182px , 711px 457px , 874px 1778px , 619px 1597px , 1070px 1823px , 1443px 263px , 1646px 748px , 1981px 1955px , 1892px 1956px , 1454px 1426px , 1158px 1391px , 1887px 1609px , 647px 1245px , 392px 1781px , 1331px 649px , 1746px 1508px , 276px 405px , 1179px 1116px , 1741px 1212px , 185px 1146px , 920px 1290px , 1032px 837px , 371px 1831px , 165px 1047px , 1852px 279px , 980px 1990px , 103px 515px , 1783px 1595px , 290px 1231px , 1756px 1691px , 252px 1046px , 69px 640px , 71px 1660px , 1481px 1165px , 1758px 1849px , 516px 1443px , 1659px 416px , 777px 1391px , 214px 1571px , 1141px 1400px , 179px 1124px , 68px 676px , 6px 1166px , 496px 166px , 834px 718px , 1666px 659px , 307px 1459px , 1499px 174px , 352px 365px , 1391px 1550px , 482px 1291px , 373px 813px , 22px 1408px , 1642px 812px , 1090px 61px , 228px 1817px , 307px 215px , 1189px 165px , 1944px 1008px , 1753px 1491px , 716px 1139px , 930px 1058px , 444px 91px , 582px 1618px , 1600px 1299px , 1505px 1275px , 1149px 1427px , 567px 310px , 29px 1684px , 387px 1010px , 509px 1985px , 1463px 870px , 1108px 1645px , 596px 977px , 822px 614px , 1652px 989px , 423px 957px , 1570px 223px , 1553px 1952px , 671px 1483px , 741px 935px , 1529px 959px , 1538px 520px , 1484px 1232px , 1361px 1836px , 142px 427px , 892px 1189px , 1764px 162px , 1783px 1541px , 626px 1930px , 1000px 451px , 1503px 1711px , 1753px 1980px , 1539px 42px , 731px 1974px , 1889px 621px , 214px 1811px , 1872px 482px , 995px 1344px , 1766px 1389px , 1950px 1629px , 951px 163px , 1927px 422px , 1974px 88px , 368px 774px , 1402px 660px , 605px 293px , 93px 1662px , 775px 1835px , 754px 1129px , 974px 1350px , 1143px 274px , 392px 682px , 1009px 715px , 1923px 1244px , 760px 1208px , 1272px 760px , 450px 756px , 1798px 1404px , 1400px 1958px , 580px 1530px , 144px 422px , 901px 286px , 1324px 1458px , 772px 1475px , 442px 1991px , 510px 334px , 435px 661px , 810px 607px , 1854px 1666px , 126px 1999px , 1265px 620px , 756px 480px , 628px 1873px , 184px 1570px , 1673px 1712px , 413px 1924px , 1391px 1455px , 1946px 1267px , 996px 1290px , 1918px 1022px , 1497px 1907px , 714px 1378px , 799px 1521px , 1391px 516px , 726px 1800px , 1440px 28px , 50px 1579px , 626px 1882px , 17px 205px , 210px 483px , 464px 1852px , 895px 1995px , 190px 1318px , 474px 1194px , 1762px 1798px , 1597px 438px , 698px 257px , 548px 1385px , 1986px 281px , 313px 91px , 281px 1767px , 395px 1848px , 986px 231px , 1003px 99px , 1781px 1337px , 1803px 785px , 543px 1187px , 1238px 1609px , 1040px 1953px , 575px 356px , 1683px 867px , 1595px 898px , 1987px 634px , 771px 831px , 1422px 237px , 1347px 221px , 1492px 429px , 1783px 1152px , 1741px 623px , 1861px 405px , 202px 770px , 110px 340px , 1392px 826px , 689px 1583px , 1781px 1743px , 44px 814px , 475px 704px , 1787px 1028px , 1271px 329px , 996px 450px , 240px 1308px , 1566px 1176px , 476px 1062px , 1726px 1915px , 825px 280px , 783px 1444px , 1069px 55px , 526px 680px , 868px 512px , 770px 424px , 1374px 697px , 514px 873px , 1061px 1842px , 572px 986px , 1689px 1687px , 1529px 1051px , 530px 299px , 1133px 1437px , 824px 1892px , 1405px 1378px , 757px 1443px , 206px 432px , 103px 365px , 404px 1771px , 1087px 1286px , 713px 1166px , 31px 1893px , 1079px 1539px , 914px 1999px , 1927px 8px , 1702px 1092px , 1458px 54px , 750px 1070px , 1933px 1964px , 999px 348px , 1341px 1076px , 419px 264px , 1172px 908px , 389px 873px , 1114px 1781px , 763px 1439px , 1190px 1123px , 1090px 1312px , 516px 329px , 1897px 1902px , 407px 1609px , 1350px 571px , 1735px 1024px , 1874px 1193px , 653px 1739px , 275px 1391px , 295px 450px , 904px 1735px , 1508px 226px , 1242px 1771px , 1877px 410px , 1403px 664px , 1451px 182px , 1742px 1046px , 1892px 1744px , 1104px 685px , 1546px 479px , 706px 1145px , 1105px 282px , 1334px 1743px , 855px 989px , 851px 1146px , 1492px 388px , 21px 94px , 947px 1596px , 7px 1150px , 1180px 1185px , 599px 510px , 612px 533px , 911px 651px , 1785px 1075px , 494px 64px , 1486px 277px , 679px 854px , 315px 86px , 522px 1389px , 451px 952px , 755px 1581px , 185px 934px , 972px 465px , 1097px 541px , 532px 413px , 376px 1351px , 303px 225px , 1473px 1410px , 838px 593px , 582px 98px , 914px 1506px , 1195px 516px , 1299px 965px , 1042px 1709px , 1048px 916px , 354px 1885px , 1950px 1151px , 1079px 1928px , 348px 1746px , 719px 871px , 352px 571px , 1649px 287px , 289px 1607px , 1586px 1873px , 917px 1444px , 152px 378px , 1157px 74px , 87px 1315px , 105px 789px , 1498px 1353px , 158px 600px , 1417px 1658px , 607px 1832px , 1341px 87px , 786px 1136px , 861px 1108px , 1103px 296px , 1763px 48px , 544px 826px , 34px 1197px , 708px 1821px , 616px 1024px , 275px 303px , 1756px 1349px , 1469px 1735px , 1170px 742px , 989px 124px , 980px 1138px , 95px 528px , 1042px 1395px , 1800px 1428px , 86px 518px , 1063px 1769px , 686px 671px , 1831px 1468px , 560px 344px , 96px 255px , 650px 1319px , 1956px 1466px , 1656px 338px , 378px 1934px , 273px 1975px , 1446px 1692px , 131px 1408px , 208px 940px , 302px 631px , 66px 466px , 1372px 773px , 1613px 1518px , 840px 1743px , 1966px 1712px , 716px 320px , 726px 436px , 362px 1702px , 1751px 224px , 441px 1200px , 43px 1343px , 979px 958px , 1916px 1873px , 1747px 1307px , 419px 957px , 963px 331px , 1117px 855px , 1611px 1642px , 141px 1601px , 1610px 1248px , 1410px 199px , 1829px 660px , 509px 381px , 601px 1725px , 1832px 201px , 1333px 913px , 1937px 638px , 1193px 710px , 80px 1086px , 1639px 1871px , 1654px 730px , 1386px 1915px , 2000px 169px , 1482px 490px , 618px 1773px , 362px 872px , 678px 577px , 86px 1333px , 1758px 1257px , 144px 1508px , 382px 1635px , 1640px 948px , 644px 247px , 321px 724px , 1664px 61px , 1172px 407px , 690px 1060px , 1937px 100px , 1333px 250px , 1783px 900px , 1394px 308px , 1973px 172px , 182px 456px , 1901px 1881px , 767px 402px , 1116px 794px , 438px 1529px , 1969px 1664px , 945px 921px , 1516px 944px , 1904px 1100px , 1459px 1363px , 646px 1639px , 619px 1336px , 854px 16px , 331px 431px , 514px 1055px , 467px 964px , 430px 106px , 693px 1649px , 803px 34px , 1345px 980px , 1783px 1189px , 1375px 938px , 750px 1201px , 5px 1216px , 334px 61px , 442px 1193px , 1449px 1346px , 323px 407px , 189px 1536px , 787px 1841px , 629px 995px , 130px 1704px , 1529px 392px , 1142px 780px , 1851px 409px , 1293px 42px , 1145px 1565px , 334px 1632px , 659px 343px , 1380px 186px , 702px 46px , 947px 1179px;\n            box-shadow: 1108px 1083px , 167px 907px , 1240px 607px , 1419px 1577px , 128px 852px , 405px 1517px , 1986px 698px , 1888px 432px , 1870px 758px , 1142px 1722px , 1367px 1143px , 711px 1456px , 257px 1850px , 1204px 1506px , 941px 682px , 1416px 1482px , 1148px 1321px , 542px 1226px , 1665px 1225px , 1005px 1258px , 1476px 96px , 1091px 628px , 494px 1946px , 1363px 452px , 1500px 1688px , 1406px 1200px , 434px 1764px , 90px 1385px , 1119px 527px , 864px 1689px , 1836px 529px , 420px 1280px , 161px 1176px , 1186px 1745px , 322px 1325px , 72px 1468px , 341px 1379px , 1129px 470px , 1696px 1322px , 916px 83px , 1764px 169px , 295px 1407px , 292px 1250px , 423px 508px , 1382px 590px , 1858px 364px , 1009px 142px , 441px 921px , 174px 1380px , 1783px 1021px , 902px 1211px , 686px 1376px , 1941px 1390px , 1618px 1041px , 1822px 246px , 992px 780px , 1504px 1572px , 1115px 1597px , 874px 279px , 1074px 1349px , 1781px 282px , 800px 1844px , 1920px 1578px , 1565px 1640px , 1577px 1067px , 454px 1974px , 58px 1370px , 333px 1931px , 98px 800px , 1495px 388px , 720px 228px , 1109px 1812px , 723px 1004px , 1139px 1288px , 1022px 1510px , 1214px 649px , 1193px 806px , 1767px 1268px , 1426px 977px , 1878px 1928px , 1941px 1998px , 255px 594px , 723px 1936px , 1803px 539px , 150px 329px , 224px 1961px , 833px 980px , 490px 1979px , 860px 1697px , 1578px 1465px , 996px 998px , 268px 1718px , 1206px 1802px , 1545px 1913px , 195px 596px , 1549px 374px , 845px 1675px , 1481px 355px , 42px 1711px , 390px 1912px , 517px 649px , 747px 634px , 1138px 656px , 85px 1506px , 155px 1535px , 917px 1230px , 678px 354px , 1648px 1322px , 1623px 34px , 1302px 1804px , 1206px 408px , 997px 1058px , 917px 855px , 989px 353px , 1365px 1527px , 861px 913px , 461px 813px , 666px 505px , 1541px 631px , 283px 499px , 1857px 1343px , 868px 891px , 971px 1657px , 1391px 362px , 1541px 1496px , 1004px 1718px , 1644px 453px , 36px 1236px , 900px 1452px , 1704px 1770px , 677px 1422px , 492px 167px , 190px 1517px , 13px 1293px , 1400px 1775px , 1594px 1988px , 1362px 626px , 247px 1091px , 1754px 1565px , 1835px 847px , 1401px 1298px , 1178px 1354px , 1560px 1475px , 714px 317px , 1653px 1903px , 261px 16px , 171px 1495px , 1313px 1563px , 1817px 655px , 481px 950px , 1736px 621px , 486px 212px , 49px 1450px , 1229px 323px , 1154px 1101px , 1058px 502px , 88px 48px , 1486px 402px , 1341px 1671px , 1367px 462px , 1369px 12px , 1995px 1285px , 1461px 1771px , 591px 1862px , 1362px 1151px , 1493px 437px , 660px 1854px , 1114px 1297px , 1820px 70px , 1px 1600px , 958px 1895px , 1376px 621px , 1118px 833px , 229px 189px , 466px 904px , 442px 1522px , 1499px 1351px , 1237px 1211px , 762px 954px , 1940px 212px , 680px 1780px , 415px 519px , 1181px 773px , 468px 455px , 1246px 1585px , 127px 144px , 977px 1969px , 996px 755px , 976px 503px , 1604px 339px , 310px 1273px , 223px 346px , 575px 23px , 318px 1831px , 1374px 1480px , 1669px 1858px , 913px 169px , 222px 18px , 689px 1640px , 1381px 106px , 324px 1085px , 828px 184px , 850px 1498px , 710px 597px , 1615px 134px , 48px 587px , 872px 784px , 1170px 828px , 1686px 302px , 338px 369px , 1225px 510px , 89px 1308px , 1504px 1154px , 1570px 1426px , 969px 103px , 1075px 1366px , 1347px 1045px , 1471px 262px , 1351px 481px , 501px 1106px , 966px 733px , 652px 1308px , 1118px 798px , 1939px 1027px , 1128px 1589px , 720px 1770px , 562px 770px , 1757px 1955px , 1127px 1596px , 211px 271px , 1424px 1739px , 415px 1446px , 478px 1677px , 287px 462px , 1930px 433px , 376px 1906px , 1282px 1219px , 43px 83px , 1334px 1069px , 558px 355px , 1789px 1283px , 307px 1500px , 447px 1502px , 262px 380px , 1128px 986px , 512px 1412px , 1286px 1578px , 172px 1025px , 680px 224px , 503px 233px , 1222px 552px , 1578px 677px , 474px 1197px , 1712px 720px , 1789px 263px , 618px 1732px , 107px 516px , 1336px 805px , 634px 534px , 1795px 1671px , 1453px 724px , 1950px 1530px , 1744px 1845px , 1204px 1961px , 1203px 505px , 147px 1520px , 1150px 1839px , 511px 1182px , 711px 457px , 874px 1778px , 619px 1597px , 1070px 1823px , 1443px 263px , 1646px 748px , 1981px 1955px , 1892px 1956px , 1454px 1426px , 1158px 1391px , 1887px 1609px , 647px 1245px , 392px 1781px , 1331px 649px , 1746px 1508px , 276px 405px , 1179px 1116px , 1741px 1212px , 185px 1146px , 920px 1290px , 1032px 837px , 371px 1831px , 165px 1047px , 1852px 279px , 980px 1990px , 103px 515px , 1783px 1595px , 290px 1231px , 1756px 1691px , 252px 1046px , 69px 640px , 71px 1660px , 1481px 1165px , 1758px 1849px , 516px 1443px , 1659px 416px , 777px 1391px , 214px 1571px , 1141px 1400px , 179px 1124px , 68px 676px , 6px 1166px , 496px 166px , 834px 718px , 1666px 659px , 307px 1459px , 1499px 174px , 352px 365px , 1391px 1550px , 482px 1291px , 373px 813px , 22px 1408px , 1642px 812px , 1090px 61px , 228px 1817px , 307px 215px , 1189px 165px , 1944px 1008px , 1753px 1491px , 716px 1139px , 930px 1058px , 444px 91px , 582px 1618px , 1600px 1299px , 1505px 1275px , 1149px 1427px , 567px 310px , 29px 1684px , 387px 1010px , 509px 1985px , 1463px 870px , 1108px 1645px , 596px 977px , 822px 614px , 1652px 989px , 423px 957px , 1570px 223px , 1553px 1952px , 671px 1483px , 741px 935px , 1529px 959px , 1538px 520px , 1484px 1232px , 1361px 1836px , 142px 427px , 892px 1189px , 1764px 162px , 1783px 1541px , 626px 1930px , 1000px 451px , 1503px 1711px , 1753px 1980px , 1539px 42px , 731px 1974px , 1889px 621px , 214px 1811px , 1872px 482px , 995px 1344px , 1766px 1389px , 1950px 1629px , 951px 163px , 1927px 422px , 1974px 88px , 368px 774px , 1402px 660px , 605px 293px , 93px 1662px , 775px 1835px , 754px 1129px , 974px 1350px , 1143px 274px , 392px 682px , 1009px 715px , 1923px 1244px , 760px 1208px , 1272px 760px , 450px 756px , 1798px 1404px , 1400px 1958px , 580px 1530px , 144px 422px , 901px 286px , 1324px 1458px , 772px 1475px , 442px 1991px , 510px 334px , 435px 661px , 810px 607px , 1854px 1666px , 126px 1999px , 1265px 620px , 756px 480px , 628px 1873px , 184px 1570px , 1673px 1712px , 413px 1924px , 1391px 1455px , 1946px 1267px , 996px 1290px , 1918px 1022px , 1497px 1907px , 714px 1378px , 799px 1521px , 1391px 516px , 726px 1800px , 1440px 28px , 50px 1579px , 626px 1882px , 17px 205px , 210px 483px , 464px 1852px , 895px 1995px , 190px 1318px , 474px 1194px , 1762px 1798px , 1597px 438px , 698px 257px , 548px 1385px , 1986px 281px , 313px 91px , 281px 1767px , 395px 1848px , 986px 231px , 1003px 99px , 1781px 1337px , 1803px 785px , 543px 1187px , 1238px 1609px , 1040px 1953px , 575px 356px , 1683px 867px , 1595px 898px , 1987px 634px , 771px 831px , 1422px 237px , 1347px 221px , 1492px 429px , 1783px 1152px , 1741px 623px , 1861px 405px , 202px 770px , 110px 340px , 1392px 826px , 689px 1583px , 1781px 1743px , 44px 814px , 475px 704px , 1787px 1028px , 1271px 329px , 996px 450px , 240px 1308px , 1566px 1176px , 476px 1062px , 1726px 1915px , 825px 280px , 783px 1444px , 1069px 55px , 526px 680px , 868px 512px , 770px 424px , 1374px 697px , 514px 873px , 1061px 1842px , 572px 986px , 1689px 1687px , 1529px 1051px , 530px 299px , 1133px 1437px , 824px 1892px , 1405px 1378px , 757px 1443px , 206px 432px , 103px 365px , 404px 1771px , 1087px 1286px , 713px 1166px , 31px 1893px , 1079px 1539px , 914px 1999px , 1927px 8px , 1702px 1092px , 1458px 54px , 750px 1070px , 1933px 1964px , 999px 348px , 1341px 1076px , 419px 264px , 1172px 908px , 389px 873px , 1114px 1781px , 763px 1439px , 1190px 1123px , 1090px 1312px , 516px 329px , 1897px 1902px , 407px 1609px , 1350px 571px , 1735px 1024px , 1874px 1193px , 653px 1739px , 275px 1391px , 295px 450px , 904px 1735px , 1508px 226px , 1242px 1771px , 1877px 410px , 1403px 664px , 1451px 182px , 1742px 1046px , 1892px 1744px , 1104px 685px , 1546px 479px , 706px 1145px , 1105px 282px , 1334px 1743px , 855px 989px , 851px 1146px , 1492px 388px , 21px 94px , 947px 1596px , 7px 1150px , 1180px 1185px , 599px 510px , 612px 533px , 911px 651px , 1785px 1075px , 494px 64px , 1486px 277px , 679px 854px , 315px 86px , 522px 1389px , 451px 952px , 755px 1581px , 185px 934px , 972px 465px , 1097px 541px , 532px 413px , 376px 1351px , 303px 225px , 1473px 1410px , 838px 593px , 582px 98px , 914px 1506px , 1195px 516px , 1299px 965px , 1042px 1709px , 1048px 916px , 354px 1885px , 1950px 1151px , 1079px 1928px , 348px 1746px , 719px 871px , 352px 571px , 1649px 287px , 289px 1607px , 1586px 1873px , 917px 1444px , 152px 378px , 1157px 74px , 87px 1315px , 105px 789px , 1498px 1353px , 158px 600px , 1417px 1658px , 607px 1832px , 1341px 87px , 786px 1136px , 861px 1108px , 1103px 296px , 1763px 48px , 544px 826px , 34px 1197px , 708px 1821px , 616px 1024px , 275px 303px , 1756px 1349px , 1469px 1735px , 1170px 742px , 989px 124px , 980px 1138px , 95px 528px , 1042px 1395px , 1800px 1428px , 86px 518px , 1063px 1769px , 686px 671px , 1831px 1468px , 560px 344px , 96px 255px , 650px 1319px , 1956px 1466px , 1656px 338px , 378px 1934px , 273px 1975px , 1446px 1692px , 131px 1408px , 208px 940px , 302px 631px , 66px 466px , 1372px 773px , 1613px 1518px , 840px 1743px , 1966px 1712px , 716px 320px , 726px 436px , 362px 1702px , 1751px 224px , 441px 1200px , 43px 1343px , 979px 958px , 1916px 1873px , 1747px 1307px , 419px 957px , 963px 331px , 1117px 855px , 1611px 1642px , 141px 1601px , 1610px 1248px , 1410px 199px , 1829px 660px , 509px 381px , 601px 1725px , 1832px 201px , 1333px 913px , 1937px 638px , 1193px 710px , 80px 1086px , 1639px 1871px , 1654px 730px , 1386px 1915px , 2000px 169px , 1482px 490px , 618px 1773px , 362px 872px , 678px 577px , 86px 1333px , 1758px 1257px , 144px 1508px , 382px 1635px , 1640px 948px , 644px 247px , 321px 724px , 1664px 61px , 1172px 407px , 690px 1060px , 1937px 100px , 1333px 250px , 1783px 900px , 1394px 308px , 1973px 172px , 182px 456px , 1901px 1881px , 767px 402px , 1116px 794px , 438px 1529px , 1969px 1664px , 945px 921px , 1516px 944px , 1904px 1100px , 1459px 1363px , 646px 1639px , 619px 1336px , 854px 16px , 331px 431px , 514px 1055px , 467px 964px , 430px 106px , 693px 1649px , 803px 34px , 1345px 980px , 1783px 1189px , 1375px 938px , 750px 1201px , 5px 1216px , 334px 61px , 442px 1193px , 1449px 1346px , 323px 407px , 189px 1536px , 787px 1841px , 629px 995px , 130px 1704px , 1529px 392px , 1142px 780px , 1851px 409px , 1293px 42px , 1145px 1565px , 334px 1632px , 659px 343px , 1380px 186px , 702px 46px , 947px 1179px;\n    -webkit-animation: animStar 150s linear infinite;\n            animation: animStar 150s linear infinite; }\n  .parallax #stars1:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 1px;\n      height: 1px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 1108px 1083px , 167px 907px , 1240px 607px , 1419px 1577px , 128px 852px , 405px 1517px , 1986px 698px , 1888px 432px , 1870px 758px , 1142px 1722px , 1367px 1143px , 711px 1456px , 257px 1850px , 1204px 1506px , 941px 682px , 1416px 1482px , 1148px 1321px , 542px 1226px , 1665px 1225px , 1005px 1258px , 1476px 96px , 1091px 628px , 494px 1946px , 1363px 452px , 1500px 1688px , 1406px 1200px , 434px 1764px , 90px 1385px , 1119px 527px , 864px 1689px , 1836px 529px , 420px 1280px , 161px 1176px , 1186px 1745px , 322px 1325px , 72px 1468px , 341px 1379px , 1129px 470px , 1696px 1322px , 916px 83px , 1764px 169px , 295px 1407px , 292px 1250px , 423px 508px , 1382px 590px , 1858px 364px , 1009px 142px , 441px 921px , 174px 1380px , 1783px 1021px , 902px 1211px , 686px 1376px , 1941px 1390px , 1618px 1041px , 1822px 246px , 992px 780px , 1504px 1572px , 1115px 1597px , 874px 279px , 1074px 1349px , 1781px 282px , 800px 1844px , 1920px 1578px , 1565px 1640px , 1577px 1067px , 454px 1974px , 58px 1370px , 333px 1931px , 98px 800px , 1495px 388px , 720px 228px , 1109px 1812px , 723px 1004px , 1139px 1288px , 1022px 1510px , 1214px 649px , 1193px 806px , 1767px 1268px , 1426px 977px , 1878px 1928px , 1941px 1998px , 255px 594px , 723px 1936px , 1803px 539px , 150px 329px , 224px 1961px , 833px 980px , 490px 1979px , 860px 1697px , 1578px 1465px , 996px 998px , 268px 1718px , 1206px 1802px , 1545px 1913px , 195px 596px , 1549px 374px , 845px 1675px , 1481px 355px , 42px 1711px , 390px 1912px , 517px 649px , 747px 634px , 1138px 656px , 85px 1506px , 155px 1535px , 917px 1230px , 678px 354px , 1648px 1322px , 1623px 34px , 1302px 1804px , 1206px 408px , 997px 1058px , 917px 855px , 989px 353px , 1365px 1527px , 861px 913px , 461px 813px , 666px 505px , 1541px 631px , 283px 499px , 1857px 1343px , 868px 891px , 971px 1657px , 1391px 362px , 1541px 1496px , 1004px 1718px , 1644px 453px , 36px 1236px , 900px 1452px , 1704px 1770px , 677px 1422px , 492px 167px , 190px 1517px , 13px 1293px , 1400px 1775px , 1594px 1988px , 1362px 626px , 247px 1091px , 1754px 1565px , 1835px 847px , 1401px 1298px , 1178px 1354px , 1560px 1475px , 714px 317px , 1653px 1903px , 261px 16px , 171px 1495px , 1313px 1563px , 1817px 655px , 481px 950px , 1736px 621px , 486px 212px , 49px 1450px , 1229px 323px , 1154px 1101px , 1058px 502px , 88px 48px , 1486px 402px , 1341px 1671px , 1367px 462px , 1369px 12px , 1995px 1285px , 1461px 1771px , 591px 1862px , 1362px 1151px , 1493px 437px , 660px 1854px , 1114px 1297px , 1820px 70px , 1px 1600px , 958px 1895px , 1376px 621px , 1118px 833px , 229px 189px , 466px 904px , 442px 1522px , 1499px 1351px , 1237px 1211px , 762px 954px , 1940px 212px , 680px 1780px , 415px 519px , 1181px 773px , 468px 455px , 1246px 1585px , 127px 144px , 977px 1969px , 996px 755px , 976px 503px , 1604px 339px , 310px 1273px , 223px 346px , 575px 23px , 318px 1831px , 1374px 1480px , 1669px 1858px , 913px 169px , 222px 18px , 689px 1640px , 1381px 106px , 324px 1085px , 828px 184px , 850px 1498px , 710px 597px , 1615px 134px , 48px 587px , 872px 784px , 1170px 828px , 1686px 302px , 338px 369px , 1225px 510px , 89px 1308px , 1504px 1154px , 1570px 1426px , 969px 103px , 1075px 1366px , 1347px 1045px , 1471px 262px , 1351px 481px , 501px 1106px , 966px 733px , 652px 1308px , 1118px 798px , 1939px 1027px , 1128px 1589px , 720px 1770px , 562px 770px , 1757px 1955px , 1127px 1596px , 211px 271px , 1424px 1739px , 415px 1446px , 478px 1677px , 287px 462px , 1930px 433px , 376px 1906px , 1282px 1219px , 43px 83px , 1334px 1069px , 558px 355px , 1789px 1283px , 307px 1500px , 447px 1502px , 262px 380px , 1128px 986px , 512px 1412px , 1286px 1578px , 172px 1025px , 680px 224px , 503px 233px , 1222px 552px , 1578px 677px , 474px 1197px , 1712px 720px , 1789px 263px , 618px 1732px , 107px 516px , 1336px 805px , 634px 534px , 1795px 1671px , 1453px 724px , 1950px 1530px , 1744px 1845px , 1204px 1961px , 1203px 505px , 147px 1520px , 1150px 1839px , 511px 1182px , 711px 457px , 874px 1778px , 619px 1597px , 1070px 1823px , 1443px 263px , 1646px 748px , 1981px 1955px , 1892px 1956px , 1454px 1426px , 1158px 1391px , 1887px 1609px , 647px 1245px , 392px 1781px , 1331px 649px , 1746px 1508px , 276px 405px , 1179px 1116px , 1741px 1212px , 185px 1146px , 920px 1290px , 1032px 837px , 371px 1831px , 165px 1047px , 1852px 279px , 980px 1990px , 103px 515px , 1783px 1595px , 290px 1231px , 1756px 1691px , 252px 1046px , 69px 640px , 71px 1660px , 1481px 1165px , 1758px 1849px , 516px 1443px , 1659px 416px , 777px 1391px , 214px 1571px , 1141px 1400px , 179px 1124px , 68px 676px , 6px 1166px , 496px 166px , 834px 718px , 1666px 659px , 307px 1459px , 1499px 174px , 352px 365px , 1391px 1550px , 482px 1291px , 373px 813px , 22px 1408px , 1642px 812px , 1090px 61px , 228px 1817px , 307px 215px , 1189px 165px , 1944px 1008px , 1753px 1491px , 716px 1139px , 930px 1058px , 444px 91px , 582px 1618px , 1600px 1299px , 1505px 1275px , 1149px 1427px , 567px 310px , 29px 1684px , 387px 1010px , 509px 1985px , 1463px 870px , 1108px 1645px , 596px 977px , 822px 614px , 1652px 989px , 423px 957px , 1570px 223px , 1553px 1952px , 671px 1483px , 741px 935px , 1529px 959px , 1538px 520px , 1484px 1232px , 1361px 1836px , 142px 427px , 892px 1189px , 1764px 162px , 1783px 1541px , 626px 1930px , 1000px 451px , 1503px 1711px , 1753px 1980px , 1539px 42px , 731px 1974px , 1889px 621px , 214px 1811px , 1872px 482px , 995px 1344px , 1766px 1389px , 1950px 1629px , 951px 163px , 1927px 422px , 1974px 88px , 368px 774px , 1402px 660px , 605px 293px , 93px 1662px , 775px 1835px , 754px 1129px , 974px 1350px , 1143px 274px , 392px 682px , 1009px 715px , 1923px 1244px , 760px 1208px , 1272px 760px , 450px 756px , 1798px 1404px , 1400px 1958px , 580px 1530px , 144px 422px , 901px 286px , 1324px 1458px , 772px 1475px , 442px 1991px , 510px 334px , 435px 661px , 810px 607px , 1854px 1666px , 126px 1999px , 1265px 620px , 756px 480px , 628px 1873px , 184px 1570px , 1673px 1712px , 413px 1924px , 1391px 1455px , 1946px 1267px , 996px 1290px , 1918px 1022px , 1497px 1907px , 714px 1378px , 799px 1521px , 1391px 516px , 726px 1800px , 1440px 28px , 50px 1579px , 626px 1882px , 17px 205px , 210px 483px , 464px 1852px , 895px 1995px , 190px 1318px , 474px 1194px , 1762px 1798px , 1597px 438px , 698px 257px , 548px 1385px , 1986px 281px , 313px 91px , 281px 1767px , 395px 1848px , 986px 231px , 1003px 99px , 1781px 1337px , 1803px 785px , 543px 1187px , 1238px 1609px , 1040px 1953px , 575px 356px , 1683px 867px , 1595px 898px , 1987px 634px , 771px 831px , 1422px 237px , 1347px 221px , 1492px 429px , 1783px 1152px , 1741px 623px , 1861px 405px , 202px 770px , 110px 340px , 1392px 826px , 689px 1583px , 1781px 1743px , 44px 814px , 475px 704px , 1787px 1028px , 1271px 329px , 996px 450px , 240px 1308px , 1566px 1176px , 476px 1062px , 1726px 1915px , 825px 280px , 783px 1444px , 1069px 55px , 526px 680px , 868px 512px , 770px 424px , 1374px 697px , 514px 873px , 1061px 1842px , 572px 986px , 1689px 1687px , 1529px 1051px , 530px 299px , 1133px 1437px , 824px 1892px , 1405px 1378px , 757px 1443px , 206px 432px , 103px 365px , 404px 1771px , 1087px 1286px , 713px 1166px , 31px 1893px , 1079px 1539px , 914px 1999px , 1927px 8px , 1702px 1092px , 1458px 54px , 750px 1070px , 1933px 1964px , 999px 348px , 1341px 1076px , 419px 264px , 1172px 908px , 389px 873px , 1114px 1781px , 763px 1439px , 1190px 1123px , 1090px 1312px , 516px 329px , 1897px 1902px , 407px 1609px , 1350px 571px , 1735px 1024px , 1874px 1193px , 653px 1739px , 275px 1391px , 295px 450px , 904px 1735px , 1508px 226px , 1242px 1771px , 1877px 410px , 1403px 664px , 1451px 182px , 1742px 1046px , 1892px 1744px , 1104px 685px , 1546px 479px , 706px 1145px , 1105px 282px , 1334px 1743px , 855px 989px , 851px 1146px , 1492px 388px , 21px 94px , 947px 1596px , 7px 1150px , 1180px 1185px , 599px 510px , 612px 533px , 911px 651px , 1785px 1075px , 494px 64px , 1486px 277px , 679px 854px , 315px 86px , 522px 1389px , 451px 952px , 755px 1581px , 185px 934px , 972px 465px , 1097px 541px , 532px 413px , 376px 1351px , 303px 225px , 1473px 1410px , 838px 593px , 582px 98px , 914px 1506px , 1195px 516px , 1299px 965px , 1042px 1709px , 1048px 916px , 354px 1885px , 1950px 1151px , 1079px 1928px , 348px 1746px , 719px 871px , 352px 571px , 1649px 287px , 289px 1607px , 1586px 1873px , 917px 1444px , 152px 378px , 1157px 74px , 87px 1315px , 105px 789px , 1498px 1353px , 158px 600px , 1417px 1658px , 607px 1832px , 1341px 87px , 786px 1136px , 861px 1108px , 1103px 296px , 1763px 48px , 544px 826px , 34px 1197px , 708px 1821px , 616px 1024px , 275px 303px , 1756px 1349px , 1469px 1735px , 1170px 742px , 989px 124px , 980px 1138px , 95px 528px , 1042px 1395px , 1800px 1428px , 86px 518px , 1063px 1769px , 686px 671px , 1831px 1468px , 560px 344px , 96px 255px , 650px 1319px , 1956px 1466px , 1656px 338px , 378px 1934px , 273px 1975px , 1446px 1692px , 131px 1408px , 208px 940px , 302px 631px , 66px 466px , 1372px 773px , 1613px 1518px , 840px 1743px , 1966px 1712px , 716px 320px , 726px 436px , 362px 1702px , 1751px 224px , 441px 1200px , 43px 1343px , 979px 958px , 1916px 1873px , 1747px 1307px , 419px 957px , 963px 331px , 1117px 855px , 1611px 1642px , 141px 1601px , 1610px 1248px , 1410px 199px , 1829px 660px , 509px 381px , 601px 1725px , 1832px 201px , 1333px 913px , 1937px 638px , 1193px 710px , 80px 1086px , 1639px 1871px , 1654px 730px , 1386px 1915px , 2000px 169px , 1482px 490px , 618px 1773px , 362px 872px , 678px 577px , 86px 1333px , 1758px 1257px , 144px 1508px , 382px 1635px , 1640px 948px , 644px 247px , 321px 724px , 1664px 61px , 1172px 407px , 690px 1060px , 1937px 100px , 1333px 250px , 1783px 900px , 1394px 308px , 1973px 172px , 182px 456px , 1901px 1881px , 767px 402px , 1116px 794px , 438px 1529px , 1969px 1664px , 945px 921px , 1516px 944px , 1904px 1100px , 1459px 1363px , 646px 1639px , 619px 1336px , 854px 16px , 331px 431px , 514px 1055px , 467px 964px , 430px 106px , 693px 1649px , 803px 34px , 1345px 980px , 1783px 1189px , 1375px 938px , 750px 1201px , 5px 1216px , 334px 61px , 442px 1193px , 1449px 1346px , 323px 407px , 189px 1536px , 787px 1841px , 629px 995px , 130px 1704px , 1529px 392px , 1142px 780px , 1851px 409px , 1293px 42px , 1145px 1565px , 334px 1632px , 659px 343px , 1380px 186px , 702px 46px , 947px 1179px;\n              box-shadow: 1108px 1083px , 167px 907px , 1240px 607px , 1419px 1577px , 128px 852px , 405px 1517px , 1986px 698px , 1888px 432px , 1870px 758px , 1142px 1722px , 1367px 1143px , 711px 1456px , 257px 1850px , 1204px 1506px , 941px 682px , 1416px 1482px , 1148px 1321px , 542px 1226px , 1665px 1225px , 1005px 1258px , 1476px 96px , 1091px 628px , 494px 1946px , 1363px 452px , 1500px 1688px , 1406px 1200px , 434px 1764px , 90px 1385px , 1119px 527px , 864px 1689px , 1836px 529px , 420px 1280px , 161px 1176px , 1186px 1745px , 322px 1325px , 72px 1468px , 341px 1379px , 1129px 470px , 1696px 1322px , 916px 83px , 1764px 169px , 295px 1407px , 292px 1250px , 423px 508px , 1382px 590px , 1858px 364px , 1009px 142px , 441px 921px , 174px 1380px , 1783px 1021px , 902px 1211px , 686px 1376px , 1941px 1390px , 1618px 1041px , 1822px 246px , 992px 780px , 1504px 1572px , 1115px 1597px , 874px 279px , 1074px 1349px , 1781px 282px , 800px 1844px , 1920px 1578px , 1565px 1640px , 1577px 1067px , 454px 1974px , 58px 1370px , 333px 1931px , 98px 800px , 1495px 388px , 720px 228px , 1109px 1812px , 723px 1004px , 1139px 1288px , 1022px 1510px , 1214px 649px , 1193px 806px , 1767px 1268px , 1426px 977px , 1878px 1928px , 1941px 1998px , 255px 594px , 723px 1936px , 1803px 539px , 150px 329px , 224px 1961px , 833px 980px , 490px 1979px , 860px 1697px , 1578px 1465px , 996px 998px , 268px 1718px , 1206px 1802px , 1545px 1913px , 195px 596px , 1549px 374px , 845px 1675px , 1481px 355px , 42px 1711px , 390px 1912px , 517px 649px , 747px 634px , 1138px 656px , 85px 1506px , 155px 1535px , 917px 1230px , 678px 354px , 1648px 1322px , 1623px 34px , 1302px 1804px , 1206px 408px , 997px 1058px , 917px 855px , 989px 353px , 1365px 1527px , 861px 913px , 461px 813px , 666px 505px , 1541px 631px , 283px 499px , 1857px 1343px , 868px 891px , 971px 1657px , 1391px 362px , 1541px 1496px , 1004px 1718px , 1644px 453px , 36px 1236px , 900px 1452px , 1704px 1770px , 677px 1422px , 492px 167px , 190px 1517px , 13px 1293px , 1400px 1775px , 1594px 1988px , 1362px 626px , 247px 1091px , 1754px 1565px , 1835px 847px , 1401px 1298px , 1178px 1354px , 1560px 1475px , 714px 317px , 1653px 1903px , 261px 16px , 171px 1495px , 1313px 1563px , 1817px 655px , 481px 950px , 1736px 621px , 486px 212px , 49px 1450px , 1229px 323px , 1154px 1101px , 1058px 502px , 88px 48px , 1486px 402px , 1341px 1671px , 1367px 462px , 1369px 12px , 1995px 1285px , 1461px 1771px , 591px 1862px , 1362px 1151px , 1493px 437px , 660px 1854px , 1114px 1297px , 1820px 70px , 1px 1600px , 958px 1895px , 1376px 621px , 1118px 833px , 229px 189px , 466px 904px , 442px 1522px , 1499px 1351px , 1237px 1211px , 762px 954px , 1940px 212px , 680px 1780px , 415px 519px , 1181px 773px , 468px 455px , 1246px 1585px , 127px 144px , 977px 1969px , 996px 755px , 976px 503px , 1604px 339px , 310px 1273px , 223px 346px , 575px 23px , 318px 1831px , 1374px 1480px , 1669px 1858px , 913px 169px , 222px 18px , 689px 1640px , 1381px 106px , 324px 1085px , 828px 184px , 850px 1498px , 710px 597px , 1615px 134px , 48px 587px , 872px 784px , 1170px 828px , 1686px 302px , 338px 369px , 1225px 510px , 89px 1308px , 1504px 1154px , 1570px 1426px , 969px 103px , 1075px 1366px , 1347px 1045px , 1471px 262px , 1351px 481px , 501px 1106px , 966px 733px , 652px 1308px , 1118px 798px , 1939px 1027px , 1128px 1589px , 720px 1770px , 562px 770px , 1757px 1955px , 1127px 1596px , 211px 271px , 1424px 1739px , 415px 1446px , 478px 1677px , 287px 462px , 1930px 433px , 376px 1906px , 1282px 1219px , 43px 83px , 1334px 1069px , 558px 355px , 1789px 1283px , 307px 1500px , 447px 1502px , 262px 380px , 1128px 986px , 512px 1412px , 1286px 1578px , 172px 1025px , 680px 224px , 503px 233px , 1222px 552px , 1578px 677px , 474px 1197px , 1712px 720px , 1789px 263px , 618px 1732px , 107px 516px , 1336px 805px , 634px 534px , 1795px 1671px , 1453px 724px , 1950px 1530px , 1744px 1845px , 1204px 1961px , 1203px 505px , 147px 1520px , 1150px 1839px , 511px 1182px , 711px 457px , 874px 1778px , 619px 1597px , 1070px 1823px , 1443px 263px , 1646px 748px , 1981px 1955px , 1892px 1956px , 1454px 1426px , 1158px 1391px , 1887px 1609px , 647px 1245px , 392px 1781px , 1331px 649px , 1746px 1508px , 276px 405px , 1179px 1116px , 1741px 1212px , 185px 1146px , 920px 1290px , 1032px 837px , 371px 1831px , 165px 1047px , 1852px 279px , 980px 1990px , 103px 515px , 1783px 1595px , 290px 1231px , 1756px 1691px , 252px 1046px , 69px 640px , 71px 1660px , 1481px 1165px , 1758px 1849px , 516px 1443px , 1659px 416px , 777px 1391px , 214px 1571px , 1141px 1400px , 179px 1124px , 68px 676px , 6px 1166px , 496px 166px , 834px 718px , 1666px 659px , 307px 1459px , 1499px 174px , 352px 365px , 1391px 1550px , 482px 1291px , 373px 813px , 22px 1408px , 1642px 812px , 1090px 61px , 228px 1817px , 307px 215px , 1189px 165px , 1944px 1008px , 1753px 1491px , 716px 1139px , 930px 1058px , 444px 91px , 582px 1618px , 1600px 1299px , 1505px 1275px , 1149px 1427px , 567px 310px , 29px 1684px , 387px 1010px , 509px 1985px , 1463px 870px , 1108px 1645px , 596px 977px , 822px 614px , 1652px 989px , 423px 957px , 1570px 223px , 1553px 1952px , 671px 1483px , 741px 935px , 1529px 959px , 1538px 520px , 1484px 1232px , 1361px 1836px , 142px 427px , 892px 1189px , 1764px 162px , 1783px 1541px , 626px 1930px , 1000px 451px , 1503px 1711px , 1753px 1980px , 1539px 42px , 731px 1974px , 1889px 621px , 214px 1811px , 1872px 482px , 995px 1344px , 1766px 1389px , 1950px 1629px , 951px 163px , 1927px 422px , 1974px 88px , 368px 774px , 1402px 660px , 605px 293px , 93px 1662px , 775px 1835px , 754px 1129px , 974px 1350px , 1143px 274px , 392px 682px , 1009px 715px , 1923px 1244px , 760px 1208px , 1272px 760px , 450px 756px , 1798px 1404px , 1400px 1958px , 580px 1530px , 144px 422px , 901px 286px , 1324px 1458px , 772px 1475px , 442px 1991px , 510px 334px , 435px 661px , 810px 607px , 1854px 1666px , 126px 1999px , 1265px 620px , 756px 480px , 628px 1873px , 184px 1570px , 1673px 1712px , 413px 1924px , 1391px 1455px , 1946px 1267px , 996px 1290px , 1918px 1022px , 1497px 1907px , 714px 1378px , 799px 1521px , 1391px 516px , 726px 1800px , 1440px 28px , 50px 1579px , 626px 1882px , 17px 205px , 210px 483px , 464px 1852px , 895px 1995px , 190px 1318px , 474px 1194px , 1762px 1798px , 1597px 438px , 698px 257px , 548px 1385px , 1986px 281px , 313px 91px , 281px 1767px , 395px 1848px , 986px 231px , 1003px 99px , 1781px 1337px , 1803px 785px , 543px 1187px , 1238px 1609px , 1040px 1953px , 575px 356px , 1683px 867px , 1595px 898px , 1987px 634px , 771px 831px , 1422px 237px , 1347px 221px , 1492px 429px , 1783px 1152px , 1741px 623px , 1861px 405px , 202px 770px , 110px 340px , 1392px 826px , 689px 1583px , 1781px 1743px , 44px 814px , 475px 704px , 1787px 1028px , 1271px 329px , 996px 450px , 240px 1308px , 1566px 1176px , 476px 1062px , 1726px 1915px , 825px 280px , 783px 1444px , 1069px 55px , 526px 680px , 868px 512px , 770px 424px , 1374px 697px , 514px 873px , 1061px 1842px , 572px 986px , 1689px 1687px , 1529px 1051px , 530px 299px , 1133px 1437px , 824px 1892px , 1405px 1378px , 757px 1443px , 206px 432px , 103px 365px , 404px 1771px , 1087px 1286px , 713px 1166px , 31px 1893px , 1079px 1539px , 914px 1999px , 1927px 8px , 1702px 1092px , 1458px 54px , 750px 1070px , 1933px 1964px , 999px 348px , 1341px 1076px , 419px 264px , 1172px 908px , 389px 873px , 1114px 1781px , 763px 1439px , 1190px 1123px , 1090px 1312px , 516px 329px , 1897px 1902px , 407px 1609px , 1350px 571px , 1735px 1024px , 1874px 1193px , 653px 1739px , 275px 1391px , 295px 450px , 904px 1735px , 1508px 226px , 1242px 1771px , 1877px 410px , 1403px 664px , 1451px 182px , 1742px 1046px , 1892px 1744px , 1104px 685px , 1546px 479px , 706px 1145px , 1105px 282px , 1334px 1743px , 855px 989px , 851px 1146px , 1492px 388px , 21px 94px , 947px 1596px , 7px 1150px , 1180px 1185px , 599px 510px , 612px 533px , 911px 651px , 1785px 1075px , 494px 64px , 1486px 277px , 679px 854px , 315px 86px , 522px 1389px , 451px 952px , 755px 1581px , 185px 934px , 972px 465px , 1097px 541px , 532px 413px , 376px 1351px , 303px 225px , 1473px 1410px , 838px 593px , 582px 98px , 914px 1506px , 1195px 516px , 1299px 965px , 1042px 1709px , 1048px 916px , 354px 1885px , 1950px 1151px , 1079px 1928px , 348px 1746px , 719px 871px , 352px 571px , 1649px 287px , 289px 1607px , 1586px 1873px , 917px 1444px , 152px 378px , 1157px 74px , 87px 1315px , 105px 789px , 1498px 1353px , 158px 600px , 1417px 1658px , 607px 1832px , 1341px 87px , 786px 1136px , 861px 1108px , 1103px 296px , 1763px 48px , 544px 826px , 34px 1197px , 708px 1821px , 616px 1024px , 275px 303px , 1756px 1349px , 1469px 1735px , 1170px 742px , 989px 124px , 980px 1138px , 95px 528px , 1042px 1395px , 1800px 1428px , 86px 518px , 1063px 1769px , 686px 671px , 1831px 1468px , 560px 344px , 96px 255px , 650px 1319px , 1956px 1466px , 1656px 338px , 378px 1934px , 273px 1975px , 1446px 1692px , 131px 1408px , 208px 940px , 302px 631px , 66px 466px , 1372px 773px , 1613px 1518px , 840px 1743px , 1966px 1712px , 716px 320px , 726px 436px , 362px 1702px , 1751px 224px , 441px 1200px , 43px 1343px , 979px 958px , 1916px 1873px , 1747px 1307px , 419px 957px , 963px 331px , 1117px 855px , 1611px 1642px , 141px 1601px , 1610px 1248px , 1410px 199px , 1829px 660px , 509px 381px , 601px 1725px , 1832px 201px , 1333px 913px , 1937px 638px , 1193px 710px , 80px 1086px , 1639px 1871px , 1654px 730px , 1386px 1915px , 2000px 169px , 1482px 490px , 618px 1773px , 362px 872px , 678px 577px , 86px 1333px , 1758px 1257px , 144px 1508px , 382px 1635px , 1640px 948px , 644px 247px , 321px 724px , 1664px 61px , 1172px 407px , 690px 1060px , 1937px 100px , 1333px 250px , 1783px 900px , 1394px 308px , 1973px 172px , 182px 456px , 1901px 1881px , 767px 402px , 1116px 794px , 438px 1529px , 1969px 1664px , 945px 921px , 1516px 944px , 1904px 1100px , 1459px 1363px , 646px 1639px , 619px 1336px , 854px 16px , 331px 431px , 514px 1055px , 467px 964px , 430px 106px , 693px 1649px , 803px 34px , 1345px 980px , 1783px 1189px , 1375px 938px , 750px 1201px , 5px 1216px , 334px 61px , 442px 1193px , 1449px 1346px , 323px 407px , 189px 1536px , 787px 1841px , 629px 995px , 130px 1704px , 1529px 392px , 1142px 780px , 1851px 409px , 1293px 42px , 1145px 1565px , 334px 1632px , 659px 343px , 1380px 186px , 702px 46px , 947px 1179px; }\n  .parallax #stars2 {\n    width: 2px;\n    height: 2px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 504px 258px , 38px 1863px , 824px 464px , 1067px 619px , 781px 503px , 1145px 877px , 1938px 205px , 1100px 488px , 1157px 397px , 47px 1954px , 1927px 1210px , 493px 926px , 1990px 200px , 798px 41px , 1278px 847px , 627px 130px , 998px 1876px , 803px 197px , 298px 929px , 1460px 869px , 795px 1551px , 224px 1650px , 1851px 22px , 624px 42px , 1252px 1128px , 961px 153px , 261px 679px , 873px 1421px , 786px 1750px , 366px 631px , 1325px 1370px , 708px 182px , 1112px 1274px , 1239px 774px , 1466px 1038px , 1117px 849px , 1635px 638px , 1423px 1541px , 785px 576px , 289px 208px , 315px 1474px , 1514px 286px , 331px 1692px , 200px 1476px , 1425px 424px , 53px 1029px , 887px 208px , 349px 433px , 215px 1472px , 1196px 65px , 1909px 690px , 457px 263px , 1190px 871px , 1439px 1546px , 1894px 1202px , 457px 410px , 1941px 966px , 1049px 632px , 614px 470px , 1219px 1098px , 27px 680px , 114px 667px , 646px 1699px , 548px 24px , 1042px 1866px , 505px 380px , 126px 550px , 647px 1458px , 1026px 148px , 1194px 920px , 1988px 1433px , 1259px 1188px , 998px 1256px , 1616px 18px , 1181px 1147px , 857px 1982px , 1230px 889px , 1557px 474px , 35px 845px , 1722px 1040px , 496px 153px , 1978px 49px , 1554px 1452px , 449px 997px , 876px 294px , 166px 220px , 1493px 685px , 576px 413px , 1348px 1562px , 1994px 1914px , 554px 1665px , 1241px 1515px , 918px 1684px , 945px 1416px , 822px 268px , 8px 1304px , 1332px 189px , 1960px 1851px , 1077px 1295px , 1596px 111px , 102px 1231px , 857px 508px , 1512px 143px , 793px 921px , 330px 1814px , 1520px 1187px , 1412px 290px , 222px 149px , 1975px 1815px , 1358px 439px , 1280px 1442px , 1215px 1647px , 392px 513px , 1370px 1841px , 1770px 1531px , 1099px 793px , 1796px 299px , 940px 478px , 1283px 997px , 740px 1103px , 1793px 399px , 1274px 1732px , 636px 1599px , 1303px 88px , 1737px 1501px , 338px 590px , 1032px 927px , 900px 1786px , 1998px 1462px , 1847px 228px , 1175px 1418px , 1346px 327px , 1753px 793px , 1736px 430px , 1927px 176px , 1452px 1414px , 240px 1925px , 1181px 771px , 994px 687px , 1208px 844px , 627px 930px , 353px 391px , 380px 1053px , 1520px 320px , 213px 1561px , 1581px 298px , 1125px 1619px , 839px 1799px , 1086px 1624px , 1201px 196px , 849px 648px , 1317px 1526px , 792px 684px , 28px 302px , 1544px 1911px , 643px 241px , 1733px 1643px , 444px 1652px , 1283px 1330px , 1321px 623px , 129px 1155px , 1149px 1942px , 1333px 360px , 1212px 937px , 1425px 1751px , 1119px 1975px , 456px 255px , 1410px 1931px , 574px 800px , 188px 165px , 1670px 383px , 233px 488px , 243px 302px , 1037px 1762px , 1003px 1997px , 1964px 895px , 1043px 1941px , 1307px 23px , 298px 1462px , 1297px 1676px , 1835px 1491px , 1125px 1086px , 1918px 856px , 1291px 1590px , 244px 867px , 1335px 1778px , 1574px 184px , 147px 261px , 114px 1013px , 1025px 1899px , 1028px 444px , 923px 924px , 1754px 1551px , 1189px 495px , 609px 1884px , 1436px 1962px , 8px 1732px , 417px 743px , 1694px 192px , 1062px 1561px;\n            box-shadow: 504px 258px , 38px 1863px , 824px 464px , 1067px 619px , 781px 503px , 1145px 877px , 1938px 205px , 1100px 488px , 1157px 397px , 47px 1954px , 1927px 1210px , 493px 926px , 1990px 200px , 798px 41px , 1278px 847px , 627px 130px , 998px 1876px , 803px 197px , 298px 929px , 1460px 869px , 795px 1551px , 224px 1650px , 1851px 22px , 624px 42px , 1252px 1128px , 961px 153px , 261px 679px , 873px 1421px , 786px 1750px , 366px 631px , 1325px 1370px , 708px 182px , 1112px 1274px , 1239px 774px , 1466px 1038px , 1117px 849px , 1635px 638px , 1423px 1541px , 785px 576px , 289px 208px , 315px 1474px , 1514px 286px , 331px 1692px , 200px 1476px , 1425px 424px , 53px 1029px , 887px 208px , 349px 433px , 215px 1472px , 1196px 65px , 1909px 690px , 457px 263px , 1190px 871px , 1439px 1546px , 1894px 1202px , 457px 410px , 1941px 966px , 1049px 632px , 614px 470px , 1219px 1098px , 27px 680px , 114px 667px , 646px 1699px , 548px 24px , 1042px 1866px , 505px 380px , 126px 550px , 647px 1458px , 1026px 148px , 1194px 920px , 1988px 1433px , 1259px 1188px , 998px 1256px , 1616px 18px , 1181px 1147px , 857px 1982px , 1230px 889px , 1557px 474px , 35px 845px , 1722px 1040px , 496px 153px , 1978px 49px , 1554px 1452px , 449px 997px , 876px 294px , 166px 220px , 1493px 685px , 576px 413px , 1348px 1562px , 1994px 1914px , 554px 1665px , 1241px 1515px , 918px 1684px , 945px 1416px , 822px 268px , 8px 1304px , 1332px 189px , 1960px 1851px , 1077px 1295px , 1596px 111px , 102px 1231px , 857px 508px , 1512px 143px , 793px 921px , 330px 1814px , 1520px 1187px , 1412px 290px , 222px 149px , 1975px 1815px , 1358px 439px , 1280px 1442px , 1215px 1647px , 392px 513px , 1370px 1841px , 1770px 1531px , 1099px 793px , 1796px 299px , 940px 478px , 1283px 997px , 740px 1103px , 1793px 399px , 1274px 1732px , 636px 1599px , 1303px 88px , 1737px 1501px , 338px 590px , 1032px 927px , 900px 1786px , 1998px 1462px , 1847px 228px , 1175px 1418px , 1346px 327px , 1753px 793px , 1736px 430px , 1927px 176px , 1452px 1414px , 240px 1925px , 1181px 771px , 994px 687px , 1208px 844px , 627px 930px , 353px 391px , 380px 1053px , 1520px 320px , 213px 1561px , 1581px 298px , 1125px 1619px , 839px 1799px , 1086px 1624px , 1201px 196px , 849px 648px , 1317px 1526px , 792px 684px , 28px 302px , 1544px 1911px , 643px 241px , 1733px 1643px , 444px 1652px , 1283px 1330px , 1321px 623px , 129px 1155px , 1149px 1942px , 1333px 360px , 1212px 937px , 1425px 1751px , 1119px 1975px , 456px 255px , 1410px 1931px , 574px 800px , 188px 165px , 1670px 383px , 233px 488px , 243px 302px , 1037px 1762px , 1003px 1997px , 1964px 895px , 1043px 1941px , 1307px 23px , 298px 1462px , 1297px 1676px , 1835px 1491px , 1125px 1086px , 1918px 856px , 1291px 1590px , 244px 867px , 1335px 1778px , 1574px 184px , 147px 261px , 114px 1013px , 1025px 1899px , 1028px 444px , 923px 924px , 1754px 1551px , 1189px 495px , 609px 1884px , 1436px 1962px , 8px 1732px , 417px 743px , 1694px 192px , 1062px 1561px;\n    -webkit-animation: animStar 100s linear infinite;\n            animation: animStar 100s linear infinite; }\n  .parallax #stars2:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 2px;\n      height: 2px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 504px 258px , 38px 1863px , 824px 464px , 1067px 619px , 781px 503px , 1145px 877px , 1938px 205px , 1100px 488px , 1157px 397px , 47px 1954px , 1927px 1210px , 493px 926px , 1990px 200px , 798px 41px , 1278px 847px , 627px 130px , 998px 1876px , 803px 197px , 298px 929px , 1460px 869px , 795px 1551px , 224px 1650px , 1851px 22px , 624px 42px , 1252px 1128px , 961px 153px , 261px 679px , 873px 1421px , 786px 1750px , 366px 631px , 1325px 1370px , 708px 182px , 1112px 1274px , 1239px 774px , 1466px 1038px , 1117px 849px , 1635px 638px , 1423px 1541px , 785px 576px , 289px 208px , 315px 1474px , 1514px 286px , 331px 1692px , 200px 1476px , 1425px 424px , 53px 1029px , 887px 208px , 349px 433px , 215px 1472px , 1196px 65px , 1909px 690px , 457px 263px , 1190px 871px , 1439px 1546px , 1894px 1202px , 457px 410px , 1941px 966px , 1049px 632px , 614px 470px , 1219px 1098px , 27px 680px , 114px 667px , 646px 1699px , 548px 24px , 1042px 1866px , 505px 380px , 126px 550px , 647px 1458px , 1026px 148px , 1194px 920px , 1988px 1433px , 1259px 1188px , 998px 1256px , 1616px 18px , 1181px 1147px , 857px 1982px , 1230px 889px , 1557px 474px , 35px 845px , 1722px 1040px , 496px 153px , 1978px 49px , 1554px 1452px , 449px 997px , 876px 294px , 166px 220px , 1493px 685px , 576px 413px , 1348px 1562px , 1994px 1914px , 554px 1665px , 1241px 1515px , 918px 1684px , 945px 1416px , 822px 268px , 8px 1304px , 1332px 189px , 1960px 1851px , 1077px 1295px , 1596px 111px , 102px 1231px , 857px 508px , 1512px 143px , 793px 921px , 330px 1814px , 1520px 1187px , 1412px 290px , 222px 149px , 1975px 1815px , 1358px 439px , 1280px 1442px , 1215px 1647px , 392px 513px , 1370px 1841px , 1770px 1531px , 1099px 793px , 1796px 299px , 940px 478px , 1283px 997px , 740px 1103px , 1793px 399px , 1274px 1732px , 636px 1599px , 1303px 88px , 1737px 1501px , 338px 590px , 1032px 927px , 900px 1786px , 1998px 1462px , 1847px 228px , 1175px 1418px , 1346px 327px , 1753px 793px , 1736px 430px , 1927px 176px , 1452px 1414px , 240px 1925px , 1181px 771px , 994px 687px , 1208px 844px , 627px 930px , 353px 391px , 380px 1053px , 1520px 320px , 213px 1561px , 1581px 298px , 1125px 1619px , 839px 1799px , 1086px 1624px , 1201px 196px , 849px 648px , 1317px 1526px , 792px 684px , 28px 302px , 1544px 1911px , 643px 241px , 1733px 1643px , 444px 1652px , 1283px 1330px , 1321px 623px , 129px 1155px , 1149px 1942px , 1333px 360px , 1212px 937px , 1425px 1751px , 1119px 1975px , 456px 255px , 1410px 1931px , 574px 800px , 188px 165px , 1670px 383px , 233px 488px , 243px 302px , 1037px 1762px , 1003px 1997px , 1964px 895px , 1043px 1941px , 1307px 23px , 298px 1462px , 1297px 1676px , 1835px 1491px , 1125px 1086px , 1918px 856px , 1291px 1590px , 244px 867px , 1335px 1778px , 1574px 184px , 147px 261px , 114px 1013px , 1025px 1899px , 1028px 444px , 923px 924px , 1754px 1551px , 1189px 495px , 609px 1884px , 1436px 1962px , 8px 1732px , 417px 743px , 1694px 192px , 1062px 1561px;\n              box-shadow: 504px 258px , 38px 1863px , 824px 464px , 1067px 619px , 781px 503px , 1145px 877px , 1938px 205px , 1100px 488px , 1157px 397px , 47px 1954px , 1927px 1210px , 493px 926px , 1990px 200px , 798px 41px , 1278px 847px , 627px 130px , 998px 1876px , 803px 197px , 298px 929px , 1460px 869px , 795px 1551px , 224px 1650px , 1851px 22px , 624px 42px , 1252px 1128px , 961px 153px , 261px 679px , 873px 1421px , 786px 1750px , 366px 631px , 1325px 1370px , 708px 182px , 1112px 1274px , 1239px 774px , 1466px 1038px , 1117px 849px , 1635px 638px , 1423px 1541px , 785px 576px , 289px 208px , 315px 1474px , 1514px 286px , 331px 1692px , 200px 1476px , 1425px 424px , 53px 1029px , 887px 208px , 349px 433px , 215px 1472px , 1196px 65px , 1909px 690px , 457px 263px , 1190px 871px , 1439px 1546px , 1894px 1202px , 457px 410px , 1941px 966px , 1049px 632px , 614px 470px , 1219px 1098px , 27px 680px , 114px 667px , 646px 1699px , 548px 24px , 1042px 1866px , 505px 380px , 126px 550px , 647px 1458px , 1026px 148px , 1194px 920px , 1988px 1433px , 1259px 1188px , 998px 1256px , 1616px 18px , 1181px 1147px , 857px 1982px , 1230px 889px , 1557px 474px , 35px 845px , 1722px 1040px , 496px 153px , 1978px 49px , 1554px 1452px , 449px 997px , 876px 294px , 166px 220px , 1493px 685px , 576px 413px , 1348px 1562px , 1994px 1914px , 554px 1665px , 1241px 1515px , 918px 1684px , 945px 1416px , 822px 268px , 8px 1304px , 1332px 189px , 1960px 1851px , 1077px 1295px , 1596px 111px , 102px 1231px , 857px 508px , 1512px 143px , 793px 921px , 330px 1814px , 1520px 1187px , 1412px 290px , 222px 149px , 1975px 1815px , 1358px 439px , 1280px 1442px , 1215px 1647px , 392px 513px , 1370px 1841px , 1770px 1531px , 1099px 793px , 1796px 299px , 940px 478px , 1283px 997px , 740px 1103px , 1793px 399px , 1274px 1732px , 636px 1599px , 1303px 88px , 1737px 1501px , 338px 590px , 1032px 927px , 900px 1786px , 1998px 1462px , 1847px 228px , 1175px 1418px , 1346px 327px , 1753px 793px , 1736px 430px , 1927px 176px , 1452px 1414px , 240px 1925px , 1181px 771px , 994px 687px , 1208px 844px , 627px 930px , 353px 391px , 380px 1053px , 1520px 320px , 213px 1561px , 1581px 298px , 1125px 1619px , 839px 1799px , 1086px 1624px , 1201px 196px , 849px 648px , 1317px 1526px , 792px 684px , 28px 302px , 1544px 1911px , 643px 241px , 1733px 1643px , 444px 1652px , 1283px 1330px , 1321px 623px , 129px 1155px , 1149px 1942px , 1333px 360px , 1212px 937px , 1425px 1751px , 1119px 1975px , 456px 255px , 1410px 1931px , 574px 800px , 188px 165px , 1670px 383px , 233px 488px , 243px 302px , 1037px 1762px , 1003px 1997px , 1964px 895px , 1043px 1941px , 1307px 23px , 298px 1462px , 1297px 1676px , 1835px 1491px , 1125px 1086px , 1918px 856px , 1291px 1590px , 244px 867px , 1335px 1778px , 1574px 184px , 147px 261px , 114px 1013px , 1025px 1899px , 1028px 444px , 923px 924px , 1754px 1551px , 1189px 495px , 609px 1884px , 1436px 1962px , 8px 1732px , 417px 743px , 1694px 192px , 1062px 1561px; }\n  .parallax #stars3 {\n    width: 3px;\n    height: 3px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 885px 1266px , 180px 1436px , 1956px 1697px , 1745px 444px , 412px 1256px , 1744px 1586px , 1624px 850px , 1837px 1217px , 229px 317px , 1022px 880px , 834px 1336px , 1363px 608px , 429px 412px , 794px 1774px , 1385px 1672px , 1941px 559px , 1096px 1574px , 748px 1201px , 271px 704px , 1534px 1171px , 1201px 63px , 1101px 1913px , 1255px 1677px , 814px 721px , 1946px 1761px , 638px 1208px , 811px 951px , 1696px 1371px , 409px 1959px , 808px 338px , 1145px 732px , 626px 250px , 1205px 1251px , 1066px 272px , 1180px 1850px , 454px 827px , 1614px 12px , 810px 932px , 1584px 1402px , 110px 1064px , 1345px 1243px , 1887px 1942px , 306px 1123px , 1340px 626px , 999px 463px , 504px 1858px , 1156px 1831px , 1918px 1828px , 739px 88px , 491px 694px , 1832px 480px , 1327px 425px , 1242px 311px , 578px 985px , 1927px 1575px , 1495px 1132px , 325px 1081px , 1225px 732px , 1467px 1527px , 1847px 600px , 1089px 1612px , 1515px 758px , 1334px 1843px , 643px 1105px , 1460px 144px , 1260px 1809px , 1583px 1591px , 959px 104px , 1720px 1456px , 606px 1745px , 324px 97px , 107px 1924px , 1416px 1383px , 295px 1168px , 105px 1361px , 496px 1471px , 1128px 240px , 1086px 1179px , 1886px 39px , 789px 502px , 818px 293px , 807px 868px , 563px 1942px , 1698px 1464px , 1802px 877px , 352px 1978px , 886px 150px , 1224px 1667px , 1711px 1042px , 1246px 1973px , 590px 496px , 1763px 1028px , 418px 1596px , 1994px 1790px , 905px 1573px , 1084px 700px , 1348px 1954px , 1058px 1044px , 192px 1362px , 1818px 1232px;\n            box-shadow: 885px 1266px , 180px 1436px , 1956px 1697px , 1745px 444px , 412px 1256px , 1744px 1586px , 1624px 850px , 1837px 1217px , 229px 317px , 1022px 880px , 834px 1336px , 1363px 608px , 429px 412px , 794px 1774px , 1385px 1672px , 1941px 559px , 1096px 1574px , 748px 1201px , 271px 704px , 1534px 1171px , 1201px 63px , 1101px 1913px , 1255px 1677px , 814px 721px , 1946px 1761px , 638px 1208px , 811px 951px , 1696px 1371px , 409px 1959px , 808px 338px , 1145px 732px , 626px 250px , 1205px 1251px , 1066px 272px , 1180px 1850px , 454px 827px , 1614px 12px , 810px 932px , 1584px 1402px , 110px 1064px , 1345px 1243px , 1887px 1942px , 306px 1123px , 1340px 626px , 999px 463px , 504px 1858px , 1156px 1831px , 1918px 1828px , 739px 88px , 491px 694px , 1832px 480px , 1327px 425px , 1242px 311px , 578px 985px , 1927px 1575px , 1495px 1132px , 325px 1081px , 1225px 732px , 1467px 1527px , 1847px 600px , 1089px 1612px , 1515px 758px , 1334px 1843px , 643px 1105px , 1460px 144px , 1260px 1809px , 1583px 1591px , 959px 104px , 1720px 1456px , 606px 1745px , 324px 97px , 107px 1924px , 1416px 1383px , 295px 1168px , 105px 1361px , 496px 1471px , 1128px 240px , 1086px 1179px , 1886px 39px , 789px 502px , 818px 293px , 807px 868px , 563px 1942px , 1698px 1464px , 1802px 877px , 352px 1978px , 886px 150px , 1224px 1667px , 1711px 1042px , 1246px 1973px , 590px 496px , 1763px 1028px , 418px 1596px , 1994px 1790px , 905px 1573px , 1084px 700px , 1348px 1954px , 1058px 1044px , 192px 1362px , 1818px 1232px;\n    -webkit-animation: animStar 50s linear infinite;\n            animation: animStar 50s linear infinite; }\n  .parallax #stars3:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 3px;\n      height: 3px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 885px 1266px , 180px 1436px , 1956px 1697px , 1745px 444px , 412px 1256px , 1744px 1586px , 1624px 850px , 1837px 1217px , 229px 317px , 1022px 880px , 834px 1336px , 1363px 608px , 429px 412px , 794px 1774px , 1385px 1672px , 1941px 559px , 1096px 1574px , 748px 1201px , 271px 704px , 1534px 1171px , 1201px 63px , 1101px 1913px , 1255px 1677px , 814px 721px , 1946px 1761px , 638px 1208px , 811px 951px , 1696px 1371px , 409px 1959px , 808px 338px , 1145px 732px , 626px 250px , 1205px 1251px , 1066px 272px , 1180px 1850px , 454px 827px , 1614px 12px , 810px 932px , 1584px 1402px , 110px 1064px , 1345px 1243px , 1887px 1942px , 306px 1123px , 1340px 626px , 999px 463px , 504px 1858px , 1156px 1831px , 1918px 1828px , 739px 88px , 491px 694px , 1832px 480px , 1327px 425px , 1242px 311px , 578px 985px , 1927px 1575px , 1495px 1132px , 325px 1081px , 1225px 732px , 1467px 1527px , 1847px 600px , 1089px 1612px , 1515px 758px , 1334px 1843px , 643px 1105px , 1460px 144px , 1260px 1809px , 1583px 1591px , 959px 104px , 1720px 1456px , 606px 1745px , 324px 97px , 107px 1924px , 1416px 1383px , 295px 1168px , 105px 1361px , 496px 1471px , 1128px 240px , 1086px 1179px , 1886px 39px , 789px 502px , 818px 293px , 807px 868px , 563px 1942px , 1698px 1464px , 1802px 877px , 352px 1978px , 886px 150px , 1224px 1667px , 1711px 1042px , 1246px 1973px , 590px 496px , 1763px 1028px , 418px 1596px , 1994px 1790px , 905px 1573px , 1084px 700px , 1348px 1954px , 1058px 1044px , 192px 1362px , 1818px 1232px;\n              box-shadow: 885px 1266px , 180px 1436px , 1956px 1697px , 1745px 444px , 412px 1256px , 1744px 1586px , 1624px 850px , 1837px 1217px , 229px 317px , 1022px 880px , 834px 1336px , 1363px 608px , 429px 412px , 794px 1774px , 1385px 1672px , 1941px 559px , 1096px 1574px , 748px 1201px , 271px 704px , 1534px 1171px , 1201px 63px , 1101px 1913px , 1255px 1677px , 814px 721px , 1946px 1761px , 638px 1208px , 811px 951px , 1696px 1371px , 409px 1959px , 808px 338px , 1145px 732px , 626px 250px , 1205px 1251px , 1066px 272px , 1180px 1850px , 454px 827px , 1614px 12px , 810px 932px , 1584px 1402px , 110px 1064px , 1345px 1243px , 1887px 1942px , 306px 1123px , 1340px 626px , 999px 463px , 504px 1858px , 1156px 1831px , 1918px 1828px , 739px 88px , 491px 694px , 1832px 480px , 1327px 425px , 1242px 311px , 578px 985px , 1927px 1575px , 1495px 1132px , 325px 1081px , 1225px 732px , 1467px 1527px , 1847px 600px , 1089px 1612px , 1515px 758px , 1334px 1843px , 643px 1105px , 1460px 144px , 1260px 1809px , 1583px 1591px , 959px 104px , 1720px 1456px , 606px 1745px , 324px 97px , 107px 1924px , 1416px 1383px , 295px 1168px , 105px 1361px , 496px 1471px , 1128px 240px , 1086px 1179px , 1886px 39px , 789px 502px , 818px 293px , 807px 868px , 563px 1942px , 1698px 1464px , 1802px 877px , 352px 1978px , 886px 150px , 1224px 1667px , 1711px 1042px , 1246px 1973px , 590px 496px , 1763px 1028px , 418px 1596px , 1994px 1790px , 905px 1573px , 1084px 700px , 1348px 1954px , 1058px 1044px , 192px 1362px , 1818px 1232px; }\n  @-webkit-keyframes animStar {\n  from {\n    -webkit-transform: translateY(-2000px);\n            transform: translateY(-2000px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n  @keyframes animStar {\n  from {\n    -webkit-transform: translateY(-2000px);\n            transform: translateY(-2000px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n  @media only screen and (max-width: 680px) {\n  .parallax {\n    height: 120vw; } }\n"

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

module.exports = "<div class=\"about-container\">\n  <h1  [ngStyle]=\"{'color':themeData.colorPrimary}\">About</h1>\n  <p [ngStyle]=\"{'color':themeData.textPrimary}\">\n    I'm a <b [ngStyle]=\"{'background':themeData.colorHighlight}\"> Web Designer & Developer</b> with passion for coding and design.\n    I have over 1 year professional experience as a Web Developer developing desktop and web applications.\n    <br><br>\n    Lately I'm focusing on <b [ngStyle]=\"{'background':themeData.colorHighlight}\">Front-end web development</b> and learning about the latest frameworks like Vue and React.\n    When I'm not coding, I try to do some design work and sports. \n    <br><br>\n    I Made this Website without using any  <b [ngStyle]=\"{'background':themeData.colorHighlight}\" >UI Library/Framework </b>\n    (expect Angular :-P) and was really fun all the way.\n    <br>\n  </p>\n    <div class=\"kudos\"  [ngStyle]=\"{ 'color': themeData.colorPrimary }\">\n      Kudos for Me!\n      <br>\n      \\ (•◡•) /\n    </div>\n    <div class=\"bottom-nav\" [ngStyle]=\"{ 'color': themeData.colorPrimary }\">\n        <div class=\"scroll-text\">See My Work!</div>\n        <button class=\"fas fa-chevron-down fa-2x\" href=\"#\"></button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ".about-container {\n  padding: 5vh 30vh 10vh 30vh; }\n  .about-container h1 {\n    font-size: 9vh;\n    font-weight: 800; }\n  .about-container b {\n    font-weight: 100;\n    padding: 1px; }\n  .about-container .kudos {\n    font-size: 30px;\n    padding-top: 10vh;\n    text-align: center; }\n  .about-container .bottom-nav {\n    text-align: center;\n    padding-top: 18vh;\n    padding-bottom: 3vh;\n    font-size: 10px;\n    -webkit-animation: bounce 1.4s infinite ease-in-out;\n            animation: bounce 1.4s infinite ease-in-out; }\n  @media only screen and (max-width: 600px) {\n  .about-container {\n    padding: 5vh 4vh; }\n    .about-container h1 {\n      font-size: 7vh; }\n    .about-container .kudos {\n      padding-top: 0; }\n    .about-container .bottom-nav {\n      padding-top: 5.5vh; } }\n"

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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], AboutComponent.prototype, "themeData", void 0);
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

module.exports = "<div [ngStyle]=\"{'color':themeData.colorPrimary}\" class=\"landing-container\">\n  <h1>Hello, I'm Nikhil!</h1>\n  <span>Full Stack Dev | Open Source Enthusiast | Gamer</span>\n  <div class=\"icons\">\n\n    <a  href=\"https://github.com/nikhilkadyan\"\n        [ngStyle]=\"{'color':themeData.colorPrimary}\">\n      <i class=\"fab fa-github\"></i>\n    </a>\n      \n    <a  href=\"https://twitter.com/kadyanikhil\"\n        [ngStyle]=\"{'color':themeData.colorPrimary}\">\n      <i class=\"fab fa-twitter\"></i>\n    </a>\n\n    <a  href=\"https://www.instagram.com/nikhil_kadyan_/\"\n        [ngStyle]=\"{'color':themeData.colorPrimary}\">\n      <i class=\"fab fa-instagram\"></i>\n    </a>\n\n    <a  href=\"https://in.linkedin.com/in/nikhil-kadyan-4a6374134\"\n        [ngStyle]=\"{'color':themeData.colorPrimary}\">\n      <i class=\"fab fa-linkedin\"></i>\n    </a>\n  </div>\n\n  <div class=\"bottom-nav\" [ngStyle]=\"{ 'color': themeData.colorPrimary }\">\n      <div class=\"scroll-text\">About Me</div>\n      <button class=\"fas fa-chevron-down fa-2x\" href=\"#\"></button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Yeon+Sung\");\n.landing-container {\n  font-family: 'Yeon Sung', cursive;\n  text-align: center;\n  padding-top: 18vh; }\n.landing-container h1 {\n    font-size: 11vh; }\n.landing-container span {\n    font-size: 3.4vh; }\n.landing-container .icons {\n    padding-top: 5vh;\n    font-size: 8vh; }\n.landing-container .icons a {\n      text-decoration: none;\n      padding: 0 5px; }\n.landing-container .bottom-nav {\n    padding-top: 23vh;\n    padding-bottom: 3vh;\n    font-size: 12px;\n    -webkit-animation: bounce 1.4s infinite ease-in-out;\n            animation: bounce 1.4s infinite ease-in-out; }\n@-webkit-keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); } }\n@keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); } }\n@media only screen and (max-width: 600px) {\n  .landing-container {\n    padding: 30vh 5px 0 5px;\n    font-size: 18px; }\n    .landing-container h1 {\n      font-size: 7vh; }\n    .landing-container span {\n      font-size: 2.4vh; }\n  .bottom-nav {\n    padding-top: 19vh; } }\n"

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

module.exports = "<div class=\"portfolio-container\">\n  <h1 [ngStyle]=\"{'color':themeData.colorPrimary}\">Portfolio</h1>\n  <div class=\"portfolio-item-wrapper\">\n    \n    <div class=\"portfolio-item\"[ngStyle]=\"{'background':themeData.colorPrimary, 'color': themeData.textAlternate}\">\n      <h2>My Portfolio</h2>\n      <p>The Current Website You Are Viewing.</p>\n      <a href=\"https://www.nikhilkadyan.com\"  target=\"_blank\"\n        [ngStyle]=\"{'background':themeData.textAlternate, 'color': themeData.colorPrimary, 'border-color':themeData.textAlternate }\">View</a>\n    </div>\n\n    <div class=\"portfolio-item\"  [ngStyle]=\"{'background':themeData.colorPrimary, 'color': themeData.textAlternate}\">\n      <h2>Textile Designs</h2>\n      <p>A business portfolio webapp made with several plugins.</p>\n      <a href=\"https://textiledesigns.de\"   target=\"_blank\"\n        [ngStyle]=\"{'background':themeData.textAlternate, 'color': themeData.colorPrimary, 'border-color':themeData.textAlternate }\">View</a>\n    </div>\n\n    <div class=\"portfolio-item\"  [ngStyle]=\"{'background':themeData.colorPrimary, 'color': themeData.textAlternate}\">\n      <h2>Adarsh Textiles</h2>\n      <p>A Simple Website made with Wordpress.</p>\n      <a href=\"http://adarshtextiles.com\"   target=\"_blank\"\n        [ngStyle]=\"{'background':themeData.textAlternate, 'color': themeData.colorPrimary, 'border-color':themeData.textAlternate }\">View</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.component.scss":
/***/ (function(module, exports) {

module.exports = ".portfolio-container {\n  padding: 0vh 30vh 33vh 30vh;\n  text-align: center; }\n  .portfolio-container h1 {\n    font-size: 9vh;\n    font-weight: 800; }\n  .portfolio-container .portfolio-item-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    overflow: hidden; }\n  .portfolio-container .portfolio-item-wrapper .portfolio-item {\n      text-align: center;\n      width: 32%;\n      margin: 3px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 20px;\n      border-radius: 3px; }\n  .portfolio-container .portfolio-item-wrapper .portfolio-item h2 {\n        margin-top: -1vh; }\n  .portfolio-container .portfolio-item-wrapper .portfolio-item a {\n        text-decoration: none;\n        border: 1px solid;\n        border-radius: 5px;\n        padding: 5px 15px;\n        font-size: 18px; }\n  @media only screen and (max-width: 600px) {\n  .portfolio-container {\n    padding: 0 2vh 2vh 2vh; }\n  .portfolio-item {\n    min-width: 100% !important; } }\n"

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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], PortfolioComponent.prototype, "themeData", void 0);
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