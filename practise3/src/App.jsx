import React, { useEffect, useState } from 'react'
import Card from './components/card.jsx'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [dark, setDark] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://randomuser.me/api")
      let userdata = await res.json()
      console.log(userdata.results[0].location);

      setData(userdata.results)
    }
    fetchData();
  }, [])

  const changeMode = () => {
    setDark(!dark)
    if (dark == 0) {
      document.querySelectorAll('*').forEach((e) => {
        e.style.backgroundColor = 'black'
        e.style.color = 'white'
      })
      document.getElementById("card").style.boxShadow = `rgb(192, 192, 192) 0px 10px 20px, rgb(192, 192, 192) 0px 6px 6px`
    } else {
      document.querySelectorAll('*').forEach((e) => {
        e.style.backgroundColor = 'white'
        e.style.color = 'black'
      })
      document.getElementById("card").style.boxShadow = `rgb(0, 0, 0, 0.19) 0px 10px 20px, rgb(0, 0, 0, 0.23) 0px 6px 6px`
    }
  }

  return (
    <div>
      <h1>Student Detail</h1>
      <button onClick={() => changeMode()} id="mode">{dark == 0 ? <i className="fa-regular fa-moon"></i> : <i className="fa-solid fa-sun"></i>}</button>
      {
        data.map((e, index) => {
          return <Card key={index} name={e.name} mail={e.email} gender={e.gender} location={e.location} image={e.picture} age={e.dob.age} phone={e.phone} />
        })
      }
    </div>
  )
}

export default App
