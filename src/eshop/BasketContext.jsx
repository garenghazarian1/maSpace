// BasketContext.js

import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
        setBasket(currentBasket => [...currentBasket, product]);
    };

    const removeFromBasket = (productId) => {
        setBasket(currentBasket => currentBasket.filter(item => item.id !== productId));
    };

    const clearBasket = () => {
        setBasket([]);
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
            {children}
        </BasketContext.Provider>
    );
};
