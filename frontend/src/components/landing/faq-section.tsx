// src/components/landing/faq-section.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    question: "How does the AI gather information?",
    answer: "Our tool uses a sophisticated data aggregation layer. It connects to public APIs (like news and company data APIs) and scrapes publicly available information from websites to build a comprehensive and relevant profile for your interview."
  },
  {
    value: "item-2",
    question: "Is my data secure and private?",
    answer: "Absolutely. We take data privacy seriously. All user inputs are handled securely. We only access publicly available data and do not store any sensitive personal information beyond what is necessary for your account."
  },
  {
    value: "item-3",
    question: "Can I use this for any company or role?",
    answer: "Yes. Our tool is designed to be versatile and can generate preparation plans for a wide variety of roles across different industries and companies, as long as there is some public information available for our AI to analyze."
  },
  {
    value: "item-4",
    question: "What makes this different from just searching on Google?",
    answer: "While you can find information on Google, our AI does the heavy lifting for you. It sifts through the noise, summarizes key points, identifies potential talking points, and structures it all into a single, actionable preparation plan, saving you hours of research."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          {/* FIX: Corrected multiple apostrophes */}
          Have questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
        </p>
        <Accordion type="single" collapsible className="w-full text-left">
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-lg">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-gray-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}