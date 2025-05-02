(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[974],{

/***/ 7315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(35695);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(62177);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(23464);
// EXTERNAL MODULE: ./app/context/index.js + 1 modules
var context = __webpack_require__(46361);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(66766);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/socket.io-client/build/esm/index.js + 28 modules
var esm = __webpack_require__(14298);
;// ./app/components/Chat.jsx





const Chat = ()=>{
    const { user } = useAppAuth();
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        const socket = io("http://localhost:4000");
        socket.on("respuesta", (data)=>{
            setMensajes((prev)=>[
                    ...prev,
                    data
                ]);
        });
        return ()=>{
            socket.disconnect();
        };
    }, []);
    const enviarMensaje = ()=>{
        if (mensaje.trim()) {
            const socket = io("http://localhost:4000");
            socket.emit("mensaje", {
                mensaje,
                user
            });
            setMensaje("");
        }
    };
    return /*#__PURE__*/ _jsxs("div", {
        style: {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            width: "300px"
        },
        children: [
            /*#__PURE__*/ _jsxs("div", {
                style: {
                    backgroundColor: "#8B0000",
                    color: "white",
                    padding: "10px 15px",
                    borderRadius: "8px 8px 0 0",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                onClick: ()=>setIsOpen(!isOpen),
                children: [
                    /*#__PURE__*/ _jsx("h1", {
                        style: {
                            margin: 0,
                            fontSize: "16px"
                        },
                        children: "Chat"
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        children: isOpen ? /*#__PURE__*/ _jsx(FaAngleDown, {}) : /*#__PURE__*/ _jsx(FaAngleUp, {})
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ _jsxs("div", {
                style: {
                    backgroundColor: "#FFFAFA",
                    border: "1px solid #8B0000",
                    borderRadius: "0 0 8px 8px",
                    height: "300px",
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        style: {
                            flex: 1,
                            padding: "10px",
                            overflowY: "auto",
                            borderBottom: "1px solid #FFD4D4"
                        },
                        children: mensajes.map((msg, index)=>/*#__PURE__*/ _jsx("div", {
                                style: {
                                    backgroundColor: "#FFE4E1",
                                    padding: "8px",
                                    margin: "5px 0",
                                    borderRadius: "4px",
                                    color: "#8B0000",
                                    fontSize: "14px"
                                },
                                children: msg
                            }, index))
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        style: {
                            padding: "10px",
                            display: "flex",
                            gap: "8px"
                        },
                        children: [
                            /*#__PURE__*/ _jsx("input", {
                                type: "text",
                                value: mensaje,
                                onChange: (e)=>setMensaje(e.target.value),
                                onKeyPress: (e)=>e.key === "Enter" && enviarMensaje(),
                                style: {
                                    flex: 1,
                                    padding: "8px",
                                    border: "1px solid #8B0000",
                                    borderRadius: "4px",
                                    outline: "none"
                                },
                                placeholder: "Escribe un mensaje..."
                            }),
                            /*#__PURE__*/ _jsx("button", {
                                onClick: enviarMensaje,
                                style: {
                                    backgroundColor: "#DC143C",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    padding: "8px 12px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    transition: "background 0.3s"
                                },
                                onMouseOver: (e)=>e.currentTarget.style.backgroundColor = "#B22222",
                                onMouseOut: (e)=>e.currentTarget.style.backgroundColor = "#DC143C",
                                children: /*#__PURE__*/ _jsx(FaRegPaperPlane, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Chat = ((/* unused pure expression or super */ null && (Chat)));

;// ./app/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Home() {
    const { user, setUser, getUserData, isAuthenticated } = (0,context/* useAppAuth */.N)();
    const router = (0,navigation.useRouter)();
    const { handleSubmit, register } = (0,index_esm/* useForm */.mN)();
    const onSubmit = async (data)=>{
        try {
            // Enviar los datos del formulario al servidor en el puerto 4000
            const response = await axios/* default */.A.post("http://localhost:8000/api" + "/login", data);
            console.log("response", response);
            // Si la respuesta es exitosa, redirigir a /organizations
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                getUserData(response.data.id);
            }
        } catch (error) {
            // Manejar errores (por ejemplo, credenciales incorrectas)
            console.error("Error al enviar los datos:", error);
            alert(error.response.data.message);
        }
    };
    if (isAuthenticated) {
        var _user_role_;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "w-full bg-white rounded-xl shadow-md overflow-hidden mb-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "md:flex",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "p-8 md:w-2/3 bg-gradient-to-r from-red-50 to-white",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "uppercase tracking-wide text-sm text-red-600 font-semibold",
                                    children: "Bienvenido al sistema"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                    className: "mt-2 text-3xl sm:text-4xl font-bold text-gray-800",
                                    children: [
                                        "Hola ",
                                        user === null || user === void 0 ? void 0 : user.name,
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-red-500",
                                            children: "\uD83C\uDF89"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "mt-3 text-xl text-gray-600",
                                    children: (user === null || user === void 0 ? void 0 : user.role) && ((_user_role_ = user.role[0]) === null || _user_role_ === void 0 ? void 0 : _user_role_.name)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "mt-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full",
                                        children: [
                                            "\xdaltimo acceso: ",
                                            new Date().toLocaleDateString()
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "md:w-1/3 bg-red-50 flex items-center justify-center p-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: "h-48 object-contain",
                                src: "https://cdn-icons-png.flaticon.com/512/4775/4775940.png",
                                alt: "Ilustraci\xf3n de bienvenida"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 border-t border-gray-100",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-gray-50 p-4 rounded-lg flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "bg-red-100 p-3 rounded-full mr-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        className: "w-6 h-6 text-red-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "Usuarios activos"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "font-bold text-lg",
                                            children: "24"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-gray-50 p-4 rounded-lg flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "bg-blue-100 p-3 rounded-full mr-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        className: "w-6 h-6 text-blue-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "Registros hoy"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "font-bold text-lg",
                                            children: "12"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-gray-50 p-4 rounded-lg flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "bg-green-100 p-3 rounded-full mr-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        className: "w-6 h-6 text-green-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "Tareas completadas"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "font-bold text-lg",
                                            children: "18/24"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-gray-50 flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-full md:w-2/5 flex items-center justify-center p-8",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full max-w-md space-y-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "text-4xl font-extrabold text-red-600 mb-2",
                                    children: "Essam"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-gray-600",
                                    children: "Sistema de gesti\xf3n"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            onSubmit: handleSubmit(onSubmit),
                            className: "mt-8 space-y-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "rounded-md space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    htmlFor: "email",
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Correo Electr\xf3nico"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    id: "email",
                                                    type: "email",
                                                    autoComplete: "email",
                                                    required: true,
                                                    className: "relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                                    placeholder: "tu@email.com",
                                                    ...register("email", {
                                                        required: true
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    htmlFor: "password",
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Contrase\xf1a"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    id: "password",
                                                    type: "password",
                                                    autoComplete: "current-password",
                                                    required: true,
                                                    className: "relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                                    placeholder: "••••••••",
                                                    ...register("password", {
                                                        required: true
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    id: "remember-me",
                                                    name: "remember-me",
                                                    type: "checkbox",
                                                    className: "h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    htmlFor: "remember-me",
                                                    className: "ml-2 block text-sm text-gray-700",
                                                    children: "Recordar sesi\xf3n"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-sm",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "#",
                                                className: "font-medium text-red-600 hover:text-red-500",
                                                children: "\xbfOlvidaste tu contrase\xf1a?"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "submit",
                                        className: "group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200",
                                        children: "Ingresar al sistema"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-center text-sm text-gray-500",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    "\xbfNo tienes una cuenta?",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#",
                                        className: "font-medium text-red-600 hover:text-red-500",
                                        children: "Contacta al administrador"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "hidden md:block md:w-3/5 relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-red-900/20"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                        src: "/kitchen.jpg",
                        alt: "Cocina industrial",
                        layout: "fill",
                        objectFit: "cover",
                        className: "object-cover",
                        priority: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute bottom-8 left-8 right-8 text-white",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-2xl font-bold mb-2",
                                children: "Optimiza la gesti\xf3n de tu comedor"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "opacity-90",
                                children: "Control de inventarios, men\xfas y comensales en un solo lugar"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


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

/***/ 54203:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7315));


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
/******/ __webpack_require__.O(0, [268,464,558,17,757,441,684,358], () => (__webpack_exec__(54203)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);