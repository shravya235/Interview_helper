'use client'

import { useState } from 'react'
import Link from 'next/link'

function TabButton({ id, active, setActive, children }: { id: string; active: string; setActive: (v: string) => void; children: React.ReactNode }) {
  return (
    <button onClick={() => setActive(id)} className={`px-3 py-2 text-sm rounded-md ${active === id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}>{children}</button>
  )
}

function AuthForm({ type }: { type: 'login' | 'signup' }) {
  return (
    <form className="grid gap-3">
      <label className="grid gap-1">
        <span className="text-sm">Email</span>
        <input className="input" type="email" required />
      </label>
      <label className="grid gap-1">
        <span className="text-sm">Password</span>
        <input className="input" type="password" required minLength={6} />
      </label>
      {type === 'signup' && (
        <label className="grid gap-1">
          <span className="text-sm">Full name</span>
          <input className="input" required />
        </label>
      )}
      <button type="submit" className="btn-primary">{type === 'login' ? 'Log in' : 'Create account'}</button>
    </form>
  )
}

function RecoverForm() {
  return (
    <form className="grid gap-3">
      <label className="grid gap-1">
        <span className="text-sm">Account Email</span>
        <input className="input" type="email" required />
      </label>
      <button type="submit" className="btn-primary">Send recovery link</button>
    </form>
  )
}

export default function LoginPage() {
  const [active, setActive] = useState<'login' | 'signup' | 'recover'>('login')
  return (
    <section className="grid place-items-center">
      <div className="card w-full max-w-md p-6 grid gap-5">
        <h1 className="text-xl font-semibold text-center">Welcome</h1>
        <div className="flex gap-2 justify-center">
          <TabButton id="login" active={active} setActive={setActive}>Login</TabButton>
          <TabButton id="signup" active={active} setActive={setActive}>Sign Up</TabButton>
          <TabButton id="recover" active={active} setActive={setActive}>Recover</TabButton>
        </div>
        {active === 'login' && <AuthForm type="login" />}
        {active === 'signup' && <AuthForm type="signup" />}
        {active === 'recover' && <RecoverForm />}
        <p className="text-xs text-gray-500 text-center">By continuing you agree to our terms.</p>
        <p className="text-center text-sm text-gray-600">Back to <Link className="text-primary" href="/">Home</Link></p>
      </div>
    </section>
  )
}