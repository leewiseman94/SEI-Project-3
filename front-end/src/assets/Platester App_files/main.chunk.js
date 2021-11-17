(this["webpackJsonpfront-end"] = this["webpackJsonpfront-end"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/styles/App.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n}\n\n.navbar {\n  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%) !important;\n  display: flex;\n  flex-direction: column;\n  background: black;\n}\n\n.navbar-top {\n  height: 80px;\n  padding: 0 80px;\n  background: transparent;\n  display: flex;\n}\n\n.navbar-bottom {\n  height: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 0px;\n  padding: 3px 20px 10px 20px !important;\n}\n\n.navbar-bottom.clicked {\n  height: 270px;\n}\n\n.navbar-white {\n  background-color: white;\n}\n\n.navbar-transparent {\n  background-color: transparent;\n  color: white;\n}\n\n.navbar-brand {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n  width: 33.33%;\n}\n\n.navbar-center {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 33.33%;\n  padding: 0 20px;\n}\n\n.navbar-end {\n  display: flex;\n  flex-direction: row;\n  justify-content: right;\n  align-items: center;\n  width: 33.33%;\n}\n\n.navbar-item img {\n  max-height: 75px;\n}\n\n.button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: center;\n  width: 100%;\n  height: 48px;\n  background: transparent;\n  border: 1px solid #DDDDDD;\n  /* box-shadow: 0px 0px 1px #000000; */\n  border-radius: 50px;\n  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%);\n  color: #222222;\n  padding: 0.25rem 0.25rem 0.25rem 0.75rem;\n  font-size: 14px;\n}\n\n.button.account-button {\n  background-color: white;\n  padding: 0.25rem;\n}\n\n.button:hover {\n  border: 1px solid #DDDDDD;\n  box-shadow: 0px 4px 12px rgb(0 0 0 / 5%);\n}\n\n.nav-right {\n  background-color: transparent;\n  border: none;\n  box-shadow: none !important;\n  padding: 0 20px;\n}\n\n.nav-right:hover {\n  background-color: rgba(0, 0, 0, 0.05) ;\n  box-shadow: none;\n  border: none;\n}\n\n.dropdown-menu {\n  left: auto; \n}\n\n.button.nav-transparent {\n  color: white;\n}\n\n.button.nav-transparent.nav-center {\n  border: none;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n}\n\n.button.nav-transparent.nav-center:hover {\n  color: rgba(225, 225, 225, 90);\n}\n\n.button-bottom-border {\n  margin-top: 10px;\n  width: 40px;\n  border-bottom: 2px solid transparent;\n}\n\n.button-bottom-border.active {\n  border-bottom: 2px solid white;\n}\n\n.search-button {\n  max-width: 320px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: white ;\n}\n\n.search-text {\n  text-align: left;\n}\n\n.search-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 38px;\n  width: 38px;\n  background-color: #FF385C;\n  padding: 5px;\n  border-radius: 50px;\n}\n\n\n\n.user-account-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 38px;\n  width: 38px;\n  background-color: grey;\n  padding: 5px;\n  border-radius: 50px;\n}\n\n.menu-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 38px;\n  width: 38px;\n  background-color: transparent;\n  padding: 5px;\n  border-radius: 50px;\n}\n\n\n.search-form {\n  height: 56px;\n  width: 100%;\n  max-width: 850px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: white ;\n  padding: 0;\n}\n\n.form-search-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 50px !important;\n  background-color: #FF385C;\n  padding: 5px;\n  margin: 0.25rem 0.25rem 0.25rem 0;\n  border-radius: 50px;\n  color: white;\n}\n\n.search-form-button {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.search-form-dropdown {\n  background-color: transparent;\n  border: none;\n  box-shadow: none !important;\n  padding: 0 20px;\n}\n\n.search-form-dropdown:hover {\n  background-color: rgba(0, 0, 0, 0.05) ;\n  box-shadow: none;\n  border: none;\n}\n\n.search-form-container {\n  height: 100%;\n  flex-grow: 1;\n}\n\n.bottom-search {\n  width: 100%;\n  height: 56px;\n}\n\n.bottom-search-button {\n  max-width: 100%;\n  height: 56px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: white ;\n}\n\n.course-dropdown-menu, .allergens-dropdown-menu {\n  left: 0;\n  right: auto;\n}\n\n.course-dropdown-content, .allergens-dropdown-content {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.course-dropdown, .allergens-dropdown, .dropdown-trigger {\n  width: 100%;\n}\n\n.bottom-search-text {\n  text-align: left;\n}\n\n.bottom-search-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 50px;\n  background-color: #FF385C;\n  padding: 5px;\n  border-radius: 50px;\n}\n\n.bottom-search-form {\n  height: 250px;\n  width: 100%;\n  max-width: 850px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: space-between;\n  background: white ;\n  padding: 0;\n  border-radius: 30px;\n}\n\n.bottom-search-form-container {\n  margin-top: 10px;\n  width: 100%;\n  height: 100%;\n}\n\n\n.bottom-form-search-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 50px !important;\n  background-color: #FF385C;\n  padding: 5px;\n  margin: 0.25rem 0.25rem 0.25rem 0;\n  border-radius: 50px;\n}\n\n.bottom-search-form-button {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.bottom-search-form-dropdown {\n  background-color: transparent;\n  border: none;\n  box-shadow: none !important;\n  padding: 0 20px;\n}\n\n.bottom-search-form-dropdown:hover {\n  background-color: rgba(0, 0, 0, 0.05) ;\n  box-shadow: none;\n  border: none;\n}\n\n.bottom-search-form-buttons {\n  display: flex;\n  color: white;\n}\n\n.search-input-box {\n  width: 100%;\n  background: transparent;\n  border: 0 !important;\n  cursor: pointer;\n  outline: none;\n}\n\n.bottom-dropdown {\n  height: 100%;\n}\n\n.login-popup.hide {\n  transform: translateY(100px) scale(0) rotateY(180deg);\n  opacity: 0;\n}\n\n.login-popup {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  transition: 800ms;\n  opacity: 1;\n  z-index: 999;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.loginOrRegister-popup.hide {\n  transform: translateY(100px) scale(0) rotateY(180deg);\n  opacity: 0;\n}\n\n.loginOrRegister-popup {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  transition: 800ms;\n  opacity: 1;\n  z-index: 999;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0 !important;\n  background-color: white;\n  padding: 20px 20px;\n  border-radius: 10px;\n}\n\n.close-login-popup {\n  background-color: #FF385C;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border: 0px solid black;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n}\n\n.login-close-icon {\n  font-size: 26px;\n  color: white;\n  background-color: #FF385C;\n  padding: 0 !important;\n}\n\n.form-field-container {\n  margin-top: 20px;\n  min-width: 260px;\n  min-width: 300px;\n}\n\n.remove-filter-icon {\n  margin: 0 !important;\n  padding-left: 10px;\n  color: #FF385C;\n  background: transparent;\n}\n\n.current-filter-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  color: black;\n}\n\n.current-filters {\n  flex-wrap: wrap;\n}\n\n.fa-long-arrow-alt-left {\n  color: white;\n  font-size: 26px;\n}\n\n@media screen and (max-width: 1050px) {\n  .nav-right {\n    display: none;\n  } \n\n  .logo-main {\n    display: none;\n  } \n\n  .navbar-brand {\n    width: 25%;\n  }\n  \n  .navbar-center {\n    width: 50%;\n  }\n  \n  .navbar-end {\n    width: 25%;\n  }\n\n}\n\n@media screen and (min-width: 1050px) {\n  .logo-small {\n    display: none;\n  } \n\n}\n\n@media screen and (max-width: 700px) {\n  .navbar-top {\n    padding: 0 20px;\n  }\n\n  .navbar-center {\n    display: none;\n  }\n\n  .navbar-brand {\n    width: 50%;\n  }\n\n  .navbar-end {\n    width: 50%;\n  }\n  .search-form {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 700px) {\n  .search-recipes {\n    display: none;\n  }\n  .cooking-classes {\n    display: none;\n  }\n  .inspiration {\n    display: none;\n  }\n  .bottom-divider {\n    display: none;\n  }\n\n  .bottom-search { \n    display: none;\n  }\n}\n\n\n\n\n/* * MY PROFILE PAGE */\n\n.my-profile {\n  padding-top: 220px;\n  padding-bottom: 20px;\n}\n.page-title {\n  font-size: 28px;\n}\n.page-title hr {\n  margin-top: 30px;\n}\n/* My Recipes */\n.my-recipes, .my-liked-recipes {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  min-height: 200px;\n}\n\n.my-recipes-title, .my-liked-recipes-title {\n  font-size: 18px;\n  margin-bottom: 20px;\n}", "",{"version":3,"sources":["webpack://src/styles/App.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,gFAAgF;EAChF,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,yBAAyB;EACzB,qCAAqC;EACrC,mBAAmB;EACnB,uCAAuC;EACvC,cAAc;EACd,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,wCAAwC;AAC1C;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;AACrB;;;;AAIA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;AACrB;;;AAGA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,iCAAiC;EACjC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,0BAA0B;EAC1B,kBAAkB;EAClB,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;;AAGA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,oBAAoB;EACpB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qDAAqD;EACrD,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,YAAY;EACZ,WAAW;EACX,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,qDAAqD;EACrD,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,YAAY;EACZ,WAAW;EACX,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,oBAAoB;EACpB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;AAEF;;AAEA;EACE;IACE,aAAa;EACf;;AAEF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;AACF;;;;;AAKA,sBAAsB;;AAEtB;EACE,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA,eAAe;AACf;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,iBAAiB;EACjB,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n.navbar {\n  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%) !important;\n  display: flex;\n  flex-direction: column;\n  background: black;\n}\n\n.navbar-top {\n  height: 80px;\n  padding: 0 80px;\n  background: transparent;\n  display: flex;\n}\n\n.navbar-bottom {\n  height: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 0px;\n  padding: 3px 20px 10px 20px !important;\n}\n\n.navbar-bottom.clicked {\n  height: 270px;\n}\n\n.navbar-white {\n  background-color: white;\n}\n\n.navbar-transparent {\n  background-color: transparent;\n  color: white;\n}\n\n.navbar-brand {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n  width: 33.33%;\n}\n\n.navbar-center {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 33.33%;\n  padding: 0 20px;\n}\n\n.navbar-end {\n  display: flex;\n  flex-direction: row;\n  justify-content: right;\n  align-items: center;\n  width: 33.33%;\n}\n\n.navbar-item img {\n  max-height: 75px;\n}\n\n.button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: center;\n  width: 100%;\n  height: 48px;\n  background: transparent;\n  border: 1px solid #DDDDDD;\n  /* box-shadow: 0px 0px 1px #000000; */\n  border-radius: 50px;\n  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%);\n  color: #222222;\n  padding: 0.25rem 0.25rem 0.25rem 0.75rem;\n  font-size: 14px;\n}\n\n.button.account-button {\n  background-color: white;\n  padding: 0.25rem;\n}\n\n.button:hover {\n  border: 1px solid #DDDDDD;\n  box-shadow: 0px 4px 12px rgb(0 0 0 / 5%);\n}\n\n.nav-right {\n  background-color: transparent;\n  border: none;\n  box-shadow: none !important;\n  padding: 0 20px;\n}\n\n.nav-right:hover {\n  background-color: rgba(0, 0, 0, 0.05) ;\n  box-shadow: none;\n  border: none;\n}\n\n.dropdown-menu {\n  left: auto; \n}\n\n.button.nav-transparent {\n  color: white;\n}\n\n.button.nav-transparent.nav-center {\n  border: none;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n}\n\n.button.nav-transparent.nav-center:hover {\n  color: rgba(225, 225, 225, 90);\n}\n\n.button-bottom-border {\n  margin-top: 10px;\n  width: 40px;\n  border-bottom: 2px solid transparent;\n}\n\n.button-bottom-border.active {\n  border-bottom: 2px solid white;\n}\n\n.search-button {\n  max-width: 320px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: white ;\n}\n\n.search-text {\n  text-align: left;\n}\n\n.search-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 38px;\n  width: 38px;\n  background-color: #FF385C;\n  padding: 5px;\n  border-radius: 50px;\n}\n\n\n\n.user-account-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 38px;\n  width: 38px;\n  background-color: grey;\n  padding: 5px;\n  border-radius: 50px;\n}\n\n.menu-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 38px;\n  width: 38px;\n  background-color: transparent;\n  padding: 5px;\n  border-radius: 50px;\n}\n\n\n.search-form {\n  height: 56px;\n  width: 100%;\n  max-width: 850px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: white ;\n  padding: 0;\n}\n\n.form-search-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 50px !important;\n  background-color: #FF385C;\n  padding: 5px;\n  margin: 0.25rem 0.25rem 0.25rem 0;\n  border-radius: 50px;\n  color: white;\n}\n\n.search-form-button {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.search-form-dropdown {\n  background-color: transparent;\n  border: none;\n  box-shadow: none !important;\n  padding: 0 20px;\n}\n\n.search-form-dropdown:hover {\n  background-color: rgba(0, 0, 0, 0.05) ;\n  box-shadow: none;\n  border: none;\n}\n\n.search-form-container {\n  height: 100%;\n  flex-grow: 1;\n}\n\n.bottom-search {\n  width: 100%;\n  height: 56px;\n}\n\n.bottom-search-button {\n  max-width: 100%;\n  height: 56px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: white ;\n}\n\n.course-dropdown-menu, .allergens-dropdown-menu {\n  left: 0;\n  right: auto;\n}\n\n.course-dropdown-content, .allergens-dropdown-content {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.course-dropdown, .allergens-dropdown, .dropdown-trigger {\n  width: 100%;\n}\n\n.bottom-search-text {\n  text-align: left;\n}\n\n.bottom-search-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 50px;\n  background-color: #FF385C;\n  padding: 5px;\n  border-radius: 50px;\n}\n\n.bottom-search-form {\n  height: 250px;\n  width: 100%;\n  max-width: 850px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: space-between;\n  background: white ;\n  padding: 0;\n  border-radius: 30px;\n}\n\n.bottom-search-form-container {\n  margin-top: 10px;\n  width: 100%;\n  height: 100%;\n}\n\n\n.bottom-form-search-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 50px !important;\n  background-color: #FF385C;\n  padding: 5px;\n  margin: 0.25rem 0.25rem 0.25rem 0;\n  border-radius: 50px;\n}\n\n.bottom-search-form-button {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.bottom-search-form-dropdown {\n  background-color: transparent;\n  border: none;\n  box-shadow: none !important;\n  padding: 0 20px;\n}\n\n.bottom-search-form-dropdown:hover {\n  background-color: rgba(0, 0, 0, 0.05) ;\n  box-shadow: none;\n  border: none;\n}\n\n.bottom-search-form-buttons {\n  display: flex;\n  color: white;\n}\n\n.search-input-box {\n  width: 100%;\n  background: transparent;\n  border: 0 !important;\n  cursor: pointer;\n  outline: none;\n}\n\n.bottom-dropdown {\n  height: 100%;\n}\n\n.login-popup.hide {\n  transform: translateY(100px) scale(0) rotateY(180deg);\n  opacity: 0;\n}\n\n.login-popup {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  transition: 800ms;\n  opacity: 1;\n  z-index: 999;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.loginOrRegister-popup.hide {\n  transform: translateY(100px) scale(0) rotateY(180deg);\n  opacity: 0;\n}\n\n.loginOrRegister-popup {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  transition: 800ms;\n  opacity: 1;\n  z-index: 999;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0 !important;\n  background-color: white;\n  padding: 20px 20px;\n  border-radius: 10px;\n}\n\n.close-login-popup {\n  background-color: #FF385C;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border: 0px solid black;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n}\n\n.login-close-icon {\n  font-size: 26px;\n  color: white;\n  background-color: #FF385C;\n  padding: 0 !important;\n}\n\n.form-field-container {\n  margin-top: 20px;\n  min-width: 260px;\n  min-width: 300px;\n}\n\n.remove-filter-icon {\n  margin: 0 !important;\n  padding-left: 10px;\n  color: #FF385C;\n  background: transparent;\n}\n\n.current-filter-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  color: black;\n}\n\n.current-filters {\n  flex-wrap: wrap;\n}\n\n.fa-long-arrow-alt-left {\n  color: white;\n  font-size: 26px;\n}\n\n@media screen and (max-width: 1050px) {\n  .nav-right {\n    display: none;\n  } \n\n  .logo-main {\n    display: none;\n  } \n\n  .navbar-brand {\n    width: 25%;\n  }\n  \n  .navbar-center {\n    width: 50%;\n  }\n  \n  .navbar-end {\n    width: 25%;\n  }\n\n}\n\n@media screen and (min-width: 1050px) {\n  .logo-small {\n    display: none;\n  } \n\n}\n\n@media screen and (max-width: 700px) {\n  .navbar-top {\n    padding: 0 20px;\n  }\n\n  .navbar-center {\n    display: none;\n  }\n\n  .navbar-brand {\n    width: 50%;\n  }\n\n  .navbar-end {\n    width: 50%;\n  }\n  .search-form {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 700px) {\n  .search-recipes {\n    display: none;\n  }\n  .cooking-classes {\n    display: none;\n  }\n  .inspiration {\n    display: none;\n  }\n  .bottom-divider {\n    display: none;\n  }\n\n  .bottom-search { \n    display: none;\n  }\n}\n\n\n\n\n/* * MY PROFILE PAGE */\n\n.my-profile {\n  padding-top: 220px;\n  padding-bottom: 20px;\n}\n.page-title {\n  font-size: 28px;\n}\n.page-title hr {\n  margin-top: 30px;\n}\n/* My Recipes */\n.my-recipes, .my-liked-recipes {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  min-height: 200px;\n}\n\n.my-recipes-title, .my-liked-recipes-title {\n  font-size: 18px;\n  margin-bottom: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/styles/index.css ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_fridge3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/fridge3.jpeg */ "./src/assets/fridge3.jpeg");
/* harmony import */ var _assets_chef2_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/chef2.jpeg */ "./src/assets/chef2.jpeg");
/* harmony import */ var _assets_pru2_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/pru2.jpeg */ "./src/assets/pru2.jpeg");
/* harmony import */ var _assets_GraceDent_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/GraceDent.jpeg */ "./src/assets/GraceDent.jpeg");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fridge3_jpeg__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_chef2_jpeg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_pru2_jpeg__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_GraceDent_jpeg__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n#hero {\n  margin-top: 160px; \n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images.immediate.co.uk/production/volatile/sites/30/2021/02/Harissa-lamb-8ce5e1f.jpg');\n  background-position: center;\n  background-size: cover;\n  position: relative; \n  display: flex;\n  justify-content: center;\n} \n\n/* .columns {\n  padding: 50px;\n  \n} */\n\nbody {\n  font-family: Futura, sans-serif;\n  /* font-weight: lighter; */\n}\n\n.item-1 {\n  margin-top: 160px;\n  justify-content: center;\n  /* height: 500px; */\n}\n\n#hero-img {\n  width: 1800px;\n  border-radius: 20px;\n  /* margin-left: 50px; */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  \n}\n\n#randombtn {\n  text-align: center;\n  position: absolute;\n  top: 65%;\n  left: 50%;\n  width: 250px;\n  background-color: white;\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n  border: 3px solid black;\n  \n}\n\n.card-header-title {\n  font-weight: lighter;\n  /* text-overflow: ellipsis \"[...]\"; */\n  text-overflow: ellipsis \"[...]\";\n  overflow: hidden;\n  height: 40px;\n}\n\n.card {\n  border-radius: 15px;\n}\n\n.image  {\n  border-radius: 15px;\n  \n}\n#image-index {\n  border-radius: 15px;\n  \n}\n\n.title-prep {\n  font-weight: bold;\n}\n\n.card-content {\n  \n  margin-top: -10px;\n}\n\n#heart-icon {\n  position: absolute;\n  z-index: 2;\n  margin-top: 20px;\n  margin-left: 10px;\n  color: white;\n  fill: black;\n}\n\n\n\nh5 {\n  text-align: right;\n  \n}\n.title {\n  font-weight: lighter;\n}\n\n\n.card-rating {\n  text-align: right;\n  font-size: 12px;\n  color: gray;\n\n}\n\n.index-links {\n  justify-content: space-between;\n}\n\n.show-rating {\n  color: gray;\n  text-transform: lowercase;\n}\n\n.method-title {\n  font-weight: bold;\n  /* align-self: flex-end; */\n  padding-left: 5px;\n}\n\n.recipe-steps {\n  margin-top: 10px;\n  height: 370px;\n  overflow-y: auto;\n}\n\n.share {\n  padding-right: 10px;\n}\n.save {\n  padding-right: 10px;\n}\n\ni.far {\n  padding-right: 5px;\n}\n\n.steps {\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.recipe-step-section {\n  font-weight: lighter;\n}\n\n.subtitle {\n  margin-bottom: 50px;\n  /* margin-left: 40px; */\n  display: flex;\n  font-weight: lighter;\n  color: gray;\n  font-size: 14px;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#recipe-show {\n  padding-top: 160px;\n}\n\n.show-links{\n  color: black;\n  display: flex;\n  justify-content: flex-end;\n  text-transform: lowercase;\n  justify-content: space-between;\n\n}\n\n.recipe-info {\n  display: flex;\n}\n\n.column {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n  \n}\n\n.title-prep.is-6 {\n  flex: none;\n}\n\n#icon-info2 {\n  \n  margin-right: 110px;\n}\n\n.info-icons {\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.icon-info-space {\n  margin-bottom: 50px;\n}\n\np.subtitle.method {\n  /* display: flex; */\n  margin-left: 40px;\n  margin-top: -20px;\n  margin-bottom: 20px;\n  width: 80px\n}\n\n.extra-info {\n  margin-left: 5px;\n  width: 80px\n}\n.save-share {\n  display: flex;\n  text-decoration: underline;\n  text-transform: capitalize;\n  margin-left: 50px;\n}\n\n.method-icon {\n  display: flex;\n}\n\n.title-prep {\n  margin-left: 5px;\n} \n\n\n.recipe-subtitle {\n  color: gray;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#recipe-index {\n  padding-top: 180px;\n}\n\n/* #index-cards {\n  margin-top: -50px;\n} */\n\n#ingredients-list {\n  margin-top: 20px;\n  height: 200px;\n  overflow-y: auto ;\n  width: 550px;\n  box-shadow: none;\n}\n\n/* .container {\n  margin-bottom: 20px;\n} */\n\n\n#filter-button {\n  width: 100px;\n  height: 40px;\n  justify-content: center;\n /* margin-right: 50px; */\n\n}\n\n\ni.fas.fa-filter {\n  margin-left: -5px;\n}\n\n.current-filter-container {\n  color: black;\n  background-color: lightgrey;\n  margin-left: 5px;\n  margin-top: 5px;\n  border-radius: 50px;\n  padding: 5px 10px;\n}\n\n.filter-container {\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n}\n\n\n.filterbtn {\n  margin-left: 5px;\n}\n\n#filterbtn {\n  width: 120px;\n  height: 40px;\n  /* margin-right: 50px; */\n}\n#ratingbtn {\n  width: 160px;\n  height: 40px;\n  /* margin-right: 50px; */\n}\n\n#filter-button:hover {\n  border-color: black;\n}\n.title.is-4 {\n  align-self: flex-start;\n}\n\n#submit-review {\n  font-weight: bold;\n  font-size: 16px;\n  text-transform: lowercase;\n}\n\n#click-review {\n  width: 140px;\n  padding-right: 11px;\n  font-weight: bold;\n}\n\n#nutri-info {\n  width: 60px;\n  height: 80px;\n  margin-right: 10px;\n  font-size: 14px;\n}\n\n\n\n.card.nutritional {\n  margin-right: 10px;\n  background-color: rgba(231, 231, 231, 0.493);\n  box-shadow: none;\n}\n\n/* .changeColor {\n  color: white;\n  \n}\n.changeColor:hover {\n  color: black;\n} */\n\n\n.textarea.is-medium {\n  width: 400px;\n}\n\n.input.comment {\n  height: 0px;\n}\n\n.review {\n  margin-top: 180px\n}\n#review-form {\n  width: 400px;\n}\n\n#submit {\n  border-radius: 7px;\n  height: 6vh;\n}\n\n#signupinput {\n  border-radius: 0;\n}\n\n#signupinput1 {\n  border-radius: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n#signupinput2 {\n  border-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n\n#signuptext {\n  width: 100%;\n  text-align: center;\n  display: block;\n  margin-top: -10px;\n  margin-left: 0;\n}\n\n/* #form {\n  margin-top: 180px;\n} */\n\n.hero-carousel {\n  padding-top: 170px;\n}\n.is-background {\n  height: 400px\n}\n.hero-body {\n  padding: 0px\n}\n\n@media screen and (max-width: 790px){\n  /* #form {\n    width: 70%;\n    margin-left: 14%;\n  } */\n\n}\n\n.addRecipe {\n  padding-top: 200px;\n}\n\n#addIngredientButton {\n  height: 36px;\n  width: 65px;\n  font-size: 16px;\n  border-radius: 0;\n  padding-left: 0;\n}\n\n#addIngredientBox {\n  width: 295px\n}\n\n#addDescriptionBox {\n  width: 296px;\n  height: 100px;\n}\n\n#addStepButton {\n  width: 180px;\n  border-radius:0;\n  font-size: 16px;\n  padding-left: 0;\n\n}\n#addRecipeSubmit {\n  width: 300px;\n  border-radius: 6px;\n  height: 75px;\n  font-size: 25px;\n}\n\n#label {\n  text-align: left;\n  margin-right: -50;\n}\n\n#method {\n  width: 425px\n}\n\n#addimage {\n  padding-right: 100px;\n  border-radius: 0px;\n}\n\n\n#box-one {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  height: 500px;    \n  }\n\n#box-one-button{\n  justify-content: center;\n  text-decoration: none;\n  max-width: 450px;\n}\n\n#box-two-button{\n  justify-content: center;\n  text-decoration: none;\n  max-width: 425px;\n}\n\n#box-two {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  height: 500px;\n}\n\n#box-twop{\n  text-shadow: 2px 2px black;\n}\n\n#box-onep {\n  text-shadow: 2px 2px black;\n}\n\n#column-one {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 350px;\n  }\n\n#column-two {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  height: 350px;    \n  }\n\n.courses-container {\n  margin-top: 30px;\n  margin-bottom: 30px;\n\n  \n} \n\n.overlay {\n  background-color: RGBA(0, 0, 0, 0.5);\n  \n}\n\n#courses-columns {\n  background-color: rgb(236, 236, 236);\n}\n\n/* #lineIngredients {\n  list-style-type: none;\n} */", "",{"version":3,"sources":["webpack://src/styles/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb;;AAEA;EACE,iBAAiB;EACjB,8KAA8K;EAC9K,2BAA2B;EAC3B,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;AACzB;;AAEA;;;GAGG;;AAEH;EACE,+BAA+B;EAC/B,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;;AAEpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,uBAAuB;;AAEzB;;AAEA;EACE,oBAAoB;EACpB,qCAAqC;EACrC,+BAA+B;EAC/B,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;;AAErB;AACA;EACE,mBAAmB;;AAErB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,WAAW;AACb;;;;AAIA;EACE,iBAAiB;;AAEnB;AACA;EACE,oBAAoB;AACtB;;;AAGA;EACE,iBAAiB;EACjB,eAAe;EACf,WAAW;;AAEb;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,oBAAoB;EACpB,WAAW;EACX,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,yBAAyB;EACzB,8BAA8B;;AAEhC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;;AAExB;;AAEA;EACE,UAAU;AACZ;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB;AACF;;AAEA;EACE,gBAAgB;EAChB;AACF;AACA;EACE,aAAa;EACb,0BAA0B;EAC1B,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;;AAGA;EACE,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;GAEG;;AAEH;EACE,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;;GAEG;;;AAGH;EACE,YAAY;EACZ,YAAY;EACZ,uBAAuB;CACxB,wBAAwB;;AAEzB;;;AAGA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,2BAA2B;EAC3B,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,8BAA8B;EAC9B,mBAAmB;AACrB;;;AAGA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;;;AAIA;EACE,kBAAkB;EAClB,4CAA4C;EAC5C,gBAAgB;AAClB;;AAEA;;;;;;GAMG;;;AAGH;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;AACF;AACA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,4BAA4B;EAC5B,2BAA2B;AAC7B;AACA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,8BAA8B;AAChC;;;AAGA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,cAAc;AAChB;;AAEA;;GAEG;;AAEH;EACE,kBAAkB;AACpB;AACA;EACE;AACF;AACA;EACE;AACF;;AAEA;EACE;;;KAGG;;AAEL;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,eAAe;;AAEjB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE;AACF;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;;AAGA;EACE,mDAAyC;EACzC,qBAAqB;EACrB,4BAA4B;EAC5B,aAAa;EACb;;AAEF;EACE,uBAAuB;EACvB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,mDAAuC;EACvC,qBAAqB;EACrB,4BAA4B;EAC5B,aAAa;AACf;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,mDAAsC;EACtC,sBAAsB;EACtB,4BAA4B;EAC5B,aAAa;EACb;;AAEF;EACE,mDAA2C;EAC3C,qBAAqB;EACrB,4BAA4B;EAC5B,aAAa;EACb;;AAEF;EACE,gBAAgB;EAChB,mBAAmB;;;AAGrB;;AAEA;EACE,oCAAoC;;AAEtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;GAEG","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n#hero {\n  margin-top: 160px; \n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images.immediate.co.uk/production/volatile/sites/30/2021/02/Harissa-lamb-8ce5e1f.jpg');\n  background-position: center;\n  background-size: cover;\n  position: relative; \n  display: flex;\n  justify-content: center;\n} \n\n/* .columns {\n  padding: 50px;\n  \n} */\n\nbody {\n  font-family: Futura, sans-serif;\n  /* font-weight: lighter; */\n}\n\n.item-1 {\n  margin-top: 160px;\n  justify-content: center;\n  /* height: 500px; */\n}\n\n#hero-img {\n  width: 1800px;\n  border-radius: 20px;\n  /* margin-left: 50px; */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  \n}\n\n#randombtn {\n  text-align: center;\n  position: absolute;\n  top: 65%;\n  left: 50%;\n  width: 250px;\n  background-color: white;\n  color: black;\n  font-weight: bold;\n  font-size: 18px;\n  border: 3px solid black;\n  \n}\n\n.card-header-title {\n  font-weight: lighter;\n  /* text-overflow: ellipsis \"[...]\"; */\n  text-overflow: ellipsis \"[...]\";\n  overflow: hidden;\n  height: 40px;\n}\n\n.card {\n  border-radius: 15px;\n}\n\n.image  {\n  border-radius: 15px;\n  \n}\n#image-index {\n  border-radius: 15px;\n  \n}\n\n.title-prep {\n  font-weight: bold;\n}\n\n.card-content {\n  \n  margin-top: -10px;\n}\n\n#heart-icon {\n  position: absolute;\n  z-index: 2;\n  margin-top: 20px;\n  margin-left: 10px;\n  color: white;\n  fill: black;\n}\n\n\n\nh5 {\n  text-align: right;\n  \n}\n.title {\n  font-weight: lighter;\n}\n\n\n.card-rating {\n  text-align: right;\n  font-size: 12px;\n  color: gray;\n\n}\n\n.index-links {\n  justify-content: space-between;\n}\n\n.show-rating {\n  color: gray;\n  text-transform: lowercase;\n}\n\n.method-title {\n  font-weight: bold;\n  /* align-self: flex-end; */\n  padding-left: 5px;\n}\n\n.recipe-steps {\n  margin-top: 10px;\n  height: 370px;\n  overflow-y: auto;\n}\n\n.share {\n  padding-right: 10px;\n}\n.save {\n  padding-right: 10px;\n}\n\ni.far {\n  padding-right: 5px;\n}\n\n.steps {\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.recipe-step-section {\n  font-weight: lighter;\n}\n\n.subtitle {\n  margin-bottom: 50px;\n  /* margin-left: 40px; */\n  display: flex;\n  font-weight: lighter;\n  color: gray;\n  font-size: 14px;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#recipe-show {\n  padding-top: 160px;\n}\n\n.show-links{\n  color: black;\n  display: flex;\n  justify-content: flex-end;\n  text-transform: lowercase;\n  justify-content: space-between;\n\n}\n\n.recipe-info {\n  display: flex;\n}\n\n.column {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n  \n}\n\n.title-prep.is-6 {\n  flex: none;\n}\n\n#icon-info2 {\n  \n  margin-right: 110px;\n}\n\n.info-icons {\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.icon-info-space {\n  margin-bottom: 50px;\n}\n\np.subtitle.method {\n  /* display: flex; */\n  margin-left: 40px;\n  margin-top: -20px;\n  margin-bottom: 20px;\n  width: 80px\n}\n\n.extra-info {\n  margin-left: 5px;\n  width: 80px\n}\n.save-share {\n  display: flex;\n  text-decoration: underline;\n  text-transform: capitalize;\n  margin-left: 50px;\n}\n\n.method-icon {\n  display: flex;\n}\n\n.title-prep {\n  margin-left: 5px;\n} \n\n\n.recipe-subtitle {\n  color: gray;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#recipe-index {\n  padding-top: 180px;\n}\n\n/* #index-cards {\n  margin-top: -50px;\n} */\n\n#ingredients-list {\n  margin-top: 20px;\n  height: 200px;\n  overflow-y: auto ;\n  width: 550px;\n  box-shadow: none;\n}\n\n/* .container {\n  margin-bottom: 20px;\n} */\n\n\n#filter-button {\n  width: 100px;\n  height: 40px;\n  justify-content: center;\n /* margin-right: 50px; */\n\n}\n\n\ni.fas.fa-filter {\n  margin-left: -5px;\n}\n\n.current-filter-container {\n  color: black;\n  background-color: lightgrey;\n  margin-left: 5px;\n  margin-top: 5px;\n  border-radius: 50px;\n  padding: 5px 10px;\n}\n\n.filter-container {\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n}\n\n\n.filterbtn {\n  margin-left: 5px;\n}\n\n#filterbtn {\n  width: 120px;\n  height: 40px;\n  /* margin-right: 50px; */\n}\n#ratingbtn {\n  width: 160px;\n  height: 40px;\n  /* margin-right: 50px; */\n}\n\n#filter-button:hover {\n  border-color: black;\n}\n.title.is-4 {\n  align-self: flex-start;\n}\n\n#submit-review {\n  font-weight: bold;\n  font-size: 16px;\n  text-transform: lowercase;\n}\n\n#click-review {\n  width: 140px;\n  padding-right: 11px;\n  font-weight: bold;\n}\n\n#nutri-info {\n  width: 60px;\n  height: 80px;\n  margin-right: 10px;\n  font-size: 14px;\n}\n\n\n\n.card.nutritional {\n  margin-right: 10px;\n  background-color: rgba(231, 231, 231, 0.493);\n  box-shadow: none;\n}\n\n/* .changeColor {\n  color: white;\n  \n}\n.changeColor:hover {\n  color: black;\n} */\n\n\n.textarea.is-medium {\n  width: 400px;\n}\n\n.input.comment {\n  height: 0px;\n}\n\n.review {\n  margin-top: 180px\n}\n#review-form {\n  width: 400px;\n}\n\n#submit {\n  border-radius: 7px;\n  height: 6vh;\n}\n\n#signupinput {\n  border-radius: 0;\n}\n\n#signupinput1 {\n  border-radius: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n#signupinput2 {\n  border-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n\n#signuptext {\n  width: 100%;\n  text-align: center;\n  display: block;\n  margin-top: -10px;\n  margin-left: 0;\n}\n\n/* #form {\n  margin-top: 180px;\n} */\n\n.hero-carousel {\n  padding-top: 170px;\n}\n.is-background {\n  height: 400px\n}\n.hero-body {\n  padding: 0px\n}\n\n@media screen and (max-width: 790px){\n  /* #form {\n    width: 70%;\n    margin-left: 14%;\n  } */\n\n}\n\n.addRecipe {\n  padding-top: 200px;\n}\n\n#addIngredientButton {\n  height: 36px;\n  width: 65px;\n  font-size: 16px;\n  border-radius: 0;\n  padding-left: 0;\n}\n\n#addIngredientBox {\n  width: 295px\n}\n\n#addDescriptionBox {\n  width: 296px;\n  height: 100px;\n}\n\n#addStepButton {\n  width: 180px;\n  border-radius:0;\n  font-size: 16px;\n  padding-left: 0;\n\n}\n#addRecipeSubmit {\n  width: 300px;\n  border-radius: 6px;\n  height: 75px;\n  font-size: 25px;\n}\n\n#label {\n  text-align: left;\n  margin-right: -50;\n}\n\n#method {\n  width: 425px\n}\n\n#addimage {\n  padding-right: 100px;\n  border-radius: 0px;\n}\n\n\n#box-one {\n  background: url('../assets/fridge3.jpeg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  height: 500px;    \n  }\n\n#box-one-button{\n  justify-content: center;\n  text-decoration: none;\n  max-width: 450px;\n}\n\n#box-two-button{\n  justify-content: center;\n  text-decoration: none;\n  max-width: 425px;\n}\n\n#box-two {\n  background: url('../assets/chef2.jpeg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  height: 500px;\n}\n\n#box-twop{\n  text-shadow: 2px 2px black;\n}\n\n#box-onep {\n  text-shadow: 2px 2px black;\n}\n\n#column-one {\n  background: url('../assets/pru2.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 350px;\n  }\n\n#column-two {\n  background: url('../assets/GraceDent.jpeg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  height: 350px;    \n  }\n\n.courses-container {\n  margin-top: 30px;\n  margin-bottom: 30px;\n\n  \n} \n\n.overlay {\n  background-color: RGBA(0, 0, 0, 0.5);\n  \n}\n\n#courses-columns {\n  background-color: rgb(236, 236, 236);\n}\n\n/* #lineIngredients {\n  list-style-type: none;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/App.css */ "./src/styles/App.css");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_RecipeIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/RecipeIndex */ "./src/components/RecipeIndex.js");
/* harmony import */ var _components_RecipeShow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/RecipeShow */ "./src/components/RecipeShow.js");
/* harmony import */ var _components_LoginorSignUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/LoginorSignUp */ "./src/components/LoginorSignUp.js");
/* harmony import */ var _components_AddRecipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/AddRecipe */ "./src/components/AddRecipe.js");
/* harmony import */ var _components_UpdateRecipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/UpdateRecipe */ "./src/components/UpdateRecipe.js");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/UserProfile */ "./src/components/UserProfile.js");
/* harmony import */ var _components_AddandDeleteReview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/AddandDeleteReview */ "./src/components/AddandDeleteReview.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();
















