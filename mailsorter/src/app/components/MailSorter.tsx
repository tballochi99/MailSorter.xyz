"use client"

import React, { useState, useEffect } from 'react';
import { Upload, Moon, Sun } from 'lucide-react';
import { Switch } from "../components/ui/switch"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"

interface EmailAnalysis {
  email: string;
  domain: string;
  username: string;
  isValid: boolean;
  isFreeProvider: boolean;
  isBusinessEmail: boolean;
  isEducationalEmail: boolean;
  domainExtension: string;
  hasDotInUsername: boolean;
}

interface SortOption {
  id: string;
  label: string;
  description: string;
}

const sortOptionsList: SortOption[] = [
  {
    id: 'removeDuplicates',
    label: 'Remove Duplicates',
    description: 'Eliminates duplicate email addresses from the list'
  },
  {
    id: 'removeInvalid',
    label: 'Remove Invalid',
    description: 'Removes email addresses that do not match the standard email format'
  },
  {
    id: 'alphabetical',
    label: 'Alphabetical Sort',
    description: 'Sorts emails alphabetically from A to Z'
  },
  {
    id: 'domainGrouping',
    label: 'Group by Domain',
    description: 'Groups emails by their domain names (e.g., all gmail.com addresses together)'
  },
  {
    id: 'removeFreeProviders',
    label: 'Remove Free Providers',
    description: 'Filters out emails from common free providers (Gmail, Yahoo, etc.)'
  },
  {
    id: 'onlyBusinessEmails',
    label: 'Business Emails Only',
    description: 'Keeps only business email addresses (non-free provider domains)'
  },
  {
    id: 'removeTemporaryEmails',
    label: 'Remove Temporary Emails',
    description: 'Filters out disposable and temporary email addresses'
  }
];

interface ExportFormat {
  id: string;
  label: string;
  description: string;
  extension: string;
  mimeType: string;
}

const exportFormats: ExportFormat[] = [
  {
    id: 'csv',
    label: 'CSV (Comma Separated)',
    description: 'Best for spreadsheet software like Excel',
    extension: 'csv',
    mimeType: 'text/csv'
  },
  {
    id: 'txt',
    label: 'TXT (One email per line)',
    description: 'Simple text format, easy to read',
    extension: 'txt',
    mimeType: 'text/plain'
  },
  {
    id: 'json',
    label: 'JSON',
    description: 'Detailed analysis in JSON format for developers',
    extension: 'json',
    mimeType: 'application/json'
  },
  {
    id: 'md',
    label: 'Markdown',
    description: 'Formatted text with headers and tables',
    extension: 'md',
    mimeType: 'text/markdown'
  }
];

