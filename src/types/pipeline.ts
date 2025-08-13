export type PipelineFormValues = {
  interviewerUrl?: string
  companyUrl: string
  role: string
  focusAreas: string
}

export type PipelineResult = {
  company: { name: string; slug: string; summary: string }
  interviewer: { name: string; highlights: string[] }
  role: string
  resources: { title: string; url: string }[]
  plan: string[]
}