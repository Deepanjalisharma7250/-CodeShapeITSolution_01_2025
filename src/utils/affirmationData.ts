
/**
 * Affirmation data for different emotion categories
 * Each category has multiple affirmations that can be randomly selected
 */

interface AffirmationData {
  [key: string]: string[];
}

// Database of affirmations categorized by emotion
const affirmations: AffirmationData = {
  anxious: [
    "Take a deep breath. This moment of anxiety is temporary, but your strength is permanent.",
    "Your anxious thoughts are not facts. You are safe, capable, and stronger than you realize.",
    "Anxiety is just a sensation passing through you, not a definition of who you are.",
    "You've overcome anxious moments before, and you'll overcome this one too.",
    "Your courage is greater than your fear. Take one small step forward.",
    "This feeling will pass. Focus on now, breathe, and know that you are okay."
  ],
  
  tired: [
    "Rest is not a luxury; it's essential. Honor your body's need to recharge.",
    "Your value isn't measured by your productivity. It's okay to rest without guilt.",
    "Even when tired, you remain capable. Pace yourself and celebrate small victories.",
    "Your body is asking for rest because you've been strong for so long.",
    "Energy flows in cycles. This fatigue is temporary, and your vitality will return.",
    "Rest now to rise stronger. Your dreams will wait for your renewed energy."
  ],
  
  sad: [
    "Sadness visits everyone. It's okay to feel it fully, knowing it will eventually pass.",
    "Your tears water the seeds of your strength and compassion.",
    "This sadness is teaching you something valuable about your heart's capacity to feel.",
    "Even in sadness, you are worthy of love, including love from yourself.",
    "The depth of your sadness reflects the height of your capacity for joy.",
    "Your heart may be heavy now, but it's still beating with purpose and possibility."
  ],
  
  angry: [
    "Your anger shows you care deeply. Channel this energy toward positive change.",
    "Feel your anger fully, then release it. Don't let it consume the beauty within you.",
    "Anger is information. Listen to it, learn from it, then choose your response wisely.",
    "You can acknowledge your anger without being controlled by it.",
    "In the space between stimulus and response lies your power to choose peace.",
    "Your anger is valid, but so is your capacity for compassion and understanding."
  ],
  
  stressed: [
    "Stress is a response, not your identity. You remain capable even under pressure.",
    "One breath at a time, one step at a time. You will navigate through this stress.",
    "Your ability to handle challenges is greater than the stress you're feeling now.",
    "Pause, breathe, and remember that this pressure is temporary but your strength is lasting.",
    "You've overcome stressful situations before, and you'll overcome this one too.",
    "Even in stress, parts of you remain calm and centered. Connect with that inner peace."
  ],
  
  overwhelmed: [
    "Break everything down into small steps. You only need to focus on one step at a time.",
    "You don't have to do everything at once. Progress is still progress, no matter how small.",
    "It's okay to ask for help when overwhelmed. Reaching out shows wisdom, not weakness.",
    "The mountain seems high only until you start climbing. Take the first small step.",
    "Your capacity to handle challenges is expanding right now, even though it feels overwhelming.",
    "This feeling of being overwhelmed is temporary, but the strength you're building is permanent."
  ],
  
  happy: [
    "Your happiness creates ripples of positive energy that touch everyone around you.",
    "This joy you feel is your natural state. Savor it fully and remember it always.",
    "Your happiness matters. It's not just a luxury—it's essential to your wellbeing.",
    "The joy you feel now is always accessible within you, even during challenging times.",
    "You deserve this happiness. Embrace it without reservation or guilt.",
    "Your smile brightens the world. Never underestimate the power of your joy."
  ],
  
  confident: [
    "Your confidence comes from knowing yourself, both your strengths and your growth areas.",
    "You are capable of more than you can imagine. Trust your abilities and keep moving forward.",
    "Every challenge you face builds the confidence to face the next one. You're getting stronger.",
    "You don't need to be perfect to be confident. Your authentic self is your greatest power.",
    "Your voice matters. Speak your truth with confidence, knowing its value.",
    "Confidence isn't about knowing you'll succeed; it's knowing you can handle whatever comes."
  ],
  
  grateful: [
    "Gratitude turns what you have into enough. You are blessed in more ways than you realize.",
    "Your grateful heart attracts more reasons to be thankful. Keep appreciating life's gifts.",
    "In expressing gratitude, you recognize the abundance that already exists in your life.",
    "Thankfulness creates a bridge between your heart and the hearts of others.",
    "Every 'thank you' is a seed that grows into more beautiful experiences.",
    "Gratitude transforms ordinary moments into extraordinary memories."
  ],
  
  peaceful: [
    "Peace isn't the absence of challenges; it's the presence of ease amid whatever comes.",
    "The calm you feel is your natural state. You can return to it anytime through your breath.",
    "Your peaceful presence creates a sanctuary wherever you go.",
    "Inner peace is your birthright. It remains accessible within you, even during storms.",
    "In this moment of peace, you are exactly where you need to be.",
    "The tranquility you cultivate within ripples outward, touching everything around you."
  ]
};

/**
 * Returns a random affirmation based on the detected emotion
 * @param emotion - The detected emotion category
 * @returns A randomly selected affirmation from the appropriate category
 */
export function getAffirmation(emotion: string): string {
  // Get the affirmation array for the emotion, or use anxious as default
  const emotionAffirmations = affirmations[emotion] || affirmations.anxious;
  
  // Select a random affirmation from the array
  const randomIndex = Math.floor(Math.random() * emotionAffirmations.length);
  return emotionAffirmations[randomIndex];
}
