'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log('contact form submitted', Object.fromEntries(data.entries()))
    setSent(true)
  }

  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="text-gray-600">We typically reply within 2 business days.</p>
      {sent ? (
        <div className="card p-6">Thank you! Your message has been recorded.</div>
      ) : (
        <form onSubmit={onSubmit} className="card grid gap-4 p-6 max-w-xl">
          <label className="grid gap-1">
            <span className="text-sm text-gray-700">Name</span>
            <input name="name" className="input" required minLength={2} />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-gray-700">Email</span>
            <input name="email" type="email" className="input" required />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-gray-700">Message</span>
            <textarea name="message" rows={5} className="input" required />
          </label>
          <button className="btn-primary w-fit" type="submit">Send</button>
        </form>
      )}
    </section>
  )
}