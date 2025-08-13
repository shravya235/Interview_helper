// src/app/auth/recover-account/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RecoverAccountPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-sm bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Forgot Password?</CardTitle>
          {/* FIX: Changed we'll to we&apos;ll */}
          <CardDescription>Enter your email below and we&apos;ll send you a link to reset your password.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-2">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <Button className="w-full">Send Recovery Link</Button>
          </form>
          <div className="text-center text-sm">
            <p>
              Remember your password? <Link href="/login" className="underline hover:text-primary">Back to Login</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}