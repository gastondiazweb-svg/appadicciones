import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Una Voz de Ayuda | Orientación inicial sobre adicciones",
  description:
    "Una primera llamada de orientación y contención para familias y personas atravesadas por el consumo problemático. Llamadas gratuitas en horario de atención."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
