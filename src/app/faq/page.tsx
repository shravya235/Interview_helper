const faqs = [
  {
    q: 'Is this production-ready?',
    a: 'This is a clean, optimized frontend scaffold that you can extend with your own backend.'
  },
  { q: 'Can I export to PDF?', a: 'Yes. Use the Export button on the dashboard once results are generated.' },
  { q: 'Where is my data stored?', a: 'For this demo, all processing is local in-memory on your browser.' },
]

export const dynamic = 'force-static'

export default function FAQPage() {
  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-semibold">FAQ</h1>
      <ul className="card divide-y">
        {faqs.map((item) => (
          <li key={item.q} className="p-4">
            <p className="font-medium">{item.q}</p>
            <p className="text-gray-600">{item.a}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}