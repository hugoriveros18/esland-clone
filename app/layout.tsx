import type { Metadata } from 'next'
import { onest } from './ui/fonts/fonts'
import Footer from './ui/main-sections/Footer'
import Header from './ui/main-sections/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premios ESLAND DEV',
  description: 'Clon con fines educativos de sitio web de los premios ESLAND en el rubro del streaming.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
