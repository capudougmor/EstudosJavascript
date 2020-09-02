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

/***/ "./src/components/UserList.js":
/*!************************************!*\
  !*** ./src/components/UserList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderUserList; });\n/*\n  TODO:\n  1 - Passar para template strings na listagem de usuários *\n  2 - Substituir \"for\" por \"map\" *\n  3 - Utilizar destructuring na extração das propriedades de cada usuário com let *\n  4 - Utilizar valor de fallback caso não tenha valor de telefone no usuáriopara exibir o texto 'Não cadastrado'\n  5 - Trocar if (status) por operador ternário\n  6 - Utilizar função auxiliar para tratar o status\n  7 - Utilizar arrow function na function do map\n  8 - Utilizar destructuring de user para parâmetro da function do map\n  9 - Utilizar retorno imediato ao invés da palavra reservada return no map\n  10 - Quebrar renderUserList em mais functions, separado por blocos\n  11 - Transformar renderUserList em arrow function com retorno imediato\n*/\n\nfunction renderUserList(userData) {\n  const usersHTML = userData.map(function(user, userIndex) {\n    let {name, email, telefone='Não cadastrado', status} = user;\n\n    if (status) {\n      status = 'Ativado';\n    } else {\n      status = 'Desativado';\n    }\n\n    return (\n      `<tr> \n        <th scope=\"row\">  ${(userIndex + 1)} </th>\n        <td> ${ name } </td>\n        <td> ${ email } </td>\n        <td> ${ telefone } </td>\n        <td> ${ status }</td>\n        <td><button type=\"button\" data-userId=\"${(userIndex + 1)} \" class=\"btn btn-edit btn-link text-primary\">Editar</button></td>\n        <td><button type=\"button\" class=\"btn btn-link text-danger\">Excluir</button></td>\n      </tr>\n    `);\n  }).join('')\n\n  return (\n    `<table class=\"table table-striped mt-4\">\n        <thead>\n            <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Nome</th>\n            <th scope=\"col\">E-mail</th>\n            <th scope=\"col\">Telefone</th>\n            <th scope=\"col\">Status</th>\n            <th scope=\"col\">&nbsp;</th>\n            <th scope=\"col\">&nbsp;</th>\n        </tr>\n        </thead>\n        <tbody>\n        ${usersHTML}\n        </tbody>\n        </table>\n    `)\n};\n\n\n//# sourceURL=webpack:///./src/components/UserList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/User */ \"./src/pages/User.js\");\n/*\n  TODO:\n  - Remover var, utilizar let ou const\n  - Refatorar para não ter função anônima\n  - Refatorar callback\n*/\n\n\n\nvar app = document.querySelector('#app');\n\nObject(_pages_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(html) {\n  app.innerHTML = html;\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/User.js":
/*!***************************!*\
  !*** ./src/pages/User.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UserPage; });\n/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/UserList */ \"./src/components/UserList.js\");\n/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users */ \"./src/services/users.js\");\n\n\n\n/*\n  TODO:\n  - Refatorar para não ter função anônima e arrow functions\n  na Promise retornada\n  - Utilizar template strings\n  - Refatorar callbacks e passar para promises\n  - Não utilizar função anônima\n  - Utilizar retorno imediato\n*/\n\nfunction UserPage(fnCallback) {\n  _services_users__WEBPACK_IMPORTED_MODULE_1__[\"getAllUsers\"](function(data) {\n    var userListHTML = Object(_components_UserList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n    var userPageHTML = '<div id=\"page-userlist\" class=\"container\">' +\n      '<h1 class=\"mt-4\">Admin de usuários</h1>' +\n      '<hr>' +\n      userListHTML +\n    '</div>'\n    return fnCallback(userPageHTML);\n  })\n};\n\n//# sourceURL=webpack:///./src/pages/User.js?");

/***/ }),

/***/ "./src/services/mocks/users.js":
/*!*************************************!*\
  !*** ./src/services/mocks/users.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  {\n    name: 'Ayrton',\n    email: 'ayrton.teshima@programadorabordo.com',\n    telefone: '21999998888',\n    status: true\n  },\n  {\n    name: 'Maria',\n    email: 'maria.maria@programadorabordo.com',\n    telefone: '21999997777',\n    status: false\n  },\n  {\n    name: 'João',\n    email: 'joao.joao@programadorabordo.com',\n    telefone: '21999996666',\n    status: true\n  },\n  {\n    name: 'João',\n    email: 'joao.joao@programadorabordo.com',\n    status: true\n  },\n  {\n    name: 'Valentina',\n    email: 'valentina.valentina@programadorabordo.com',\n    telefone: '21999996666',\n    status: true\n  }\n]);\n\n//# sourceURL=webpack:///./src/services/mocks/users.js?");

/***/ }),

/***/ "./src/services/users.js":
/*!*******************************!*\
  !*** ./src/services/users.js ***!
  \*******************************/
/*! exports provided: getAllUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllUsers\", function() { return getAllUsers; });\n/* harmony import */ var _mocks_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mocks/users */ \"./src/services/mocks/users.js\");\n\n\nfunction getAllUsers(fnCallback) {\n  return fnCallback(_mocks_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n\n//# sourceURL=webpack:///./src/services/users.js?");

/***/ })

/******/ });