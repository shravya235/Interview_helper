import { DashboardModalProvider } from '@/context/DashboardModalContext';
import './globals.css';
import { Toaster } from "sonner";
import AuthGuard from '@/components/AuthGuard';

export const metadata = {
  title: 'Interview Helper',
  description: 'AI-driven interview preparation tool',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <html lang="en">
        <body className="bg-white text-black">
          <>
            <DashboardModalProvider>
              {children}
            </DashboardModalProvider>
          </>
          <Toaster richColors position="top-center" />
        </body>
      </html>
    </>
  );
}
