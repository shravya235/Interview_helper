'use client'

import PDFButton from '@/components/dashboard/PDFButton'
import type { PipelineResult } from '@/types/pipeline'

export default function Dashboard({ result }: { result: PipelineResult }) {
  return (
    <div className="grid gap-6" id="dashboard-root">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <PDFButton targetId="dashboard-root" filename={`prep-${result.company.slug}.pdf`} />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-4">
          <h3 className="font-medium mb-2">Profile</h3>
          <ul className="text-sm text-gray-700">
            <li><span className="font-medium">Interviewer:</span> {result.interviewer.name}</li>
            <li><span className="font-medium">Company:</span> {result.company.name}</li>
            <li><span className="font-medium">Role:</span> {result.role}</li>
          </ul>
        </div>
        <div className="card p-4 md:col-span-2">
          <h3 className="font-medium mb-2">Company Summary</h3>
          <p className="text-sm text-gray-700">{result.company.summary}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-4">
          <h3 className="font-medium mb-2">Interviewer Snapshot</h3>
          <ul className="text-sm list-disc list-inside text-gray-700 space-y-1">
            {result.interviewer.highlights.map((h) => (<li key={h}>{h}</li>))}
          </ul>
        </div>
        <div className="card p-4">
          <h3 className="font-medium mb-2">Role Resources</h3>
          <ul className="text-sm list-disc list-inside text-gray-700 space-y-1">
            {result.resources.map((r) => (<li key={r.url}><a className="text-primary" href={r.url} target="_blank" rel="noreferrer">{r.title}</a></li>))}
          </ul>
        </div>
      </div>

      <div className="card p-4">
        <h3 className="font-medium mb-2">7-day Prep Plan</h3>
        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
          {result.plan.map((step, idx) => (<li key={idx}>{step}</li>))}
        </ol>
      </div>
    </div>
  )
}