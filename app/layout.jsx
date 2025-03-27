import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutClient from "./layout-client";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Regular y Bold
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "ESSAM",
  description: "Servicios generales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="antialiased">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
