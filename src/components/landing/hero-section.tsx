// src/components/landing/hero-section.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center py-24 sm:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
        Ace Your Tech Interviews
      </h1>
      <p className="max-w-2xl text-lg text-gray-300 mb-8">
        Get access to company-specific interview questions, salary data, and interview experiences.
      </p>
      <div className="flex w-full max-w-lg items-center space-x-2">
        <Input type="text" placeholder="Search companies by name or filter by sector..." className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
        <Button type="submit">Search</Button>
      </div>
    </section>
  );
}