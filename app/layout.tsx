import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Header from "@/components/Header";
import Footer from "@/components/Footer.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Soft",
  description: "Web Soft Ghana Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Background with Watermarks */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[-10] bg-[#d8d7d7] overflow-hidden">
          {/* Left bg-image */}
          <Image
            className="rotate-30 opacity-50"
            style={{ position: "fixed", left: "-202px", top: "100px" }}
            src="/assets/images/Watermark.webp"
            alt="bg-image"
            width={500}
            height={500}
          />
          {/* Right bg-image */}
          <Image
            className="rotate-[270deg] opacity-50"
            style={{ position: "fixed", right: "-200px", top: "300px" }}
            src="/assets/images/Watermark.webp"
            alt="bg-image"
            width={500}
            height={500}
          />
        </div>

        {/* Floating WhatsApp Icon */}
        <WhatsAppWidget />

        <div className="bg-white container max-w-[1200px] mx-auto shadow-xl relative z-10">
           {/*Site Header  */}
          <Header />
          {/* Site structure */}
          <main>
            {children}
          </main>
          {/* Site Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
