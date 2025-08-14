// src/app/api/generate/route.ts
import { NextResponse } from 'next/server';
import type { GenerationResults } from '@/lib/types';

export async function POST(request: Request) {
  // Simulate a delay for fetching data and AI processing
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Create mock data that matches our type structure
  const mockResults: GenerationResults = {
    interviewerProfile: {
      name: "Satya Nadella",
      role: "CEO at Microsoft",
      summary: "Satya Nadella is an influential leader known for transforming Microsoft's culture towards empathy and a growth mindset. He has spearheaded the company's focus on cloud computing with Azure.",
      talkingPoints: [
        "Ask about the 'growth mindset' culture at Microsoft.",
        "Mention the success of Azure under his leadership.",
        "Inquire about the future of AI and Copilot initiatives.",
      ],
    },
    companySummary: {
      name: "Microsoft",
      mission: "To empower every person and every organization on the planet to achieve more.",
      recentNews: "Microsoft recently invested heavily in OpenAI and is integrating AI capabilities across its entire product line, including Windows, Office, and Bing."
    },
    prepPlan: {
      behavioralQuestions: [
        "Tell me about a time you had to learn a new technology quickly.",
        "Describe a challenging project and how you overcame obstacles.",
        "How do you collaborate with team members who have different opinions?",
      ],
      technicalTopics: [
        "Review cloud computing fundamentals (specifically Azure services).",
        "Brush up on system design principles for scalable applications.",
        "Prepare to discuss the impact of Large Language Models (LLMs) on software development.",
      ],
      closingStatement: "Express strong interest in Microsoft's mission and how your skills in cloud and AI align with the company's future direction. Thank the interviewer for their time and insights."
    },
  };

  return NextResponse.json(mockResults);
}