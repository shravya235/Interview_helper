'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import UserInputForm from '@/components/forms/UserInputForm'
import { PipelineFormValues, PipelineResult } from '@/types/pipeline'
import { runPipeline } from '@/lib/pipeline'

const Dashboard = dynamic(() => import('@/components/dashboard/Dashboard'), { ssr: false })

export default function HomeClient() {
  const [result, setResult] = useState<PipelineResult | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (values: PipelineFormValues) => {
    setLoading(true)
    try {
      const res = await runPipeline(values)
      setResult(res)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-10">
      <section className="grid gap-6">
        <div className="text-center grid gap-3">
          <h1 className="text-3xl md:text-4xl font-semibold">Prepare smarter for your next interview</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aggregate company, interviewer, and role resources, then generate a concise prep plan with one click.
          </p>
        </div>
        <UserInputForm onSubmit={onSubmit} loading={loading} />
      </section>

      {result && (
        <section className="grid gap-4">
          <Dashboard result={result} />
        </section>
      )}
    </div>
  )
}