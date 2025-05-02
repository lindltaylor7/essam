(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[177],{

/***/ 19324:
/***/ (() => {

// extracted by mini-css-extract-plugin

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


/***/ }),

/***/ 93310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LayoutClient)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(35695);
// EXTERNAL MODULE: ./node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(6874);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./app/context/index.js + 1 modules
var context = __webpack_require__(46361);
// EXTERNAL MODULE: ./app/utils/axiosInstance.js
var axiosInstance = __webpack_require__(87075);
;// ./app/components/menu.jsx



function Menu(param) {
    let { user } = param;
    return /*#__PURE__*/ _jsx("div", {
        className: "flex flex-row space-x-4",
        children: user.permissions.map((permission)=>{
            return /*#__PURE__*/ _jsx(Link, {
                href: "/" + permission.url,
                children: /*#__PURE__*/ _jsx("p", {
                    className: "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white",
                    "aria-current": "page",
                    children: permission.name
                })
            }, permission._id);
        })
    });
}

// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.mjs
var fa6 = __webpack_require__(64315);
;// ./app/components/Navbar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function Navbar(param) {
    let { switchSidebar } = param;
    var _user_name, _user_permissions;
    const router = (0,navigation.useRouter)();
    const logOut = ()=>{
        console.log("logOut");
        axiosInstance/* default */.A.get("/logout");
        setIsAuthenticated(false);
        setUser({});
        router.push("/");
    };
    const { user, setUser, isAuthenticated, setIsAuthenticated, handleLogout } = (0,context/* useAppAuth */.N)();
    const [isVisible, setIsVisible] = (0,react.useState)(false);
    const [navbarStatus, setNavbarStatus] = (0,react.useState)(false);
    const [isMenuOpen, setIsMenuOpen] = (0,react.useState)(false);
    const closeSidebar = ()=>{
        switchSidebar();
    };
    const handleNavbarResponsive = ()=>{
        setNavbarStatus(!navbarStatus);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: "bg-white mt-2 rounded mx-4 shadow-sm border border-gray-200 sm:mx-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative flex h-16 items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                type: "button",
                                className: "relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500",
                                "aria-controls": "mobile-menu",
                                "aria-expanded": "false",
                                onClick: handleNavbarResponsive,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "absolute -inset-0.5"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "sr-only",
                                        children: "Open main menu"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        className: "block size-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        "aria-hidden": "true",
                                        "data-slot": "icon",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        className: "hidden size-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        "aria-hidden": "true",
                                        "data-slot": "icon",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 18 18 6M6 6l12 12"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "sm:block flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex shrink-0 items-center ",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(fa6/* FaBars */.OXb, {
                                        onClick: closeSidebar,
                                        className: "text-zinc-600 hover:text-red-600 cursor-pointer transition-colors duration-200 hidden sm:block"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "hidden sm:ml-6 sm:block"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative ml-3",
                                style: {
                                    display: isAuthenticated ? "block" : "none"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            type: "button",
                                            className: "relative flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:bg-gray-200 transition-colors duration-200",
                                            id: "user-menu-button",
                                            "aria-expanded": "false",
                                            "aria-haspopup": "true",
                                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                            onBlur: ()=>setTimeout(()=>setIsMenuOpen(false), 100),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "absolute -inset-1.5"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "Open user menu"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "size-8 rounded-full flex items-center justify-center bg-red-600 hover:bg-red-700 transition-colors duration-200",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "text-white font-medium",
                                                        children: (user === null || user === void 0 ? void 0 : (_user_name = user.name) === null || _user_name === void 0 ? void 0 : _user_name[0]) || "?"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none transition-opacity duration-200 ".concat(isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"),
                                        role: "menu",
                                        "aria-orientation": "vertical",
                                        "aria-labelledby": "user-menu-button",
                                        tabIndex: "-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "#",
                                                className: "block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200",
                                                role: "menuitem",
                                                tabIndex: "-1",
                                                id: "user-menu-item-0",
                                                children: "Mi Perfil"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "#",
                                                className: "block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200",
                                                role: "menuitem",
                                                tabIndex: "-1",
                                                id: "user-menu-item-1",
                                                children: "Configuraci\xf3n"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200",
                                                role: "menuitem",
                                                tabIndex: "-1",
                                                id: "user-menu-item-2",
                                                onClick: handleLogout,
                                                onMouseDown: (e)=>e.preventDefault(),
                                                children: "Salir"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: navbarStatus ? "sm:hidden" : "hidden",
                id: "mobile-menu",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "space-y-1 px-2 pt-2 pb-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                            href: "/",
                            className: "block",
                            onClick: ()=>setNavbarStatus(false),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200",
                                children: "Home"
                            })
                        }),
                        user === null || user === void 0 ? void 0 : (_user_permissions = user.permissions) === null || _user_permissions === void 0 ? void 0 : _user_permissions.map((permission)=>/*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                href: "/".concat(permission.url),
                                className: "block",
                                onClick: ()=>setNavbarStatus(false),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200",
                                    children: permission.name
                                })
                            }, permission._id))
                    ]
                })
            })
        ]
    });
}

;// ./app/components/sidebar.jsx






function Sidebar(param) {
    let { sidebarStatus } = param;
    var _user_permissions;
    const pathname = (0,navigation.usePathname)();
    const { user, setUser, isAuthenticated, setIsAuthenticated, handleLogout } = (0,context/* useAppAuth */.N)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col bg-white h-screen fixed left-0 top-0 px-1 border-r border-gray-200\n    transition-all duration-300 ease-in-out shadow-lg overflow-hidden\n    ".concat(sidebarStatus ? "w-64 opacity-100" : "w-0 opacity-0"),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: "/",
                className: "px-4 py-6 hover:bg-gray-50 transition-colors duration-200 shrink-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-2xl font-bold text-center text-red-600",
                    children: "Essam"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 overflow-y-auto py-2",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "space-y-1 px-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ".concat(pathname === "/" ? "bg-red-600 text-white shadow-md" : "text-gray-700 hover:bg-red-50 hover:text-red-600"),
                                "aria-current": "page",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(fa6/* FaHouse */.yYW, {
                                        className: "mr-3 text-base"
                                    }),
                                    "Inicio"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                            href: "/divisions",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200",
                                "aria-current": "page",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(fa6/* FaHouse */.yYW, {
                                        className: "mr-3 text-base"
                                    }),
                                    "Quebrados"
                                ]
                            })
                        }),
                        user === null || user === void 0 ? void 0 : (_user_permissions = user.permissions) === null || _user_permissions === void 0 ? void 0 : _user_permissions.map((permission)=>/*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                href: "/".concat(permission.url),
                                className: "block",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ".concat(pathname === "/".concat(permission.url) ? "bg-red-600 text-white shadow-md" : "text-gray-700 hover:bg-red-50 hover:text-red-600"),
                                    "aria-current": "page",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(fa6/* FaCheck */.CMH, {
                                            className: "mr-3 text-base"
                                        }),
                                        permission.name
                                    ]
                                })
                            }, permission._id))
                    ]
                })
            })
        ]
    });
}

