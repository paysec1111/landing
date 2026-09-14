import type { Metadata } from "next";
import { Manrope, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "FiftyPay — Global Payment Infrastructure",
  description:
    "FiftyPay is a trusted payment service provider delivering high-performance banking infrastructure for merchants, PSPs, wallets, and marketplaces.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg font-sans text-fg antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
