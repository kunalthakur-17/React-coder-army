
import React, { useRef, useState } from 'react';

function UseRefHook() {
    const [time, setTime] = useState(0);
    const intervalId = useRef(null);

    function handleStart() {
        if (intervalId.current !== null) return;

        intervalId.current = setInterval(() => {
            setTime(time => time + 1);  
        }, 1000);
    }

    function handleStop() {
        clearInterval(intervalId.current);
        intervalId.current = null;
    }

    function handleReset() {
        clearInterval(intervalId.current);
        intervalId.current = null;
        setTime(0);
    }

    return (
        <div>
            <h3>Stop Watch Timer: {time}</h3>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default UseRefHook;
