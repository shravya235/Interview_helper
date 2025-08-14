// src/app/(main)/dashboard/page.tsx
'use client';

import { useState } from 'react';
import { InputForm } from '@/components/custom/input-form';
import { LoadingSpinner } from '@/components/custom/loading-spinner';
import { ResultsDashboard } from '@/components/custom/results-dashboard';
import type { GenerationResults } from '@/lib/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<GenerationResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    setResults(null);
    setError(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Failed to generate results. Please try again later.');
      const data: GenerationResults = await response.json();
      setResults(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle loading and unauthenticated states first
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push('/login');
    return null; // Return null to prevent rendering anything while redirecting
  }

  // Main return statement for the authenticated user
  return (
    <div className="container mx-auto py-12">
      {/* Conditionally render based on the current state */}
      {isLoading ? (
        <LoadingSpinner />
      ) : results ? (
        <ResultsDashboard results={results} />
      ) : (
        <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
      )}

      {/* Display error message if one exists */}
      {error && <p className="text-center text-red-500 mt-4">Error: {error}</p>}
    </div>
  );
}