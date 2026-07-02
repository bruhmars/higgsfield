import * as React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Signin() {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      {/* Left side — black panel */}
      <div className="flex-1 min-h-screen bg-black" />

      {/* Right side — signup form */}
      <div className="flex-1 min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>
              Enter your details below to sign in
            </CardDescription>
            <CardAction>
              <Button onClick={() => {
                navigate("/signup")
              }}>Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <Button variant="outline" className="w-full">
              Sign in with Google
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}