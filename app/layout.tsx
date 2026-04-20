import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Karibe Diseño | Diseño Web Profesional Inspirado en el Caribe',
  description: 'Agencia de diseño web especializada en landing pages, sitios dinámicos y aplicaciones web. Inspirados en el Caribe venezolano, creamos experiencias digitales únicas para tu negocio.',
  keywords: ['diseño web', 'landing page', 'desarrollo web', 'aplicaciones web', 'Venezuela', 'Choroni', 'freelance', 'agencia digital'],
  authors: [{ name: 'Karibe Diseño' }],
  openGraph: {
    title: 'Karibe Diseño | Diseño Web Profesional',
    description: 'Transformamos tu presencia digital con diseños únicos inspirados en el Caribe venezolano',
    type: 'website',
    locale: 'es_VE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karibe Diseño | Diseño Web Profesional',
    description: 'Transformamos tu presencia digital con diseños únicos inspirados en el Caribe venezolano',
  },
  icons: {
    icon: '/images/karibe%20instagram.png',
    apple: '/images/karibe%20instagram.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
