import { useState } from 'react'
import './App.css'
import AddTodo from './Componets/AddTodo'
import Todos from './Componets/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Reduce Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
