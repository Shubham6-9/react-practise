import { useState } from 'react'
import Counter from './components/counter.jsx'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)
  const mode = () => {
    setDark(!dark)
    if (!dark) {
      document.querySelectorAll('*').forEach((e) => {
        e.style.backgroundColor = 'black';
        e.style.color = 'white';
      })
    } else {
      document.querySelectorAll('*').forEach((e) => {
        e.style.backgroundColor = 'white';
        e.style.color = 'black';
      })
    }
  }

  return (
    <div>
      <button onClick={mode}>{dark ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}</button>
      <div id="main">
        <Counter target={10000} des={'Customers'} icon={<i className="fa-solid fa-user"></i>} />
        <Counter target={50000} des={'Users'} icon={<i className="fa-regular fa-user"></i>} />
      </div>
    </div>
  )
}

export default App
