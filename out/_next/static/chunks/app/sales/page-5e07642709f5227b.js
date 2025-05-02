(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[117],{

/***/ 7763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Sales)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(62177);
// EXTERNAL MODULE: ./app/utils/axiosInstance.js
var axiosInstance = __webpack_require__(87075);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./app/components/PermissionsModal.jsx
var PermissionsModal = __webpack_require__(62470);
// EXTERNAL MODULE: ./app/context/index.js + 1 modules
var context = __webpack_require__(46361);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(24752);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// ./app/libs/swal.js

const showSuccessAlert = (message)=>{
    if (true) {
        sweetalert2_all_default().fire({
            icon: 'success',
            title: message,
            timer: 3000
        });
    }
};
const showErrorAlert = (message)=>{
    if (true) {
        sweetalert2_all_default().fire({
            icon: 'error',
            title: message,
            timer: 3000
        });
    }
};

// EXTERNAL MODULE: ./node_modules/xlsx/xlsx.mjs
var xlsx = __webpack_require__(3925);
// EXTERNAL MODULE: ./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js + 18 modules
var react_pdf_browser = __webpack_require__(91883);
;// ./app/components/Ticket.jsx


const ticketWidth = 80 * 2.83465;
const ticketHeight = 200 * 2.83465;
const styles = react_pdf_browser/* StyleSheet */.vv.create({
    page: {
        width: "".concat(ticketWidth, "pt"),
        height: "".concat(ticketHeight, "pt"),
        padding: 12,
        fontFamily: "Helvetica"
    },
    header: {
        marginBottom: 15,
        textAlign: "center"
    },
    businessName: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 4
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        textDecoration: "underline"
    },
    subtitle: {
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 2
    },
    text: {
        fontSize: 10,
        marginBottom: 6
    },
    divider: {
        borderBottom: "1pt solid #000",
        marginVertical: 8
    },
    section: {
        marginBottom: 10
    },
    footer: {
        fontSize: 8,
        textAlign: "center",
        marginTop: 15,
        fontStyle: "italic",
        color: "#555"
    },
    highlight: {
        backgroundColor: "#f0f0f0",
        padding: 4,
        borderRadius: 2
    }
});
const Ticket = (param)=>{
    let { sale } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react_pdf_browser/* Document */.yo, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* Page */.YW, {
            size: [
                ticketWidth,
                ticketHeight
            ],
            style: styles.page,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* View */.Ss, {
                    style: styles.header,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_pdf_browser/* Text */.EY, {
                            style: styles.businessName,
                            children: "EMPRESA DE SERVICIOS SANTA MONICA S.R.L."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_pdf_browser/* Text */.EY, {
                            style: styles.text,
                            children: "RUC: 20319127845"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_pdf_browser/* View */.Ss, {
                    style: styles.divider
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_pdf_browser/* Text */.EY, {
                    style: styles.title,
                    children: "TICKET DE CONSUMO"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* View */.Ss, {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_pdf_browser/* Text */.EY, {
                            style: styles.subtitle,
                            children: "DATOS DEL CLIENTE:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* Text */.EY, {
                            style: styles.text,
                            children: [
                                "Nombre: ",
                                sale.diner.dinerName
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* Text */.EY, {
                            style: styles.text,
                            children: [
                                "DNI: ",
                                sale.diner.dinerDni
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_pdf_browser/* View */.Ss, {
                    style: styles.divider
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* View */.Ss, {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_pdf_browser/* Text */.EY, {
                            style: styles.subtitle,
                            children: "DETALLE DEL CONSUMO:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* View */.Ss, {
                            style: styles.highlight,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* Text */.EY, {
                                    style: styles.text,
                                    children: [
                                        "Producto: ",
                                        sale.service.serviceName
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* Text */.EY, {
                                    style: styles.text,
                                    children: [
                                        "Precio: S./",
                                        sale.price.toFixed(2)
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_pdf_browser/* View */.Ss, {
                    style: styles.divider
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* View */.Ss, {
                    style: styles.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* Text */.EY, {
                            style: styles.text,
                            children: [
                                "Fecha: ",
                                new Date().toLocaleDateString()
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_pdf_browser/* Text */.EY, {
                            style: styles.text,
                            children: [
                                "Hora:",
                                " ",
                                new Date().toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_pdf_browser/* View */.Ss, {
                    style: styles.footer,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_pdf_browser/* Text */.EY, {
                        children: "* Este documento no tiene validez contable o tributaria"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Ticket = (Ticket);

// EXTERNAL MODULE: ./node_modules/luxon/src/luxon.js + 23 modules
var luxon = __webpack_require__(29593);
// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.mjs
var fa6 = __webpack_require__(64315);
;// ./app/sales/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











function Sales() {
    var _diner_unit, _user_entity, _diner_businnesClient;
    const { user } = (0,context/* useAppAuth */.N)();
    const { handleSubmit, register, reset } = (0,index_esm/* useForm */.mN)();
    const [roles, setRoles] = (0,react.useState)([]);
    const [sales, setSales] = (0,react.useState)([]);
    const [servicesFiltered, setServicesFiltered] = (0,react.useState)([]);
    const [dinerDni, setDinerDni] = (0,react.useState)("");
    const [dinerName, setDinerName] = (0,react.useState)("");
    const [services, setServices] = (0,react.useState)([]);
    const [diner, setDiner] = (0,react.useState)({});
    const [permissions, setPermissions] = (0,react.useState)([]);
    const [selectedRole, setSelectedRole] = (0,react.useState)({});
    const [paymentType, setPaymentType] = (0,react.useState)(0);
    const [showModal, setShowModal] = (0,react.useState)(false);
    const [sideJob, setSideJob] = (0,react.useState)(0);
    const [selectedService, setSelectedService] = (0,react.useState)({});
    const [cost, setCost] = (0,react.useState)(0);
    const [areas, setAreas] = (0,react.useState)([]);
    const [cafes, setCafes] = (0,react.useState)([]);
    const [selectedValue, setSelectedValue] = (0,react.useState)(0);
    const onSubmit = async ()=>{
        try {
            const sale = {
                diner: {
                    dinerId: diner._id,
                    dinerName: dinerName,
                    dinerDni: diner.dni,
                    businnesClient: {
                        name: diner.businnesClient.name
                    }
                },
                service: selectedService,
                cafe: user.entity,
                price: cost,
                paymentType
            };
            const response = await axiosInstance/* default */.A.post("/sales", sale);
            if (response.status === 201) {
                showSuccessAlert("Venta registrada correctamente.");
                setSales([
                    ...sales,
                    response.data
                ]);
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            showErrorAlert("Error al registrar nueva venta. " + error.response.data.message);
        }
    };
    const deleteSale = (id)=>{
        return async ()=>{
            try {
                // Enviar los datos del formulario al servidor en el puerto 4000
                const response = await axiosInstance/* default */.A.delete("/sales/".concat(id));
                // Si la respuesta es exitosa, redirigir a /organizations
                if (response.status === 204) {
                    console.log(response);
                    setAreas(roles.filter((role)=>role._id !== id));
                }
            } catch (error) {
                // Manejar errores (por ejemplo, credenciales incorrectas)
                console.error("Error al enviar los datos:", error);
                alert("Error al eliminar rol.");
            }
        };
    };
    (0,react.useEffect)(()=>{
        const currentDate = new Date();
        const formattedDateTime = currentDate.toLocaleString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        setCurrentDateTime(formattedDateTime);
        axiosInstance/* default */.A.get("/sales").then((response)=>{
            setSales(response.data);
        }).catch((error)=>{
            console.error("Error al obtener los ventas:", error);
        });
        axiosInstance/* default */.A.get("/roles").then((response)=>{
            setRoles(response.data);
        }).catch((error)=>{
            console.error("Error al obtener los roles:", error);
        });
        axiosInstance/* default */.A.get("/permissions").then((response)=>{
            setPermissions(response.data);
        }).catch((error)=>{
            console.error("Error al obtener los permisos:", error);
        });
        axiosInstance/* default */.A.get("/cafes").then((response)=>{
            setCafes(response.data);
        }).catch((error)=>{
            console.error("Error al obtener los cafes:", error);
        });
        axiosInstance/* default */.A.get("/areas").then((result)=>{
            setAreas(result.data);
        }).catch((error)=>{
            console.error("Error al obtener las areas:", error);
        });
    }, []);
    (0,react.useEffect)(()=>{
        if (user && user.entityType && user.entityType == 2) {
            const cafeSelected = cafes.find((cafe)=>cafe._id == user.entity._id);
            console.log(cafeSelected);
            setServices(cafeSelected === null || cafeSelected === void 0 ? void 0 : cafeSelected.services);
        }
    }, [
        cafes
    ]);
    const handleSelectChange = (event)=>{
        setSelectedValue(event.target.value);
        if (event.target.value == 1) {
            setSelectableSides(areas);
        } else if (event.target.value == 2) {
            setSelectableSides(cafes);
        }
    };
    const handleModalPermissions = (role)=>{
        setSelectedRole(role);
        setShowModal(true);
    };
    const closeModal = ()=>{
        setShowModal(false);
    };
    const searchDiner = (e)=>{
        e.preventDefault();
        axiosInstance/* default */.A.get("/diners/".concat(dinerDni)).then((response)=>{
            setDiner(response.data);
            setDinerName(response.data.name);
        }).catch((error)=>{
            alert("Comensal no encontrado");
            console.error("Error al obtener los datos del comensal:", error);
        });
    };
    const [currentDateTime, setCurrentDateTime] = (0,react.useState)("");
    const handleService = (e)=>{
        const serviceId = e.target.value;
        const serviceSelected = services.find((service)=>service._id === serviceId);
        console.log(serviceSelected);
        setSelectedService(serviceSelected);
        setCost(serviceSelected.prices.withTax);
    };
    const handlePaymentType = (e)=>{
        const paymentType = e.target.value;
        setPaymentType(paymentType);
    };
    const exportToExcel = (e)=>{
        e.preventDefault();
        const data = [
            [
                "Cliente",
                "Fecha",
                "DNI",
                "Comensal",
                "Servicio",
                "Total"
            ],
            ...sales.map((sale)=>[
                    sale.bussinesClientName,
                    sale.dateTime,
                    sale.diner.dinerDni,
                    sale.diner.dinerName,
                    sale.service.serviceName,
                    sale.price
                ])
        ];
        const ws = xlsx/* utils */.Wp.aoa_to_sheet(data);
        const wb = xlsx/* utils */.Wp.book_new();
        xlsx/* utils */.Wp.book_append_sheet(wb, ws, "Hoja1");
        (0,xlsx/* writeFile */._h)(wb, "reporte.xlsx");
    };
    const handleGeneratePDF = async (sale)=>{
        if (true) {
            const blob = await (0,react_pdf_browser/* pdf */.x8)(/*#__PURE__*/ (0,jsx_runtime.jsx)(components_Ticket, {
                sale: sale
            })).toBlob();
            const url = URL.createObjectURL(blob);
            window.open(url, "_blank");
        }
    };
    const formatDate = (date)=>{
        const localDate = luxon/* DateTime */.c9.fromISO(date).setZone("America/Lima");
        const formattedDate = localDate.toFormat("dd-MM-yyyy HH:mm:ss");
        return formattedDate;
    };
    const handleQuantity = (e)=>{
        const quantity = e.target.value;
        const totalCost = selectedService.prices.withTax * quantity;
        setCost(totalCost);
    };
    const searchService = (e)=>{
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm !== "") {
            const filteredServices = services.filter((service)=>service.name.toLowerCase().includes(searchTerm) || service.code.toLowerCase().includes(searchTerm));
            setServicesFiltered(filteredServices);
        } else {
            setServicesFiltered([]);
        }
    };
    const selectService = (service)=>()=>{};
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: "text-3xl sm:text-4xl font-bold text-gray-800 mb-6",
                children: "Gesti\xf3n de Ventas"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                className: "bg-white rounded-lg p-6 space-y-4 max-w-full w-full mx-auto mb-4 shadow-md",
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                className: "block text-sm font-medium text-red-500 mb-1",
                                                children: "Tipo de pago *"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "space-y-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-row items-center space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                            className: "inline-flex items-center mb-0",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                    type: "radio",
                                                                    className: "form-radio h-4 w-4 text-red-600 border-zinc-300 focus:ring-2 focus:ring-red-500",
                                                                    name: "paymentType",
                                                                    value: "1",
                                                                    onChange: handlePaymentType
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "ml-2 text-zinc-700",
                                                                    children: "Cr\xe9dito"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                            className: "inline-flex items-center ms-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                    type: "radio",
                                                                    className: "form-radio h-4 w-4 text-red-600 border-zinc-300 focus:ring-2 focus:ring-red-500",
                                                                    name: "paymentType",
                                                                    value: "2",
                                                                    onChange: handlePaymentType
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "ml-2 text-zinc-700",
                                                                    children: "Al Contado"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-sm font-medium text-red-500 mb-1",
                                        children: "Fecha *"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "font-medium text-gray-700",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "date",
                                            className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent w-full",
                                            placeholder: "Fecha"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "text",
                                                className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                                placeholder: "Dni del Comensal",
                                                onChange: (e)=>setDinerDni(e.target.value)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                className: "bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-md transition-colors duration-200 shadow-sm",
                                                onClick: searchDiner,
                                                type: "button",
                                                children: "Buscar"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "font-medium text-gray-700",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "text",
                                                    className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent w-full",
                                                    placeholder: "Nombre del Comensal",
                                                    value: dinerName || "",
                                                    onChange: (e)=>setDinerName(e.target.value)
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "font-medium text-gray-700",
                                                children: [
                                                    "Unidad: ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "font-normal",
                                                        children: (_diner_unit = diner.unit) === null || _diner_unit === void 0 ? void 0 : _diner_unit.name
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "font-medium text-gray-700",
                                                children: [
                                                    "Cafeter\xeda:",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "font-normal",
                                                        children: (_user_entity = user.entity) === null || _user_entity === void 0 ? void 0 : _user_entity.name
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "font-medium text-gray-700",
                                                children: [
                                                    "Empresa Cliente:",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "font-normal",
                                                        children: (_diner_businnesClient = diner.businnesClient) === null || _diner_businnesClient === void 0 ? void 0 : _diner_businnesClient.name
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "font-medium text-gray-700",
                                                children: [
                                                    "Codigo de Registro:",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "font-normal",
                                                        children: diner.registerCode
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                className: "block text-sm font-medium text-red-500 mb-1",
                                                children: "Forma de Pago *"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                className: "w-full p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: null,
                                                        children: "Seleccione una forma de pago"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "1",
                                                        children: "Yape - Plin"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "2",
                                                        children: "Transferencia"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "3",
                                                        children: "Efectivo"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                className: "block text-sm font-medium text-red-500 mb-1",
                                                children: "Servicio *"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "text",
                                                className: "w-full p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                                onKeyUp: searchService
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "w-full border border-zinc-300 rounded-md",
                                                children: servicesFiltered === null || servicesFiltered === void 0 ? void 0 : servicesFiltered.map((service)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "hover:bg-blue-500 hover:text-white p-2 cursor-pointer",
                                                        onClick: selectService(service),
                                                        children: [
                                                            service.code,
                                                            " - ",
                                                            service.name
                                                        ]
                                                    }, service._id))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                className: "w-full p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                                onChange: handleService,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: null,
                                                        children: "Seleccione un servicio"
                                                    }),
                                                    services === null || services === void 0 ? void 0 : services.map((service)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("option", {
                                                            value: service._id,
                                                            children: [
                                                                service.code,
                                                                " - ",
                                                                service.name
                                                            ]
                                                        }, service._id))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "font-medium text-gray-700",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "number",
                                                className: "flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent w-full",
                                                placeholder: "Cantidad",
                                                onChange: handleQuantity
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "text-lg font-semibold text-gray-800",
                                        children: [
                                            "COSTO: S./ ",
                                            cost
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        className: "bg-green-500 hover:bg-green-600 cursor-pointer text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm w-full",
                                        onClick: exportToExcel,
                                        type: "button",
                                        children: "Reporte en Excel"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "submit",
                        className: "w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                        children: "Registrar Venta"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                className: "min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden mt-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                        className: "bg-red-500",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                    className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                    children: "Cliente"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                    className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                    children: "Fecha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                    className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                    children: "DNI"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                    className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                    children: "Comensal"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                    className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                    children: "Servicio"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                    className: "px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider",
                                    children: "Total"
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
                        children: sales.map((sale)=>{
                            var _sale_diner, _sale_diner1, _sale_service;
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                className: "hover:bg-gray-50 transition-colors duration-150",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                        children: sale.bussinesClientName
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: formatDate(sale.dateTime)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (_sale_diner = sale.diner) === null || _sale_diner === void 0 ? void 0 : _sale_diner.dinerDni
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (_sale_diner1 = sale.diner) === null || _sale_diner1 === void 0 ? void 0 : _sale_diner1.dinerName
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (_sale_service = sale.service) === null || _sale_service === void 0 ? void 0 : _sale_service.serviceName
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900",
                                        children: [
                                            "S./ ",
                                            sale.price
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex align-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                className: "text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm mr-2 cursor-pointer",
                                                onClick: ()=>handleGeneratePDF(sale),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(fa6/* FaPrint */.n4o, {})
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                className: "text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm",
                                                children: "Editar"
                                            })
                                        ]
                                    })
                                ]
                            }, sale._id);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionsModal/* default */.A, {
                active: showModal,
                onClose: closeModal,
                role: selectedRole,
                permissions: permissions
            })
        ]
    });
}


/***/ }),

/***/ 22417:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7763));


/***/ }),

/***/ 32383:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ AuthProvider),
  N: () => (/* binding */ useAppAuth)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(35695);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(58801);
var jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken);
// EXTERNAL MODULE: ./app/utils/axiosInstance.js
var axiosInstance = __webpack_require__(87075);
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(11518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
;// ./app/components/LoadingScreen.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function LoadingScreen() {
    const [dots, setDots] = (0,react.useState)("");
    (0,react.useEffect)(()=>{
        const interval = setInterval(()=>{
            setDots((prev)=>prev.length >= 3 ? "" : prev + ".");
        }, 300);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "jsx-4b667fe6f7820c66" + " " + "fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "jsx-4b667fe6f7820c66" + " " + "relative w-24 h-24",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "jsx-4b667fe6f7820c66" + " " + "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "jsx-4b667fe6f7820c66" + " " + "w-16 h-16 bg-red-600 rounded-full animate-ping opacity-75"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "jsx-4b667fe6f7820c66" + " " + "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "jsx-4b667fe6f7820c66" + " " + "w-20 h-20 bg-red-500 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "jsx-4b667fe6f7820c66" + " " + "text-white text-2xl font-bold",
                                children: "E"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "jsx-4b667fe6f7820c66" + " " + "text-xl font-medium text-gray-700 flex items-center",
                children: [
                    "Cargando",
                    dots,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "jsx-4b667fe6f7820c66" + " " + "invisible",
                        children: "..."
                    }),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "jsx-4b667fe6f7820c66" + " " + "w-64 h-2 bg-gray-200 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: {
                        width: "60%",
                        animation: "progress 2s ease-in-out infinite"
                    },
                    className: "jsx-4b667fe6f7820c66" + " " + "h-full bg-red-600 rounded-full animate-[progress_2s_ease-in-out_infinite]"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)((style_default()), {
                id: "4b667fe6f7820c66",
                children: "@-webkit-keyframes progress{0%{-webkit-transform:translatex(-100%);transform:translatex(-100%)}50%{-webkit-transform:translatex(80%);transform:translatex(80%)}100%{-webkit-transform:translatex(200%);transform:translatex(200%)}}@-moz-keyframes progress{0%{-moz-transform:translatex(-100%);transform:translatex(-100%)}50%{-moz-transform:translatex(80%);transform:translatex(80%)}100%{-moz-transform:translatex(200%);transform:translatex(200%)}}@-o-keyframes progress{0%{-o-transform:translatex(-100%);transform:translatex(-100%)}50%{-o-transform:translatex(80%);transform:translatex(80%)}100%{-o-transform:translatex(200%);transform:translatex(200%)}}@keyframes progress{0%{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}50%{-webkit-transform:translatex(80%);-moz-transform:translatex(80%);-o-transform:translatex(80%);transform:translatex(80%)}100%{-webkit-transform:translatex(200%);-moz-transform:translatex(200%);-o-transform:translatex(200%);transform:translatex(200%)}}"
            })
        ]
    });
}

;// ./app/context/index.js
/* __next_internal_client_entry_do_not_use__ AuthProvider,useAppAuth auto */ 





const AuthContext = /*#__PURE__*/ (0,react.createContext)();
function AuthProvider(param) {
    let { children } = param;
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const [user, setUser] = (0,react.useState)({});
    const [isAuthenticated, setIsAuthenticated] = (0,react.useState)(null);
    const [permissionsUrl, setPermissionsUrl] = (0,react.useState)([]);
    const [isLoading, setIsLoading] = (0,react.useState)(true); // Estado de carga
    const getUserData = async (id)=>{
        try {
            const response = await axiosInstance/* default */.A.get("/users/".concat(id));
            if (response.status === 200) {
                setUser(response.data);
                setIsAuthenticated(true);
            /* 
                const newPermissions = [...response.data.permissions, ...response.data.role[0].permissions];
                setPermissionsUrl(newPermissions);
                */ }
        } catch (error) {
            console.error('Error al obtener datos del usuario:', error);
            throw error; // Propagar el error para manejarlo en el catch
        }
    };
    const handleLogout = ()=>{
        setUser({});
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        router.push('/');
    };
    // Efecto para verificar autenticación al montar el componente
    (0,react.useEffect)(()=>{
        const checkAuth = async ()=>{
            const token = localStorage.getItem('token');
            try {
                if (!token) throw new Error("No hay token");
                const decoded = jsonwebtoken_default().decode(token);
                if (!decoded) throw new Error("Token inválido");
                await getUserData(decoded.id); // Esperar a getUserData
                // Redirigir a Home si está en la raíz y autenticado
                if (pathname === '/') {
                    router.push('/');
                }
            } catch (error) {
                handleLogout();
            } finally{
                setIsLoading(false); // Finalizar carga
            }
        };
        checkAuth();
    }, []); // Solo se ejecuta al montar
    // Efecto para manejar redirecciones post-autenticación
    /* useEffect(() => {
        if (isLoading) return; // Esperar a que termine la carga

        if (isAuthenticated) {
            // Verificar permisos si no está en la raíz
            if (pathname !== '/') {
                const hasPermission = user.permissions?.some(
                    (p) => `/${p.url}` === pathname
                );
                if (!hasPermission) {
                    router.push('/'); // Redirigir si no tiene permiso
                }
            }
        } else if (pathname !== '/') {
            router.push('/'); // Redirigir no autenticados a login
        }
    }, [isAuthenticated, isLoading, pathname]); */ // Mostrar carga mientras se verifica
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingScreen, {});
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated,
            getUserData,
            handleLogout
        },
        children: children
    });
}
function useAppAuth() {
    return (0,react.useContext)(AuthContext);
}


/***/ }),

/***/ 50477:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 62470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PermissionsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62177);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87075);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115);




