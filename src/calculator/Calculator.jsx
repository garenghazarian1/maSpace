import React, { useState } from 'react';

export default function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        setInput(input + value);
    };

    const calculateResult = () => {
        try {
            // eslint-disable-next-line no-eval
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    return (
        <div className="p-4 border border-gray-200 bg-blue-200/50 rounded-md shadow-md w-80   mt-4">
    <div className="border border-white p-2 mb-2 text-lg text-white bg-blue-500/75 rounded">{input || '0'}</div>
    <div className="border border-gray-300 p-2 mb-4 text-lg text-gray-800 bg-white rounded">{result || '0'}</div>
    <div className="grid grid-cols-4 gap-2">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', 'C', '/'].map((buttonValue) => (
            <button 
                key={buttonValue}
                onClick={() => buttonValue === 'C' ? clearInput() : handleButtonClick(buttonValue)}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
            >
                {buttonValue}
            </button>
        ))}
        <button 
            onClick={calculateResult}
            className="bg-green-800 text-white p-2 rounded hover:bg-green-700 transition duration-300 col-span-4"
        >
            =
        </button>
    </div>
</div>

    );
}
