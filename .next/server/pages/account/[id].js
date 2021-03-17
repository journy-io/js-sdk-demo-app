module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/account/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AddInvoice.js":
/*!**********************************!*\
  !*** ./components/AddInvoice.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AddInvoice; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/user/Desktop/journy/js-sdk-demo-app/components/AddInvoice.js\";\n\n\nfunction AddInvoice({\n  business,\n  invoiceSent,\n  setInvoiceSent\n}) {\n  const handleSubmit = e => {\n    e.preventDefault();\n    setInvoiceSent(true);\n    document.getElementById(\"invoice-form\").reset();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container my-5 col-12\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"font-weight-bold text-center\",\n        children: business\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), invoiceSent ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"my-2\",\n        id: \"form-submitted\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"alert alert-success\",\n          role: \"alert\",\n          children: \"The invoice was successfully sent.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card p-5\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"card-title text-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"Journy.io's invoice application\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          id: \"invoice-form\",\n          className: \"col-12\",\n          onSubmit: e => handleSubmit(e),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"form-group\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"email\",\n              children: \"Client email address\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"form-control\",\n              name: \"email\",\n              id: \"email\",\n              placeholder: \"name@example.com\",\n              type: \"email\",\n              required: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"form-group\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"services\",\n              children: \"Services bought\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n              className: \"form-control\",\n              name: \"services\",\n              id: \"services\",\n              placeholder: \"Services\",\n              required: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"form-group\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"email\",\n              children: \"Invoice price\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"form-control\",\n              name: \"price\",\n              id: \"price\",\n              placeholder: \"1337\",\n              type: \"number\",\n              required: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"text-right\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: \"btn btn-success\",\n              id: \"invoice-form\",\n              type: \"submit\",\n              children: \"Create Invoice\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZEludm9pY2UuanM/YmM3NiJdLCJuYW1lcyI6WyJBZGRJbnZvaWNlIiwiYnVzaW5lc3MiLCJpbnZvaWNlU2VudCIsInNldEludm9pY2VTZW50IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFVBQVQsQ0FBb0I7QUFBRUMsVUFBRjtBQUFZQyxhQUFaO0FBQXlCQztBQUF6QixDQUFwQixFQUErRDtBQUM1RSxRQUFNQyxZQUFZLEdBQUlDLENBQUQsSUFBTztBQUMxQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FILGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FJLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q0MsS0FBeEM7QUFDRCxHQUpEOztBQU1BLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsOEJBQWI7QUFBQSxrQkFBNkNSO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUdHQyxXQUFXLGdCQUNWO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQXNCLFVBQUUsRUFBQyxnQkFBekI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBcUMsY0FBSSxFQUFDLE9BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURVLEdBTVIsSUFUTixlQVdFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFDRSxZQUFFLEVBQUMsY0FETDtBQUVFLG1CQUFTLEVBQUMsUUFGWjtBQUdFLGtCQUFRLEVBQUdHLENBQUQsSUFBT0QsWUFBWSxDQUFDQyxDQUFELENBSC9CO0FBQUEsa0NBS0U7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDRTtBQUFPLHFCQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQ0UsdUJBQVMsRUFBQyxjQURaO0FBRUUsa0JBQUksRUFBQyxPQUZQO0FBR0UsZ0JBQUUsRUFBQyxPQUhMO0FBSUUseUJBQVcsRUFBQyxrQkFKZDtBQUtFLGtCQUFJLEVBQUMsT0FMUDtBQU1FLHNCQUFRO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsZUFnQkU7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDRTtBQUFPLHFCQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQ0UsdUJBQVMsRUFBQyxjQURaO0FBRUUsa0JBQUksRUFBQyxVQUZQO0FBR0UsZ0JBQUUsRUFBQyxVQUhMO0FBSUUseUJBQVcsRUFBQyxVQUpkO0FBS0Usc0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQkYsZUEwQkU7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDRTtBQUFPLHFCQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQ0UsdUJBQVMsRUFBQyxjQURaO0FBRUUsa0JBQUksRUFBQyxPQUZQO0FBR0UsZ0JBQUUsRUFBQyxPQUhMO0FBSUUseUJBQVcsRUFBQyxNQUpkO0FBS0Usa0JBQUksRUFBQyxRQUxQO0FBTUUsc0JBQVE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQkYsZUFxQ0U7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxtQ0FDRTtBQUNFLHVCQUFTLEVBQUMsaUJBRFo7QUFFRSxnQkFBRSxFQUFDLGNBRkw7QUFHRSxrQkFBSSxFQUFDLFFBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0VEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BZGRJbnZvaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkSW52b2ljZSh7IGJ1c2luZXNzLCBpbnZvaWNlU2VudCwgc2V0SW52b2ljZVNlbnQgfSkge1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJbnZvaWNlU2VudCh0cnVlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludm9pY2UtZm9ybVwiKS5yZXNldCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTUgY29sLTEyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1jZW50ZXJcIj57YnVzaW5lc3N9PC9wPlxuXG4gICAgICAgIHtpbnZvaWNlU2VudCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIiBpZD1cImZvcm0tc3VibWl0dGVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgVGhlIGludm9pY2Ugd2FzIHN1Y2Nlc3NmdWxseSBzZW50LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBwLTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMT5Kb3VybnkuaW8ncyBpbnZvaWNlIGFwcGxpY2F0aW9uPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgaWQ9XCJpbnZvaWNlLWZvcm1cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyXCJcbiAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+Q2xpZW50IGVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lQGV4YW1wbGUuY29tXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlcnZpY2VzXCI+U2VydmljZXMgYm91Z2h0PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VydmljZXNcIlxuICAgICAgICAgICAgICAgIGlkPVwic2VydmljZXNcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VydmljZXNcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkludm9pY2UgcHJpY2U8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMzM3XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJpbnZvaWNlLWZvcm1cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIEludm9pY2VcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AddInvoice.js\n");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"server\", function() { return server; });\nconst dev = true;\nconst server = dev ? \"http://localhost:3000\" : \"http://your-deploy.com\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanM/YTFiYyJdLCJuYW1lcyI6WyJkZXYiLCJzZXJ2ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSxNQUFNQSxHQUFHLE9BQVQ7QUFDTyxNQUFNQyxNQUFNLEdBQUdELEdBQUcsR0FBRyx1QkFBSCxHQUE2Qix3QkFBL0MiLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCI7XG5leHBvcnQgY29uc3Qgc2VydmVyID0gZGV2ID8gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiA6IFwiaHR0cDovL3lvdXItZGVwbG95LmNvbVwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.css\n");

/***/ }),

