import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteName = "Una Voz de Ayuda";
const siteUrl = "https://unavozdeayuda.org";
const defaultTitle = "Una Voz de Ayuda | Orientación inicial sobre adicciones y consumo problemático";
const defaultDescription =
  "Brindamos orientación inicial gratuita para familias y personas atravesadas por adicciones y consumo problemático: contención, escucha y próximos pasos claros.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "adicciones",
    "consumo problemático",
    "ayuda para adicciones",
    "orientación para familias",
    "contención emocional",
    "acompañamiento en crisis",
    "prevención de adicciones",
    "primera ayuda en adicciones",
    "familia y consumo",
    "salud mental"
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription
  },
  category: "health"
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
