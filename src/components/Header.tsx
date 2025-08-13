import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="container-max flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Sparkles className="h-5 w-5 text-primary" />
          <span>Interview Helper</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-gray-700">
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/faq" className="hover:text-primary">FAQ</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
          <Link href="/login" className="btn-ghost">Login</Link>
        </nav>
      </div>
    </header>
  )
}