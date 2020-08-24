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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./css/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/index.css?");

/***/ }),

/***/ "./img/asc.png":
/*!*********************!*\
  !*** ./img/asc.png ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/asc.png\");\n\n//# sourceURL=webpack:///./img/asc.png?");

/***/ }),

/***/ "./img/desc.png":
/*!**********************!*\
  !*** ./img/desc.png ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/desc.png\");\n\n//# sourceURL=webpack:///./img/desc.png?");

/***/ }),

/***/ "./img/filter-icon.png":
/*!*****************************!*\
  !*** ./img/filter-icon.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/filter-icon.png\");\n\n//# sourceURL=webpack:///./img/filter-icon.png?");

/***/ }),

/***/ "./img/sort-arrow.png":
/*!****************************!*\
  !*** ./img/sort-arrow.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/sort-arrow.png\");\n\n//# sourceURL=webpack:///./img/sort-arrow.png?");

/***/ }),

/***/ "./js/create-worker.js":
/*!*****************************!*\
  !*** ./js/create-worker.js ***!
  \*****************************/
/*! exports provided: addNewWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNewWorker\", function() { return addNewWorker; });\n/* harmony import */ var _set_local_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-local-worker */ \"./js/set-local-worker.js\");\n/* harmony import */ var _worker_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-factory */ \"./js/worker-factory.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./js/modal.js\");\n\n\n\n\nconst addWorker = () => {\n  Object(_modal__WEBPACK_IMPORTED_MODULE_2__[\"toggleModal\"])(true);\n\n  _modal__WEBPACK_IMPORTED_MODULE_2__[\"savebtn\"].addEventListener('click', () => {\n    const newWorker = createWorker();\n    if (newWorker) Object(_set_local_worker__WEBPACK_IMPORTED_MODULE_0__[\"setWorker\"])(newWorker);\n  });\n}\n\nconst createWorker = () => {  \n  const firstName = document.querySelector('#first-name').value;\n  const lastName = document.querySelector('#last-name').value;\n  const position = document.querySelector('#inputGroupSelect').value;\n\n  if (validateName(firstName) && validateName(lastName)) {\n    return new _worker_factory__WEBPACK_IMPORTED_MODULE_1__[\"NewWorker\"](firstName, lastName, position);\n  }\n  return null;\n}\n\nconst validateName = (str) => str.replace(/\\s/g, '').length > 2;\n\nconst addNewWorker = () => {\n  const addNewbtn = document.querySelector(\"#add-new\");\n  addNewbtn.addEventListener('click', addWorker);\n}\n\n\n//# sourceURL=webpack:///./js/create-worker.js?");

/***/ }),

/***/ "./js/delete-worker.js":
/*!*****************************!*\
  !*** ./js/delete-worker.js ***!
  \*****************************/
/*! exports provided: deleteWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteWorker\", function() { return deleteWorker; });\n/* harmony import */ var _get_local_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-local-worker */ \"./js/get-local-worker.js\");\n/* harmony import */ var _set_local_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-local-worker */ \"./js/set-local-worker.js\");\n/* harmony import */ var _display_workers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-workers */ \"./js/display-workers.js\");\n\n\n\n\nconst deleteWorker = (event) => {\n  const btnIndex = parseInt(event.target.dataset.index, 10);\n  const workers = Object(_get_local_worker__WEBPACK_IMPORTED_MODULE_0__[\"getWorkers\"])();\n  const filteredWorkers = workers.filter(worker => worker.id !== btnIndex);\n\n  const workersJson = JSON.stringify(filteredWorkers);\n\n  localStorage.setItem('workers', workersJson);\n\n  if (localStorage.getItem('sortedWorkers')) {\n    Object(_set_local_worker__WEBPACK_IMPORTED_MODULE_1__[\"setFilterWorkers\"])(filteredWorkers);\n  }\n\n  Object(_display_workers__WEBPACK_IMPORTED_MODULE_2__[\"displayWorkers\"])(Object(_get_local_worker__WEBPACK_IMPORTED_MODULE_0__[\"getFilterWorkers\"])());\n}\n\n//# sourceURL=webpack:///./js/delete-worker.js?");

/***/ }),

