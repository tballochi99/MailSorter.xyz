"use client"

import React, { useState, useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';
import { FileInput } from './components/FileInput';
import { ProcessingOptions } from './components/ProcessingOptions';
import { OutputFormatSelector } from './components/OutputFormatSelector';
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useTheme } from './hooks/useTheme';
import { useFileProcessing } from './hooks/useFileProcessing';
import { SORT_OPTIONS, EXPORT_FORMATS } from './constants';
import type { SortOptions } from './types';

const MailSorter = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    removeDuplicates: true,
    removeInvalid: true,
    alphabetical: false,
    domainGrouping: false,
    removeFreeProviders: false,
    onlyBusinessEmails: false,
    removeTemporaryEmails: false
  });
  const [outputFormat, setOutputFormat] = useState('csv');

  const {
    file,
    setFile,
    processFile,
    isProcessing,
    error
  } = useFileProcessing(sortOptions, outputFormat);

  const handleSortOptionChange = useCallback((optionId: string, checked: boolean) => {
    setSortOptions(prev => ({ ...prev, [optionId]: checked }));
  }, []);

  const handleFormatChange = useCallback((format: string) => {
    setOutputFormat(format);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-background">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Advanced Email Sorter</CardTitle>
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
            <Moon className="h-4 w-4" />
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <FileInput file={file} onFileSelect={setFile} />
          
          <ProcessingOptions
            options={SORT_OPTIONS}
            selectedOptions={sortOptions}
            onChange={handleSortOptionChange}
          />
          
          <OutputFormatSelector
            formats={EXPORT_FORMATS}
            selected={outputFormat}
            onChange={handleFormatChange}
          />
          
          <Button
            onClick={processFile}
            disabled={!file || isProcessing}
            className="w-full"
          >
            {isProcessing ? 'Processing...' : 'Process Emails'}
          </Button>

          {error && (
            <div className="text-destructive text-sm">{error}</div>
          )}
        </CardContent>
      </Card> 
    </div>
  );
};

export default MailSorter;