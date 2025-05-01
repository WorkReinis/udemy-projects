import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slots from './components/Slots'

function App() {

  return (
    
      <div>
        <Slots val1="One" val2="One" val3="One" />
        <Slots val1="Two" val2="Two" val3="One" />
      </div>
    
  )
}

export default App
