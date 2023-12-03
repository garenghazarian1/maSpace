import React from 'react';

export default function RecipeMeal({ meals }) {
  return meals.length > 0 ? (
    <div className="flex flex-wrap justify-center gap-2 p-2">
      {meals.map((meal, index) => (
        <div key={index} className="flex flex-col max-w-xs border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow transition-shadow duration-300 m-2">
          <img 
            src={meal.strMealThumb} 
            alt={meal.strMeal}
            className="w-full  object-cover p-2 rounded-[20px] " // Adjust height here if needed
          />
          <div className="p-2 text-center">
            <h3 className="text-md font-semibold text-white">{meal.strMeal}</h3>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center text-gray-600 font-semibold text-lg p-4">No meals found</div>
  );
}
