import React, { useState } from 'react'

function UseStatessss1() {
    const [count, setCount]= useState(0)
    const handleIncrement = ()=>{
        setCount(count+5)
    }
    const handleDecrement=()=>{
        setCount(count-5)
    }
    const handleReset =()=>{
        setCount(0)
    }

let message = null

if(count>0){
    message = "Positive Number"
}else if(count<0){
    message = "Negative Number"
}else{
    message = "Zero"
}

  return (
    <div>
        <h1>This is day 1 UseState</h1>
        <h1>{count} : {message}</h1>
        <button onClick={handleIncrement}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button>
         <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default UseStatessss1