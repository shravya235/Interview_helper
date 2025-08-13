// src/lib/types.ts
export interface GenerationResults {
  interviewerProfile: {
    name: string;
    role: string;
    summary: string;
    talkingPoints: string[];
  };
  companySummary: {
    name: string;
    mission: string;
    recentNews: string;
  };
  prepPlan: {
    behavioralQuestions: string[];
    technicalTopics: string[];
    closingStatement: string;
  };
}