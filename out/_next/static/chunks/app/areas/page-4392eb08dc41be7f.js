(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[955],{

/***/ 4146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Areas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62177);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87075);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Areas() {
    const { handleSubmit, register, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .mN)();
    const [areas, setAreas] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [headquarters, setHeadquarters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const onSubmit = async (data)=>{
        console.log(data);
        try {
            // Enviar los datos del formulario al servidor en el puerto 4000
            const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.post("/areas", data);
            // Si la respuesta es exitosa, redirigir a /organizations
            if (response.status === 201) {
                setAreas([
                    ...areas,
                    response.data
                ]);
                console.log(response);
                reset();
            }
        } catch (error) {
            // Manejar errores (por ejemplo, credenciales incorrectas)
            console.error("Error al enviar los datos:", error);
            alert("Error al registrar nueva area.");
        }
    };
    const deleteArea = (id)=>{
        return async ()=>{
            try {
                // Enviar los datos del formulario al servidor en el puerto 4000
                const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.delete("/areas/".concat(id));
                // Si la respuesta es exitosa, redirigir a /organizations
                if (response.status === 204) {
                    console.log(response);
                    setAreas(areas.filter((area)=>area._id !== id));
                }
            } catch (error) {
                // Manejar errores (por ejemplo, credenciales incorrectas)
                console.error("Error al enviar los datos:", error);
                alert("Error al eliminar area.");
            }
        };
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get("/areas").then((response)=>{
            setAreas(response.data);
        }).catch((error)=>{
            console.error("Error al obtener las areas:", error);
        });
        _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get("/headquarters").then((response)=>{
            setHeadquarters(response.data);
        }).catch((error)=>{
            console.error("Error al obtener las sedes:", error);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                className: "text-3xl sm:text-4xl font-bold text-gray-800 mb-6",
                children: "Areas"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "bg-white rounded-lg p-6 space-y-4 max-w-full w-full mx-auto mb-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-4 items-end",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                        htmlFor: "headquarter",
                                        className: "block text-sm font-medium text-red-500 mb-1",
                                        children: "Sede *"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        id: "headquarter",
                                        className: "w-full p-2.5  border border-zinc-600 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                        ...register("headquarter", {
                                            required: true
                                        }),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                value: "",
                                                children: "Seleccione Sede"
                                            }),
                                            headquarters.map((headquarter)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                                    value: headquarter._id,
                                                    children: [
                                                        headquarter.businnes.name,
                                                        " - ",
                                                        headquarter.name
                                                    ]
                                                }, headquarter._id))
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                        htmlFor: "name",
                                        className: "block text-sm font-medium text-red-500 mb-1",
                                        children: "Nombre *"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                        id: "name",
                                        type: "text",
                                        className: "w-full p-2.5 border border-zinc-600 rounded-md placeholder-zinc-400 focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                        placeholder: "Ej: Marketing",
                                        ...register("name", {
                                            required: true
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                    type: "submit",
                                    className: "w-full bg-red-500 hover:bg-red-800 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-800",
                                    children: "Registrar \xc1rea"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                htmlFor: "description",
                                className: "block text-sm font-medium text-red-500 mb-1",
                                children: "Descripci\xf3n"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                id: "description",
                                type: "text",
                                className: "w-full p-2.5 border border-zinc-600 rounded-md  placeholder-zinc-400 focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                placeholder: "Descripci\xf3n del \xe1rea",
                                ...register("description")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", {
                        className: "bg-red-500",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                    className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                    children: "Nombre"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                    className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                    children: "Sede"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                    className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                    children: "Estado"
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
                        children: areas.map((area)=>{
                            var _area_headquarter_businnes, _area_headquarter, _area_headquarter1;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "hover:bg-gray-50 transition-colors duration-150",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: area.name
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                (_area_headquarter = area.headquarter) === null || _area_headquarter === void 0 ? void 0 : (_area_headquarter_businnes = _area_headquarter.businnes) === null || _area_headquarter_businnes === void 0 ? void 0 : _area_headquarter_businnes.name,
                                                " - ",
                                                (_area_headquarter1 = area.headquarter) === null || _area_headquarter1 === void 0 ? void 0 : _area_headquarter1.name
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full ".concat(area.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800" /* Usamos tonalidades rojas */ ),
                                            children: area.status ? "Activa" : "Inactiva"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                        className: "px-6 py-4 whitespace-nowrap space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                className: "text-white bg-red-500 hover:bg-red-800 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm",
                                                onClick: ()=>deleteArea(area._id),
                                                children: "Eliminar"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                className: "text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm",
                                                children: "Editar"
                                            })
                                        ]
                                    })
                                ]
                            }, area._id);
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 66451:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4146));


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
/******/ __webpack_require__.O(0, [464,558,441,684,358], () => (__webpack_exec__(66451)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);