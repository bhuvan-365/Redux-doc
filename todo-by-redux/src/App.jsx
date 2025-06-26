import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
    <div className="container  flex-row justify-content-center align-items-center w-75 h-75 border-black border-1  rounded-3 shadow-lg p-4 pt-5">
      <h1 className="text-center mb-4 ">Todo With Redux</h1>

      <Addtodo />
      <Todos />
      </div></div>
    </>
  )
}

export default App
