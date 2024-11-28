// app/not-found.tsx
'use client'

import Link from 'next/link'
import { Button } from "../app/components/ui/button"
import { Home, AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="container max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="space-y-8">
          <AlertCircle className="h-16 w-16 mx-auto text-primary animate-bounce" />
          
          <h1 className="text-5xl font-bold text-foreground">
            404 - Page Not Found
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Oops! The page you&apos;re looking for seems to have disappeared into the digital void.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              className="gap-2 hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}