/***/ "./pages/account/[id].js":
/*!*******************************!*\
  !*** ./pages/account/[id].js ***!
  \*******************************/
/*! exports provided: default, getStaticPaths, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return account; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AddInvoice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AddInvoice */ \"./components/AddInvoice.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n\nvar _jsxFileName = \"/Users/user/Desktop/journy/js-sdk-demo-app/pages/account/[id].js\";\n\n\n\nfunction account({\n  account\n}) {\n  const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);\n  const [business, setBusiness] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"Business 1\");\n  const [invoiceSent, setInvoiceSent] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"nav navbar navbar-expand-lg navbar-light bg-light\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"nav-content\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: account.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"avatar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AddInvoice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      business: business,\n      setInvoiceSent: setInvoiceSent,\n      invoiceSent: invoiceSent\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"sidenav\",\n      children: account.businesses.map((business, index) => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          onClick: () => {\n            setActive(index);\n            setBusiness(business.name);\n            setInvoiceSent(false);\n          },\n          style: {\n            cursor: \"pointer\",\n            color: active === index ? \"purple\" : \"\"\n          },\n          children: business.name\n        }, business.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\nconst getStaticPaths = async () => {\n  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__[\"server\"]}/api/account`);\n  const accounts = await res.json();\n  const paths = accounts.map(account => ({\n    params: {\n      id: account.id.toString()\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n};\nconst getStaticProps = async ({\n  params\n}) => {\n  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__[\"server\"]}/api/account/${params.id}`);\n  const account = await res.json();\n  return {\n    props: {\n      account\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY2NvdW50Ly5qcz9jZGY1Il0sIm5hbWVzIjpbImFjY291bnQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJSZWFjdCIsInVzZVN0YXRlIiwiYnVzaW5lc3MiLCJzZXRCdXNpbmVzcyIsImludm9pY2VTZW50Iiwic2V0SW52b2ljZVNlbnQiLCJuYW1lIiwiYnVzaW5lc3NlcyIsIm1hcCIsImluZGV4IiwiY3Vyc29yIiwiY29sb3IiLCJpZCIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJzZXJ2ZXIiLCJhY2NvdW50cyIsImpzb24iLCJwYXRocyIsInBhcmFtcyIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULENBQWlCO0FBQUVBO0FBQUYsQ0FBakIsRUFBOEI7QUFDM0MsUUFBTSxDQUFDQyxNQUFELEVBQVNDLFNBQVQsSUFBc0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQTVCO0FBQ0EsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxZQUFmLENBQWhDO0FBQ0EsUUFBTSxDQUFDRyxXQUFELEVBQWNDLGNBQWQsSUFBZ0NMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQXRDO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxtREFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBSUosT0FBTyxDQUFDUztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFLHFFQUFDLDhEQUFEO0FBQ0UsY0FBUSxFQUFFSixRQURaO0FBRUUsb0JBQWMsRUFBRUcsY0FGbEI7QUFHRSxpQkFBVyxFQUFFRDtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQWNFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSxnQkFDR1AsT0FBTyxDQUFDVSxVQUFSLENBQW1CQyxHQUFuQixDQUF1QixDQUFDTixRQUFELEVBQVdPLEtBQVgsS0FBcUI7QUFDM0MsNEJBQ0U7QUFFRSxpQkFBTyxFQUFFLE1BQU07QUFDYlYscUJBQVMsQ0FBQ1UsS0FBRCxDQUFUO0FBQ0FOLHVCQUFXLENBQUNELFFBQVEsQ0FBQ0ksSUFBVixDQUFYO0FBQ0FELDBCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0QsV0FOSDtBQU9FLGVBQUssRUFBRTtBQUNMSyxrQkFBTSxFQUFFLFNBREg7QUFFTEMsaUJBQUssRUFBRWIsTUFBTSxLQUFLVyxLQUFYLEdBQW1CLFFBQW5CLEdBQThCO0FBRmhDLFdBUFQ7QUFBQSxvQkFZR1AsUUFBUSxDQUFDSTtBQVpaLFdBQ09KLFFBQVEsQ0FBQ1UsRUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQWdCRCxPQWpCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDtBQUVNLE1BQU1DLGNBQWMsR0FBRyxZQUFZO0FBQ3hDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsOENBQU8sY0FBWCxDQUF2QjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNSCxHQUFHLENBQUNJLElBQUosRUFBdkI7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ1QsR0FBVCxDQUFjWCxPQUFELEtBQWM7QUFDdkN1QixVQUFNLEVBQUU7QUFBRVIsUUFBRSxFQUFFZixPQUFPLENBQUNlLEVBQVIsQ0FBV1MsUUFBWDtBQUFOO0FBRCtCLEdBQWQsQ0FBYixDQUFkO0FBSUEsU0FBTztBQUFFRixTQUFGO0FBQVNHLFlBQVEsRUFBRTtBQUFuQixHQUFQO0FBQ0QsQ0FSTTtBQVVBLE1BQU1DLGNBQWMsR0FBRyxPQUFPO0FBQUVIO0FBQUYsQ0FBUCxLQUFzQjtBQUNsRCxRQUFNTixHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLDhDQUFPLGdCQUFlSSxNQUFNLENBQUNSLEVBQUcsRUFBcEMsQ0FBdkI7QUFDQSxRQUFNZixPQUFPLEdBQUcsTUFBTWlCLEdBQUcsQ0FBQ0ksSUFBSixFQUF0QjtBQUNBLFNBQU87QUFDTE0sU0FBSyxFQUFFO0FBQ0wzQjtBQURLO0FBREYsR0FBUDtBQUtELENBUk0iLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50L1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWRkSW52b2ljZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BZGRJbnZvaWNlXCI7XG5pbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY291bnQoeyBhY2NvdW50IH0pIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbYnVzaW5lc3MsIHNldEJ1c2luZXNzXSA9IFJlYWN0LnVzZVN0YXRlKFwiQnVzaW5lc3MgMVwiKTtcbiAgY29uc3QgW2ludm9pY2VTZW50LCBzZXRJbnZvaWNlU2VudF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2IG5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCI+XG4gICAgICAgICAgPHA+e2FjY291bnQubmFtZX08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgICAgPEFkZEludm9pY2VcbiAgICAgICAgYnVzaW5lc3M9e2J1c2luZXNzfVxuICAgICAgICBzZXRJbnZvaWNlU2VudD17c2V0SW52b2ljZVNlbnR9XG4gICAgICAgIGludm9pY2VTZW50PXtpbnZvaWNlU2VudH1cbiAgICAgID48L0FkZEludm9pY2U+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW5hdlwiPlxuICAgICAgICB7YWNjb3VudC5idXNpbmVzc2VzLm1hcCgoYnVzaW5lc3MsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGtleT17YnVzaW5lc3MuaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmUoaW5kZXgpO1xuICAgICAgICAgICAgICAgIHNldEJ1c2luZXNzKGJ1c2luZXNzLm5hbWUpO1xuICAgICAgICAgICAgICAgIHNldEludm9pY2VTZW50KGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmUgPT09IGluZGV4ID8gXCJwdXJwbGVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtidXNpbmVzcy5uYW1lfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyfS9hcGkvYWNjb3VudGApO1xuICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IHBhdGhzID0gYWNjb3VudHMubWFwKChhY2NvdW50KSA9PiAoe1xuICAgIHBhcmFtczogeyBpZDogYWNjb3VudC5pZC50b1N0cmluZygpIH0sXG4gIH0pKTtcblxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJ9L2FwaS9hY2NvdW50LyR7cGFyYW1zLmlkfWApO1xuICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWNjb3VudCxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/account/[id].js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });