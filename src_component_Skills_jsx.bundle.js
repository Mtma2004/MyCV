"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknew_app2"] = self["webpackChunknew_app2"] || []).push([["src_component_Skills_jsx"],{

/***/ "./src/component/Box.jsx":
/*!*******************************!*\
  !*** ./src/component/Box.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Box)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-tilt */ \"./node_modules/vanilla-tilt/lib/vanilla-tilt.js\");\n/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Box(_ref) {\n  let {\n    photo,\n    persantege,\n    title,\n    children,\n    clsss,\n    class2\n  } = _ref;\n  let tiltref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    vanilla_tilt__WEBPACK_IMPORTED_MODULE_1___default().init(tiltref.current, {\n      scale: 1,\n      speed: 100,\n      max: 5\n    });\n  }, []);\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", {\n    className: `box ${class2}`,\n    ref: tiltref\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"progres\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    style: {\n      width: \"60px\",\n      borderRadius: \"50%\"\n    },\n    src: photo,\n    alt: \"\",\n    loading: \"lazy\"\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"pro\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      width: `${persantege}%`\n    }\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    style: {\n      backgroundColor: `var(--color6)`\n    }\n  }))), /*#__PURE__*/React.createElement(\"span\", {\n    style: {\n      color: \"white\",\n      fontSize: \"20px\",\n      letterSpacing: \"1px\"\n    }\n  }, persantege, \"%\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"discripe\"\n  }, /*#__PURE__*/React.createElement(\"p\", {\n    style: {\n      fontSize: \"20px\",\n      color: \"white\",\n      letterSpacing: \"2px\",\n      fontWeight: \"bold\",\n      marginBottom: \"25px\"\n    }\n  }, title), children), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"details\"\n  }, /*#__PURE__*/React.createElement(\"p\", {\n    onClick: () => {\n      if (window.innerWidth > 870) {\n        document.querySelectorAll(\".sidedetails\").forEach(e => {\n          e.style.display = \"none\";\n        });\n        document.querySelectorAll(\".sidedetails .tags\").forEach(e => {\n          e.classList.remove(\"active2\");\n        });\n        document.querySelector(`.${clsss}`).style.display = \"block\";\n        document.querySelector(`.${clsss} .tags`).classList.add(\"active2\");\n      } else {\n        document.querySelectorAll(\".skillsDet\").forEach(e => {\n          e.classList.remove(\"active2\");\n        });\n        document.querySelectorAll(\".skillsDet .tags\").forEach(e => {\n          e.classList.remove(\"active2\");\n        });\n        document.querySelector(`.${clsss}2`).classList.add(\"active2\");\n        document.querySelector(`.${clsss}2 .tags`).classList.add(\"active2\");\n      }\n    }\n  }, \"click to see more detalis or projects\", \" \", /*#__PURE__*/React.createElement(\"i\", {\n    style: {\n      fontSize: \"20px\"\n    },\n    className: \"fa-solid fa-arrow-right-long\"\n  })))));\n}\n\n//# sourceURL=webpack://new-app2/./src/component/Box.jsx?");

/***/ }),

