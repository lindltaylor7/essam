import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { FaAngleDown, FaAngleUp, FaRegPaperPlane } from "react-icons/fa6";
import { useAppAuth } from "../context";

const Chat = () => {
  const { user } = useAppAuth();
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("respuesta", (data) => {
      setMensajes((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const enviarMensaje = () => {
    if (mensaje.trim()) {
      const socket = io("http://localhost:4000");
      socket.emit("mensaje", { mensaje, user });
      setMensaje("");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        width: "300px",
      }}
    >
      {/* Encabezado del chat */}
      <div
        style={{
          backgroundColor: "#8B0000", // Rojo oscuro
          color: "white",
          padding: "10px 15px",
          borderRadius: "8px 8px 0 0",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 style={{ margin: 0, fontSize: "16px" }}>Chat</h1>
        <span>{isOpen ? <FaAngleDown /> : <FaAngleUp />}</span>
      </div>

      {/* Cuerpo del chat (condicional) */}
      {isOpen && (
        <div
          style={{
            backgroundColor: "#FFFAFA", // Blanco rojizo claro
            border: "1px solid #8B0000",
            borderRadius: "0 0 8px 8px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Área de mensajes */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              borderBottom: "1px solid #FFD4D4",
            }}
          >
            {mensajes.map((msg, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFE4E1", // Rosa pálido
                  padding: "8px",
                  margin: "5px 0",
                  borderRadius: "4px",
                  color: "#8B0000",
                  fontSize: "14px",
                }}
              >
                {msg}
              </div>
            ))}
          </div>

          {/* Input y botón */}
          <div style={{ padding: "10px", display: "flex", gap: "8px" }}>
            <input
              type="text"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && enviarMensaje()}
              style={{
                flex: 1,
                padding: "8px",
                border: "1px solid #8B0000",
                borderRadius: "4px",
                outline: "none",
              }}
              placeholder="Escribe un mensaje..."
            />
            <button
              onClick={enviarMensaje}
              style={{
                backgroundColor: "#DC143C", // Rojo carmesí
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "8px 12px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#B22222")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#DC143C")
              }
            >
              <FaRegPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
