import React, { useState } from 'react'

export default function UseCounter(value=0) {
const [count, setCount] = useState(value)
function handleAdd(){
    setCount(count+1)
}
function handleSubt(){
    setCount(count-1)
}
  return (
    {count, handleAdd,handleSubt}
  )
}

