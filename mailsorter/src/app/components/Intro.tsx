"use client"

import { ArrowDownCircle, Mail, Shield, FileDown, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Intro = () => (
  <section className="bg-background min-h-screen flex items-center">
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Advanced Email Sorter
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Transform your email lists into valuable business assets in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="relative hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/5">
            <CardContent className="p-8">
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform">1</div>
              <Mail className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />
              <h3 className="font-semibold text-lg mb-3">Upload Emails</h3>
              <p className="text-muted-foreground">Upload your email list in various formats: .txt, .csv, .xlsx, .xls, .xml, .json, .doc, or .docx</p>
              <ChevronRight className="h-6 w-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground md:block hidden group-hover:translate-x-2 transition-transform" />
            </CardContent>
          </Card>

          <Card className="relative hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/5">
            <CardContent className="p-8">
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform">2</div>
              <Shield className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />
              <h3 className="font-semibold text-lg mb-3">Secure Processing</h3>
              <p className="text-muted-foreground">Your data is processed locally with advanced validation algorithms.</p>
              <ChevronRight className="h-6 w-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground md:block hidden group-hover:translate-x-2 transition-transform" />
            </CardContent>
          </Card>

          <Card className="relative hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/5">
            <CardContent className="p-8">
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform">3</div>
              <FileDown className="h-8 w-8 mb-4 text-primary hover:rotate-12 transition-transform" />
              <h3 className="font-semibold text-lg mb-3">Export Results</h3>
              <p className="text-muted-foreground">Download your processed list in your preferred format.</p>
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
          >
            Start Processing Now
            <ArrowDownCircle className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export { Intro };