function App() {
  _s();

  const [recipes, setRecipes] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [isShowLoginOrRegister, setIsShowLoginOrRegister] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // const [hasError, setHasError] = useState(false)

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const getData = async () => {
      try {
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/recipes');
        setRecipes(data);
      } catch (err) {
        // setHasError(true)
        console.log(err);
      }
    };

    getData();
  }, []);
  console.log(recipes);

  const handleLoginClick = () => {
    setIsShowLoginOrRegister(isShowLoginOrRegister => !isShowLoginOrRegister);
  };

  const handleLoginOrRegister = bool => {
    setIsShowLoginOrRegister(bool);
  };

  return (
    /*#__PURE__*/
    // <h1>platester</h1>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleLoginClick: handleLoginClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_LoginorSignUp__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isShowLoginOrRegister: isShowLoginOrRegister,
        handleLoginClick: handleLoginClick,
        handleLoginOrRegister: handleLoginOrRegister
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
          exact: true,
          path: "/",
          component: _components_Home__WEBPACK_IMPORTED_MODULE_4__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
          exact: true,
          path: "/recipes",
          component: _components_RecipeIndex__WEBPACK_IMPORTED_MODULE_6__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
          exact: true,
          path: "/recipes/:id",
          component: _components_RecipeShow__WEBPACK_IMPORTED_MODULE_7__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
          exact: true,
          path: "/recipes/:id/edit",
          component: _components_UpdateRecipe__WEBPACK_IMPORTED_MODULE_10__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
          exact: true,
          path: "/profile",
          component: _components_UserProfile__WEBPACK_IMPORTED_MODULE_11__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
          exact: true,
          path: "/recipes/:id/reviews",
          component: _components_AddandDeleteReview__WEBPACK_IMPORTED_MODULE_12__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }, this)
  );
}

