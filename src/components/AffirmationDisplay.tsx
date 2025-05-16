
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';

interface AffirmationDisplayProps {
  affirmation: string;
  emotion: string;
  onGenerateAnother: () => void;
}

const AffirmationDisplay: React.FC<AffirmationDisplayProps> = ({ 
  affirmation, 
  emotion, 
  onGenerateAnother 
}) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Show the affirmation with a slight delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [affirmation]);
  
  // Reset animation when affirmation changes
  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [affirmation]);

  return (
    <div className={`w-full max-w-md mx-auto transition-all duration-500 ${visible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
        <div className="h-2 bg-gradient w-full"></div>
        <CardContent className="pt-6 pb-4 px-6">
          <div className="mb-2">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-lavender/10 text-lavender">
              {emotion}
            </span>
          </div>
          <p className="text-xl font-medium leading-relaxed tracking-wide animate-fade-in">
            {affirmation}
          </p>
        </CardContent>
        <CardFooter className="border-t bg-accent/20 px-6 py-3 flex justify-between">
          <p className="text-xs text-muted-foreground">
            Your personal affirmation
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onGenerateAnother}
            className="text-lavender hover:text-lavender/80 hover:bg-lavender/10 flex items-center gap-1"
          >
            <RefreshCw size={14} />
            <span>New Affirmation</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AffirmationDisplay;
