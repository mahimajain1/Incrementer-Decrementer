import React, { useState } from 'react';

const Incre_decre = () => {
    let newCount = '';
    const [count, setCount] = useState(0);
    const incCount = () => {
        newCount = count + 1;
        setCount(newCount);
    }
    const decCount = () => {
        newCount = count - 1;
        if (newCount >= 0) {
            setCount(newCount);
        }
    }
    return (
        <>
            <div className="counter-wrapper">
                <span className="counter">{count}</span>
            </div>
            <div className="controls">
                <button onClick={incCount}>+</button>
                <button className="decrement" onClick={decCount}>-</button>
            </div>

        </>
    )
}
export default Incre_decre;
