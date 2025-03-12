
import { createClient } from '@replit/database';

const db = createClient();

export async function saveLanguageAssessment(data) {
  try {
    // Get existing assessments for this language
    const existingData = await getLanguageAssessments(data.languageName) || [];
    
    // Add the new assessment
    existingData.push({
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    });
    
    // Save back to database
    await db.set(`language:${data.languageName.toLowerCase()}`, JSON.stringify(existingData));
    
    // Update language list
    await updateLanguageList(data.languageName);
    
    return true;
  } catch (error) {
    console.error("Error saving assessment:", error);
    return false;
  }
}

export async function getLanguageAssessments(languageName) {
  try {
    const assessmentsJson = await db.get(`language:${languageName.toLowerCase()}`);
    return assessmentsJson ? JSON.parse(assessmentsJson) : [];
  } catch (error) {
    console.error("Error getting assessments:", error);
    return [];
  }
}

export async function getAllLanguages() {
  try {
    const languagesJson = await db.get('languages:list');
    return languagesJson ? JSON.parse(languagesJson) : [];
  } catch (error) {
    console.error("Error getting language list:", error);
    return [];
  }
}

async function updateLanguageList(languageName) {
  try {
    // Get current list
    const existingList = await getAllLanguages();
    
    // Only add if not already in list
    if (!existingList.includes(languageName)) {
      existingList.push(languageName);
      await db.set('languages:list', JSON.stringify(existingList));
    }
  } catch (error) {
    console.error("Error updating language list:", error);
  }
}

export async function getLanguageSummary(languageName) {
  try {
    const assessments = await getLanguageAssessments(languageName);
    
    if (assessments.length === 0) return null;
    
    // Calculate average score
    const totalScore = assessments.reduce((sum, assessment) => sum + assessment.score, 0);
    const averageScore = totalScore / assessments.length;
    
    // Calculate average percentage
    const totalPercentage = assessments.reduce((sum, assessment) => sum + assessment.percentage, 0);
    const averagePercentage = totalPercentage / assessments.length;
    
    // Find most common recommendations
    const allRecommendations = assessments.flatMap(a => a.recommendations);
    const recommendationCounts = {};
    allRecommendations.forEach(rec => {
      recommendationCounts[rec] = (recommendationCounts[rec] || 0) + 1;
    });
    
    // Sort by count and get top 5
    const topRecommendations = Object.entries(recommendationCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([rec]) => rec);
    
    return {
      languageName,
      assessmentsCount: assessments.length,
      averageScore,
      averagePercentage,
      needsSupport: averagePercentage > 50, // Higher percentage means higher risk
      latestAssessment: assessments[assessments.length - 1],
      topRecommendations
    };
  } catch (error) {
    console.error("Error calculating language summary:", error);
    return null;
  }
}

export async function getAllLanguagesSummary() {
  try {
    const languages = await getAllLanguages();
    const summaries = await Promise.all(
      languages.map(async (lang) => await getLanguageSummary(lang))
    );
    return summaries.filter(s => s !== null);
  } catch (error) {
    console.error("Error getting all summaries:", error);
    return [];
  }
}
