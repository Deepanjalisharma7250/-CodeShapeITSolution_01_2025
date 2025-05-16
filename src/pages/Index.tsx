
import React, { useState } from 'react';
import IntroScreen from '@/components/IntroScreen';
import AffirmationGenerator from '@/components/AffirmationGenerator';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  
  const handleIntroComplete = () => {
    setShowIntro(false);
  };
  
  return (
    <>
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 transition-all">
        <div className="w-full max-w-4xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-lavender mb-3 animate-fade-in">
              Positive Pulse
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto animate-fade-in">
              AI-powered affirmations personalized for your emotional wellbeing
            </p>
          </header>
          
          <main className="relative">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl -z-10 animate-fade-in"></div>
            
            <div className="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 animate-scale-in">
              <AffirmationGenerator />
            </div>
            
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>A CodeShapeITSolution Project</p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Index;
