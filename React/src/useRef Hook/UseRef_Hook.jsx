import { useEffect, useRef, useState } from "react"

function UseRef_Hook() {
    const [count, setCount] = useState(0)
    const value = useRef(0)

    useEffect(() => {
        value.current += 1
        console.log("Result of value:", value.current)
    })

    return (
        <div>
            <h3>useRef_Hook</h3>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}

export default UseRef_Hook