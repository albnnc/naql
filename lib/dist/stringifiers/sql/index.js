(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/stringifiers/sql/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/stringifiers/sql/index.ts":
/*!***************************************!*\
  !*** ./src/stringifiers/sql/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./stringifyQuery */ \"./src/stringifiers/sql/stringifyQuery.ts\"));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RyaW5naWZpZXJzL3NxbC9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHJpbmdpZmllcnMvc3FsL2luZGV4LnRzP2U4MDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3RyaW5naWZ5UXVlcnlcIikpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/stringifiers/sql/index.ts\n");

/***/ }),

/***/ "./src/stringifiers/sql/stringifyOrderByGroup.ts":
/*!*******************************************************!*\
  !*** ./src/stringifiers/sql/stringifyOrderByGroup.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.stringifyOrderByGroup = function (parameters) {\n    var orderBys = parameters\n        .filter(function (v) {\n        return v.operator === 'sort' &&\n            v.operands.length === 1 &&\n            ['asc', 'desc'].includes(v.operands[0] + '');\n    })\n        .map(function (v) { return v.name + \" \" + (v.operands[0] + '').toUpperCase(); });\n    if (orderBys.length < 1) {\n        return;\n    }\n    return 'ORDER BY ' + orderBys.join(', ');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RyaW5naWZpZXJzL3NxbC9zdHJpbmdpZnlPcmRlckJ5R3JvdXAudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5naWZpZXJzL3NxbC9zdHJpbmdpZnlPcmRlckJ5R3JvdXAudHM/NGNlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RyaW5naWZ5T3JkZXJCeUdyb3VwID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcbiAgICB2YXIgb3JkZXJCeXMgPSBwYXJhbWV0ZXJzXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYub3BlcmF0b3IgPT09ICdzb3J0JyAmJlxuICAgICAgICAgICAgdi5vcGVyYW5kcy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgIFsnYXNjJywgJ2Rlc2MnXS5pbmNsdWRlcyh2Lm9wZXJhbmRzWzBdICsgJycpO1xuICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYubmFtZSArIFwiIFwiICsgKHYub3BlcmFuZHNbMF0gKyAnJykudG9VcHBlckNhc2UoKTsgfSk7XG4gICAgaWYgKG9yZGVyQnlzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gJ09SREVSIEJZICcgKyBvcmRlckJ5cy5qb2luKCcsICcpO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/stringifiers/sql/stringifyOrderByGroup.ts\n");

/***/ }),

/***/ "./src/stringifiers/sql/stringifyQuery.ts":
/*!************************************************!*\
  !*** ./src/stringifiers/sql/stringifyQuery.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar stringifyOrderByGroup_1 = __webpack_require__(/*! ./stringifyOrderByGroup */ \"./src/stringifiers/sql/stringifyOrderByGroup.ts\");\nvar stringifyWhereGroup_1 = __webpack_require__(/*! ./stringifyWhereGroup */ \"./src/stringifiers/sql/stringifyWhereGroup.ts\");\nexports.stringifyQuery = function (parameters, registry) {\n    return [\n        stringifyWhereGroup_1.stringifyWhereGroup(parameters, registry),\n        stringifyOrderByGroup_1.stringifyOrderByGroup(parameters, registry)\n    ].join(' ');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RyaW5naWZpZXJzL3NxbC9zdHJpbmdpZnlRdWVyeS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHJpbmdpZmllcnMvc3FsL3N0cmluZ2lmeVF1ZXJ5LnRzP2M2YmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc3RyaW5naWZ5T3JkZXJCeUdyb3VwXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnlPcmRlckJ5R3JvdXBcIik7XG52YXIgc3RyaW5naWZ5V2hlcmVHcm91cF8xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5V2hlcmVHcm91cFwiKTtcbmV4cG9ydHMuc3RyaW5naWZ5UXVlcnkgPSBmdW5jdGlvbiAocGFyYW1ldGVycywgcmVnaXN0cnkpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBzdHJpbmdpZnlXaGVyZUdyb3VwXzEuc3RyaW5naWZ5V2hlcmVHcm91cChwYXJhbWV0ZXJzLCByZWdpc3RyeSksXG4gICAgICAgIHN0cmluZ2lmeU9yZGVyQnlHcm91cF8xLnN0cmluZ2lmeU9yZGVyQnlHcm91cChwYXJhbWV0ZXJzLCByZWdpc3RyeSlcbiAgICBdLmpvaW4oJyAnKTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/stringifiers/sql/stringifyQuery.ts\n");

/***/ }),

