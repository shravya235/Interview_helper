// src/components/custom/site-footer.tsx

import React from 'react'; // <-- FIX 1: Add this import
import Link from 'next/link';   // <-- FIX 2: Add this import

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
        <div>
          <h3 className="font-bold mb-2">Product</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/#features" className="text-sm text-foreground/60 hover:text-foreground">Features</Link>
            <Link href="/faq" className="text-sm text-foreground/60 hover:text-foreground">FAQ</Link>
          </nav>
        </div>
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/about" className="text-sm text-foreground/60 hover:text-foreground">About Us</Link>
            <Link href="/contact" className="text-sm text-foreground/60 hover:text-foreground">Contact</Link>
          </nav>
        </div>
        <div>
          <h3 className="font-bold mb-2">Legal</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Terms of Service</Link>
          </nav>
        </div>
         <div>
          <h3 className="font-bold mb-2">InterviewHelper AI</h3>
           <p className="text-sm text-foreground/60">Gain the AI-powered edge.</p>
        </div>
      </div>
      <div className="container mx-auto py-4 border-t border-border/40 text-center text-sm text-foreground/60">
        &copy; {new Date().getFullYear()} Interview Helper AI. All Rights Reserved.
      </div>
    </footer>
  );
}