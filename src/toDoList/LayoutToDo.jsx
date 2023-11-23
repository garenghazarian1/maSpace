

import React from 'react'
import TextAria from './TextAria';

export default function LayoutToDo({}) {
    const [layoutState, setLayoutState] = React.useState(true)

function handleRows() {
    setLayoutState(!layoutState);
}
  return (
<><div className='m-4'>
    <div className=" gap-2 bg-gradient-to-r from-indigo-500/50 to-blue-500/50 p-2 rounded-lg shadow-lg w-full ">
        <div className="flex items-center gap-4">
            <h2 className=" text-white text-xl md:text-2xl font-semibold mb-4 shadow-sm">
                Layout:
            </h2>
            <button 
                onClick={handleRows}
                className="mb-2 bg-white text-blue-600 py-2 px-6 rounded hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-200 transition duration-300">
                    {layoutState === true ? 'Cols' : 'Rows'}
                    
            </button>
            
        </div>
        <TextAria layout={layoutState}/>
    </div>
    </div>
</>

  )
}
