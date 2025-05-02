(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[703],{

/***/ 14667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Roles)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(62177);
// EXTERNAL MODULE: ./app/utils/axiosInstance.js
var axiosInstance = __webpack_require__(87075);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./app/components/ServicesModal.jsx




function ServicesModal(param) {
    let { active = false, onClose, cafe, services } = param;
    const { register, watch, getValues, setValue } = (0,index_esm/* useForm */.mN)();
    (0,react.useEffect)(()=>{
        if (cafe && cafe.services) {
            // Limpia los valores anteriores
            setValue("pickedServices", []);
            // Establece los valores iniciales para los checkboxes
            cafe.services.forEach((service)=>{
                console.log(service);
                setValue("pickedServices", [
                    ...getValues("pickedServices"),
                    service._id
                ]);
            });
        }
    }, [
        cafe,
        setValue,
        getValues
    ]);
    const checkboxValues = watch("pickedServices");
    const syncServices = async ()=>{
        const selectedServices = getValues("pickedServices");
        const data = {
            cafeId: cafe._id,
            selectedServices: checkboxValues
        };
        await axiosInstance/* default */.A.post("/services-cafe", data).then((result)=>{
            onClose();
        }).catch((err)=>{
            console.error(err);
        });
        console.log("Sincronizando permisos", selectedServices);
    };
    if (!active) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative z-10",
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "fixed inset-0 bg-gray-500/75 transition-opacity",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "sm:flex sm:items-start",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                className: "size-6 text-yellow-600",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "1.5",
                                                stroke: "currentColor",
                                                "aria-hidden": "true",
                                                "data-slot": "icon",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                    className: "text-base font-semibold text-gray-900",
                                                    id: "modal-title",
                                                    children: "Asignar Servicios"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "mt-2",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            "Est\xe1s seguro de asignarle estos servicios a ",
                                                            cafe.name,
                                                            "?",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                services.map((service)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "text-sm text-gray-800",
                                                        children: [
                                                            service.name,
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "checkbox",
                                                                className: "ml-2",
                                                                value: service._id,
                                                                ...register("pickedServices")
                                                            })
                                                        ]
                                                    }, service._id))
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "button",
                                        className: "inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 sm:ml-3 sm:w-auto cursor-pointer",
                                        onClick: syncServices,
                                        children: "Sincronizar"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "button",
                                        className: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                        onClick: onClose,
                                        children: "Cancelar"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// ./app/cafes/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Roles() {
    const { handleSubmit, register, reset } = (0,index_esm/* useForm */.mN)();
    const [showModal, setShowModal] = (0,react.useState)(false);
    const [selectedCafe, setSelectedCafe] = (0,react.useState)({});
    const [cafes, setCafes] = (0,react.useState)([]);
    const [services, setServices] = (0,react.useState)([]);
    const [units, setUnits] = (0,react.useState)([]);
    const onSubmit = async (data)=>{
        try {
            // Enviar los datos del formulario al servidor en el puerto 4000
            const response = await axiosInstance/* default */.A.post("/cafes", data);
            // Si la respuesta es exitosa, redirigir a /organizations
            if (response.status === 201) {
                setCafes([
                    ...cafes,
                    response.data
                ]);
                console.log(response);
                reset();
            }
        } catch (error) {
            // Manejar errores (por ejemplo, credenciales incorrectas)
            console.error("Error al enviar los datos:", error);
            alert("Error al registrar nueva unidad.");
        }
    };
    const deleteCafes = (id)=>{
        return async ()=>{
            try {
                // Enviar los datos del formulario al servidor en el puerto 4000
                const response = await axiosInstance/* default */.A.delete("/cafes/".concat(id));
                // Si la respuesta es exitosa, redirigir a /organizations
                if (response.status === 204) {
                    console.log(response);
                    setCafes(units.filter((unit)=>unit._id !== id));
                }
            } catch (error) {
                // Manejar errores (por ejemplo, credenciales incorrectas)
                console.error("Error al enviar los datos:", error);
                alert("Error al eliminar cafe.");
            }
        };
    };
    const openServiceModal = (cafe)=>{
        setSelectedCafe(cafe);
        setShowModal(true);
    };
    const closeModal = ()=>{
        setShowModal(false);
    };
    (0,react.useEffect)(()=>{
        axiosInstance/* default */.A.get("/cafes").then((response)=>{
            setCafes(response.data);
        }).catch((error)=>{
            console.error("Error al obtener los cafes:", error);
        });
        axiosInstance/* default */.A.get("/services").then((response)=>{
            setServices(response.data);
        }).catch((error)=>{
            console.error("Error al obtener los servicios:", error);
        });
        axiosInstance/* default */.A.get("/units").then((response)=>{
            setUnits(response.data);
        }).catch((error)=>{
            console.error("Error al obtener las unidades:", error);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: "text-3xl sm:text-4xl font-bold text-gray-800 mb-6",
                children: "Registro de Cafeter\xedas"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "bg-white rounded-lg shadow-md p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Nombre *"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "text",
                                        className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                        placeholder: "Nombre de la cafeter\xeda",
                                        ...register("name", {
                                            required: true
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Unidad Minera *"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                        className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                        ...register("unit", {
                                            required: true
                                        }),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "",
                                                children: "Seleccione Unidad minera"
                                            }),
                                            units.map((unit)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                    value: unit._id,
                                                    children: unit.name
                                                }, unit._id))
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "submit",
                        className: "w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 shadow-md mt-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                        children: "Registrar Cafeter\xeda"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-white shadow-md rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "px-6 py-4 border-b border-gray-200 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-xl font-semibold text-gray-800",
                                children: "Lista de Cafeter\xedas"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "text",
                                        placeholder: "Buscar cafeter\xeda...",
                                        className: "pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                        className: "min-w-full divide-y divide-gray-200",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                className: "bg-red-600",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                            children: "Nombre"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                            children: "Unidad Minera"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                            children: "Opciones"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                className: "bg-white divide-y divide-gray-200",
                                children: cafes.map((cafe)=>{
                                    var _cafe_unit;
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        className: "hover:bg-gray-50 transition-colors duration-150",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                                children: cafe.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                                children: (_cafe_unit = cafe.unit) === null || _cafe_unit === void 0 ? void 0 : _cafe_unit.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600 space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                        className: "text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm",
                                                        onClick: ()=>openServiceModal(cafe),
                                                        children: "Servicios"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                        className: "text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm",
                                                        children: "Editar"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                        className: "text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm",
                                                        onClick: ()=>deleteCafes(cafe._id),
                                                        children: "Eliminar"
                                                    })
                                                ]
                                            })
                                        ]
                                    }, cafe._id);
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ServicesModal, {
                active: showModal,
                onClose: closeModal,
                cafe: selectedCafe,
                services: services
            })
        ]
    });
}


/***/ }),

/***/ 17291:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14667));


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
/******/ __webpack_require__.O(0, [464,558,441,684,358], () => (__webpack_exec__(17291)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);