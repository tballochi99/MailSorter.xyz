import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advanced Email Sorter',
  description: 'Advanced email list processing and analysis tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}