const MailSorter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [sortOptions, setSortOptions] = useState({
    removeDuplicates: true,
    removeInvalid: true,
    alphabetical: false,
    domainGrouping: false,
    removeFreeProviders: false,
    onlyBusinessEmails: false,
    removeTemporaryEmails: false
  });
  const [outputFormat, setOutputFormat] = useState('csv');
  const [dragActive, setDragActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const freeEmailProviders = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
    'protonmail.com', 'mail.com', 'zoho.com', 'icloud.com', 'yandex.com'
  ];

  const disposableEmailDomains = [
    'tempmail.com', 'temp-mail.org', 'guerrillamail.com', '10minutemail.com',
    'throwawaymail.com', 'mailinator.com', 'yopmail.com', 'tempmail.net'
  ];

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const analyzeEmail = (email: string): EmailAnalysis => {
    const lowercaseEmail = email.toLowerCase();
    const [username, domain] = lowercaseEmail.split('@');
    const domainExtension = domain.split('.').pop() || '';

    return {
      email: lowercaseEmail,
      domain,
      username,
      isValid: isValidEmail(email),
      isFreeProvider: freeEmailProviders.includes(domain),
      isBusinessEmail: !freeEmailProviders.includes(domain) && !domain.endsWith('.edu'),
      isEducationalEmail: domain.endsWith('.edu'),
      domainExtension,
      hasDotInUsername: username.includes('.')
    };
  };

  const parseFileContent = (content: string): string[] => {
    const cleanContent = content.replace(/^\uFEFF/, '');
    const lines = cleanContent.split(/\r?\n/);
    return lines.flatMap(line => {
      const columns = line.split(/[,;\t]/);
      return columns
        .map(col => col.trim())
        .filter(col => col.includes('@'));
    });
  };

  const processEmails = (emails: string[]): EmailAnalysis[] => {
    let processedEmails = emails
      .map(email => email.trim().toLowerCase())
      .filter(email => email.length > 0)
      .map(analyzeEmail);

    if (sortOptions.removeInvalid) {
      processedEmails = processedEmails.filter(analysis => analysis.isValid);
    }

    if (sortOptions.removeFreeProviders) {
      processedEmails = processedEmails.filter(analysis => !analysis.isFreeProvider);
    }

    if (sortOptions.onlyBusinessEmails) {
      processedEmails = processedEmails.filter(analysis => analysis.isBusinessEmail);
    }

    if (sortOptions.removeTemporaryEmails) {
      processedEmails = processedEmails.filter(analysis => 
        !disposableEmailDomains.includes(analysis.domain)
      );
    }

    if (sortOptions.removeDuplicates) {
      processedEmails = processedEmails.filter((analysis, index, self) =>
        index === self.findIndex(a => a.email === analysis.email)
      );
    }

    if (sortOptions.alphabetical) {
      processedEmails.sort((a, b) => a.email.localeCompare(b.email));
    }

    if (sortOptions.domainGrouping) {
      processedEmails.sort((a, b) => a.domain.localeCompare(b.domain));
    }

    return processedEmails;
  };

  const generateOutputContent = (emailAnalyses: EmailAnalysis[]): string => {
    switch (outputFormat) {
      case 'csv':
        const headers = [
          'Email',
          'Domain',
          'Username',
          'Domain Extension',
          'Valid Email',
          'Free Provider',
          'Business Email',
          'Educational Email',
          'Has Dot In Username'
        ].join(',');
        const rows = emailAnalyses.map(analysis => [
          analysis.email,
          analysis.domain,
          analysis.username,
          analysis.domainExtension,
          analysis.isValid,
          analysis.isFreeProvider,
          analysis.isBusinessEmail,
          analysis.isEducationalEmail,
          analysis.hasDotInUsername
        ].join(','));
        return [headers, ...rows].join('\n');

      case 'json':
        return JSON.stringify(emailAnalyses, null, 2);

      case 'md':
        const mdHeaders = [
          '| Email | Domain | Domain Type | Valid |',
          '|-------|--------|-------------|-------|'
        ];
        const mdRows = emailAnalyses.map(analysis => 
          `| ${analysis.email} | ${analysis.domain} | ${
            analysis.isBusinessEmail ? 'Business' : 
            analysis.isEducationalEmail ? 'Educational' : 
            'Personal'
          } | ${analysis.isValid ? '✓' : '✗'} |`
        );
        return [...mdHeaders, ...mdRows].join('\n');

      case 'txt':
      default:
        return emailAnalyses.map(analysis => analysis.email).join('\n');
    }
  };

  const downloadFile = (content: string) => {
    const format = exportFormats.find(f => f.id === outputFormat) || exportFormats[0];
    const blob = new Blob([content], { type: format.mimeType });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email_analysis_${new Date().toISOString().slice(0, 10)}.${format.extension}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const processFile = async () => {
    if (!file) return;

    try {
      const text = await file.text();
      const emails = parseFileContent(text);
      const processedEmails = processEmails(emails);
      const output = generateOutputContent(processedEmails);
      downloadFile(output);
    } catch (error) {
      console.error('Error processing file:', error);
      alert('An error occurred while processing the file.');
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const validExtensions = ['.txt', '.csv'];
    const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    
    if (validExtensions.includes(fileExtension)) {
      setFile(file);
    } else {
      alert('Please upload a .txt or .csv file');
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="min-h-screen p-8 bg-background text-foreground transition-colors duration-200">
      <Card className="max-w-3xl mx-auto bg-card text-card-foreground">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">Advanced Email Sorter</CardTitle>
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4 text-muted-foreground" />
            <Switch id="dark-mode" checked={darkMode} onCheckedChange={toggleDarkMode} />
            <Moon className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div 
            className={`
              border-2 border-dashed rounded-lg p-8 text-center transition-colors
              ${dragActive ? 'border-primary bg-secondary/50' : 'border-border'}
              ${file ? 'bg-secondary/50' : ''}
            `}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {file ? (
              <div>
                <Upload className="w-12 h-12 mx-auto text-primary mb-2" />
                <p className="text-primary">File loaded: {file.name}</p>
              </div>
            ) : (
              <div>
                <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Drag your file here or</p>
                <Label htmlFor="file-upload" className="text-primary hover:underline cursor-pointer">
                  browse files
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".txt,.csv"
                    onChange={handleFileInput}
                  />
                </Label>
              </div>
            )}
          </div>
  
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Processing Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sortOptionsList.map((option) => (
                <TooltipProvider key={option.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={sortOptions[option.id as keyof typeof sortOptions]}
                          onCheckedChange={(checked) => 
                            setSortOptions(prev => ({...prev, [option.id]: checked === true}))
                          }
                        />
                        <Label htmlFor={option.id} className="text-foreground cursor-pointer">{option.label}</Label>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-popover text-popover-foreground cursor-pointer">
                      <p>{option.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Output Format</h3>
            <RadioGroup value={outputFormat} onValueChange={setOutputFormat}>
              {exportFormats.map((format) => (
                <TooltipProvider key={format.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={format.id} id={`format-${format.id}`} />
                        <Label htmlFor={`format-${format.id}`} className="text-foreground">{format.label}</Label>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-popover text-popover-foreground">
                      <p>{format.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </RadioGroup>
          </div>
  
          <Button
            onClick={processFile}
            disabled={!file}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Process Emails
          </Button>
  
          <Card className="bg-muted text-muted-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Processing Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 list-disc pl-4">
                <li>Supports .txt and .csv input files</li>
                <li>Handles multiple email formats and separators</li>
                <li>Processes emails with various domain extensions</li>
                <li>Available export formats include CSV, TXT, JSON, and Markdown</li>
                <li>All processing is done locally - no data is sent to any server</li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default MailSorter;

