(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[786],{

/***/ 15401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Register)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(35695);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(62177);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(23464);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./app/utils/axiosInstance.js
var axiosInstance = __webpack_require__(87075);
;// ./app/components/modal.js



function Modal(param) {
    let { active = false, userName, onClose, permissions, userId } = param;
    const { register, watch, getValues } = (0,index_esm/* useForm */.mN)();
    const checkboxValues = watch("pickedPermissions");
    const syncPermissions = async ()=>{
        const selectedPermissions = getValues("pickedPermissions");
        const data = {
            userId: userId,
            selectedPermissions: selectedPermissions
        };
        await axiosInstance/* default */.A.post('/permissions-user', data).then((result)=>{
            onClose();
        }).catch((err)=>{
            console.error(err);
        });
        console.log('Sincronizando permisos', selectedPermissions);
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
                                                    children: "Asignar permisos"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "mt-2",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            "Est\xe1s seguro de asignarle estos permisos a ",
                                                            userName,
                                                            "? "
                                                        ]
                                                    })
                                                }),
                                                permissions.map((permission)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "text-sm text-gray-800",
                                                        children: [
                                                            permission.name,
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
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
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "button",
                                        className: "inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 sm:ml-3 sm:w-auto cursor-pointer",
                                        onClick: syncPermissions,
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

;// ./app/registeres/page.js
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Register() {
    const router = (0,navigation.useRouter)();
    const { handleSubmit, register } = (0,index_esm/* useForm */.mN)();
    const [users, setUsers] = (0,react.useState)([]);
    const [permissions, setPermissions] = (0,react.useState)([]);
    const [isModalOpen, setIsModalOpen] = (0,react.useState)(false);
    const [userSelected, setUserSelected] = (0,react.useState)({});
    (0,react.useEffect)(()=>{
        axiosInstance/* default */.A.get('/users').then((result)=>{
            setUsers(result.data);
        }).catch((err)=>{
            console.error(err);
        });
        axiosInstance/* default */.A.get('/permissions').then((response)=>{
            setPermissions(response.data);
        }).catch((error)=>{
            console.error('Error al obtener los permisos:', error);
        });
    }, []);
    const onSubmit = async (data)=>{
        try {
            // Enviar los datos del formulario al servidor en el puerto 4000
            const response = await axios/* default */.A.post('http://localhost:4000/api/users', data);
            // Si la respuesta es exitosa, redirigir a /organizations
            if (response.status === 201) {
                alert('Usuario registrado OK.');
            }
        } catch (error) {
            // Manejar errores (por ejemplo, credenciales incorrectas)
            console.error('Error al enviar los datos:', error);
            alert('Error al registrar nuevo usuario.');
        }
    };
    const deleteUser = (id)=>{};
    const openModal = (user)=>{
        setIsModalOpen(true);
        setUserSelected(user);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
            className: "flex flex-col gap-8 row-start-2 items-center sm:items-start",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                    className: "text-3xl sm:text-4xl text-center sm:text-left",
                    children: "Registro de Usuarios"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                    onSubmit: handleSubmit(onSubmit),
                    className: "rounded p-5 bg-zinc-800 flex flex-col w-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "text",
                            className: "p-2 my-2 bg-zinc-500 rounded",
                            placeholder: "Nombre",
                            ...register("name")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "text",
                            className: "p-2 my-2 bg-zinc-500 rounded",
                            placeholder: "Apellido",
                            ...register("lastname")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "text",
                            className: "p-2 my-2 bg-zinc-500 rounded",
                            placeholder: "Email",
                            ...register("email")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "password",
                            className: "p-2 my-2 bg-zinc-500 rounded",
                            placeholder: "Password",
                            ...register("password")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "submit",
                            className: "bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md",
                            value: "Registrarse"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                    className: "min-w-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                            className: "bg-gray-200",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Nombre"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "LastName"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Opciones"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: users.map((user)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: user.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                            children: user.lastname
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                            children: user.email
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                    className: "bg-blue-500 text-white px-4 py-2 rounded-md",
                                                    onClick: ()=>openModal(user),
                                                    children: "Permisos"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                    className: "bg-green-500 text-white px-4 py-2 rounded-md",
                                                    children: "Editar"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                    className: "bg-red-500 text-white px-4 py-2 rounded-md",
                                                    onClick: deleteUser(user._id),
                                                    children: "Eliminar"
                                                })
                                            ]
                                        })
                                    ]
                                }, user._id))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Modal, {
                    active: isModalOpen,
                    userName: userSelected.name,
                    onClose: closeModal,
                    permissions: permissions,
                    userId: userSelected._id
                })
            ]
        })
    });
}


/***/ }),

/***/ 35210:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 15401));


/***/ }),

/***/ 35695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18999);
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "usePathname")) __webpack_require__.d(__webpack_exports__, { usePathname: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useRouter")) __webpack_require__.d(__webpack_exports__, { useRouter: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter; } });


//# sourceMappingURL=navigation.js.map

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
/******/ __webpack_require__.O(0, [464,558,441,684,358], () => (__webpack_exec__(35210)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);