"use client"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Footer } from "../components/Footer"
import { ArrowLeft, Shield, Lock, Server, UserCheck, Mail, FileCheck } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  const privacyPoints = [
    {
      icon: <Shield className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "Data Collection",
      content: "This application processes email lists entirely in your browser. We do not collect, store, or transmit any of your data to external servers.",
    },
    {
      icon: <Lock className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "Security First",
      content: "Your privacy and data security are our top priorities. We employ advanced security measures to ensure your information remains confidential.",
    },
    {
      icon: <Server className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "Local Processing",
      content: "All email processing occurs locally on your device. Your files never leave your browser, ensuring complete data privacy.",
    },
    {
      icon: <UserCheck className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "GDPR Compliance",
      content: "Our service is fully GDPR compliant. We respect user privacy rights and provide complete transparency about our data handling practices.",
    },
    {
      icon: <Mail className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "No Data Storage",
      content: "We don't store any user data. Once you close our tool, all processed information is completely removed from your browser's memory.",
    },
    {
      icon: <FileCheck className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />,
      title: "Cookies Policy",
      content: "We use minimal local storage only for essential functions like theme preferences. No tracking or marketing cookies are used.",
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
              Back to MailSorter
            </Button>
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is our top priority. Learn how we protect your data and ensure secure email list processing.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Points Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyPoints.map((point, index) => (
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
              Detailed Privacy Information
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="text-muted-foreground">
                  For any privacy concerns or questions about our data handling practices, please contact our privacy team at:{' '}
                  <a href="mailto:mailsorter123@gmail.com" className="text-primary hover:underline">
                    mailsorter123@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Updates to This Policy</h3>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. All changes will be posted on this page with an updated revision date.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Your Rights</h3>
                <p className="text-muted-foreground">
                  Since we don&apos;t collect or store any personal data, your privacy rights are automatically protected. You maintain complete control over your data at all times.
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