import React, { useState, useSyncExternalStore } from 'react'

const Counter = () => {
    let [counter, setCounter] = useState(0);
  
    const [arr, setArr] = useState([10,20,30]);

    const click = () => {
        setArr([20,40,60]);
        console.log(arr);
    }
    

    const increaseby1 = () => {
        setCounter(counter+1);
        console.log("counter =", counter);
    };
    const decreaseby1 = () => {
        setCounter(counter-1);
        console.log("counter =", counter);
    };
  return (
    <div>
        <h1>{arr}</h1>
        <button onClick={click}>button</button>
      <h1>{counter}</h1>
      <button onClick={increaseby1}>Increase</button>
      <button onClick={decreaseby1}>Decrease</button>
    </div>
  )
}

export default Counter
