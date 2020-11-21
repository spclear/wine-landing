/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/common/slider.js":
/*!*********************************!*\
  !*** ./src/js/common/slider.js ***!
  \*********************************/
/*! exports provided: toggleActiveClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleActiveClass", function() { return toggleActiveClass; });
function toggleActiveClass(array, itemIndex) {
  array.forEach((item, index) => {
    if (itemIndex === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger-menu */ "./src/js/modules/burger-menu.js");
/* harmony import */ var _modules_carousel_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/carousel-slider */ "./src/js/modules/carousel-slider.js");
/* harmony import */ var _modules_fade_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fade-slider */ "./src/js/modules/fade-slider.js");




document.addEventListener('DOMContentLoaded', () => {

  // burger menu
  Object(_modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__["configureBurger"])();

  // New Wine slider 
  const newWineContentSelectors = [
    '.new-wine__item-info',
    '.new-wine__preview-slider .slider__content-image',
  ];
  Object(_modules_fade_slider__WEBPACK_IMPORTED_MODULE_2__["configureFadeSlider"])(newWineContentSelectors, '.new-wine .prev', '.new-wine .next');

  // Featured Events slider 
  Object(_modules_fade_slider__WEBPACK_IMPORTED_MODULE_2__["configureFadeSlider"])(['.featured .slider__item'], '.featured .prev', '.featured .next');

  // Client Review slider
  Object(_modules_carousel_slider__WEBPACK_IMPORTED_MODULE_1__["configureCarousel"])('.review__slider-content', '.review .slider__nav-item');

});

/***/ }),

/***/ "./src/js/modules/burger-menu.js":
/*!***************************************!*\
  !*** ./src/js/modules/burger-menu.js ***!
  \***************************************/
/*! exports provided: configureBurger, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureBurger", function() { return configureBurger; });
function configureBurger() {
  const openButton = document.querySelector('#burger');
  const menuBlock = document.querySelector('.header__nav');
  const closeButton = document.querySelector('.header__nav #close');

  openButton.addEventListener('click', () => {
    menuBlock.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    menuBlock.classList.remove('active');
  })
}

/* harmony default export */ __webpack_exports__["default"] = (configureBurger);

/***/ }),

/***/ "./src/js/modules/carousel-slider.js":
/*!*******************************************!*\
  !*** ./src/js/modules/carousel-slider.js ***!
  \*******************************************/
/*! exports provided: configureCarousel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureCarousel", function() { return configureCarousel; });
/* harmony import */ var _common_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/slider */ "./src/js/common/slider.js");


function configureCarousel(containerSelector, navItemSelector) {
  const navItems = document.querySelectorAll(navItemSelector);
  const sliderContent = document.querySelector(containerSelector);

  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      Object(_common_slider__WEBPACK_IMPORTED_MODULE_0__["toggleActiveClass"])(navItems, index);
      sliderContent.style.transform = `translateX(-${100 * (index)}%)`;
    })
  })
}

/* harmony default export */ __webpack_exports__["default"] = (configureCarousel);

/***/ }),

/***/ "./src/js/modules/fade-slider.js":
/*!***************************************!*\
  !*** ./src/js/modules/fade-slider.js ***!
  \***************************************/
/*! exports provided: configureFadeSlider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureFadeSlider", function() { return configureFadeSlider; });
/* harmony import */ var _common_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/slider */ "./src/js/common/slider.js");


function configureFadeSlider(contentSelectors, prev, next) {
  const prevButton = document.querySelector(prev);
  const nextButton = document.querySelector(next);
  const itemsArr = createMultiselectorsArray(contentSelectors);
  const numberOfElems = itemsArr[0].length;
  
  let currIndex = 0;

  // init 
  itemsArr.forEach(arr => Object(_common_slider__WEBPACK_IMPORTED_MODULE_0__["toggleActiveClass"])(arr, currIndex));

  if (!isSameArrLength(itemsArr)) {
    console.log('Number of items for each selector is different!');
    return;
  }

  prevButton.addEventListener('click', () => {
    currIndex--;
    
    if (currIndex < 0) {
      currIndex = numberOfElems - 1;
    }

    itemsArr.forEach(arr => Object(_common_slider__WEBPACK_IMPORTED_MODULE_0__["toggleActiveClass"])(arr, currIndex));
  });

  nextButton.addEventListener('click', () => {
    currIndex++;
    
    if (currIndex === numberOfElems) {
      currIndex = 0;
    }

    itemsArr.forEach(arr => Object(_common_slider__WEBPACK_IMPORTED_MODULE_0__["toggleActiveClass"])(arr, currIndex));
  });
}

function createMultiselectorsArray(contentSelectors) {
  const contentArr = [];

  contentSelectors.forEach(selector => {
    let items = document.querySelectorAll(selector);
    contentArr.push(items);
  });

  return contentArr;
}

// Check if all the inner arrays have the same length
function isSameArrLength(arr) {
  const length = arr[0].length;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length !== length) {
      return false;
    }
  }

  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (configureFadeSlider);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map