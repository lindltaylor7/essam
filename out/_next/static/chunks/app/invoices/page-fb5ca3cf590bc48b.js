(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[175],{

/***/ 75649:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85912));


/***/ }),

/***/ 85912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Facturas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62177);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87075);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Facturas() {
    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .mN)();
    const [factura, setFactura] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [invoiceStatus, setInvoiceStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const crearFactura = async (data)=>{
        const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.post("/invoices", data);
        console.log(response);
        if (response.status == 200) {
            setFactura(response.data);
            alert(response.data.message);
        }
    };
    const enviarSunat = async ()=>{
        await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.post("/send-invoices-sunat", {
            xml: factura.xml
        });
        alert("Factura enviada a SUNAT");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full bg-white rounded-xl shadow-md overflow-hidden mb-6 p-3",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                className: "text-xl font-semibold text-gray-800 py-4",
                children: "Generar Factura Electr\xf3nica"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(crearFactura),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                ...register("rucEmisor"),
                                placeholder: "RUC Emisor",
                                required: true,
                                className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                ...register("razonSocialEmisor"),
                                placeholder: "Raz\xf3n Social Emisor",
                                required: true,
                                className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                ...register("rucCliente"),
                                placeholder: "RUC Cliente",
                                required: true,
                                className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                ...register("razonSocialCliente"),
                                placeholder: "Raz\xf3n Social Cliente",
                                required: true,
                                className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                ...register("serie"),
                                placeholder: "Serie",
                                required: true,
                                className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                ...register("correlativo"),
                                placeholder: "Correlativo",
                                required: true,
                                className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                type: "date",
                                ...register("fechaEmision"),
                                required: true,
                                className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                ...register("moneda"),
                                placeholder: "Moneda (PEN/USD)",
                                required: true,
                                className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                type: "number",
                                step: "0.01",
                                ...register("total"),
                                placeholder: "Total",
                                required: true,
                                className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        type: "submit",
                        className: "w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 my-2",
                        children: "Generar Factura"
                    })
                ]
            }),
            factura && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                        children: "Factura Generada"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        onClick: enviarSunat,
                        className: "w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 my-2",
                        children: "Enviar a SUNAT"
                    })
                ]
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
/******/ __webpack_require__.O(0, [464,558,441,684,358], () => (__webpack_exec__(75649)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);