import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import { AuthProvider } from '@/lib/auth-context'
import Link from 'next/link'
import { Bot } from 'lucide-react'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Yield Sync - Smart Farming Solutions',
  description: 'Digital platform supporting farmers with crop information, growing guides, weather-based recommendations, and market connections.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
          <CartProvider>
            {children}
            {/* floating AI assistant icon */}
            <Link href="/chat">
              <div className="fixed bottom-4 right-4 z-50 cursor-pointer bg-green-600 p-3 rounded-full shadow-lg hover:bg-green-700">
                <Bot className="h-6 w-6 text-white" />
              </div>
            </Link>
          </CartProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
