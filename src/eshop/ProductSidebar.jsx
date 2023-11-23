import React, { useState, useEffect } from 'react';
import products from './data'; // Import your products data
import { NavLink } from 'react-router-dom';

export default function ProductSidebar() {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 20000); // Change product every 20 seconds

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    const product = products[currentProductIndex];

    return (
        < >
        <NavLink to="/eshop">
            
            <div className=" bg-white/75 p-4 shadow-lg rounded-lg max-w-[300px]">
            <h1 className="m-2 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                to Shop
            </h1>

            <img src={product.imageUrl} alt={product.name}  className="w-full h-auto object-cover mb-4 rounded" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">   {product.name}</h3>
            <span className="text-blue-600 font-semibold">{product. price}</span>
            </div>
        </NavLink>
        </>
    );
}
