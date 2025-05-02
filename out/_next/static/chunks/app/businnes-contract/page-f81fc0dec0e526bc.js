(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[967],{

/***/ 44674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BusinnesContract)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62177);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87075);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function BusinnesContract() {
    const { handleSubmit, register, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .mN)();
    const [mines, setMines] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [businnesContracts, setBusinnesContracts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [businessClients, setBusinessClients] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const onSubmit = async (data)=>{
        try {
            // Enviar los datos del formulario al servidor en el puerto 4000
            const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.post("/businnes-contracts", data);
            // Si la respuesta es exitosa, redirigir a /organizations
            if (response.status === 201) {
                setBusinnesContracts([
                    ...businnesContracts,
                    response.data
                ]);
                console.log(response);
                reset();
            }
        } catch (error) {
            // Manejar errores (por ejemplo, credenciales incorrectas)
            console.error("Error al enviar los datos:", error);
            alert("Error al registrar nueva empresa contrato.");
        }
    };
    const deleteBusinnesClient = (id)=>{
        return async ()=>{
            try {
                // Enviar los datos del formulario al servidor en el puerto 4000
                const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.delete("/businnes-contracts/".concat(id));
                // Si la respuesta es exitosa, redirigir a /organizations
                if (response.status === 204) {
                    console.log(response);
                    setAreas(units.filter((unit)=>unit._id !== id));
                }
            } catch (error) {
                // Manejar errores (por ejemplo, credenciales incorrectas)
                console.error("Error al enviar los datos:", error);
                alert("Error al eliminar empresa contrato.");
            }
        };
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get("/mines").then((response)=>{
            setMines(response.data);
        }).catch((error)=>{
            console.error("Error al obtener las minas:", error);
        });
        _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get("/businnes-contracts").then((response)=>{
            setBusinnesContracts(response.data);
        }).catch((error)=>{
            console.error("Error al obtener las minas:", error);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                className: "text-3xl sm:text-4xl font-bold text-gray-800 mb-6",
                children: "Registro de Empresas Contrato"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "bg-white rounded-lg shadow-md p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Nombre *"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                        type: "text",
                                        className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                        placeholder: "Nombre de la empresa",
                                        ...register("name", {
                                            required: true
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "RUC *"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                        type: "text",
                                        className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                        placeholder: "N\xfamero de RUC",
                                        ...register("ruc", {
                                            required: true
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Mina *"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                        ...register("mine", {
                                            required: true
                                        }),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                value: "",
                                                children: "Seleccione Mina"
                                            }),
                                            mines.map((mine)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                    value: mine._id,
                                                    children: mine.name
                                                }, mine._id))
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        type: "submit",
                        className: "w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 shadow-md mt-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                        children: "Registrar Empresa Contrato"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white shadow-md rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-6 py-4 border-b border-gray-200 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                className: "text-xl font-semibold text-gray-800",
                                children: "Lista de Empresas Contrato"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                        type: "text",
                                        placeholder: "Buscar empresa...",
                                        className: "pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                        className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                        className: "min-w-full divide-y divide-gray-200",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", {
                                className: "bg-red-600",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                            className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                            children: "Nombre"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                            className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                            children: "RUC"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                            className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                            children: "Direcci\xf3n"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                            className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                            children: "Mina"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                            className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                            children: "Opciones"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", {
                                className: "bg-white divide-y divide-gray-200",
                                children: businnesContracts.map((bc)=>{
                                    var _bc_mine;
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "hover:bg-gray-50 transition-colors duration-150",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                                children: bc.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                                children: bc.ruc
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                                children: bc.address
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                                children: (_bc_mine = bc.mine) === null || _bc_mine === void 0 ? void 0 : _bc_mine.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600 space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                        className: "text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm",
                                                        children: "Editar"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                        className: "text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm",
                                                        onClick: ()=>deleteBusinnesClient(bc._id),
                                                        children: "Eliminar"
                                                    })
                                                ]
                                            })
                                        ]
                                    }, bc._id);
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 56115:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 44674));


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
/******/ __webpack_require__.O(0, [464,558,441,684,358], () => (__webpack_exec__(56115)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);