/***/ "./src/component/Skills.jsx":
/*!**********************************!*\
  !*** ./src/component/Skills.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Skills)\n/* harmony export */ });\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./src/component/Box.jsx\");\n/* harmony import */ var _photos_html_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos/html.png */ \"./src/component/photos/html.png\");\n/* harmony import */ var _photos_css_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos/css-3.png */ \"./src/component/photos/css-3.png\");\n/* harmony import */ var _photos_js_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/js.png */ \"./src/component/photos/js.png\");\n/* harmony import */ var _photos_atom_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photos/atom.png */ \"./src/component/photos/atom.png\");\n/* harmony import */ var _photos_typescript_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photos/typescript.png */ \"./src/component/photos/typescript.png\");\n/* harmony import */ var _photos_sasslogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photos/sasslogo.png */ \"./src/component/photos/sasslogo.png\");\n/* harmony import */ var _Html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Html */ \"./src/component/Html.jsx\");\n/* harmony import */ var _Css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Css */ \"./src/component/Css.jsx\");\n/* harmony import */ var _Java__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Java */ \"./src/component/Java.jsx\");\n/* harmony import */ var _React__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./React */ \"./src/component/React.jsx\");\n/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Type */ \"./src/component/Type.jsx\");\n/* harmony import */ var _Sass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Sass */ \"./src/component/Sass.jsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Skills() {\n  window.onresize = () => {\n    document.querySelectorAll(\".skillsDet\").forEach(e => {\n      e.classList.remove(\"active2\");\n    });\n  };\n  return /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"div\", {\n    className: \"skills li\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    clsss: \"htmldetails\",\n    class2: \"html\",\n    photo: _photos_html_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    persantege: \"95\",\n    title: \"Hypertext Markup Language (Html)\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"p\", {\n    className: \"discripeP\"\n  }, \"learn most popular tags in html and propertys like classes and id and learn to build that tages corectly it's the basic of front-end devloper and the easiest one\")), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"div\", {\n    className: \"htmldetails2 skillsDet\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_Html__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    clsss: \"cssdetails\",\n    class2: \"css\",\n    photo: _photos_css_3_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    persantege: \"90\",\n    title: \"Cascading Style Sheets (css)\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"p\", {\n    className: \"discripeP\"\n  }, \"learn all most important property of styling and mange the position of all element and learn a lot about animation and moudul and make a website responsive for all devices\")), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"div\", {\n    className: \"cssdetails2 skillsDet\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_Css__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    clsss: \"javadetails\",\n    class2: \"java\",\n    photo: _photos_js_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    persantege: \"85\",\n    title: \"javascript\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"p\", {\n    className: \"discripeP\"\n  }, \"it's the first programing language the front-end will learn and it's vary importan for the website it's make the website Dynamic and More interactive\")), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"div\", {\n    className: \"javadetails2 skillsDet\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_Java__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    clsss: \"reactdetails\",\n    class2: \"react\",\n    photo: _photos_atom_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    persantege: \"85\",\n    title: \"react.js\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"p\", {\n    className: \"discripeP\"\n  }, \"react framwork it's a tecnologey that make javascript easier by using JSX , component and librarys\")), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"div\", {\n    className: \"reactdetails2 skillsDet\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    clsss: \"typedetails\",\n    class2: \"type\",\n    photo: _photos_typescript_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    persantege: \"85\",\n    title: \"typescript\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"p\", {\n    className: \"discripeP\"\n  }, \"tpyescript is a language based on javascript but with type for variable and function\")), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"div\", {\n    className: \"typedetails2 skillsDet\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_Type__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null)), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    clsss: \"sassdetails\",\n    class2: \"sass\",\n    photo: _photos_sasslogo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    persantege: \"90\",\n    title: \"sass\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"p\", {\n    className: \"discripeP\"\n  }, \"sass is a preprossesor for css it's append loops, condtions and varibles for css to be more dynamic\")), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(\"div\", {\n    className: \"sassdetails2 skillsDet\"\n  }, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_10__[\"default\"].createElement(_Sass__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null)));\n}\n\n//# sourceURL=webpack://new-app2/./src/component/Skills.jsx?");

/***/ }),

/***/ "./src/component/photos/atom.png":
/*!***************************************!*\
  !*** ./src/component/photos/atom.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/atom.b19b4c4670123c8592a7d765111851fd.png\");\n\n//# sourceURL=webpack://new-app2/./src/component/photos/atom.png?");

/***/ }),

/***/ "./src/component/photos/css-3.png":
/*!****************************************!*\
  !*** ./src/component/photos/css-3.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/css-3.9b06cfbf2ed7fab27f177a179e3264e1.png\");\n\n//# sourceURL=webpack://new-app2/./src/component/photos/css-3.png?");

/***/ }),

/***/ "./src/component/photos/html.png":
/*!***************************************!*\
  !*** ./src/component/photos/html.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/html.1d32ace375621652151df6ca6cc5d4cc.png\");\n\n//# sourceURL=webpack://new-app2/./src/component/photos/html.png?");

/***/ }),

/***/ "./src/component/photos/js.png":
/*!*************************************!*\
  !*** ./src/component/photos/js.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/js.b0475e46e3d327f0ae1b20382c9c76fa.png\");\n\n//# sourceURL=webpack://new-app2/./src/component/photos/js.png?");

/***/ }),

/***/ "./src/component/photos/sasslogo.png":
/*!*******************************************!*\
  !*** ./src/component/photos/sasslogo.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/sasslogo.091725d60b31feb13f2cf99373ae79d1.png\");\n\n//# sourceURL=webpack://new-app2/./src/component/photos/sasslogo.png?");

/***/ }),

/***/ "./src/component/photos/typescript.png":
/*!*********************************************!*\
  !*** ./src/component/photos/typescript.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/typescript.85e8de90e6ccc7d56178636735993666.png\");\n\n//# sourceURL=webpack://new-app2/./src/component/photos/typescript.png?");

/***/ })

}]);