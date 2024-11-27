import { useState, useCallback } from 'react';
import { processEmailFile } from '../utils/emailProcessor';
import type { SortOptions } from '../types';

export const useFileProcessing = (sortOptions: SortOptions, outputFormat: string) => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processFile = useCallback(async () => {
    if (!file) return;
    
    setIsProcessing(true);
    setError(null);
    
    try {
      await processEmailFile(file, sortOptions, outputFormat);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsProcessing(false);
    }
  }, [file, sortOptions, outputFormat]);

  return { file, setFile, processFile, isProcessing, error };
};