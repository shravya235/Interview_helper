// src/components/custom/results-dashboard.tsx
'use client';

import type { GenerationResults } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

interface ResultsDashboardProps {
  results: GenerationResults;
}

export function ResultsDashboard({ results }: ResultsDashboardProps) {
  const dashboardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (dashboardRef.current) {
      html2canvas(dashboardRef.current, { backgroundColor: '#030712' }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'px', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("interview-prep-plan.pdf");
      });
    }
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Your Interview Prep Plan is Ready!</h1>
        <Button onClick={handleExport} className="mt-4">Export to PDF</Button>
      </div>

      <div ref={dashboardRef} className="space-y-6 p-4 bg-gray-950 rounded-lg">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader><CardTitle>Interviewer Profile: {results.interviewerProfile.name}</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-gray-300">
            <p><strong>Role:</strong> {results.interviewerProfile.role}</p>
            <p><strong>Summary:</strong> {results.interviewerProfile.summary}</p>
            <h4 className="font-semibold pt-2 text-white">Potential Talking Points:</h4>
            <ul className="list-disc list-inside space-y-1">
              {results.interviewerProfile.talkingPoints.map(point => <li key={point}>{point}</li>)}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader><CardTitle>Company Snapshot: {results.companySummary.name}</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-gray-300">
            <p><strong>Mission:</strong> {results.companySummary.mission}</p>
            <p><strong>Recent News:</strong> {results.companySummary.recentNews}</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader><CardTitle>Your Action Plan</CardTitle></CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold text-white">Behavioral Questions to Practice:</h4>
              <ul className="list-disc list-inside space-y-1">
                {results.prepPlan.behavioralQuestions.map(q => <li key={q}>{q}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Technical Topics to Review:</h4>
              <ul className="list-disc list-inside space-y-1">
                {results.prepPlan.technicalTopics.map(topic => <li key={topic}>{topic}</li>)}
              </ul>
            </div>
             <div>
              <h4 className="font-semibold text-white">Suggested Closing Statement:</h4>
              <p>{results.prepPlan.closingStatement}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}