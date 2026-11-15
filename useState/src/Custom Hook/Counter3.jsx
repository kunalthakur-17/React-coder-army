import React from 'react'
import UseCounter from './UseCounter'

export const Counter3 = () => {
    const {count, handleAdd,handleSubt} = UseCounter(10000)
      return (
    <div>
        <h1>Counter3</h1>
        <h3>{count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubt}>Subtract</button>
    </div>
  )
}
