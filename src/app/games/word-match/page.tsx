"use client";

import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Button } from "../../components/Button";
import { FadeIn } from "../../components/FadeIn";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

// Sample word pairs for the game
const wordPairs = [
  { word: "Muraho", meaning: "Hello", language: "Kinyarwanda" },
  { word: "Asante", meaning: "Thank you", language: "Swahili" },
  { word: "Ekaabo", meaning: "Welcome", language: "Yoruba" },
  { word: "Allinllachu", meaning: "How are you?", language: "Quechua" },
  { word: "Yá'át'ééh", meaning: "Hello", language: "Navajo" },
  { word: "Kia ora", meaning: "Hello", language: "Māori" },
  { word: "Aloha", meaning: "Hello", language: "Hawaiian" },
  { word: "Helo", meaning: "Hello", language: "Welsh" },
  { word: "Bures", meaning: "Hello", language: "Sámi" },
];

export default function WordMatchGame() {
  const [currentWord, setCurrentWord] = useState<typeof wordPairs[0] | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [usedWords, setUsedWords] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);

  useEffect(() => {
    getNewWord();
  }, []);

  const getNewWord = () => {
    const availableIndices = wordPairs
      .map((_, index) => index)
      .filter(index => !usedWords.includes(index));

    if (availableIndices.length === 0) {
      setGameOver(true);
      return;
    }

    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    setCurrentWord(wordPairs[randomIndex]);
    setUsedWords([...usedWords, randomIndex]);
    setFeedback(null);
  };

  const handleAnswer = (answer: string) => {
    if (!currentWord) return;

    const isCorrect = answer === currentWord.meaning;
    setFeedback(isCorrect ? "correct" : "incorrect");
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      getNewWord();
    }, 1500);
  };

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
    setUsedWords([]);
    getNewWord();
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50/50 to-white">
        <div className="container mx-auto px-4 py-16">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <Button
                  className="mr-4"
                  variant="ghost"
                  asChild
                >
                  <Link href="/games">
                    <ArrowLeft className="h-5 w-5" />
                  </Link>
                </Button>
                <h1 className="text-3xl font-bold text-primary-900">
                  Word Match Game
                </h1>
                <div className="text-xl font-semibold text-primary-800">
                  Score: {score}
                </div>
              </div>

              {gameOver ? (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <h2 className="text-2xl font-semibold text-primary-800 mb-4">
                    Game Over!
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Your final score: {score} out of {wordPairs.length}
                  </p>
                  <Button 
                    className="px-8 py-3 text-base font-medium bg-primary-600 hover:bg-primary-700 text-white hover:text-white shadow-sm transition-colors duration-200"
                    onClick={resetGame}
                  >
                    Play Again
                  </Button>
                </div>
              ) : currentWord ? (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-primary-800 mb-2">
                      {currentWord.word}
                    </h2>
                    <p className="text-slate-600">
                      Language: {currentWord.language}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wordPairs.map((pair) => (
                      <Button
                        key={`${pair.word}-${pair.meaning}`}
                        className={`w-full py-4 text-lg ${
                          feedback === "correct" && pair.meaning === currentWord.meaning
                            ? "bg-green-100 text-green-800"
                            : feedback === "incorrect" && pair.meaning === currentWord.meaning
                            ? "bg-red-100 text-red-800"
                            : ""
                        }`}
                        variant="outline"
                        onClick={() => handleAnswer(pair.meaning)}
                        disabled={feedback !== null}
                      >
                        {pair.meaning}
                      </Button>
                    ))}
                  </div>

                  {feedback && (
                    <div className="mt-6 text-center">
                      {feedback === "correct" ? (
                        <div className="flex items-center justify-center text-green-600">
                          <CheckCircle className="h-6 w-6 mr-2" />
                          Correct!
                        </div>
                      ) : (
                        <div className="flex items-center justify-center text-red-600">
                          <XCircle className="h-6 w-6 mr-2" />
                          Try again!
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
} 