import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MailSorter | Professional Email List Management Tool',
  description: 'Clean, validate, and optimize your email lists instantly. Advanced email processing tool for marketers and businesses. Sort, remove duplicates, and verify email formats efficiently.',
  keywords: 'email sorter, email validation, email list cleaner, email verification tool, business email management, email list optimization, email formatting tool, bulk email processor',
  authors: [{ name: 'MailSorter' }],
  creator: 'MailSorter',
  publisher: 'MailSorter',
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.mailsorter.xyz/',
  },
  openGraph: {
    title: 'MailSorter | Professional Email List Management Tool',
    description: 'Transform your email lists with our powerful sorting and validation tool. Perfect for businesses and marketers.',
    url: 'https://www.mailsorter.xyz',
    siteName: 'MailSorter',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.mailsorter.xyz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MailSorter - Email Management Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MailSorter | Email List Management Made Easy',
    description: 'Clean and validate your email lists efficiently with MailSorter',
    images: ['https://www.mailsorter.xyz/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=CfxbEhu-VS6UOnfEBwNuZ8qzSwknxasIt4iMP4YhBq0',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.manifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}