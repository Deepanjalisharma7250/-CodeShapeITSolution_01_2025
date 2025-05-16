
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [autoTransition, setAutoTransition] = useState(false);
  
  // Auto-transition effect 
  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoTransition(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // When auto transition is triggered or button is clicked
  useEffect(() => {
    if (autoTransition) {
      handleTransition();
    }
  }, [autoTransition]);
  
  const handleTransition = () => {
    setFadeOut(true);
    const timer = setTimeout(() => {
      onComplete();
    }, 600); // Match with animation duration
    
    return () => clearTimeout(timer);
  };
  
  return (
    <div 
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient z-50 transition-opacity duration-600 
        ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="text-center animate-scale-in">
        <div className="w-48 h-48 mx-auto mb-8 flex items-center justify-center">
          <div className="relative w-full h-full">
            <img 
              src="/lovable-uploads/3ae78c60-d378-4c24-8e11-281fc837b904.png" 
              alt="CodeShapeITSolution Logo" 
              className="w-full h-full object-contain animate-pulse-gentle"
            />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-3 text-shadow-sm animate-fade-in">
          Positive Pulse
        </h1>
        
        <div className="mb-8 animate-fade-in delay-300">
          <img 
            src="/lovable-uploads/66849ca0-e7a8-46bf-ab4b-b2bed438f538.png" 
            alt="CodeShape IT Solution - Shaping The Future Of Coding" 
            className="max-w-xs mx-auto"
          />
        </div>
        
        <Button 
          onClick={handleTransition}
          className="bg-white text-lavender hover:bg-white/90 transition-all shadow-lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default IntroScreen;
