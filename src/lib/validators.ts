import { z } from 'zod'

export const pipelineSchema = z.object({
  interviewerUrl: z.string().url({ message: 'Enter a valid URL' }).or(z.literal('')).optional().transform((v) => v ?? ''),
  companyUrl: z.string().url({ message: 'Enter a valid URL' }),
  role: z.string().min(2, 'Role is required'),
  focusAreas: z.string().min(2, 'Provide at least one focus area'),
})

export type PipelineSchema = z.infer<typeof pipelineSchema>