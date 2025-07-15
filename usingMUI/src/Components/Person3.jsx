import React from 'react'

const Person3 = ({name, age, penCard, price}) => {
  return (
    <div>
      {(age>18)?( <h3>you can drive</h3> ): (<h2>you can not drive</h2> )}
      <h2>{penCard && <p>you can open Account</p>} </h2>
      <h2>{price==120 && <h2>you can buy</h2> }</h2>
    </div>
  )
}

export default Person3
