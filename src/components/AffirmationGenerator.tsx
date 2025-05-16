
import React, { useState } from 'react';
import EmotionInput from './EmotionInput';
import AffirmationDisplay from './AffirmationDisplay';
import { detectEmotion } from '../utils/emotionDetector';
import { getAffirmation } from '../utils/affirmationData';
import { useToast } from '@/hooks/use-toast';

const AffirmationGenerator: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentAffirmation, setCurrentAffirmation] = useState('');
  const [detectedEmotion, setDetectedEmotion] = useState('');
  const [userInput, setUserInput] = useState('');
  const { toast } = useToast();

  const handleInputSubmit = (input: string) => {
    setIsProcessing(true);
    setUserInput(input);
    
    // Simulate processing delay for better UX
    setTimeout(() => {
      try {
        // Detect emotion from user input
        const emotion = detectEmotion(input);
        setDetectedEmotion(emotion);
        
        // Get affirmation based on detected emotion
        const affirmation = getAffirmation(emotion);
        setCurrentAffirmation(affirmation);
      } catch (error) {
        toast({
          title: "Couldn't process your emotion",
          description: "Please try again with different wording",
          variant: "destructive",
        });
        console.error("Error processing emotion:", error);
      } finally {
        setIsProcessing(false);
      }
    }, 1500);
  };
  
  const generateNewAffirmation = () => {
    if (detectedEmotion) {
      setIsProcessing(true);
      
      // Simulate processing delay
      setTimeout(() => {
        const newAffirmation = getAffirmation(detectedEmotion);
        setCurrentAffirmation(newAffirmation);
        setIsProcessing(false);
      }, 600);
    }
  };
  
  return (
    <div className="space-y-8 w-full">
      {!currentAffirmation && (
        <EmotionInput onSubmit={handleInputSubmit} isLoading={isProcessing} />
      )}
      
      {currentAffirmation && (
        <>
          <AffirmationDisplay 
            affirmation={currentAffirmation}
            emotion={detectedEmotion}
            onGenerateAnother={generateNewAffirmation}
          />
          
          <div className="text-center">
            <button 
              onClick={() => {
                setCurrentAffirmation('');
                setDetectedEmotion('');
                setUserInput('');
              }}
              className="text-sm text-lavender hover:text-lavender/80 hover:underline transition-colors"
            >
              Start over with a new emotion
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AffirmationGenerator;
