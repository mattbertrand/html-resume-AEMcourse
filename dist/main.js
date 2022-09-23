/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Contact.js":
/*!********************!*\
  !*** ./Contact.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\nclass Contact {\r\n\tconstructor(form) {\r\n\t\tthis.fullName = form.elements['fullName'].value;\r\n\t\tthis.email = form.elements['email'].value;\r\n\t\tthis.subject = form.elements['subject'].value;\r\n\t\tthis.body = form.elements['body'].value;\r\n\t}\r\n\r\n\tfullName = '';\r\n\temail = '';\r\n\tsubject = '';\r\n\tbody = '';\r\n\r\n\tsend() {\r\n\t\tconsole.info(this.formatMessage());\r\n\t\tdocument.getElementById('formInfo').innerHTML =\r\n\t\t\t'Please wait, sending your email... Thank you';\r\n\t}\r\n\r\n\tformatMessage() {\r\n\t\treturn `To: ${this.fullName}\r\n                Email: ${this.email}\r\n                Subject: ${this.subject}\r\n                Body: ${this.body}`;\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./Contact.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.js */ \"./Contact.js\");\n\r\n\r\nconst formInfo = document.getElementById('formInfo');\r\nlet hasJob = true;\r\n\r\nif (hasJob) {\r\n\tshowMessage('Thanks for visiting, I am currently employed.');\r\n} else {\r\n\tshowMessage('Please look around, I am currently looking for a position.');\r\n}\r\n\r\nlet today = new Date();\r\nlet dayOfWeek = today.getDay();\r\n\r\nif (dayOfWeek === 0 || dayOfWeek === 6) {\r\n\tshowMessage(\r\n\t\t'Since it is the weekend, please be patient with my returning your email'\r\n\t);\r\n} else {\r\n\tshowMessage('I am available from 8am PST to 6pm PST');\r\n}\r\n\r\nfunction showMessage(message) {\r\n\tformInfo.innerHTML = '<p>' + message + '</p>';\r\n}\r\n\r\nfunction clearMessage() {\r\n\tformInfo.innerHTML = '';\r\n}\r\n\r\nconst contactForm = document.getElementById('contactForm');\r\n\r\ncontactForm.addEventListener('submit', function (event) {\r\n\tevent.preventDefault();\r\n\tconst contact = new _Contact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](contactForm);\r\n\tcontact.send();\r\n});\r\n\r\nconst experiences = document.getElementsByClassName('experience');\r\n\r\nfor (let x = 0; x < experiences.length; x++) {\r\n\tconst item = experiences[x];\r\n\titem.addEventListener('mouseenter', function (event) {\r\n\t\tevent.target.style = 'background-color: #999999;';\r\n\t});\r\n\titem.addEventListener('mouseleave', function (event) {\r\n\t\tevent.target.style = '';\r\n\t});\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;