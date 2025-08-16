import './globals.css';

export const metadata = {
  title: 'Interview Helper',
  description: 'AI-driven interview preparation tool',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className="bg-white text-black">{children}</body>
      </html>
    </>
  );
}
