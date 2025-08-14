// src/components/custom/input-form.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  interviewer: z.string().optional(),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  focusAreas: z.string().min(10, { message: "Please describe the role or focus areas in at least 10 characters." }),
});

interface InputFormProps {
  // We change this to pass the form data directly
  onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>;
  isLoading: boolean;
}

export function InputForm({ onSubmit, isLoading }: InputFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interviewer: "",
      company: "",
      focusAreas: "",
    },
  });

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl">Create Your Prep Plan</CardTitle>
        <CardDescription>Enter the details below to generate a personalized, AI-driven interview plan.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="interviewer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interviewer Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Satya Nadella" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Microsoft" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="focusAreas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role / Key Focus Areas</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Senior Frontend Engineer focusing on React, TypeScript, and performance optimization."
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Generating..." : "Generate Prep Plan"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}