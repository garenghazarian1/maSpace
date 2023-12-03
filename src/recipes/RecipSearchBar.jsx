import React from 'react'

export default function RecipSearchBar({onChange, ingredients, handlerSelectIngredient,} ) {
  return (
    <div className="flex flex-col items-center relative">
      <input
        className="text-gray-600 w-3/4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        type="text"
        placeholder="Search for recipes"
        onChange={onChange}
      />

      {ingredients.length > 0 && (
        <div className="absolute top-full w-3/4 bg-white rounded-md shadow p-4 z-10">
          {ingredients.map((ingredient, index) => (
            <p onClick={handlerSelectIngredient} key={index} className=" hover:underline cursor-pointer text-gray-700 text-sm border-b border-gray-200 last:border-b-0 p-2">
              {ingredient}
            </p>
          ))}
        </div>
      )}
    </div>
);



}
