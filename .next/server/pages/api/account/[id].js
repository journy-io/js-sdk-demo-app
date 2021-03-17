module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/account/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./accounts.json":
/*!***********************!*\
  !*** ./accounts.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":\\\"1\\\",\\\"name\\\":\\\"Test Account 1\\\",\\\"email\\\":\\\"test1@account.com\\\",\\\"businesses\\\":[{\\\"id\\\":\\\"2\\\",\\\"name\\\":\\\"Business 1\\\"},{\\\"id\\\":\\\"3\\\",\\\"name\\\":\\\"Business 2\\\"}]},{\\\"id\\\":\\\"2\\\",\\\"name\\\":\\\"Test Account 2\\\",\\\"email\\\":\\\"test2@account.com\\\",\\\"businesses\\\":[{\\\"id\\\":\\\"3\\\",\\\"name\\\":\\\"Business 1\\\"},{\\\"id\\\":\\\"4\\\",\\\"name\\\":\\\"Business 2\\\"}]},{\\\"id\\\":\\\"3\\\",\\\"name\\\":\\\"Test Account 3\\\",\\\"email\\\":\\\"test3@account.com\\\",\\\"businesses\\\":[{\\\"id\\\":\\\"5\\\",\\\"name\\\":\\\"Business 1\\\"},{\\\"id\\\":\\\"6\\\",\\\"name\\\":\\\"Business 2\\\"}]},{\\\"id\\\":\\\"4\\\",\\\"name\\\":\\\"Test Account 4\\\",\\\"email\\\":\\\"test4@account.com\\\",\\\"businesses\\\":[{\\\"id\\\":\\\"7\\\",\\\"name\\\":\\\"Business 1\\\"},{\\\"id\\\":\\\"2\\\",\\\"name\\\":\\\"Business 2\\\"}]}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2FjY291bnRzLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./accounts.json\n");

/***/ }),

/***/ "./pages/api/account/[id].js":
/*!***********************************!*\
  !*** ./pages/api/account/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _accounts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../accounts.json */ \"./accounts.json\");\nvar _accounts_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../accounts.json */ \"./accounts.json\", 1);\n\nfunction handler({\n  query: {\n    id\n  }\n}, res) {\n  const account = _accounts_json__WEBPACK_IMPORTED_MODULE_0__.find(account => {\n    return account.id === id;\n  });\n\n  if (!account) {\n    return res.status(404).send();\n  }\n\n  return res.json(account);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYWNjb3VudC8uanM/MzUwNCJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicXVlcnkiLCJpZCIsInJlcyIsImFjY291bnQiLCJhY2NvdW50cyIsImZpbmQiLCJzdGF0dXMiLCJzZW5kIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNlLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUMsT0FBSyxFQUFFO0FBQUVDO0FBQUY7QUFBVCxDQUFqQixFQUFvQ0MsR0FBcEMsRUFBeUM7QUFDdEQsUUFBTUMsT0FBTyxHQUFHQywyQ0FBUSxDQUFDQyxJQUFULENBQWVGLE9BQUQsSUFBYTtBQUN6QyxXQUFPQSxPQUFPLENBQUNGLEVBQVIsS0FBZUEsRUFBdEI7QUFDRCxHQUZlLENBQWhCOztBQUdBLE1BQUksQ0FBQ0UsT0FBTCxFQUFjO0FBQ1osV0FBT0QsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsRUFBUDtBQUNEOztBQUNELFNBQU9MLEdBQUcsQ0FBQ00sSUFBSixDQUFTTCxPQUFULENBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hY2NvdW50L1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWNjb3VudHMgZnJvbSBcIi4uLy4uLy4uL2FjY291bnRzLmpzb25cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoeyBxdWVyeTogeyBpZCB9IH0sIHJlcykge1xuICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHMuZmluZCgoYWNjb3VudCkgPT4ge1xuICAgIHJldHVybiBhY2NvdW50LmlkID09PSBpZDtcbiAgfSk7XG4gIGlmICghYWNjb3VudCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCgpO1xuICB9XG4gIHJldHVybiByZXMuanNvbihhY2NvdW50KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/account/[id].js\n");

/***/ })

/******/ });