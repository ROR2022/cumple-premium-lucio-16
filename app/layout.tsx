import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Open_Sans, Creepster } from "next/font/google"
import "./globals.css"
import "../styles/blood-drip-font.css"
import { quinceMainData } from "@/components/sections/data/main-data"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

// Fuente Halloween similar a Blood Drip
const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-halloween",
})

const { event } = quinceMainData;

export const metadata: Metadata = {
  title: `Invitación a mi Cumple - ${event.celebrant}`,
  description: `Acompáñame a celebrar mi cumpleaños el ${event.date.full}.`,
  generator: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${openSans.variable} ${creepster.variable}`}>
      <head>
        {/* Fuentes Halloween adicionales via CDN */}
        <link href="https://fonts.googleapis.com/css2?family=Butcherman&family=Nosifer&family=Eater&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