/***/ "./js/display-header.js":
/*!******************************!*\
  !*** ./js/display-header.js ***!
  \******************************/
/*! exports provided: displayHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayHeader\", function() { return displayHeader; });\n/* harmony import */ var _sort_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort-data */ \"./js/sort-data.js\");\n\n\nconst displayHeader = (workers, operate) => {\n  const tblHead = document.querySelector('#thead');\n  tblHead.innerHTML = '';\n\n  const tr = document.createElement('tr');\n\n  const tableHeaders = {\n    id: 'ID',\n    firstName: 'First Name',\n    lastName: 'Last Name',\n    position: 'Position',\n    createdDate: 'Created Date',\n  }\n  \n  const createThead = (key) => {\n    const th = document.createElement('th');\n\n    const span = document.createElement('span');\n    span.innerHTML = tableHeaders[key];\n\n    const img = document.createElement('img');\n    img.className = 'filters__arrow initial__arrow';\n    img.src = 'img/sort-arrow.png';\n    img.dataset.key = key;\n    img.addEventListener('click', () => Object(_sort_data__WEBPACK_IMPORTED_MODULE_0__[\"setState\"])(img, img.dataset.key, operate));\n    \n    th.appendChild(span);\n    th.appendChild(img);\n    tr.appendChild(th);\n  }\n\n  const createOperateTh = () => {\n    const thOperate = document.createElement('th');\n    thOperate.innerHTML = 'Operate';\n    tr.appendChild(thOperate);\n  }\n\n  if (workers.length === 0) {\n    Object.keys(tableHeaders).forEach(key => {\n      createThead(key);\n    })\n    createOperateTh();\n  } else if (workers !== null) {\n    Object.keys(workers[0]).forEach(key => {\n      if (tableHeaders.hasOwnProperty(key)) {\n        createThead(key);\n      }\n    })\n    if (operate === true) {\n      createOperateTh();\n    }\n  }\n\n  tblHead.appendChild(tr);\n\n  return tblHead;\n}\n\n//# sourceURL=webpack:///./js/display-header.js?");

/***/ }),

/***/ "./js/display-workers.js":
/*!*******************************!*\
  !*** ./js/display-workers.js ***!
  \*******************************/
/*! exports provided: displayWorkers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayWorkers\", function() { return displayWorkers; });\n/* harmony import */ var _edit_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-worker */ \"./js/edit-worker.js\");\n/* harmony import */ var _delete_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-worker */ \"./js/delete-worker.js\");\n/* harmony import */ var _display_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-header */ \"./js/display-header.js\");\n\n\n\n\nconst displayWorkers = (workers, operate = true) => {\n  Object(_display_header__WEBPACK_IMPORTED_MODULE_2__[\"displayHeader\"])(workers, operate);\n\n  const tblBody = document.querySelector('#tbody');\n  tblBody.innerHTML = '';\n\n  if (workers.length === 0) {\n    const tblRow = document.createElement(\"tr\");\n    const td = document.createElement(\"td\");\n\n    td.setAttribute(\"colspan\", 6);\n    td.innerHTML = 'Nothing was found for your query.';\n\n    tblRow.appendChild(td);\n    tblBody.appendChild(tblRow);\n\n  } else if (workers !== null) {\n    workers.forEach(item => {\n      const tblRow = document.createElement(\"tr\");\n      \n      Object.values(item).forEach(value => {\n        const cell = document.createElement(\"td\")\n        cell.textContent = value;\n        tblRow.appendChild(cell);\n      });\n\n      if (operate === true) {\n        const btnCol = document.createElement(\"td\");\n\n        const btnWrapper = document.createElement(\"div\")\n        btnWrapper.className = \"table__btn\";\n\n        const btnEdit = document.createElement(\"button\");\n        btnEdit.innerHTML = \"Edit\";\n        btnEdit.className = \"btn btn-outline-primary edit-btn\";\n        btnEdit.dataset.index = item.id;\n        btnEdit.addEventListener('click', _edit_worker__WEBPACK_IMPORTED_MODULE_0__[\"editWorker\"]);\n    \n        const btnDelete = document.createElement(\"button\");\n        btnDelete.innerHTML = \"Delete\";\n        btnDelete.className = \"btn btn-outline-danger delete-btn\";\n        btnDelete.dataset.index = item.id;\n        btnDelete.addEventListener('click', _delete_worker__WEBPACK_IMPORTED_MODULE_1__[\"deleteWorker\"]);\n\n        btnWrapper.appendChild(btnEdit);\n        btnWrapper.appendChild(btnDelete);\n      \n        btnCol.appendChild(btnWrapper);\n        tblRow.appendChild(btnCol);\n      }\n      tblBody.appendChild(tblRow);\n    });\n  }\n  return tblBody;\n}\n\n//# sourceURL=webpack:///./js/display-workers.js?");