_s(App, "h1bjYD82YgAIfVgD2q0drb4+ZTk=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/2021 Twitter logo - black.png":
/*!**************************************************!*\
  !*** ./src/assets/2021 Twitter logo - black.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/2021 Twitter logo - black.9685c410.png");

/***/ }),

/***/ "./src/assets/GraceDent.jpeg":
/*!***********************************!*\
  !*** ./src/assets/GraceDent.jpeg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/GraceDent.3c6af33c.jpeg");

/***/ }),

/***/ "./src/assets/chef2.jpeg":
/*!*******************************!*\
  !*** ./src/assets/chef2.jpeg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/chef2.1db94c37.jpeg");

/***/ }),

/***/ "./src/assets/cookingTime.PNG":
/*!************************************!*\
  !*** ./src/assets/cookingTime.PNG ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cookingTime.68ceac66.PNG");

/***/ }),

/***/ "./src/assets/f_logo_RGB-Black_58.png":
/*!********************************************!*\
  !*** ./src/assets/f_logo_RGB-Black_58.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABcRAAAXEQHKJvM/AAAJA0lEQVR4nO2dT2hTSRzHZ6SUtS40XYp7Ko3Qy55Sr4Ikgt4rePNgRe+b3jy59Va9WD0Htr2LNAdB8ND0Ih6ETRUsaIWkoO5ul26zsHUp4iy/7C9L2nmTvD8z82be+33gkZJ5TV7efN9vfvObmd9wIQQjiBO5vwNEFxIC0YWEQHQhIRBdRrJ6GzjnFcZYEY9ZxlgB/56WTlazgSVNxtg+Y6zBGGsJIVrK//CUTPQaOOdQyZW+oySdpJcOiqJ7CCGatn+zbrwVAuccnvJ5Zqfih9ETxhocQoj9Iec7h1dC4JyDaa8yxuYimnjb1FEQKw5f4xG8EALnfB6f/rJU6DZgKUAMy677Fc4KAdv9ebQALj/9YVkFUQghGi5enHNCQAFU8RiXTvAf6IksuiYIp4SATcBiRizAMFZREE40GU4IAXsAyx76AEnpoP+wmPaFpCoEbAbgJvwoFeaLNvhDaTYXqQkBI38rOWkGwvIAmwvrcYhUxho452AF1kkEEmAZG9hUWsWqRcCmYC2HvkBUwHeo2gxIWRMCqryR0S6hKVaFEPM2vshK04DdQhJBdK5xzhtoSY1i3CKgCH6WCogobMLgmkkn0qhFQKeQRJCckmkn0phF4JyDo3NNKiCS0EHLoH3+gxGLgJaARKCfcbQMRd2frN0ikE9gBe0+g1aLQCKwRs9n0Nab0GYR0JH5RSogTFIXQsxpqT8dQkBltvIQJ5idnWWFgvwgNptNtr+fylTFOzpGL3UJoenABFKtQGVfuXLl8/nz5/fOnTv3ZWZmJvS4yOHh4eednZ3f4e+3b9+eeP/+/ddXr16d3t7ePtlqtRgcmrkshFhL9JEghCQHziMQWTlu3rx58Pr161+FIR4+fNgycK/AFBWT1GOiBS44lJyJuQRLS0udhYWF0dHR0ZOMsZPSCW4zjkP6lbhXGVsIfSOJXlOpVNjjx487ExMTvvs3ZYjfxPUXknQfl313Dmu12h/r6+ssAyLo8VPcYFMsi4BNgreRQ3AEm83m3vT09KRU6D+xmoi4FsGbFTzH6RPBd1JhNihjYC8SkYWA4wjeTjHLuAh6LEeNOkYSQt/iEy8BnyAHImDou0Wqp6gWwdvVR9A7uHHjRhZ9AhXVKFYhtBB8tgbgF0AXUSrINpGsQhSL4K01uHXrVhbiBHEIbRVCCcF3awARQ6kgH4S2CmEtwpyv1gAGjjBsnFdCdSXDCiH1RZpxuX379t9+Xrk2psPEFYYKAaOIXsYNisUim5qaylNPQcVQIYQJMVtZaWOCixcvfrY1ktjpdP7c3d39Syo4xps3b76V3jQPRBuLA3MxBI1N9x841h00Bu788eTJkx1T8wqAvb29fZi/UCgUfLgf1aD67R3SG8dEMBfwgd4cHz58MDbBZGlpybcHpBlUx2GFsBLwgd4cpqjVarue3hPlLCbpjaw0C2CuTQDNQdD3eXIomwdlrwGnp3sbjYPZxia4d+/e17R/WwKU8xSUQhj0T3nm6dOnEx7/fGWdkhAiAusXPGZctaKahBCBjx8//ubNxaoJrNdAIeAESMpucoyDg4N/pDf9I5JFCDyZyASBdUtCyB+BSxNJCDkkyGFUCcF4Fi8iVaT6VQlBUgyRKaT6VQmBegzZZrhFsJHckUgdqY4lIQSZDSJzSHUcJAQih5AQiC4kBKKL83tDP3r0aKtUKo1JBUMYGxv7hjH2/eCzolEsFiffvXvXTvIZd+/ePV2r1ZxbZ+G8EMrl8uHk5OQPUkEKjIyMnJqZmTmV5Ju3t7el91yAmgbLGEitpwUSgkUg/yIJgWC9JJwuIgnB1b2Ls8Dz589d8cmkOpaEQJhja2srcu/HFioh5C27iBVevHjhygxoKXu4SgheT9V1FYdmQEsXohKCm66tx8Bq6ZTS+Ach1S8JwRKfPn06cOVagpbHq4QgeZVEMp49e/bFkVu4Ib0zQAiSYohkwMYdjtzCwLoNFAKajkSDK8RRXr586cpAU6C1DxQCInmWRHxc7jGwIUIIVA4RHYfWTHZUu8iSECyws7Nz6MilKOtUGfsG5XDO22mn1rt06VIpaHu9YUCijPv37w85KxrwZF+9ejXyZJdWqzUlvZkOyq2XlEJA1tLevMulfASwGrrRUD5UPqAUwqCmgQ0yJYR3bA7aS3qgEHBTSepGZoPlQb9ioBAQpTkhvGJgPYYRgrcbeRH/Ux/ULLAwQsB+Z2B8mvCGgc1CKCEgZBX8pR1m+mEoIQghVshp9JZQe21EmbM41LwQztHBh1irEFZoLqN3hH54QwsBvU6yCv7QMSIE9p8YFslX8IbqsC5jP3HWNXi70VeOaIf1DXpEFgJ+AcUV3Mb8bvGItxuF54B6nGWLsYSA0cY7UgGRNp24u/LFXvuIjuOmVECkyXwUB1GLEBBv94TMIHWcNhCLRELAJmJBKiBs0076UCZeFi+EgKDFqlRA2AL8grm4TUIPXfkRquQvpEZVNUU9ClqEgGqco7EI6zyIGjhSoS1jCi6Tq5AYrLEqhNAWz9GaOgdNFPUkzAMzkrXeZ+05lLALc10qIHSxqdqyLwlGkmlhu0Vi0E9XBEl7CEEYy6pGYtCOMREw0+n1UAwXyIFMzKpJETAbeRZxJIx6E/GB3kHsMYSwWEm4ib2JIgWdInNdd+9AhbXMq6BoIQTsJfRAKiSOA2MHZ3UFi8JgPQUvBkEuU1OhpA7pHXSEjaOQSi5mjDXM0pS3I8CDsSCESDyAFIfUknJDSFoIUcEuZt6tQ88KpLZcIPXs7NgOFnM6lA2+wGW0AoH5D23hRJp+dCTBOz6bk+YCLOAdIUQxyawinTi1XwM4SNhcXMioIDo46beIcz6dwcmNOyAIlTFBHBFAGs7gMJzewaVPEGcw/uCbU7mBQaGCqwLo4cVWPtjDgClZBYxB1KWT3KGNT/8ZELHNoFASnN8A9DjoXK1xzgs4hjGHr2kmBt3AZFUN24EgXXgnhB5oZtd62cI457MYpKrga0n6Jz10MLF1A4+myyY/LFwI4ceVxmMWYxTwWsDXHmXFJ7b79jTYx0rvvTaDNsbKAlkXAhES2veR6EJCILqQEAjGGGP/AspKwlAu32lpAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/assets/fridge3.jpeg":
/*!*********************************!*\
  !*** ./src/assets/fridge3.jpeg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fridge3.0a1cce7a.jpeg");

/***/ }),

/***/ "./src/assets/glyph-logo_May2016.png":
/*!*******************************************!*\
  !*** ./src/assets/glyph-logo_May2016.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/glyph-logo_May2016.aaa207e2.png");

/***/ }),

