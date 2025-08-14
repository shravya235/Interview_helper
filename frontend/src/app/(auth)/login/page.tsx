'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-sm bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to generate your interview prep plan.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* This button calls signIn with a specific provider */}
          <Button variant="outline" className="w-full" onClick={() => signIn('google')}>
            Sign in with Google
          </Button>
          <div className="text-center text-sm">
            <p>
              Don&apos;t have an account? <Link href="/signup" className="underline hover:text-primary">Sign Up</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}