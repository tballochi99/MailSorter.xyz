"use client"
import { Mail } from 'lucide-react';

const Footer = () => {
  const features = [
    "Email Validation",
    "Duplicate Removal",
    "Business Email Detection",
    "Multiple Export Formats"
  ];
  
  const legalLinks = [
    { href: "privacy", label: "Privacy Policy" },
    { href: "terms", label: "Terms of Service" }
  ];
  
  const socialLinks = [
    { href: "mailto:mailsorter123@gmail.com", Icon: Mail }
  ];

  return (
    <footer className="bg-secondary/80 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">
              Advanced Email Sorter
            </h3>
            <p className="text-muted-foreground">
              Professional email list management tool.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Features</h4>
            <ul className="space-y-2">
              {features.map(feature => (
                <li key={feature} className="text-muted-foreground hover:text-foreground transition-colors">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <a 
                    href={href} 
                    className="text-muted-foreground hover:text-primary/90 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="h-px w-full bg-border/50 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © 2024 Advanced Email Sorter. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map(({ href, Icon }) => (
              <a 
                key={href} 
                href={href} 
                className="text-muted-foreground hover:text-primary/90 transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };