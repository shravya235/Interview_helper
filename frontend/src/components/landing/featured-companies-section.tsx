// src/components/landing/featured-companies-section.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const companies = [
  { name: "Google", description: "Top interview questions and experiences" },
  { name: "Amazon", description: "Top interview questions and experiences" },
  { name: "Microsoft", description: "Top interview questions and experiences" },
];

export function FeaturedCompaniesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-white">Featured Companies</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {companies.map((company) => (
            <Link href="#" key={company.name}>
              <Card className="bg-slate-800/60 border-slate-700 hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle>{company.name}</CardTitle>
                  <CardDescription className="pt-2">{company.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}