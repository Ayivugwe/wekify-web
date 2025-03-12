
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, Award, Clock, Heart, Save, Shuffle } from "lucide-react";
import Layout from "@/app/components/layout";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { Metadata } from "next";

// Sample game data - in a real implementation this would come from an API
const sampleLanguages = [
  {
    id: "swahili",
    name: "Swahili",
    difficulty: "easy",
    words: [
      { word: "jambo", meaning: "hello", options: ["hello", "goodbye", "friend", "morning"] },
      { word: "rafiki", meaning: "friend", options: ["family", "friend", "food", "journey"] },
      { word: "asante", meaning: "thank you", options: ["please", "sorry", "thank you", "welcome"] },
      { word: "chakula", meaning: "food", options: ["water", "food", "house", "love"] },
      { word: "safari", meaning: "journey", options: ["journey", "adventure", "animal", "walk"] }
    ]
  },
  {
    id: "navajo",
    name: "Navajo",
    difficulty: "medium",
    words: [
      { word: "yá'át'ééh", meaning: "hello", options: ["hello", "sky", "earth", "water"] },
      { word: "ahéhee'", meaning: "thank you", options: ["please", "thank you", "yes", "no"] },
      { word: "shíma", meaning: "my mother", options: ["my father", "my mother", "my sister", "my brother"] },
      { word: "tó", meaning: "water", options: ["fire", "water", "earth", "wind"] },
      { word: "bilagáana", meaning: "white person", options: ["native person", "white person", "child", "elder"] }
    ]
  },
  {
    id: "welsh",
    name: "Welsh",
    difficulty: "medium",
    words: [
      { word: "bore da", meaning: "good morning", options: ["goodbye", "good morning", "good night", "hello"] },
      { word: "diolch", meaning: "thank you", options: ["please", "thank you", "welcome", "sorry"] },
      { word: "caru", meaning: "love", options: ["hate", "fear", "love", "hope"] },
      { word: "croeso", meaning: "welcome", options: ["welcome", "goodbye", "hello", "thanks"] },
      { word: "iechyd da", meaning: "cheers/good health", options: ["good luck", "congratulations", "cheers/good health", "happy birthday"] }
    ]
  }
];