/***/ "./src/assets/ingredientsIMG.PNG":
/*!***************************************!*\
  !*** ./src/assets/ingredientsIMG.PNG ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ingredientsIMG.6560c4b5.PNG");

/***/ }),

/***/ "./src/assets/prepTime.PNG":
/*!*********************************!*\
  !*** ./src/assets/prepTime.PNG ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/prepTime.873bcb81.PNG");

/***/ }),

/***/ "./src/assets/pru2.jpeg":
/*!******************************!*\
  !*** ./src/assets/pru2.jpeg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pru2.da9f8579.jpeg");

/***/ }),

/***/ "./src/assets/recipeMethod.PNG":
/*!*************************************!*\
  !*** ./src/assets/recipeMethod.PNG ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/recipeMethod.ad05541f.PNG");

/***/ }),

/***/ "./src/components/AddRecipe.js":
/*!*************************************!*\
  !*** ./src/components/AddRecipe.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/auth */ "./src/components/helpers/auth.js");
/* harmony import */ var _AddandUpdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddandUpdate */ "./src/components/AddandUpdate.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/AddRecipe.js",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable jsx-a11y/anchor-is-valid */








const AddRecipe = () => {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [description, setDescription] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [ingredients, setIngredients] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [method, setMethod] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [newRecipe, setNewRecipe] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    image: '',
    description: '',
    ingredients: null,
    method: null,
    prepTime: '',
    cookingTime: '',
    difficulty: '',
    servingSize: null,
    nutritionalInfo: '',
    tags: '',
    course: '',
    allergens: ''
  });
  const [errors, setErrors] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    image: '',
    description: '',
    ingredients: '',
    method: '',
    prepTime: '',
    cookingTime: '',
    difficulty: '',
    servingSize: null,
    nutritionalInfo: [],
    tags: [],
    course: '',
    allergens: []
  });

  const displayImage = event => {
    let img = event.target.files[0]; // setImageUrl(img.name)

    setImage(URL.createObjectURL(img));
  };

  const handleChange = event => {
    const newFormData = { ...newRecipe,
      [event.target.name]: event.target.value
    };
    setNewRecipe(newFormData);
  };

  const displayDescription = () => {
    setDescription(newRecipe.description);
    newRecipe.description = '';
  };

  const displayIngredient = () => {
    const newIngredient = newRecipe.ingredients;
    setIngredients([...ingredients, newIngredient]);
    newRecipe.ingredients = '';
  };

  const displayMethod = () => {
    const newStep = newRecipe.method;
    setMethod([...method, newStep]);
    newRecipe.method = '';
  };

  const handleSubmit = async event => {
    event.preventDefault();
    newRecipe.description = description;

    if (ingredients.length === 0) {
      newRecipe.ingredients = '';
    } else {
      newRecipe.ingredients = ingredients;
    }

    if (method.length === 0) {
      newRecipe.method = '';
    } else {
      newRecipe.method = method;
    }

    newRecipe.image = image;

    if (newRecipe.tags !== '') {
      const tagsArray = newRecipe.tags.split(',');
      newRecipe.tags = tagsArray;
    }

    if (newRecipe.nutritionalInfo !== '') {
      const nutritionalInfoArray = newRecipe.nutritionalInfo.split(',');
      newRecipe.nutritionalInfo = nutritionalInfoArray;
    }

    if (newRecipe.allergens !== '') {
      const allergensArray = newRecipe.allergens.split(',');
      newRecipe.allergens = allergensArray;
    }

    try {
      console.log(newRecipe);
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/recipes', newRecipe, {
        headers: {
          Authorization: `Bearer ${Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_3__["getTokenFromLocalStorage"])()}`
        }
      });
      const newRecipeId = data._id;
      console.log(data._id);
      history.push(`/recipes/${newRecipeId}`);
    } catch (err) {
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_AddandUpdate__WEBPACK_IMPORTED_MODULE_4__["default"], {
      image: image,
      description: description,
      ingredients: ingredients,
      method: method,
      newRecipe: newRecipe,
      errors: errors,
      displayImage: displayImage,
      displayDescription: displayDescription,
      displayIngredient: displayIngredient,
      displayMethod: displayMethod,
      handleChange: handleChange,
      handleSubmit: handleSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }, undefined)
  }, void 0, false);
};

_s(AddRecipe, "GEZSB6y9Bc2lt6Ea4a/wE4nGrtA=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"]];
});

_c = AddRecipe;
/* harmony default export */ __webpack_exports__["default"] = (AddRecipe);

var _c;

__webpack_require__.$Refresh$.register(_c, "AddRecipe");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/AddandDeleteReview.js":
/*!**********************************************!*\
  !*** ./src/components/AddandDeleteReview.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/AddandDeleteReview.js",
    _s = __webpack_require__.$Refresh$.signature();






const AddandDeleteReview = () => {
  _s();

  const {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const [formData, setFormData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    subject: '',
    comment: '',
    rating: 0
  });

  const handleChange = event => {
    console.log(event.target);
    const newFormData = { ...formData,
      [event.target.name]: event.target.value
    };
    setFormData(newFormData);
    console.log(newFormData);
  };

  const handleRatingClick = event => {
    console.log(event);

    if (event.target.classList.contains('rating')) {
      const newFormData = { ...formData,
        [event.target.name]: event.target.value
      };
      setFormData(newFormData);
    } else if (event.target.parentElement.classList.contains('rating')) {
      const newFormData = { ...formData,
        [event.target.parentNode.attributes.name.value]: event.target.parentNode.attributes.value.value
      };
      setFormData(newFormData);
      console.log(newFormData);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/recipes/${id}/reviews`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
    className: "review",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      className: "review column is-offset-one-third box",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "close-review-popup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
          className: "far fa-times-circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "form-field-container is-flex is-flex-direction-column is-align-items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "title is-5 mb-5",
          children: "Rate & Review"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          className: "input",
          id: "review-form",
          name: "subject",
          onChange: handleChange,
          type: "text",
          placeholder: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          class: "field",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            class: "control",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("textarea", {
              className: "textarea is-medium",
              name: "comment",
              onChange: handleChange,
              placeholder: "Type your comment here"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "is-flex is-flex-direction-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "rating",
            id: "rating-1",
            onClick: handleRatingClick,
            name: "rating",
            value: "1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
              className: "far fa-star fa-2x",
              onMouseOver: _ref => {
                let {
                  target
                } = _ref;
                return target.style.color = "yellow";
              },
              onMouseOut: _ref2 => {
                let {
                  target
                } = _ref2;
                return target.style.color = "black";
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "rating",
            id: "rating-1",
            onClick: handleRatingClick,
            name: "rating",
            value: "2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
              className: "far fa-star fa-2x",
              onMouseOver: _ref3 => {
                let {
                  target
                } = _ref3;
                return target.style.color = "yellow";
              },
              onMouseOut: _ref4 => {
                let {
                  target
                } = _ref4;
                return target.style.color = "black";
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "rating",
            id: "rating-1",
            onClick: handleRatingClick,
            name: "rating",
            value: "3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
              className: "far fa-star fa-2x",
              onMouseOver: _ref5 => {
                let {
                  target
                } = _ref5;
                return target.style.color = "yellow";
              },
              onMouseOut: _ref6 => {
                let {
                  target
                } = _ref6;
                return target.style.color = "black";
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "rating",
            id: "rating-1",
            onClick: handleRatingClick,
            name: "rating",
            value: "4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
              className: "far fa-star fa-2x",
              onMouseOver: _ref7 => {
                let {
                  target
                } = _ref7;
                return target.style.color = "yellow";
              },
              onMouseOut: _ref8 => {
                let {
                  target
                } = _ref8;
                return target.style.color = "black";
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "rating",
            id: "rating-1",
            onClick: handleRatingClick,
            name: "rating",
            value: "5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
              className: "far fa-star fa-2x",
              onMouseOver: _ref9 => {
                let {
                  target
                } = _ref9;
                return target.style.color = "yellow";
              },
              onMouseOut: _ref10 => {
                let {
                  target
                } = _ref10;
                return target.style.color = "black";
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          className: "button is-danger has-text-white",
          id: "submit-review",
          type: "submit",
          value: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

_s(AddandDeleteReview, "W9m6n+zaEPmvAT7YmvUZCAhFbvc=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"]];
});

_c = AddandDeleteReview;
/* harmony default export */ __webpack_exports__["default"] = (AddandDeleteReview);

var _c;

__webpack_require__.$Refresh$.register(_c, "AddandDeleteReview");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/AddandUpdate.js":
/*!****************************************!*\
  !*** ./src/components/AddandUpdate.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_IMG_0630_PNG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/IMG_0630.PNG */ "./src/images/IMG_0630.PNG");
/* harmony import */ var _assets_ingredientsIMG_PNG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/ingredientsIMG.PNG */ "./src/assets/ingredientsIMG.PNG");
/* harmony import */ var _assets_recipeMethod_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/recipeMethod.PNG */ "./src/assets/recipeMethod.PNG");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/AddandUpdate.js";






const AddandUpdate = _ref => {
  let {
    newRecipe,
    image,
    description,
    ingredients,
    method,
    errors,
    displayImage,
    handleChange,
    displayDescription,
    displayIngredient,
    displayMethod,
    handleSubmit
  } = _ref;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("section", {
    className: "addRecipe",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
      className: "form",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "field is-vertical",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "is-flex is-justify-content-space-around\t",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "subtitle is-3",
            children: "Add Your Recipe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            className: "button",
            type: "submit",
            id: "addRecipeSubmit",
            children: "Add Recipe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field is-grouped ml-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: "label mr-6 mt-1",
            children: "Difficulty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 3
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            className: "control",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
              class: "select is-fullwidth",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("select", {
                onChange: handleChange,
                name: "difficulty",
                value: newRecipe.difficulty,
                className: `input ${errors.difficulty && 'is-danger'} `,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "Easy",
                  children: "Easy"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "Medium",
                  children: "Medium"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "Hard",
                  children: "Hard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 15
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 13
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 11
            }, undefined), errors.difficulty && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "is-danger subtitle mt-2 mb-2 ml-0",
              children: "Please select an option"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: "label ml-4 mr-5 mt-1",
            children: "Course"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            className: "control",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
              class: "select is-fullwidth",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("select", {
                onChange: handleChange,
                name: "course",
                value: newRecipe.course,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "Starter",
                  children: "Starter"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "Main",
                  children: "Main"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "Dessert",
                  children: "Dessert"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "Snack",
                  children: "Snack"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 15
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 13
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: "label ml-4 mr-5 mt-1",
            children: "Serves"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            className: "control",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
              class: "select is-fullwidth",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("select", {
                onChange: handleChange,
                name: "servingSize",
                value: newRecipe.servingSize,
                className: `input ${errors.servingSize && 'is-danger'} `,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "1",
                  children: "1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "2",
                  children: "2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "3",
                  children: "3"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "4",
                  children: "4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "5",
                  children: "5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "6",
                  children: "6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "7",
                  children: "7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
                  value: "8",
                  children: "8"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 15
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 13
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 11
            }, undefined), errors.servingSize && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "is-danger subtitle mt-2 mb-2 ml-0",
              children: "Please select an option"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 34
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 9
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "field mr-5 ml-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "control is-expanded",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Recipe Name",
                name: "name",
                value: newRecipe.name,
                onChange: handleChange,
                className: `input ${errors.name && 'is-danger'} `
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 11
              }, undefined), errors.name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "is-danger subtitle mt-2 mb-2 ml-0",
                children: "You need to add a name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 27
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "control is-expanded ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
                className: "input",
                placeholder: "Allergens: vegetarian, vegan, gluten free...",
                name: "allergens",
                value: newRecipe.allergens,
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "control is-expanded ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
                className: "input",
                placeholder: "Nutritional Information: iron: 3mg, protein: 8g...",
                name: "nutritionalInfo",
                value: newRecipe.nutritionalInfo,
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "field mr-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "control is-expanded ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
                placeholder: "Preparation Time",
                name: "prepTime",
                value: newRecipe.prepTime,
                onChange: handleChange,
                className: `input ${errors.prepTime && 'is-danger'} `
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 9
              }, undefined), errors.prepTime && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "is-danger subtitle mt-2 mb-2 ml-0",
                children: "You need to add preparation time for this recipe"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "control is-expanded ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
                placeholder: "Cooking Time",
                name: "cookingTime",
                value: newRecipe.cookingTime,
                onChange: handleChange,
                className: `input ${errors.cookingTime && 'is-danger'} `
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 9
              }, undefined), errors.cookingTime && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "is-danger subtitle mt-2 mb-2 ml-0",
                children: "You need to add cooking time for this recipe"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 34
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "control is-expanded ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
                className: "input",
                placeholder: "Tags: Italian, Curry, slow-cooked...",
                name: "tags",
                value: newRecipe.tags,
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "field is-horizontal mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-label is-normal",
          id: "label",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: "label",
            children: "Image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "control ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "file",
              name: "image",
              value: newRecipe.image,
              onChange: displayImage,
              className: `${errors.image && 'is-danger'} `
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 13
            }, undefined), errors.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "is-danger subtitle mt-2 mb-2 ml-0",
              children: "You need to add an image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 32
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            className: "pt-0 image is-1by1",
            id: "addimage",
            alt: image,
            src: image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 3
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "field is-horizontal mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-label is-normal",
          id: "label",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: "label",
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "control ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("textarea", {
              id: "addDescriptionBox",
              type: "text",
              name: "description",
              placeholder: "Short description of your dish",
              value: newRecipe.description,
              onChange: handleChange,
              className: `input ${errors.description && 'is-danger'} `
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 11
            }, undefined), errors.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "is-danger subtitle mt-2 mb-2 ml-0",
              children: "You need to add a description "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 36
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "control",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
              className: "button",
              type: "button",
              id: "addIngredientButton",
              onClick: displayDescription,
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 9
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 5
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-body ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
              src: _images_IMG_0630_PNG__WEBPACK_IMPORTED_MODULE_1__["default"],
              alt: "method-icon",
              width: "40px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
              children: " Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 69
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "mr-6",
              children: description && description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 5
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 3
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "field is-horizontal mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-label is-normal ",
          id: "label",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: "label ",
            children: "Ingredients"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 5
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 3
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "control",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              id: "addIngredientBox",
              type: "text",
              name: "ingredients",
              placeholder: "eg: 2 eggs",
              value: newRecipe.ingredients,
              onChange: handleChange,
              className: `input ${errors["ingredients.0"] && 'is-danger'} `
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 7
            }, undefined), errors["ingredients.0"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "is-danger subtitle mt-2 mb-2 ml-0",
              children: "You need to add your ingredients"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 39
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "control",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
              className: "button",
              type: "button",
              id: "addIngredientButton",
              onClick: displayIngredient,
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 5
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-body ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
              src: _assets_ingredientsIMG_PNG__WEBPACK_IMPORTED_MODULE_2__["default"],
              alt: "method-icon",
              width: "40px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 14
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
              children: " Ingredients added "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 77
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 9
            }, undefined), ingredients && ingredients.map((ingredient, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
              children: ingredient
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 66
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 3
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "field is-horizontal mt-4 mb-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-label is-normal",
          id: "label",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            className: "label",
            children: "Method"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "control",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("textarea", {
              id: "method",
              name: "method",
              placeholder: "Write each step here",
              value: newRecipe.method,
              onChange: handleChange,
              className: `textarea ${errors["method.0"] && 'is-danger'} `
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 11
            }, undefined), errors["method.0"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              className: "is-danger subtitle mt-2 mb-2 ml-0",
              children: "You need to add your method"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 36
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
              className: "button",
              type: "button",
              id: "addStepButton",
              onClick: displayMethod,
              children: "Add another Step"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 5
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "field-body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
              src: _assets_recipeMethod_PNG__WEBPACK_IMPORTED_MODULE_3__["default"],
              alt: "method-icon",
              width: "40px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 11
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
              children: " Method"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 72
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 9
            }, undefined), method && method.map((step, index) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
                    children: ["Step ", index + 1]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 19
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 13
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "mr-6",
                  children: step
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 13
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 13
                }, undefined)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 13
              }, undefined);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 5
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

_c = AddandUpdate;
/* harmony default export */ __webpack_exports__["default"] = (AddandUpdate);

var _c;

