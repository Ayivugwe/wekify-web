// This file should only be imported in server components or API routes
'use server';

import { createClient } from '@replit/database';

// Create a database client
const db = createClient();

export async function saveLanguageAssessment(data) {
  try {
    const id = `language_assessment_${Date.now()}`;
    await db.set(id, data);

    // Update the language stats
    const langKey = `stats_${data.language}`;
    const existingStats = await db.get(langKey) || { count: 0, totalScore: 0 };

    existingStats.count += 1;
    existingStats.totalScore += data.totalScore;

    await db.set(langKey, existingStats);

    return { success: true, id };
  } catch (error) {
    console.error('Database error:', error);
    return { success: false, error: error.message };
  }
}

export async function getLanguageStats() {
  try {
    // Get all keys that start with "stats_"
    const keys = await db.list("stats_");

    // Fetch all stats in parallel
    const statsPromises = keys.map(async (key) => {
      const stats = await db.get(key);
      const language = key.replace("stats_", "");
      return {
        language,
        count: stats.count,
        averageScore: stats.totalScore / stats.count,
        needsSupport: stats.totalScore / stats.count < 50 // Threshold for needing support
      };
    });

    return await Promise.all(statsPromises);
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
}

export async function getAllAssessments() {
  try {
    const keys = await db.list("language_assessment_");
    const assessmentsPromises = keys.map(async (key) => {
      const assessment = await db.get(key);
      return {
        id: key,
        ...assessment
      };
    });

    return await Promise.all(assessmentsPromises);
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
}