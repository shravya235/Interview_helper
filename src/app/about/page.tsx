export const dynamic = 'force-static'

export default function AboutPage() {
  return (
    <section className="prose max-w-none">
      <h1>About Interview Helper</h1>
      <p>
        Interview Helper is a focused frontend that demonstrates a high-performance, accessible
        App Router setup. It reflects a real pipeline: user input, validation, data aggregation,
        AI-style summarization, and a dashboard with PDF export.
      </p>
      <h2>Performance-first Philosophy</h2>
      <ul>
        <li>Minimal JavaScript shipped to the client</li>
        <li>Static routes for content pages</li>
        <li>Code-splitting and dynamic import for heavy widgets</li>
      </ul>
    </section>
  )
}