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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import \"./css/app.css\";\nvar doc = document;\n\nvar addTag = function addTag(parentTag, nameTag, classNameTag) {\n  var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var newTag = doc.createElement(nameTag);\n  newTag.className = classNameTag;\n\n  if (text) {\n    newTag.innerHTML = text;\n  }\n\n  parentTag.append(newTag);\n  return newTag;\n};\n\nvar main = addTag(document.body, 'main', 'profile'); // document.body.prepend(main);\n// let coment = document.createTextNode(<!-- Section main -->);\n// main.append(coment);\n// -- Section main -\n\nvar section = addTag(main, 'section', 'section main_section section_black'); // main.append(section);\n\nvar article = addTag(section, 'article', 'main-articles main-articles_white'); // section.append(article);\n\nvar h1 = addTag(article, 'h1', 'main-articles__title', 'Helen Smyrnova'); // article.append(h1);\n\nvar ul = addTag(article, 'ul', 'main-articles__list'); // article.append(ul);\n\nfor (var i = 0; i < 4; i++) {\n  var li = addTag(ul, 'li', 'main-articles__item');\n}\n\nvar elementslist = document.querySelectorAll('li.main-articles__item');\nelementslist[0].innerHTML = 'I study HTML5, CSS3, JS';\nelementslist[1].innerHTML = 'Experience creating a site HTML page based on design layouts';\nelementslist[2].innerHTML = 'Basic knowledge of English';\nelementslist[3].innerHTML = 'Basic knowledge of some programming languages';\nvar img = addTag(section, 'img', 'section__img');\nimg.setAttribute('src', 'assets/pic.jpg'); //------ Section About ------\n\nsection = addTag(main, 'section', 'section section-about');\narticle = addTag(section, 'article', 'about-article');\nvar h2 = addTag(article, 'h2', 'title', 'About your product');\nvar p = addTag(article, 'p', 'about-article__text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facilis fuga, illo at. Natus eos, eligendi illum rerum omnis porro ex, magni, explicabo veniam incidunt in quam sapiente ut ipsum.');\np = addTag(article, 'p', 'about-article__text', 'Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.');\nimg = addTag(section, 'img', 'about__img');\nimg.setAttribute('src', 'assets/video.png'); //-- Section Dignity --\n\nsection = addTag(main, 'section', 'section section-dignity');\nh2 = addTag(section, 'h2', 'title title_center', 'Personal qualities and skills');\narticle = addTag(section, 'article', 'dignity-article');\nvar div = addTag(article, 'div', 'dignity-article__column');\nul = addTag(div, 'ul', 'dignity-article__list');\n\nfor (var _i = 0; _i < 3; _i++) {\n  var _li = addTag(ul, 'li', 'dignity-article__item');\n}\n\nvar divClon = div.cloneNode(true);\narticle.append(divClon);\nelementslist = document.querySelectorAll('li.dignity-article__item');\nelementslist[0].innerHTML = 'Analytical mind.';\nelementslist[1].innerHTML = 'Responsibility.';\nelementslist[2].innerHTML = 'Attention to detail.';\nelementslist[3].innerHTML = 'Creativity.';\nelementslist[4].innerHTML = 'Orientation on the result.';\nelementslist[5].innerHTML = 'I want to learn new technologies and tools.'; // -- Section  Scrinshots --\n\nsection = addTag(main, 'section', 'section');\nh2 = addTag(section, 'h2', 'title title_center', 'Scrinshots');\narticle = addTag(section, 'article', 'scrinshots-article');\nvar divColumn = addTag(article, 'div', 'scrinshots-article__column');\nvar divRow = addTag(divColumn, 'div', 'scrinshots-article__row');\nimg = addTag(divRow, 'img', 'scrinshots-article__img');\nimg.setAttribute('src', 'assets/scrinshot_image.png');\nvar divChild = addTag(divRow, 'div', 'scrinshots-article__description');\nvar h3 = addTag(divChild, 'h3', 'scrinshots-article__title', 'The description for the image');\np = addTag(divChild, 'p', 'scrinshots-article__text', 'Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.');\nvar divRowClon = divRow.cloneNode(true);\ndivColumn.append(divRowClon);\nvar divColumnClon = divColumn.cloneNode(true);\narticle.append(divColumnClon);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });