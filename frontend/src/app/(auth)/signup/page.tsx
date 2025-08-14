// src/app/(auth)/signup/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-sm bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>Get started with your AI-powered prep plans.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-2">
             <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Your Name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full">Create Account</Button>
          </form>
          <div className="text-center text-sm">
            <p>
              Already have an account? <Link href="/login" className="underline hover:text-primary">Sign In</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}