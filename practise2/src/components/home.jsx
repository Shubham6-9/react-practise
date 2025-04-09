import React, { useState } from 'react'
import Data from './data.jsx'
import Card from './card.jsx'

export default function Home() {
    let original = Data()
    const [data, setData] = useState(original)

    function filterData(value) {
        let arr = []
        if (value === 'f') {
            arr = original.filter((e) => e.course === "Full Stack Development")
        }
        else if (value === 'g') {
            arr = original.filter((e) => e.course === "Game Development")
        }
        else if (value === 'r') {
            arr = original.filter((e) => e.course === "Rand")
        }
        else if (value === 'c') {
            arr = original
        }
        setData(arr)
    }

    const filterById = (id) => {
        let arr = []
        if(id==""){
            setData(original)
        }else{
            if(id < 1 || id > original.length){
                arr = [{
                    id: "Not Found"
                }]
            }else{
                arr = [original.find((e) => e.id == id)]
            }
            setData(arr)
        }
    }

    return (
        <div>
            <h1 className="text-[35px] text-center">Filter</h1>
            <div className='flex justify-center gap-[10px]'>
                <button className='border border-green-400 px-2 text-[18px] text-green-900 font-semibold' onClick={() => filterData('f')}>Full Stack</button>
                <button className='border border-green-400 px-2 text-[18px] text-green-900 font-semibold' onClick={() => filterData('g')}>Game Dev</button>
                <button className='border border-green-400 px-2 text-[18px] text-green-900 font-semibold' onClick={() => filterData('r')}>Rand</button>
                <button className='border border-green-400 px-2 text-[18px] text-green-900 font-semibold' onClick={() => filterData('c')}>Clear</button>
            </div>
            <div className="flex justify-center mt-5">
                <input type="text" className="h-[40px] w-[350px] mx-auto border rounded-lg p-4 text-[18px]" placeholder="Search by Id" onChange={(e) => filterById(e.target.value)} />
            </div>

            <div className="grid sm:grid-cols-3 lg:grid-cols-4">
                {
                    data.map((e, index) => {
                        return <Card key={index} i={e.id} n={e.name} c={e.course} e={e.emai} />
                    })
                }
            </div>
        </div>
    )
}