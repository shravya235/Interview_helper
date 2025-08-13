import type { PipelineFormValues, PipelineResult } from '@/types/pipeline'

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function runPipeline(input: PipelineFormValues): Promise<PipelineResult> {
  // Simulate light processing to keep UI realistic while staying frontend-only
  await wait(300)

  const companyName = new URL(input.companyUrl).hostname.replace('www.', '')
  const companySlug = companyName.replace(/\./g, '-')
  const focus = input.focusAreas.split(',').map((s) => s.trim()).filter(Boolean)

  return {
    company: {
      name: companyName,
      slug: companySlug,
      summary: `Public information suggests ${companyName} focuses on developer tools and cloud services. Recent news highlights product launches and growth in ${focus[0] ?? 'engineering'} teams.`,
    },
    interviewer: {
      name: input.interviewerUrl ? `Profile from ${new URL(input.interviewerUrl).hostname}` : 'Unknown interviewer',
      highlights: [
        'Prefers concise, well-structured answers',
        'Values practical examples and tradeoff discussions',
        'Often asks follow-ups about testing and observability'
      ],
    },
    role: input.role,
    resources: [
      { title: 'Top 75 System Design Questions', url: 'https://github.com/donnemartin/system-design-primer' },
      { title: 'Modern React Patterns', url: 'https://react.dev/learn' },
      { title: 'DSA Refresher', url: 'https://neetcode.io/' },
    ],
    plan: buildSevenDayPlan(focus, input.role),
  }
}

function buildSevenDayPlan(focusAreas: string[], role: string): string[] {
  const fa = focusAreas.length ? focusAreas : ['System Design', 'React', 'DSA']
  return [
    `Day 1: Outline job impact for ${role}. Skim company product lines and recent news.`,
    `Day 2: Deep dive ${fa[0]} with 2 practice prompts, write takeaways.`,
    `Day 3: Review ${fa[1] ?? 'Role fundamentals'} docs; build a tiny demo.`,
    'Day 4: Mock interview with peer; focus on clarity and structure.',
    `Day 5: Drill ${fa[2] ?? 'Algorithms'} for 60–90 minutes (timed).`,
    'Day 6: Rehearse top 10 behavioral stories (STAR).',
    'Day 7: Light review and rest; finalize questions for interviewer.'
  ]
}