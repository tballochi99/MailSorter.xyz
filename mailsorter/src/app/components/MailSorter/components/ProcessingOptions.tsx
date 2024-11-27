import React from 'react';
import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";
import type { ProcessingOptionsProps } from '../types';

export const ProcessingOptions: React.FC<ProcessingOptionsProps> = ({ 
  options, 
  selectedOptions, 
  onChange 
}) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Processing Options</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((option) => (
        <TooltipProvider key={option.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={selectedOptions[option.id as keyof typeof selectedOptions]}
                  onCheckedChange={(checked) => onChange(option.id, checked === true)}
                />
                <Label htmlFor={option.id} className="cursor-pointer">
                  {option.label}
                </Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{option.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  </div>
);