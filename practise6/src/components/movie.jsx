import React, { useState } from 'react'

function Movie() {
    const [err, setErr] = useState("")
    const [result, setResult] = useState([])

    const search = (value) => {
        if (value.length < 3) {
            setErr("enter atleast 3 letter")
            setResult([])
        } else {
            setErr("")
            async function getting() {
                let res = await fetch(`http://www.omdbapi.com/?s=${value}&apikey=b050125e`);
                res = await res.json()
                console.log(res);
                if (res.search) {
                    setResult(res.Search)
                    return;
                } else {
                    setResult([])
                }
            }
            getting()
        }
    }

    return (
        <div>
            <input type="text" className='border border-red-500' onChange={e => search(e.target.value)} />
            <p className="text-red-600 text-[14px]">{err}</p>
            <div>
                {
                    result.map((e, i) => {
                        return <div key={i}>
                            <p>{e}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Movie