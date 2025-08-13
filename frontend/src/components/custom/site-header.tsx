// src/components/custom/site-header.tsx
'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          InterviewHelper
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#" className="transition-colors hover:text-primary text-gray-300">Companies</Link>
          <Link href="#" className="transition-colors hover:text-primary text-gray-300">DSA Questions</Link>
          <Link href="#" className="transition-colors hover:text-primary text-gray-300">Reviews</Link>
          <Link href="/about" className="transition-colors hover:text-primary text-gray-300">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Button onClick={() => signOut()} variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-black">
                Sign Out
              </Button>
            </>
          ) : (
            // FIX: This now uses the signIn function to correctly redirect to your login page
            <Button onClick={() => signIn()} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}