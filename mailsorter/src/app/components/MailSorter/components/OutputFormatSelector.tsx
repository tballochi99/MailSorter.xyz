import React from 'react';
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";
import type { OutputFormatSelectorProps } from '../types';

export const OutputFormatSelector: React.FC<OutputFormatSelectorProps> = ({
  formats,
  selected,
  onChange
}) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Output Format</h3>
    <RadioGroup value={selected} onValueChange={onChange} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {formats.map((format) => (
        <TooltipProvider key={format.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2 p-2 hover:bg-accent rounded-lg transition-colors">
                <RadioGroupItem value={format.id} id={`format-${format.id}`} />
                <Label htmlFor={`format-${format.id}`} className="cursor-pointer">
                  {format.label}
                </Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{format.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </RadioGroup>
  </div>
);