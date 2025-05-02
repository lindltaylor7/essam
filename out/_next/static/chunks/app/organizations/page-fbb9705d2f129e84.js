(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[425],{

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

/***/ 95086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrganizationsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46361);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35695);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function OrganizationsPage() {
    const { isAuthenticated, user } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useAppAuth */ .N)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [
        isAuthenticated
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            user.name,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                children: "P\xe1gina protegida - Organizaciones Welcome"
            })
        ]
    });
}


/***/ }),

/***/ 96853:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 95086));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [268,464,17,441,684,358], () => (__webpack_exec__(96853)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);