import React from 'react'


const React_Memo = React.memo(({count})=>{
 console.log("React_Memo page")
    function SumOfNum(){
        let sum = 0
        for(let i =0; i<=count;i++){
            sum= sum+i
        }
        return sum

    }
    let total = SumOfNum()
  return (
    <div>
        <h3>React_Memo: This is ove math library: -   {total}</h3>
           

    </div>
  )
})



export default React_Memo