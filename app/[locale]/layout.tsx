import type { Metadata } from 'next'
import { onest } from '../ui/fonts/fonts'
import Footer from '../ui/main-sections/Footer'
import Header from '../ui/main-sections/Header'
import { NextIntlClientProvider } from 'next-intl'
import spanish from './../../messages/es.json';
import english from './../../messages/en.json';
import '../globals.css'

type LanguagesConfigured = 'es' | 'en';

export const metadata: Metadata = {
  title: 'Premios ESLAND DEV',
  description: 'Clon con fines educativos de sitio web de los premios ESLAND en el rubro del streaming.',
}

export default function RootLayout({
  children, params: { locale }
}: {
  children: React.ReactNode
  params: { locale: LanguagesConfigured }
}) {
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={locale === 'en' ? english : spanish}>
        <body className={onest.className}>
          <Header locale={locale}/>
            {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
