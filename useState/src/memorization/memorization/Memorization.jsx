import React, { useState } from 'react'
import React_Memo from '../React.memo/React_Memo'

function Memorization() {
  console.log("Memorization page")
  const [count,setCount]= useState(10000)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+10000)} >Add</button>
    <React_Memo count = {count} />
    </div>
  )
}

export default Memorization