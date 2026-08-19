import React from 'react'
import { useState } from 'react'

//state : state is a data a component owns and can change over time.and its used to store the data that can change over time in a component. when the state changes, the component re-renders to reflect the new state.
const Counter = () => {
 const [count,setCount]  = useState(0)
 const [showModal, setShowModal]  = useState(false)

 console.log(showModal,'show modal value ');
  
  const increaseCount   =  () =>{
    setCount((prev) => prev + 1)
  }
  //react hooks are special functions that let you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.

  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
    <div className='p-6 text-center font-bold text-orange-500 text-xl'>Count {count}</div>
    <button onClick={increaseCount} className='bg-blue-600 px-2 py-1 text-gray-200 rounded-sm cursor-pointer '>Plus</button>
     <button onClick={()=>setShowModal(prev =>!prev )} className='bg-red-600 px-2 py-1 text-gray-200 rounded-sm cursor-pointer '>Show me </button>
    
     {
      showModal && (
           <div className={`bg-teal-600  `}>
              <p>This is a modal, i only appear when you click show me button</p>
            </div>
      )
     }
    </div>
  )
}

export default Counter