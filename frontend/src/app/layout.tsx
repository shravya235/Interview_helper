import './globals.css'

export const metadata = {
  title: 'Widecanvas Clone',
  description: 'Draw, Speak, and Code Your App to Life',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  )
}