/***/ }),

/***/ "./js/edit-worker.js":
/*!***************************!*\
  !*** ./js/edit-worker.js ***!
  \***************************/
/*! exports provided: editWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editWorker\", function() { return editWorker; });\n/* harmony import */ var _get_local_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-local-worker */ \"./js/get-local-worker.js\");\n/* harmony import */ var _set_local_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-local-worker */ \"./js/set-local-worker.js\");\n/* harmony import */ var _display_workers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-workers */ \"./js/display-workers.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./js/modal.js\");\n\n\n\n\n\nconst editWorker = (event) => {\n  const btnIndex = parseInt(event.target.dataset.index, 10);\n  const workers = Object(_get_local_worker__WEBPACK_IMPORTED_MODULE_0__[\"getWorkers\"])();\n\n  const [filteredWorker] = workers.filter(worker => worker.id === btnIndex);\n  const workerIndex = workers.findIndex(worker => worker.id === btnIndex);\n\n  const firstName = document.querySelector('#first-name');\n  const lastName = document.querySelector('#last-name');\n  const position = document.querySelector('#inputGroupSelect');\n\n  firstName.value = filteredWorker.firstName;\n  lastName.value = filteredWorker.lastName;\n  position.value = filteredWorker.position;\n\n  Object(_modal__WEBPACK_IMPORTED_MODULE_3__[\"toggleModal\"])(true);\n\n  _modal__WEBPACK_IMPORTED_MODULE_3__[\"savebtn\"].addEventListener('click', () => {\n    const firstName = document.querySelector('#first-name').value;\n    const lastName = document.querySelector('#last-name').value;\n    const position = document.querySelector('#inputGroupSelect').value;\n\n    filteredWorker.firstName = firstName;\n    filteredWorker.lastName = lastName;\n    filteredWorker.position = position;\n\n    workers.splice(workerIndex, 1, filteredWorker);\n    const workersJson = JSON.stringify(workers);\n\n    localStorage.setItem('workers', workersJson);\n\n    if (localStorage.getItem('sortedWorkers')) {\n      Object(_set_local_worker__WEBPACK_IMPORTED_MODULE_1__[\"setFilterWorkers\"])(workers);\n    } \n      \n    Object(_display_workers__WEBPACK_IMPORTED_MODULE_2__[\"displayWorkers\"])(workers);\n  });\n}\n\n//# sourceURL=webpack:///./js/edit-worker.js?");

/***/ }),

/***/ "./js/filter-in-column.js":
/*!********************************!*\
  !*** ./js/filter-in-column.js ***!
  \********************************/
