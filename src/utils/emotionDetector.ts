
/**
 * Simple rule-based emotion detection system
 * Extracts emotional keywords from user input and maps them to emotion categories
 */

type EmotionCategory = 
  | 'anxious' 
  | 'tired' 
  | 'sad' 
  | 'angry' 
  | 'stressed' 
  | 'overwhelmed'
  | 'happy'
  | 'confident'
  | 'grateful'
  | 'peaceful';

interface EmotionKeywords {
  [key: string]: EmotionCategory;
}

// Mapping keywords to emotion categories
const emotionKeywords: EmotionKeywords = {
  // Anxious emotions
  'anxious': 'anxious',
  'nervous': 'anxious',
  'worried': 'anxious',
  'uneasy': 'anxious',
  'fear': 'anxious',
  'scared': 'anxious',
  'frightened': 'anxious',
  'panic': 'anxious',
  
  // Tired emotions
  'tired': 'tired',
  'exhausted': 'tired',
  'sleepy': 'tired',
  'fatigued': 'tired',
  'drained': 'tired',
  'weary': 'tired',
  'lethargic': 'tired',
  
  // Sad emotions
  'sad': 'sad',
  'unhappy': 'sad',
  'depressed': 'sad',
  'miserable': 'sad',
  'down': 'sad',
  'blue': 'sad',
  'gloomy': 'sad',
  'heartbroken': 'sad',
  'lonely': 'sad',
  'grief': 'sad',
  
  // Angry emotions
  'angry': 'angry',
  'furious': 'angry',
  'mad': 'angry',
  'annoyed': 'angry',
  'irritated': 'angry',
  'frustrated': 'angry',
  'enraged': 'angry',
  
  // Stressed emotions
  'stressed': 'stressed',
  'tense': 'stressed',
  'pressured': 'stressed',
  
  // Overwhelmed emotions
  'overwhelmed': 'overwhelmed',
  'swamped': 'overwhelmed',
  'burdened': 'overwhelmed',
  'overloaded': 'overwhelmed',
  
  // Happy emotions
  'happy': 'happy',
  'glad': 'happy',
  'joyful': 'happy',
  'delighted': 'happy',
  'pleased': 'happy',
  'cheerful': 'happy',
  'content': 'happy',
  'excited': 'happy',
  
  // Confident emotions
  'confident': 'confident',
  'strong': 'confident',
  'assured': 'confident',
  'bold': 'confident',
  'brave': 'confident',
  'powerful': 'confident',
  'capable': 'confident',
  
  // Grateful emotions
  'grateful': 'grateful',
  'thankful': 'grateful',
  'appreciative': 'grateful',
  'blessed': 'grateful',
  
  // Peaceful emotions
  'peaceful': 'peaceful',
  'calm': 'peaceful',
  'relaxed': 'peaceful',
  'serene': 'peaceful',
  'tranquil': 'peaceful',
  'centered': 'peaceful'
};

/**
 * Detects emotion from user input text
 * @param input - The user's input text describing how they feel
 * @returns The detected emotion category
 */
export function detectEmotion(input: string): EmotionCategory {
  // Convert input to lowercase for case-insensitive matching
  const lowercaseInput = input.toLowerCase();
  
  // Search for emotion keywords in the input
  for (const [keyword, emotion] of Object.entries(emotionKeywords)) {
    // Use word boundary matching to avoid matching parts of words
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    if (lowercaseInput.match(regex)) {
      return emotion;
    }
  }
  
  // If no specific emotion is detected, look for sentiment clues
  if (lowercaseInput.includes('not') && 
      (lowercaseInput.includes('good') || 
       lowercaseInput.includes('great') || 
       lowercaseInput.includes('well'))) {
    return 'sad';
  }
  
  if (lowercaseInput.includes('don\'t feel') || 
      lowercaseInput.includes('feeling bad')) {
    return 'sad';
  }
  
  if (lowercaseInput.includes('too much') || 
      lowercaseInput.includes('can\'t handle')) {
    return 'overwhelmed';
  }
  
  // Default emotion if no match is found
  return 'anxious';
}
