"use client"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Footer } from "../components/Footer"
import { ArrowLeft, CheckCircle2, ShieldAlert, Scale, Book, FileWarning, RefreshCcw } from "lucide-react"
import Link from "next/link"

export default function Terms() {
  const termsPoints = [
    {
      icon: <CheckCircle2 className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "Service Usage",
      content: "This tool is provided as-is for email list processing. Users are responsible for ensuring they have the right to process the email addresses they upload.",
    },
    {
      icon: <ShieldAlert className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "Data Responsibility",
      content: "Users must ensure they have the necessary rights and permissions to process uploaded email lists in compliance with applicable laws.",
    },
    {
      icon: <Scale className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "Acceptable Use",
      content: "The service must not be used for spam, harassment, or any illegal activities. Users must comply with data protection laws and respect privacy rights.",
    },
    {
      icon: <Book className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "Compliance",
      content: "Users are required to comply with all applicable laws and regulations regarding email processing, data protection, and privacy.",
    },
    {
      icon: <FileWarning className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "Limitations",
      content: "While we strive for accuracy, we provide no guarantees about the precision of email validation or business detection features.",
    },
    {
      icon: <RefreshCcw className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "Updates",
      content: "We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of any changes.",
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-12 border-b">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-block mb-8">
            <Button variant="ghost" className="gap-2 hover:scale-105 transition-transform">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our email processing tool
            </p>
          </div>
        </div>
      </section>

      {/* Terms Points Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {termsPoints.map((point, index) => (
              <Card 
                key={index}
                className="relative hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/5"
              >
                <CardContent className="p-8">
                  {point.icon}
                  <h2 className="font-semibold text-lg mb-3">{point.title}</h2>
                  <p className="text-muted-foreground">{point.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Additional Terms
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Service Modifications</h3>
                <p className="text-muted-foreground">
                  We reserve the right to modify, suspend, or discontinue any part of our service at any time without prior notice.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h3>
                <p className="text-muted-foreground">
                  The service is provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not guarantee continuous, uninterrupted access to the service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact</h3>
                <p className="text-muted-foreground">
                  For questions about these terms, please contact us at:{' '}
                  <a href="mailto:mailsorter123@gmail.com" className="text-primary hover:underline">
                    mailsorter123@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}