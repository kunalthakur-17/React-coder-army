import React, { useEffect, useState } from 'react'

function UseEffect_Hook() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
setTimeout(()=>{
    setCount(count => count+1)
},2000)
    })
  return (
    <div>
        <h2>UseEffect_Hook</h2>
        <h3>I have render {count}</h3>

    </div>
  )
}

export default UseEffect_Hook