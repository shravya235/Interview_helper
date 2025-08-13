import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About Interview Helper AI</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p>
            Our mission is to empower job seekers by providing them with AI-driven, personalized insights to ace their interviews.
          </p>
          <p>
            This tool aggregates public data about companies and interviewers, synthesizes it with role-specific requirements, and generates a comprehensive preparation plan to help you walk into your interview with confidence.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}