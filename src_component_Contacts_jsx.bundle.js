"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknew_app2"] = self["webpackChunknew_app2"] || []).push([["src_component_Contacts_jsx"],{

/***/ "./src/component/Contacts.jsx":
/*!************************************!*\
  !*** ./src/component/Contacts.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contacts)\n/* harmony export */ });\n/* harmony import */ var _photos_whatsapp_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos/whatsapp.png */ \"./src/component/photos/whatsapp.png\");\n/* harmony import */ var _photos_instagram_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos/instagram.png */ \"./src/component/photos/instagram.png\");\n/* harmony import */ var _photos_facebook_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos/facebook.png */ \"./src/component/photos/facebook.png\");\n/* harmony import */ var _photos_github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/github.png */ \"./src/component/photos/github.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Contacts() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"con li \",\n    style: {\n      height: \"100vh\"\n    }\n  }, /*#__PURE__*/React.createElement(Social, {\n    photo: _photos_whatsapp_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    info: \"+9720597240377\"\n  }), /*#__PURE__*/React.createElement(Social, {\n    photo: _photos_instagram_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    info: \"m.t.m.a.2004\"\n  }), /*#__PURE__*/React.createElement(Social, {\n    photo: _photos_facebook_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    info: \"Mohammed Almughanni \"\n  }), /*#__PURE__*/React.createElement(Social, {\n    photo: _photos_github_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    info: \"Mtma2004\"\n  }));\n}\nfunction Social(_ref) {\n  let {\n    photo,\n    info\n  } = _ref;\n  let inp = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n  let i = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n  let but = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"social\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    style: {\n      width: \"90px\",\n      height: \"90px\",\n      borderRadius: \"50%\"\n    },\n    src: photo,\n    alt: \"\",\n    loading: \"lazy\"\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"socialinfo\"\n  }, /*#__PURE__*/React.createElement(\"input\", {\n    ref: inp,\n    disabled: true,\n    type: \"text\",\n    value: info\n  }), /*#__PURE__*/React.createElement(\"button\", {\n    className: \"copy\",\n    ref: but,\n    onClick: () => {\n      console.log(but.current);\n      let text = inp.current.value;\n      navigator.clipboard.writeText(text).then(() => {\n        i.current.classList = [];\n        i.current.classList.add(\"fa-solid\");\n        i.current.classList.add(\"fa-check\");\n        but.current.classList.add(\"clicked\");\n        setTimeout(() => {\n          but.current.classList.remove(\"clicked\");\n          i.current.classList = [];\n          i.current.classList.add(\"fa-regular\");\n          i.current.classList.add(\"fa-copy\");\n        }, 2000);\n      });\n    }\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    ref: i,\n    className: \"fa-regular fa-copy\"\n  })))));\n}\n\n//# sourceURL=webpack://new-app2/./src/component/Contacts.jsx?");

/***/ }),

/***/ "./src/component/photos/facebook.png":
/*!*******************************************!*\
  !*** ./src/component/photos/facebook.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/facebook.935c3d297368646bbf5b36da46621f45.png\");\n\n//# sourceURL=webpack://new-app2/./src/component/photos/facebook.png?");

/***/ }),

/***/ "./src/component/photos/github.png":
/*!*****************************************!*\
  !*** ./src/component/photos/github.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/github.be9ccabb5ccc2f7c4ed85831eb864a21.png\");\n\n//# sourceURL=webpack://new-app2/./src/component/photos/github.png?");

/***/ }),

/***/ "./src/component/photos/instagram.png":
/*!********************************************!*\
  !*** ./src/component/photos/instagram.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/instagram.70342203ede936bbd9b12bb0447831f9.png\");\n\n//# sourceURL=webpack://new-app2/./src/component/photos/instagram.png?");

/***/ }),

/***/ "./src/component/photos/whatsapp.png":
/*!*******************************************!*\
  !*** ./src/component/photos/whatsapp.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/whatsapp.2a30f7bf5d67b44d4a1c9a21eb89ea55.png\");\n\n//# sourceURL=webpack://new-app2/./src/component/photos/whatsapp.png?");

/***/ })

}]);