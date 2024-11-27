import { SortOption, ExportFormat } from './types';

export const SORT_OPTIONS: SortOption[] = [
  {
    id: 'removeDuplicates',
    label: 'Remove Duplicates',
    description: 'Eliminates duplicate email addresses'
  },
  {
    id: 'removeInvalid',
    label: 'Remove Invalid',
    description: 'Removes invalid email addresses'
  },
  {
    id: 'alphabetical',
    label: 'Alphabetical Sort',
    description: 'Sorts emails A to Z'
  },
  {
    id: 'domainGrouping',
    label: 'Group by Domain',
    description: 'Groups emails by domain names'
  },
  {
    id: 'removeFreeProviders',
    label: 'Remove Free Providers',
    description: 'Filters out free email providers'
  },
  {
    id: 'onlyBusinessEmails',
    label: 'Business Emails Only',
    description: 'Keeps only business email addresses'
  },
  {
    id: 'removeTemporaryEmails',
    label: 'Remove Temporary Emails',
    description: 'Filters out temporary email addresses'
  }
];

export const EXPORT_FORMATS: ExportFormat[] = [
    {
      id: 'csv',
      label: 'CSV',
      description: 'For spreadsheet software',
      extension: 'csv',
      mimeType: 'text/csv'
    },
    {
      id: 'txt',
      label: 'TXT',
      description: 'One email per line',
      extension: 'txt',
      mimeType: 'text/plain'
    },
    {
      id: 'json',
      label: 'JSON',
      description: 'Detailed JSON format',
      extension: 'json',
      mimeType: 'application/json'
    },
    {
      id: 'md',
      label: 'Markdown',
      description: 'Formatted markdown table',
      extension: 'md',
      mimeType: 'text/markdown'
    },
    {
      id: 'xlsx',
      label: 'Excel',
      description: 'Microsoft Excel format',
      extension: 'xlsx',
      mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    },
    {
      id: 'xml',
      label: 'XML',
      description: 'Structured XML format',
      extension: 'xml',
      mimeType: 'application/xml'
    },
    {
      id: 'html',
      label: 'HTML',
      description: 'Web page format',
      extension: 'html',
      mimeType: 'text/html'
    }
  ];

export const FREE_EMAIL_PROVIDERS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
  'protonmail.com', 'mail.com', 'zoho.com', 'icloud.com', 'yandex.com'
];

export const DISPOSABLE_EMAIL_DOMAINS = [
  'tempmail.com', 'temp-mail.org', 'guerrillamail.com', '10minutemail.com',
  'throwawaymail.com', 'mailinator.com', 'yopmail.com', 'tempmail.net'
];