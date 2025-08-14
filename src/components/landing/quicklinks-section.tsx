// src/components/landing/quicklinks-section.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function QuickLinksSection() {
    return (
        <section className="container mx-auto flex flex-col items-center py-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
            <div className="flex gap-4">
                <Button asChild variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                    <Link href="#">Top Companies</Link>
                </Button>
                 <Button asChild variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                    <Link href="#">Recent Reviews</Link>
                </Button>
                 <Button asChild variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                    <Link href="#">Popular Questions</Link>
                </Button>
            </div>
        </section>
    );
}