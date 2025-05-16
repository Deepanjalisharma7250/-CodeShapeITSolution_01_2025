
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface EmotionInputProps {
  onSubmit: (input: string) => void;
  isLoading: boolean;
}

const EmotionInput: React.FC<EmotionInputProps> = ({ onSubmit, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input.trim());
    }
  };

  const placeholders = [
    "I'm feeling exhausted today...",
    "I'm nervous about my interview...",
    "I feel overwhelmed with work...",
    "I'm proud of what I accomplished...",
    "I'm feeling a bit down today..."
  ];

  const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-medium text-center">How are you feeling today?</h2>
          <p className="text-center text-muted-foreground text-sm">
            Share a brief statement about your current emotions
          </p>
        </div>
        
        <div className="relative">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={randomPlaceholder}
            className="pr-24 bg-white/80 backdrop-blur-sm border-lavender/30 focus-visible:ring-lavender shadow-sm"
            disabled={isLoading}
          />
          <Button
            type="submit"
            className="absolute right-1 top-1 bg-gradient text-white hover:opacity-90"
            size="sm"
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? 'Processing...' : 'Submit'}
          </Button>
        </div>
        
        <p className="text-xs text-center text-muted-foreground">
          Try expressing how you feel or what's on your mind
        </p>
      </form>
    </div>
  );
};

export default EmotionInput;