/*! exports provided: initializeDropdownPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeDropdownPopup\", function() { return initializeDropdownPopup; });\n/* harmony import */ var _display_workers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-workers */ \"./js/display-workers.js\");\n/* harmony import */ var _get_local_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-local-worker */ \"./js/get-local-worker.js\");\n/* harmony import */ var _set_local_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-local-worker */ \"./js/set-local-worker.js\");\n\n\n\n\nconst dropBtn = document.querySelector(\"#drop-btn\");\nconst dropdown = document.querySelector(\"#dropdown\");\nconst dropdowns = document.querySelectorAll(\"#dropdown li\");\nconst inputColVal = document.querySelector('#input-col-val');\nconst cleanInputCol = document.querySelector(\"#clean-column\");\n\n\n\nconst changeAttr = (item) => {\n  const attrValue = item.getAttribute(\"value\");\n  getColFilterVal(attrValue);\n  dropdown.classList.remove(\"show\");\n  dropBtn.innerHTML = item.textContent;\n}\n\n\nconst getColFilterVal = (attr) => {\n  inputColVal.addEventListener('keydown', () => {\n    if (event.keyCode === 13) {\n      filterInColumn(attr, inputColVal.value.trim());\n    }\n  });\n}\n\n\nconst filterInColumn = (colName, value) => {\n  const workers = Object(_get_local_worker__WEBPACK_IMPORTED_MODULE_1__[\"getWorkers\"])();\n\n  const newValue = (colName === 'id') ? parseInt(value) : value;\n  const filteredWorkers = workers.filter(worker => worker[colName] === newValue);\n\n  Object(_set_local_worker__WEBPACK_IMPORTED_MODULE_2__[\"setFilterWorkers\"])(filteredWorkers);\n  Object(_display_workers__WEBPACK_IMPORTED_MODULE_0__[\"displayWorkers\"])(filteredWorkers);\n}\n\nconst initializeDropdownPopup = () => {\n  Array.from(dropdowns).forEach(item => {\n    item.addEventListener('click', () => changeAttr(item));\n  });\n  \n  dropBtn.addEventListener('click', () => {\n    dropdown.classList.toggle(\"show\");\n  });\n  \n  window.addEventListener('click', (event) => {\n    if (event.target !== dropBtn) {\n      if (dropdown.classList.contains(\"show\")) {\n        dropdown.classList.remove('show');\n      }\n    }\n  });\n  \n  cleanInputCol.addEventListener('click', () => {\n    inputColVal.value = \"\";\n    localStorage.removeItem('sortedWorkers');\n    Object(_display_workers__WEBPACK_IMPORTED_MODULE_0__[\"displayWorkers\"])(Object(_get_local_worker__WEBPACK_IMPORTED_MODULE_1__[\"getWorkers\"])());\n  });\n}\n\n\n//# sourceURL=webpack:///./js/filter-in-column.js?");

/***/ }),

/***/ "./js/get-local-worker.js":
/*!********************************!*\
  !*** ./js/get-local-worker.js ***!
  \********************************/
/*! exports provided: getWorkers, getFilterWorkers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWorkers\", function() { return getWorkers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilterWorkers\", function() { return getFilterWorkers; });\nconst getWorkers = () => {\n  const previousWorkers = localStorage.getItem('workers');\n  \n  if (previousWorkers !== null) {\n    const workers = JSON.parse(previousWorkers);\n    return workers;\n  }\n  return null;\n}\n\nconst getFilterWorkers = () => {\n  if (localStorage.getItem('sortedWorkers')) {\n    return JSON.parse(localStorage.getItem('sortedWorkers'));\n  } else return getWorkers();\n}\n\n\n//# sourceURL=webpack:///./js/get-local-worker.js?");

/***/ }),

/***/ "./js/hide-column.js":
/*!***************************!*\
  !*** ./js/hide-column.js ***!
  \***************************/
