import React from 'react'
import '@/styles/global.css'
import { Inter, Sora } from 'next/font/google'
import { Metadata } from 'next'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '600', '700'], // ajusta según tu estilo
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'High Commerce',
  description: 'Vende más, aunque tengas miles de productos.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
