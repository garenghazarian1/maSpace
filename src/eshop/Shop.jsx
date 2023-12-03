

import Card from './Card';
import SortControls from './SortControls';
import products from './data';
import { useProductSorter } from './useProductSorter'; 

export default function Shop() {
  const [sortedProducts, sortProducts] = useProductSorter(products);
  
  return (
    <>
    <SortControls onSortChange={sortProducts} />
    <div className="flex flex-wrap justify-center">
        {sortedProducts.map((item) => (
            <div key={item.id}>
                <Card item={item} />
                
            </div>
        ))}
    </div>
</>
  );
}
