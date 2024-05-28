import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Common/Header"
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
export const metadata = {
  title: "pix-bey",
  description: "Create next imtious-dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      
      <body className={inter.className}  style={{  margin: '0 auto' }}>
        
      {/* <Header/> */}
        {children}</body>
    </html>
  );
}
