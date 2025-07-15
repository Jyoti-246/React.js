import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redus/counterSlice/counterSlice'

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  )
}

export default App
