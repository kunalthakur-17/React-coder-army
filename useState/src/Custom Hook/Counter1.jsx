import React from 'react'
import UseCounter from './UseCounter'

export const Counter1 = () => {
    const {count, handleAdd,handleSubt} = UseCounter()
      return (
    <div>
        <h1>Counter1</h1>
        <h3>{count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubt}>Subtract</button>
    </div>
  )
}
