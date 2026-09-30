import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: {
    default: 'Doelenia Ommia Kazen',
    template: '%s — DOK',
  },
  description: 'The Ark for Humanity.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
