import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Dancing_Script, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Ticiana - 15 Primaveras",
  description: "Te invito a celebrar mis 15 años con una fiesta inolvidable.",
  generator: "v0.app",
  openGraph: {
    title: "Ticiana - 15 Primaveras",
    description: "Te invito a celebrar mis 15 años con una fiesta inolvidable. ¡Confirmá tu asistencia!",
    images: [
      {
        url: "/00.jpg",
        width: 1200,
        height: 630,
        alt: "Ticiana - 15 hermosas Primaveras",
      },
    ],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ticiana - 15 Primaveras",
    description: "Te invito a celebrar mis 15 años con una fiesta inolvidable. ¡Confirmá tu asistencia!",
    images: ["/00.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dancingScript.variable} ${montserrat.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