/*! exports provided: selectColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectColumn\", function() { return selectColumn; });\n/* harmony import */ var _get_local_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-local-worker */ \"./js/get-local-worker.js\");\n/* harmony import */ var _display_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-header */ \"./js/display-header.js\");\n/* harmony import */ var _set_local_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-local-worker */ \"./js/set-local-worker.js\");\n/* harmony import */ var _display_workers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-workers */ \"./js/display-workers.js\");\n\n\n\n\n\nconst filterBtn = document.querySelector('#filter-btn');\nconst filterList = document.querySelector(\"#filter-list\");\nconst filtersDropdown = document.querySelector('#filter-hide');\n\nconst ok = document.querySelector('#ok');\nconst all = document.querySelector('#all');\nconst clear = document.querySelector('#clear');\n\nconst inputCheckboxes = document.querySelectorAll(\"#filter-list input\");\n\nconst filterWorkers = (checkedArr, operate) => {\n  const workers = Object(_get_local_worker__WEBPACK_IMPORTED_MODULE_0__[\"getWorkers\"])();\n  const filteredWorkers = [];\n  workers.forEach(worker => {\n    Object.keys(worker).forEach((key) => {\n      if (!checkedArr.includes(key)) {\n        delete worker[key];\n      };\n    })\n    filteredWorkers.push(worker);\n  })\n  Object(_display_header__WEBPACK_IMPORTED_MODULE_1__[\"displayHeader\"])(filteredWorkers, operate);\n\n  Object(_set_local_worker__WEBPACK_IMPORTED_MODULE_2__[\"setFilterWorkers\"])(filteredWorkers);\n  Object(_display_workers__WEBPACK_IMPORTED_MODULE_3__[\"displayWorkers\"])(filteredWorkers, operate);\n}\n\nconst selectColumn = () => {\n\n  window.addEventListener('click', (event) => {\n    if (filtersDropdown.contains(event.target)) return;\n    return filterList.classList.remove(\"show\");\n  });\n  \n  filterBtn.addEventListener('click', () => {\n    filterList.classList.toggle(\"show\");\n  });\n  \n  all.addEventListener('click', () => {\n    Array.from(inputCheckboxes).forEach(item => item.checked = true);\n  });\n  \n  clear.addEventListener('click', () => {\n    Array.from(inputCheckboxes).forEach(item => item.checked = false);\n  })\n  \n  ok.addEventListener('click', () => {\n    const checkedArr = [];\n    let operate = false;\n    Array.from(inputCheckboxes).forEach(item => {\n      if (item.checked === true) {\n        if (item.id === 'operate') {\n          operate = true;\n        } else {\n          checkedArr.push(item.id);\n        }\n      }\n    })\n    filterWorkers(checkedArr, operate);\n    filterList.classList.remove('show');\n  })\n}\n\n\n//# sourceURL=webpack:///./js/hide-column.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_filter_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/filter-icon.png */ \"./img/filter-icon.png\");\n/* harmony import */ var _img_sort_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/sort-arrow.png */ \"./img/sort-arrow.png\");\n/* harmony import */ var _img_asc_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/asc.png */ \"./img/asc.png\");\n/* harmony import */ var _img_desc_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/desc.png */ \"./img/desc.png\");\n/* harmony import */ var _display_workers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-workers */ \"./js/display-workers.js\");\n/* harmony import */ var _get_local_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-local-worker */ \"./js/get-local-worker.js\");\n/* harmony import */ var _set_local_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set-local-worker */ \"./js/set-local-worker.js\");\n/* harmony import */ var _create_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-worker */ \"./js/create-worker.js\");\n/* harmony import */ var _filter_in_column__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-in-column */ \"./js/filter-in-column.js\");\n/* harmony import */ var _hide_column__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hide-column */ \"./js/hide-column.js\");\n/* harmony import */ var _search_by_key__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-by-key */ \"./js/search-by-key.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal */ \"./js/modal.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst main = () => {\n\n  const workers = [\n    {\n      id: 1,\n      firstName: \"John\",\n      lastName: \"Pool\",\n      position: \"Front-end dev\",\n      createdDate: \"11/12/2019\"\n    },\n    {\n      id: 2,\n      firstName: \"Mia\",\n      lastName: \"Chester\",\n      position: \"Front-end dev\",\n      createdDate: \"02/03/2020\"\n    },\n    {\n      id: 3,\n      firstName: \"James\",\n      lastName: \"Frazier\",\n      position: \"HR\",\n      createdDate: \"06/06/2020\"\n    },\n    {\n      id: 4,\n      firstName: \"Matt\",\n      lastName: \"Smith\",\n      position: \"Back-end dev\",\n      createdDate: \"07/17/2020\"\n    },\n    {\n      id: 5,\n      firstName: \"Joe\",\n      lastName: \"Cole\",\n      position: \"Tester\",\n      createdDate: \"01/08/2020\"\n    },\n    {\n      id: 6,\n      firstName: \"Ulyana\",\n      lastName: \"Kravchenko\",\n      position: \"Front-end dev\",\n      createdDate: \"03/07/2020\"\n    }\n  ];\n\n  if (!localStorage.getItem('workers')) {\n    workers.forEach(item => Object(_set_local_worker__WEBPACK_IMPORTED_MODULE_7__[\"setWorker\"])(item))\n  }\n\n  localStorage.removeItem('sortedWorkers');\n\n  console.log(Object(_get_local_worker__WEBPACK_IMPORTED_MODULE_6__[\"getWorkers\"])());\n  Object(_display_workers__WEBPACK_IMPORTED_MODULE_5__[\"displayWorkers\"])(Object(_get_local_worker__WEBPACK_IMPORTED_MODULE_6__[\"getWorkers\"])());\n\n  // init new worker button\n  Object(_create_worker__WEBPACK_IMPORTED_MODULE_8__[\"addNewWorker\"])();\n\n  // init dropdown modal \n  Object(_filter_in_column__WEBPACK_IMPORTED_MODULE_9__[\"initializeDropdownPopup\"])();\n\n  // init column selection\n  Object(_hide_column__WEBPACK_IMPORTED_MODULE_10__[\"selectColumn\"])();\n\n  // init table seach\n  Object(_search_by_key__WEBPACK_IMPORTED_MODULE_11__[\"searchTable\"])();\n\n  // init modal closing \n  Object(_modal__WEBPACK_IMPORTED_MODULE_12__[\"closeModal\"])();\n}\n\nwindow.addEventListener('load', main);\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/*! exports provided: savebtn, toggleModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"savebtn\", function() { return savebtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleModal\", function() { return toggleModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModal\", function() { return closeModal; });\nconst modal = document.querySelector('#modal-window');\nconst closeIcon = document.querySelector(\".close\");\nconst savebtn = document.querySelector(\"#modal-save-btn\");\n\nconst toggleModal = (isDisplay) => modal.style.display = isDisplay ? 'block' : 'none';\n\nconst closeModal = () => {\n  closeIcon.addEventListener('click', () => toggleModal(false));\n  window.addEventListener('click', () => {\n    if (event.target === modal) toggleModal(false)\n  });\n}\n\n\n//# sourceURL=webpack:///./js/modal.js?");

