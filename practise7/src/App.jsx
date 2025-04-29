import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import View from './component/view.jsx'
import Add from './component/add.jsx'
import Del from './component/del.jsx'
import Nav from './component/nav.jsx'
import './App.css'

function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.querySelectorAll('*').forEach((e) => {
      e.style.backgroundColor = "black"
      e.style.color = "white"
    })
  }, [])

  const mode = () => {
    setDark(!dark)
    if (dark == false) {
      document.querySelectorAll('*').forEach((e) => {
        e.style.backgroundColor = "black"
        e.style.color = "white"
      })
    } else {
      document.querySelectorAll('*').forEach((e) => {
        e.style.backgroundColor = "white"
        e.style.color = "black"
      })
    }
  }

  return (
    <div>
      <Router>
        <div id="mainavbar">
          <Nav />
          <button onClick={() => mode()}>{dark ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}</button>
        </div>
        <Routes>
          <Route path="/" element={<View />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/del" element={<Del />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
