import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.jsx'
import Nav from './components/nav.jsx'
import Movie from './components/movie.jsx'

function App() {

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
