import React, { useState } from 'react'
import MoneyContext from './MoneyContext'

const MoneyState = (props) => {
    const money = 10000;
    const [counter, setCounter] = useState(0);
  return (
    <div>
      <MoneyContext.Provider value={{money, counter, setCounter}}>{props.children}</MoneyContext.Provider>
    </div>
  )
}

export default MoneyState
