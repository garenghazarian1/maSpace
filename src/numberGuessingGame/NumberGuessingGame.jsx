import React, { useState, useEffect } from 'react';

export default function NumberGuessingGame() {
    const [targetNumber, setTargetNumber] = useState(null);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [chances, setChances] = useState(10);

    useEffect(() => {
        resetGame();
    }, []);

    const handleGuess = () => {
        if (chances <= 0) {
            setMessage('No more chances left! Game over.');
            return;
        }

        const numGuess = parseInt(guess, 10);
        if (numGuess > targetNumber) {
            setMessage('Too high! Try again.');
            setChances(chances - 1);
        } else if (numGuess < targetNumber) {
            setMessage('Too low! Try again.');
            setChances(chances - 1);
        } else {
            setMessage('Congratulations! You guessed right!');
        }
        setGuess(''); // Clear the input field after each guess
    };

    const resetGame = () => {
        setTargetNumber(Math.floor(Math.random() * 100) + 1);
        setMessage('');
        setGuess('');
        setChances(10); // Reset chances back to 10
    };

    return (
        <div className="p-4 border border-gray-300 rounded-md shadow-lg max-w-md  mt-8 bg-gradient-to-r from-indigo-50/50 to-blue-700/50 text-white">
    <h1 className="text-xl font-bold mb-4 text-center">Guess the Number!</h1>
    <p className="text-center mb-4">I'm thinking of a number between 1 and 100. You have {chances} chances left.</p>
    <div className="flex justify-center mb-4">
        <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="border border-gray-200 rounded p-2 text-black w-1/3 mr-2"
            placeholder="Enter your guess"
        />
        <button onClick={handleGuess} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300">
            Guess
        </button>
    </div>
    <div className="text-center">
        <button onClick={resetGame} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
            Reset
        </button>
    </div>
    {message && <p className="mt-4 text-center">{message}</p>}
</div>

    );
}
