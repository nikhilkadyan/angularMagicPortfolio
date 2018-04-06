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

module.exports = "<nav [ngStyle]=\"{'color':themeData.colorPrimary, 'background': themeData.navAlpha}\"> \n  <span (click)=\"newTheme()\" class=\"themeChange\">\n    <i class=\"fas fa-edit\"></i>Click Me\n  </span>\n  <div class=\"menu\">\n    <span class=\"menu_item\" [ngStyle]=\"{'color':themeData.colorPrimary}\">Howdy!</span>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = "nav {\n  width: 100%;\n  top: 0;\n  left: 0;\n  padding: 0 5px;\n  position: fixed; }\n  nav .themeChange {\n    float: left;\n    font-size: 5vh;\n    margin-top: -3px;\n    -webkit-animation: 0.8s bounce-xy infinite;\n            animation: 0.8s bounce-xy infinite; }\n  nav .themeChange:hover {\n      cursor: pointer; }\n  nav .menu_item {\n    float: right;\n    margin: 0px 10px 5px 20px;\n    padding: 4px 2px 7px 2px;\n    font-size: 22px; }\n  nav .menu_item:hover {\n      border-bottom: 1px solid; }\n  @-webkit-keyframes bounce-xy {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0) translateX(0);\n            transform: translateY(0) translateX(0); }\n  40% {\n    -webkit-transform: translateX(15px);\n            transform: translateX(15px); }\n  60% {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px); } }\n  @keyframes bounce-xy {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0) translateX(0);\n            transform: translateY(0) translateX(0); }\n  40% {\n    -webkit-transform: translateX(15px);\n            transform: translateX(15px); }\n  60% {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px); } }\n"

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

