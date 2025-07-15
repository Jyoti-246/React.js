import React from 'react'

const map = () => {
    let products = [
        {id:1, title:"iphone-15", price:1500},
        {id:2, title:"iphone-16", price:1600},
        {id:3, title:"iphone-17", price:1700},
        {id:4, title:"iphone-18", price:1800},
    ]
  return (
    <div>
      {products.map((data)=><div key={data.id}>
        <h1>Title = {data.title}</h1>
      </div>)}
    </div>
  )
}

export default map
