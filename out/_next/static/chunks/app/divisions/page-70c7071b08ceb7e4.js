(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[29],{

/***/ 51949:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 84612));


/***/ }),

/***/ 84612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Divisions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87075);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Divisions() {
    var _dishSelected_inputs;
    const [dishes, setDishes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [dishSelected, setDishSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [searchWord, setSearchword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const searchDish = (e)=>{
        console.log(e.target.value);
        _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.get("/search-dishes/".concat(e.target.value)).then((result)=>{
            setDishes(result.data);
        }).catch((err)=>{
            console.log(err);
        });
    };
    const selectDish = (dish)=>{
        setDishSelected(dish);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                className: "text-3xl sm:text-4xl font-bold text-gray-800 mb-6",
                children: "Quebrados"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "space-y-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-white rounded-lg shadow-md p-6 mb-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                            className: "text-xl font-semibold text-gray-800 mb-4",
                            children: "Buscar plato"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                    onKeyUp: searchDish,
                                    placeholder: "Nombre del Plato",
                                    required: true,
                                    className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "w-full border border-zinc-300 rounded-md",
                                    children: dishes === null || dishes === void 0 ? void 0 : dishes.map((dish)=>{
                                        var _dish_base;
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "hover:bg-blue-500 hover:text-white p-2 cursor-pointer",
                                            onClick: ()=>selectDish(dish),
                                            children: [
                                                dish.id,
                                                " - ",
                                                dish.nombre,
                                                " -",
                                                (_dish_base = dish.base) === null || _dish_base === void 0 ? void 0 : _dish_base.nombre
                                            ]
                                        }, dish.id);
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "space-y-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "bg-white rounded-lg shadow-md p-6 mb-4",
                    children: dishSelected === null || dishSelected === void 0 ? void 0 : (_dishSelected_inputs = dishSelected.inputs) === null || _dishSelected_inputs === void 0 ? void 0 : _dishSelected_inputs.map((input)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            children: input.nombre
                        }, input.id))
                })
            })
        ]
    });
}


/***/ }),

/***/ 87075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23464);

const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.create({
    baseURL: "http://localhost:8000/api"
});
// Agregar el token a todas las peticiones
axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = "Bearer ".concat(token);
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [464,441,684,358], () => (__webpack_exec__(51949)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);