// src/components/custom/navbar.tsx
'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Interview Helper AI
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-blue-500">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
          <Link href="/faq" className="text-gray-600 hover:text-blue-500">FAQ</Link>
          
          {session ? (
            <>
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Button onClick={() => signOut()}>Sign Out</Button>
            </>
          ) : (
            <Button onClick={() => signIn()}>Login</Button>
          )}
        </div>
      </nav>
    </header>
  );
}