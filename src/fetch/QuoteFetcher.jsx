import React, { useState, useEffect } from 'react';

export default function QuotesDisplay() {
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await fetch('https://zenquotes.io/api/quotes/');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setQuotes(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchQuotes();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Quotes</h1>
            {quotes.map((quote, index) => (
                <div key={index}>
                    <p>"{quote.q}" - {quote.a}</p>
                </div>
            ))}
        </div>
    );
}
