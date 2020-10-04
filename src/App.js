import React, { useState } from 'react'
import './App.css'

const App = () => {
  let [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    toggled === false ? setToggled(true) : setToggled(false)
  }

  return (
    <div className="dark-mode-toggle container">
      <div className={!toggled ? 'button w-100 h-100' : 'button w-100 h-100 toggled__bg'} onClick={handleToggle}>
        <div className={!toggled ? 'button-head h-100' : 'button-head h-100 toggled'}></div>
      </div>
    </div>
  )
}

export default App
