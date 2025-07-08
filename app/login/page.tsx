'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleLogin = async (e: any) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (!error) setSent(true)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Log in to AIrth</h1>
      {sent ? (
        <p className="text-green-600">Magic link sent! Check your inbox.</p>
      ) : (
        <form onSubmit={handleLogin} className="space-y-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
            Send Magic Link
          </button>
        </form>
      )}
    </div>
  )
}
