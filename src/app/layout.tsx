import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

/* ====== BODY FONT (Google Font: Montserrat) ====== */
const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

/* ====== METADATA ====== */
export const metadata: Metadata = {
  title: "Kalisloka - Banana",
  description:
    "Official website of Kalisloka — Agricultural Raw Material Supply & Trade Partner.",
  icons: {
    icon: "/icons/favicon.svg",
    shortcut: "/icons/favicon.svg",
  },
};

/* ====== ROOT LAYOUT ====== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PRELOAD CUSTOM HEADING FONT */}
        <link
          rel="preload"
          href="/fonts/LT-Glockenspiel.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>

      <body className={`${montserrat.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
