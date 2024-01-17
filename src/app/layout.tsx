import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import {globalStore} from "@/store/globalStore";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MM Systems',
  description: 'MM Systems Soluzioni Industriali',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
