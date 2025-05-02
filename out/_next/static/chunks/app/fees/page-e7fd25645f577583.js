(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[550],{

/***/ 29569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Fees)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62177);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87075);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Fees() {
    const { handleSubmit, register, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .mN)();
    const [areas, setAreas] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [headquarters, setHeadquarters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [cafes, setCafes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [cafeId, setCafeId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    // Estado para manejar la edición de tarifas
    const [editing, setEditing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [tempValue, setTempValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
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
    const manageSelectedCafe = (event)=>{
        const cafeSelectedId = event.target.value;
        const cafeSelected = cafes.find((cafe)=>cafe._id === cafeSelectedId);
        setCafeId(event.target.value);
        setServices(cafeSelected.services);
    };
    // Función para manejar el doble clic
    const handleDoubleClick = (serviceId, field, currentValue)=>{
        setEditing({
            serviceId,
            field
        });
        setTempValue(currentValue);
    };
    // Función para manejar el cambio de valor
    const handleChange = (e)=>{
        setTempValue(e.target.value);
    };
    // Función para guardar el valor editado
    const saveValue = (serviceId, field)=>{
        setServices((prevServices)=>prevServices.map((service)=>{
                if (service._id === serviceId) {
                    // Asegúrate de que `service.prices` sea un objeto
                    if (!service.prices) {
                        service.prices = {};
                    }
                    // Asigna el valor a la propiedad [field] dentro de `service.prices`
                    service.prices[field] = parseFloat(tempValue) || 0;
                }
                return service; // Devuelve el servicio modificado o sin modificar
            }));
        setEditing({}); // Desactiva el modo de edición
    };
    const saveFees = async (service)=>{
        console.log(service);
        const data = {
            cafeId,
            service: service
        };
        try {
            // Enviar los datos del formulario al servidor en el puerto 4000
            const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.post("/prices-services-cafe", data);
            // Si la respuesta es exitosa, redirigir a /organizations
            if (response.status === 200) {
                console.log(response);
                alert("Precio actualizado correctamente.");
            //setAreas(areas.filter((area) => area._id !== id));
            }
        } catch (error) {
            // Manejar errores (por ejemplo, credenciales incorrectas)
            console.error("Error al actualizar precios:", error);
            alert("Error al actualizar precios.");
        }
    };
    // Función para manejar la tecla "Enter"
    const handleKeyDown = (e, serviceId, field)=>{
        if (e.key === "Enter") {
            saveValue(serviceId, field);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get("/areas").then((response)=>{
            setAreas(response.data);
        }).catch((error)=>{
            console.error("Error al obtener las areas:", error);
        });
        _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get("/cafes").then((response)=>{
            setCafes(response.data);
        }).catch((error)=>{
            console.error("Error al obtener las cafes:", error);
        });
        _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get("/headquarters").then((response)=>{
            setHeadquarters(response.data);
        }).catch((error)=>{
            console.error("Error al obtener las sedes:", error);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: "flex flex-col gap-8 row-start-2 items-center sm:items-start",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                    className: "text-3xl sm:text-4xl text-center sm:text-left",
                    children: "Registro de Tarifas"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                    onSubmit: handleSubmit(onSubmit),
                    className: "rounded p-5 bg-zinc-800 flex flex-col w-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        className: "p-2 my-2 bg-zinc-500 rounded text-white",
                        onChange: manageSelectedCafe,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                value: null,
                                children: "Seleccione Cafeter\xeda"
                            }),
                            cafes.map((cafe)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                    value: cafe._id,
                                    children: [
                                        cafe.unit.name,
                                        " - ",
                                        cafe.name
                                    ]
                                }, cafe._id))
                        ]
                    })
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
                                        children: "Servicio"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Con IGV"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Sin IGV"
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
                            children: services.map((service)=>{
                                var _service_prices, _service_prices1;
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: service.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            onDoubleClick: ()=>handleDoubleClick(service._id, "withTax", service.withTax || 0),
                                            children: editing.serviceId === service._id && editing.field === "withTax" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "number",
                                                value: tempValue,
                                                onChange: handleChange,
                                                onBlur: ()=>saveValue(service._id, "withTax"),
                                                onKeyDown: (e)=>handleKeyDown(e, service._id, "withTax"),
                                                autoFocus: true,
                                                className: "w-20 p-1 border rounded"
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "S./ ",
                                                    ((_service_prices = service.prices) === null || _service_prices === void 0 ? void 0 : _service_prices.withTax) || 0
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            onDoubleClick: ()=>handleDoubleClick(service._id, "withoutTax", service.withoutTax || 0),
                                            children: editing.serviceId === service._id && editing.field === "withoutTax" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "number",
                                                value: tempValue,
                                                onChange: handleChange,
                                                onBlur: ()=>saveValue(service._id, "withoutTax"),
                                                onKeyDown: (e)=>handleKeyDown(e, service._id, "withoutTax"),
                                                autoFocus: true,
                                                className: "w-20 p-1 border rounded"
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "S./ ",
                                                    ((_service_prices1 = service.prices) === null || _service_prices1 === void 0 ? void 0 : _service_prices1.withoutTax) || 0
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                className: "bg-green-500 text-white px-4 py-2 rounded-md",
                                                onClick: ()=>saveFees(service),
                                                children: "Actualizar"
                                            })
                                        })
                                    ]
                                }, service._id);
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 53348:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 29569));


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
/******/ __webpack_require__.O(0, [464,558,441,684,358], () => (__webpack_exec__(53348)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);