/***/ "./src/stringifiers/sql/stringifyWhereGroup.ts":
/*!*****************************************************!*\
  !*** ./src/stringifiers/sql/stringifyWhereGroup.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar quote = function (v) {\n    return typeof v === 'string' ? \"'\" + v + \"'\" : \"\" + v;\n};\nvar stringifiers = {\n    eq: function (v) { return v.operands.length === 1 && v.name + \"=\" + quote(v.operands[0]); },\n    ne: function (v) { return v.operands.length === 1 && v.name + \"<>\" + quote(v.operands[0]); },\n    lt: function (v) { return v.operands.length === 1 && v.name + \"<\" + quote(v.operands[0]); },\n    le: function (v) { return v.operands.length === 1 && v.name + \"<=\" + quote(v.operands[0]); },\n    gt: function (v) { return v.operands.length === 1 && v.name + \">\" + quote(v.operands[0]); },\n    ge: function (v) { return v.operands.length === 1 && v.name + \">=\" + quote(v.operands[0]); },\n    bt: function (v) {\n        return v.operands.length === 2 &&\n            v.name + \" BETWEEN \" + quote(v.operands[0]) + \" AND \" + quote(v.operands[1]);\n    }\n};\nexports.stringifyWhereGroup = function (parameters) {\n    var wheres = parameters\n        .filter(function (v) { return Object.keys(stringifiers).includes(v.operator); })\n        .map(function (v) { return stringifiers[v.operator](v); })\n        .filter(function (v) { return v; });\n    if (wheres.length < 1) {\n        return;\n    }\n    return 'WHERE ' + wheres.join(' AND ');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RyaW5naWZpZXJzL3NxbC9zdHJpbmdpZnlXaGVyZUdyb3VwLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ2lmaWVycy9zcWwvc3RyaW5naWZ5V2hlcmVHcm91cC50cz9hMWMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHF1b3RlID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdzdHJpbmcnID8gXCInXCIgKyB2ICsgXCInXCIgOiBcIlwiICsgdjtcbn07XG52YXIgc3RyaW5naWZpZXJzID0ge1xuICAgIGVxOiBmdW5jdGlvbiAodikgeyByZXR1cm4gdi5vcGVyYW5kcy5sZW5ndGggPT09IDEgJiYgdi5uYW1lICsgXCI9XCIgKyBxdW90ZSh2Lm9wZXJhbmRzWzBdKTsgfSxcbiAgICBuZTogZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYub3BlcmFuZHMubGVuZ3RoID09PSAxICYmIHYubmFtZSArIFwiPD5cIiArIHF1b3RlKHYub3BlcmFuZHNbMF0pOyB9LFxuICAgIGx0OiBmdW5jdGlvbiAodikgeyByZXR1cm4gdi5vcGVyYW5kcy5sZW5ndGggPT09IDEgJiYgdi5uYW1lICsgXCI8XCIgKyBxdW90ZSh2Lm9wZXJhbmRzWzBdKTsgfSxcbiAgICBsZTogZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYub3BlcmFuZHMubGVuZ3RoID09PSAxICYmIHYubmFtZSArIFwiPD1cIiArIHF1b3RlKHYub3BlcmFuZHNbMF0pOyB9LFxuICAgIGd0OiBmdW5jdGlvbiAodikgeyByZXR1cm4gdi5vcGVyYW5kcy5sZW5ndGggPT09IDEgJiYgdi5uYW1lICsgXCI+XCIgKyBxdW90ZSh2Lm9wZXJhbmRzWzBdKTsgfSxcbiAgICBnZTogZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYub3BlcmFuZHMubGVuZ3RoID09PSAxICYmIHYubmFtZSArIFwiPj1cIiArIHF1b3RlKHYub3BlcmFuZHNbMF0pOyB9LFxuICAgIGJ0OiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdi5vcGVyYW5kcy5sZW5ndGggPT09IDIgJiZcbiAgICAgICAgICAgIHYubmFtZSArIFwiIEJFVFdFRU4gXCIgKyBxdW90ZSh2Lm9wZXJhbmRzWzBdKSArIFwiIEFORCBcIiArIHF1b3RlKHYub3BlcmFuZHNbMV0pO1xuICAgIH1cbn07XG5leHBvcnRzLnN0cmluZ2lmeVdoZXJlR3JvdXAgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgIHZhciB3aGVyZXMgPSBwYXJhbWV0ZXJzXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIE9iamVjdC5rZXlzKHN0cmluZ2lmaWVycykuaW5jbHVkZXModi5vcGVyYXRvcik7IH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0cmluZ2lmaWVyc1t2Lm9wZXJhdG9yXSh2KTsgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAodikgeyByZXR1cm4gdjsgfSk7XG4gICAgaWYgKHdoZXJlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuICdXSEVSRSAnICsgd2hlcmVzLmpvaW4oJyBBTkQgJyk7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/stringifiers/sql/stringifyWhereGroup.ts\n");

/***/ })

/******/ })));