import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/app/components/navbar/Navbar";

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
      </body>
    </html>
  )
}
