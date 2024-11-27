import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advanced Email Sorter | Professional Email Management',
  description: 'Professional email list processing, validation, and analysis tool. Clean, sort, and optimize your email lists with advanced filtering options.',
  keywords: 'email sorter, email validator, business email filter, email list cleaner',
  openGraph: {
    title: 'Advanced Email Sorter',
    description: 'Professional email list management tool',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}