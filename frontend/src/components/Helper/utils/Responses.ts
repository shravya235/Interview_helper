export const GREETING_KEYWORDS = [
  "hi", "hello", "hey", "good morning", "good afternoon", "good evening",
  "howdy", "greetings", "what's up", "yo"
];

export const INTERVIEW_KEYWORDS = [
  "interview", "company", "culture", "tips", "interviewer",
  "questions", "preparation", "resume", "salary", "offer"
];

export function getInterviewResponse(msg: string): string | null {
  const lower = msg.toLowerCase();

  if (GREETING_KEYWORDS.some((kw) => lower.includes(kw))) {
    return "Hello! How can I assist you with your interview preparation today?";
  }

  if (INTERVIEW_KEYWORDS.some((kw) => lower.includes(kw))) {
    if (lower.includes("culture"))
      return "The company values collaboration, continuous learning, and innovation.";
    if (lower.includes("tips"))
      return "This interviewer values clear communication and structured answers.";
    if (lower.includes("questions"))
      return "Be ready to answer behavioral and technical questions related to the job.";
    if (lower.includes("preparation"))
      return "Practice coding problems, review your resume, and research the company.";
    if (lower.includes("resume"))
      return "Tailor your resume to highlight relevant skills and accomplishments.";
    if (lower.includes("salary"))
      return "Research market rates for the role and be ready to negotiate confidently.";
    if (lower.includes("offer"))
      return "Evaluate the offer carefully considering compensation, role, and culture fit.";
    if (lower.includes("company"))
      return "Research the company background, mission, and recent achievements.";
    if (lower.includes("interviewer"))
      return "Try to understand your interviewer's role and expertise from their LinkedIn profile.";
    if (lower.includes("interview"))
      return "Prepare well, stay confident, and practice answering common interview questions!";
    return "Happy to help with interview-related questions. Ask me anything specific!";
  }

  return "Sorry, I can only help with interview-related questions right now.";
}
