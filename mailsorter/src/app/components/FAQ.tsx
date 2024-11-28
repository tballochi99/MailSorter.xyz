"use client"

import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle, Shield, Clock, ListFilter, HeadphonesIcon } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import Script from 'next/script'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqData = [
    {
      icon: <HelpCircle className="h-6 w-6 text-primary" aria-hidden="true" />,
      question: "How does the email validation process work?",
      answer: "Our advanced validation process checks email syntax, verifies domain existence, and ensures proper formatting. Everything is processed locally in your browser for maximum security and privacy."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" aria-hidden="true" />,
      question: "What file formats are supported?",
      answer: "We support all major file formats including CSV, Excel (.xlsx, .xls), Text files (.txt), JSON, and XML. You can easily import and export your email lists in any of these formats."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" aria-hidden="true" />,
      question: "Is my email data secure?",
      answer: "Absolutely. We prioritize your data security by processing everything locally in your browser. Your email lists are never stored or transmitted to any external servers, ensuring complete privacy and confidentiality."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" aria-hidden="true" />,
      question: "How many emails can I process at once?",
      answer: "Our tool is optimized for handling large email lists efficiently. You can process thousands of emails quickly with our advanced batch processing system, with no strict limits on list size."
    },
    {
      icon: <ListFilter className="h-6 w-6 text-primary" aria-hidden="true" />,
      question: "Can I remove duplicate emails automatically?",
      answer: "Yes! Our tool automatically identifies and removes duplicate email addresses while maintaining the integrity of your list. You can choose to keep either the first or last occurrence of duplicates."
    },
    {
        icon: <HeadphonesIcon className="h-6 w-6 text-primary" aria-hidden="true" />,
        question: "Do you offer customer support?",
        answer: (
          <span className="text-muted-foreground">
            We provide comprehensive customer support to ensure you get the most out of our tool. You can reach our support team through{' '}
            <a href="mailto:mailsorter123@gmail.com" className="text-blue-500 hover:underline">
              email
            </a>
            , and we typically respond within 24 hours.
          </span>
        )
      }
  ]

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ${faqData.map(item => `{
                "@type": "Question",
                "name": "${item.question}",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "${item.answer}"
                }
              }`).join(',')}
            ]
          }
        `}
      </Script>

      <section className="py-16 bg-background" aria-label="Frequently Asked Questions">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our email processing tool
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <button
                    className="w-full px-6 py-4 flex items-center gap-4 text-left hover:bg-primary/5 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                  >
                    {item.icon}
                    <span className="font-semibold text-lg flex-grow">{item.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-6 pt-2 text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export { FAQ }