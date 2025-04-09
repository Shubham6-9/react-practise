import React, { useState, useEffect } from 'react'

export default function Dog() {
    const [toggle, setToggle] = useState(0)
    const [url, setUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await res.json()
            setUrl(data.message)
        }
        fetchData();
    }, [toggle])

    return (
        <div id="main">
            <img src={url} alt="image of dog" /> <br/>
            <button onClick={() => toggle == 0 ? setToggle(1) : setToggle(0)} >Change</button>
        </div>
    )
}