__webpack_require__.$Refresh$.register(_c, "AddandUpdate");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bulma_carousel_dist_js_bulma_carousel_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bulma-carousel/dist/js/bulma-carousel.min.js */ "./node_modules/bulma-carousel/dist/js/bulma-carousel.min.js");
/* harmony import */ var bulma_carousel_dist_js_bulma_carousel_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bulma_carousel_dist_js_bulma_carousel_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_f_logo_RGB_Black_58_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/f_logo_RGB-Black_58.png */ "./src/assets/f_logo_RGB-Black_58.png");
/* harmony import */ var _assets_2021_Twitter_logo_black_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/2021 Twitter logo - black.png */ "./src/assets/2021 Twitter logo - black.png");
/* harmony import */ var _assets_glyph_logo_May2016_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/glyph-logo_May2016.png */ "./src/assets/glyph-logo_May2016.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/Home.js",
    _s = __webpack_require__.$Refresh$.signature();











const Home = () => {
  _s();

  const [courses, setCourses] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [recipes, setRecipes] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // const { id } = useParams()
  // console.log('ID', id)

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const getData = async () => {
      try {
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/recipes`);
        setRecipes(data);
        const getCourses = data.filter(recipe => {
          return recipe.course.toLowerCase() === 'starter' || recipe.course.toLowerCase() === 'main' || recipe.course.toLowerCase() === 'dessert';
        });
        console.log(getCourses);
        const newArray = [];

        for (let i = 0; i < getCourses.length; i++) {
          let coursesOnly = false;
          coursesOnly = newArray.some(course => {
            return course.course.toLowerCase() === getCourses[i].course.toLowerCase();
          });
          if (!coursesOnly) newArray.push(getCourses[i]);
        }

        newArray.sort((a, b) => b.course.toLowerCase() - a.course.toLowerCase());
        setCourses(newArray);
        bulma_carousel_dist_js_bulma_carousel_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.attach('.carousel', {
          slidesToScroll: 1,
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2000
        });
      } catch (err) {
        // setHasError(true)
        console.log(err);
      }
    };

    getData();
  }, []);
  console.log(courses);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
      className: "hero-carousel is-large",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "hero-head"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "carousel-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "carousel",
          children: recipes.length && recipes.map((recipe, index) => {
            return (
              /*#__PURE__*/
              // <div  className={`item-${index+1}`}>
              Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "carousel-item has-background",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                  className: "is-background",
                  src: recipe.image,
                  alt: recipe.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, undefined)
              }, recipe._id, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 19
              }, undefined) // </div>

            );
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "hero-body"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
      children: "Inspiration for your next meal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: `/recipes`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "container courses-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "columns is-multiline",
          children: courses.length && courses.map(recipe => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "column is-one-third-tablet is-full-mobile pl-4 pr-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "card is-shadowless",
                id: "courses-columns",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "card-header has-text-centered",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "card-header-title",
                    children: `${recipe.course[0].toUpperCase()}${recipe.course.slice(1).toLowerCase()}`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 19
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 17
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "card-image",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("figure", {
                    className: "image is-4by3",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                      src: recipe.image,
                      alt: recipe.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 19
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 17
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 15
              }, undefined)
            }, recipe._id, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 13
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "column is-one-half mx-5 mt-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "box is-shadowless is-large",
        id: "box-one",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: "title has-text-white",
          id: "box-onep",
          children: "Not sure what to make for dinner?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
          to: `/recipes/`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            class: "button is-normal is-rounded is-danger is-ghost has-text-white is-shadowless",
            id: "box-one-button",
            children: "Let our recipe search help you find your perfect meal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "tile is-ancestor mt-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "tile is-parent",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "tile is child column is-one-half ml-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
            to: `/recipes/add`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "overlay card is-shadowless is-flex is-flex-direction-column is-justify-content-space-between",
              id: "column-one",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "media-content",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                  className: "title",
                  children: "Fancy yourself as the next Gordon or Pru?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "card-content",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                  className: "content",
                  children: "Upload a your latest creation to our Add Recipe page"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "tile is child column is-one-half mr-5 ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
            to: `/recipes/`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "overlay card is-shadowless",
              id: "column-two",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "media-content",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                  className: "title",
                  children: "Are you a budding Jay Rayner or Grace Dent?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "card-content",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                  className: "content",
                  children: "Rate and comment on recipes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "column is-one-half mx-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "overlay box is-shadowless is-large",
        id: "box-two",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "media",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "title has-text-white",
            id: "box-twop",
            children: "Want to sharpen up your knife skills?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
          to: `/recipes/`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            class: "button is-normal is-rounded is-danger is-ghost has-text-white is-shadowless mt-5",
            id: "box-two-button",
            children: "Check out one of our masterclasses"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: " footer is-flex is-flex-direction-row",
      id: "footer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
        className: "has-text-grey ml-6 mr-4",
        children: "\xA9 2021 Platester"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
        className: "has-text-grey mx-4",
        href: "/recipes/",
        children: "Privacy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
        className: "has-text-grey mx-4",
        href: "/recipes/",
        children: "Terms"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
        className: "has-text-grey mr-6 ml-4 pr-6",
        href: "/recipes/",
        children: "Company details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
        className: "footer-item ml-6 mr-4 pl-6",
        id: "twitter",
        href: "https://twitter.com",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("figure", {
          className: "image is-24x24",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
            className: "twitter-logo",
            src: _assets_2021_Twitter_logo_black_png__WEBPACK_IMPORTED_MODULE_5__["default"],
            alt: "twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
        className: "footer-item mx-4",
        id: "insta",
        href: "https://instagram.com",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("figure", {
          className: "image is-24x24",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
            className: "instagram-logo",
            src: _assets_glyph_logo_May2016_png__WEBPACK_IMPORTED_MODULE_6__["default"],
            alt: "instagram"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
        className: "footer-item mr-6 ml-4",
        id: "fb",
        href: "https://facebook.com",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("figure", {
          className: "image is-24x24",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
            className: "facebook-logo",
            src: _assets_f_logo_RGB_Black_58_png__WEBPACK_IMPORTED_MODULE_4__["default"],
            alt: "facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(Home, "Vtrp+Y7Xc/P6VBA5nRNxFipt8Rs=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/Login.js",
    _s = __webpack_require__.$Refresh$.signature();





const Login = _ref => {
  _s();

  let {
    handleLoginOrRegisterPopup,
    emailData
  } = _ref;
  const [formData, setFormData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    password: ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setFormData({ ...formData,
      email: emailData
    });
  }, [emailData]);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleChange = event => {
    const newFormData = { ...formData,
      [event.target.name]: event.target.value
    };
    setFormData(newFormData);
  };

  const setItemToLocalStorage = token => {
    window.localStorage.setItem('token', token);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/login', formData);
      setItemToLocalStorage(data.token);
      handleLoginOrRegisterPopup(false, false, false);
    } catch (err) {
      setError(true);
    }
  };

  const handleLoginClose = () => {
    handleLoginOrRegisterPopup(false, false, false);
  };

  const handleLoginBack = () => {
    handleLoginOrRegisterPopup(true, false, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
    className: "column is-offset-one-third box",
    onSubmit: handleSubmit,
    id: "form",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "close-login-popup",
        onClick: handleLoginBack,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
          className: "fas fa-long-arrow-alt-left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "close-login-popup",
        onClick: handleLoginClose,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
          className: "far fa-times-circle login-close-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "subtitle is-4",
      id: "signuptext",
      children: " Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("hr", {
      className: "mt-4 mb-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "title is-6 mb-5",
      children: "Welcome to Platester"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "field mb-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "control",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "signupinput1",
          className: `input ${error ? 'is-danger py-5' : 'py-5'}`,
          placeholder: "Email",
          name: "email",
          value: formData.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      className: "is-danger subtitle mt-1 mb-1 ml-0",
      children: "Your username or password are incorrect"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "field mb-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "control",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "signupinput2",
          type: "password",
          className: `input ${error ? 'is-danger py-5' : 'py-5'}`,
          placeholder: "Password",
          name: "password",
          value: formData.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      className: "is-danger subtitle mt-1 mb-1 ml-0",
      children: "Your username or password are incorrect"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "field mb-4 mt-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "control",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          type: "submit",
          className: "button is-danger",
          id: "submit",
          children: "Log in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

_s(Login, "/nQkfry5wZvxeoDKL6TCV4GitU8=");

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

__webpack_require__.$Refresh$.register(_c, "Login");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/LoginorSignUp.js":
/*!*****************************************!*\
  !*** ./src/components/LoginorSignUp.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./src/components/Login.js");
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Register */ "./src/components/Register.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/LoginorSignUp.js",
    _s = __webpack_require__.$Refresh$.signature();








const LoginOrSignUp = _ref => {
  _s();

  let {
    isShowLoginOrRegister,
    handleLoginClick,
    handleLoginOrRegister
  } = _ref;
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const [isShowLogin, setIsShowLogin] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [isShowRegister, setIsShowRegister] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [formData, setFormData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: ''
  });

  const handleChange = event => {
    const newFormData = { ...formData,
      [event.target.name]: event.target.value
    };
    setFormData(newFormData);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users', formData);
      setIsShowLogin(true);
    } catch (err) {
      console.log(err);
      setIsShowRegister(true);
    }
  }; // const handleClick = () => {
  //   history.push('/')
  // }


  const handleLoginPopup = () => {
    handleLoginClick();
  };

  const handleLoginOrRegisterPopup = (showLoginOrRegister, showLogin, showRegister) => {
    handleLoginOrRegister(showLoginOrRegister);
    setIsShowLogin(showLogin);
    setIsShowRegister(showRegister);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: `${isShowLoginOrRegister ? '' : 'hide'} login-background`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: `${isShowLoginOrRegister && !isShowLogin && !isShowRegister ? '' : 'hide'} login-popup`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("form", {
        className: "form-container",
        onSubmit: handleSubmit,
        id: "form",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "close-login-popup",
          onClick: handleLoginPopup,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
            className: "far fa-times-circle login-close-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "form-field-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "subtitle is-4",
            id: "signuptext",
            children: "Login or Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("hr", {
            className: "mt-4 mb-5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "title is-6 mb-5",
            children: "Welcome to Platester"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "field mb-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              className: "control pb-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
                className: "input py-5",
                placeholder: "Email",
                name: "email",
                value: formData.email,
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "field mb-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              className: "control",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
                type: "submit",
                className: "button is-danger",
                id: "submit",
                children: "Continue"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: `${isShowLoginOrRegister && isShowLogin && !isShowRegister ? '' : 'hide'} loginOrRegister-popup`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
        handleLoginOrRegisterPopup: handleLoginOrRegisterPopup,
        emailData: formData.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: `${isShowLoginOrRegister && !isShowLogin && isShowRegister ? '' : 'hide'} loginOrRegister-popup`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Register__WEBPACK_IMPORTED_MODULE_4__["default"], {
        handleLoginOrRegisterPopup: handleLoginOrRegisterPopup,
        emailData: formData.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

_s(LoginOrSignUp, "uaYHaWdOT26GMKkD4V0lYFgqrLU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = LoginOrSignUp;
/* harmony default export */ __webpack_exports__["default"] = (LoginOrSignUp);

var _c;

__webpack_require__.$Refresh$.register(_c, "LoginOrSignUp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_platester_logo_white_withText_PNG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/platester_logo_white_withText.PNG */ "./src/images/platester_logo_white_withText.PNG");
/* harmony import */ var _images_platester_logo_red_withText_PNG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/platester_logo_red_withText.PNG */ "./src/images/platester_logo_red_withText.PNG");
/* harmony import */ var _images_platester_smalllogo_red_withText_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/platester_smalllogo_red_withText.PNG */ "./src/images/platester_smalllogo_red_withText.PNG");
/* harmony import */ var _images_platester_smalllogo_white_withText_PNG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/platester_smalllogo_white_withText.PNG */ "./src/images/platester_smalllogo_white_withText.PNG");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/auth */ "./src/components/helpers/auth.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/Navbar.js",
    _s = __webpack_require__.$Refresh$.signature();

 // import { Link } from 'react-router-dom'





 // import 'animate.css';







const Navbar = _ref => {
  _s();

  let {
    handleLoginClick
  } = _ref;
  const [scrollState, setScrollState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("big");
  const [searching, setSearching] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // const [recipeData, setRecipeData] = useState([])

  const [courses, setCourses] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [allergens, setAllergens] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useLocation"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {}, [location.pathname]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getRecipeData = async () => {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('/api/recipes'); // setRecipeData(data)

      const coursesArray = ['All'];
      const allergensArray = ['All'];

      for (let i = 0; i < data.length; i++) {
        // Add to courses array if no duplicate
        const coursesLowerCase = coursesArray.map(course => course.toLowerCase());
        if (!coursesLowerCase.includes(data[i].course.toLowerCase())) coursesArray.push(data[i].course); // Add to allergens array if no duplicate

        const allergensLowerCase = allergensArray.map(allergen => allergen.toLowerCase());
        data[i].allergens.forEach(allergen => {
          if (!allergensLowerCase.includes(allergen.toLowerCase())) allergensArray.push(allergen);
        });
      }

      coursesArray.sort();
      setCourses(coursesArray);
      allergensArray.sort();
      setAllergens(allergensArray);
    };

    getRecipeData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("scroll", e => {
      const scrolled = document.scrollingElement.scrollTop;
      setQuery({});

      if (scrolled > 0) {
        setSearching(false);

        if (scrollState !== "small") {
          setScrollState("small");
        }
      } else if (scrollState !== "large") {
        setScrollState("large");
      }
    });
  }, [scrollState]); // * if link is clicked expand the navbar to required height

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (searching) {
      document.querySelector('.navbar-bottom').classList.add('clicked');
    } else {
      document.querySelector('.navbar-bottom').classList.remove('clicked');
    }
  }, [searching]);

  const closeSearchMobile = () => {
    setSearching(false);
  };

  const setFilterLink = event => {
    if (event.target.id === 'recipe-name-input') {
      setQuery({ ...query,
        name: event.target.value.toLowerCase()
      });
    }

    if (event.target.classList.contains('course-dropdown-item')) {
      setQuery({ ...query,
        course: event.target.innerText.toLowerCase()
      });
    }

    if (event.target.classList.contains('allergens-dropdown-item')) {
      setQuery({ ...query,
        allergens: event.target.innerText.toLowerCase()
      });
    }
  };

  const getSearchLink = () => {
    return `?${query_string__WEBPACK_IMPORTED_MODULE_8__["stringify"](query)}`;
  };

  const userIsAuthenticated = () => {
    const payload = Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_7__["getPayload"])();
    if (!payload) return false;
    const now = Math.round(Date.now() / 1000);
    return now < payload.exp;
  };

  const handleLoginPopup = () => {
    handleLoginClick();
  };

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    document.querySelector('.account-dropdown').classList.toggle('is-active');
  };

  return scrollState === 'small' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("header", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("nav", {
      className: "navbar is-fixed-top navbar-white",
      role: "navigation",
      "aria-label": "main navigation",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "navbar-top",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "navbar-brand",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            className: "navbar-item p-0",
            to: "/",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
              className: "logo-main",
              src: _images_platester_logo_red_withText_PNG__WEBPACK_IMPORTED_MODULE_2__["default"],
              alt: "platester"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
              className: "logo-small",
              src: _images_platester_smalllogo_red_withText_PNG__WEBPACK_IMPORTED_MODULE_3__["default"],
              alt: "platester"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "navbar-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            className: "search-button button",
            onClick: () => setScrollState('large'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "search-text",
              children: "Start your search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 94
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "search-icon",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                className: "icon has-background-transparent has-text-white",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                  className: "fas fa-search"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 240
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 175
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 146
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "navbar-end",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "navbar-links is-flex is-flex-direction-row mr-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              className: "button nav-white nav-right",
              href: "#",
              children: "Become a host"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              className: "button nav-white nav-right",
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                className: "icon has-background-transparent has-text-black",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                  className: "fas fa-globe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 136
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 71
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "dropdown account-dropdown",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "dropdown-trigger",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                className: "button account-button",
                "aria-haspopup": "true",
                "aria-controls": "dropdown-menu",
                onClick: () => {
                  const dropdown = document.querySelector('.account-dropdown');
                  dropdown.classList.toggle('is-active');
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "menu-icon",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                    className: "icon has-background-transparent has-text-black",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                      className: "fas fa-bars"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 111
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 46
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "user-account-icon",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                    className: "icon has-background-transparent has-text-white",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                      className: "fas fa-user"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 119
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 54
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "dropdown-menu",
              id: "dropdown-menu",
              role: "menu",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "dropdown-content",
                children: [!userIsAuthenticated() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "#",
                    onClick: () => {
                      handleLoginPopup();
                      document.querySelector('.account-dropdown').classList.toggle('is-active');
                    },
                    className: "dropdown-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                      children: "Sign up"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "#",
                    onClick: () => {
                      handleLoginPopup();
                      document.querySelector('.account-dropdown').classList.toggle('is-active');
                    },
                    className: "dropdown-item",
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("hr", {
                    className: "dropdown-divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "#",
                    onClick: handleLogout,
                    className: "dropdown-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                      children: "Logout"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("hr", {
                    className: "dropdown-divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true), userIsAuthenticated() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "/add",
                    className: "dropdown-item",
                    children: "Create a recipe"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "/profile",
                    className: "dropdown-item",
                    children: "My Profile"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "/recipes",
                    className: "dropdown-item",
                    children: "Help"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                  to: "/recipes",
                  className: "dropdown-item",
                  children: "Help"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("hr", {
                  className: "dropdown-divider"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                  to: "#",
                  onClick: () => {
                    setScrollState("large");
                    setSearching(true);
                    document.querySelector('.account-dropdown').classList.toggle('is-active');
                  },
                  className: "dropdown-item search-recipes",
                  children: "Search Recipes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                  to: "/recipes",
                  className: "dropdown-item",
                  children: "Cooking Classes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                  to: "/recipes",
                  className: "dropdown-item",
                  children: "Inspiration"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("header", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("nav", {
      className: "navbar is-fixed-top",
      role: "navigation",
      "aria-label": "main navigation",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "navbar-top",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "navbar-brand",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
            className: "navbar-item p-0",
            href: "/",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
              className: "logo-main",
              src: _images_platester_logo_white_withText_PNG__WEBPACK_IMPORTED_MODULE_1__["default"],
              alt: "platester"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
              className: "logo-small",
              src: _images_platester_smalllogo_white_withText_PNG__WEBPACK_IMPORTED_MODULE_4__["default"],
              alt: "platester"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "navbar-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "navbar-links is-flex is-flex-direction-row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "button-container"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              className: "button nav-transparent nav-center active",
              href: "#",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                children: "Search Recipes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 85
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "button-bottom-border active"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 110
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              className: "button nav-transparent nav-center",
              href: "#",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                children: "Cooking Classes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 78
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "button-bottom-border"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 104
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              className: "button nav-transparent nav-center",
              href: "#",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                children: "Inspiration"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 78
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "button-bottom-border"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 100
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "navbar-end",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "navbar-links is-flex is-flex-direction-row mr-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              className: "button nav-transparent nav-right",
              href: "#",
              children: "Become a host"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              className: "button nav-transparent nav-right",
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                className: "icon has-background-transparent has-text-white",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                  className: "fas fa-globe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 142
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 77
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "dropdown account-dropdown",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "dropdown-trigger",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                className: "button account-button",
                "aria-haspopup": "true",
                "aria-controls": "dropdown-menu",
                onClick: () => {
                  const dropdown = document.querySelector('.account-dropdown');
                  dropdown.classList.toggle('is-active');
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "menu-icon",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                    className: "icon has-background-transparent has-text-black",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                      className: "fas fa-bars"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 113
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 48
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "user-account-icon",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                    className: "icon has-background-transparent has-text-white",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                      className: "fas fa-user"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 239,
                      columnNumber: 121
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 56
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "dropdown-menu",
              id: "dropdown-menu",
              role: "menu",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "dropdown-content",
                children: [!userIsAuthenticated() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "#",
                    onClick: () => {
                      handleLoginPopup();
                      document.querySelector('.account-dropdown').classList.toggle('is-active');
                    },
                    className: "dropdown-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                      children: "Sign up"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "#",
                    onClick: () => {
                      handleLoginPopup();
                      document.querySelector('.account-dropdown').classList.toggle('is-active');
                    },
                    className: "dropdown-item",
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("hr", {
                    className: "dropdown-divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "#",
                    onClick: handleLogout,
                    className: "dropdown-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                      children: "Logout"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 262,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("hr", {
                    className: "dropdown-divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true), userIsAuthenticated() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "/add",
                    className: "dropdown-item",
                    children: "Create a recipe"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "/profile",
                    className: "dropdown-item",
                    children: "My Profile"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 272,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                    to: "/recipes",
                    className: "dropdown-item",
                    children: "Help"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                  to: "/recipes",
                  className: "dropdown-item",
                  children: "Help"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 280,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("hr", {
                  className: "dropdown-divider bottom-divider"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                  to: "#",
                  onClick: () => {
                    setScrollState("large");
                    setSearching(true);
                    document.querySelector('.account-dropdown').classList.toggle('is-active');
                  },
                  className: "dropdown-item search-recipes",
                  children: "Search Recipes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                  to: "/recipes",
                  className: "dropdown-item cooking-classes",
                  children: "Cooking Classes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                  to: "/recipes",
                  className: "dropdown-item inspiration",
                  children: "Inspiration"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "navbar-bottom p-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "bottom-search",
          children: !searching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            className: "bottom-search-button button",
            onClick: () => {
              setSearching(true);
              document.querySelector('.navbar-bottom').classList.add('clicked');
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "bottom-search-text",
              children: "Start your search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "bottom-search-icon",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                className: "icon has-background-transparent has-text-white",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                  className: "fas fa-search"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
                  columnNumber: 173
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 108
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 72
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "button bottom-search-form",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "bottom-search-form-container is-flex is-flex-direction-column",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                className: "button bottom-search-form-dropdown search-form-button",
                onClick: () => {
                  document.querySelector("#recipe-name-input").focus();
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                    children: "Recipe Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                  type: "text",
                  className: "search-input-box",
                  id: "recipe-name-input",
                  name: "recipe-name",
                  placeholder: "What are you looking for?",
                  onChange: event => setFilterLink(event)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 56
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 313,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "dropdown course-dropdown bottom-dropdown",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "dropdown-trigger",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                    className: "button bottom-search-form-dropdown search-form-button",
                    onClick: () => {
                      document.querySelector('.course-dropdown').classList.toggle('is-active');
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                        children: "Course"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 321,
                        columnNumber: 27
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 321,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                      readOnly: true,
                      className: "search-input-box",
                      id: "course-input",
                      name: "course-name",
                      placeholder: "Select course"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 321,
                      columnNumber: 55
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 318,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 317,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "dropdown-menu course-dropdown-menu",
                  id: "dropdown-menu",
                  role: "menu",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "dropdown-content course-dropdown-content",
                    children: courses.map(course => {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                        to: "#",
                        className: "dropdown-item course-dropdown-item",
                        onClick: event => {
                          setFilterLink(event);
                          document.querySelector("#course-input").value = event.target.innerText;
                          document.querySelector('.course-dropdown').classList.remove('is-active');
                        },
                        children: course[0].toUpperCase() + course.slice(1)
                      }, course, false, {
                        fileName: _jsxFileName,
                        lineNumber: 328,
                        columnNumber: 25
                      }, undefined);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 325,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 324,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "dropdown allergens-dropdown bottom-dropdown",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "dropdown-trigger",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                    className: "button bottom-search-form-dropdown search-form-button",
                    onClick: () => {
                      document.querySelector('.allergens-dropdown').classList.toggle('is-active');
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                        children: "Allergens"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 345,
                        columnNumber: 27
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 345,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                      readOnly: true,
                      className: "search-input-box",
                      id: "allergens-input",
                      name: "allergens-name",
                      placeholder: "Select allergens"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 345,
                      columnNumber: 58
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "dropdown-menu allergens-dropdown-menu",
                  id: "dropdown-menu",
                  role: "menu",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                    className: "dropdown-content allergens-dropdown-content",
                    children: courses.map(allergen => {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                        to: "#",
                        className: "dropdown-item allergens-dropdown-item",
                        onClick: event => {
                          setFilterLink(event);
                          document.querySelector("#allergens-input").value = event.target.innerText;
                          document.querySelector('.allergens-dropdown').classList.remove('is-active');
                        },
                        children: allergen[0].toUpperCase() + allergen.slice(1)
                      }, allergen, false, {
                        fileName: _jsxFileName,
                        lineNumber: 352,
                        columnNumber: 25
                      }, undefined);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 349,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 348,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "bottom-search-form-buttons",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                to: "#",
                onClick: closeSearchMobile,
                className: "form-search-icon",
                children: "Close"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                to: `/recipes${getSearchLink()}`,
                onClick: () => getSearchLink(),
                className: "form-search-icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  className: "icon has-background-transparent has-text-white",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                    className: "fas fa-search"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 368,
                    columnNumber: 183
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 368,
                  columnNumber: 118
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 368,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "button search-form",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "search-form-container is-flex is-flex-direction-row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              className: "button bottom-search-form-dropdown search-form-button",
              onClick: () => {
                document.querySelector("#recipe-name-input").focus();
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                  children: "Recipe Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                type: "text",
                className: "search-input-box",
                id: "recipe-name-input",
                name: "recipe-name",
                placeholder: "What are you looking for?",
                onChange: event => setFilterLink(event)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 54
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "dropdown course-dropdown",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "dropdown-trigger",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                  className: "button search-form-dropdown search-form-button",
                  onClick: () => {
                    document.querySelector('.course-dropdown').classList.toggle('is-active');
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                      children: "Course"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 383,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 383,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                    readOnly: true,
                    className: "search-input-box",
                    id: "course-input",
                    name: "course-name",
                    placeholder: "Select course"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 383,
                    columnNumber: 53
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 380,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "dropdown-menu course-dropdown-menu",
                id: "dropdown-menu",
                role: "menu",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "dropdown-content course-dropdown-content",
                  children: courses.map(course => {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                      to: "#",
                      className: "dropdown-item course-dropdown-item",
                      onClick: event => {
                        event.preventDefault();
                        setFilterLink(event);
                        document.querySelector("#course-input").value = event.target.innerText;
                        document.querySelector('.course-dropdown').classList.remove('is-active');
                      },
                      children: course[0].toUpperCase() + course.slice(1)
                    }, course, false, {
                      fileName: _jsxFileName,
                      lineNumber: 390,
                      columnNumber: 23
                    }, undefined);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 387,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 386,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "dropdown allergens-dropdown bottom-dropdown",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "dropdown-trigger",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                  className: "button bottom-search-form-dropdown search-form-button",
                  onClick: () => {
                    document.querySelector('.allergens-dropdown').classList.toggle('is-active');
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                      children: "Allergens"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 409,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 409,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                    readOnly: true,
                    className: "search-input-box",
                    id: "allergens-input",
                    name: "allergens-name",
                    placeholder: "Select allergens"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 409,
                    columnNumber: 56
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 405,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "dropdown-menu allergens-dropdown-menu",
                id: "dropdown-menu",
                role: "menu",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "dropdown-content allergens-dropdown-content",
                  children: allergens.map(allergen => {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
                      to: "#",
                      className: "dropdown-item allergens-dropdown-item",
                      onClick: event => {
                        event.preventDefault();
                        setFilterLink(event);
                        document.querySelector("#allergens-input").value = event.target.innerText;
                        document.querySelector('.allergens-dropdown').classList.remove('is-active');
                      },
                      children: allergen[0].toUpperCase() + allergen.slice(1)
                    }, allergen, false, {
                      fileName: _jsxFileName,
                      lineNumber: 416,
                      columnNumber: 23
                    }, undefined);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 413,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 412,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            to: `/recipes${getSearchLink()}`,
            onClick: () => getSearchLink(),
            className: "form-search-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
              className: "icon has-background-transparent has-text-white",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                className: "fas fa-search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 431,
                columnNumber: 179
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 431,
              columnNumber: 114
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 209,
    columnNumber: 5
  }, undefined);
};

_s(Navbar, "xu1gaUcE1u8dsTdcwobXfbiEI7M=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"], react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useLocation"]];
});

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Navbar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/RecipeCard.js":
/*!**************************************!*\
  !*** ./src/components/RecipeCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/RecipeCard.js";




const RecipeCard = _ref => {
  let {
    _id,
    name,
    image,
    averageRating
  } = _ref;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "column is-one-quarter-desktop is-one-third-tablet is-three-quarters-mobile",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
      className: "fa fa-heart-o fa-lg",
      "data-fa-transform": "right-10",
      id: "heart-icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: `/recipes/${_id}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card is-shadowless",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "card-image",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figure", {
            className: "image is-1by1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              className: "image",
              id: "image-index",
              src: image,
              alt: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "card-header",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "card-header-title",
              children: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card-content",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
        className: "card-rating",
        children: ["Rating: ", averageRating]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)]
  }, _id, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

_c = RecipeCard;
/* harmony default export */ __webpack_exports__["default"] = (RecipeCard);

var _c;

__webpack_require__.$Refresh$.register(_c, "RecipeCard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/RecipeIndex.js":
/*!***************************************!*\
  !*** ./src/components/RecipeIndex.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RecipeCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecipeCard */ "./src/components/RecipeCard.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/RecipeIndex.js",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable react-hooks/exhaustive-deps */








const RecipeIndex = () => {
  _s();

  const [recipes, setRecipes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [filteredRecipes, setFilteredRecipes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [difficulties, setDifficulties] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const props = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const params = query_string__WEBPACK_IMPORTED_MODULE_4__["parse"](props.search);
  const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(query_string__WEBPACK_IMPORTED_MODULE_4__["parse"](props.search));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/recipes');
      setRecipes(data);
      const difficultyArray = ['All']; // const allergensArray  = ['All']

      for (let i = 0; i < data.length; i++) {
        // Add to difficulty array if no duplicate
        const difficultyLowerCase = difficultyArray.map(difficulty => difficulty.toLowerCase());
        if (!difficultyLowerCase.includes(data[i].difficulty.toLowerCase())) difficultyArray.push(data[i].difficulty[0].toUpperCase() + data[i].difficulty.slice(1).toLowerCase());
      }

      setDifficulties(difficultyArray);
      const filtered = data.filter(recipe => {
        const allergenArrayLowerCase = recipe.allergens.map(allergen => allergen.toLowerCase());
        return (params.name ? recipe.name.toLowerCase().includes(params.name) : recipe) && (params.course ? recipe.course.toLowerCase().includes(params.course) || params.course === 'all' : recipe) && (params.allergens ? allergenArrayLowerCase.includes(params.allergens) || params.allergens === 'all' : recipe) && (params.difficulty ? recipe.difficulty.toLowerCase().includes(params.difficulty) || params.difficulty === 'all' : recipe) && (params.rating ? parseInt(recipe.averageRating) >= parseInt(params.rating) : recipe);
      });
      setFilteredRecipes(filtered);
    };

    getData();
  }, [props]);

  const getSearchLink = event => {
    const queryParams = query_string__WEBPACK_IMPORTED_MODULE_4__["parse"](props.search);
    if (event.target.id === 'difficulty-name-input') queryParams.difficulty = `${event.target.innerHTML.toLowerCase()}`;
    if (event.target.id === 'rating-input') queryParams.rating = `${event.target.name}`;
    if (event.target.parentElement.id === 'rating-input') queryParams.rating = `${event.target.parentElement.name}`;
    if (event.target.id === 'remove-recipe-name' || event.target.parentElement.id === 'remove-recipe-name') delete queryParams.name;
    if (event.target.id === 'remove-course-name' || event.target.parentElement.id === 'remove-course-name') delete queryParams.course;
    if (event.target.id === 'remove-allergens-name' || event.target.parentElement.id === 'remove-allergens-name') delete queryParams.allergens;
    if (event.target.id === 'remove-difficulty-name' || event.target.parentElement.id === 'remove-difficulty-name') delete queryParams.difficulty;
    if (event.target.id === 'remove-rating-name' || event.target.parentElement.id === 'remove-rating-name') delete queryParams.rating;
    setQuery(queryParams);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    history.push(`recipes?${query_string__WEBPACK_IMPORTED_MODULE_4__["stringify"](query)}`);
  }, [query]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
      className: "section",
      id: "recipe-index",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "subtitle is-flex is-flex-direction-column is-align-items-start",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "filter-container is-flex is-flex-direction-row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "current-filter-links is-flex is-flex-direction-row is-justify-content-space-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "current-filter-title",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
                  children: params.name || params.course || params.allergens || params.difficulty || params.rating ? 'Active Filters:' : 'Active Filters: None'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "current-filters is-flex is-flex-direction-row",
                children: [params.name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "active-name-filter current-filter-container",
                  children: ["Recipe Name: ", params.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                    to: '/recipes',
                    id: "remove-recipe-name",
                    onClick: event => {
                      getSearchLink(event);
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                      className: "far fa-times-circle remove-filter-icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 214
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 122
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 35
                }, undefined), params.course && params.course !== 'all' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "active-course-filter current-filter-container",
                  children: ["Course: ", params.course, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                    to: '/recipes',
                    id: "remove-course-name",
                    onClick: event => {
                      getSearchLink(event);
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                      className: "far fa-times-circle remove-filter-icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 244
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 152
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 66
                }, undefined), params.allergens && params.allergens !== 'all' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "active-allergens-filter current-filter-container",
                  children: ["Allergens: ", params.allergens, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                    to: '/recipes',
                    id: "remove-allergens-name",
                    onClick: event => {
                      getSearchLink(event);
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                      className: "far fa-times-circle remove-filter-icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 262
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 167
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 72
                }, undefined), params.difficulty && params.difficulty !== 'all' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "active-difficulty-filter current-filter-container",
                  children: ["Difficulty: ", params.difficulty, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                    to: '/recipes',
                    id: "remove-difficulty-name",
                    onClick: event => {
                      getSearchLink(event);
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                      className: "far fa-times-circle remove-filter-icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 268
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 172
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 74
                }, undefined), params.rating && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "active-rating-filter current-filter-container",
                  children: ["Min Rating: ", params.rating, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                    to: '/recipes',
                    id: "remove-rating-name",
                    onClick: event => {
                      getSearchLink(event);
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                      className: "far fa-times-circle remove-filter-icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 219
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 127
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "filter-buttons",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "dropdown dropdown-filter",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "dropdown-trigger",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
                    className: "button filter",
                    id: "filterbtn",
                    "aria-haspopup": "true",
                    "aria-controls": "dropdown-menu",
                    "aria-pressed": "false",
                    onClick: () => {
                      document.querySelector('.dropdown-filter').classList.toggle('is-active');
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                      className: "icon is-small",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        class: "fas fa-utensils",
                        "aria-hidden": "true",
                        children: " "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                        className: "filterbtn",
                        children: "Difficulty"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "dropdown-menu",
                  id: "dropdown-menu",
                  role: "menu",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    className: "dropdown-content",
                    children: difficulties.map(difficulty => {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                        to: `/recipes`,
                        onClick: event => getSearchLink(event),
                        id: "difficulty-name-input",
                        className: "dropdown-item",
                        children: difficulty
                      }, difficulty, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 27
                      }, undefined) // <Link to={`/recipes${props.search + '&difficulty=' + difficulty.toLowerCase()}`} onClick={(event) => getSearchLink(event)} id="diffulty-name-input" className="dropdown-item">{difficulty}</Link>
                      ;
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "dropdown dropdown-rating",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "dropdown-trigger",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
                    className: "button rating",
                    id: "ratingbtn",
                    "aria-haspopup": "true",
                    "aria-controls": "rating-dropdown-menu",
                    "aria-pressed": "false",
                    onClick: () => {
                      document.querySelector('.dropdown-rating').classList.toggle('is-active');
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                      className: "icon is-small",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star fa-sm",
                        "aria-hidden": "true",
                        children: " "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                        className: "ratingbtn",
                        children: "\xA0Minimum Rating"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "rating-dropdown-menu dropdown-menu",
                  id: "rating-dropdown-menu",
                  role: "menu",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    className: "rating-dropdown-content dropdown-content",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                      to: `/recipes`,
                      onClick: event => getSearchLink(event),
                      id: "rating-input",
                      className: "dropdown-item",
                      name: "1",
                      children: ["1 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 134,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                      to: `/recipes`,
                      onClick: event => getSearchLink(event),
                      id: "rating-input",
                      className: "dropdown-item",
                      name: "2",
                      children: ["2 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                      to: `/recipes`,
                      onClick: event => getSearchLink(event),
                      id: "rating-input",
                      className: "dropdown-item",
                      name: "3",
                      children: ["3 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 141,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                      to: `/recipes`,
                      onClick: event => getSearchLink(event),
                      id: "rating-input",
                      className: "dropdown-item",
                      name: "4",
                      children: ["4 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                      to: `/recipes`,
                      onClick: event => getSearchLink(event),
                      id: "rating-input",
                      className: "dropdown-item",
                      name: "5",
                      children: ["5 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                        className: "fas fa-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 156,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "showing-count",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
              children: ["Showing ", filteredRecipes.length, " of ", recipes.length]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), filteredRecipes.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "container",
        id: "index-cards",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "columns is-multiline",
          children: filteredRecipes.map(recipe => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_RecipeCard__WEBPACK_IMPORTED_MODULE_2__["default"], { ...recipe
            }, recipe._id, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 17
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "container is-flex is-justify-content-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
          children: "Please search again, no recipes match your conditions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_s(RecipeIndex, "nKianLSYALuedlqZsuQLRU/YSaU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"], react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"]];
});

_c = RecipeIndex;
/* harmony default export */ __webpack_exports__["default"] = (RecipeIndex);

var _c;

__webpack_require__.$Refresh$.register(_c, "RecipeIndex");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/RecipeShow.js":
/*!**************************************!*\
  !*** ./src/components/RecipeShow.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_recipeMethod_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/recipeMethod.PNG */ "./src/assets/recipeMethod.PNG");
/* harmony import */ var _assets_cookingTime_PNG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/cookingTime.PNG */ "./src/assets/cookingTime.PNG");
/* harmony import */ var _assets_prepTime_PNG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/prepTime.PNG */ "./src/assets/prepTime.PNG");
/* harmony import */ var _assets_ingredientsIMG_PNG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/ingredientsIMG.PNG */ "./src/assets/ingredientsIMG.PNG");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/auth */ "./src/components/helpers/auth.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/RecipeShow.js",
    _s = __webpack_require__.$Refresh$.signature();












const RecipeShow = _ref => {
  _s();

  let {
    ingredients
  } = _ref;
  const [recipe, setRecipe] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [owner, setOwner] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const [visible, setVisible] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // console.log('ID', id)
  // window.scrollTo(0, 0)

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const getData = async () => {
      try {
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/recipes/${id}`);
        setRecipe(data);
        setOwner(data.owner);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [id]);

  const userIsOwner = currentUserId => {
    const payload = Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_7__["getPayload"])(); // console.log('PAYLOAD',payload.sub)
    // console.log(currentUserId)

    if (!payload) return false;
    return currentUserId === payload.sub;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
    className: "section",
    id: "recipe-show",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
        className: "section recipe-subtitle",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
            className: "title",
            id: "recipe-title",
            children: recipe.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "container show-links",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h6", {
              className: "show-rating",
              id: "recipe-show-rating",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("i", {
                className: "fas fa-utensils"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 67
              }, undefined), "\xA0", recipe.course, " \xB7 ", recipe.difficulty, " \xB7 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("i", {
                className: "far fa-star"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 148
              }, undefined), "Rating: ", recipe.averageRating, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "save-share",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "share",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                  className: "has-text-black",
                  to: "/share",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h6", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("i", {
                      className: "far fa-share-square"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 68
                    }, undefined), "Share"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 64
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "save",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h6", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("i", {
                    className: "far fa-heart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 23
                  }, undefined), "Save"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), userIsOwner(owner._id) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: `/recipes/${id}/edit`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
              className: "button is-danger",
              children: "Edit Recipe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 48
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "columns",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "column is-half",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("figure", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
              className: "image",
              src: recipe.image,
              alt: recipe.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "column is-half",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
            className: "desc",
            children: recipe.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "recipe-info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
              src: _assets_recipeMethod_PNG__WEBPACK_IMPORTED_MODULE_3__["default"],
              className: "method-icon",
              alt: "method-icon",
              width: "40px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h4", {
              className: "method-title",
              children: "Method"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "recipe-steps",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined), recipe.method && recipe.method.map((step, index) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h6", {
                  className: "steps",
                  children: ["Step ", index + 1]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  children: step
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "container nutrition-info",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "info is-flex justify-content-space-evenly",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "info is-flex is-flex-direction-row",
                children: recipe.nutritionalInfo && recipe.nutritionalInfo.map(nutritionalInfo => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "card nutritional",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                        className: "card-content",
                        id: "nutri-info",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                          className: "nutri-p",
                          children: nutritionalInfo
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 31
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 29
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 27
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "container recipe-info",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "columns",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "column is-4",
            id: "icon-info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "icon-info-space",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "info-icons",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  src: _assets_prepTime_PNG__WEBPACK_IMPORTED_MODULE_5__["default"],
                  className: "method-icon",
                  alt: "method-icon",
                  width: "40px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h4", {
                  className: "title-prep is-6",
                  children: "Prep Time"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "extra-info",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "subtitle method",
                  children: recipe.prepTime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "info-icons",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  src: _assets_cookingTime_PNG__WEBPACK_IMPORTED_MODULE_4__["default"],
                  className: "method-icon",
                  alt: "method-icon",
                  width: "40px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h4", {
                  className: "title-prep is-6",
                  children: "Cook Time"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "extra-info",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "subtitle method",
                  children: recipe.cookingTime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "column is-4",
            id: "icon-info2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "icon-info-space",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "info-icons",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  src: _assets_cookingTime_PNG__WEBPACK_IMPORTED_MODULE_4__["default"],
                  className: "method-icon",
                  alt: "method-icon",
                  width: "40px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h4", {
                  className: "title-prep is-6",
                  children: "Difficulty"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "extra-info",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "subtitle method",
                  children: recipe.difficulty
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "info-icons",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  src: _assets_cookingTime_PNG__WEBPACK_IMPORTED_MODULE_4__["default"],
                  className: "method-icon",
                  alt: "method-icon",
                  width: "40px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h4", {
                  className: "title-prep is-6",
                  children: "Serves"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "extra-info",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "subtitle method",
                  children: recipe.servingSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "column is-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
              className: "button is-danger",
              id: "ingredients-button",
              onClick: () => setVisible(!visible),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                src: _assets_ingredientsIMG_PNG__WEBPACK_IMPORTED_MODULE_6__["default"],
                className: "method-icon",
                alt: "method-icon",
                width: "40px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h5", {
                className: "method-title has-text-white",
                children: "Ingredients"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "card",
              id: "ingredients-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "card-content",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "buttons recipe-info"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 21
                  }, undefined), visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    children: recipe.ingredients && recipe.ingredients.map(ingredients => {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                          children: ingredients
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 196,
                          columnNumber: 33
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 197,
                          columnNumber: 33
                        }, undefined)]
                      }, void 0, true);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
        className: "is-flex is-flex-direction-column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "container is-flex is-justify-content-space-between",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "columns",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "column is-full",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
                className: "title is-5",
                children: "Reviews"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "button-container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: `/recipes/${id}/reviews`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                className: "button is-danger has-text-white",
                id: "click-review",
                children: "Leave a review"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 51
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "columns",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "column is-full",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h3", {
              children: recipe.review
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

_s(RecipeShow, "pumuF0H1YIF6QHUXlc68Tod0WfI=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"]];
});

_c = RecipeShow;
/* harmony default export */ __webpack_exports__["default"] = (RecipeShow);

var _c;

__webpack_require__.$Refresh$.register(_c, "RecipeShow");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Register.js":
/*!************************************!*\
  !*** ./src/components/Register.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/Register.js",
    _s = __webpack_require__.$Refresh$.signature();






const Register = _ref => {
  _s();

  let {
    handleLoginOrRegisterPopup,
    emailData
  } = _ref;
  const [formData, setFormData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    fullName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setFormData({ ...formData,
      email: emailData
    });
  }, [emailData]);
  const [errors, setErrors] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    fullName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const handleChange = event => {
    const newFormData = { ...formData,
      [event.target.name]: event.target.value
    };
    setFormData(newFormData);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/register', formData);
      handleLoginOrRegisterPopup(true, true, false);
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };

  const handleRegisterClose = () => {
    handleLoginOrRegisterPopup(false, false, false);
  };

  const handleRegisterBack = () => {
    handleLoginOrRegisterPopup(true, false, false);
  };

  return emailData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
    className: "column is-offset-one-third box ",
    onSubmit: handleSubmit,
    id: "form",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "close-login-popup",
        onClick: handleRegisterBack,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
          className: "fas fa-long-arrow-alt-left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "close-login-popup",
        onClick: handleRegisterClose,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
          className: "far fa-times-circle login-close-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "subtitle is-4 ",
      id: "signuptext",
      children: " Sign up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("hr", {
      className: "mt-4 mb-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "title is-6 mb-5",
      children: "Welcome to Platester"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "field mb-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "control",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          id: "signupinput1",
          className: `input ${errors.username ? 'is-danger py-5' : 'py-5'}`,
          placeholder: "Full Name",
          name: "fullName",
          value: formData.fullName,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined), errors.username && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      className: "is-danger subtitle mt-1 mb-1 ml-0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 27
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "field mb-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "control",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          id: "signupinput",
          className: `input ${errors.username ? 'is-danger py-5' : 'py-5'}`,
          placeholder: "Username",
          name: "username",
          value: formData.username,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined), errors.username && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      className: "is-danger subtitle mt-1 mb-1 ml-0",
      children: "username must be unique "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 27
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "field mb-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "control",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          id: "signupinput",
          className: `input ${errors.email ? 'is-danger py-5' : 'py-5'}`,
          placeholder: "Email",
          name: "email",
          value: formData.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      className: "is-danger subtitle mt-1 mb-1 ml-0",
      children: "email must be unique"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 24
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "field mb-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "control",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          id: "signupinput",
          type: "password",
          className: `input ${errors.password ? 'is-danger py-5' : 'py-5'}`,
          placeholder: "Password",
          name: "password",
          value: formData.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      className: "is-danger subtitle mt-1 mb-1 ml-0",
      children: errors.password.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 27
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "field mb-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "control",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          id: "signupinput2",
          type: "password",
          className: `input ${errors.passwordConfirmation ? 'is-danger py-5' : 'py-5'}`,
          placeholder: "Password Confirmation",
          name: "passwordConfirmation",
          value: formData.passwordConfirmation,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, undefined), errors.passwordConfirmation && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      className: "is-danger subtitle subtitle mt-1 mb-1 ml-0",
      children: errors.passwordConfirmation.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 39
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "field mb-4 mt-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "control",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
          type: "submit",
          className: "button is-danger",
          id: "submit",
          children: "Sign Up "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, undefined);
};

_s(Register, "AIpdjFpiEoVHyqc65tnXNg6WBIQ=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

__webpack_require__.$Refresh$.register(_c, "Register");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/UpdateRecipe.js":
/*!****************************************!*\
  !*** ./src/components/UpdateRecipe.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/auth */ "./src/components/helpers/auth.js");
/* harmony import */ var _images_IMG_0630_PNG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/IMG_0630.PNG */ "./src/images/IMG_0630.PNG");
/* harmony import */ var _assets_ingredientsIMG_PNG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/ingredientsIMG.PNG */ "./src/assets/ingredientsIMG.PNG");
/* harmony import */ var _assets_recipeMethod_PNG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/recipeMethod.PNG */ "./src/assets/recipeMethod.PNG");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/UpdateRecipe.js",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable react-hooks/exhaustive-deps */



 // import AddandUpdate from './AddandUpdate'







const UpdateRecipe = () => {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [description, setDescription] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [ingredients, setIngredients] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [method, setMethod] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [tags, setTags] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [nutritionalInfo, setNutritionalInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [allergens, setAllergens] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [newRecipe, setNewRecipe] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    image: '',
    description: '',
    ingredients: null,
    method: null,
    prepTime: '',
    cookingTime: '',
    difficulty: '',
    servingSize: null,
    nutritionalInfo: '',
    tags: '',
    course: '',
    allergens: ''
  });
  const {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/recipes/${id}`); // setRecipe(data)

      setNewRecipe({ ...newRecipe,
        name: data.name,
        description: data.description,
        prepTime: data.prepTime,
        cookingTime: data.cookingTime,
        difficulty: data.difficulty,
        servingSize: data.servingSize,
        nutritionalInfo: data.nutritionalInfo,
        tags: data.tags,
        course: data.course,
        allergens: data.allergens
      });
      setDescription(data.description);
      setMethod(data.method);
      setIngredients(data.ingredients);
      setTags(data.tags);
      setNutritionalInfo(data.nutritionalInfo);
      setAllergens(data.allergens);
    };

    getData();
  }, [id]);
  const [errors, setErrors] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    image: '',
    description: '',
    ingredients: '',
    method: '',
    prepTime: '',
    cookingTime: '',
    difficulty: '',
    servingSize: null,
    nutritionalInfo: [],
    tags: [],
    course: '',
    allergens: []
  });

  const displayImage = event => {
    let img = event.target.files[0]; // setImageUrl(img.name)

    setImage(URL.createObjectURL(img));
  };

  const handleChange = event => {
    // if (event.target.name === ingredients ||event.target.name === method || event.target.name === newRecipe.tags)
    // event.target.value.split(',')
    const newFormData = { ...newRecipe,
      [event.target.name]: event.target.value
    };
    setNewRecipe(newFormData);
  };

  const displayDescription = () => {
    setDescription(newRecipe.description); // recipe.description = ''
  };

  const displayIngredient = () => {
    console.log(newRecipe.ingredients); // const newIngredient = newRecipe.ingredients

    setIngredients([...ingredients, newRecipe.ingredients]);
    setNewRecipe({ ...newRecipe,
      ingredients: ''
    });
  };

  const editIngredient = ingredient => {
    setNewRecipe({ ...newRecipe,
      ingredients: ingredient
    });
  };

  const deleteIngredient = ingredient => {
    const index = ingredients.indexOf(ingredient);
    const newIngredientsArray = [...ingredients.splice(index, 1)];
    setIngredients([...ingredients]);
  };

  const displayMethod = () => {
    // const newStep = newRecipe.method.split(',')
    setMethod([...method, newRecipe.method]);
    setNewRecipe({ ...newRecipe,
      method: ''
    }); // recipe.method = ''
  };

  const editMethod = step => {
    setNewRecipe({ ...newRecipe,
      method: step
    });
  };

  const deleteMethod = step => {
    const index = method.indexOf(step);
    const newMethodArray = [...method.splice(index, 1)];
    setMethod([...method]);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(newRecipe);
    console.log(newRecipe.tags === tags);
    newRecipe.description = description;

    if (ingredients.length === 0) {
      newRecipe.ingredients = '';
    } else {
      newRecipe.ingredients = ingredients;
    }

    if (method.length === 0) {
      newRecipe.method = '';
    } else {
      newRecipe.method = method;
    }

    newRecipe.image = image;

    if (newRecipe.tags !== '' || !newRecipe.tags.length || newRecipe.tags !== tags) {
      const tagsArray = newRecipe.tags.split(',');
      newRecipe.tags = tagsArray;
    }

    if (newRecipe.nutritionalInfo !== '' || !newRecipe.nutritionalInfo.length || newRecipe.nutritionalInfo !== nutritionalInfo) {
      const nutritionalInfoArray = newRecipe.nutritionalInfo.split(',');
      newRecipe.nutritionalInfo = nutritionalInfoArray;
    }

    if (newRecipe.allergens !== '' || !newRecipe.allergens.length || newRecipe.allergens !== allergens) {
      const allergensArray = newRecipe.allergens.split(',');
      newRecipe.allergens = allergensArray;
    }

    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/recipes', newRecipe, {
        headers: {
          Authorization: `Bearer ${Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_3__["getTokenFromLocalStorage"])()}`
        }
      });
      history.push(`/recipes/${id}`);
    } catch (err) {
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
    }
  };

  console.log(newRecipe.tags === tags);
  console.log(tags);
  return (
    /*#__PURE__*/
    // <AddandUpdate
    //   newRecipe={recipe}
    //   image={recipe.image}
    //   description={recipe.description}
    //   ingredients={recipe.ingredients}
    //   method={recipe.method}
    //   errors={errors}
    //   displayImage={displayImage}
    //   displayDescription={displayDescription}
    //   displayIngredient={displayIngredient}
    //   displayMethod={displayMethod}
    //   handleChange={handleChange}
    //   handleSubmit={handleSubmit}
    // />
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
      className: "addRecipe",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
        className: "form",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "field is-vertical",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "is-flex is-justify-content-space-around\t",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "subtitle is-3",
              children: "Add Your Recipe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              className: "button",
              type: "submit",
              id: "addRecipeSubmit",
              children: "Add Recipe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field is-grouped ml-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              className: "label mr-6 mt-1",
              children: "Difficulty"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 3
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              className: "control",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                class: "select is-fullwidth",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
                  onChange: handleChange,
                  name: "difficulty",
                  value: newRecipe.difficulty,
                  className: `input ${errors.difficulty && 'is-danger'} `,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "Easy",
                    children: "Easy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "Medium",
                    children: "Medium"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "Hard",
                    children: "Hard"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 15
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 13
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 11
              }, undefined), errors.difficulty && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "is-danger subtitle mt-2 mb-2 ml-0",
                children: "Please select an option"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              className: "label ml-4 mr-5 mt-1",
              children: "Course"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              className: "control",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                class: "select is-fullwidth",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
                  onChange: handleChange,
                  name: "course",
                  value: newRecipe.course,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "Starter",
                    children: "Starter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "Main",
                    children: "Main"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "Dessert",
                    children: "Dessert"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "Snack",
                    children: "Snack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 15
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 13
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              className: "label ml-4 mr-5 mt-1",
              children: "Serves"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              className: "control",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                class: "select is-fullwidth",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
                  onChange: handleChange,
                  name: "servingSize",
                  value: newRecipe.servingSize,
                  className: `input ${errors.servingSize && 'is-danger'} `,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "1",
                    children: "1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "2",
                    children: "2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "3",
                    children: "3"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "4",
                    children: "4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "5",
                    children: "5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "6",
                    children: "6"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "7",
                    children: "7"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 15
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                    value: "8",
                    children: "8"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 15
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 13
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 11
              }, undefined), errors.servingSize && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "is-danger subtitle mt-2 mb-2 ml-0",
                children: "Please select an option"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 34
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "field mr-5 ml-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "control is-expanded",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                  type: "text",
                  placeholder: "Recipe Name",
                  name: "name",
                  value: newRecipe.name,
                  onChange: handleChange,
                  className: `input ${errors.name && 'is-danger'} `
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 11
                }, undefined), errors.name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                  className: "is-danger subtitle mt-2 mb-2 ml-0",
                  children: "You need to add a name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 27
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "control is-expanded ",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                  className: "input",
                  placeholder: "Allergens: vegetarian, vegan, gluten free...",
                  name: "allergens",
                  value: newRecipe.allergens,
                  onChange: handleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 11
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "control is-expanded ",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                  className: "input",
                  placeholder: "Nutritional Information: iron: 3mg, protein: 8g...",
                  name: "nutritionalInfo",
                  value: newRecipe.nutritionalInfo,
                  onChange: handleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 9
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "field mr-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "control is-expanded ",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                  placeholder: "Preparation Time",
                  name: "prepTime",
                  value: newRecipe.prepTime,
                  onChange: handleChange,
                  className: `input ${errors.prepTime && 'is-danger'} `
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 9
                }, undefined), errors.prepTime && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                  className: "is-danger subtitle mt-2 mb-2 ml-0",
                  children: "You need to add preparation time for this recipe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
                  columnNumber: 29
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 272,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "control is-expanded ",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                  placeholder: "Cooking Time",
                  name: "cookingTime",
                  value: newRecipe.cookingTime,
                  onChange: handleChange,
                  className: `input ${errors.cookingTime && 'is-danger'} `
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 280,
                  columnNumber: 9
                }, undefined), errors.cookingTime && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                  className: "is-danger subtitle mt-2 mb-2 ml-0",
                  children: "You need to add cooking time for this recipe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 34
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "control is-expanded ",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                  className: "input",
                  placeholder: "Tags: Italian, Curry, slow-cooked...",
                  name: "tags",
                  value: newRecipe.tags,
                  onChange: handleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 9
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 7
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "field is-horizontal mt-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-label is-normal",
            id: "label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              className: "label",
              children: "Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 7
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-body",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "control ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                type: "file",
                name: "image",
                value: newRecipe.image,
                onChange: displayImage,
                className: `${errors.image && 'is-danger'} `
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 13
              }, undefined), errors.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "is-danger subtitle mt-2 mb-2 ml-0",
                children: "You need to add an image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 32
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-body",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
              className: "pt-0 image is-1by1",
              id: "addimage",
              alt: image,
              src: image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 3
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "field is-horizontal mt-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-label is-normal",
            id: "label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              className: "label",
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 7
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "control ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("textarea", {
                id: "addDescriptionBox",
                type: "text",
                name: "description",
                placeholder: "Short description of your dish",
                value: newRecipe.description,
                onChange: handleChange,
                className: `input ${errors.description && 'is-danger'} `
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 317,
                columnNumber: 11
              }, undefined), errors.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "is-danger subtitle mt-2 mb-2 ml-0",
                children: "You need to add a description "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 36
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "control",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                className: "button",
                type: "button",
                id: "addIngredientButton",
                onClick: displayDescription,
                children: "Add"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 5
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-body ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                src: _images_IMG_0630_PNG__WEBPACK_IMPORTED_MODULE_4__["default"],
                alt: "method-icon",
                width: "40px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 13
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
                children: " Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 69
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "mr-6",
                children: description && description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 5
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 3
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "field is-horizontal mt-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-label is-normal ",
            id: "label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              className: "label ",
              children: "Ingredients"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 5
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 3
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "control",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                id: "addIngredientBox",
                type: "text",
                name: "ingredients",
                placeholder: "eg: 2 eggs",
                value: newRecipe.ingredients,
                onChange: handleChange,
                className: `input ${errors["ingredients.0"] && 'is-danger'} `
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 7
              }, undefined), errors["ingredients.0"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "is-danger subtitle mt-2 mb-2 ml-0",
                children: "You need to add your ingredients"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 39
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "control",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                className: "button",
                type: "button",
                id: "addIngredientButton",
                onClick: displayIngredient,
                children: "Add"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 7
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 5
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-body ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                src: _assets_ingredientsIMG_PNG__WEBPACK_IMPORTED_MODULE_5__["default"],
                alt: "method-icon",
                width: "40px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 14
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
                children: " Ingredients added "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 77
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 9
              }, undefined), ingredients && ingredients.map((ingredient, index) => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
                      id: "lineIngredients",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                        class: "fas fa-edit",
                        onClick: () => editIngredient(ingredient)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 358,
                        columnNumber: 51
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                        class: "fas fa-trash",
                        onClick: () => deleteIngredient(ingredient)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 358,
                        columnNumber: 121
                      }, undefined), " ", ingredient, " "]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 358,
                      columnNumber: 13
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 13
                  }, undefined)
                }, void 0, false);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 3
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 3
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 5
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "field is-horizontal mt-4 mb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-label is-normal",
            id: "label",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              className: "label",
              children: "Method"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-body",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "control",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("textarea", {
                id: "method",
                name: "method",
                placeholder: "Write each step here",
                value: newRecipe.method,
                onChange: handleChange,
                className: `textarea ${errors["method.0"] && 'is-danger'} `
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 11
              }, undefined), errors["method.0"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "is-danger subtitle mt-2 mb-2 ml-0",
                children: "You need to add your method"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 382,
                columnNumber: 36
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                className: "button",
                type: "button",
                id: "addStepButton",
                onClick: displayMethod,
                children: "Add another Step"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 11
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 5
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "field-body",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                src: _assets_recipeMethod_PNG__WEBPACK_IMPORTED_MODULE_6__["default"],
                alt: "method-icon",
                width: "40px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 387,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
                children: " Method"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 387,
                columnNumber: 72
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 388,
                columnNumber: 9
              }, undefined), method && method.map((step, index) => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                      class: "fas fa-edit",
                      onClick: () => editMethod(step)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 392,
                      columnNumber: 19
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                      class: "fas fa-trash",
                      onClick: () => deleteMethod(step)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 392,
                      columnNumber: 79
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
                      children: [" Step ", index + 1, " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 392,
                      columnNumber: 142
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 392,
                    columnNumber: 13
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "mr-6",
                    children: step
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 393,
                    columnNumber: 13
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 394,
                    columnNumber: 13
                  }, undefined)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 391,
                  columnNumber: 13
                }, undefined);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 387,
              columnNumber: 7
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 5
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 5
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }, undefined)
  );
};

