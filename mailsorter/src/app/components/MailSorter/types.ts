// types.ts
export interface EmailAnalysis {
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
  
  export interface SortOption {
    id: string;
    label: string;
    description: string;
  }
  
  export interface ExportFormat {
    id: string;
    label: string;
    description: string;
    extension: string;
    mimeType: string;
  }
  
  export interface SortOptions {
    removeDuplicates: boolean;
    removeInvalid: boolean;
    alphabetical: boolean;
    domainGrouping: boolean;
    removeFreeProviders: boolean;
    onlyBusinessEmails: boolean;
    removeTemporaryEmails: boolean;
  }
  
  export interface FileInputProps {
    file: File | null;
    onFileSelect: (file: File) => void;
  }
  
  export interface ProcessingOptionsProps {
    options: SortOption[];
    selectedOptions: SortOptions;
    onChange: (optionId: string, checked: boolean) => void;
  }
  
  export interface OutputFormatSelectorProps {
    formats: ExportFormat[];
    selected: string;
    onChange: (format: string) => void;
  }