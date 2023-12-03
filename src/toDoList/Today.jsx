import React from 'react'

export default function Today() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString(undefined, options);
  return (
    <div className='  mt-1 mb-1 ml-4 mr-4 bg-gradient-to-r from-indigo-500/25 to-black/25 p-2 rounded-lg shadow-lg w-374 '>
         <div className="text-lg font-semibold text-white ml-4">Today is: {dateString}</div>

    </div>
  )
}
