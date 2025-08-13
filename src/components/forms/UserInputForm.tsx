'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { pipelineSchema } from '@/lib/validators'
import type { PipelineFormValues } from '@/types/pipeline'

export default function UserInputForm({ onSubmit, loading }: { onSubmit: (values: PipelineFormValues) => Promise<void>; loading: boolean }) {
  const { register, handleSubmit, formState: { errors } } = useForm<PipelineFormValues>({
    resolver: zodResolver(pipelineSchema),
    defaultValues: {
      interviewerUrl: '',
      companyUrl: '',
      role: '',
      focusAreas: '',
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="grid gap-1">
          <span className="text-sm">Interviewer profile URL</span>
          <input className="input" placeholder="https://linkedin.com/in/..." {...register('interviewerUrl')} />
          {errors.interviewerUrl && <span className="text-xs text-red-600">{errors.interviewerUrl.message}</span>}
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Company website</span>
          <input className="input" placeholder="https://company.com" {...register('companyUrl')} />
          {errors.companyUrl && <span className="text-xs text-red-600">{errors.companyUrl.message}</span>}
        </label>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="grid gap-1">
          <span className="text-sm">Role / Position</span>
          <input className="input" placeholder="Senior Frontend Engineer" {...register('role')} />
          {errors.role && <span className="text-xs text-red-600">{errors.role.message}</span>}
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Focus areas (comma-separated)</span>
          <input className="input" placeholder="React, System Design, DSA" {...register('focusAreas')} />
          {errors.focusAreas && <span className="text-xs text-red-600">{errors.focusAreas.message}</span>}
        </label>
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" className="btn-primary" disabled={loading}>{loading ? 'Generating...' : 'Generate Plan'}</button>
        <span className="text-xs text-gray-500">No external requests. Demo runs locally.</span>
      </div>
    </form>
  )
}