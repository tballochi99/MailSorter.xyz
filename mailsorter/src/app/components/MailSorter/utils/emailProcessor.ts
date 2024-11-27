import { EmailAnalysis, SortOptions } from '../types';
import { FREE_EMAIL_PROVIDERS, DISPOSABLE_EMAIL_DOMAINS } from '../constants';

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
    isFreeProvider: FREE_EMAIL_PROVIDERS.includes(domain),
    isBusinessEmail: !FREE_EMAIL_PROVIDERS.includes(domain) && !domain.endsWith('.edu'),
    isEducationalEmail: domain.endsWith('.edu'),
    domainExtension,
    hasDotInUsername: username.includes('.')
  };
};

const parseFileContent = (content: string): string[] => {
  const cleanContent = content.replace(/^\uFEFF/, ''); // Remove BOM
  return cleanContent
    .split(/\r?\n/)
    .flatMap(line => line.split(/[,;\t]/))
    .map(email => email.trim())
    .filter(email => email.includes('@'));
};

const processEmails = (emails: string[], options: SortOptions): EmailAnalysis[] => {
  let processedEmails = emails.map(analyzeEmail);

  if (options.removeInvalid) {
    processedEmails = processedEmails.filter(analysis => analysis.isValid);
  }

  if (options.removeDuplicates) {
    processedEmails = processedEmails.filter((analysis, index, self) =>
      index === self.findIndex(a => a.email === analysis.email)
    );
  }

  if (options.removeFreeProviders) {
    processedEmails = processedEmails.filter(analysis => !analysis.isFreeProvider);
  }

  if (options.onlyBusinessEmails) {
    processedEmails = processedEmails.filter(analysis => analysis.isBusinessEmail);
  }

  if (options.removeTemporaryEmails) {
    processedEmails = processedEmails.filter(analysis => 
      !DISPOSABLE_EMAIL_DOMAINS.includes(analysis.domain)
    );
  }

  if (options.alphabetical) {
    processedEmails.sort((a, b) => a.email.localeCompare(b.email));
  }

  if (options.domainGrouping) {
    processedEmails.sort((a, b) => a.domain.localeCompare(b.domain));
  }

  return processedEmails;
};

const generateOutputContent = (emailAnalyses: EmailAnalysis[], format: string): string => {
  switch (format) {
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
        '| Email | Domain | Type | Valid |',
        '|-------|--------|------|-------|'
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

const downloadFile = (content: string, format: string): void => {
  const timestamp = new Date().toISOString().slice(0, 10);
  const extension = format;
  const mimeType = {
    csv: 'text/csv',
    json: 'application/json',
    md: 'text/markdown',
    txt: 'text/plain'
  }[format] || 'text/plain';

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `email_analysis_${timestamp}.${extension}`;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

export const processEmailFile = async (
  file: File, 
  options: SortOptions, 
  outputFormat: string
): Promise<void> => {
  const text = await file.text();
  const emails = parseFileContent(text);
  const processedEmails = processEmails(emails, options);
  const output = generateOutputContent(processedEmails, outputFormat);
  downloadFile(output, outputFormat);
};