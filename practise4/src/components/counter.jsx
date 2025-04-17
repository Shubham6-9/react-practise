import React, { useEffect, useState } from 'react'

function Counter({ target, des, icon }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            if (count < 1000) {
                setCount(count + 50);
                console.log(count);
            } else {
                clearInterval(setInterval)
            }
        }, 100)
    }, [])

    // let speed = +(target) / 100;
    // useEffect(() => {
    //     setInterval(() => {
    //         setCount(count => {
    //             if (count < target) {
    //                 return count + speed;
    //             } else {
    //                 clearInterval(setInterval)
    //                 return count;
    //             }
    //         })
    //     }, 10)
    // }, [])

    return (
        <div id="counter">
            <p>{icon}</p>
            <h3>{count} +</h3>
            <p>{des}</p>
        </div>
    );
}

export default Counter