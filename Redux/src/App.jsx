import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment,multiply,reset } from './counter/counterSlice'



function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Counter App</h1>

      <Navbar />
      <hr />

      <div>
        Current count :{count}
      </div>
      <div className="bu">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={()=> dispatch(multiply())}>*</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>

    </>
  )
}

export default App
