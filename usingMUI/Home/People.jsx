import React, { useContext } from 'react'
import MoneyContext from '../src/Context/MoneyContext'

const People = ({money}) => {
  const data = useContext(MoneyContext);
  return (
    <div>
      <h1>This is People Component = {data.money}</h1>
      <h3>counter = {data.counter}</h3>
      <button onClick={() => data.setCounter(data.counter+1)}> Increase</button>
    </div>
  )
}

export default People
