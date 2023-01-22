import { useState } from 'react'
import './styles/global.css'
import './App.css'
import { Habit } from './components/Habit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Habit completed={3}/>
      <Habit completed={5}/>
      <Habit completed={10}/>
      <Habit completed={20}/>  
    </>
  )
}

export default App
