import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = () => {
    const [socket, setSocket] = useState(null);
  
    useEffect(() => {
      const socketInstance = io("http://localhost:4000"); // URL de tu backend
  
      socketInstance.on("connect", () => {
        console.log("Conectado al servidor Socket.IO");
      });
  
      setSocket(socketInstance);
  
      return () => {
        if (socketInstance) socketInstance.disconnect();
      };
    }, []);
  
    return socket;
  };