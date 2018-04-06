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

module.exports = "nav {\n  width: 100%;\n  top: 0;\n  left: 0;\n  padding: 3px 5px;\n  position: fixed; }\n  nav .themeChange {\n    float: left;\n    font-size: 5vh;\n    margin-top: -3px;\n    -webkit-animation: 0.8s bounce-xy infinite;\n            animation: 0.8s bounce-xy infinite; }\n  nav .themeChange:hover {\n      cursor: pointer; }\n  nav .menu_item {\n    float: right;\n    margin: 0px 10px 5px 20px;\n    padding: 4px 2px 7px 2px;\n    font-size: 22px; }\n  nav .menu_item:hover {\n      border-bottom: 1px solid; }\n  @-webkit-keyframes bounce-xy {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0) translateX(0);\n            transform: translateY(0) translateX(0); }\n  40% {\n    -webkit-transform: translateX(15px);\n            transform: translateX(15px); }\n  60% {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px); } }\n  @keyframes bounce-xy {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0) translateX(0);\n            transform: translateY(0) translateX(0); }\n  40% {\n    -webkit-transform: translateX(15px);\n            transform: translateX(15px); }\n  60% {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px); } }\n"

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

module.exports = ".parallax {\n  position: fixed;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  width: calc(100vw - 0.0001px);\n  min-height: 100%;\n  height: auto; }\n  .parallax #stars1 {\n    width: 1px;\n    height: 1px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 165px 1791px , 504px 1437px , 1756px 719px , 1922px 431px , 277px 1616px , 1117px 789px , 1630px 713px , 414px 638px , 1607px 1514px , 1158px 1275px , 725px 1909px , 511px 252px , 1508px 1784px , 1424px 141px , 1037px 229px , 307px 1461px , 351px 1716px , 1424px 1438px , 1170px 1148px , 1930px 990px , 1531px 1909px , 1823px 833px , 1443px 1594px , 299px 1465px , 1978px 1998px , 1473px 795px , 842px 1199px , 586px 1823px , 140px 478px , 1817px 173px , 1748px 248px , 878px 817px , 1405px 1370px , 1356px 865px , 1961px 688px , 1080px 711px , 101px 1230px , 705px 681px , 1620px 1653px , 1671px 1559px , 1684px 1196px , 262px 1945px , 1987px 46px , 1125px 1023px , 970px 376px , 776px 612px , 296px 1974px , 1347px 1100px , 378px 59px , 822px 572px , 531px 168px , 139px 1683px , 1670px 1491px , 61px 1199px , 340px 1814px , 1900px 1967px , 1121px 537px , 614px 1058px , 105px 963px , 1962px 174px , 1431px 448px , 160px 1348px , 1722px 988px , 1688px 263px , 687px 351px , 573px 1108px , 538px 1476px , 1328px 1780px , 16px 1337px , 168px 1615px , 466px 1315px , 219px 749px , 393px 1067px , 76px 456px , 1185px 956px , 1669px 762px , 314px 875px , 1964px 937px , 694px 1217px , 343px 514px , 283px 137px , 1949px 413px , 433px 58px , 878px 994px , 1856px 1920px , 1569px 473px , 1073px 1390px , 309px 300px , 827px 517px , 20px 524px , 172px 339px , 231px 1316px , 1206px 1838px , 1829px 1268px , 1994px 503px , 211px 1380px , 384px 1399px , 9px 1648px , 1269px 1032px , 896px 1244px , 1876px 7px , 820px 392px , 1929px 99px , 1793px 107px , 944px 1016px , 966px 147px , 735px 1098px , 1477px 611px , 258px 994px , 1049px 1386px , 481px 893px , 1073px 1042px , 1412px 524px , 1635px 558px , 392px 56px , 1186px 1786px , 427px 931px , 718px 562px , 1888px 53px , 1272px 730px , 398px 1613px , 1803px 1751px , 608px 481px , 1045px 967px , 548px 1685px , 88px 1812px , 1806px 1907px , 802px 560px , 1293px 1144px , 1136px 1464px , 569px 101px , 566px 1141px , 279px 466px , 1420px 1076px , 443px 1065px , 1854px 1157px , 1479px 1734px , 1102px 103px , 1391px 1460px , 377px 1201px , 1582px 376px , 1535px 398px , 1464px 1430px , 1191px 607px , 1793px 883px , 302px 758px , 196px 1403px , 1499px 197px , 349px 19px , 1996px 794px , 1621px 1374px , 1431px 1993px , 1645px 964px , 54px 1267px , 81px 1438px , 374px 1905px , 1068px 1130px , 1287px 1360px , 1020px 1191px , 796px 463px , 1049px 1065px , 1505px 1277px , 35px 308px , 1311px 286px , 840px 851px , 1360px 124px , 189px 1204px , 73px 362px , 1108px 657px , 1974px 230px , 942px 889px , 709px 1310px , 733px 1252px , 23px 384px , 677px 872px , 1428px 774px , 384px 1383px , 1382px 1986px , 200px 43px , 691px 866px , 581px 814px , 1907px 1168px , 527px 2px , 1298px 122px , 553px 667px , 184px 75px , 1111px 1662px , 1744px 60px , 1548px 978px , 520px 1975px , 1384px 620px , 1370px 651px , 1863px 1028px , 1649px 565px , 1299px 531px , 640px 1203px , 1120px 556px , 642px 1049px , 1772px 778px , 1852px 164px , 1652px 1186px , 298px 1758px , 915px 1531px , 1599px 1319px , 1922px 1406px , 1223px 1721px , 1532px 1914px , 1573px 553px , 1832px 214px , 1470px 1161px , 1675px 513px , 1555px 1767px , 186px 1542px , 413px 593px , 553px 738px , 136px 1289px , 1964px 750px , 1313px 486px , 503px 1899px , 568px 569px , 249px 1453px , 1269px 1584px , 910px 1682px , 1617px 1980px , 1388px 946px , 1790px 91px , 394px 281px , 1736px 717px , 1024px 886px , 99px 706px , 1305px 405px , 1240px 82px , 316px 16px , 1360px 1752px , 27px 61px , 1762px 595px , 1966px 126px , 960px 1284px , 274px 472px , 839px 1666px , 726px 1562px , 590px 797px , 1562px 1255px , 735px 984px , 534px 891px , 1499px 696px , 883px 821px , 395px 738px , 1592px 497px , 926px 849px , 1648px 1324px , 1613px 1938px , 1623px 273px , 1459px 1644px , 1051px 1703px , 1585px 1801px , 1029px 1134px , 821px 373px , 1932px 979px , 980px 1887px , 441px 1290px , 1268px 502px , 756px 1564px , 224px 823px , 365px 830px , 1234px 1168px , 1054px 1633px , 1854px 81px , 382px 216px , 269px 221px , 82px 559px , 168px 1683px , 1181px 1516px , 435px 1444px , 952px 1084px , 720px 507px , 694px 1441px , 722px 1326px , 1317px 1905px , 1882px 809px , 1047px 1314px , 1767px 404px , 1429px 1830px , 135px 334px , 1976px 244px , 1407px 920px , 203px 993px , 1680px 45px , 147px 699px , 646px 671px , 518px 1157px , 1798px 506px , 1458px 244px , 786px 355px , 1239px 217px , 833px 1333px , 983px 890px , 857px 378px , 1016px 1192px , 1420px 213px , 271px 1137px , 1908px 1380px , 79px 1330px , 1945px 1138px , 1741px 801px , 544px 460px , 1945px 877px , 729px 1615px , 1702px 140px , 1787px 1925px , 1845px 752px , 576px 869px , 12px 1714px , 45px 1571px , 1183px 637px , 953px 1119px , 1300px 1583px , 1410px 1335px , 810px 1695px , 782px 923px , 787px 1372px , 745px 849px , 1545px 786px , 471px 520px , 530px 1293px , 1186px 877px , 476px 998px , 1563px 1649px , 1282px 1835px , 806px 1231px , 287px 1992px , 279px 181px , 1666px 826px , 1677px 570px , 83px 1614px , 1346px 756px , 405px 1847px , 561px 1381px , 1178px 958px , 980px 1402px , 1545px 1608px , 416px 439px , 1861px 1820px , 100px 888px , 1455px 786px , 271px 1302px , 148px 1890px , 234px 507px , 1431px 1800px , 491px 740px , 967px 1808px , 116px 548px , 1470px 318px , 371px 73px , 843px 876px , 1132px 71px , 1739px 976px , 1529px 936px , 235px 1083px , 1656px 510px , 1986px 790px , 1812px 146px , 554px 1563px , 1336px 540px , 57px 769px , 191px 1803px , 1460px 1032px , 1641px 28px , 458px 584px , 1270px 385px , 449px 1467px , 1782px 1303px , 46px 309px , 621px 38px , 1176px 1046px , 1037px 602px , 196px 1490px , 1182px 407px , 1485px 1175px , 278px 297px , 1376px 404px , 1628px 627px , 829px 1236px , 874px 885px , 937px 1298px , 69px 1339px , 922px 1922px , 821px 1907px , 479px 1460px , 1946px 1005px , 422px 1513px , 974px 1921px , 1363px 1486px , 1154px 1901px , 885px 9px , 38px 1616px , 80px 1912px , 286px 1081px , 1271px 522px , 959px 1782px , 1500px 1176px , 1187px 664px , 375px 1221px , 1536px 1137px , 269px 481px , 739px 24px , 1051px 1487px , 690px 349px , 47px 1831px , 1771px 1415px , 243px 773px , 670px 876px , 1612px 234px , 1897px 1672px , 576px 1071px , 824px 1307px , 1474px 265px , 1211px 1558px , 1457px 604px , 1828px 1700px , 1003px 1292px , 735px 916px , 736px 696px , 40px 337px , 1982px 1962px , 863px 798px , 887px 1102px , 1256px 177px , 687px 455px , 119px 1072px , 30px 1090px , 1794px 1668px , 153px 1612px , 1963px 1521px , 1247px 1037px , 415px 1750px , 395px 628px , 1311px 1687px , 906px 811px , 205px 904px , 887px 963px , 1110px 1799px , 1073px 452px , 1260px 1535px , 1290px 1628px , 1247px 881px , 753px 1328px , 1463px 63px , 1242px 1343px , 23px 31px , 1922px 147px , 1041px 270px , 587px 1289px , 1892px 139px , 1312px 256px , 1936px 751px , 660px 1107px , 604px 645px , 100px 41px , 1115px 1820px , 784px 1400px , 408px 291px , 1997px 1426px , 651px 578px , 1574px 1954px , 501px 1928px , 1629px 75px , 1206px 1437px , 1114px 517px , 1709px 238px , 1174px 1358px , 1655px 968px , 1042px 1474px , 215px 1932px , 1729px 428px , 214px 1970px , 1420px 1263px , 1035px 1717px , 1310px 110px , 917px 1839px , 554px 188px , 1917px 316px , 289px 440px , 203px 415px , 1566px 33px , 1929px 1418px , 53px 1466px , 920px 328px , 746px 1537px , 1879px 282px , 40px 1435px , 1989px 1885px , 1907px 950px , 1599px 603px , 1724px 265px , 1120px 230px , 767px 578px , 295px 33px , 1118px 1339px , 1374px 1478px , 1957px 1912px , 48px 1956px , 1445px 847px , 326px 1737px , 1159px 934px , 223px 1330px , 29px 180px , 1941px 507px , 484px 989px , 1089px 228px , 1203px 1171px , 299px 108px , 1795px 1309px , 1876px 1007px , 1990px 731px , 1078px 1486px , 196px 887px , 1330px 1506px , 108px 694px , 935px 856px , 1803px 86px , 762px 901px , 1707px 645px , 649px 1809px , 371px 1484px , 410px 207px , 1812px 1172px , 414px 1491px , 684px 1561px , 803px 1227px , 1637px 1468px , 744px 1718px , 648px 13px , 1189px 1406px , 1434px 1950px , 605px 1981px , 333px 708px , 319px 1452px , 1367px 1225px , 93px 1334px , 2px 160px , 1884px 1029px , 1956px 1443px , 871px 1090px , 975px 135px , 969px 546px , 755px 1554px , 850px 86px , 931px 673px , 951px 39px , 405px 1738px , 522px 8px , 1754px 169px , 567px 1401px , 12px 1735px , 1523px 1537px , 1609px 868px , 1526px 966px , 751px 620px , 17px 672px , 764px 1112px , 1524px 1196px , 1254px 874px , 1132px 1691px , 1860px 856px , 563px 1621px , 1037px 1589px , 749px 970px , 1291px 1704px , 1475px 441px , 1604px 1179px , 1013px 1176px , 843px 96px , 190px 177px , 840px 1923px , 1663px 57px , 524px 173px , 1389px 1698px , 912px 1793px , 49px 1316px , 714px 1365px , 1488px 39px , 17px 180px , 1825px 1250px , 368px 751px , 5px 430px , 228px 1115px , 540px 234px , 1022px 890px , 1124px 1575px , 1278px 603px , 661px 554px , 1305px 738px , 1441px 1119px , 530px 332px , 1076px 1867px , 1311px 1913px , 1069px 669px , 50px 191px , 1249px 1889px , 641px 1084px , 927px 7px , 1020px 925px , 781px 683px , 774px 1038px , 1918px 504px , 1007px 11px , 650px 659px , 1476px 136px , 1193px 1547px , 543px 1817px , 1284px 195px , 1149px 1450px , 180px 1584px , 942px 695px , 1171px 974px , 1506px 1516px , 1303px 1020px , 833px 1243px , 288px 6px , 1825px 727px , 829px 1637px , 113px 1063px , 1419px 659px , 1727px 1568px , 1629px 431px , 877px 1840px , 353px 1739px , 760px 1692px , 230px 973px , 1501px 1589px , 1496px 1929px , 785px 1521px , 479px 583px , 1533px 1200px , 697px 562px , 594px 1148px , 1241px 469px , 1632px 1240px , 582px 30px , 1695px 1056px , 1411px 1870px , 1721px 347px , 626px 439px , 267px 56px , 1183px 110px , 659px 845px , 650px 1242px , 1894px 1310px , 454px 1308px , 1491px 1859px , 957px 395px , 1971px 1071px , 1951px 1875px , 681px 1696px , 730px 1811px , 1440px 1309px , 586px 1470px , 1509px 970px , 431px 887px , 1238px 1505px , 961px 1934px , 821px 28px , 1286px 751px , 1272px 1720px , 917px 794px , 1947px 1387px , 1998px 272px , 1242px 1680px , 913px 1541px , 512px 1587px , 1592px 608px , 128px 537px , 414px 237px , 93px 299px , 1316px 1059px , 1565px 1135px , 515px 1608px , 1156px 352px , 1670px 68px , 1107px 1466px , 747px 1450px , 792px 1020px , 404px 1697px , 1145px 1116px , 1906px 1721px , 843px 183px , 1856px 484px , 1857px 684px , 67px 508px , 1294px 1343px , 700px 681px , 809px 17px , 1956px 1202px , 569px 1322px , 1521px 1874px , 805px 14px , 408px 1457px , 1102px 811px , 1623px 1071px;\n            box-shadow: 165px 1791px , 504px 1437px , 1756px 719px , 1922px 431px , 277px 1616px , 1117px 789px , 1630px 713px , 414px 638px , 1607px 1514px , 1158px 1275px , 725px 1909px , 511px 252px , 1508px 1784px , 1424px 141px , 1037px 229px , 307px 1461px , 351px 1716px , 1424px 1438px , 1170px 1148px , 1930px 990px , 1531px 1909px , 1823px 833px , 1443px 1594px , 299px 1465px , 1978px 1998px , 1473px 795px , 842px 1199px , 586px 1823px , 140px 478px , 1817px 173px , 1748px 248px , 878px 817px , 1405px 1370px , 1356px 865px , 1961px 688px , 1080px 711px , 101px 1230px , 705px 681px , 1620px 1653px , 1671px 1559px , 1684px 1196px , 262px 1945px , 1987px 46px , 1125px 1023px , 970px 376px , 776px 612px , 296px 1974px , 1347px 1100px , 378px 59px , 822px 572px , 531px 168px , 139px 1683px , 1670px 1491px , 61px 1199px , 340px 1814px , 1900px 1967px , 1121px 537px , 614px 1058px , 105px 963px , 1962px 174px , 1431px 448px , 160px 1348px , 1722px 988px , 1688px 263px , 687px 351px , 573px 1108px , 538px 1476px , 1328px 1780px , 16px 1337px , 168px 1615px , 466px 1315px , 219px 749px , 393px 1067px , 76px 456px , 1185px 956px , 1669px 762px , 314px 875px , 1964px 937px , 694px 1217px , 343px 514px , 283px 137px , 1949px 413px , 433px 58px , 878px 994px , 1856px 1920px , 1569px 473px , 1073px 1390px , 309px 300px , 827px 517px , 20px 524px , 172px 339px , 231px 1316px , 1206px 1838px , 1829px 1268px , 1994px 503px , 211px 1380px , 384px 1399px , 9px 1648px , 1269px 1032px , 896px 1244px , 1876px 7px , 820px 392px , 1929px 99px , 1793px 107px , 944px 1016px , 966px 147px , 735px 1098px , 1477px 611px , 258px 994px , 1049px 1386px , 481px 893px , 1073px 1042px , 1412px 524px , 1635px 558px , 392px 56px , 1186px 1786px , 427px 931px , 718px 562px , 1888px 53px , 1272px 730px , 398px 1613px , 1803px 1751px , 608px 481px , 1045px 967px , 548px 1685px , 88px 1812px , 1806px 1907px , 802px 560px , 1293px 1144px , 1136px 1464px , 569px 101px , 566px 1141px , 279px 466px , 1420px 1076px , 443px 1065px , 1854px 1157px , 1479px 1734px , 1102px 103px , 1391px 1460px , 377px 1201px , 1582px 376px , 1535px 398px , 1464px 1430px , 1191px 607px , 1793px 883px , 302px 758px , 196px 1403px , 1499px 197px , 349px 19px , 1996px 794px , 1621px 1374px , 1431px 1993px , 1645px 964px , 54px 1267px , 81px 1438px , 374px 1905px , 1068px 1130px , 1287px 1360px , 1020px 1191px , 796px 463px , 1049px 1065px , 1505px 1277px , 35px 308px , 1311px 286px , 840px 851px , 1360px 124px , 189px 1204px , 73px 362px , 1108px 657px , 1974px 230px , 942px 889px , 709px 1310px , 733px 1252px , 23px 384px , 677px 872px , 1428px 774px , 384px 1383px , 1382px 1986px , 200px 43px , 691px 866px , 581px 814px , 1907px 1168px , 527px 2px , 1298px 122px , 553px 667px , 184px 75px , 1111px 1662px , 1744px 60px , 1548px 978px , 520px 1975px , 1384px 620px , 1370px 651px , 1863px 1028px , 1649px 565px , 1299px 531px , 640px 1203px , 1120px 556px , 642px 1049px , 1772px 778px , 1852px 164px , 1652px 1186px , 298px 1758px , 915px 1531px , 1599px 1319px , 1922px 1406px , 1223px 1721px , 1532px 1914px , 1573px 553px , 1832px 214px , 1470px 1161px , 1675px 513px , 1555px 1767px , 186px 1542px , 413px 593px , 553px 738px , 136px 1289px , 1964px 750px , 1313px 486px , 503px 1899px , 568px 569px , 249px 1453px , 1269px 1584px , 910px 1682px , 1617px 1980px , 1388px 946px , 1790px 91px , 394px 281px , 1736px 717px , 1024px 886px , 99px 706px , 1305px 405px , 1240px 82px , 316px 16px , 1360px 1752px , 27px 61px , 1762px 595px , 1966px 126px , 960px 1284px , 274px 472px , 839px 1666px , 726px 1562px , 590px 797px , 1562px 1255px , 735px 984px , 534px 891px , 1499px 696px , 883px 821px , 395px 738px , 1592px 497px , 926px 849px , 1648px 1324px , 1613px 1938px , 1623px 273px , 1459px 1644px , 1051px 1703px , 1585px 1801px , 1029px 1134px , 821px 373px , 1932px 979px , 980px 1887px , 441px 1290px , 1268px 502px , 756px 1564px , 224px 823px , 365px 830px , 1234px 1168px , 1054px 1633px , 1854px 81px , 382px 216px , 269px 221px , 82px 559px , 168px 1683px , 1181px 1516px , 435px 1444px , 952px 1084px , 720px 507px , 694px 1441px , 722px 1326px , 1317px 1905px , 1882px 809px , 1047px 1314px , 1767px 404px , 1429px 1830px , 135px 334px , 1976px 244px , 1407px 920px , 203px 993px , 1680px 45px , 147px 699px , 646px 671px , 518px 1157px , 1798px 506px , 1458px 244px , 786px 355px , 1239px 217px , 833px 1333px , 983px 890px , 857px 378px , 1016px 1192px , 1420px 213px , 271px 1137px , 1908px 1380px , 79px 1330px , 1945px 1138px , 1741px 801px , 544px 460px , 1945px 877px , 729px 1615px , 1702px 140px , 1787px 1925px , 1845px 752px , 576px 869px , 12px 1714px , 45px 1571px , 1183px 637px , 953px 1119px , 1300px 1583px , 1410px 1335px , 810px 1695px , 782px 923px , 787px 1372px , 745px 849px , 1545px 786px , 471px 520px , 530px 1293px , 1186px 877px , 476px 998px , 1563px 1649px , 1282px 1835px , 806px 1231px , 287px 1992px , 279px 181px , 1666px 826px , 1677px 570px , 83px 1614px , 1346px 756px , 405px 1847px , 561px 1381px , 1178px 958px , 980px 1402px , 1545px 1608px , 416px 439px , 1861px 1820px , 100px 888px , 1455px 786px , 271px 1302px , 148px 1890px , 234px 507px , 1431px 1800px , 491px 740px , 967px 1808px , 116px 548px , 1470px 318px , 371px 73px , 843px 876px , 1132px 71px , 1739px 976px , 1529px 936px , 235px 1083px , 1656px 510px , 1986px 790px , 1812px 146px , 554px 1563px , 1336px 540px , 57px 769px , 191px 1803px , 1460px 1032px , 1641px 28px , 458px 584px , 1270px 385px , 449px 1467px , 1782px 1303px , 46px 309px , 621px 38px , 1176px 1046px , 1037px 602px , 196px 1490px , 1182px 407px , 1485px 1175px , 278px 297px , 1376px 404px , 1628px 627px , 829px 1236px , 874px 885px , 937px 1298px , 69px 1339px , 922px 1922px , 821px 1907px , 479px 1460px , 1946px 1005px , 422px 1513px , 974px 1921px , 1363px 1486px , 1154px 1901px , 885px 9px , 38px 1616px , 80px 1912px , 286px 1081px , 1271px 522px , 959px 1782px , 1500px 1176px , 1187px 664px , 375px 1221px , 1536px 1137px , 269px 481px , 739px 24px , 1051px 1487px , 690px 349px , 47px 1831px , 1771px 1415px , 243px 773px , 670px 876px , 1612px 234px , 1897px 1672px , 576px 1071px , 824px 1307px , 1474px 265px , 1211px 1558px , 1457px 604px , 1828px 1700px , 1003px 1292px , 735px 916px , 736px 696px , 40px 337px , 1982px 1962px , 863px 798px , 887px 1102px , 1256px 177px , 687px 455px , 119px 1072px , 30px 1090px , 1794px 1668px , 153px 1612px , 1963px 1521px , 1247px 1037px , 415px 1750px , 395px 628px , 1311px 1687px , 906px 811px , 205px 904px , 887px 963px , 1110px 1799px , 1073px 452px , 1260px 1535px , 1290px 1628px , 1247px 881px , 753px 1328px , 1463px 63px , 1242px 1343px , 23px 31px , 1922px 147px , 1041px 270px , 587px 1289px , 1892px 139px , 1312px 256px , 1936px 751px , 660px 1107px , 604px 645px , 100px 41px , 1115px 1820px , 784px 1400px , 408px 291px , 1997px 1426px , 651px 578px , 1574px 1954px , 501px 1928px , 1629px 75px , 1206px 1437px , 1114px 517px , 1709px 238px , 1174px 1358px , 1655px 968px , 1042px 1474px , 215px 1932px , 1729px 428px , 214px 1970px , 1420px 1263px , 1035px 1717px , 1310px 110px , 917px 1839px , 554px 188px , 1917px 316px , 289px 440px , 203px 415px , 1566px 33px , 1929px 1418px , 53px 1466px , 920px 328px , 746px 1537px , 1879px 282px , 40px 1435px , 1989px 1885px , 1907px 950px , 1599px 603px , 1724px 265px , 1120px 230px , 767px 578px , 295px 33px , 1118px 1339px , 1374px 1478px , 1957px 1912px , 48px 1956px , 1445px 847px , 326px 1737px , 1159px 934px , 223px 1330px , 29px 180px , 1941px 507px , 484px 989px , 1089px 228px , 1203px 1171px , 299px 108px , 1795px 1309px , 1876px 1007px , 1990px 731px , 1078px 1486px , 196px 887px , 1330px 1506px , 108px 694px , 935px 856px , 1803px 86px , 762px 901px , 1707px 645px , 649px 1809px , 371px 1484px , 410px 207px , 1812px 1172px , 414px 1491px , 684px 1561px , 803px 1227px , 1637px 1468px , 744px 1718px , 648px 13px , 1189px 1406px , 1434px 1950px , 605px 1981px , 333px 708px , 319px 1452px , 1367px 1225px , 93px 1334px , 2px 160px , 1884px 1029px , 1956px 1443px , 871px 1090px , 975px 135px , 969px 546px , 755px 1554px , 850px 86px , 931px 673px , 951px 39px , 405px 1738px , 522px 8px , 1754px 169px , 567px 1401px , 12px 1735px , 1523px 1537px , 1609px 868px , 1526px 966px , 751px 620px , 17px 672px , 764px 1112px , 1524px 1196px , 1254px 874px , 1132px 1691px , 1860px 856px , 563px 1621px , 1037px 1589px , 749px 970px , 1291px 1704px , 1475px 441px , 1604px 1179px , 1013px 1176px , 843px 96px , 190px 177px , 840px 1923px , 1663px 57px , 524px 173px , 1389px 1698px , 912px 1793px , 49px 1316px , 714px 1365px , 1488px 39px , 17px 180px , 1825px 1250px , 368px 751px , 5px 430px , 228px 1115px , 540px 234px , 1022px 890px , 1124px 1575px , 1278px 603px , 661px 554px , 1305px 738px , 1441px 1119px , 530px 332px , 1076px 1867px , 1311px 1913px , 1069px 669px , 50px 191px , 1249px 1889px , 641px 1084px , 927px 7px , 1020px 925px , 781px 683px , 774px 1038px , 1918px 504px , 1007px 11px , 650px 659px , 1476px 136px , 1193px 1547px , 543px 1817px , 1284px 195px , 1149px 1450px , 180px 1584px , 942px 695px , 1171px 974px , 1506px 1516px , 1303px 1020px , 833px 1243px , 288px 6px , 1825px 727px , 829px 1637px , 113px 1063px , 1419px 659px , 1727px 1568px , 1629px 431px , 877px 1840px , 353px 1739px , 760px 1692px , 230px 973px , 1501px 1589px , 1496px 1929px , 785px 1521px , 479px 583px , 1533px 1200px , 697px 562px , 594px 1148px , 1241px 469px , 1632px 1240px , 582px 30px , 1695px 1056px , 1411px 1870px , 1721px 347px , 626px 439px , 267px 56px , 1183px 110px , 659px 845px , 650px 1242px , 1894px 1310px , 454px 1308px , 1491px 1859px , 957px 395px , 1971px 1071px , 1951px 1875px , 681px 1696px , 730px 1811px , 1440px 1309px , 586px 1470px , 1509px 970px , 431px 887px , 1238px 1505px , 961px 1934px , 821px 28px , 1286px 751px , 1272px 1720px , 917px 794px , 1947px 1387px , 1998px 272px , 1242px 1680px , 913px 1541px , 512px 1587px , 1592px 608px , 128px 537px , 414px 237px , 93px 299px , 1316px 1059px , 1565px 1135px , 515px 1608px , 1156px 352px , 1670px 68px , 1107px 1466px , 747px 1450px , 792px 1020px , 404px 1697px , 1145px 1116px , 1906px 1721px , 843px 183px , 1856px 484px , 1857px 684px , 67px 508px , 1294px 1343px , 700px 681px , 809px 17px , 1956px 1202px , 569px 1322px , 1521px 1874px , 805px 14px , 408px 1457px , 1102px 811px , 1623px 1071px;\n    -webkit-animation: animStar 150s linear infinite;\n            animation: animStar 150s linear infinite; }\n  .parallax #stars1:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 1px;\n      height: 1px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 165px 1791px , 504px 1437px , 1756px 719px , 1922px 431px , 277px 1616px , 1117px 789px , 1630px 713px , 414px 638px , 1607px 1514px , 1158px 1275px , 725px 1909px , 511px 252px , 1508px 1784px , 1424px 141px , 1037px 229px , 307px 1461px , 351px 1716px , 1424px 1438px , 1170px 1148px , 1930px 990px , 1531px 1909px , 1823px 833px , 1443px 1594px , 299px 1465px , 1978px 1998px , 1473px 795px , 842px 1199px , 586px 1823px , 140px 478px , 1817px 173px , 1748px 248px , 878px 817px , 1405px 1370px , 1356px 865px , 1961px 688px , 1080px 711px , 101px 1230px , 705px 681px , 1620px 1653px , 1671px 1559px , 1684px 1196px , 262px 1945px , 1987px 46px , 1125px 1023px , 970px 376px , 776px 612px , 296px 1974px , 1347px 1100px , 378px 59px , 822px 572px , 531px 168px , 139px 1683px , 1670px 1491px , 61px 1199px , 340px 1814px , 1900px 1967px , 1121px 537px , 614px 1058px , 105px 963px , 1962px 174px , 1431px 448px , 160px 1348px , 1722px 988px , 1688px 263px , 687px 351px , 573px 1108px , 538px 1476px , 1328px 1780px , 16px 1337px , 168px 1615px , 466px 1315px , 219px 749px , 393px 1067px , 76px 456px , 1185px 956px , 1669px 762px , 314px 875px , 1964px 937px , 694px 1217px , 343px 514px , 283px 137px , 1949px 413px , 433px 58px , 878px 994px , 1856px 1920px , 1569px 473px , 1073px 1390px , 309px 300px , 827px 517px , 20px 524px , 172px 339px , 231px 1316px , 1206px 1838px , 1829px 1268px , 1994px 503px , 211px 1380px , 384px 1399px , 9px 1648px , 1269px 1032px , 896px 1244px , 1876px 7px , 820px 392px , 1929px 99px , 1793px 107px , 944px 1016px , 966px 147px , 735px 1098px , 1477px 611px , 258px 994px , 1049px 1386px , 481px 893px , 1073px 1042px , 1412px 524px , 1635px 558px , 392px 56px , 1186px 1786px , 427px 931px , 718px 562px , 1888px 53px , 1272px 730px , 398px 1613px , 1803px 1751px , 608px 481px , 1045px 967px , 548px 1685px , 88px 1812px , 1806px 1907px , 802px 560px , 1293px 1144px , 1136px 1464px , 569px 101px , 566px 1141px , 279px 466px , 1420px 1076px , 443px 1065px , 1854px 1157px , 1479px 1734px , 1102px 103px , 1391px 1460px , 377px 1201px , 1582px 376px , 1535px 398px , 1464px 1430px , 1191px 607px , 1793px 883px , 302px 758px , 196px 1403px , 1499px 197px , 349px 19px , 1996px 794px , 1621px 1374px , 1431px 1993px , 1645px 964px , 54px 1267px , 81px 1438px , 374px 1905px , 1068px 1130px , 1287px 1360px , 1020px 1191px , 796px 463px , 1049px 1065px , 1505px 1277px , 35px 308px , 1311px 286px , 840px 851px , 1360px 124px , 189px 1204px , 73px 362px , 1108px 657px , 1974px 230px , 942px 889px , 709px 1310px , 733px 1252px , 23px 384px , 677px 872px , 1428px 774px , 384px 1383px , 1382px 1986px , 200px 43px , 691px 866px , 581px 814px , 1907px 1168px , 527px 2px , 1298px 122px , 553px 667px , 184px 75px , 1111px 1662px , 1744px 60px , 1548px 978px , 520px 1975px , 1384px 620px , 1370px 651px , 1863px 1028px , 1649px 565px , 1299px 531px , 640px 1203px , 1120px 556px , 642px 1049px , 1772px 778px , 1852px 164px , 1652px 1186px , 298px 1758px , 915px 1531px , 1599px 1319px , 1922px 1406px , 1223px 1721px , 1532px 1914px , 1573px 553px , 1832px 214px , 1470px 1161px , 1675px 513px , 1555px 1767px , 186px 1542px , 413px 593px , 553px 738px , 136px 1289px , 1964px 750px , 1313px 486px , 503px 1899px , 568px 569px , 249px 1453px , 1269px 1584px , 910px 1682px , 1617px 1980px , 1388px 946px , 1790px 91px , 394px 281px , 1736px 717px , 1024px 886px , 99px 706px , 1305px 405px , 1240px 82px , 316px 16px , 1360px 1752px , 27px 61px , 1762px 595px , 1966px 126px , 960px 1284px , 274px 472px , 839px 1666px , 726px 1562px , 590px 797px , 1562px 1255px , 735px 984px , 534px 891px , 1499px 696px , 883px 821px , 395px 738px , 1592px 497px , 926px 849px , 1648px 1324px , 1613px 1938px , 1623px 273px , 1459px 1644px , 1051px 1703px , 1585px 1801px , 1029px 1134px , 821px 373px , 1932px 979px , 980px 1887px , 441px 1290px , 1268px 502px , 756px 1564px , 224px 823px , 365px 830px , 1234px 1168px , 1054px 1633px , 1854px 81px , 382px 216px , 269px 221px , 82px 559px , 168px 1683px , 1181px 1516px , 435px 1444px , 952px 1084px , 720px 507px , 694px 1441px , 722px 1326px , 1317px 1905px , 1882px 809px , 1047px 1314px , 1767px 404px , 1429px 1830px , 135px 334px , 1976px 244px , 1407px 920px , 203px 993px , 1680px 45px , 147px 699px , 646px 671px , 518px 1157px , 1798px 506px , 1458px 244px , 786px 355px , 1239px 217px , 833px 1333px , 983px 890px , 857px 378px , 1016px 1192px , 1420px 213px , 271px 1137px , 1908px 1380px , 79px 1330px , 1945px 1138px , 1741px 801px , 544px 460px , 1945px 877px , 729px 1615px , 1702px 140px , 1787px 1925px , 1845px 752px , 576px 869px , 12px 1714px , 45px 1571px , 1183px 637px , 953px 1119px , 1300px 1583px , 1410px 1335px , 810px 1695px , 782px 923px , 787px 1372px , 745px 849px , 1545px 786px , 471px 520px , 530px 1293px , 1186px 877px , 476px 998px , 1563px 1649px , 1282px 1835px , 806px 1231px , 287px 1992px , 279px 181px , 1666px 826px , 1677px 570px , 83px 1614px , 1346px 756px , 405px 1847px , 561px 1381px , 1178px 958px , 980px 1402px , 1545px 1608px , 416px 439px , 1861px 1820px , 100px 888px , 1455px 786px , 271px 1302px , 148px 1890px , 234px 507px , 1431px 1800px , 491px 740px , 967px 1808px , 116px 548px , 1470px 318px , 371px 73px , 843px 876px , 1132px 71px , 1739px 976px , 1529px 936px , 235px 1083px , 1656px 510px , 1986px 790px , 1812px 146px , 554px 1563px , 1336px 540px , 57px 769px , 191px 1803px , 1460px 1032px , 1641px 28px , 458px 584px , 1270px 385px , 449px 1467px , 1782px 1303px , 46px 309px , 621px 38px , 1176px 1046px , 1037px 602px , 196px 1490px , 1182px 407px , 1485px 1175px , 278px 297px , 1376px 404px , 1628px 627px , 829px 1236px , 874px 885px , 937px 1298px , 69px 1339px , 922px 1922px , 821px 1907px , 479px 1460px , 1946px 1005px , 422px 1513px , 974px 1921px , 1363px 1486px , 1154px 1901px , 885px 9px , 38px 1616px , 80px 1912px , 286px 1081px , 1271px 522px , 959px 1782px , 1500px 1176px , 1187px 664px , 375px 1221px , 1536px 1137px , 269px 481px , 739px 24px , 1051px 1487px , 690px 349px , 47px 1831px , 1771px 1415px , 243px 773px , 670px 876px , 1612px 234px , 1897px 1672px , 576px 1071px , 824px 1307px , 1474px 265px , 1211px 1558px , 1457px 604px , 1828px 1700px , 1003px 1292px , 735px 916px , 736px 696px , 40px 337px , 1982px 1962px , 863px 798px , 887px 1102px , 1256px 177px , 687px 455px , 119px 1072px , 30px 1090px , 1794px 1668px , 153px 1612px , 1963px 1521px , 1247px 1037px , 415px 1750px , 395px 628px , 1311px 1687px , 906px 811px , 205px 904px , 887px 963px , 1110px 1799px , 1073px 452px , 1260px 1535px , 1290px 1628px , 1247px 881px , 753px 1328px , 1463px 63px , 1242px 1343px , 23px 31px , 1922px 147px , 1041px 270px , 587px 1289px , 1892px 139px , 1312px 256px , 1936px 751px , 660px 1107px , 604px 645px , 100px 41px , 1115px 1820px , 784px 1400px , 408px 291px , 1997px 1426px , 651px 578px , 1574px 1954px , 501px 1928px , 1629px 75px , 1206px 1437px , 1114px 517px , 1709px 238px , 1174px 1358px , 1655px 968px , 1042px 1474px , 215px 1932px , 1729px 428px , 214px 1970px , 1420px 1263px , 1035px 1717px , 1310px 110px , 917px 1839px , 554px 188px , 1917px 316px , 289px 440px , 203px 415px , 1566px 33px , 1929px 1418px , 53px 1466px , 920px 328px , 746px 1537px , 1879px 282px , 40px 1435px , 1989px 1885px , 1907px 950px , 1599px 603px , 1724px 265px , 1120px 230px , 767px 578px , 295px 33px , 1118px 1339px , 1374px 1478px , 1957px 1912px , 48px 1956px , 1445px 847px , 326px 1737px , 1159px 934px , 223px 1330px , 29px 180px , 1941px 507px , 484px 989px , 1089px 228px , 1203px 1171px , 299px 108px , 1795px 1309px , 1876px 1007px , 1990px 731px , 1078px 1486px , 196px 887px , 1330px 1506px , 108px 694px , 935px 856px , 1803px 86px , 762px 901px , 1707px 645px , 649px 1809px , 371px 1484px , 410px 207px , 1812px 1172px , 414px 1491px , 684px 1561px , 803px 1227px , 1637px 1468px , 744px 1718px , 648px 13px , 1189px 1406px , 1434px 1950px , 605px 1981px , 333px 708px , 319px 1452px , 1367px 1225px , 93px 1334px , 2px 160px , 1884px 1029px , 1956px 1443px , 871px 1090px , 975px 135px , 969px 546px , 755px 1554px , 850px 86px , 931px 673px , 951px 39px , 405px 1738px , 522px 8px , 1754px 169px , 567px 1401px , 12px 1735px , 1523px 1537px , 1609px 868px , 1526px 966px , 751px 620px , 17px 672px , 764px 1112px , 1524px 1196px , 1254px 874px , 1132px 1691px , 1860px 856px , 563px 1621px , 1037px 1589px , 749px 970px , 1291px 1704px , 1475px 441px , 1604px 1179px , 1013px 1176px , 843px 96px , 190px 177px , 840px 1923px , 1663px 57px , 524px 173px , 1389px 1698px , 912px 1793px , 49px 1316px , 714px 1365px , 1488px 39px , 17px 180px , 1825px 1250px , 368px 751px , 5px 430px , 228px 1115px , 540px 234px , 1022px 890px , 1124px 1575px , 1278px 603px , 661px 554px , 1305px 738px , 1441px 1119px , 530px 332px , 1076px 1867px , 1311px 1913px , 1069px 669px , 50px 191px , 1249px 1889px , 641px 1084px , 927px 7px , 1020px 925px , 781px 683px , 774px 1038px , 1918px 504px , 1007px 11px , 650px 659px , 1476px 136px , 1193px 1547px , 543px 1817px , 1284px 195px , 1149px 1450px , 180px 1584px , 942px 695px , 1171px 974px , 1506px 1516px , 1303px 1020px , 833px 1243px , 288px 6px , 1825px 727px , 829px 1637px , 113px 1063px , 1419px 659px , 1727px 1568px , 1629px 431px , 877px 1840px , 353px 1739px , 760px 1692px , 230px 973px , 1501px 1589px , 1496px 1929px , 785px 1521px , 479px 583px , 1533px 1200px , 697px 562px , 594px 1148px , 1241px 469px , 1632px 1240px , 582px 30px , 1695px 1056px , 1411px 1870px , 1721px 347px , 626px 439px , 267px 56px , 1183px 110px , 659px 845px , 650px 1242px , 1894px 1310px , 454px 1308px , 1491px 1859px , 957px 395px , 1971px 1071px , 1951px 1875px , 681px 1696px , 730px 1811px , 1440px 1309px , 586px 1470px , 1509px 970px , 431px 887px , 1238px 1505px , 961px 1934px , 821px 28px , 1286px 751px , 1272px 1720px , 917px 794px , 1947px 1387px , 1998px 272px , 1242px 1680px , 913px 1541px , 512px 1587px , 1592px 608px , 128px 537px , 414px 237px , 93px 299px , 1316px 1059px , 1565px 1135px , 515px 1608px , 1156px 352px , 1670px 68px , 1107px 1466px , 747px 1450px , 792px 1020px , 404px 1697px , 1145px 1116px , 1906px 1721px , 843px 183px , 1856px 484px , 1857px 684px , 67px 508px , 1294px 1343px , 700px 681px , 809px 17px , 1956px 1202px , 569px 1322px , 1521px 1874px , 805px 14px , 408px 1457px , 1102px 811px , 1623px 1071px;\n              box-shadow: 165px 1791px , 504px 1437px , 1756px 719px , 1922px 431px , 277px 1616px , 1117px 789px , 1630px 713px , 414px 638px , 1607px 1514px , 1158px 1275px , 725px 1909px , 511px 252px , 1508px 1784px , 1424px 141px , 1037px 229px , 307px 1461px , 351px 1716px , 1424px 1438px , 1170px 1148px , 1930px 990px , 1531px 1909px , 1823px 833px , 1443px 1594px , 299px 1465px , 1978px 1998px , 1473px 795px , 842px 1199px , 586px 1823px , 140px 478px , 1817px 173px , 1748px 248px , 878px 817px , 1405px 1370px , 1356px 865px , 1961px 688px , 1080px 711px , 101px 1230px , 705px 681px , 1620px 1653px , 1671px 1559px , 1684px 1196px , 262px 1945px , 1987px 46px , 1125px 1023px , 970px 376px , 776px 612px , 296px 1974px , 1347px 1100px , 378px 59px , 822px 572px , 531px 168px , 139px 1683px , 1670px 1491px , 61px 1199px , 340px 1814px , 1900px 1967px , 1121px 537px , 614px 1058px , 105px 963px , 1962px 174px , 1431px 448px , 160px 1348px , 1722px 988px , 1688px 263px , 687px 351px , 573px 1108px , 538px 1476px , 1328px 1780px , 16px 1337px , 168px 1615px , 466px 1315px , 219px 749px , 393px 1067px , 76px 456px , 1185px 956px , 1669px 762px , 314px 875px , 1964px 937px , 694px 1217px , 343px 514px , 283px 137px , 1949px 413px , 433px 58px , 878px 994px , 1856px 1920px , 1569px 473px , 1073px 1390px , 309px 300px , 827px 517px , 20px 524px , 172px 339px , 231px 1316px , 1206px 1838px , 1829px 1268px , 1994px 503px , 211px 1380px , 384px 1399px , 9px 1648px , 1269px 1032px , 896px 1244px , 1876px 7px , 820px 392px , 1929px 99px , 1793px 107px , 944px 1016px , 966px 147px , 735px 1098px , 1477px 611px , 258px 994px , 1049px 1386px , 481px 893px , 1073px 1042px , 1412px 524px , 1635px 558px , 392px 56px , 1186px 1786px , 427px 931px , 718px 562px , 1888px 53px , 1272px 730px , 398px 1613px , 1803px 1751px , 608px 481px , 1045px 967px , 548px 1685px , 88px 1812px , 1806px 1907px , 802px 560px , 1293px 1144px , 1136px 1464px , 569px 101px , 566px 1141px , 279px 466px , 1420px 1076px , 443px 1065px , 1854px 1157px , 1479px 1734px , 1102px 103px , 1391px 1460px , 377px 1201px , 1582px 376px , 1535px 398px , 1464px 1430px , 1191px 607px , 1793px 883px , 302px 758px , 196px 1403px , 1499px 197px , 349px 19px , 1996px 794px , 1621px 1374px , 1431px 1993px , 1645px 964px , 54px 1267px , 81px 1438px , 374px 1905px , 1068px 1130px , 1287px 1360px , 1020px 1191px , 796px 463px , 1049px 1065px , 1505px 1277px , 35px 308px , 1311px 286px , 840px 851px , 1360px 124px , 189px 1204px , 73px 362px , 1108px 657px , 1974px 230px , 942px 889px , 709px 1310px , 733px 1252px , 23px 384px , 677px 872px , 1428px 774px , 384px 1383px , 1382px 1986px , 200px 43px , 691px 866px , 581px 814px , 1907px 1168px , 527px 2px , 1298px 122px , 553px 667px , 184px 75px , 1111px 1662px , 1744px 60px , 1548px 978px , 520px 1975px , 1384px 620px , 1370px 651px , 1863px 1028px , 1649px 565px , 1299px 531px , 640px 1203px , 1120px 556px , 642px 1049px , 1772px 778px , 1852px 164px , 1652px 1186px , 298px 1758px , 915px 1531px , 1599px 1319px , 1922px 1406px , 1223px 1721px , 1532px 1914px , 1573px 553px , 1832px 214px , 1470px 1161px , 1675px 513px , 1555px 1767px , 186px 1542px , 413px 593px , 553px 738px , 136px 1289px , 1964px 750px , 1313px 486px , 503px 1899px , 568px 569px , 249px 1453px , 1269px 1584px , 910px 1682px , 1617px 1980px , 1388px 946px , 1790px 91px , 394px 281px , 1736px 717px , 1024px 886px , 99px 706px , 1305px 405px , 1240px 82px , 316px 16px , 1360px 1752px , 27px 61px , 1762px 595px , 1966px 126px , 960px 1284px , 274px 472px , 839px 1666px , 726px 1562px , 590px 797px , 1562px 1255px , 735px 984px , 534px 891px , 1499px 696px , 883px 821px , 395px 738px , 1592px 497px , 926px 849px , 1648px 1324px , 1613px 1938px , 1623px 273px , 1459px 1644px , 1051px 1703px , 1585px 1801px , 1029px 1134px , 821px 373px , 1932px 979px , 980px 1887px , 441px 1290px , 1268px 502px , 756px 1564px , 224px 823px , 365px 830px , 1234px 1168px , 1054px 1633px , 1854px 81px , 382px 216px , 269px 221px , 82px 559px , 168px 1683px , 1181px 1516px , 435px 1444px , 952px 1084px , 720px 507px , 694px 1441px , 722px 1326px , 1317px 1905px , 1882px 809px , 1047px 1314px , 1767px 404px , 1429px 1830px , 135px 334px , 1976px 244px , 1407px 920px , 203px 993px , 1680px 45px , 147px 699px , 646px 671px , 518px 1157px , 1798px 506px , 1458px 244px , 786px 355px , 1239px 217px , 833px 1333px , 983px 890px , 857px 378px , 1016px 1192px , 1420px 213px , 271px 1137px , 1908px 1380px , 79px 1330px , 1945px 1138px , 1741px 801px , 544px 460px , 1945px 877px , 729px 1615px , 1702px 140px , 1787px 1925px , 1845px 752px , 576px 869px , 12px 1714px , 45px 1571px , 1183px 637px , 953px 1119px , 1300px 1583px , 1410px 1335px , 810px 1695px , 782px 923px , 787px 1372px , 745px 849px , 1545px 786px , 471px 520px , 530px 1293px , 1186px 877px , 476px 998px , 1563px 1649px , 1282px 1835px , 806px 1231px , 287px 1992px , 279px 181px , 1666px 826px , 1677px 570px , 83px 1614px , 1346px 756px , 405px 1847px , 561px 1381px , 1178px 958px , 980px 1402px , 1545px 1608px , 416px 439px , 1861px 1820px , 100px 888px , 1455px 786px , 271px 1302px , 148px 1890px , 234px 507px , 1431px 1800px , 491px 740px , 967px 1808px , 116px 548px , 1470px 318px , 371px 73px , 843px 876px , 1132px 71px , 1739px 976px , 1529px 936px , 235px 1083px , 1656px 510px , 1986px 790px , 1812px 146px , 554px 1563px , 1336px 540px , 57px 769px , 191px 1803px , 1460px 1032px , 1641px 28px , 458px 584px , 1270px 385px , 449px 1467px , 1782px 1303px , 46px 309px , 621px 38px , 1176px 1046px , 1037px 602px , 196px 1490px , 1182px 407px , 1485px 1175px , 278px 297px , 1376px 404px , 1628px 627px , 829px 1236px , 874px 885px , 937px 1298px , 69px 1339px , 922px 1922px , 821px 1907px , 479px 1460px , 1946px 1005px , 422px 1513px , 974px 1921px , 1363px 1486px , 1154px 1901px , 885px 9px , 38px 1616px , 80px 1912px , 286px 1081px , 1271px 522px , 959px 1782px , 1500px 1176px , 1187px 664px , 375px 1221px , 1536px 1137px , 269px 481px , 739px 24px , 1051px 1487px , 690px 349px , 47px 1831px , 1771px 1415px , 243px 773px , 670px 876px , 1612px 234px , 1897px 1672px , 576px 1071px , 824px 1307px , 1474px 265px , 1211px 1558px , 1457px 604px , 1828px 1700px , 1003px 1292px , 735px 916px , 736px 696px , 40px 337px , 1982px 1962px , 863px 798px , 887px 1102px , 1256px 177px , 687px 455px , 119px 1072px , 30px 1090px , 1794px 1668px , 153px 1612px , 1963px 1521px , 1247px 1037px , 415px 1750px , 395px 628px , 1311px 1687px , 906px 811px , 205px 904px , 887px 963px , 1110px 1799px , 1073px 452px , 1260px 1535px , 1290px 1628px , 1247px 881px , 753px 1328px , 1463px 63px , 1242px 1343px , 23px 31px , 1922px 147px , 1041px 270px , 587px 1289px , 1892px 139px , 1312px 256px , 1936px 751px , 660px 1107px , 604px 645px , 100px 41px , 1115px 1820px , 784px 1400px , 408px 291px , 1997px 1426px , 651px 578px , 1574px 1954px , 501px 1928px , 1629px 75px , 1206px 1437px , 1114px 517px , 1709px 238px , 1174px 1358px , 1655px 968px , 1042px 1474px , 215px 1932px , 1729px 428px , 214px 1970px , 1420px 1263px , 1035px 1717px , 1310px 110px , 917px 1839px , 554px 188px , 1917px 316px , 289px 440px , 203px 415px , 1566px 33px , 1929px 1418px , 53px 1466px , 920px 328px , 746px 1537px , 1879px 282px , 40px 1435px , 1989px 1885px , 1907px 950px , 1599px 603px , 1724px 265px , 1120px 230px , 767px 578px , 295px 33px , 1118px 1339px , 1374px 1478px , 1957px 1912px , 48px 1956px , 1445px 847px , 326px 1737px , 1159px 934px , 223px 1330px , 29px 180px , 1941px 507px , 484px 989px , 1089px 228px , 1203px 1171px , 299px 108px , 1795px 1309px , 1876px 1007px , 1990px 731px , 1078px 1486px , 196px 887px , 1330px 1506px , 108px 694px , 935px 856px , 1803px 86px , 762px 901px , 1707px 645px , 649px 1809px , 371px 1484px , 410px 207px , 1812px 1172px , 414px 1491px , 684px 1561px , 803px 1227px , 1637px 1468px , 744px 1718px , 648px 13px , 1189px 1406px , 1434px 1950px , 605px 1981px , 333px 708px , 319px 1452px , 1367px 1225px , 93px 1334px , 2px 160px , 1884px 1029px , 1956px 1443px , 871px 1090px , 975px 135px , 969px 546px , 755px 1554px , 850px 86px , 931px 673px , 951px 39px , 405px 1738px , 522px 8px , 1754px 169px , 567px 1401px , 12px 1735px , 1523px 1537px , 1609px 868px , 1526px 966px , 751px 620px , 17px 672px , 764px 1112px , 1524px 1196px , 1254px 874px , 1132px 1691px , 1860px 856px , 563px 1621px , 1037px 1589px , 749px 970px , 1291px 1704px , 1475px 441px , 1604px 1179px , 1013px 1176px , 843px 96px , 190px 177px , 840px 1923px , 1663px 57px , 524px 173px , 1389px 1698px , 912px 1793px , 49px 1316px , 714px 1365px , 1488px 39px , 17px 180px , 1825px 1250px , 368px 751px , 5px 430px , 228px 1115px , 540px 234px , 1022px 890px , 1124px 1575px , 1278px 603px , 661px 554px , 1305px 738px , 1441px 1119px , 530px 332px , 1076px 1867px , 1311px 1913px , 1069px 669px , 50px 191px , 1249px 1889px , 641px 1084px , 927px 7px , 1020px 925px , 781px 683px , 774px 1038px , 1918px 504px , 1007px 11px , 650px 659px , 1476px 136px , 1193px 1547px , 543px 1817px , 1284px 195px , 1149px 1450px , 180px 1584px , 942px 695px , 1171px 974px , 1506px 1516px , 1303px 1020px , 833px 1243px , 288px 6px , 1825px 727px , 829px 1637px , 113px 1063px , 1419px 659px , 1727px 1568px , 1629px 431px , 877px 1840px , 353px 1739px , 760px 1692px , 230px 973px , 1501px 1589px , 1496px 1929px , 785px 1521px , 479px 583px , 1533px 1200px , 697px 562px , 594px 1148px , 1241px 469px , 1632px 1240px , 582px 30px , 1695px 1056px , 1411px 1870px , 1721px 347px , 626px 439px , 267px 56px , 1183px 110px , 659px 845px , 650px 1242px , 1894px 1310px , 454px 1308px , 1491px 1859px , 957px 395px , 1971px 1071px , 1951px 1875px , 681px 1696px , 730px 1811px , 1440px 1309px , 586px 1470px , 1509px 970px , 431px 887px , 1238px 1505px , 961px 1934px , 821px 28px , 1286px 751px , 1272px 1720px , 917px 794px , 1947px 1387px , 1998px 272px , 1242px 1680px , 913px 1541px , 512px 1587px , 1592px 608px , 128px 537px , 414px 237px , 93px 299px , 1316px 1059px , 1565px 1135px , 515px 1608px , 1156px 352px , 1670px 68px , 1107px 1466px , 747px 1450px , 792px 1020px , 404px 1697px , 1145px 1116px , 1906px 1721px , 843px 183px , 1856px 484px , 1857px 684px , 67px 508px , 1294px 1343px , 700px 681px , 809px 17px , 1956px 1202px , 569px 1322px , 1521px 1874px , 805px 14px , 408px 1457px , 1102px 811px , 1623px 1071px; }\n  .parallax #stars2 {\n    width: 2px;\n    height: 2px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 1076px 1061px , 476px 1759px , 262px 1401px , 1693px 927px , 1482px 1189px , 1774px 1572px , 1709px 1419px , 404px 80px , 273px 700px , 1871px 3px , 1458px 1518px , 1281px 1583px , 268px 129px , 1903px 251px , 319px 17px , 1566px 1666px , 82px 1875px , 1866px 119px , 1445px 678px , 1884px 1193px , 50px 212px , 867px 1969px , 612px 697px , 306px 1703px , 1359px 332px , 1763px 1316px , 1585px 979px , 1057px 745px , 162px 1639px , 717px 368px , 1907px 747px , 1809px 1942px , 1951px 444px , 1240px 441px , 308px 1967px , 634px 724px , 957px 46px , 1297px 1090px , 1065px 836px , 1062px 1666px , 259px 1240px , 1502px 1970px , 110px 1740px , 1539px 609px , 1292px 973px , 656px 405px , 1421px 906px , 84px 1341px , 529px 1869px , 1192px 944px , 1804px 70px , 609px 1731px , 1280px 1399px , 320px 661px , 193px 1826px , 274px 193px , 983px 1494px , 792px 402px , 561px 1515px , 1965px 1766px , 771px 328px , 1867px 1475px , 1232px 200px , 825px 1178px , 1424px 1697px , 1993px 838px , 992px 1163px , 632px 902px , 444px 1532px , 1356px 512px , 1682px 1429px , 1269px 1711px , 969px 1598px , 1583px 1266px , 1063px 1315px , 1033px 379px , 1401px 1270px , 1298px 24px , 1735px 258px , 1623px 1408px , 227px 1613px , 932px 1742px , 406px 1382px , 930px 339px , 1285px 1435px , 1153px 5px , 524px 514px , 812px 1206px , 754px 885px , 1623px 121px , 1463px 194px , 1382px 36px , 942px 748px , 1991px 1892px , 1651px 1128px , 801px 540px , 1813px 1840px , 1373px 1241px , 1331px 445px , 937px 927px , 789px 1112px , 1459px 72px , 791px 1643px , 391px 622px , 1091px 481px , 82px 342px , 1664px 1829px , 1070px 1324px , 1260px 133px , 1373px 1924px , 1841px 816px , 1931px 1980px , 1051px 7px , 193px 1082px , 1277px 1221px , 839px 760px , 241px 245px , 741px 110px , 1619px 1730px , 1188px 142px , 575px 1197px , 1961px 1113px , 739px 1387px , 261px 1656px , 432px 1078px , 1064px 1917px , 641px 786px , 1821px 498px , 1794px 1068px , 1292px 1511px , 445px 184px , 1952px 1924px , 1672px 1644px , 1081px 1942px , 219px 1292px , 207px 1515px , 1139px 531px , 644px 618px , 1606px 1953px , 1500px 1485px , 891px 65px , 1982px 1329px , 1686px 811px , 338px 374px , 621px 549px , 396px 1170px , 1639px 870px , 1414px 685px , 509px 421px , 489px 1609px , 972px 490px , 1140px 1041px , 1583px 165px , 1442px 851px , 1596px 98px , 1180px 1688px , 1334px 427px , 1297px 750px , 99px 397px , 1717px 606px , 516px 913px , 797px 1485px , 1468px 574px , 768px 604px , 1226px 1389px , 1710px 23px , 650px 1746px , 1471px 1836px , 1637px 1347px , 1472px 100px , 725px 1383px , 1363px 1679px , 463px 36px , 1395px 1130px , 204px 1541px , 788px 300px , 1341px 1016px , 1316px 1099px , 1357px 1386px , 391px 964px , 1540px 1080px , 1704px 1848px , 528px 1381px , 1130px 577px , 1637px 1293px , 32px 1307px , 1854px 1203px , 1379px 133px , 1463px 398px , 758px 1176px , 243px 630px , 1868px 1634px , 537px 452px , 1376px 1572px , 582px 1472px , 903px 1224px , 1469px 600px , 1720px 1271px , 1552px 1691px , 866px 1890px;\n            box-shadow: 1076px 1061px , 476px 1759px , 262px 1401px , 1693px 927px , 1482px 1189px , 1774px 1572px , 1709px 1419px , 404px 80px , 273px 700px , 1871px 3px , 1458px 1518px , 1281px 1583px , 268px 129px , 1903px 251px , 319px 17px , 1566px 1666px , 82px 1875px , 1866px 119px , 1445px 678px , 1884px 1193px , 50px 212px , 867px 1969px , 612px 697px , 306px 1703px , 1359px 332px , 1763px 1316px , 1585px 979px , 1057px 745px , 162px 1639px , 717px 368px , 1907px 747px , 1809px 1942px , 1951px 444px , 1240px 441px , 308px 1967px , 634px 724px , 957px 46px , 1297px 1090px , 1065px 836px , 1062px 1666px , 259px 1240px , 1502px 1970px , 110px 1740px , 1539px 609px , 1292px 973px , 656px 405px , 1421px 906px , 84px 1341px , 529px 1869px , 1192px 944px , 1804px 70px , 609px 1731px , 1280px 1399px , 320px 661px , 193px 1826px , 274px 193px , 983px 1494px , 792px 402px , 561px 1515px , 1965px 1766px , 771px 328px , 1867px 1475px , 1232px 200px , 825px 1178px , 1424px 1697px , 1993px 838px , 992px 1163px , 632px 902px , 444px 1532px , 1356px 512px , 1682px 1429px , 1269px 1711px , 969px 1598px , 1583px 1266px , 1063px 1315px , 1033px 379px , 1401px 1270px , 1298px 24px , 1735px 258px , 1623px 1408px , 227px 1613px , 932px 1742px , 406px 1382px , 930px 339px , 1285px 1435px , 1153px 5px , 524px 514px , 812px 1206px , 754px 885px , 1623px 121px , 1463px 194px , 1382px 36px , 942px 748px , 1991px 1892px , 1651px 1128px , 801px 540px , 1813px 1840px , 1373px 1241px , 1331px 445px , 937px 927px , 789px 1112px , 1459px 72px , 791px 1643px , 391px 622px , 1091px 481px , 82px 342px , 1664px 1829px , 1070px 1324px , 1260px 133px , 1373px 1924px , 1841px 816px , 1931px 1980px , 1051px 7px , 193px 1082px , 1277px 1221px , 839px 760px , 241px 245px , 741px 110px , 1619px 1730px , 1188px 142px , 575px 1197px , 1961px 1113px , 739px 1387px , 261px 1656px , 432px 1078px , 1064px 1917px , 641px 786px , 1821px 498px , 1794px 1068px , 1292px 1511px , 445px 184px , 1952px 1924px , 1672px 1644px , 1081px 1942px , 219px 1292px , 207px 1515px , 1139px 531px , 644px 618px , 1606px 1953px , 1500px 1485px , 891px 65px , 1982px 1329px , 1686px 811px , 338px 374px , 621px 549px , 396px 1170px , 1639px 870px , 1414px 685px , 509px 421px , 489px 1609px , 972px 490px , 1140px 1041px , 1583px 165px , 1442px 851px , 1596px 98px , 1180px 1688px , 1334px 427px , 1297px 750px , 99px 397px , 1717px 606px , 516px 913px , 797px 1485px , 1468px 574px , 768px 604px , 1226px 1389px , 1710px 23px , 650px 1746px , 1471px 1836px , 1637px 1347px , 1472px 100px , 725px 1383px , 1363px 1679px , 463px 36px , 1395px 1130px , 204px 1541px , 788px 300px , 1341px 1016px , 1316px 1099px , 1357px 1386px , 391px 964px , 1540px 1080px , 1704px 1848px , 528px 1381px , 1130px 577px , 1637px 1293px , 32px 1307px , 1854px 1203px , 1379px 133px , 1463px 398px , 758px 1176px , 243px 630px , 1868px 1634px , 537px 452px , 1376px 1572px , 582px 1472px , 903px 1224px , 1469px 600px , 1720px 1271px , 1552px 1691px , 866px 1890px;\n    -webkit-animation: animStar 100s linear infinite;\n            animation: animStar 100s linear infinite; }\n  .parallax #stars2:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 2px;\n      height: 2px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 1076px 1061px , 476px 1759px , 262px 1401px , 1693px 927px , 1482px 1189px , 1774px 1572px , 1709px 1419px , 404px 80px , 273px 700px , 1871px 3px , 1458px 1518px , 1281px 1583px , 268px 129px , 1903px 251px , 319px 17px , 1566px 1666px , 82px 1875px , 1866px 119px , 1445px 678px , 1884px 1193px , 50px 212px , 867px 1969px , 612px 697px , 306px 1703px , 1359px 332px , 1763px 1316px , 1585px 979px , 1057px 745px , 162px 1639px , 717px 368px , 1907px 747px , 1809px 1942px , 1951px 444px , 1240px 441px , 308px 1967px , 634px 724px , 957px 46px , 1297px 1090px , 1065px 836px , 1062px 1666px , 259px 1240px , 1502px 1970px , 110px 1740px , 1539px 609px , 1292px 973px , 656px 405px , 1421px 906px , 84px 1341px , 529px 1869px , 1192px 944px , 1804px 70px , 609px 1731px , 1280px 1399px , 320px 661px , 193px 1826px , 274px 193px , 983px 1494px , 792px 402px , 561px 1515px , 1965px 1766px , 771px 328px , 1867px 1475px , 1232px 200px , 825px 1178px , 1424px 1697px , 1993px 838px , 992px 1163px , 632px 902px , 444px 1532px , 1356px 512px , 1682px 1429px , 1269px 1711px , 969px 1598px , 1583px 1266px , 1063px 1315px , 1033px 379px , 1401px 1270px , 1298px 24px , 1735px 258px , 1623px 1408px , 227px 1613px , 932px 1742px , 406px 1382px , 930px 339px , 1285px 1435px , 1153px 5px , 524px 514px , 812px 1206px , 754px 885px , 1623px 121px , 1463px 194px , 1382px 36px , 942px 748px , 1991px 1892px , 1651px 1128px , 801px 540px , 1813px 1840px , 1373px 1241px , 1331px 445px , 937px 927px , 789px 1112px , 1459px 72px , 791px 1643px , 391px 622px , 1091px 481px , 82px 342px , 1664px 1829px , 1070px 1324px , 1260px 133px , 1373px 1924px , 1841px 816px , 1931px 1980px , 1051px 7px , 193px 1082px , 1277px 1221px , 839px 760px , 241px 245px , 741px 110px , 1619px 1730px , 1188px 142px , 575px 1197px , 1961px 1113px , 739px 1387px , 261px 1656px , 432px 1078px , 1064px 1917px , 641px 786px , 1821px 498px , 1794px 1068px , 1292px 1511px , 445px 184px , 1952px 1924px , 1672px 1644px , 1081px 1942px , 219px 1292px , 207px 1515px , 1139px 531px , 644px 618px , 1606px 1953px , 1500px 1485px , 891px 65px , 1982px 1329px , 1686px 811px , 338px 374px , 621px 549px , 396px 1170px , 1639px 870px , 1414px 685px , 509px 421px , 489px 1609px , 972px 490px , 1140px 1041px , 1583px 165px , 1442px 851px , 1596px 98px , 1180px 1688px , 1334px 427px , 1297px 750px , 99px 397px , 1717px 606px , 516px 913px , 797px 1485px , 1468px 574px , 768px 604px , 1226px 1389px , 1710px 23px , 650px 1746px , 1471px 1836px , 1637px 1347px , 1472px 100px , 725px 1383px , 1363px 1679px , 463px 36px , 1395px 1130px , 204px 1541px , 788px 300px , 1341px 1016px , 1316px 1099px , 1357px 1386px , 391px 964px , 1540px 1080px , 1704px 1848px , 528px 1381px , 1130px 577px , 1637px 1293px , 32px 1307px , 1854px 1203px , 1379px 133px , 1463px 398px , 758px 1176px , 243px 630px , 1868px 1634px , 537px 452px , 1376px 1572px , 582px 1472px , 903px 1224px , 1469px 600px , 1720px 1271px , 1552px 1691px , 866px 1890px;\n              box-shadow: 1076px 1061px , 476px 1759px , 262px 1401px , 1693px 927px , 1482px 1189px , 1774px 1572px , 1709px 1419px , 404px 80px , 273px 700px , 1871px 3px , 1458px 1518px , 1281px 1583px , 268px 129px , 1903px 251px , 319px 17px , 1566px 1666px , 82px 1875px , 1866px 119px , 1445px 678px , 1884px 1193px , 50px 212px , 867px 1969px , 612px 697px , 306px 1703px , 1359px 332px , 1763px 1316px , 1585px 979px , 1057px 745px , 162px 1639px , 717px 368px , 1907px 747px , 1809px 1942px , 1951px 444px , 1240px 441px , 308px 1967px , 634px 724px , 957px 46px , 1297px 1090px , 1065px 836px , 1062px 1666px , 259px 1240px , 1502px 1970px , 110px 1740px , 1539px 609px , 1292px 973px , 656px 405px , 1421px 906px , 84px 1341px , 529px 1869px , 1192px 944px , 1804px 70px , 609px 1731px , 1280px 1399px , 320px 661px , 193px 1826px , 274px 193px , 983px 1494px , 792px 402px , 561px 1515px , 1965px 1766px , 771px 328px , 1867px 1475px , 1232px 200px , 825px 1178px , 1424px 1697px , 1993px 838px , 992px 1163px , 632px 902px , 444px 1532px , 1356px 512px , 1682px 1429px , 1269px 1711px , 969px 1598px , 1583px 1266px , 1063px 1315px , 1033px 379px , 1401px 1270px , 1298px 24px , 1735px 258px , 1623px 1408px , 227px 1613px , 932px 1742px , 406px 1382px , 930px 339px , 1285px 1435px , 1153px 5px , 524px 514px , 812px 1206px , 754px 885px , 1623px 121px , 1463px 194px , 1382px 36px , 942px 748px , 1991px 1892px , 1651px 1128px , 801px 540px , 1813px 1840px , 1373px 1241px , 1331px 445px , 937px 927px , 789px 1112px , 1459px 72px , 791px 1643px , 391px 622px , 1091px 481px , 82px 342px , 1664px 1829px , 1070px 1324px , 1260px 133px , 1373px 1924px , 1841px 816px , 1931px 1980px , 1051px 7px , 193px 1082px , 1277px 1221px , 839px 760px , 241px 245px , 741px 110px , 1619px 1730px , 1188px 142px , 575px 1197px , 1961px 1113px , 739px 1387px , 261px 1656px , 432px 1078px , 1064px 1917px , 641px 786px , 1821px 498px , 1794px 1068px , 1292px 1511px , 445px 184px , 1952px 1924px , 1672px 1644px , 1081px 1942px , 219px 1292px , 207px 1515px , 1139px 531px , 644px 618px , 1606px 1953px , 1500px 1485px , 891px 65px , 1982px 1329px , 1686px 811px , 338px 374px , 621px 549px , 396px 1170px , 1639px 870px , 1414px 685px , 509px 421px , 489px 1609px , 972px 490px , 1140px 1041px , 1583px 165px , 1442px 851px , 1596px 98px , 1180px 1688px , 1334px 427px , 1297px 750px , 99px 397px , 1717px 606px , 516px 913px , 797px 1485px , 1468px 574px , 768px 604px , 1226px 1389px , 1710px 23px , 650px 1746px , 1471px 1836px , 1637px 1347px , 1472px 100px , 725px 1383px , 1363px 1679px , 463px 36px , 1395px 1130px , 204px 1541px , 788px 300px , 1341px 1016px , 1316px 1099px , 1357px 1386px , 391px 964px , 1540px 1080px , 1704px 1848px , 528px 1381px , 1130px 577px , 1637px 1293px , 32px 1307px , 1854px 1203px , 1379px 133px , 1463px 398px , 758px 1176px , 243px 630px , 1868px 1634px , 537px 452px , 1376px 1572px , 582px 1472px , 903px 1224px , 1469px 600px , 1720px 1271px , 1552px 1691px , 866px 1890px; }\n  .parallax #stars3 {\n    width: 3px;\n    height: 3px;\n    border-radius: 50%;\n    background: transparent;\n    -webkit-box-shadow: 161px 1897px , 718px 1436px , 1996px 372px , 977px 865px , 596px 1584px , 505px 1524px , 1286px 820px , 292px 1615px , 853px 55px , 1204px 1398px , 1392px 488px , 1779px 775px , 1580px 1080px , 266px 1511px , 1712px 307px , 41px 808px , 1333px 1033px , 1057px 1546px , 443px 1831px , 1394px 942px , 1567px 231px , 156px 1663px , 1399px 1017px , 1924px 1680px , 701px 733px , 1138px 1977px , 1026px 1944px , 630px 1656px , 799px 957px , 1405px 1019px , 3px 451px , 1385px 760px , 1600px 1947px , 1362px 1774px , 805px 1447px , 913px 1955px , 887px 1528px , 1084px 1321px , 1523px 1300px , 1632px 1424px , 632px 1547px , 1866px 447px , 943px 453px , 731px 286px , 1511px 293px , 1797px 874px , 1549px 1203px , 573px 502px , 850px 1033px , 1863px 1441px , 1936px 110px , 212px 300px , 232px 1317px , 520px 1208px , 186px 156px , 650px 1967px , 287px 562px , 522px 1131px , 214px 695px , 1527px 661px , 846px 1304px , 862px 744px , 1271px 218px , 1467px 947px , 670px 1867px , 1297px 287px , 181px 976px , 1908px 1405px , 1455px 219px , 647px 28px , 1883px 101px , 1968px 1274px , 1669px 777px , 845px 710px , 1186px 1368px , 174px 1093px , 1039px 1992px , 768px 62px , 253px 1280px , 862px 341px , 975px 719px , 1657px 1705px , 1249px 1759px , 868px 1555px , 913px 1242px , 200px 1927px , 1347px 1017px , 521px 667px , 1120px 1508px , 305px 1587px , 37px 211px , 833px 1145px , 841px 1866px , 1556px 483px , 9px 927px , 1051px 298px , 384px 924px , 1658px 1773px , 217px 917px , 1029px 826px;\n            box-shadow: 161px 1897px , 718px 1436px , 1996px 372px , 977px 865px , 596px 1584px , 505px 1524px , 1286px 820px , 292px 1615px , 853px 55px , 1204px 1398px , 1392px 488px , 1779px 775px , 1580px 1080px , 266px 1511px , 1712px 307px , 41px 808px , 1333px 1033px , 1057px 1546px , 443px 1831px , 1394px 942px , 1567px 231px , 156px 1663px , 1399px 1017px , 1924px 1680px , 701px 733px , 1138px 1977px , 1026px 1944px , 630px 1656px , 799px 957px , 1405px 1019px , 3px 451px , 1385px 760px , 1600px 1947px , 1362px 1774px , 805px 1447px , 913px 1955px , 887px 1528px , 1084px 1321px , 1523px 1300px , 1632px 1424px , 632px 1547px , 1866px 447px , 943px 453px , 731px 286px , 1511px 293px , 1797px 874px , 1549px 1203px , 573px 502px , 850px 1033px , 1863px 1441px , 1936px 110px , 212px 300px , 232px 1317px , 520px 1208px , 186px 156px , 650px 1967px , 287px 562px , 522px 1131px , 214px 695px , 1527px 661px , 846px 1304px , 862px 744px , 1271px 218px , 1467px 947px , 670px 1867px , 1297px 287px , 181px 976px , 1908px 1405px , 1455px 219px , 647px 28px , 1883px 101px , 1968px 1274px , 1669px 777px , 845px 710px , 1186px 1368px , 174px 1093px , 1039px 1992px , 768px 62px , 253px 1280px , 862px 341px , 975px 719px , 1657px 1705px , 1249px 1759px , 868px 1555px , 913px 1242px , 200px 1927px , 1347px 1017px , 521px 667px , 1120px 1508px , 305px 1587px , 37px 211px , 833px 1145px , 841px 1866px , 1556px 483px , 9px 927px , 1051px 298px , 384px 924px , 1658px 1773px , 217px 917px , 1029px 826px;\n    -webkit-animation: animStar 50s linear infinite;\n            animation: animStar 50s linear infinite; }\n  .parallax #stars3:after {\n      content: \" \";\n      position: absolute;\n      top: 2000px;\n      width: 3px;\n      height: 3px;\n      border-radius: 50%;\n      background: transparent;\n      -webkit-box-shadow: 161px 1897px , 718px 1436px , 1996px 372px , 977px 865px , 596px 1584px , 505px 1524px , 1286px 820px , 292px 1615px , 853px 55px , 1204px 1398px , 1392px 488px , 1779px 775px , 1580px 1080px , 266px 1511px , 1712px 307px , 41px 808px , 1333px 1033px , 1057px 1546px , 443px 1831px , 1394px 942px , 1567px 231px , 156px 1663px , 1399px 1017px , 1924px 1680px , 701px 733px , 1138px 1977px , 1026px 1944px , 630px 1656px , 799px 957px , 1405px 1019px , 3px 451px , 1385px 760px , 1600px 1947px , 1362px 1774px , 805px 1447px , 913px 1955px , 887px 1528px , 1084px 1321px , 1523px 1300px , 1632px 1424px , 632px 1547px , 1866px 447px , 943px 453px , 731px 286px , 1511px 293px , 1797px 874px , 1549px 1203px , 573px 502px , 850px 1033px , 1863px 1441px , 1936px 110px , 212px 300px , 232px 1317px , 520px 1208px , 186px 156px , 650px 1967px , 287px 562px , 522px 1131px , 214px 695px , 1527px 661px , 846px 1304px , 862px 744px , 1271px 218px , 1467px 947px , 670px 1867px , 1297px 287px , 181px 976px , 1908px 1405px , 1455px 219px , 647px 28px , 1883px 101px , 1968px 1274px , 1669px 777px , 845px 710px , 1186px 1368px , 174px 1093px , 1039px 1992px , 768px 62px , 253px 1280px , 862px 341px , 975px 719px , 1657px 1705px , 1249px 1759px , 868px 1555px , 913px 1242px , 200px 1927px , 1347px 1017px , 521px 667px , 1120px 1508px , 305px 1587px , 37px 211px , 833px 1145px , 841px 1866px , 1556px 483px , 9px 927px , 1051px 298px , 384px 924px , 1658px 1773px , 217px 917px , 1029px 826px;\n              box-shadow: 161px 1897px , 718px 1436px , 1996px 372px , 977px 865px , 596px 1584px , 505px 1524px , 1286px 820px , 292px 1615px , 853px 55px , 1204px 1398px , 1392px 488px , 1779px 775px , 1580px 1080px , 266px 1511px , 1712px 307px , 41px 808px , 1333px 1033px , 1057px 1546px , 443px 1831px , 1394px 942px , 1567px 231px , 156px 1663px , 1399px 1017px , 1924px 1680px , 701px 733px , 1138px 1977px , 1026px 1944px , 630px 1656px , 799px 957px , 1405px 1019px , 3px 451px , 1385px 760px , 1600px 1947px , 1362px 1774px , 805px 1447px , 913px 1955px , 887px 1528px , 1084px 1321px , 1523px 1300px , 1632px 1424px , 632px 1547px , 1866px 447px , 943px 453px , 731px 286px , 1511px 293px , 1797px 874px , 1549px 1203px , 573px 502px , 850px 1033px , 1863px 1441px , 1936px 110px , 212px 300px , 232px 1317px , 520px 1208px , 186px 156px , 650px 1967px , 287px 562px , 522px 1131px , 214px 695px , 1527px 661px , 846px 1304px , 862px 744px , 1271px 218px , 1467px 947px , 670px 1867px , 1297px 287px , 181px 976px , 1908px 1405px , 1455px 219px , 647px 28px , 1883px 101px , 1968px 1274px , 1669px 777px , 845px 710px , 1186px 1368px , 174px 1093px , 1039px 1992px , 768px 62px , 253px 1280px , 862px 341px , 975px 719px , 1657px 1705px , 1249px 1759px , 868px 1555px , 913px 1242px , 200px 1927px , 1347px 1017px , 521px 667px , 1120px 1508px , 305px 1587px , 37px 211px , 833px 1145px , 841px 1866px , 1556px 483px , 9px 927px , 1051px 298px , 384px 924px , 1658px 1773px , 217px 917px , 1029px 826px; }\n  @-webkit-keyframes animStar {\n  from {\n    -webkit-transform: translateY(-2000px);\n            transform: translateY(-2000px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n  @keyframes animStar {\n  from {\n    -webkit-transform: translateY(-2000px);\n            transform: translateY(-2000px); }\n  to {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n  @media only screen and (max-width: 680px) {\n  .parallax {\n    height: 120vw; } }\n"

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