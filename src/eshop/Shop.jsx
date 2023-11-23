// Shop.jsx
import React from 'react';
import Card from './Card';
import SortControls from './SortControls';
import products from './data';
import { useProductSorter } from './useProductSorter'; // Import the custom hook

export default function Shop() {
  const [sortedProducts, sortProducts] = useProductSorter(products);

  return (
    <>
      <SortControls onSortChange={sortProducts} />
      <div className="flex flex-wrap justify-center">
        {sortedProducts.map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </div>
    </>
  );
}