/***/ }),

/***/ "./js/search-by-key.js":
/*!*****************************!*\
  !*** ./js/search-by-key.js ***!
  \*****************************/
/*! exports provided: searchTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchTable\", function() { return searchTable; });\n/* harmony import */ var _get_local_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-local-worker */ \"./js/get-local-worker.js\");\n/* harmony import */ var _set_local_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-local-worker */ \"./js/set-local-worker.js\");\n/* harmony import */ var _display_workers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-workers */ \"./js/display-workers.js\");\n\n\n\n\nconst cleanInputKey = document.querySelector('#clean-key');\nconst inputKey = document.querySelector('#input-key');\n\nconst filterByKey = (value) => {\n  const workers = Object(_get_local_worker__WEBPACK_IMPORTED_MODULE_0__[\"getWorkers\"])();\n  const filteredWorkers = workers.filter(worker =>\n    Object.keys(worker).some(k => worker[k].toString().toLowerCase().includes(value.toLowerCase())));\n\n  Object(_set_local_worker__WEBPACK_IMPORTED_MODULE_1__[\"setFilterWorkers\"])(filteredWorkers);\n  Object(_display_workers__WEBPACK_IMPORTED_MODULE_2__[\"displayWorkers\"])(filteredWorkers);\n}\n\nconst searchTable = () => {\n  cleanInputKey.addEventListener('click', () => {\n    inputKey.value = \"\";\n    localStorage.removeItem('sortedWorkers');\n    Object(_display_workers__WEBPACK_IMPORTED_MODULE_2__[\"displayWorkers\"])(GetLocalWorker.getWorkers());\n  });\n\n  inputKey.addEventListener('keydown', () => {\n    if (event.keyCode === 13) {\n      filterByKey(inputKey.value.trim());\n    }\n  });\n}\n\n//# sourceURL=webpack:///./js/search-by-key.js?");

/***/ }),

/***/ "./js/set-local-worker.js":
/*!********************************!*\
  !*** ./js/set-local-worker.js ***!
  \********************************/
