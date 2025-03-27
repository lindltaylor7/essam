"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-6">
      <div className="relative w-24 h-24">
        {/* Logo animado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full animate-ping opacity-75"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">E</span>
          </div>
        </div>
      </div>

      {/* Texto con animación de puntos */}
      <div className="text-xl font-medium text-gray-700 flex items-center">
        Cargando{dots}
        <span className="invisible">...</span> {/* Espacio reservado */}
      </div>

      {/* Barra de progreso sutil */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-600 rounded-full animate-[progress_2s_ease-in-out_infinite]"
          style={{
            width: "60%",
            animation: "progress 2s ease-in-out infinite",
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(80%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
}
