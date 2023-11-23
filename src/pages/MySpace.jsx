import React from 'react'
import ProductSidebar from '../eshop/ProductSidebar'
import TodoListDisplayFunctionality from '../toDoList/TodoListDisplayFunctionality'
import QuotesDisplay from '../fetchLocal/QuotesDisplay'
import Today from '../toDoList/Today'
import Footer from './Footer'
import ColorBox from '../components/ColorBox'

export default function MySpace() {
  return (
    <>
    <div className="flex flex-col justify-between items-center w-full gap-4">
      <div className='flex justify-center align-middle ' >
      <h1 className=" text-white mt-1 mb-1 ml-4 mr-4 bg-gradient-to-r from-indigo-500/25 to-black/25 p-2 rounded-lg shadow-lg w-374">My Space </h1>
        <p><Today/></p>
      </div>
        
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <QuotesDisplay />
            <TodoListDisplayFunctionality />
            <ProductSidebar />
            
        </div>
       
    </div>
   
</>

  )
}
