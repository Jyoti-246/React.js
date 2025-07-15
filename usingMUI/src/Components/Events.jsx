import React from 'react'

const Events = () => {
    const handleClick = () => {
        alert('you click the button');
    };

    const addition = (a) => {
        alert(a+10)
    }
  return (
    <div>
      <h1>Events</h1>
      <button onMouseOver={handleClick}>Click the button</button>
      <button onClick={()=>addition(800)}>button2</button>
    </div>
  )
}

export default Events
