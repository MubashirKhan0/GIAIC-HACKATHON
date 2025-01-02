import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer.tsx/Footer";
import Footer1 from "./components/Footer.tsx/Footer1";

const poppins_init = Poppins({
  variable: "--font-poppins", 
  weight:["400", "500", "700"],
  subsets:["latin"]
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${poppins_init.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        
        {children}

        <Footer1/>
        
      </body>
    </html>
  );
}