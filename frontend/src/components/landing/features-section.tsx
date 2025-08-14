// src/components/landing/features-section.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  { title: "Deep Interviewer Insights", description: "Get a summarized profile of your interviewer's professional background and potential talking points." },
  { title: "Company & Role Analysis", description: "We analyze company news, culture, and role requirements to find what truly matters." },
  { title: "AI-Generated Prep Plan", description: "Receive a custom-tailored action plan with practice questions and topics to review." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 bg-black/20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="text-lg text-gray-300 mt-2">A simple process to give you a powerful advantage.</p>
      </div>
      <div className="container mx-auto grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="bg-gray-900 border-gray-800 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription className="pt-2">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}