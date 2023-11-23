// useProductSorter.js
import { useState } from 'react';

export function useProductSorter(initialProducts) {
  const [sortedProducts, setSortedProducts] = useState(initialProducts);

  const sortProducts = (order) => {
    const sorted = [...initialProducts].sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return order === 'lowToHigh' ? priceA - priceB : priceB - priceA;
    });
    setSortedProducts(sorted);
  };

  return [sortedProducts, sortProducts];
}