;// ./app/layout-client.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





// Componente interno que usa el contexto
function AuthenticatedLayout(param) {
    let { children } = param;
    const pathname = (0,navigation.usePathname)();
    const { isAuthenticated } = (0,context/* useAppAuth */.N)(); // Usamos el hook personalizado
    const isHomePage = pathname === "/";
    // Si aún no se ha verificado la autenticación y no es la página de inicio
    if (isAuthenticated === null && !isHomePage) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "Cargando..."
        });
    }
    const [sidebarStatus, setSidebarStatus] = (0,react.useState)(true);
    const switchSidebar = ()=>{
        setSidebarStatus(!sidebarStatus);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-1",
            children: [
                (!isHomePage || isAuthenticated) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "fixed inset-y-0 left-0 z-10",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Sidebar, {
                        sidebarStatus: sidebarStatus
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                    className: "flex-1 ".concat(!isHomePage || isAuthenticated ? sidebarStatus ? "pl-64" // Ajusta según el ancho de tu sidebar
                     : "" : ""),
                    children: [
                        (!isHomePage || isAuthenticated) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbar, {
                            switchSidebar: switchSidebar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "min-h-screen p-8 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)] w-full",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "gap-8 row-start-2 items-center sm:items-start",
                                children: children
                            })
                        })
                    ]
                })
            ]
        })
    });
}
// Componente principal que envuelve con AuthProvider
function LayoutClient(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* AuthProvider */.O, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AuthenticatedLayout, {
            children: children
        })
    });
}


/***/ }),

/***/ 95663:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93310));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 83893, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 19324, 23));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [132,268,446,464,17,313,441,684,358], () => (__webpack_exec__(95663)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);