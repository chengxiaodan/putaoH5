/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/paibandM/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	__webpack_require__(17);

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 17:
/***/ function(module, exports) {

	'use strict';

	(function (doc, win) {
	    var docEl = doc.documentElement,
	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	        recalc = function recalc() {
	        var clientWidth = docEl.clientWidth;
	        //alert(clientWidth);
	        if (!clientWidth) return;
	        docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
	    };
	    if (!doc.addEventListener) return;

	    win.addEventListener(resizeEvt, function () {
	        clearTimeout(tid);
	        //alert(1);
	        tid = setTimeout(recalc, 300);
	    }, false);
	    win.addEventListener('pageshow', function (e) {
	        if (e.persisted) {
	            clearTimeout(tid);
	            tid = setTimeout(recalc, 300);
	        }
	    }, false);

	    doc.addEventListener('DOMContentLoaded', function () {
	        tid = setTimeout(recalc, 0);
	    }, false);

	    recalc();
	})(document, window);

/***/ }

/******/ });