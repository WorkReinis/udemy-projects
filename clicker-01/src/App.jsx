import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicker from './components/Clicker'


function App() {
 

  return (
    <div>
      <Clicker message='Hi!!!' buttonText='Click Me' />
      <Clicker message='Please stop clicking me!' buttonText='Do not click' />
    </div>
  )
}

export default App
