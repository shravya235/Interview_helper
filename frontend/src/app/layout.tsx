// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { SiteHeader } from "@/components/custom/site-header";
import { SiteFooter } from "@/components/custom/site-footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Interview Helper AI",
  description: "Gain the AI-powered edge to ace your next interview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${poppins.className} bg-gray-950 text-gray-100 min-h-screen flex flex-col`}
      >
        <Providers>
          <SiteHeader />
          <main className="flex-grow">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}