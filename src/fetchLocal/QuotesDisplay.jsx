import React, { useState, useEffect } from 'react';
import quotes from './quotes.json';

export default function QuotesDisplay() {
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    // Get today's date as a string
    const today = new Date().toDateString();

    // Use the date string to generate a pseudo-random index
    let index = Math.abs(today.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0) % quotes.length);

    // Set the daily quote
    setCurrentQuote(quotes[index]);
  }, []);

  const handleRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="max-w-{100px} mx-auto text-center p-4 bg-white/50 shadow-lg rounded-lg mb-4">
    <h1 className="text-2xl font-bold text-white mb-6">Inspiring Quote of Today</h1>
    {currentQuote && (
        <div className="quote bg-white/75 shadow-lg rounded-lg p-6 mb-4">
            <p className="text-lg text-gray-700 italic">"{currentQuote.q}"</p>
            <p className="text-md text-gray-600 font-semibold mt-2">— {currentQuote.a}</p>
        </div>
    )}
    <button onClick={handleRandomQuote} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
        Show Random Quote
    </button>
</div>
  );
}