_s(UpdateRecipe, "bxyoxKPr8wSAIrT5ocXXsfIIC9M=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"], react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"]];
});

_c = UpdateRecipe;
/* harmony default export */ __webpack_exports__["default"] = (UpdateRecipe);

var _c;

__webpack_require__.$Refresh$.register(_c, "UpdateRecipe");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/UserProfile.js":
/*!***************************************!*\
  !*** ./src/components/UserProfile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/auth */ "./src/components/helpers/auth.js");
/* harmony import */ var _RecipeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecipeCard */ "./src/components/RecipeCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/components/UserProfile.js",
    _s = __webpack_require__.$Refresh$.signature();









const UserProfile = () => {
  _s();

  const [userProfile, setUserProfile] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const getUserData = async () => {
      try {
        const token = window.localStorage.getItem('token');
        if (!token) throw new Error();
        if (!userIsAuthenticated()) throw new Error();
        const header = {
          "Authorization": `Bearer ${token}`
        };
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/profile', {
          headers: header
        });
        console.log(data);
        setUserProfile(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        history.push('/');
      }
    };

    getUserData();
  }, []);

  const userIsAuthenticated = () => {
    const payload = Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_3__["getPayload"])();
    if (!payload) return false;
    const now = Math.round(Date.now() / 1000);
    return now < payload.exp;
  };

  console.log(userProfile);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
      className: "section my-profile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "page-title",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
            children: "My Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
      className: "section my-recipes",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "my-recipes-title",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
          children: "Recipes I have added"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "my-recipes-container",
        children: userProfile.createdRecipes && userProfile.createdRecipes.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container",
          id: "index-cards",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "columns is-multiline",
            children: userProfile.createdRecipes.map(recipe => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_RecipeCard__WEBPACK_IMPORTED_MODULE_4__["default"], { ...recipe
              }, recipe._id, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container is-flex is-justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
            children: isLoading ? 'Loading...' : 'You have not created any recipes'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
      className: "section my-liked-recipes",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "my-liked-recipes-title",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
          children: "Recipes I have liked"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "my-liked-recipes-container",
        children: userProfile.likedRecipes && userProfile.likedRecipes.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container",
          id: "index-cards",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "columns is-multiline",
            children: userProfile.likedRecipes.map(recipe => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_RecipeCard__WEBPACK_IMPORTED_MODULE_4__["default"], { ...recipe
              }, recipe._id, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container is-flex is-justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
            children: isLoading ? 'Loading...' : 'You have not liked any recipes'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

_s(UserProfile, "z/wJKsx5pDa/DXrcM9wcHYCHXiM=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

__webpack_require__.$Refresh$.register(_c, "UserProfile");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/helpers/auth.js":
/*!****************************************!*\
  !*** ./src/components/helpers/auth.js ***!
  \****************************************/
/*! exports provided: getTokenFromLocalStorage, getPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenFromLocalStorage", function() { return getTokenFromLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayload", function() { return getPayload; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('token');
};
const getPayload = () => {
  const token = getTokenFromLocalStorage();
  if (!token) return;
  const splitToken = token.split('.');
  if (splitToken.length < 3) return;
  const payloadString = splitToken[1];
  return JSON.parse(atob(payloadString));
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/images/IMG_0630.PNG":
/*!*********************************!*\
  !*** ./src/images/IMG_0630.PNG ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/IMG_0630.3c12ce01.PNG");

/***/ }),

/***/ "./src/images/platester_logo_red_withText.PNG":
/*!****************************************************!*\
  !*** ./src/images/platester_logo_red_withText.PNG ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/platester_logo_red_withText.ef8267ca.PNG");

/***/ }),

/***/ "./src/images/platester_logo_white_withText.PNG":
/*!******************************************************!*\
  !*** ./src/images/platester_logo_white_withText.PNG ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/platester_logo_white_withText.a14f4846.PNG");

/***/ }),

/***/ "./src/images/platester_smalllogo_red_withText.PNG":
/*!*********************************************************!*\
  !*** ./src/images/platester_smalllogo_red_withText.PNG ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/platester_smalllogo_red_withText.1865ae25.PNG");

/***/ }),

/***/ "./src/images/platester_smalllogo_white_withText.PNG":
/*!***********************************************************!*\
  !*** ./src/images/platester_smalllogo_white_withText.PNG ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/platester_smalllogo_white_withText.8040cfeb.PNG");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/App.css":
/*!****************************!*\
  !*** ./src/styles/App.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ed/development/PROJECTS/SEI-Project-3/front-end/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/ed/development/PROJECTS/SEI-Project-3/front-end/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/ed/development/PROJECTS/SEI-Project-3/front-end/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ed/development/PROJECTS/SEI-Project-3/front-end/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map