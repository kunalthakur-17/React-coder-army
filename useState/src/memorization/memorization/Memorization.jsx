import React, { useCallback, useMemo, useState } from 'react'
import React_Memo from '../React.memo/React_Memo'

function Memorization() {
  console.log("Memorization page")
  const [count,setCount]= useState(10000)
  const [number, setNumber]= useState(10000)

// function totalNumber(number){
//   let countEven = 0
//   for(let i =0 ;i<=number;i++){
//     if(i%2===0){
//         countEven++
//     }
//   }
// return countEven 
// }
// let result = totalNumber(number)

// console.log(result,"sdfg.......")

const primeNumber = useMemo(()=>{
  console.log("dsjfjsj")
   let countEven = 0
  for(let i =0 ;i<=number;i++){
    if(i%2===0){
        countEven++
    }
  }
return countEven 
},[number])


const  hendleClick = useCallback(()=>{
  console.log(count)
},[count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+10000)} >Add</button>
      <h2>Increment Number by 100000: - {number}</h2>
      <button onClick={()=>setNumber(number+100000)} >Add</button>
    <React_Memo number = {number} />
<h3>Total evenNumber : {primeNumber}</h3>

<button onClick={hendleClick} >Click</button>

    </div>
  )
}

export default Memorization