// Basket.js

import React from 'react';
import { useBasket } from './BasketContext';

const Basket = () => {
    const { basket, removeFromBasket } = useBasket();

    return (
        <div>
            <h2>Your Basket</h2>
            {basket.map(item => (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <button onClick={() => removeFromBasket(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Basket;
