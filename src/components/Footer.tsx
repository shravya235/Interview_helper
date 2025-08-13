export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container-max py-6 text-sm text-gray-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Interview Helper</p>
        <p className="text-xs">Built with Next.js App Router</p>
      </div>
    </footer>
  )
}