/*! exports provided: setWorker, setFilterWorkers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setWorker\", function() { return setWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFilterWorkers\", function() { return setFilterWorkers; });\n/* harmony import */ var _get_local_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-local-worker */ \"./js/get-local-worker.js\");\n\n\nconst setWorker = (newWorker) => {\n\n  const receivedWorkers = Object(_get_local_worker__WEBPACK_IMPORTED_MODULE_0__[\"getWorkers\"])();\n\n  const workers = [\n    ...(receivedWorkers === null) ? [] : receivedWorkers,\n    newWorker\n  ]\n\n  const workersJson = JSON.stringify(workers);\n\n  return localStorage.setItem('workers', workersJson);\n}\n\nconst setFilterWorkers = (workers) => {\n  localStorage.setItem('sortedWorkers', JSON.stringify(workers));\n}\n\n//# sourceURL=webpack:///./js/set-local-worker.js?");

/***/ }),

/***/ "./js/sort-data.js":
/*!*************************!*\
  !*** ./js/sort-data.js ***!
  \*************************/
/*! exports provided: setState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setState\", function() { return setState; });\n/* harmony import */ var _get_local_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-local-worker */ \"./js/get-local-worker.js\");\n/* harmony import */ var _display_workers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-workers */ \"./js/display-workers.js\");\n\n\n\n// const arrowsSort = document.querySelectorAll(\".filters__arrow\");\n// console.log(arrowsSort)\n\nconst transfDate = (worker) => {\n  const dateParts = worker.createdDate.split('/');\n  const newDate = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);\n  return newDate.getTime();\n}\n\nconst sortWorkers = (key) => {\n  const workers = Object(_get_local_worker__WEBPACK_IMPORTED_MODULE_0__[\"getFilterWorkers\"])();\n\n  if (key === 'id') {\n    return workers.sort((worker1, worker2) => parseInt(worker1.id) - parseInt(worker2.id));\n  } else if (key === 'createdDate') {\n    return workers.sort((worker1, worker2) => transfDate(worker1) - transfDate(worker2));\n  } else {\n    return workers.sort((worker1, worker2) => {\n      const w1 = worker1[key].toLowerCase();\n      const w2 = worker2[key].toLowerCase();\n      if (w1 > w2) return 1;\n      else if (w1 < w2) return -1;\n      else if (w1 === w2) return 0;\n    });\n  }\n}\n\nconst tableHeaderStates = {\n  id: 'initial',\n  firstName: 'initial',\n  lastName: 'initial',\n  position: 'initial',\n  createdDate: 'initial'\n}\n\nconst setState = (item, key, operate = true) => {\n  item.classList.remove('initial__arrow');\n\n  if ((tableHeaderStates[key] === 'initial') || (tableHeaderStates[key] === 'desc')) {\n    item.src = 'img/asc.png';\n    tableHeaderStates[key] = 'asc';\n    Object(_display_workers__WEBPACK_IMPORTED_MODULE_1__[\"displayWorkers\"])(sortWorkers(key), operate);\n  } else if (tableHeaderStates[key] === 'asc') {\n    item.src = 'img/desc.png';\n    Object(_display_workers__WEBPACK_IMPORTED_MODULE_1__[\"displayWorkers\"])(sortWorkers(key).reverse(), operate);\n    tableHeaderStates[key] = 'desc';\n  }\n\n  if ((tableHeaderStates[key] === 'asc') || (tableHeaderStates[key] === 'desc')) {\n    Object.keys(tableHeaderStates).forEach(el => {\n      if (el !== key) tableHeaderStates[el] = 'initial';\n    });\n    // Array.from(arrowsSort).forEach(el => {\n    //   if (el !== item) {\n    //     el.src = 'img/sort-arrow.png';\n    //     el.classList.add('initial__arrow');\n    //   }\n    // });\n  }\n}\n\n//# sourceURL=webpack:///./js/sort-data.js?");

/***/ }),

/***/ "./js/worker-factory.js":
/*!******************************!*\
  !*** ./js/worker-factory.js ***!
  \******************************/
/*! exports provided: NewWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewWorker\", function() { return NewWorker; });\nclass NewWorker {\n  constructor(firstName, lastName, position) {\n    this.id = Math.round(Math.random() * new Date().getMilliseconds());\n    this.firstName = firstName;\n    this.lastName = lastName;\n    this.position = position;\n    this.createdDate = (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear();\n  }\n}\n\n//# sourceURL=webpack:///./js/worker-factory.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./css/index.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./css/index.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/index.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });