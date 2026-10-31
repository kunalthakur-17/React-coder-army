import React, { useState } from 'react'

function UseStatessss() {
    const [count, setCount]= useState(0)
    const handleIncrement = ()=>{
        setCount(count+100)
    }
    const handleDecrement=()=>{
        setCount(count-1)
    }
    const handleReset =()=>{
        setCount(0)
    }
  return (
    <div>
        <h1>This is day 1 UseState</h1>
        <h1>{count} </h1>
        <button onClick={handleIncrement}>Increment</button>
       { count>1&& <button onClick={handleDecrement}>Decrement</button>}
        {count>1 && <button onClick={handleReset}>Reset</button>}
    </div>
  )
}

export default UseStatessss