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
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/img/favicons/favicon-light.svg',
        href: '/img/favicons/favicon-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/img/favicons/favicon-dark.svg',
        href: '/img/favicons/favicon-dark.svg',
      },
    ]
  }
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