export default function LanguageGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [userAnswers, setUserAnswers] = useState([]);
  const [savedWords, setSavedWords] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [streakCount, setStreakCount] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);

  // Timer logic
  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameOver) {
      endGame();
    }
  }, [gameStarted, timeLeft, gameOver]);

  const startGame = (language) => {
    setSelectedLanguage(language);
    setGameStarted(true);
    setCurrentWordIndex(0);
    setScore(0);
    setTimeLeft(60);
    setUserAnswers([]);
    setSavedWords([]);
    setGameOver(false);
    setStreakCount(0);
    setHighestStreak(0);
  };

  const handleAnswer = (selectedOption) => {
    const currentWord = selectedLanguage.words[currentWordIndex];
    const isCorrect = selectedOption === currentWord.meaning;
    
    // Update streak
    if (isCorrect) {
      const newStreak = streakCount + 1;
      setStreakCount(newStreak);
      if (newStreak > highestStreak) {
        setHighestStreak(newStreak);
      }
    } else {
      setStreakCount(0);
    }

    setUserAnswers([...userAnswers, {
      word: currentWord.word,
      correct: isCorrect,
      userChoice: selectedOption,
      correctAnswer: currentWord.meaning
    }]);

    if (isCorrect) {
      setScore(score + 10);
      // Bonus points for streaks
      if (streakCount >= 3) {
        setScore(score + 5); // Additional points for streaks
      }
    }

    // Move to next word or end game
    if (currentWordIndex < selectedLanguage.words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      endGame();
    }
  };

  const saveWord = useCallback(() => {
    const currentWord = selectedLanguage.words[currentWordIndex];
    if (!savedWords.some(w => w.word === currentWord.word)) {
      setSavedWords([...savedWords, currentWord]);
      setScore(score + 5); // Bonus for saving a word
    }
  }, [currentWordIndex, savedWords, selectedLanguage, score]);

  const endGame = () => {
    setGameOver(true);
    // In a real implementation, you could save scores to a database here
  };

  // Render intro/language selection screen
  if (!gameStarted) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Language Longevity Game</h1>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Test your skills and help preserve endangered languages by learning and correctly identifying words.
                Every word you save contributes to language preservation awareness!
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {sampleLanguages.map((language) => (
                  <div 
                    key={language.id} 
                    className="bg-gray-50 rounded-xl p-6 hover:bg-primary-50 hover:shadow-md transition-all cursor-pointer"
                    onClick={() => startGame(language)}
                  >
                    <h3 className="text-xl font-semibold mb-2">{language.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <span className="font-medium mr-2">Difficulty:</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        language.difficulty === "easy" ? "bg-green-100 text-green-800" :
                        language.difficulty === "medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {language.difficulty.charAt(0).toUpperCase() + language.difficulty.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {language.words.length} words to preserve
                    </p>
                    <Button onClick={() => startGame(language)} className="w-full justify-center">
                      Play <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">How to Play</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-1 rounded-full mr-2 mt-0.5">1</span>
                    <span>Choose a language you want to help preserve</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-1 rounded-full mr-2 mt-0.5">2</span>
                    <span>Match words with their correct meanings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-1 rounded-full mr-2 mt-0.5">3</span>
                    <span>"Save" words to your personal collection for bonus points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-1 rounded-full mr-2 mt-0.5">4</span>
                    <span>Build streaks of correct answers for extra points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-1 rounded-full mr-2 mt-0.5">5</span>
                    <span>Complete the challenge before time runs out!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Render active game screen
  if (gameStarted && !gameOver) {
    const currentWord = selectedLanguage.words[currentWordIndex];
    
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold">{selectedLanguage.name} Preservation</h1>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <span className="font-bold text-xl">{score}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-500 mr-2" />
                    <span className={`font-bold text-xl ${timeLeft <= 10 ? "text-red-500" : ""}`}>{timeLeft}s</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Word {currentWordIndex + 1} of {selectedLanguage.words.length}</span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Streak:</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-sm font-medium">
                      {streakCount} {streakCount >= 3 ? "🔥" : ""}
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-primary-50 p-6 rounded-xl mb-6 flex justify-between items-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">{currentWord.word}</h2>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      onClick={saveWord}
                      disabled={savedWords.some(w => w.word === currentWord.word)}
                      className="flex items-center"
                    >
                      <Save className="h-4 w-4 mr-1" />
                      {savedWords.some(w => w.word === currentWord.word) ? "Saved" : "Save Word"}
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentWord.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="p-4 bg-white border border-gray-200 rounded-lg text-left hover:bg-primary-50 hover:border-primary transition-colors font-medium"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Saved Words ({savedWords.length})</h3>
                <div className="flex flex-wrap gap-2">
                  {savedWords.map((saved, idx) => (
                    <div key={idx} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                      {saved.word}
                    </div>
                  ))}
                  {savedWords.length === 0 && (
                    <p className="text-sm text-gray-500">Save words to build your collection!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Render game over screen
  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Game Complete!</h1>
              <p className="text-lg text-gray-700">
                You've contributed to preserving the {selectedLanguage.name} language!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-50 p-6 rounded-xl text-center">
                <Award className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="text-lg font-medium mb-1">Final Score</h3>
                <p className="text-3xl font-bold text-primary-dark">{score}</p>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-xl text-center">
                <Heart className="h-10 w-10 mx-auto mb-3 text-amber-500" />
                <h3 className="text-lg font-medium mb-1">Words Saved</h3>
                <p className="text-3xl font-bold text-amber-700">{savedWords.length}</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <Shuffle className="h-10 w-10 mx-auto mb-3 text-blue-500" />
                <h3 className="text-lg font-medium mb-1">Highest Streak</h3>
                <p className="text-3xl font-bold text-blue-700">{highestStreak}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Your Answers</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="divide-y divide-gray-200">
                  {userAnswers.map((answer, idx) => (
                    <li key={idx} className="py-3 flex items-center justify-between">
                      <div>
                        <span className="font-medium">{answer.word}</span>
                        <span className="text-gray-600 ml-2">→</span>
                        <span className={`ml-2 ${answer.correct ? "text-green-600" : "text-red-600"}`}>
                          {answer.userChoice}
                        </span>
                      </div>
                      <div>
                        {answer.correct ? (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Correct</span>
                        ) : (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                            Should be: {answer.correctAnswer}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button onClick={() => startGame(selectedLanguage)} className="justify-center">
                Play Again
              </Button>
              <Button variant="secondary" onClick={() => setGameStarted(false)} className="justify-center">
                Choose Another Language
              </Button>
              <Link href="/assessment">
                <Button variant="outline" className="justify-center w-full md:w-auto">
                  Language Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
