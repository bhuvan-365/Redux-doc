import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Navbar = () => {
      const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <h3>Navbar</h3>
      <p>Current count from navbar: {count}</p>
    </div>
  )
}

export default Navbar
