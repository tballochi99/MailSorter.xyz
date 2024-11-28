"use client"

import { ArrowDownCircle, Mail, Shield, FileDown, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Intro = () => (
  <section className="bg-background min-h-screen flex items-center" aria-label="Email Processing Introduction">
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Advanced Email List Management & Validation Tool
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
  Professional email list cleaning, validation, and sorting tool. Transform your email lists into valuable marketing assets with our secure processing system. Clean email lists, remove duplicates, validate addresses, and optimize your email database for better deliverability.
</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="relative hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/5">
            <CardContent className="p-8">
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-hidden="true">1</div>
              <Mail className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" aria-hidden="true" />
              <h2 className="font-semibold text-lg mb-3">Upload Email Lists</h2>
              <p className="text-muted-foreground">Process multiple file formats including .txt, .csv, .xlsx, .xls, .xml, .json, .doc, and .docx. Easily manage large email databases.</p>
              <ChevronRight className="h-6 w-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground md:block hidden group-hover:translate-x-2 transition-transform" aria-hidden="true" />
            </CardContent>
          </Card>

          <Card className="relative hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/5">
            <CardContent className="p-8">
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-hidden="true">2</div>
              <Shield className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" aria-hidden="true" />
              <h2 className="font-semibold text-lg mb-3">Secure Email Validation</h2>
              <p className="text-muted-foreground">Advanced email verification algorithms process your data locally with enterprise-grade security and privacy protection.</p>
              <ChevronRight className="h-6 w-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground md:block hidden group-hover:translate-x-2 transition-transform" aria-hidden="true" />
            </CardContent>
          </Card>

          <Card className="relative hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/5">
            <CardContent className="p-8">
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-hidden="true">3</div>
              <FileDown className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" aria-hidden="true" />
              <h2 className="font-semibold text-lg mb-3">Export Clean Email Lists</h2>
              <p className="text-muted-foreground">Download your validated and sorted email lists in any format. Perfect for email marketing campaigns and CRM systems.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById('mailsorter-section');
              if (element) {
                const offset = element.offsetTop - 20;
                window.scrollTo({
                  top: offset,
                  behavior: 'smooth'
                });
              }
            }}
            className="gap-2 hover:scale-105 transition-transform hover:shadow-lg"
            aria-label="Start Processing Emails"
          >
            Start Processing Now
            <ArrowDownCircle className="h-5 w-5 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export { Intro };