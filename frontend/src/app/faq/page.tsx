// src/app/faq/page.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function FaqPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <Accordion type="single" collapsible className="w-full p-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does this tool gather information?</AccordionTrigger>
            <AccordionContent>
              Our tool uses a sophisticated data aggregation layer that connects to public APIs (like news and company data APIs) and scrapes publicly available information from websites to build a comprehensive profile.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is my data secure?</AccordionTrigger>
            <AccordionContent>
              Yes, we take data privacy seriously. All user inputs are sanitized and handled securely. We only access publicly available data and do not store any sensitive personal information beyond what is necessary for your account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I use this for any company or role?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Our tool is designed to be versatile and can generate preparation plans for a wide variety of roles across different industries and companies, as long as there is public information available.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
}