module.exports = ".parallax {\n  position: fixed;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  width: calc(100vw - 0.0001px);\n  min-height: 100%;\n  height: auto; }\n  .parallax #stars1 {\n    width: 1px;\n    height: 1px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 1869px 563px , 129px 28px , 965px 43px , 1415px 359px , 1204px 1238px , 1730px 355px , 1973px 1931px , 810px 882px , 1255px 1273px , 1198px 854px , 400px 1210px , 71px 1092px , 407px 1633px , 1793px 1401px , 1794px 484px , 340px 1530px , 1373px 1860px , 1240px 300px , 1329px 433px , 1072px 1324px , 1374px 438px , 757px 497px , 268px 1110px , 826px 539px , 248px 1577px , 768px 1468px , 110px 1899px , 237px 759px , 122px 401px , 347px 1883px , 270px 1905px , 280px 716px , 1363px 1819px , 1566px 1075px , 844px 305px , 384px 759px , 858px 1958px , 224px 1498px , 318px 868px , 356px 899px , 590px 1704px , 697px 888px , 1105px 1384px , 799px 758px , 807px 684px , 182px 1513px , 1253px 1243px , 964px 179px , 380px 772px , 959px 1188px , 73px 1848px , 396px 426px , 454px 1349px , 1232px 1323px , 1760px 1604px , 1557px 917px , 811px 1021px , 389px 1709px , 278px 1386px , 947px 131px , 600px 1713px , 983px 1570px , 1642px 992px , 168px 137px , 1676px 1800px , 1805px 770px , 217px 1661px , 725px 1594px , 1159px 1711px , 218px 805px , 1650px 1343px , 1015px 1953px , 1197px 836px , 1849px 1618px , 887px 848px , 1488px 263px , 11px 1236px , 1850px 1109px , 27px 1089px , 1931px 712px , 1200px 1554px , 938px 1620px , 1473px 186px , 1442px 1155px , 1647px 1081px , 1276px 661px , 1708px 361px , 1775px 1377px , 747px 549px , 752px 534px , 1551px 1863px , 1691px 129px , 1241px 859px , 1307px 219px , 1648px 1237px , 543px 950px , 1911px 787px , 1542px 1752px , 1975px 888px , 1003px 1483px , 1461px 47px , 650px 440px , 1810px 1954px , 349px 277px , 837px 1691px , 1833px 378px , 1692px 167px , 1371px 80px , 507px 145px , 228px 780px , 933px 69px , 748px 1257px , 241px 955px , 752px 1998px , 375px 927px , 1649px 1935px , 1438px 198px , 444px 1580px , 608px 1363px , 397px 560px , 758px 1611px , 790px 627px , 1519px 148px , 1529px 867px , 732px 1395px , 145px 1103px , 1572px 1273px , 1431px 160px , 381px 1349px , 1448px 382px , 521px 986px , 878px 857px , 871px 1806px , 343px 1293px , 129px 1247px , 401px 1735px , 291px 1313px , 60px 1116px , 1406px 769px , 26px 611px , 333px 1582px , 1723px 344px , 630px 934px , 532px 911px , 1278px 194px , 1066px 798px , 1126px 1732px , 1533px 1378px , 1412px 784px , 600px 1052px , 1138px 1696px , 489px 1877px , 1142px 187px , 1898px 351px , 500px 1613px , 1250px 602px , 752px 1949px , 1442px 483px , 603px 1991px , 1446px 1309px , 248px 1243px , 1694px 134px , 1051px 880px , 970px 31px , 1657px 1597px , 1371px 1469px , 543px 1832px , 1903px 1637px , 342px 471px , 1298px 1799px , 1544px 890px , 1451px 995px , 632px 478px , 750px 1127px , 1236px 978px , 1089px 1642px , 1376px 1838px , 414px 47px , 1793px 1110px , 1086px 1553px , 600px 811px , 746px 783px , 1859px 771px , 1126px 1608px , 122px 1230px , 860px 1654px , 1469px 1735px , 956px 1136px , 553px 329px , 743px 536px , 1898px 1660px , 260px 1405px , 1315px 1625px , 1519px 1287px , 1762px 1707px , 1797px 1150px , 1819px 1103px , 986px 1789px , 269px 565px , 362px 508px , 1227px 1700px , 1880px 933px , 1034px 290px , 84px 513px , 603px 1622px , 1168px 1832px , 979px 352px , 1058px 747px , 70px 1286px , 1176px 989px , 479px 1946px , 486px 1064px , 600px 1578px , 1026px 984px , 1054px 993px , 181px 1844px , 1516px 1029px , 1110px 1886px , 747px 941px , 730px 224px , 1915px 1133px , 1341px 1966px , 888px 825px , 486px 1101px , 819px 1957px , 1820px 1660px , 826px 1413px , 1299px 575px , 86px 20px , 26px 1093px , 1042px 1367px , 154px 185px , 585px 368px , 1474px 1188px , 1690px 1193px , 1943px 1611px , 770px 1102px , 71px 1543px , 206px 1644px , 1889px 1456px , 1489px 377px , 83px 347px , 261px 1432px , 417px 471px , 544px 715px , 1882px 1133px , 725px 1044px , 1714px 467px , 144px 775px , 1138px 847px , 559px 1022px , 1650px 1395px , 1422px 1676px , 673px 1386px , 938px 1064px , 1754px 379px , 917px 703px , 1291px 332px , 1877px 708px , 1077px 395px , 1695px 1543px , 523px 908px , 283px 1685px , 718px 860px , 1107px 1538px , 1986px 1976px , 710px 585px , 1816px 1005px , 188px 1218px , 295px 974px , 48px 509px , 688px 829px , 1353px 1567px , 1701px 1312px , 1609px 1844px , 317px 1023px , 891px 1541px , 839px 963px , 30px 1390px , 1942px 1842px , 63px 1753px , 536px 158px , 1116px 604px , 1177px 368px , 825px 1145px , 1256px 457px , 1539px 270px , 1481px 396px , 1397px 1179px , 907px 1638px , 33px 168px , 861px 1201px , 767px 405px , 626px 1695px , 1408px 1961px , 1414px 641px , 933px 84px , 926px 791px , 165px 1225px , 1781px 425px , 523px 1389px , 1730px 448px , 159px 71px , 1171px 773px , 1436px 1070px , 314px 449px , 1724px 476px , 93px 1249px , 665px 717px , 1445px 1430px , 1507px 1805px , 1801px 1330px , 707px 722px , 1901px 1486px , 235px 1674px , 1390px 290px , 832px 523px , 448px 1047px , 1930px 945px , 496px 1424px , 631px 288px , 1868px 422px , 1698px 629px , 704px 285px , 1889px 1795px , 1052px 1661px , 1932px 1498px , 1863px 1086px , 786px 1393px , 1639px 975px , 347px 1942px , 246px 113px , 1349px 1612px , 1672px 424px , 41px 1270px , 1140px 594px , 1048px 560px , 1627px 1079px , 143px 1892px , 1314px 1950px , 1166px 1362px , 1498px 531px , 1040px 93px , 1945px 986px , 1811px 1814px , 330px 1581px , 1639px 1433px , 1053px 5px , 1121px 1640px , 1924px 434px , 438px 1206px , 1100px 952px , 1568px 155px , 1050px 540px , 533px 1399px , 750px 1393px , 1939px 1444px , 1691px 1804px , 996px 253px , 833px 1603px , 1962px 677px , 882px 42px , 1779px 1815px , 464px 1520px , 1869px 1358px , 885px 39px , 320px 738px , 1888px 1788px , 1317px 868px , 782px 507px , 873px 1606px , 1951px 656px , 167px 377px , 301px 1955px , 1848px 225px , 344px 1207px , 1919px 24px , 1161px 1666px , 41px 181px , 642px 736px , 7px 1779px , 1933px 805px , 1371px 903px , 1384px 814px , 1040px 750px , 269px 1709px , 1796px 272px , 1929px 649px , 931px 270px , 1565px 723px , 1198px 80px , 945px 1821px , 1534px 228px , 952px 623px , 1977px 1343px , 421px 181px , 1437px 90px , 1324px 1099px , 798px 477px , 185px 446px , 772px 556px , 1504px 1015px , 759px 334px , 1895px 1351px , 112px 1032px , 1028px 1741px , 1293px 914px , 1947px 583px , 1418px 942px , 1562px 425px , 64px 202px , 1081px 1349px , 813px 385px , 1126px 378px , 1634px 681px , 277px 402px , 267px 1872px , 742px 146px , 384px 827px , 964px 221px , 300px 136px , 1611px 174px , 80px 1795px , 1366px 1590px , 1251px 1781px , 1111px 599px , 1995px 671px , 559px 731px , 974px 941px , 1553px 1034px , 33px 894px , 591px 561px , 1562px 340px , 909px 495px , 1649px 1387px , 1196px 1409px , 1702px 484px , 933px 968px , 1197px 184px , 478px 214px , 1789px 1985px , 1755px 1600px , 1758px 618px , 339px 300px , 191px 151px , 1426px 690px , 1690px 549px , 474px 1695px , 1580px 503px , 1432px 690px , 801px 118px , 230px 726px , 1210px 476px , 883px 46px , 398px 1997px , 1108px 1580px , 1666px 1729px , 1830px 1944px , 1443px 1785px , 1690px 469px , 824px 1616px , 1315px 836px , 890px 673px , 1874px 1061px , 230px 934px , 745px 915px , 695px 1549px , 901px 1391px , 1135px 1362px , 591px 648px , 1963px 1416px , 707px 1263px , 685px 783px , 1914px 842px , 1543px 634px , 1945px 1425px , 319px 126px , 10px 1255px , 1091px 810px , 1731px 189px , 1395px 688px , 1813px 1685px , 1209px 1593px , 1660px 1777px , 1539px 145px , 507px 1143px , 1542px 110px , 1074px 850px , 1300px 68px , 1212px 1210px , 880px 650px , 53px 1534px , 930px 149px , 1731px 1176px , 1846px 1770px , 1769px 1549px , 1432px 104px , 556px 1633px , 1297px 1730px , 1204px 1151px , 171px 1836px , 1980px 600px , 1253px 153px , 1748px 15px , 1819px 1474px , 1075px 1342px , 1146px 477px , 1044px 1385px , 425px 1575px , 926px 1053px , 720px 31px , 242px 1544px , 403px 279px , 1467px 1325px , 572px 1108px , 360px 202px , 765px 1317px , 1271px 249px , 56px 2px , 1266px 276px , 481px 1803px , 1401px 209px , 808px 1816px , 1581px 1439px , 1603px 1854px , 262px 35px , 947px 1239px , 1487px 1839px , 913px 216px , 1191px 1990px , 1126px 1608px , 1370px 1428px , 85px 580px , 1403px 679px , 1075px 420px , 747px 877px , 453px 489px , 299px 766px , 1913px 1450px , 745px 1292px , 1543px 1047px , 1882px 1836px , 1643px 1058px , 996px 1613px , 1159px 787px , 1568px 834px , 1808px 846px , 1311px 581px , 1298px 1482px , 1012px 1240px , 1513px 1084px , 1684px 506px , 690px 1540px , 602px 1671px , 1730px 1042px , 1259px 1123px , 1617px 1660px , 1613px 1029px , 294px 1462px , 1496px 1552px , 218px 920px , 608px 1142px , 494px 247px , 148px 206px , 147px 1284px , 979px 588px , 286px 1652px , 1659px 284px , 1333px 184px , 851px 452px , 595px 802px , 17px 1868px , 689px 45px , 1598px 406px , 941px 199px , 191px 409px , 1927px 508px , 883px 502px , 307px 245px , 1141px 164px , 1970px 1986px , 768px 846px , 668px 50px , 302px 1760px , 1521px 713px , 440px 94px , 1120px 1631px , 1265px 356px , 1790px 1705px , 1863px 1295px , 61px 1621px , 173px 1187px , 1998px 334px , 859px 1718px , 872px 1895px , 348px 230px , 563px 236px , 923px 1183px , 1004px 510px , 1464px 595px , 894px 856px , 349px 924px , 704px 468px , 1496px 554px , 1372px 710px , 254px 1469px , 535px 1875px , 334px 344px , 807px 340px , 154px 1597px , 182px 1727px , 1838px 679px , 1896px 643px , 1630px 369px , 1647px 1799px , 714px 1915px , 1355px 382px , 1955px 401px , 263px 1164px , 231px 481px , 1543px 945px , 549px 1018px , 359px 1573px , 179px 595px , 1860px 348px , 796px 1134px , 575px 1463px , 1596px 1079px , 298px 141px , 108px 76px , 631px 1158px , 1552px 1122px , 1898px 190px , 568px 1123px , 526px 946px , 1970px 1723px , 6px 409px , 509px 1718px , 109px 559px , 273px 368px , 1122px 573px , 1321px 1093px , 620px 1900px , 1352px 880px , 337px 110px , 881px 1167px , 1483px 1161px , 172px 1611px , 1315px 310px , 1078px 1869px , 1243px 1217px , 780px 1373px , 589px 560px , 291px 334px , 1856px 799px , 95px 1797px , 741px 1219px , 1070px 9px , 1355px 1158px , 492px 648px , 376px 244px , 190px 638px , 553px 1522px , 783px 384px , 1872px 1604px , 1402px 1792px , 149px 1279px , 1472px 850px , 689px 108px , 51px 112px , 622px 1168px , 1042px 924px , 1228px 580px , 467px 211px , 1898px 895px , 640px 1341px , 1788px 1649px , 1134px 1503px , 842px 218px , 319px 1647px , 733px 1545px , 1357px 79px , 1652px 1246px , 1789px 1034px , 1934px 517px , 1200px 331px , 1415px 1961px , 191px 77px , 260px 12px , 1717px 167px , 1273px 994px , 311px 1826px , 1688px 392px , 735px 1323px , 405px 1421px , 128px 1429px , 841px 101px , 697px 198px , 591px 1990px , 424px 1266px;\n            box-shadow: 1869px 563px , 129px 28px , 965px 43px , 1415px 359px , 1204px 1238px , 1730px 355px , 1973px 1931px , 810px 882px , 1255px 1273px , 1198px 854px , 400px 1210px , 71px 1092px , 407px 1633px , 1793px 1401px , 1794px 484px , 340px 1530px , 1373px 1860px , 1240px 300px , 1329px 433px , 1072px 1324px , 1374px 438px , 757px 497px , 268px 1110px , 826px 539px , 248px 1577px , 768px 1468px , 110px 1899px , 237px 759px , 122px 401px , 347px 1883px , 270px 1905px , 280px 716px , 1363px 1819px , 1566px 1075px , 844px 305px , 384px 759px , 858px 1958px , 224px 1498px , 318px 868px , 356px 899px , 590px 1704px , 697px 888px , 1105px 1384px , 799px 758px , 807px 684px , 182px 1513px , 1253px 1243px , 964px 179px , 380px 772px , 959px 1188px , 73px 1848px , 396px 426px , 454px 1349px , 1232px 1323px , 1760px 1604px , 1557px 917px , 811px 1021px , 389px 1709px , 278px 1386px , 947px 131px , 600px 1713px , 983px 1570px , 1642px 992px , 168px 137px , 1676px 1800px , 1805px 770px , 217px 1661px , 725px 1594px , 1159px 1711px , 218px 805px , 1650px 1343px , 1015px 1953px , 1197px 836px , 1849px 1618px , 887px 848px , 1488px 263px , 11px 1236px , 1850px 1109px , 27px 1089px , 1931px 712px , 1200px 1554px , 938px 1620px , 1473px 186px , 1442px 1155px , 1647px 1081px , 1276px 661px , 1708px 361px , 1775px 1377px , 747px 549px , 752px 534px , 1551px 1863px , 1691px 129px , 1241px 859px , 1307px 219px , 1648px 1237px , 543px 950px , 1911px 787px , 1542px 1752px , 1975px 888px , 1003px 1483px , 1461px 47px , 650px 440px , 1810px 1954px , 349px 277px , 837px 1691px , 1833px 378px , 1692px 167px , 1371px 80px , 507px 145px , 228px 780px , 933px 69px , 748px 1257px , 241px 955px , 752px 1998px , 375px 927px , 1649px 1935px , 1438px 198px , 444px 1580px , 608px 1363px , 397px 560px , 758px 1611px , 790px 627px , 1519px 148px , 1529px 867px , 732px 1395px , 145px 1103px , 1572px 1273px , 1431px 160px , 381px 1349px , 1448px 382px , 521px 986px , 878px 857px , 871px 1806px , 343px 1293px , 129px 1247px , 401px 1735px , 291px 1313px , 60px 1116px , 1406px 769px , 26px 611px , 333px 1582px , 1723px 344px , 630px 934px , 532px 911px , 1278px 194px , 1066px 798px , 1126px 1732px , 1533px 1378px , 1412px 784px , 600px 1052px , 1138px 1696px , 489px 1877px , 1142px 187px , 1898px 351px , 500px 1613px , 1250px 602px , 752px 1949px , 1442px 483px , 603px 1991px , 1446px 1309px , 248px 1243px , 1694px 134px , 1051px 880px , 970px 31px , 1657px 1597px , 1371px 1469px , 543px 1832px , 1903px 1637px , 342px 471px , 1298px 1799px , 1544px 890px , 1451px 995px , 632px 478px , 750px 1127px , 1236px 978px , 1089px 1642px , 1376px 1838px , 414px 47px , 1793px 1110px , 1086px 1553px , 600px 811px , 746px 783px , 1859px 771px , 1126px 1608px , 122px 1230px , 860px 1654px , 1469px 1735px , 956px 1136px , 553px 329px , 743px 536px , 1898px 1660px , 260px 1405px , 1315px 1625px , 1519px 1287px , 1762px 1707px , 1797px 1150px , 1819px 1103px , 986px 1789px , 269px 565px , 362px 508px , 1227px 1700px , 1880px 933px , 1034px 290px , 84px 513px , 603px 1622px , 1168px 1832px , 979px 352px , 1058px 747px , 70px 1286px , 1176px 989px , 479px 1946px , 486px 1064px , 600px 1578px , 1026px 984px , 1054px 993px , 181px 1844px , 1516px 1029px , 1110px 1886px , 747px 941px , 730px 224px , 1915px 1133px , 1341px 1966px , 888px 825px , 486px 1101px , 819px 1957px , 1820px 1660px , 826px 1413px , 1299px 575px , 86px 20px , 26px 1093px , 1042px 1367px , 154px 185px , 585px 368px , 1474px 1188px , 1690px 1193px , 1943px 1611px , 770px 1102px , 71px 1543px , 206px 1644px , 1889px 1456px , 1489px 377px , 83px 347px , 261px 1432px , 417px 471px , 544px 715px , 1882px 1133px , 725px 1044px , 1714px 467px , 144px 775px , 1138px 847px , 559px 1022px , 1650px 1395px , 1422px 1676px , 673px 1386px , 938px 1064px , 1754px 379px , 917px 703px , 1291px 332px , 1877px 708px , 1077px 395px , 1695px 1543px , 523px 908px , 283px 1685px , 718px 860px , 1107px 1538px , 1986px 1976px , 710px 585px , 1816px 1005px , 188px 1218px , 295px 974px , 48px 509px , 688px 829px , 1353px 1567px , 1701px 1312px , 1609px 1844px , 317px 1023px , 891px 1541px , 839px 963px , 30px 1390px , 1942px 1842px , 63px 1753px , 536px 158px , 1116px 604px , 1177px 368px , 825px 1145px , 1256px 457px , 1539px 270px , 1481px 396px , 1397px 1179px , 907px 1638px , 33px 168px , 861px 1201px , 767px 405px , 626px 1695px , 1408px 1961px , 1414px 641px , 933px 84px , 926px 791px , 165px 1225px , 1781px 425px , 523px 1389px , 1730px 448px , 159px 71px , 1171px 773px , 1436px 1070px , 314px 449px , 1724px 476px , 93px 1249px , 665px 717px , 1445px 1430px , 1507px 1805px , 1801px 1330px , 707px 722px , 1901px 1486px , 235px 1674px , 1390px 290px , 832px 523px , 448px 1047px , 1930px 945px , 496px 1424px , 631px 288px , 1868px 422px , 1698px 629px , 704px 285px , 1889px 1795px , 1052px 1661px , 1932px 1498px , 1863px 1086px , 786px 1393px , 1639px 975px , 347px 1942px , 246px 113px , 1349px 1612px , 1672px 424px , 41px 1270px , 1140px 594px , 1048px 560px , 1627px 1079px , 143px 1892px , 1314px 1950px , 1166px 1362px , 1498px 531px , 1040px 93px , 1945px 986px , 1811px 1814px , 330px 1581px , 1639px 1433px , 1053px 5px , 1121px 1640px , 1924px 434px , 438px 1206px , 1100px 952px , 1568px 155px , 1050px 540px , 533px 1399px , 750px 1393px , 1939px 1444px , 1691px 1804px , 996px 253px , 833px 1603px , 1962px 677px , 882px 42px , 1779px 1815px , 464px 1520px , 1869px 1358px , 885px 39px , 320px 738px , 1888px 1788px , 1317px 868px , 782px 507px , 873px 1606px , 1951px 656px , 167px 377px , 301px 1955px , 1848px 225px , 344px 1207px , 1919px 24px , 1161px 1666px , 41px 181px , 642px 736px , 7px 1779px , 1933px 805px , 1371px 903px , 1384px 814px , 1040px 750px , 269px 1709px , 1796px 272px , 1929px 649px , 931px 270px , 1565px 723px , 1198px 80px , 945px 1821px , 1534px 228px , 952px 623px , 1977px 1343px , 421px 181px , 1437px 90px , 1324px 1099px , 798px 477px , 185px 446px , 772px 556px , 1504px 1015px , 759px 334px , 1895px 1351px , 112px 1032px , 1028px 1741px , 1293px 914px , 1947px 583px , 1418px 942px , 1562px 425px , 64px 202px , 1081px 1349px , 813px 385px , 1126px 378px , 1634px 681px , 277px 402px , 267px 1872px , 742px 146px , 384px 827px , 964px 221px , 300px 136px , 1611px 174px , 80px 1795px , 1366px 1590px , 1251px 1781px , 1111px 599px , 1995px 671px , 559px 731px , 974px 941px , 1553px 1034px , 33px 894px , 591px 561px , 1562px 340px , 909px 495px , 1649px 1387px , 1196px 1409px , 1702px 484px , 933px 968px , 1197px 184px , 478px 214px , 1789px 1985px , 1755px 1600px , 1758px 618px , 339px 300px , 191px 151px , 1426px 690px , 1690px 549px , 474px 1695px , 1580px 503px , 1432px 690px , 801px 118px , 230px 726px , 1210px 476px , 883px 46px , 398px 1997px , 1108px 1580px , 1666px 1729px , 1830px 1944px , 1443px 1785px , 1690px 469px , 824px 1616px , 1315px 836px , 890px 673px , 1874px 1061px , 230px 934px , 745px 915px , 695px 1549px , 901px 1391px , 1135px 1362px , 591px 648px , 1963px 1416px , 707px 1263px , 685px 783px , 1914px 842px , 1543px 634px , 1945px 1425px , 319px 126px , 10px 1255px , 1091px 810px , 1731px 189px , 1395px 688px , 1813px 1685px , 1209px 1593px , 1660px 1777px , 1539px 145px , 507px 1143px , 1542px 110px , 1074px 850px , 1300px 68px , 1212px 1210px , 880px 650px , 53px 1534px , 930px 149px , 1731px 1176px , 1846px 1770px , 1769px 1549px , 1432px 104px , 556px 1633px , 1297px 1730px , 1204px 1151px , 171px 1836px , 1980px 600px , 1253px 153px , 1748px 15px , 1819px 1474px , 1075px 1342px , 1146px 477px , 1044px 1385px , 425px 1575px , 926px 1053px , 720px 31px , 242px 1544px , 403px 279px , 1467px 1325px , 572px 1108px , 360px 202px , 765px 1317px , 1271px 249px , 56px 2px , 1266px 276px , 481px 1803px , 1401px 209px , 808px 1816px , 1581px 1439px , 1603px 1854px , 262px 35px , 947px 1239px , 1487px 1839px , 913px 216px , 1191px 1990px , 1126px 1608px , 1370px 1428px , 85px 580px , 1403px 679px , 1075px 420px , 747px 877px , 453px 489px , 299px 766px , 1913px 1450px , 745px 1292px , 1543px 1047px , 1882px 1836px , 1643px 1058px , 996px 1613px , 1159px 787px , 1568px 834px , 1808px 846px , 1311px 581px , 1298px 1482px , 1012px 1240px , 1513px 1084px , 1684px 506px , 690px 1540px , 602px 1671px , 1730px 1042px , 1259px 1123px , 1617px 1660px , 1613px 1029px , 294px 1462px , 1496px 1552px , 218px 920px , 608px 1142px , 494px 247px , 148px 206px , 147px 1284px , 979px 588px , 286px 1652px , 1659px 284px , 1333px 184px , 851px 452px , 595px 802px , 17px 1868px , 689px 45px , 1598px 406px , 941px 199px , 191px 409px , 1927px 508px , 883px 502px , 307px 245px , 1141px 164px , 1970px 1986px , 768px 846px , 668px 50px , 302px 1760px , 1521px 713px , 440px 94px , 1120px 1631px , 1265px 356px , 1790px 1705px , 1863px 1295px , 61px 1621px , 173px 1187px , 1998px 334px , 859px 1718px , 872px 1895px , 348px 230px , 563px 236px , 923px 1183px , 1004px 510px , 1464px 595px , 894px 856px , 349px 924px , 704px 468px , 1496px 554px , 1372px 710px , 254px 1469px , 535px 1875px , 334px 344px , 807px 340px , 154px 1597px , 182px 1727px , 1838px 679px , 1896px 643px , 1630px 369px , 1647px 1799px , 714px 1915px , 1355px 382px , 1955px 401px , 263px 1164px , 231px 481px , 1543px 945px , 549px 1018px , 359px 1573px , 179px 595px , 1860px 348px , 796px 1134px , 575px 1463px , 1596px 1079px , 298px 141px , 108px 76px , 631px 1158px , 1552px 1122px , 1898px 190px , 568px 1123px , 526px 946px , 1970px 1723px , 6px 409px , 509px 1718px , 109px 559px , 273px 368px , 1122px 573px , 1321px 1093px , 620px 1900px , 1352px 880px , 337px 110px , 881px 1167px , 1483px 1161px , 172px 1611px , 1315px 310px , 1078px 1869px , 1243px 1217px , 780px 1373px , 589px 560px , 291px 334px , 1856px 799px , 95px 1797px , 741px 1219px , 1070px 9px , 1355px 1158px , 492px 648px , 376px 244px , 190px 638px , 553px 1522px , 783px 384px , 1872px 1604px , 1402px 1792px , 149px 1279px , 1472px 850px , 689px 108px , 51px 112px , 622px 1168px , 1042px 924px , 1228px 580px , 467px 211px , 1898px 895px , 640px 1341px , 1788px 1649px , 1134px 1503px , 842px 218px , 319px 1647px , 733px 1545px , 1357px 79px , 1652px 1246px , 1789px 1034px , 1934px 517px , 1200px 331px , 1415px 1961px , 191px 77px , 260px 12px , 1717px 167px , 1273px 994px , 311px 1826px , 1688px 392px , 735px 1323px , 405px 1421px , 128px 1429px , 841px 101px , 697px 198px , 591px 1990px , 424px 1266px;\n    -webkit-animation: animStar 150s linear infinite;\n            animation: animStar 150s linear infinite; }\n  .parallax #stars1:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 1px;\n      height: 1px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 1869px 563px , 129px 28px , 965px 43px , 1415px 359px , 1204px 1238px , 1730px 355px , 1973px 1931px , 810px 882px , 1255px 1273px , 1198px 854px , 400px 1210px , 71px 1092px , 407px 1633px , 1793px 1401px , 1794px 484px , 340px 1530px , 1373px 1860px , 1240px 300px , 1329px 433px , 1072px 1324px , 1374px 438px , 757px 497px , 268px 1110px , 826px 539px , 248px 1577px , 768px 1468px , 110px 1899px , 237px 759px , 122px 401px , 347px 1883px , 270px 1905px , 280px 716px , 1363px 1819px , 1566px 1075px , 844px 305px , 384px 759px , 858px 1958px , 224px 1498px , 318px 868px , 356px 899px , 590px 1704px , 697px 888px , 1105px 1384px , 799px 758px , 807px 684px , 182px 1513px , 1253px 1243px , 964px 179px , 380px 772px , 959px 1188px , 73px 1848px , 396px 426px , 454px 1349px , 1232px 1323px , 1760px 1604px , 1557px 917px , 811px 1021px , 389px 1709px , 278px 1386px , 947px 131px , 600px 1713px , 983px 1570px , 1642px 992px , 168px 137px , 1676px 1800px , 1805px 770px , 217px 1661px , 725px 1594px , 1159px 1711px , 218px 805px , 1650px 1343px , 1015px 1953px , 1197px 836px , 1849px 1618px , 887px 848px , 1488px 263px , 11px 1236px , 1850px 1109px , 27px 1089px , 1931px 712px , 1200px 1554px , 938px 1620px , 1473px 186px , 1442px 1155px , 1647px 1081px , 1276px 661px , 1708px 361px , 1775px 1377px , 747px 549px , 752px 534px , 1551px 1863px , 1691px 129px , 1241px 859px , 1307px 219px , 1648px 1237px , 543px 950px , 1911px 787px , 1542px 1752px , 1975px 888px , 1003px 1483px , 1461px 47px , 650px 440px , 1810px 1954px , 349px 277px , 837px 1691px , 1833px 378px , 1692px 167px , 1371px 80px , 507px 145px , 228px 780px , 933px 69px , 748px 1257px , 241px 955px , 752px 1998px , 375px 927px , 1649px 1935px , 1438px 198px , 444px 1580px , 608px 1363px , 397px 560px , 758px 1611px , 790px 627px , 1519px 148px , 1529px 867px , 732px 1395px , 145px 1103px , 1572px 1273px , 1431px 160px , 381px 1349px , 1448px 382px , 521px 986px , 878px 857px , 871px 1806px , 343px 1293px , 129px 1247px , 401px 1735px , 291px 1313px , 60px 1116px , 1406px 769px , 26px 611px , 333px 1582px , 1723px 344px , 630px 934px , 532px 911px , 1278px 194px , 1066px 798px , 1126px 1732px , 1533px 1378px , 1412px 784px , 600px 1052px , 1138px 1696px , 489px 1877px , 1142px 187px , 1898px 351px , 500px 1613px , 1250px 602px , 752px 1949px , 1442px 483px , 603px 1991px , 1446px 1309px , 248px 1243px , 1694px 134px , 1051px 880px , 970px 31px , 1657px 1597px , 1371px 1469px , 543px 1832px , 1903px 1637px , 342px 471px , 1298px 1799px , 1544px 890px , 1451px 995px , 632px 478px , 750px 1127px , 1236px 978px , 1089px 1642px , 1376px 1838px , 414px 47px , 1793px 1110px , 1086px 1553px , 600px 811px , 746px 783px , 1859px 771px , 1126px 1608px , 122px 1230px , 860px 1654px , 1469px 1735px , 956px 1136px , 553px 329px , 743px 536px , 1898px 1660px , 260px 1405px , 1315px 1625px , 1519px 1287px , 1762px 1707px , 1797px 1150px , 1819px 1103px , 986px 1789px , 269px 565px , 362px 508px , 1227px 1700px , 1880px 933px , 1034px 290px , 84px 513px , 603px 1622px , 1168px 1832px , 979px 352px , 1058px 747px , 70px 1286px , 1176px 989px , 479px 1946px , 486px 1064px , 600px 1578px , 1026px 984px , 1054px 993px , 181px 1844px , 1516px 1029px , 1110px 1886px , 747px 941px , 730px 224px , 1915px 1133px , 1341px 1966px , 888px 825px , 486px 1101px , 819px 1957px , 1820px 1660px , 826px 1413px , 1299px 575px , 86px 20px , 26px 1093px , 1042px 1367px , 154px 185px , 585px 368px , 1474px 1188px , 1690px 1193px , 1943px 1611px , 770px 1102px , 71px 1543px , 206px 1644px , 1889px 1456px , 1489px 377px , 83px 347px , 261px 1432px , 417px 471px , 544px 715px , 1882px 1133px , 725px 1044px , 1714px 467px , 144px 775px , 1138px 847px , 559px 1022px , 1650px 1395px , 1422px 1676px , 673px 1386px , 938px 1064px , 1754px 379px , 917px 703px , 1291px 332px , 1877px 708px , 1077px 395px , 1695px 1543px , 523px 908px , 283px 1685px , 718px 860px , 1107px 1538px , 1986px 1976px , 710px 585px , 1816px 1005px , 188px 1218px , 295px 974px , 48px 509px , 688px 829px , 1353px 1567px , 1701px 1312px , 1609px 1844px , 317px 1023px , 891px 1541px , 839px 963px , 30px 1390px , 1942px 1842px , 63px 1753px , 536px 158px , 1116px 604px , 1177px 368px , 825px 1145px , 1256px 457px , 1539px 270px , 1481px 396px , 1397px 1179px , 907px 1638px , 33px 168px , 861px 1201px , 767px 405px , 626px 1695px , 1408px 1961px , 1414px 641px , 933px 84px , 926px 791px , 165px 1225px , 1781px 425px , 523px 1389px , 1730px 448px , 159px 71px , 1171px 773px , 1436px 1070px , 314px 449px , 1724px 476px , 93px 1249px , 665px 717px , 1445px 1430px , 1507px 1805px , 1801px 1330px , 707px 722px , 1901px 1486px , 235px 1674px , 1390px 290px , 832px 523px , 448px 1047px , 1930px 945px , 496px 1424px , 631px 288px , 1868px 422px , 1698px 629px , 704px 285px , 1889px 1795px , 1052px 1661px , 1932px 1498px , 1863px 1086px , 786px 1393px , 1639px 975px , 347px 1942px , 246px 113px , 1349px 1612px , 1672px 424px , 41px 1270px , 1140px 594px , 1048px 560px , 1627px 1079px , 143px 1892px , 1314px 1950px , 1166px 1362px , 1498px 531px , 1040px 93px , 1945px 986px , 1811px 1814px , 330px 1581px , 1639px 1433px , 1053px 5px , 1121px 1640px , 1924px 434px , 438px 1206px , 1100px 952px , 1568px 155px , 1050px 540px , 533px 1399px , 750px 1393px , 1939px 1444px , 1691px 1804px , 996px 253px , 833px 1603px , 1962px 677px , 882px 42px , 1779px 1815px , 464px 1520px , 1869px 1358px , 885px 39px , 320px 738px , 1888px 1788px , 1317px 868px , 782px 507px , 873px 1606px , 1951px 656px , 167px 377px , 301px 1955px , 1848px 225px , 344px 1207px , 1919px 24px , 1161px 1666px , 41px 181px , 642px 736px , 7px 1779px , 1933px 805px , 1371px 903px , 1384px 814px , 1040px 750px , 269px 1709px , 1796px 272px , 1929px 649px , 931px 270px , 1565px 723px , 1198px 80px , 945px 1821px , 1534px 228px , 952px 623px , 1977px 1343px , 421px 181px , 1437px 90px , 1324px 1099px , 798px 477px , 185px 446px , 772px 556px , 1504px 1015px , 759px 334px , 1895px 1351px , 112px 1032px , 1028px 1741px , 1293px 914px , 1947px 583px , 1418px 942px , 1562px 425px , 64px 202px , 1081px 1349px , 813px 385px , 1126px 378px , 1634px 681px , 277px 402px , 267px 1872px , 742px 146px , 384px 827px , 964px 221px , 300px 136px , 1611px 174px , 80px 1795px , 1366px 1590px , 1251px 1781px , 1111px 599px , 1995px 671px , 559px 731px , 974px 941px , 1553px 1034px , 33px 894px , 591px 561px , 1562px 340px , 909px 495px , 1649px 1387px , 1196px 1409px , 1702px 484px , 933px 968px , 1197px 184px , 478px 214px , 1789px 1985px , 1755px 1600px , 1758px 618px , 339px 300px , 191px 151px , 1426px 690px , 1690px 549px , 474px 1695px , 1580px 503px , 1432px 690px , 801px 118px , 230px 726px , 1210px 476px , 883px 46px , 398px 1997px , 1108px 1580px , 1666px 1729px , 1830px 1944px , 1443px 1785px , 1690px 469px , 824px 1616px , 1315px 836px , 890px 673px , 1874px 1061px , 230px 934px , 745px 915px , 695px 1549px , 901px 1391px , 1135px 1362px , 591px 648px , 1963px 1416px , 707px 1263px , 685px 783px , 1914px 842px , 1543px 634px , 1945px 1425px , 319px 126px , 10px 1255px , 1091px 810px , 1731px 189px , 1395px 688px , 1813px 1685px , 1209px 1593px , 1660px 1777px , 1539px 145px , 507px 1143px , 1542px 110px , 1074px 850px , 1300px 68px , 1212px 1210px , 880px 650px , 53px 1534px , 930px 149px , 1731px 1176px , 1846px 1770px , 1769px 1549px , 1432px 104px , 556px 1633px , 1297px 1730px , 1204px 1151px , 171px 1836px , 1980px 600px , 1253px 153px , 1748px 15px , 1819px 1474px , 1075px 1342px , 1146px 477px , 1044px 1385px , 425px 1575px , 926px 1053px , 720px 31px , 242px 1544px , 403px 279px , 1467px 1325px , 572px 1108px , 360px 202px , 765px 1317px , 1271px 249px , 56px 2px , 1266px 276px , 481px 1803px , 1401px 209px , 808px 1816px , 1581px 1439px , 1603px 1854px , 262px 35px , 947px 1239px , 1487px 1839px , 913px 216px , 1191px 1990px , 1126px 1608px , 1370px 1428px , 85px 580px , 1403px 679px , 1075px 420px , 747px 877px , 453px 489px , 299px 766px , 1913px 1450px , 745px 1292px , 1543px 1047px , 1882px 1836px , 1643px 1058px , 996px 1613px , 1159px 787px , 1568px 834px , 1808px 846px , 1311px 581px , 1298px 1482px , 1012px 1240px , 1513px 1084px , 1684px 506px , 690px 1540px , 602px 1671px , 1730px 1042px , 1259px 1123px , 1617px 1660px , 1613px 1029px , 294px 1462px , 1496px 1552px , 218px 920px , 608px 1142px , 494px 247px , 148px 206px , 147px 1284px , 979px 588px , 286px 1652px , 1659px 284px , 1333px 184px , 851px 452px , 595px 802px , 17px 1868px , 689px 45px , 1598px 406px , 941px 199px , 191px 409px , 1927px 508px , 883px 502px , 307px 245px , 1141px 164px , 1970px 1986px , 768px 846px , 668px 50px , 302px 1760px , 1521px 713px , 440px 94px , 1120px 1631px , 1265px 356px , 1790px 1705px , 1863px 1295px , 61px 1621px , 173px 1187px , 1998px 334px , 859px 1718px , 872px 1895px , 348px 230px , 563px 236px , 923px 1183px , 1004px 510px , 1464px 595px , 894px 856px , 349px 924px , 704px 468px , 1496px 554px , 1372px 710px , 254px 1469px , 535px 1875px , 334px 344px , 807px 340px , 154px 1597px , 182px 1727px , 1838px 679px , 1896px 643px , 1630px 369px , 1647px 1799px , 714px 1915px , 1355px 382px , 1955px 401px , 263px 1164px , 231px 481px , 1543px 945px , 549px 1018px , 359px 1573px , 179px 595px , 1860px 348px , 796px 1134px , 575px 1463px , 1596px 1079px , 298px 141px , 108px 76px , 631px 1158px , 1552px 1122px , 1898px 190px , 568px 1123px , 526px 946px , 1970px 1723px , 6px 409px , 509px 1718px , 109px 559px , 273px 368px , 1122px 573px , 1321px 1093px , 620px 1900px , 1352px 880px , 337px 110px , 881px 1167px , 1483px 1161px , 172px 1611px , 1315px 310px , 1078px 1869px , 1243px 1217px , 780px 1373px , 589px 560px , 291px 334px , 1856px 799px , 95px 1797px , 741px 1219px , 1070px 9px , 1355px 1158px , 492px 648px , 376px 244px , 190px 638px , 553px 1522px , 783px 384px , 1872px 1604px , 1402px 1792px , 149px 1279px , 1472px 850px , 689px 108px , 51px 112px , 622px 1168px , 1042px 924px , 1228px 580px , 467px 211px , 1898px 895px , 640px 1341px , 1788px 1649px , 1134px 1503px , 842px 218px , 319px 1647px , 733px 1545px , 1357px 79px , 1652px 1246px , 1789px 1034px , 1934px 517px , 1200px 331px , 1415px 1961px , 191px 77px , 260px 12px , 1717px 167px , 1273px 994px , 311px 1826px , 1688px 392px , 735px 1323px , 405px 1421px , 128px 1429px , 841px 101px , 697px 198px , 591px 1990px , 424px 1266px;\n              box-shadow: 1869px 563px , 129px 28px , 965px 43px , 1415px 359px , 1204px 1238px , 1730px 355px , 1973px 1931px , 810px 882px , 1255px 1273px , 1198px 854px , 400px 1210px , 71px 1092px , 407px 1633px , 1793px 1401px , 1794px 484px , 340px 1530px , 1373px 1860px , 1240px 300px , 1329px 433px , 1072px 1324px , 1374px 438px , 757px 497px , 268px 1110px , 826px 539px , 248px 1577px , 768px 1468px , 110px 1899px , 237px 759px , 122px 401px , 347px 1883px , 270px 1905px , 280px 716px , 1363px 1819px , 1566px 1075px , 844px 305px , 384px 759px , 858px 1958px , 224px 1498px , 318px 868px , 356px 899px , 590px 1704px , 697px 888px , 1105px 1384px , 799px 758px , 807px 684px , 182px 1513px , 1253px 1243px , 964px 179px , 380px 772px , 959px 1188px , 73px 1848px , 396px 426px , 454px 1349px , 1232px 1323px , 1760px 1604px , 1557px 917px , 811px 1021px , 389px 1709px , 278px 1386px , 947px 131px , 600px 1713px , 983px 1570px , 1642px 992px , 168px 137px , 1676px 1800px , 1805px 770px , 217px 1661px , 725px 1594px , 1159px 1711px , 218px 805px , 1650px 1343px , 1015px 1953px , 1197px 836px , 1849px 1618px , 887px 848px , 1488px 263px , 11px 1236px , 1850px 1109px , 27px 1089px , 1931px 712px , 1200px 1554px , 938px 1620px , 1473px 186px , 1442px 1155px , 1647px 1081px , 1276px 661px , 1708px 361px , 1775px 1377px , 747px 549px , 752px 534px , 1551px 1863px , 1691px 129px , 1241px 859px , 1307px 219px , 1648px 1237px , 543px 950px , 1911px 787px , 1542px 1752px , 1975px 888px , 1003px 1483px , 1461px 47px , 650px 440px , 1810px 1954px , 349px 277px , 837px 1691px , 1833px 378px , 1692px 167px , 1371px 80px , 507px 145px , 228px 780px , 933px 69px , 748px 1257px , 241px 955px , 752px 1998px , 375px 927px , 1649px 1935px , 1438px 198px , 444px 1580px , 608px 1363px , 397px 560px , 758px 1611px , 790px 627px , 1519px 148px , 1529px 867px , 732px 1395px , 145px 1103px , 1572px 1273px , 1431px 160px , 381px 1349px , 1448px 382px , 521px 986px , 878px 857px , 871px 1806px , 343px 1293px , 129px 1247px , 401px 1735px , 291px 1313px , 60px 1116px , 1406px 769px , 26px 611px , 333px 1582px , 1723px 344px , 630px 934px , 532px 911px , 1278px 194px , 1066px 798px , 1126px 1732px , 1533px 1378px , 1412px 784px , 600px 1052px , 1138px 1696px , 489px 1877px , 1142px 187px , 1898px 351px , 500px 1613px , 1250px 602px , 752px 1949px , 1442px 483px , 603px 1991px , 1446px 1309px , 248px 1243px , 1694px 134px , 1051px 880px , 970px 31px , 1657px 1597px , 1371px 1469px , 543px 1832px , 1903px 1637px , 342px 471px , 1298px 1799px , 1544px 890px , 1451px 995px , 632px 478px , 750px 1127px , 1236px 978px , 1089px 1642px , 1376px 1838px , 414px 47px , 1793px 1110px , 1086px 1553px , 600px 811px , 746px 783px , 1859px 771px , 1126px 1608px , 122px 1230px , 860px 1654px , 1469px 1735px , 956px 1136px , 553px 329px , 743px 536px , 1898px 1660px , 260px 1405px , 1315px 1625px , 1519px 1287px , 1762px 1707px , 1797px 1150px , 1819px 1103px , 986px 1789px , 269px 565px , 362px 508px , 1227px 1700px , 1880px 933px , 1034px 290px , 84px 513px , 603px 1622px , 1168px 1832px , 979px 352px , 1058px 747px , 70px 1286px , 1176px 989px , 479px 1946px , 486px 1064px , 600px 1578px , 1026px 984px , 1054px 993px , 181px 1844px , 1516px 1029px , 1110px 1886px , 747px 941px , 730px 224px , 1915px 1133px , 1341px 1966px , 888px 825px , 486px 1101px , 819px 1957px , 1820px 1660px , 826px 1413px , 1299px 575px , 86px 20px , 26px 1093px , 1042px 1367px , 154px 185px , 585px 368px , 1474px 1188px , 1690px 1193px , 1943px 1611px , 770px 1102px , 71px 1543px , 206px 1644px , 1889px 1456px , 1489px 377px , 83px 347px , 261px 1432px , 417px 471px , 544px 715px , 1882px 1133px , 725px 1044px , 1714px 467px , 144px 775px , 1138px 847px , 559px 1022px , 1650px 1395px , 1422px 1676px , 673px 1386px , 938px 1064px , 1754px 379px , 917px 703px , 1291px 332px , 1877px 708px , 1077px 395px , 1695px 1543px , 523px 908px , 283px 1685px , 718px 860px , 1107px 1538px , 1986px 1976px , 710px 585px , 1816px 1005px , 188px 1218px , 295px 974px , 48px 509px , 688px 829px , 1353px 1567px , 1701px 1312px , 1609px 1844px , 317px 1023px , 891px 1541px , 839px 963px , 30px 1390px , 1942px 1842px , 63px 1753px , 536px 158px , 1116px 604px , 1177px 368px , 825px 1145px , 1256px 457px , 1539px 270px , 1481px 396px , 1397px 1179px , 907px 1638px , 33px 168px , 861px 1201px , 767px 405px , 626px 1695px , 1408px 1961px , 1414px 641px , 933px 84px , 926px 791px , 165px 1225px , 1781px 425px , 523px 1389px , 1730px 448px , 159px 71px , 1171px 773px , 1436px 1070px , 314px 449px , 1724px 476px , 93px 1249px , 665px 717px , 1445px 1430px , 1507px 1805px , 1801px 1330px , 707px 722px , 1901px 1486px , 235px 1674px , 1390px 290px , 832px 523px , 448px 1047px , 1930px 945px , 496px 1424px , 631px 288px , 1868px 422px , 1698px 629px , 704px 285px , 1889px 1795px , 1052px 1661px , 1932px 1498px , 1863px 1086px , 786px 1393px , 1639px 975px , 347px 1942px , 246px 113px , 1349px 1612px , 1672px 424px , 41px 1270px , 1140px 594px , 1048px 560px , 1627px 1079px , 143px 1892px , 1314px 1950px , 1166px 1362px , 1498px 531px , 1040px 93px , 1945px 986px , 1811px 1814px , 330px 1581px , 1639px 1433px , 1053px 5px , 1121px 1640px , 1924px 434px , 438px 1206px , 1100px 952px , 1568px 155px , 1050px 540px , 533px 1399px , 750px 1393px , 1939px 1444px , 1691px 1804px , 996px 253px , 833px 1603px , 1962px 677px , 882px 42px , 1779px 1815px , 464px 1520px , 1869px 1358px , 885px 39px , 320px 738px , 1888px 1788px , 1317px 868px , 782px 507px , 873px 1606px , 1951px 656px , 167px 377px , 301px 1955px , 1848px 225px , 344px 1207px , 1919px 24px , 1161px 1666px , 41px 181px , 642px 736px , 7px 1779px , 1933px 805px , 1371px 903px , 1384px 814px , 1040px 750px , 269px 1709px , 1796px 272px , 1929px 649px , 931px 270px , 1565px 723px , 1198px 80px , 945px 1821px , 1534px 228px , 952px 623px , 1977px 1343px , 421px 181px , 1437px 90px , 1324px 1099px , 798px 477px , 185px 446px , 772px 556px , 1504px 1015px , 759px 334px , 1895px 1351px , 112px 1032px , 1028px 1741px , 1293px 914px , 1947px 583px , 1418px 942px , 1562px 425px , 64px 202px , 1081px 1349px , 813px 385px , 1126px 378px , 1634px 681px , 277px 402px , 267px 1872px , 742px 146px , 384px 827px , 964px 221px , 300px 136px , 1611px 174px , 80px 1795px , 1366px 1590px , 1251px 1781px , 1111px 599px , 1995px 671px , 559px 731px , 974px 941px , 1553px 1034px , 33px 894px , 591px 561px , 1562px 340px , 909px 495px , 1649px 1387px , 1196px 1409px , 1702px 484px , 933px 968px , 1197px 184px , 478px 214px , 1789px 1985px , 1755px 1600px , 1758px 618px , 339px 300px , 191px 151px , 1426px 690px , 1690px 549px , 474px 1695px , 1580px 503px , 1432px 690px , 801px 118px , 230px 726px , 1210px 476px , 883px 46px , 398px 1997px , 1108px 1580px , 1666px 1729px , 1830px 1944px , 1443px 1785px , 1690px 469px , 824px 1616px , 1315px 836px , 890px 673px , 1874px 1061px , 230px 934px , 745px 915px , 695px 1549px , 901px 1391px , 1135px 1362px , 591px 648px , 1963px 1416px , 707px 1263px , 685px 783px , 1914px 842px , 1543px 634px , 1945px 1425px , 319px 126px , 10px 1255px , 1091px 810px , 1731px 189px , 1395px 688px , 1813px 1685px , 1209px 1593px , 1660px 1777px , 1539px 145px , 507px 1143px , 1542px 110px , 1074px 850px , 1300px 68px , 1212px 1210px , 880px 650px , 53px 1534px , 930px 149px , 1731px 1176px , 1846px 1770px , 1769px 1549px , 1432px 104px , 556px 1633px , 1297px 1730px , 1204px 1151px , 171px 1836px , 1980px 600px , 1253px 153px , 1748px 15px , 1819px 1474px , 1075px 1342px , 1146px 477px , 1044px 1385px , 425px 1575px , 926px 1053px , 720px 31px , 242px 1544px , 403px 279px , 1467px 1325px , 572px 1108px , 360px 202px , 765px 1317px , 1271px 249px , 56px 2px , 1266px 276px , 481px 1803px , 1401px 209px , 808px 1816px , 1581px 1439px , 1603px 1854px , 262px 35px , 947px 1239px , 1487px 1839px , 913px 216px , 1191px 1990px , 1126px 1608px , 1370px 1428px , 85px 580px , 1403px 679px , 1075px 420px , 747px 877px , 453px 489px , 299px 766px , 1913px 1450px , 745px 1292px , 1543px 1047px , 1882px 1836px , 1643px 1058px , 996px 1613px , 1159px 787px , 1568px 834px , 1808px 846px , 1311px 581px , 1298px 1482px , 1012px 1240px , 1513px 1084px , 1684px 506px , 690px 1540px , 602px 1671px , 1730px 1042px , 1259px 1123px , 1617px 1660px , 1613px 1029px , 294px 1462px , 1496px 1552px , 218px 920px , 608px 1142px , 494px 247px , 148px 206px , 147px 1284px , 979px 588px , 286px 1652px , 1659px 284px , 1333px 184px , 851px 452px , 595px 802px , 17px 1868px , 689px 45px , 1598px 406px , 941px 199px , 191px 409px , 1927px 508px , 883px 502px , 307px 245px , 1141px 164px , 1970px 1986px , 768px 846px , 668px 50px , 302px 1760px , 1521px 713px , 440px 94px , 1120px 1631px , 1265px 356px , 1790px 1705px , 1863px 1295px , 61px 1621px , 173px 1187px , 1998px 334px , 859px 1718px , 872px 1895px , 348px 230px , 563px 236px , 923px 1183px , 1004px 510px , 1464px 595px , 894px 856px , 349px 924px , 704px 468px , 1496px 554px , 1372px 710px , 254px 1469px , 535px 1875px , 334px 344px , 807px 340px , 154px 1597px , 182px 1727px , 1838px 679px , 1896px 643px , 1630px 369px , 1647px 1799px , 714px 1915px , 1355px 382px , 1955px 401px , 263px 1164px , 231px 481px , 1543px 945px , 549px 1018px , 359px 1573px , 179px 595px , 1860px 348px , 796px 1134px , 575px 1463px , 1596px 1079px , 298px 141px , 108px 76px , 631px 1158px , 1552px 1122px , 1898px 190px , 568px 1123px , 526px 946px , 1970px 1723px , 6px 409px , 509px 1718px , 109px 559px , 273px 368px , 1122px 573px , 1321px 1093px , 620px 1900px , 1352px 880px , 337px 110px , 881px 1167px , 1483px 1161px , 172px 1611px , 1315px 310px , 1078px 1869px , 1243px 1217px , 780px 1373px , 589px 560px , 291px 334px , 1856px 799px , 95px 1797px , 741px 1219px , 1070px 9px , 1355px 1158px , 492px 648px , 376px 244px , 190px 638px , 553px 1522px , 783px 384px , 1872px 1604px , 1402px 1792px , 149px 1279px , 1472px 850px , 689px 108px , 51px 112px , 622px 1168px , 1042px 924px , 1228px 580px , 467px 211px , 1898px 895px , 640px 1341px , 1788px 1649px , 1134px 1503px , 842px 218px , 319px 1647px , 733px 1545px , 1357px 79px , 1652px 1246px , 1789px 1034px , 1934px 517px , 1200px 331px , 1415px 1961px , 191px 77px , 260px 12px , 1717px 167px , 1273px 994px , 311px 1826px , 1688px 392px , 735px 1323px , 405px 1421px , 128px 1429px , 841px 101px , 697px 198px , 591px 1990px , 424px 1266px; }\n  .parallax #stars2 {\n    width: 2px;\n    height: 2px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 559px 1439px , 1450px 266px , 1985px 158px , 671px 53px , 558px 472px , 1855px 238px , 1857px 1569px , 669px 1356px , 1907px 1163px , 1054px 426px , 1719px 1190px , 1061px 1206px , 963px 1403px , 115px 1826px , 771px 498px , 781px 1931px , 140px 326px , 1500px 1012px , 1543px 1413px , 675px 1149px , 27px 892px , 908px 1368px , 179px 14px , 737px 433px , 733px 225px , 414px 1705px , 592px 1065px , 195px 1366px , 595px 224px , 1114px 1176px , 817px 1084px , 998px 1643px , 1294px 28px , 1013px 1520px , 1286px 306px , 1614px 1206px , 1168px 853px , 147px 409px , 1597px 305px , 1672px 1556px , 157px 7px , 1746px 1384px , 930px 89px , 1529px 1855px , 1391px 177px , 428px 589px , 614px 279px , 1701px 1819px , 1281px 1029px , 1672px 177px , 694px 966px , 1839px 437px , 193px 742px , 834px 1681px , 1195px 137px , 1931px 907px , 1105px 1418px , 1872px 1698px , 1091px 501px , 181px 1354px , 1289px 1946px , 915px 1457px , 855px 205px , 864px 1848px , 1682px 928px , 869px 897px , 1178px 651px , 819px 625px , 88px 293px , 82px 129px , 131px 1950px , 544px 1332px , 1568px 1850px , 676px 1446px , 1822px 1037px , 1006px 873px , 962px 1528px , 1648px 37px , 837px 994px , 579px 436px , 639px 32px , 260px 1237px , 578px 1011px , 1781px 1294px , 153px 1365px , 1986px 1521px , 288px 823px , 1599px 935px , 1845px 1938px , 454px 1491px , 1914px 225px , 1447px 1071px , 1228px 1498px , 446px 1865px , 1903px 1648px , 1069px 522px , 577px 932px , 550px 1346px , 313px 1612px , 1921px 1575px , 1392px 158px , 1099px 1112px , 1860px 1293px , 801px 1999px , 1763px 1676px , 557px 508px , 1951px 1007px , 930px 632px , 382px 988px , 1791px 372px , 950px 579px , 1089px 1237px , 345px 938px , 1915px 784px , 718px 74px , 474px 754px , 128px 1433px , 425px 554px , 677px 1792px , 1040px 1512px , 678px 668px , 1071px 765px , 1340px 620px , 1276px 1056px , 1958px 177px , 1935px 760px , 1723px 380px , 502px 1451px , 817px 676px , 1272px 323px , 87px 988px , 759px 598px , 1419px 687px , 1871px 1662px , 1328px 1083px , 1020px 1593px , 744px 1486px , 1691px 1884px , 80px 508px , 1260px 1191px , 986px 1611px , 1289px 560px , 1326px 1796px , 627px 1616px , 579px 1817px , 1657px 809px , 682px 386px , 1676px 1499px , 1082px 585px , 1846px 1967px , 1692px 386px , 77px 472px , 1950px 504px , 1492px 1104px , 395px 875px , 1286px 605px , 140px 1216px , 1065px 654px , 374px 204px , 1023px 1412px , 1927px 1637px , 642px 1677px , 224px 1021px , 147px 1370px , 1711px 743px , 498px 15px , 1867px 1693px , 1740px 609px , 823px 1212px , 1780px 608px , 1182px 1765px , 180px 428px , 1303px 1004px , 1669px 1827px , 1118px 1893px , 1881px 834px , 1005px 6px , 1031px 1897px , 353px 1428px , 1428px 1958px , 749px 1861px , 1380px 1456px , 670px 1123px , 727px 1616px , 1826px 1033px , 486px 211px , 1384px 74px , 1358px 1127px , 938px 1416px , 1659px 1167px , 1317px 937px , 936px 272px , 1394px 1268px , 954px 696px , 167px 774px , 977px 321px , 426px 1747px , 1048px 913px , 919px 567px , 1438px 1630px;\n            box-shadow: 559px 1439px , 1450px 266px , 1985px 158px , 671px 53px , 558px 472px , 1855px 238px , 1857px 1569px , 669px 1356px , 1907px 1163px , 1054px 426px , 1719px 1190px , 1061px 1206px , 963px 1403px , 115px 1826px , 771px 498px , 781px 1931px , 140px 326px , 1500px 1012px , 1543px 1413px , 675px 1149px , 27px 892px , 908px 1368px , 179px 14px , 737px 433px , 733px 225px , 414px 1705px , 592px 1065px , 195px 1366px , 595px 224px , 1114px 1176px , 817px 1084px , 998px 1643px , 1294px 28px , 1013px 1520px , 1286px 306px , 1614px 1206px , 1168px 853px , 147px 409px , 1597px 305px , 1672px 1556px , 157px 7px , 1746px 1384px , 930px 89px , 1529px 1855px , 1391px 177px , 428px 589px , 614px 279px , 1701px 1819px , 1281px 1029px , 1672px 177px , 694px 966px , 1839px 437px , 193px 742px , 834px 1681px , 1195px 137px , 1931px 907px , 1105px 1418px , 1872px 1698px , 1091px 501px , 181px 1354px , 1289px 1946px , 915px 1457px , 855px 205px , 864px 1848px , 1682px 928px , 869px 897px , 1178px 651px , 819px 625px , 88px 293px , 82px 129px , 131px 1950px , 544px 1332px , 1568px 1850px , 676px 1446px , 1822px 1037px , 1006px 873px , 962px 1528px , 1648px 37px , 837px 994px , 579px 436px , 639px 32px , 260px 1237px , 578px 1011px , 1781px 1294px , 153px 1365px , 1986px 1521px , 288px 823px , 1599px 935px , 1845px 1938px , 454px 1491px , 1914px 225px , 1447px 1071px , 1228px 1498px , 446px 1865px , 1903px 1648px , 1069px 522px , 577px 932px , 550px 1346px , 313px 1612px , 1921px 1575px , 1392px 158px , 1099px 1112px , 1860px 1293px , 801px 1999px , 1763px 1676px , 557px 508px , 1951px 1007px , 930px 632px , 382px 988px , 1791px 372px , 950px 579px , 1089px 1237px , 345px 938px , 1915px 784px , 718px 74px , 474px 754px , 128px 1433px , 425px 554px , 677px 1792px , 1040px 1512px , 678px 668px , 1071px 765px , 1340px 620px , 1276px 1056px , 1958px 177px , 1935px 760px , 1723px 380px , 502px 1451px , 817px 676px , 1272px 323px , 87px 988px , 759px 598px , 1419px 687px , 1871px 1662px , 1328px 1083px , 1020px 1593px , 744px 1486px , 1691px 1884px , 80px 508px , 1260px 1191px , 986px 1611px , 1289px 560px , 1326px 1796px , 627px 1616px , 579px 1817px , 1657px 809px , 682px 386px , 1676px 1499px , 1082px 585px , 1846px 1967px , 1692px 386px , 77px 472px , 1950px 504px , 1492px 1104px , 395px 875px , 1286px 605px , 140px 1216px , 1065px 654px , 374px 204px , 1023px 1412px , 1927px 1637px , 642px 1677px , 224px 1021px , 147px 1370px , 1711px 743px , 498px 15px , 1867px 1693px , 1740px 609px , 823px 1212px , 1780px 608px , 1182px 1765px , 180px 428px , 1303px 1004px , 1669px 1827px , 1118px 1893px , 1881px 834px , 1005px 6px , 1031px 1897px , 353px 1428px , 1428px 1958px , 749px 1861px , 1380px 1456px , 670px 1123px , 727px 1616px , 1826px 1033px , 486px 211px , 1384px 74px , 1358px 1127px , 938px 1416px , 1659px 1167px , 1317px 937px , 936px 272px , 1394px 1268px , 954px 696px , 167px 774px , 977px 321px , 426px 1747px , 1048px 913px , 919px 567px , 1438px 1630px;\n    -webkit-animation: animStar 100s linear infinite;\n            animation: animStar 100s linear infinite; }\n  .parallax #stars2:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 2px;\n      height: 2px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 559px 1439px , 1450px 266px , 1985px 158px , 671px 53px , 558px 472px , 1855px 238px , 1857px 1569px , 669px 1356px , 1907px 1163px , 1054px 426px , 1719px 1190px , 1061px 1206px , 963px 1403px , 115px 1826px , 771px 498px , 781px 1931px , 140px 326px , 1500px 1012px , 1543px 1413px , 675px 1149px , 27px 892px , 908px 1368px , 179px 14px , 737px 433px , 733px 225px , 414px 1705px , 592px 1065px , 195px 1366px , 595px 224px , 1114px 1176px , 817px 1084px , 998px 1643px , 1294px 28px , 1013px 1520px , 1286px 306px , 1614px 1206px , 1168px 853px , 147px 409px , 1597px 305px , 1672px 1556px , 157px 7px , 1746px 1384px , 930px 89px , 1529px 1855px , 1391px 177px , 428px 589px , 614px 279px , 1701px 1819px , 1281px 1029px , 1672px 177px , 694px 966px , 1839px 437px , 193px 742px , 834px 1681px , 1195px 137px , 1931px 907px , 1105px 1418px , 1872px 1698px , 1091px 501px , 181px 1354px , 1289px 1946px , 915px 1457px , 855px 205px , 864px 1848px , 1682px 928px , 869px 897px , 1178px 651px , 819px 625px , 88px 293px , 82px 129px , 131px 1950px , 544px 1332px , 1568px 1850px , 676px 1446px , 1822px 1037px , 1006px 873px , 962px 1528px , 1648px 37px , 837px 994px , 579px 436px , 639px 32px , 260px 1237px , 578px 1011px , 1781px 1294px , 153px 1365px , 1986px 1521px , 288px 823px , 1599px 935px , 1845px 1938px , 454px 1491px , 1914px 225px , 1447px 1071px , 1228px 1498px , 446px 1865px , 1903px 1648px , 1069px 522px , 577px 932px , 550px 1346px , 313px 1612px , 1921px 1575px , 1392px 158px , 1099px 1112px , 1860px 1293px , 801px 1999px , 1763px 1676px , 557px 508px , 1951px 1007px , 930px 632px , 382px 988px , 1791px 372px , 950px 579px , 1089px 1237px , 345px 938px , 1915px 784px , 718px 74px , 474px 754px , 128px 1433px , 425px 554px , 677px 1792px , 1040px 1512px , 678px 668px , 1071px 765px , 1340px 620px , 1276px 1056px , 1958px 177px , 1935px 760px , 1723px 380px , 502px 1451px , 817px 676px , 1272px 323px , 87px 988px , 759px 598px , 1419px 687px , 1871px 1662px , 1328px 1083px , 1020px 1593px , 744px 1486px , 1691px 1884px , 80px 508px , 1260px 1191px , 986px 1611px , 1289px 560px , 1326px 1796px , 627px 1616px , 579px 1817px , 1657px 809px , 682px 386px , 1676px 1499px , 1082px 585px , 1846px 1967px , 1692px 386px , 77px 472px , 1950px 504px , 1492px 1104px , 395px 875px , 1286px 605px , 140px 1216px , 1065px 654px , 374px 204px , 1023px 1412px , 1927px 1637px , 642px 1677px , 224px 1021px , 147px 1370px , 1711px 743px , 498px 15px , 1867px 1693px , 1740px 609px , 823px 1212px , 1780px 608px , 1182px 1765px , 180px 428px , 1303px 1004px , 1669px 1827px , 1118px 1893px , 1881px 834px , 1005px 6px , 1031px 1897px , 353px 1428px , 1428px 1958px , 749px 1861px , 1380px 1456px , 670px 1123px , 727px 1616px , 1826px 1033px , 486px 211px , 1384px 74px , 1358px 1127px , 938px 1416px , 1659px 1167px , 1317px 937px , 936px 272px , 1394px 1268px , 954px 696px , 167px 774px , 977px 321px , 426px 1747px , 1048px 913px , 919px 567px , 1438px 1630px;\n              box-shadow: 559px 1439px , 1450px 266px , 1985px 158px , 671px 53px , 558px 472px , 1855px 238px , 1857px 1569px , 669px 1356px , 1907px 1163px , 1054px 426px , 1719px 1190px , 1061px 1206px , 963px 1403px , 115px 1826px , 771px 498px , 781px 1931px , 140px 326px , 1500px 1012px , 1543px 1413px , 675px 1149px , 27px 892px , 908px 1368px , 179px 14px , 737px 433px , 733px 225px , 414px 1705px , 592px 1065px , 195px 1366px , 595px 224px , 1114px 1176px , 817px 1084px , 998px 1643px , 1294px 28px , 1013px 1520px , 1286px 306px , 1614px 1206px , 1168px 853px , 147px 409px , 1597px 305px , 1672px 1556px , 157px 7px , 1746px 1384px , 930px 89px , 1529px 1855px , 1391px 177px , 428px 589px , 614px 279px , 1701px 1819px , 1281px 1029px , 1672px 177px , 694px 966px , 1839px 437px , 193px 742px , 834px 1681px , 1195px 137px , 1931px 907px , 1105px 1418px , 1872px 1698px , 1091px 501px , 181px 1354px , 1289px 1946px , 915px 1457px , 855px 205px , 864px 1848px , 1682px 928px , 869px 897px , 1178px 651px , 819px 625px , 88px 293px , 82px 129px , 131px 1950px , 544px 1332px , 1568px 1850px , 676px 1446px , 1822px 1037px , 1006px 873px , 962px 1528px , 1648px 37px , 837px 994px , 579px 436px , 639px 32px , 260px 1237px , 578px 1011px , 1781px 1294px , 153px 1365px , 1986px 1521px , 288px 823px , 1599px 935px , 1845px 1938px , 454px 1491px , 1914px 225px , 1447px 1071px , 1228px 1498px , 446px 1865px , 1903px 1648px , 1069px 522px , 577px 932px , 550px 1346px , 313px 1612px , 1921px 1575px , 1392px 158px , 1099px 1112px , 1860px 1293px , 801px 1999px , 1763px 1676px , 557px 508px , 1951px 1007px , 930px 632px , 382px 988px , 1791px 372px , 950px 579px , 1089px 1237px , 345px 938px , 1915px 784px , 718px 74px , 474px 754px , 128px 1433px , 425px 554px , 677px 1792px , 1040px 1512px , 678px 668px , 1071px 765px , 1340px 620px , 1276px 1056px , 1958px 177px , 1935px 760px , 1723px 380px , 502px 1451px , 817px 676px , 1272px 323px , 87px 988px , 759px 598px , 1419px 687px , 1871px 1662px , 1328px 1083px , 1020px 1593px , 744px 1486px , 1691px 1884px , 80px 508px , 1260px 1191px , 986px 1611px , 1289px 560px , 1326px 1796px , 627px 1616px , 579px 1817px , 1657px 809px , 682px 386px , 1676px 1499px , 1082px 585px , 1846px 1967px , 1692px 386px , 77px 472px , 1950px 504px , 1492px 1104px , 395px 875px , 1286px 605px , 140px 1216px , 1065px 654px , 374px 204px , 1023px 1412px , 1927px 1637px , 642px 1677px , 224px 1021px , 147px 1370px , 1711px 743px , 498px 15px , 1867px 1693px , 1740px 609px , 823px 1212px , 1780px 608px , 1182px 1765px , 180px 428px , 1303px 1004px , 1669px 1827px , 1118px 1893px , 1881px 834px , 1005px 6px , 1031px 1897px , 353px 1428px , 1428px 1958px , 749px 1861px , 1380px 1456px , 670px 1123px , 727px 1616px , 1826px 1033px , 486px 211px , 1384px 74px , 1358px 1127px , 938px 1416px , 1659px 1167px , 1317px 937px , 936px 272px , 1394px 1268px , 954px 696px , 167px 774px , 977px 321px , 426px 1747px , 1048px 913px , 919px 567px , 1438px 1630px; }\n  .parallax #stars3 {\n    width: 3px;\n    height: 3px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 1277px 446px , 176px 5px , 1674px 416px , 1522px 92px , 777px 533px , 190px 1380px , 176px 557px , 1415px 1380px , 387px 355px , 1400px 19px , 226px 1690px , 1536px 1846px , 477px 925px , 931px 100px , 1286px 361px , 1585px 1764px , 1767px 203px , 1583px 1400px , 316px 1657px , 1164px 239px , 1712px 862px , 1000px 1464px , 1850px 150px , 1996px 474px , 593px 198px , 1643px 294px , 854px 787px , 736px 250px , 1250px 387px , 757px 1220px , 312px 95px , 828px 1430px , 136px 524px , 243px 1746px , 1537px 1859px , 1342px 412px , 1358px 1027px , 167px 1642px , 476px 570px , 1150px 864px , 879px 1380px , 577px 369px , 142px 1316px , 391px 790px , 625px 1885px , 1815px 1318px , 55px 1812px , 1772px 716px , 1866px 559px , 1648px 1012px , 1298px 148px , 1944px 670px , 1314px 537px , 1501px 600px , 1743px 1759px , 1417px 1509px , 815px 1433px , 622px 1020px , 1090px 1681px , 344px 1923px , 228px 1246px , 156px 1899px , 1617px 287px , 1411px 1237px , 115px 186px , 1259px 1450px , 258px 1702px , 1856px 137px , 1734px 1782px , 1467px 1050px , 372px 1384px , 1334px 1136px , 172px 644px , 1526px 653px , 1289px 1470px , 873px 1845px , 573px 1063px , 935px 1673px , 585px 841px , 549px 1618px , 1542px 264px , 40px 714px , 1373px 1659px , 697px 596px , 823px 1530px , 758px 1005px , 316px 446px , 1914px 353px , 669px 1093px , 1258px 1160px , 1365px 1635px , 444px 205px , 338px 362px , 39px 1882px , 531px 605px , 610px 1588px , 1911px 1927px , 703px 1084px , 941px 447px , 541px 707px;\n            box-shadow: 1277px 446px , 176px 5px , 1674px 416px , 1522px 92px , 777px 533px , 190px 1380px , 176px 557px , 1415px 1380px , 387px 355px , 1400px 19px , 226px 1690px , 1536px 1846px , 477px 925px , 931px 100px , 1286px 361px , 1585px 1764px , 1767px 203px , 1583px 1400px , 316px 1657px , 1164px 239px , 1712px 862px , 1000px 1464px , 1850px 150px , 1996px 474px , 593px 198px , 1643px 294px , 854px 787px , 736px 250px , 1250px 387px , 757px 1220px , 312px 95px , 828px 1430px , 136px 524px , 243px 1746px , 1537px 1859px , 1342px 412px , 1358px 1027px , 167px 1642px , 476px 570px , 1150px 864px , 879px 1380px , 577px 369px , 142px 1316px , 391px 790px , 625px 1885px , 1815px 1318px , 55px 1812px , 1772px 716px , 1866px 559px , 1648px 1012px , 1298px 148px , 1944px 670px , 1314px 537px , 1501px 600px , 1743px 1759px , 1417px 1509px , 815px 1433px , 622px 1020px , 1090px 1681px , 344px 1923px , 228px 1246px , 156px 1899px , 1617px 287px , 1411px 1237px , 115px 186px , 1259px 1450px , 258px 1702px , 1856px 137px , 1734px 1782px , 1467px 1050px , 372px 1384px , 1334px 1136px , 172px 644px , 1526px 653px , 1289px 1470px , 873px 1845px , 573px 1063px , 935px 1673px , 585px 841px , 549px 1618px , 1542px 264px , 40px 714px , 1373px 1659px , 697px 596px , 823px 1530px , 758px 1005px , 316px 446px , 1914px 353px , 669px 1093px , 1258px 1160px , 1365px 1635px , 444px 205px , 338px 362px , 39px 1882px , 531px 605px , 610px 1588px , 1911px 1927px , 703px 1084px , 941px 447px , 541px 707px;\n    -webkit-animation: animStar 50s linear infinite;\n            animation: animStar 50s linear infinite; }\n  .parallax #stars3:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 3px;\n      height: 3px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 1277px 446px , 176px 5px , 1674px 416px , 1522px 92px , 777px 533px , 190px 1380px , 176px 557px , 1415px 1380px , 387px 355px , 1400px 19px , 226px 1690px , 1536px 1846px , 477px 925px , 931px 100px , 1286px 361px , 1585px 1764px , 1767px 203px , 1583px 1400px , 316px 1657px , 1164px 239px , 1712px 862px , 1000px 1464px , 1850px 150px , 1996px 474px , 593px 198px , 1643px 294px , 854px 787px , 736px 250px , 1250px 387px , 757px 1220px , 312px 95px , 828px 1430px , 136px 524px , 243px 1746px , 1537px 1859px , 1342px 412px , 1358px 1027px , 167px 1642px , 476px 570px , 1150px 864px , 879px 1380px , 577px 369px , 142px 1316px , 391px 790px , 625px 1885px , 1815px 1318px , 55px 1812px , 1772px 716px , 1866px 559px , 1648px 1012px , 1298px 148px , 1944px 670px , 1314px 537px , 1501px 600px , 1743px 1759px , 1417px 1509px , 815px 1433px , 622px 1020px , 1090px 1681px , 344px 1923px , 228px 1246px , 156px 1899px , 1617px 287px , 1411px 1237px , 115px 186px , 1259px 1450px , 258px 1702px , 1856px 137px , 1734px 1782px , 1467px 1050px , 372px 1384px , 1334px 1136px , 172px 644px , 1526px 653px , 1289px 1470px , 873px 1845px , 573px 1063px , 935px 1673px , 585px 841px , 549px 1618px , 1542px 264px , 40px 714px , 1373px 1659px , 697px 596px , 823px 1530px , 758px 1005px , 316px 446px , 1914px 353px , 669px 1093px , 1258px 1160px , 1365px 1635px , 444px 205px , 338px 362px , 39px 1882px , 531px 605px , 610px 1588px , 1911px 1927px , 703px 1084px , 941px 447px , 541px 707px;\n              box-shadow: 1277px 446px , 176px 5px , 1674px 416px , 1522px 92px , 777px 533px , 190px 1380px , 176px 557px , 1415px 1380px , 387px 355px , 1400px 19px , 226px 1690px , 1536px 1846px , 477px 925px , 931px 100px , 1286px 361px , 1585px 1764px , 1767px 203px , 1583px 1400px , 316px 1657px , 1164px 239px , 1712px 862px , 1000px 1464px , 1850px 150px , 1996px 474px , 593px 198px , 1643px 294px , 854px 787px , 736px 250px , 1250px 387px , 757px 1220px , 312px 95px , 828px 1430px , 136px 524px , 243px 1746px , 1537px 1859px , 1342px 412px , 1358px 1027px , 167px 1642px , 476px 570px , 1150px 864px , 879px 1380px , 577px 369px , 142px 1316px , 391px 790px , 625px 1885px , 1815px 1318px , 55px 1812px , 1772px 716px , 1866px 559px , 1648px 1012px , 1298px 148px , 1944px 670px , 1314px 537px , 1501px 600px , 1743px 1759px , 1417px 1509px , 815px 1433px , 622px 1020px , 1090px 1681px , 344px 1923px , 228px 1246px , 156px 1899px , 1617px 287px , 1411px 1237px , 115px 186px , 1259px 1450px , 258px 1702px , 1856px 137px , 1734px 1782px , 1467px 1050px , 372px 1384px , 1334px 1136px , 172px 644px , 1526px 653px , 1289px 1470px , 873px 1845px , 573px 1063px , 935px 1673px , 585px 841px , 549px 1618px , 1542px 264px , 40px 714px , 1373px 1659px , 697px 596px , 823px 1530px , 758px 1005px , 316px 446px , 1914px 353px , 669px 1093px , 1258px 1160px , 1365px 1635px , 444px 205px , 338px 362px , 39px 1882px , 531px 605px , 610px 1588px , 1911px 1927px , 703px 1084px , 941px 447px , 541px 707px; }\n  @-webkit-keyframes animStar {\n  from {\n    -webkit-transform: translateY(-2000px);\n            transform: translateY(-2000px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n  @keyframes animStar {\n  from {\n    -webkit-transform: translateY(-2000px);\n            transform: translateY(-2000px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n  @media only screen and (max-width: 680px) {\n  .parallax {\n    height: 120vw; } }\n"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Yeon+Sung\");\n.landing-container {\n  font-family: 'Yeon Sung', cursive;\n  text-align: center;\n  padding-top: 18vh; }\n.landing-container h1 {\n    font-size: 11vh; }\n.landing-container span {\n    font-size: 3.4vh; }\n.landing-container .icons {\n    padding-top: 5vh;\n    font-size: 8vh; }\n.landing-container .icons a {\n      text-decoration: none;\n      padding: 0 5px; }\n.landing-container .bottom-nav {\n    padding-top: 23vh;\n    padding-bottom: 3vh;\n    font-size: 12px;\n    -webkit-animation: bounce 1.4s infinite ease-in-out;\n            animation: bounce 1.4s infinite ease-in-out; }\n@-webkit-keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); } }\n@keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); } }\n@media only screen and (max-width: 600px) {\n  .landing-container {\n    padding: 30vh 5px 0 5px;\n    font-size: 18px; }\n    .landing-container h1 {\n      font-size: 7vh; }\n    .landing-container span {\n      font-size: 2.4vh; }\n  .bottom-nav {\n    padding-top: 22vh; } }\n"

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

module.exports = "<div class=\"portfolio-container\">\n  <h1 [ngStyle]=\"{'color':themeData.colorPrimary}\">Portfolio</h1>\n</div>"

/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.component.scss":
/***/ (function(module, exports) {

module.exports = ".portfolio-container {\n  padding: 0vh 30vh 0vh 30vh; }\n  .portfolio-container h1 {\n    font-size: 9vh;\n    font-weight: 800; }\n  @media only screen and (max-width: 600px) {\n  .portfolio-container {\n    padding: 5vh 4vh; } }\n"

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