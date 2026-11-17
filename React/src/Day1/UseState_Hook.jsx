import React, { useState } from 'react'

function UseState_Hook() {
    const [counter,setCounter] = useState(0)
  return (
    <div>
        <h3>Use State Hook</h3>
        <h2>{counter}</h2>
        <button onClick={()=>{setCounter(counter+1)}}>Add counter</button>
    </div>
  )
}

export default UseState_Hook