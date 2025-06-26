import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

export const Addtodo = () => {
    const [input, setInput] = useState()
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
 <form onSubmit={addTodoHandler} className='addtodo d-flex justify-content-between'>
    <input type="text" placeholder ="Enter a todo" value={input} onChange={(e)=> setInput(e.target.value)} className="h-75 p-2 border-0 rounded-3 me-2 w-100 h6 "/>
<button type='submit' className=" text-white submit h-75 px-3 py-2 border-0 rounded-3 h6 mb-0">Add</button>
 </form>
  )
}
export default Addtodo