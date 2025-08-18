import './globals.css';
import { Toaster } from "sonner";

export const metadata = {
  title: 'Interview Helper',
  description: 'AI-driven interview preparation tool',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <html lang="en">
        <body className="bg-white text-black">
          {children}
          <Toaster richColors position="top-center" />
        </body>
      </html>
    </>
  );
}
