import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { LanguageProvider } from '@/components/language'
import { DocumentTitle } from '@/components/document-title'
import { languageBootScript, langFromStored } from '@/components/language-boot'
import { translate } from '@/language/strings'

export async function generateMetadata(): Promise<Metadata> {
  const jar = await cookies()
  const lang = langFromStored(jar.get('dln-lang')?.value) ?? 'en'
  return {
    title: {
      default: translate('home.name', lang),
      template: '%s — DOK',
    },
    description: translate('home.tagline', lang),
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
      other: [
        { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      ],
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jar = await cookies()
  const initialLang = langFromStored(jar.get('dln-lang')?.value) ?? 'en'

  return (
    <html lang={initialLang === 'dln' ? 'x-dln' : 'en'} data-rendered-lang={initialLang} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: languageBootScript }} />
        <LanguageProvider initialLang={initialLang}>
          <DocumentTitle />
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