function PermissionsModal(param) {
    let { active = false, onClose, role, permissions, selectedPermissions } = param;
    const { register, watch, getValues, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .mN)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setValue("pickedPermissions", []);
        selectedPermissions === null || selectedPermissions === void 0 ? void 0 : selectedPermissions.forEach((permission)=>{
            setValue("pickedPermissions", [
                ...getValues("pickedPermissions"),
                permission
            ]);
        });
    }, [
        selectedPermissions,
        setValue,
        getValues
    ]);
    const checkboxValues = watch("pickedPermissions");
    const syncPermissions = async ()=>{
        const selectedPermissions = getValues("pickedPermissions");
        const data = {
            roleId: role._id,
            selectedPermissions: selectedPermissions
        };
        await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.post("/permissions-role", data).then((result)=>{
            onClose();
        }).catch((err)=>{
            console.error(err);
        });
        console.log("Sincronizando permisos", selectedPermissions);
    };
    if (!active) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative z-10",
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "fixed inset-0 bg-gray-500/75 transition-opacity",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "sm:flex sm:items-start",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                                className: "size-6 text-yellow-600",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "1.5",
                                                stroke: "currentColor",
                                                "aria-hidden": "true",
                                                "data-slot": "icon",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                    className: "text-base font-semibold text-gray-900",
                                                    id: "modal-title",
                                                    children: "Asignar permisos"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                    className: "mt-2",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            "Est\xe1s seguro de asignarle estos permisos a ",
                                                            role.name,
                                                            "?",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                permissions.map((permission)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-sm text-gray-800",
                                                        children: [
                                                            permission.name,
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                type: "checkbox",
                                                                className: "ml-2",
                                                                value: permission._id,
                                                                ...register("pickedPermissions")
                                                            })
                                                        ]
                                                    }, permission._id))
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                        type: "button",
                                        className: "inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 sm:ml-3 sm:w-auto cursor-pointer",
                                        onClick: syncPermissions,
                                        children: "Sincronizar"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
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


/***/ }),

/***/ 83686:
/***/ (() => {

/* (ignored) */

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
/******/ __webpack_require__.O(0, [268,446,524,247,788,746,792,464,558,17,30,441,684,358], () => (__webpack_exec__(22417)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);