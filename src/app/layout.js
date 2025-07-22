import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import { Navbar } from '../components/Navbar';
import {Footer} from '../components/Footer';
import BootstrapClient from '../providers/Bootstrap';
import NextAuthProvider from "@/providers/SessionProvider";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  charset: "utf-8",
  width: "device-width",
  initialScale: 1,
  shrinkToFit: "no",
};

export const metadata = {
  title: "Ted Blog - Start Bootstrap Theme",
  description: "",
  author: "",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="zh-tw">
      
      <body>
        <NextAuthProvider>
          <Navbar />      {/* 可以安全使用 useSession() */}
          {children}
          <Footer />
          <BootstrapClient />  {/* 載入 Bootstrap JS */}
        </NextAuthProvider>
      </body>

    </html>
  );
}
