import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ChildComponent from "@/app/components/ChildComponent";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Navbar />
        <ChildComponent>
            {children}
        </ChildComponent>
        <Footer />
      </body>
    </html>
  );
}
