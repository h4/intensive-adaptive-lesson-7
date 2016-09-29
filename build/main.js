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
/******/ 	__webpack_require__.p = "static";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(2);

	__webpack_require__(15);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./screen-4x3.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./screen-4x3.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/**\n * Ribbon theme for Shower HTML presentation engine\n * shower-ribbon v2.0.3, https://github.com/shower/ribbon\n * @copyright 2010–2016 Vadim Makeev, http://pepelsbey.net/\n * @license MIT\n */\n@charset \"UTF-8\";@font-face{font-family:PT Sans;src:url(" + __webpack_require__(5) + ") format(\"woff\")}@font-face{font-weight:700;font-family:PT Sans;src:url(" + __webpack_require__(6) + ") format(\"woff\")}@font-face{font-style:italic;font-family:PT Sans;src:url(" + __webpack_require__(7) + ") format(\"woff\")}@font-face{font-style:italic;font-weight:700;font-family:PT Sans;src:url(" + __webpack_require__(8) + ") format(\"woff\")}@font-face{font-family:PT Sans Narrow;font-weight:700;src:url(" + __webpack_require__(9) + ") format(\"woff\")}@font-face{font-family:PT Mono;src:url(" + __webpack_require__(10) + ") format(\"woff\")}*,*:after,*:before{box-sizing:border-box}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}a{text-decoration:none}@page{margin:0;size:1024px 768px}.shower{color:#000;counter-reset:slide;font:25px/2 PT Sans,sans-serif;-webkit-print-color-adjust:exact;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none}@media print{.shower{text-rendering:geometricPrecision}}.caption{font-size:25px;display:none;margin-top:-.2em;padding:0 1em .93em;width:100%;color:#3c3d40;text-shadow:0 1px 0 #8d8e90}@media (min-width:1174px){.caption{font-size:50px}}@media (min-width:2348px){.caption{font-size:100px}}.caption h1{padding-bottom:.15em;font:700 1em/1 PT Sans Narrow,sans-serif}.caption p{line-height:1;font-size:.6em}.caption a{color:#4b86c2;text-shadow:0 -1px 0 #1f3f60}.slide{position:relative;z-index:1;overflow:hidden;padding:106px 100px 0;width:1024px;height:768px;background:#fff;font-size:25px}.slide:after{position:absolute;top:0;right:100px;padding-top:15px;width:50px;height:100px;background:url(" + __webpack_require__(11) + ") no-repeat;color:#fff;counter-increment:slide;content:counter(slide);text-align:center}.slide h2{margin-bottom:34px;color:#585a5e;font:700 50px/1 PT Sans Narrow,sans-serif}.slide p{margin-bottom:1em}.slide p.note{color:#979a9e}.slide a{background:-webkit-linear-gradient(bottom,currentColor .09em,transparent .09em)repeat-x;background:linear-gradient(to top,currentColor .09em,transparent .09em)repeat-x;color:#4b86c2}.slide b,.slide strong{font-weight:700}.slide blockquote,.slide dfn,.slide em,.slide i{font-style:italic}.slide code,.slide kbd,.slide mark,.slide samp{padding:.1em .3em;border-radius:.2em}.slide code,.slide kbd,.slide samp{background:rgba(88,90,94,.1);line-height:1;font-family:PT Mono,monospace,monospace}.slide mark{background:#fafaa2}.slide sub,.slide sup{position:relative;line-height:0;font-size:75%}.slide sub{bottom:-.25em}.slide sup{top:-.5em}.slide blockquote:before{position:absolute;margin:-.15em 0 0 -.43em;color:#ccc;line-height:1;font-size:8em;content:'\\201C'}.slide blockquote+figcaption{margin:-1em 0 1em;font-style:italic;font-weight:700}.slide ol,.slide ul{margin-bottom:1em;counter-reset:list}.slide ol li,.slide ul li{page-break-inside:avoid;text-indent:-2em}.slide ol li:before,.slide ul li:before{display:inline-block;width:2em;color:#979a9e;text-align:right}.slide ol ol,.slide ol ul,.slide ul ol,.slide ul ul{margin-bottom:0;margin-left:2em}.slide ul>li:before{padding-right:.5em;content:'\\2022'}.slide ul>li:lang(ru):before{content:'\\2014'}.slide ol>li:before{padding-right:.4em;counter-increment:list;content:counter(list)\".\"}.slide table{margin-left:-100px;margin-bottom:1em;width:calc(100% + 100px + 100px)}.slide table td:first-child,.slide table th:first-child{padding-left:96px}.slide table td:last-child,.slide table th:last-child{padding-right:96px}.slide table th{text-align:left;font-weight:700}.slide table tr:not(:last-of-type)>*{background:-webkit-linear-gradient(bottom,rgba(88,90,94,.5).055em,transparent .055em)repeat-x;background:linear-gradient(to top,rgba(88,90,94,.5).055em,transparent .055em)repeat-x}.slide table.striped tr:nth-child(even){background:rgba(88,90,94,.1)}.slide table.striped tr>*{background-image:none}.slide pre{margin-bottom:1em;counter-reset:code;white-space:normal}.slide pre code{display:block;margin-left:-100px;padding:0 0 0 100px;width:calc(100% + 100px + 100px);border-radius:0;background:0 0;line-height:2;white-space:pre;-moz-tab-size:4;-o-tab-size:4;tab-size:4}.slide pre code:not(:only-child).mark{background:rgba(88,90,94,.1)}.slide pre code:not(:only-child):before{position:absolute;margin-left:-2em;color:#979a9e;counter-increment:code;content:counter(code,decimal-leading-zero)\".\"}.slide pre mark{position:relative;z-index:-1;margin:0 -.3em}.slide pre mark.important{background:#c00;color:#fff}.slide pre mark.comment{margin:0;padding:0;background:0 0;color:#999}.slide footer{position:absolute;right:0;bottom:-768px;left:0;display:none;padding:41px 100px 8px;background:#fbfbba;box-shadow:0 1px 0 #fafaa2 inset;-webkit-transition:bottom .3s;transition:bottom .3s}.slide footer mark{background:rgba(255,255,255,.8)}.slide:hover>footer{bottom:0}.slide.grid{background-image:url(" + __webpack_require__(12) + ");-ms-interpolation-mode:nearest-neighbor;image-rendering:-webkit-optimize-contrast;image-rendering:-moz-crisp-edges;image-rendering:pixelated}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx){.slide.grid{background-image:url(" + __webpack_require__(13) + ");background-size:1024px auto}}.slide.black{background-color:#000}.slide.black:after{visibility:hidden}.slide.white{background-color:#fff}.slide.white:after{visibility:hidden}.slide .double{-webkit-columns:2;-moz-columns:2;columns:2;-webkit-column-gap:75px;-moz-column-gap:75px;column-gap:75px}.slide .shout{position:absolute;top:50%;left:0;width:100%;text-align:center;line-height:1;font-size:150px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.slide .shout a{background:-webkit-linear-gradient(bottom,currentColor .11em,transparent .11em)repeat-x;background:linear-gradient(to top,currentColor .11em,transparent .11em)repeat-x}.slide .cover{position:absolute;top:50%;left:50%;z-index:-1;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:100%;max-height:100%}.slide .cover.w,.slide .cover.width{width:100%;max-height:none}.slide .cover.h,.slide .cover.height{height:100%;max-width:none}.slide .cover+figcaption{position:absolute;bottom:20px;right:10px;font-size:12px;opacity:.7;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:translateX(100%) rotate(-90deg);transform:translateX(100%) rotate(-90deg)}.slide .cover+figcaption.white{color:#fff}.slide .cover+figcaption a{color:currentcolor}.slide .place{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.slide .place.b.l,.slide .place.b.r,.slide .place.bottom.left,.slide .place.bottom.right,.slide .place.t.l,.slide .place.t.r,.slide .place.top.left,.slide .place.top.right{-webkit-transform:none;transform:none}.slide .place.b,.slide .place.bottom,.slide .place.t,.slide .place.top{-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}.slide .place.l,.slide .place.left,.slide .place.r,.slide .place.right{-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.slide .place.t,.slide .place.t.r,.slide .place.top,.slide .place.top.left,.slide .place.top.right{top:0}.slide .place.r,.slide .place.right{right:0;left:auto}.slide .place.b,.slide .place.b.l,.slide .place.b.r,.slide .place.bottom,.slide .place.bottom.left,.slide .place.bottom.right{top:auto;bottom:0}.slide .place.l,.slide .place.left{left:0}.badge,.progress{position:absolute;z-index:1;display:none}.progress{left:-20px;bottom:0;box-sizing:content-box;border:10px solid #4b86c2;border-right-color:transparent;-webkit-transition:width .2s linear;transition:width .2s linear;clip:rect(10px,1044px,20px,20px);width:0;height:0}.progress[style*='100%']{padding-left:10px}.badge{font-size:10px;top:0;right:0;overflow:hidden;visibility:hidden;width:9em;height:9em}@media (min-width:1174px){.badge{font-size:20px}}@media (min-width:2348px){.badge{font-size:40px}}.badge a{position:absolute;right:-50%;bottom:50%;left:-50%;visibility:visible;background:#4b86c2;color:#fff;text-align:center;line-height:2;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.region{display:none}@media screen{.shower.list{padding-top:25px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;background:#585a5e;position:absolute;clip:rect(0,auto,auto,0)}}@media screen and (min-width:1174px){.shower.list{padding-top:50px}}@media screen and (min-width:2348px){.shower.list{padding-top:100px}}@media screen{.shower.list .caption{display:block}.shower.list .slide{-webkit-transform-origin:0 0;transform-origin:0 0;margin:0 -768px -551px 25px;-webkit-transform:scale(.25);transform:scale(.25);border-radius:2px;box-shadow:0 20px 50px rgba(0,0,0,.3)}}@media screen and (min-width:1174px){.shower.list .slide{margin:0 -512px -334px 50px;-webkit-transform:scale(.5);transform:scale(.5)}}@media screen and (min-width:2348px){.shower.list .slide{margin:0 0 100px 100px;-webkit-transform:scale(1);transform:scale(1)}}@media screen{.shower.list .slide:hover{box-shadow:0 0 0 20px rgba(0,0,0,.1),0 20px 50px rgba(0,0,0,.3)}.shower.list .slide:target{box-shadow:0 0 0 1px #376da3,0 0 0 20px #4b86c2,0 20px 50px rgba(0,0,0,.3)}.shower.list .slide *{pointer-events:none}.shower.list .badge,.shower.list .slide footer{display:block}.shower.full{position:absolute;top:50%;left:50%;overflow:hidden;margin:-384px 0 0 -512px;width:1024px;height:768px;background:#000}.shower.full .slide{position:absolute;top:0;left:0;margin-left:-150%;visibility:hidden}.shower.full .slide:target{margin:0;visibility:visible}.shower.full .slide pre code:not(:only-child).mark.next{visibility:visible;background:0 0}.shower.full .slide pre code:not(:only-child).mark.next.active{background:rgba(88,90,94,.1)}.shower.full .slide .next{visibility:hidden}.shower.full .slide .next.active{visibility:visible}.shower.full .slide .shout.grow,.shower.full .slide .shout.shrink{opacity:0;-webkit-transition:.4s ease-out;transition:.4s ease-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.shower.full .slide .shout.grow{-webkit-transform:scale(.1) translateY(-50%);transform:scale(.1) translateY(-50%)}.shower.full .slide .shout.shrink{-webkit-transform:scale(10) translateY(-50%);transform:scale(10) translateY(-50%)}.shower.full .slide:target .shout.grow,.shower.full .slide:target .shout.shrink{opacity:1;-webkit-transform:scale(1) translateY(-50%);transform:scale(1) translateY(-50%)}.shower.full .progress{display:block}.shower.full .region{position:absolute;clip:rect(0 0 0 0);overflow:hidden;margin:-1px;padding:0;width:1px;height:1px;border:none;display:block}}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "617be50241abab6860a9e54ec4859e23.woff";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f3e357a4a71b7e2ccf973757790f11cb.woff";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8816b23251e8d39f910115f5e421067d.woff";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b669fcc697446d27c7da36b4feb82b89.woff";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "656ff0bd087d25dfa726731b2c03bac3.woff";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b9779f0ea75b8cb92a53f4b842ad6983.woff";

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNDMDAiIGQ9Ik0wIDBoNTB2MTAwTDI1IDgwIDAgMTAwIi8+PC9zdmc+"

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "412df3850251d5e471d955c2de86a51a.png";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b5226a63864abb4f87f153302a11c892.png";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var exports = false;

	/**
	 * Core for Shower HTML presentation engine
	 * shower-core v2.0.5, https://github.com/shower/core
	 * @copyright 2010–2016 Vadim Makeev, http://pepelsbey.net/
	 * @license MIT
	 */
	!function(a) {
	    var b, c = {NOT_RESOLVED: "NOT_RESOLVED", IN_RESOLVING: "IN_RESOLVING", RESOLVED: "RESOLVED"}, d = function() {
	        var l = {
	            trackCircularDependencies: !0,
	            allowMultipleDeclarations: !0
	        }, m = {}, n = !1, o = [], p = function(a, d, e) {
	            e || (e = d, d = []);
	            var f = m[a];
	            f || (f = m[a] = {name: a, decl: b}), f.decl = {
	                name: a,
	                prev: f.decl,
	                fn: e,
	                state: c.NOT_RESOLVED,
	                deps: d,
	                dependents: [],
	                exports: b
	            }
	        }, q = function(b, c, d) {
	            "string" == typeof b && (b = [b]), n || (n = !0, k(v)), o.push({
	                deps: b, cb: function(b, f) {
	                    f ? (d || e)(f) : c.apply(a, b)
	                }
	            })
	        }, r = function(a) {
	            var b = m[a];
	            return b ? c[b.decl.state] : "NOT_DEFINED"
	        }, s = function(a) {
	            return !!m[a]
	        }, t = function(a) {
	            for (var b in a)a.hasOwnProperty(b) && (l[b] = a[b])
	        }, u = function() {
	            var a, b = {};
	            for (var c in m)m.hasOwnProperty(c) && (a = m[c], (b[a.decl.state] || (b[a.decl.state] = [])).push(c));
	            return b
	        }, v = function() {
	            n = !1, w()
	        }, w = function() {
	            var a, b = o, c = 0;
	            for (o = []; a = b[c++];)x(null, a.deps, [], a.cb)
	        }, x = function(a, b, c, d) {
	            var e = b.length;
	            e || d([]);
	            for (var g, h, i = [], j = function(a, b) {
	                if (b)return void d(null, b);
	                if (!--e) {
	                    for (var c, f = [], g = 0; c = i[g++];)f.push(c.exports);
	                    d(f)
	                }
	            }, k = 0, l = e; l > k;) {
	                if (g = b[k++], "string" == typeof g) {
	                    if (!m[g])return void d(null, f(g, a));
	                    h = m[g].decl
	                } else h = g;
	                i.push(h), y(h, c, j)
	            }
	        }, y = function(b, d, e) {
	            if (b.state === c.RESOLVED)return void e(b.exports);
	            if (b.state === c.IN_RESOLVING)return void(l.trackCircularDependencies && j(b, d) ? e(null, g(b, d)) : b.dependents.push(e));
	            if (b.dependents.push(e), b.prev && !l.allowMultipleDeclarations)return void A(b, i(b));
	            l.trackCircularDependencies && (d = d.slice()).push(b);
	            var f = !1, k = b.prev ? b.deps.concat([b.prev]) : b.deps;
	            b.state = c.IN_RESOLVING, x(b, k, d, function(c, d) {
	                return d ? void A(b, d) : (c.unshift(function(a, c) {
	                    return f ? void e(null, h(b)) : (f = !0, void(c ? A(b, c) : z(b, a)))
	                }), void b.fn.apply({name: b.name, deps: b.deps, global: a}, c))
	            })
	        }, z = function(a, d) {
	            a.exports = d, a.state = c.RESOLVED;
	            for (var e, f = 0; e = a.dependents[f++];)e(d);
	            a.dependents = b
	        }, A = function(a, b) {
	            a.state = c.NOT_RESOLVED;
	            for (var d, e = 0; d = a.dependents[e++];)d(null, b);
	            a.dependents = []
	        };
	        return {create: d, define: p, require: q, getState: r, isDefined: s, setOptions: t, getStat: u}
	    }, e = function(a) {
	        k(function() {
	            throw a
	        })
	    }, f = function(a, b) {
	        return Error(b ? 'Module "' + b.name + '": can\'t resolve dependence "' + a + '"' : 'Required module "' + a + "\" can't be resolved")
	    }, g = function(a, b) {
	        for (var c, d = [], e = 0; c = b[e++];)d.push(c.name);
	        return d.push(a.name), Error('Circular dependence has been detected: "' + d.join(" -> ") + '"')
	    }, h = function(a) {
	        return Error('Declaration of module "' + a.name + '" has already been provided')
	    }, i = function(a) {
	        return Error('Multiple declarations of module "' + a.name + '" have been detected')
	    }, j = function(a, b) {
	        for (var c, d = 0; c = b[d++];)if (a === c)return !0;
	        return !1
	    }, k = function() {
	        var b = [], c = function(a) {
	            return 1 === b.push(a)
	        }, d = function() {
	            var a = b, c = 0, d = b.length;
	            for (b = []; d > c;)a[c++]()
	        };
	        if ("object" == typeof process && process.nextTick)return function(a) {
	            c(a) && process.nextTick(d)
	        };
	        if (a.setImmediate)return function(b) {
	            c(b) && a.setImmediate(d)
	        };
	        if (a.postMessage && !a.opera) {
	            var e = !0;
	            if (a.attachEvent) {
	                var f = function() {
	                    e = !1
	                };
	                a.attachEvent("onmessage", f), a.postMessage("__checkAsync", "*"), a.detachEvent("onmessage", f)
	            }
	            if (e) {
	                var g = "__modules" + +new Date, h = function(a) {
	                    a.data === g && (a.stopPropagation && a.stopPropagation(), d())
	                };
	                return a.addEventListener ? a.addEventListener("message", h, !0) : a.attachEvent("onmessage", h), function(b) {
	                    c(b) && a.postMessage(g, "*")
	                }
	            }
	        }
	        var i = a.document;
	        if ("onreadystatechange" in i.createElement("script")) {
	            var j = i.getElementsByTagName("head")[0], k = function() {
	                var a = i.createElement("script");
	                a.onreadystatechange = function() {
	                    a.parentNode.removeChild(a), a = a.onreadystatechange = null, d()
	                }, j.appendChild(a)
	            };
	            return function(a) {
	                c(a) && k()
	            }
	        }
	        return function(a) {
	            c(a) && setTimeout(d, 0)
	        }
	    }();
	    "object" == typeof exports ? module.exports = d() : a.modules = d()
	}("undefined" != typeof window ? window : global), function(a) {
	    function b(a, b) {
	        return a.dataset ? a.dataset[b] : a.getAttribute("data-" + b)
	    }

	    var c = ["debug-mode", "slides-selector", "hotkeys"];
	    a.shower = {
	        modules: a.modules.create(),
	        options: a.showerOptions || {}
	    }, document.addEventListener("DOMContentLoaded", function() {
	        a.shower.modules.require("shower.defaultOptions", function(d) {
	            var e = a.hasOwnProperty("showerOptions"), f = a.shower.options, g = f.shower_selector || d.container_selector, h = document.querySelector(g), i = b.bind(this, h), j = "undefined" != typeof f.auto_init ? f.auto_init : !0;
	            if (!h)throw new Error("Shower element with selector " + g + " not found.");
	            ("false" !== i("auto-init") || e && j) && (e || c.forEach(function(a) {
	                var b = i(a);
	                null !== b && "undefined" != typeof b && (f[a.replace(/-/g, "_")] = b)
	            }), a.shower.modules.require(["shower"], function(a) {
	                a.init({container: h, options: f})
	            }))
	        })
	    }, !1)
	}(window), shower.modules.define("shower", ["shower.global"], function(a, b) {
	    a(b)
	}), shower.modules.define("Emitter", ["emitter.Event", "emitter.EventGroup", "util.extend"], function(a, b, c, d) {
	    function e(a) {
	        a = a || {}, this._context = a.context, this._parent = a.parent, this._listeners = {}
	    }

	    function f(a, b) {
	        return a.priority - b.priority
	    }

	    d(e.prototype, {
	        on: function(a, b, c, d) {
	            if ("undefined" == typeof b)throw new Error("Callback is not defined.");
	            if (d = d || 0, "string" == typeof a)this._addListener(a, b, c, d); else for (var e = 0, f = a.length; f > e; e++)this._addListener(a[e], b, c, d);
	            return this
	        }, off: function(a, b, c, d) {
	            if (d = d || 0, "string" == typeof a)this._removeListener(a, b, c, d); else for (var e = 0, f = a.length; f > e; e++)this._removeListener(a[e], b, c, d);
	            return this
	        }, once: function(a, b, c, d) {
	            var e = function(f) {
	                this.off(a, e, this, d), c ? b.call(c, f) : b(f)
	            };
	            return this.on(a, e, this, d), this
	        }, emit: function(a, b) {
	            var c = b, d = this._listeners;
	            c && "function" == typeof c.get || (c = this.createEventObject(a, b, this._context)), c.isPropagationStopped() || (d.hasOwnProperty(a) && this._callListeners(d[a], c), this._parent && !c.isPropagationStopped() && this._parent.emit(a, c))
	        }, createEventObject: function(a, c, e) {
	            var f = {target: e, type: a};
	            return new b(c ? d(f, c) : f)
	        }, setParent: function(a) {
	            this._parent != a && (this._parent = a)
	        }, getParent: function() {
	            return this._parent
	        }, group: function() {
	            return new c(this)
	        }, _addListener: function(a, b, c, d) {
	            var e = {callback: b, context: c, priority: d};
	            this._listeners[a] ? this._listeners[a].push(e) : this._listeners[a] = [e]
	        }, _removeListener: function(a, b, c, d) {
	            var e, f = this._listeners[a];
	            if (f) {
	                for (var g = -1, h = 0, i = f.length; i > h; h++)e = f[h], e.callback == b && e.context == c && e.priority == d && (g = h);
	                -1 != g && (1 == f.length ? this._clearType(a) : f.splice(g, 1))
	            }
	        }, _clearType: function(a) {
	            this._listeners.hasOwnProperty(a) && delete this._listeners[a]
	        }, _callListeners: function(a, b) {
	            var c = a.length - 1;
	            for (a.sort(f); c >= 0 && !b.defaultPrevented();) {
	                var d = a[c];
	                d && (d.context ? d.callback.call(d.context, b) : d.callback(b)), c--
	            }
	        }
	    }), a(e)
	}), shower.modules.define("emitter.Event", ["util.extend"], function(a, b) {
	    function c(a) {
	        this._data = a, this._preventDefault = !1, this._stopPropagation = !1
	    }

	    b(c.prototype, {
	        get: function(a) {
	            return this._data[a]
	        }, preventDefault: function() {
	            return this._preventDefault = !0, this._preventDefault
	        }, defaultPrevented: function() {
	            return this._preventDefault
	        }, stopPropagation: function() {
	            return this._stopPropagation = !0, this._stopPropagation
	        }, isPropagationStopped: function() {
	            return this._stopPropagation
	        }
	    }), a(c)
	}), shower.modules.define("emitter.EventGroup", ["util.extend"], function(a, b) {
	    function c(a) {
	        this.events = a, this._listeners = []
	    }

	    b(c.prototype, {
	        on: function(a, b, c) {
	            if (Array.isArray(a))for (var d = 0, e = a.length; e > d; d++)this._listeners.push(a[d], b, c); else this._listeners.push(a, b, c);
	            return this.events.on(a, b, c), this
	        }, off: function(a, b, c) {
	            if (Array.isArray(a))for (var d = 0, e = a.length; e > d; d++)this._removeListener(a[d], b, c); else this._removeListener(a, b, c);
	            return this
	        }, offAll: function() {
	            for (var a = 0, b = this._listeners.length; b > a; a += 3)this.events.off(this._listeners[a], this._listeners[a + 1], this._listeners[a + 2]);
	            return this._listeners.length = 0, this
	        }, _removeListener: function(a, b, c) {
	            for (var d = this._listeners.indexOf(a, 0); -1 != d;)this._listeners[d + 1] == b && this._listeners[d + 2] == c && (this._listeners.splice(d, 3), this.events.off(a, b, c)), d = this._listeners.indexOf(a, d)
	        }
	    }), a(c)
	}), shower.modules.define("Plugins", ["Emitter", "util.extend"], function(a, b, c) {
	    function d(a) {
	        this.events = new b({context: this}), this._showerGlobal = a, this._showerInstances = a.getInited(), this._plugins = {}, this._instances = [], a.events.on("init", this._onShowerInit, this)
	    }

	    c(d.prototype, {
	        destroy: function() {
	            this._showerGlobal.events.off("init", this._onShowerInit, this), this._plugins = null
	        }, add: function(a, b) {
	            if (this._plugins.hasOwnProperty(a))throw new Error("Plugin " + a + " already exist.");
	            return this._requireAndAdd({name: a, options: b}), this
	        }, remove: function(a) {
	            if (!this._plugins.hasOwnProperty(a))throw new Error("Plugin " + a + " not found.");
	            return delete this._plugins[a], this.events.emit("remove", {name: a}), this
	        }, get: function(a, b) {
	            var c, d = this._plugins[a];
	            if (d && b)for (var e = 0, f = this._instances.length; f > e; e++) {
	                var g = this._instances[e];
	                g.plugin.name === a && g.shower === b && (c = g.instance)
	            }
	            return c
	        }, _requireAndAdd: function(a) {
	            shower.modules.require(a.name, function(b) {
	                a["class"] = b, this._plugins[a.name] = a, this._instancePlugin(a)
	            }.bind(this))
	        }, _instancePlugin: function(a) {
	            this._showerInstances.forEach(function(b) {
	                this._instance(a, b)
	            }, this), this.events.emit("add", {name: a.name})
	        }, _instanceFor: function(a) {
	            for (var b in this._plugins)this._plugins.hasOwnProperty(b) && this._instance(this._plugins[b], a)
	        }, _instance: function(a, b) {
	            var c = a.options || b.options.get("plugin_" + a.name);
	            this._instances.push({shower: b, plugin: a, instance: new a["class"](b, c)})
	        }, _onShowerInit: function(a) {
	            var b = a.get("shower");
	            this._instanceFor(b)
	        }
	    }), a(d)
	}), shower.modules.define("shower.global", ["Emitter", "Plugins"], function(a, b, c) {
	    var d = [], e = {
	        ready: function(a) {
	            return a && (d.length ? d.forEach(a) : this.events.once("init", function(b) {
	                a(b.get("shower"))
	            })), Boolean(d.length)
	        }, init: function(a) {
	            a = a || {}, shower.modules.require(["Shower"], function(b) {
	                new b(a.container, a.options)
	            })
	        }, getInited: function() {
	            return d.slice()
	        }
	    };
	    e.events = new b({context: e}), e.plugins = new c(e), e.events.on("notify", function(a) {
	        var b = a.get("shower");
	        d.push(b), e.events.emit("init", a)
	    }), a(e)
	}), shower.modules.define("Options", ["Emitter", "options.Monitor", "util.Store", "util.extend", "util.inherit"], function(a, b, c, d, e, f) {
	    function g(a) {
	        g["super"].constructor.apply(this, arguments), this.events = new b
	    }

	    f(g, d, {
	        set: function(a, b) {
	            var c = [];
	            if ("string" == typeof a)g["super"].set.call(this, a, b), c.push({name: a, value: b}); else {
	                var d = a || {};
	                Object.keys(d).forEach(function(a) {
	                    var b = d[a];
	                    g["super"].set.call(this, a, b), c.push({name: a, value: b})
	                })
	            }
	            return c.length && this.events.emit("set", {items: c}), this
	        }, unset: function(a) {
	            return g["super"].unset(this, a), this.events.emit("unset", {name: a}), this
	        }, getMonitor: function() {
	            return new c(this)
	        }
	    }), a(g)
	}), shower.modules.define("options.Monitor", ["util.extend"], function(a, b) {
	    function c(a) {
	        this._options = a, this._optionsEvents = a.events.group().on(["set", "unset"], this._onOptionsChange, this), this._fieldsHanders = {}
	    }

	    b(c.prototype, {
	        destroy: function() {
	            this._options = null, this._optionsEvents.offAll(), this._fieldsHanders = null
	        }, add: function(a, b, c) {
	            if (Array.prototype.isArray.call(null, a)) {
	                var d = a;
	                for (var e in d)d.hasOwnProperty(e) && this._addHandler(e, b, c)
	            } else this._addHandler(a, b, c);
	            return this
	        }, remove: function(a, b, c) {
	            if (Array.prototype.isArray.call(null, a)) {
	                var d = a;
	                for (var e in d)d.hasOwnProperty(e) && this._remodeHandler(e, b, c)
	            } else this._remodeHandler(a, b, c);
	            return this
	        }, getOptions: function() {
	            return this._options
	        }, _onOptionsChange: function(a) {
	            var b = "unset" === a.get("type") ? [a.get("name")] : a.get("items");
	            b.forEach(function(a) {
	                this._fieldsHanders.hasOwnProperty(a) && this._fieldsHanders[a].forEach(function(b) {
	                    b.callback.call(b.context, this._options.get(a))
	                })
	            }, this)
	        }, _addHandler: function(a, b, c) {
	            var d = {callback: b, context: c};
	            this._fieldsHanders.hasOwnProperty(fieldName) ? this._fieldsHanders[fieldName].push(d) : this._fieldsHanders[fieldName] = [d]
	        }, _remodeHandler: function(a, b, c) {
	            if (!this._fieldsHanders.hasOwnProperty(a))throw new Error("Remove undefined handler for " + a + " field");
	            var d = this._fieldsHanders[a], e = d.filter(function(a) {
	                return a.callback === b && a.context === c
	            })[0];
	            if (!hander)throw new Error("Hanlder for " + a + " not found.");
	            d.splice(d.indexOf(e, 1))
	        }
	    }), a(c)
	}), shower.modules.define("Shower", ["Emitter", "Options", "shower.global", "shower.defaultOptions", "shower.Container", "shower.Player", "shower.Location", "shower.slidesParser", "util.extend"], function(a, b, c, d, e, f, g, h, i, j) {
	    function k(a, i) {
	        i = i || {}, this.events = new b({context: this}), this.options = new c({}, e, i);
	        var j = a || this.options.get("container_selector");
	        "string" == typeof j && (j = document.querySelector(j)), this.player = new g(this), this.container = new f(this, j), this._slides = [], this._isHotkeysOn = !0, this._liveRegion = null, this._initSlides(), this._initLiveRegion(), this.options.get("debug_mode") && (document.body.classList.add(this.options.get("debug_mode_classname")), console.info("Debug mode on")), this.options.get("hotkeys") || this.disableHotkeys(), this.location = new h(this), d.events.emit("notify", {shower: this}), this._playerListeners = this.player.events.group().on("activate", this._onPlayerSlideActivate, this)
	    }

	    j(k.prototype, {
	        destroy: function() {
	            this.events.emit("destroy"), this.location.destroy(), this.container.destroy(), this.player.destroy(), this._slides = []
	        }, add: function(a) {
	            if (Array.isArray.call(null, a))for (var b = 0, c = a.length; c > b; b++)this._addSlide(a[b]); else this._addSlide(a);
	            return this
	        }, remove: function(a) {
	            var b;
	            if ("number" == typeof a)b = a; else {
	                if (-1 == this._slides.indexOf(a))throw new Error("Slide not found");
	                b = this._slides.indexOf(a)
	            }
	            return a = this._slides.splice(b, 1)[0], this.events.emit("slideremove", {slide: a}), a.destroy(), this
	        }, get: function(a) {
	            return this._slides[a]
	        }, getSlides: function() {
	            return this._slides.slice()
	        }, getSlidesCount: function() {
	            return this._slides.length
	        }, getSlideIndex: function(a) {
	            return this._slides.indexOf(a)
	        }, disableHotkeys: function() {
	            return this._isHotkeysOn = !1, this
	        }, enableHotkeys: function() {
	            return this._isHotkeysOn = !0, this
	        }, isHotkeysEnabled: function() {
	            return this._isHotkeysOn
	        }, getLiveRegion: function() {
	            return this._liveRegion
	        }, updateLiveRegion: function(a) {
	            return this._liveRegion.innerHTML = a, this
	        }, _onPlayerSlideActivate: function(a) {
	            var b = a.get("slide");
	            this.updateLiveRegion(b.getContent())
	        }, _initSlides: function() {
	            var a = this.options.get("slides_parser") || i, b = a(this.container.getElement(), this.options.get("slides_selector"));
	            this.add(b)
	        }, _addSlide: function(a) {
	            a.state.set("index", this._slides.length), this._slides.push(a), this.events.emit("slideadd", {slide: a})
	        }, _initLiveRegion: function() {
	            var a = document.createElement("section");
	            a.setAttribute("role", "region"), a.setAttribute("aria-live", "assertive"), a.setAttribute("aria-relevant", "additions"), a.setAttribute("aria-label", "Slide Content: Auto-updating"), a.className = "region", document.body.appendChild(a), this._liveRegion = a
	        }
	    }), a(k)
	}), shower.modules.define("shower.Container", ["Emitter", "util.bound", "util.extend"], function(a, b, c, d) {
	    function e(a, c) {
	        this.events = new b({
	            context: this,
	            parent: a.events
	        }), this._shower = a, this._element = c, this._isSlideMode = !1, this.init()
	    }

	    d(e.prototype, {
	        init: function() {
	            var a = document.body.classList, b = this._shower.options, c = b.get("mode_full_classname"), d = b.get("mode_list_classname");
	            a.contains(d) || a.contains(c) || a.add(d), this._setupListeners()
	        }, destroy: function() {
	            this._clearListeners(), this._element = null, this._shower = null, this._isSlideMode = null
	        }, getElement: function() {
	            return this._element
	        }, enterSlideMode: function() {
	            var a = document.body.classList, b = this._shower.options;
	            return a.remove(b.get("mode_list_classname")), a.add(b.get("mode_full_classname")), this._applyTransform(this._getTransformScale()), this._isSlideMode = !0, this.events.emit("slidemodeenter"), this
	        }, exitSlideMode: function() {
	            var a = document.body.classList, b = this._shower.options;
	            return a.remove(b.get("mode_full_classname")), a.add(b.get("mode_list_classname")), this._applyTransform("none"), this._isSlideMode = !1, this.scrollToCurrentSlide(), this.events.emit("slidemodeexit"), this
	        }, isSlideMode: function() {
	            return this._isSlideMode
	        }, scrollToCurrentSlide: function() {
	            var a = this._shower.options.get("slide_active_classname"), b = this._element.querySelector("." + a);
	            return b && window.scrollTo(0, b.offsetTop), this
	        }, _setupListeners: function() {
	            this._showerListeners = this._shower.events.group().on("slideadd", this._onSlideAdd, this).on("slideremove", this._onSlideRemove, this), window.addEventListener("resize", c(this, "_onResize")), document.addEventListener("keydown", c(this, "_onKeyDown"))
	        }, _clearListeners: function() {
	            this._showerListeners.offAll(), window.removeEventListener("resize", c(this, "_onResize")), document.removeEventListener("keydown", c(this, "_onKeyDown"))
	        }, _getTransformScale: function() {
	            var a = Math.max(document.body.clientWidth / window.innerWidth, document.body.clientHeight / window.innerHeight);
	            return "scale(" + 1 / a + ")"
	        }, _applyTransform: function(a) {
	            ["WebkitTransform", "MozTransform", "msTransform", "OTransform", "transform"].forEach(function(b) {
	                document.body.style[b] = a
	            })
	        }, _onResize: function() {
	            this.isSlideMode() && this._applyTransform(this._getTransformScale())
	        }, _onSlideAdd: function(a) {
	            var b = a.get("slide");
	            b.events.on("click", this._onSlideClick, this)
	        }, _onSlideRemove: function(a) {
	            var b = a.get("slide");
	            b.events.off("click", this._onSlideClick, this)
	        }, _onSlideClick: function() {
	            this._isSlideMode || this.enterSlideMode()
	        }, _onKeyDown: function(a) {
	            if (this._shower.isHotkeysEnabled())switch (a.which) {
	                case 13:
	                    a.preventDefault(), this.enterSlideMode();
	                    break;
	                case 27:
	                    a.preventDefault(), this.exitSlideMode();
	                    break;
	                case 116:
	                    if (a.preventDefault(), this.isSlideMode())this.exitSlideMode(); else {
	                        var b = a.shiftKey ? this._shower.player.getCurrentSlideIndex() : 0;
	                        this._shower.player.go(b), this.enterSlideMode()
	                    }
	                    break;
	                case 80:
	                    !this.isSlideMode() && a.altKey && a.metaKey && (a.preventDefault(), this.enterSlideMode())
	            }
	        }
	    }), a(e)
	}), shower.modules.define("shower.Location", ["util.SessionStore", "util.bound", "util.extend"], function(a, b, c, d) {
	    function e(a) {
	        this._shower = a;
	        var c = a.options.get("sessionstore_key") + "-shower.Location";
	        this.state = new b(c, {isSlideMode: !1}), this._showerListeners = null, this._playerListeners = null, this._documentTitle = document.title, this._popStateProcess = null, this._setupListeners(), this._init()
	    }

	    d(e.prototype, {
	        destroy: function() {
	            this._clearListeners()
	        }, save: function() {
	            this.state.set("isSlideMode", this._isSlideMode())
	        }, _init: function() {
	            var a, b = this._shower, c = window.location.hash.substr(1), d = b.options.get("mode_full_classname");
	            window.location.hash = "", (this.state.get("isSlideMode") || document.body.classList.contains(d)) && b.container.enterSlideMode(), "" !== c && (a = this._getSlideById(c), b.player.go("undefined" != typeof a.index ? a.index : 0))
	        }, _setupListeners: function() {
	            var a = this._shower;
	            this._playerListeners = a.player.events.group().on("activate", this._onSlideActivate, this), this._containerListener = a.container.events.group().on(["slidemodeenter", "slidemodeexit"], this._onContainerSlideModeChange, this), window.addEventListener("popstate", c(this, "_onPopstate"))
	        }, _clearListeners: function() {
	            window.removeEventListener("popstate", c(this, "_onPopstate")), this._playerListeners.offAll(), this._containerListener.offAll()
	        }, _getSlideById: function(a) {
	            for (var b, c, d = this._shower.getSlides(), e = d.length - 1; e >= 0; e--)if (d[e].getId() === a) {
	                b = d[e], c = e;
	                break
	            }
	            return {slide: b, index: c}
	        }, _onSlideActivate: function(a) {
	            window.location.hash = a.get("slide").getId(), this._setTitle()
	        }, _onContainerSlideModeChange: function() {
	            this._setTitle(), this.save()
	        }, _isSlideMode: function() {
	            return this._shower.container.isSlideMode()
	        }, _onPopstate: function() {
	            var a, b = this._shower, c = window.location.hash.substr(1), d = b.player.getCurrentSlide(), e = b.player.getCurrentSlideIndex();
	            this._isSlideMode() && -1 === e ? b.player.go(0) : -1 === e && "" !== window.location.hash && b.player.go(0), d && c !== d.getId() && (a = this._getSlideById(c), b.player.go(a.index))
	        }, _setTitle: function() {
	            var a = document.title, b = this._isSlideMode(), c = this._shower.player.getCurrentSlide();
	            if (b && c) {
	                var d = c.getTitle();
	                document.title = d ? d + " — " + this._documentTitle : this._documentTitle
	            } else this._documentTitle !== a && (document.title = this._documentTitle)
	        }
	    }), a(e)
	}), shower.modules.define("shower.Player", ["Emitter", "util.bound", "util.extend"], function(a, b, c, d) {
	    function e(a) {
	        this.events = new b({
	            context: this,
	            parent: a.events
	        }), this._shower = a, this._showerListeners = null, this._playerListeners = null, this._currentSlideNumber = -1, this._currentSlide = null, this.init()
	    }

	    d(e.prototype, {
	        init: function() {
	            this._showerListeners = this._shower.events.group().on("slideadd", this._onSlideAdd, this).on("slideremove", this._onSlideRemove, this).on("slidemodeenter", this._onContainerSlideModeEnter, this), this._playerListeners = this.events.group().on("prev", this._onPrev, this).on("next", this._onNext, this), document.addEventListener("keydown", c(this, "_onKeyDown"))
	        }, destroy: function() {
	            this._showerListeners.offAll(), this._playerListeners.offAll(), document.removeEventListener("keydown", c(this, "_onKeyDown")), this._currentSlide = null, this._currentSlideNumber = null, this._shower = null
	        }, next: function() {
	            return this.events.emit("next"), this
	        }, prev: function() {
	            return this.events.emit("prev"), this
	        }, first: function() {
	            return this.go(0), this
	        }, last: function() {
	            return this.go(this._shower.getSlidesCount() - 1), this
	        }, go: function(a) {
	            "number" != typeof a && (a = this._shower.getSlideIndex(a));
	            var b = this._shower.getSlidesCount(), c = this._currentSlide;
	            return a != this._currentSlideNumber && b > a && a >= 0 && (c && c.isActive() && c.deactivate(), c = this._shower.get(a), this._currentSlide = c, this._currentSlideNumber = a, c.isActive() || c.activate(), this.events.emit("activate", {
	                index: a,
	                slide: c
	            })), this
	        }, getCurrentSlide: function() {
	            return this._currentSlide
	        }, getCurrentSlideIndex: function() {
	            return this._currentSlideNumber
	        }, _onPrev: function() {
	            this._changeSlide(this._currentSlideNumber - 1)
	        }, _onNext: function() {
	            this._changeSlide(this._currentSlideNumber + 1)
	        }, _changeSlide: function(a) {
	            this.go(a)
	        }, _onSlideAdd: function(a) {
	            var b = a.get("slide");
	            b.events.on("activate", this._onSlideActivate, this)
	        }, _onSlideRemove: function(a) {
	            var b = a.get("slide");
	            b.events.off("activate", this._onSlideActivate, this)
	        }, _onSlideActivate: function(a) {
	            var b = a.get("slide"), c = this._shower.getSlideIndex(b);
	            this.go(c)
	        }, _onKeyDown: function(a) {
	            if (this._shower.isHotkeysEnabled() && !/^(?:button|input|select|textarea)$/i.test(a.target.tagName))switch (this.events.emit("keydown", {event: a}), a.which) {
	                case 33:
	                case 38:
	                case 37:
	                case 72:
	                case 75:
	                    if (a.altKey || a.ctrlKey || a.metaKey)return;
	                    a.preventDefault(), this.prev();
	                    break;
	                case 34:
	                case 40:
	                case 39:
	                case 76:
	                case 74:
	                    if (a.altKey || a.ctrlKey || a.metaKey)return;
	                    a.preventDefault(), this.next();
	                    break;
	                case 36:
	                    a.preventDefault(), this.first();
	                    break;
	                case 35:
	                    a.preventDefault(), this.last();
	                    break;
	                case 32:
	                    if (!this._shower.container.isSlideMode())return;
	                case 9:
	                    if (a.altKey || a.ctrlKey || a.metaKey)return;
	                    a.preventDefault(), a.shiftKey ? this.prev() : this.next()
	            }
	        }, _onContainerSlideModeEnter: function() {
	            this._currentSlide || this.go(0)
	        }
	    }), a(e)
	}), shower.modules.define("shower.defaultOptions", function(a, b) {
	    a({
	        container_selector: ".shower",
	        debug_mode: !1,
	        debug_mode_classname: "debug",
	        hotkeys: !0,
	        sessionstore_key: "shower",
	        slides_selector: ".shower .slide",
	        mode_full_classname: "full",
	        mode_list_classname: "list",
	        slide_title_element_selector: "H2",
	        slide_active_classname: "active",
	        slide_visited_classname: "visited"
	    })
	}), shower.modules.define("shower.slidesParser", ["Slide"], function(a, b) {
	    function c(a, c) {
	        var d = a.querySelectorAll(c);
	        return d = Array.prototype.slice.call(d), d.map(function(a, c) {
	            var d = new b(a);
	            return a.id || (a.id = c + 1), d
	        })
	    }

	    a(c)
	}), shower.modules.define("Slide", ["shower.defaultOptions", "Emitter", "Options", "slide.Layout", "slide.layoutFactory", "util.Store", "util.extend"], function(a, b, c, d, e, f, g, h) {
	    function i(a, b, e) {
	        this.events = new c, this.options = new d(b), this.layout = null, this.state = new g({
	            visited: 0,
	            index: null
	        }, e), this._content = a, this._isVisited = this.state.get("visited") > 0, this._isActive = !1, this.init()
	    }

	    h(i.prototype, {
	        init: function() {
	            this.layout = "string" == typeof this._content ? new f.createLayout({content: this._content}) : new e(this._content, this.options), this.layout.setParent(this), this._setupListeners()
	        }, destroy: function() {
	            this._clearListeners(), this._isActive = null, this.options = null, this.layout.destroy()
	        }, activate: function() {
	            this._isActive = !0;
	            var a = this.state.get("visited");
	            return this.state.set("visited", ++a), this.events.emit("activate", {slide: this}), this
	        }, deactivate: function() {
	            return this._isActive = !1, this.events.emit("deactivate", {slide: this}), this
	        }, isActive: function() {
	            return this._isActive
	        }, isVisited: function() {
	            return this.state.get("visited") > 0
	        }, getTitle: function() {
	            return this.layout.getTitle()
	        }, setTitle: function(a) {
	            return this.layout.setTitle(a), this
	        }, getId: function() {
	            return this.layout.getElement().id
	        }, getContent: function() {
	            return this.layout.getContent()
	        }, _setupListeners: function() {
	            this.layoutListeners = this.layout.events.group().on("click", this._onSlideClick, this)
	        }, _clearListeners: function() {
	            this.layoutListeners.offAll()
	        }, _onSlideClick: function() {
	            this.activate(), this.events.emit("click", {slide: this})
	        }
	    }), a(i)
	}), shower.modules.define("slide.Layout", ["Options", "shower.defaultOptions", "Emitter", "util.bound", "util.extend"], function(a, b, c, d, e, f) {
	    function g(a, e) {
	        this.options = new b({
	            title_element_selector: c.slide_title_element_selector,
	            active_classname: c.slide_active_classname,
	            visited_classname: c.slide_visited_classname
	        }, e), this.events = new d, this._element = a, this._parent = null, this._parentElement = null, this.init()
	    }

	    f(g.prototype, {
	        init: function() {
	            var a = this._element.parentNode;
	            a ? this._parentElement = a : this.setParentElement(a)
	        }, destroy: function() {
	            this.setParent(null)
	        }, setParent: function(a) {
	            this._parent != a && (this._clearListeners(), this._parent = a, this._parent && this._setupListeners(), this.events.emit("parentchange", {parent: a}))
	        }, getParent: function() {
	            return this._parent
	        }, setParentElement: function(a) {
	            a != this._parentElement && (this._parentElement = a, a.appendChild(this._element), this.events.emit("parentelementchange", {parentElement: a}))
	        }, getParentElement: function() {
	            return this._parentElement
	        }, getElement: function() {
	            return this._element
	        }, setTitle: function(a) {
	            var b = this.options.get("title_element_selector"), c = this._element.querySelector(b);
	            c ? c.innerHTML = a : (c = document.createElement(b), c.innerHTML = a, this._element.insertBefore(c, this._element.firstChild))
	        }, getTitle: function() {
	            var a = this.options.get("title_element_selector"), b = this._element.querySelector(a);
	            return b ? b.textContent : null
	        }, getData: function(a) {
	            var b = this._element;
	            return b.dataset ? b.dataset[a] : b.getAttribute("data-" + a)
	        }, getContent: function() {
	            return this._element.innerHTML
	        }, _setupListeners: function() {
	            this._slideListeners = this._parent.events.group().on("activate", this._onSlideActivate, this).on("deactivate", this._onSlideDeactivate, this), this._element.addEventListener("click", e(this, "_onSlideClick"), !1)
	        }, _clearListeners: function() {
	            this._slideListeners && this._slideListeners.offAll(), this._element.removeEventListener("click", e(this, "_onSlideClick"))
	        }, _onSlideActivate: function() {
	            this._element.classList.add(this.options.get("active_classname"))
	        }, _onSlideDeactivate: function() {
	            var a = this._element.classList;
	            a.remove(this.options.get("active_classname")), a.add(this.options.get("visited_classname"))
	        }, _onSlideClick: function() {
	            this.events.emit("click")
	        }
	    }), a(g)
	}), shower.modules.define("slide.layoutFactory", ["slide.Layout", "util.extend"], function(a, b, c) {
	    var d = {};
	    c(d, {
	        createLayout: function(a) {
	            a = a || {};
	            var e = d._createElement(c({content: "", contentType: "slide"}, a));
	            return new b(e)
	        }, _createElement: function(a) {
	            var b = document.createElement("section");
	            return b.innerHTML = a.content, b.classList.add(a.contentType), b
	        }
	    }), a(d)
	}), shower.modules.define("util.SessionStore", ["util.Store", "util.inherit"], function(a, b, c) {
	    function d(a, b) {
	        this._storageKey = a;
	        var c = this._loadFromStorage() || b;
	        d["super"].constructor.call(this, c)
	    }

	    c(d, b, {
	        set: function(a, b) {
	            d["super"].set.call(this, a, b), this._saveToStorage()
	        }, unset: function(a) {
	            d["super"].unset.call(this, a), this._saveToStorage()
	        }, _saveToStorage: function() {
	            window.sessionStorage.setItem(this._storageKey, JSON.stringify(this.getAll()))
	        }, _loadFromStorage: function() {
	            var a = window.sessionStorage.getItem(this._storageKey);
	            return a && JSON.parse(a)
	        }
	    }), a(d)
	}), shower.modules.define("util.Store", ["util.extend"], function(a, b) {
	    function c(a) {
	        this._data = a || {};
	        for (var c = 1, d = arguments.length; d > c; c++)b(this._data, arguments[c] || {})
	    }

	    b(c.prototype, {
	        get: function(a, b) {
	            return this._data.hasOwnProperty(a) ? this._data[a] : b
	        }, getAll: function() {
	            return b({}, this._data)
	        }, set: function(a, b) {
	            return this._data[a] = b, this
	        }, unset: function(a) {
	            if (!this._data.hasOwnProperty(a))throw new Error(a + " not found.");
	            return delete this._data[a], this
	        }, destroy: function() {
	            this._data = {}
	        }
	    }), a(c)
	}), shower.modules.define("util.bound", function(a) {
	    function b(a, b) {
	        return a["__bound_" + b] || (a["__bound_" + b] = a[b].bind(a))
	    }

	    a(b)
	}), shower.modules.define("util.extend", function(a) {
	    function b(a) {
	        if (!a)throw new Error("util.extend: Target not found");
	        return "undefined" == typeof Object.assign ? c.apply(null, arguments) : Object.assign.apply(null, arguments)
	    }

	    function c(a) {
	        for (var b = 1, c = arguments.length; c > b; b++) {
	            var d = arguments[b];
	            for (var e in d)d.hasOwnProperty(e) && (a[e] = d[e])
	        }
	        return a
	    }

	    a(b)
	}), shower.modules.define("util.inherit", ["util.extend"], function(a, b) {
	    var c = function(a, c, d) {
	        return a.prototype = Object.create(c.prototype), a.prototype.constructor = a, a["super"] = c.prototype, a["super"].constructor = c, d && b(a.prototype, d), a.prototype
	    };
	    a(c)
	}), shower.modules.define("shower-next", ["shower", "Emitter", "util.extend"], function(a, b, c, d) {
	    function e(a, b) {
	        b = b || {}, this.events = new c({context: this}), this._shower = a, this._elementsSelector = b.selector || g, this._elements = [], this._innerComplete = 0, this._setupListeners(), -1 != this._shower.player.getCurrentSlideIndex() && this._onSlideActivate()
	    }

	    var f = "shower-timer", g = ".next";
	    d(e.prototype, {
	        destroy: function() {
	            this._clearListeners(), this._elements = null, this._elementsSelector = null, this._innerComplete = null, this._shower = null
	        }, next: function() {
	            if (!this._elements.length)throw new Error("Inner nav elements not found.");
	            return this._innerComplete++, this._go(), this.events.emit("next"), this
	        }, prev: function() {
	            if (!this._elements.length)throw new Error("Inner nav elements not found.");
	            return this._innerComplete--, this._go(), this.events.emit("prev"), this
	        }, getLength: function() {
	            return this._elements = this._getElements(), this._elements.length
	        }, getComplete: function() {
	            return this._innerComplete
	        }, _setupListeners: function() {
	            var a = this._shower;
	            this._showerListeners = a.events.group().on("destroy", this.destroy, this), this._playerListeners = a.player.events.group().on("activate", this._onSlideActivate, this).on("next", this._onNext, this).on("prev", this._onPrev, this);
	            var c = b.plugins.get(f, a);
	            c ? this._setupTimerPluginListener(c) : this._pluginsListeners = b.plugins.events.group().on("add", function(a) {
	                a.get("name") === f && (this._setupTimerPluginListener(), this._pluginsListeners.offAll())
	            }, this)
	        }, _setupTimerPluginListener: function(a) {
	            if (!a) {
	                b.plugins.get(f, this._shower)
	            }
	            a.events.on("next", this._onNext, this, 100)
	        }, _clearListeners: function() {
	            this._showerListeners.offAll(), this._playerListeners.offAll(), this._pluginsListeners && this._pluginsListeners.offAll()
	        }, _getElements: function() {
	            var a = this._shower.player.getCurrentSlide().layout, b = a.getElement();
	            return Array.prototype.slice.call(b.querySelectorAll(this._elementsSelector))
	        }, _onNext: function(a) {
	            var b = this._elements.length, c = this._shower.container.isSlideMode();
	            c && b && this._innerComplete < b && (a.preventDefault(), this.next())
	        }, _onPrev: function(a) {
	            var b = this._elements.length, c = (this._shower.container.isSlideMode(), this._innerComplete);
	            b && b > c && c > 0 && (a.preventDefault(), this.prev())
	        }, _go: function() {
	            for (var a = 0, b = this._elements.length; b > a; a++) {
	                var c = this._elements[a];
	                a < this._innerComplete ? c.classList.add("active") : c.classList.remove("active")
	            }
	        }, _onSlideActivate: function() {
	            this._elements = this._getElements(), this._innerComplete = this._getInnerComplete()
	        }, _getInnerComplete: function() {
	            return this._elements.filter(function(a) {
	                return a.classList.contains("active")
	            }).length
	        }
	    }), a(e)
	}), shower.modules.require(["shower"], function(a) {
	    a.plugins.add("shower-next")
	}), shower.modules.define("shower-progress", ["util.extend"], function(a, b) {
	    function c(a, b) {
	        b = b || {}, this._shower = a, this._playerListeners = null, this._element = null, this._elementSelector = b.selector || ".progress";
	        var c = this._shower.container.getElement();
	        this._element = c.querySelector(this._elementSelector), this._element && (this._setupListeners(), this._element.setAttribute("role", "progressbar"), this._element.setAttribute("aria-valuemin", "0"),
	            this._element.setAttribute("aria-valuemax", "100"), this.updateProgress())
	    }

	    b(c.prototype, {
	        destroy: function() {
	            this._clearListeners(), this._shower = null
	        }, updateProgress: function() {
	            var a = this._shower.getSlidesCount(), b = this._shower.player.getCurrentSlideIndex(), c = 100 / (a - 1) * b;
	            this._element && (this._element.style.width = c.toFixed(2) + "%", this._element.setAttribute("aria-valuenow", c.toFixed()), this._element.setAttribute("aria-valuetext", "Slideshow Progress: " + c.toFixed() + "%"))
	        }, _setupListeners: function() {
	            var a = this._shower;
	            this._showerListeners = a.events.group().on("destroy", this.destroy, this), this._playerListeners = a.player.events.group().on("activate", this._onSlideChange, this)
	        }, _clearListeners: function() {
	            this._showerListeners && this._showerListeners.offAll(), this._playerListeners && this._playerListeners.offAll()
	        }, _onSlideChange: function() {
	            this.updateProgress()
	        }
	    }), a(c)
	}), shower.modules.require(["shower"], function(a) {
	    a.plugins.add("shower-progress")
	}), shower.modules.define("shower-timer", ["shower", "Emitter", "util.extend"], function(a, b, c, d) {
	    function e(a) {
	        this.events = new c, this._shower = a, this._timer = null, this._showerListeners = null, this._playerListeners = null, this._pluginsListeners = null, this._setupListeners()
	    }

	    var f = "shower-next";
	    d(e.prototype, {
	        destroy: function() {
	            this._clearTimer(), this._clearListeners(), this._shower = null
	        }, run: function(a) {
	            this._initTimer(a)
	        }, stop: function() {
	            this._clearTimer()
	        }, _setupListeners: function() {
	            var a = this._shower;
	            this.events.on("next", this._onNext, this), this._showerListeners = a.events.group().on("destroy", this.destroy, this), this._playerListeners = a.player.events.group().on("keydown", this._clearTimer, this).on("activate", this._onSlideActivate, this), this._nextPlugin = b.plugins.get(f, a), this._nextPlugin || (this._pluginsListeners = a.plugins.events.group().on("pluginadd", function(b) {
	                b.get("name") === f && (this._nextPlugin = a.plugins.get(f), this._pluginsListeners.offAll())
	            }, this)), -1 != a.player.getCurrentSlideIndex() && this._onSlideActivate()
	        }, _clearListeners: function() {
	            this._showerListeners.offAll(), this._playerListeners.offAll()
	        }, _onSlideActivate: function() {
	            this._clearTimer();
	            var a = this._shower.player.getCurrentSlide();
	            if (this._shower.container.isSlideMode() && a.state.get("visited") < 2) {
	                var b = a.layout.getData("timing");
	                b && /^(\d{1,2}:)?\d{1,3}$/.test(b) && (-1 !== b.indexOf(":") ? (b = b.split(":"), b = 1e3 * (60 * parseInt(b[0], 10) + parseInt(b[1], 10))) : b = 1e3 * parseInt(b, 10), 0 !== b && this._initTimer(b))
	            }
	        }, _initTimer: function(a) {
	            var b = this.events, c = (this._shower, this._nextPlugin);
	            c && c.getLength() && c.getLength() != c.getComplete() && (a /= c.getLength() + 1), this._timer = setInterval(function() {
	                b.emit("next")
	            }, a)
	        }, _clearTimer: function() {
	            this._timer && (clearInterval(this._timer), this._timer = null)
	        }, _onNext: function() {
	            this._clearTimer(), this._shower.player.next()
	        }
	    }), a(e)
	}), shower.modules.require(["shower"], function(a) {
	    a.plugins.add("shower-timer")
	}), shower.modules.define("shower-touch", ["util.extend"], function(a, b) {
	    function c(a, b) {
	        b = b || {}, this._shower = a, this._setupListeners()
	    }

	    var d = ["VIDEO", "AUDIO", "A", "BUTTON", "INPUT"];
	    b(c.prototype, {
	        destroy: function() {
	            this._clearListeners(), this._shower = null
	        }, _setupListeners: function() {
	            var a = this._shower;
	            this._showerListeners = a.events.group().on("add", this._onSlideAdd, this), this._bindedTouchStart = this._onTouchStart.bind(this), this._bindedTouchMove = this._onTouchMove.bind(this), this._shower.getSlides().forEach(this._addTouchStartListener, this), document.addEventListener("touchmove", this._bindedTouchMove, !0)
	        }, _clearListeners: function() {
	            this._showerListeners.offAll(), this._shower.getSlides().forEach(this._removeTouchStartListener, this), document.removeEventListener("touchmove", this._bindedTouchMove, !1)
	        }, _onSlideAdd: function(a) {
	            var b = a.get("slide");
	            this._addTouchStartListener(b)
	        }, _addTouchStartListener: function(a) {
	            var b = a.layout.getElement();
	            b.addEventListener("touchstart", this._bindedTouchStart, !1)
	        }, _removeTouchStartListener: function(a) {
	            var b = a.layout.getElement();
	            b.removeEventListener("touchstart", this._bindedTouchStart, !1)
	        }, _onTouchStart: function(a) {
	            var b, c = this._shower, d = c.container.isSlideMode(), e = a.target, f = this._getSlideByElement(a.currentTarget);
	            f && (d && !this._isInteractiveElement(e) && (a.preventDefault(), b = a.touches[0].pageX, b > window.innerWidth / 2 ? c.player.next() : c.player.prev()), d || f.activate())
	        }, _onTouchMove: function(a) {
	            this._shower.container.isSlideMode() && a.preventDefault()
	        }, _getSlideByElement: function(a) {
	            for (var b = this._shower.getSlides(), c = null, d = 0, e = b.length; e > d; d++)if (a.id === b[d].getId()) {
	                c = this._shower.get(d);
	                break
	            }
	            return c
	        }, _isInteractiveElement: function(a) {
	            return d.some(function(b) {
	                return b === a.tagName
	            })
	        }
	    }), a(c)
	}), shower.modules.require(["shower"], function(a) {
	    a.plugins.add("shower-touch")
	});


/***/ }
/******/ ]);