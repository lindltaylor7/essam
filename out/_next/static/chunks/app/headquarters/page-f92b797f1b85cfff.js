(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[500],{

/***/ 26048:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 55391));


/***/ }),

/***/ 55391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Business)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62177);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87075);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Business() {
    const { handleSubmit, register, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .mN)();
    const [businnes, setBusinnes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [headquarters, setHeadquarters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const onSubmit = async (data)=>{
        console.log(data);
        try {
            // Enviar los datos del formulario al servidor en el puerto 4000
            const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.post('/headquarters', data);
            // Si la respuesta es exitosa, redirigir a /organizations
            if (response.status === 201) {
                setHeadquarters([
                    ...headquarters,
                    response.data
                ]);
                console.log(response);
                reset();
            }
        } catch (error) {
            // Manejar errores (por ejemplo, credenciales incorrectas)
            console.error('Error al enviar los datos:', error);
            alert('Error al registrar nueva sede.');
        }
    };
    const deleteHeadquarter = (id)=>{
        return async ()=>{
            try {
                // Enviar los datos del formulario al servidor en el puerto 4000
                const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.delete("/headquarters/".concat(id));
                // Si la respuesta es exitosa, redirigir a /organizations
                if (response.status === 204) {
                    console.log(response);
                    setAreas(headquarters.filter((headquarter)=>headquarter._id !== id));
                }
            } catch (error) {
                // Manejar errores (por ejemplo, credenciales incorrectas)
                console.error('Error al enviar los datos:', error);
                alert('Error al eliminar sede.');
            }
        };
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get('/businnes').then((response)=>{
            setBusinnes(response.data);
        }).catch((error)=>{
            console.error('Error al obtener las empresas:', error);
        });
        _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get('/headquarters').then((result)=>{
            setHeadquarters(result.data);
        }).catch((err)=>{
            console.error('Error al obtener las sedes:', err);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: "flex flex-col gap-8 row-start-2 items-center sm:items-start",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                    className: "text-3xl sm:text-4xl text-center sm:text-left",
                    children: "Registro de Sedes"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit(onSubmit),
                    className: "rounded p-5 bg-zinc-800 flex flex-col w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "p-2 my-2 bg-zinc-500 rounded text-white",
                            ...register("businnes"),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                    value: null,
                                    children: "Seleccione Empresa"
                                }),
                                businnes.map((b)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                        value: b._id,
                                        children: b.name
                                    }, b._id))
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                            type: "text",
                            className: "p-2 my-2 bg-zinc-500 rounded",
                            placeholder: "Nombre",
                            ...register("name")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                            type: "text",
                            className: "p-2 my-2 bg-zinc-500 rounded",
                            placeholder: "Direccion",
                            ...register("address")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                            type: "submit",
                            className: "bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md",
                            value: "Registrar Sede"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "min-w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", {
                            className: "bg-gray-200",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Nombre"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Direccion"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Empresa"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Opciones"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: headquarters.map((headquarter)=>{
                                var _headquarter_businnes;
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: headquarter.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                            children: headquarter.address
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                            children: (_headquarter_businnes = headquarter.businnes) === null || _headquarter_businnes === void 0 ? void 0 : _headquarter_businnes.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                    className: "bg-green-500 text-white px-4 py-2 rounded-md",
                                                    children: "Editar"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                    className: "bg-red-500 text-white px-4 py-2 rounded-md",
                                                    onClick: deleteHeadquarter(headquarter._id),
                                                    children: "Eliminar"
                                                })
                                            ]
                                        })
                                    ]
                                }, headquarter._id);
                            })
                        })
                    ]
                })
            ]
        })
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
/******/ __webpack_require__.O(0, [464,558,441,684,358], () => (__webpack_exec__(26048)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);