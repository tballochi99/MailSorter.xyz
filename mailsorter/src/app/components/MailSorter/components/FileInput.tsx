import React from 'react';
import { Upload, X } from 'lucide-react';
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";

export interface FileInputProps {
  file: File | null;
  onFileSelect: (file: File | null) => void;
}

export const FileInput: React.FC<FileInputProps> = ({ file, onFileSelect }) => {
  const validExtensions = ['.txt', '.csv', '.xlsx', '.xls', '.xml', '.json', '.doc', '.docx'];
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    if (validExtensions.includes(fileExtension)) {
      onFileSelect(file);
    }
  };

  const handleRemoveFile = () => {
    onFileSelect(null);
  };

  return (
    <div
      className="border-2 border-dashed rounded-lg p-8 text-center transition-colors hover:border-primary"
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {file ? (
        <div>
          <Upload className="w-12 h-12 mx-auto mb-2 text-primary" />
          <p className="mb-4">File loaded: {file.name}</p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRemoveFile}
            className="gap-2 hover:text-destructive hover:bg-white"
          >
            <X className="w-4 h-4" />
            Remove File
          </Button>
        </div>
      ) : (
        <div>
          <Upload className="w-12 h-12 mx-auto mb-2 text-primary animate-pulse" />
          <p className="mb-2">Drag your file here or</p>
          <Label htmlFor="file-upload" className="cursor-pointer hover:underline text-primary">
            browse files
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept={validExtensions.join(',')}
              onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
            />
          </Label>
          <p className="mt-4 text-sm text-muted-foreground">
            Supported formats: {validExtensions.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};