import React from 'react'

const Person = () => {
  const name = "jyoti";
  const age = 20;

  const person = {
      name : 'jyoti',
      age : 20,
      gmail : 'jyoti@gmail.com',
      pincode : 23456
  }

  const product = {
    title:'iphone',
    model:'iphone-15',
    price:34543
  }
  return (
    //to return multiple values;
    <>
    <div>
      <h1>Name = {person.name}</h1>
      <h2>Age = {person.age}</h2>
    </div>
    <div>
      <h3>Title = {product.title}</h3>
      <h3>model = {product.model}</h3>
    </div>
    </>
  )
}

export default Person
