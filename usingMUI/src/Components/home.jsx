import React from 'react'
import Person from './Person'
import Test from './Components/Test'
import Person3 from './Components/Person3'
import Laptop from './Components/laptop'
import Events from './Components/Events'
import Counter from './Components/counter'
import map from './Components/map'
import FilterProduct from './Components/FilterProduct'

const home = () => {
  return (
    <>
      {/* <Person/>
      <Test title = "Galaxy" Brand = "samsung"/>
      <Test title = "iphone" Brand = "Apple"/>
      <Person3 name="jyoti" age = {30} penCard={false} price={100}/> */}

      <div>
      {/* <Laptop brand="hp" model="probook" price={15000}/>
      <Laptop brand="hp" model="probook" price={15000}/>
      <Laptop brand="hp" model="probook" price={15000}/> */}
      </div>
      <div>
        {/* <Events/> */}
      </div>
      <div>
        {/* <Counter/> */}
      </div>
      <div>
          {/* <map/> */}
      </div>
      <div>
        <FilterProduct/>
      </div>
    </>
  )
}

export default home
