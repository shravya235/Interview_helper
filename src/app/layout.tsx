import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interview Helper',
  description: 'Prepare smarter for interviews. Aggregate data, summarize insights, and export your plan.',
  metadataBase: new URL('https://interview-helper.example'),
  openGraph: {
    title: 'Interview Helper',
    description: 'Prepare smarter for interviews.',
    url: 'https://interview-helper.example',
    siteName: 'Interview Helper',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container-max py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}