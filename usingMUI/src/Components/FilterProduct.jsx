import React from 'react'

const FilterProduct = () => {
    let products = [
        {id:1, title:"iphone", category:"mobiles", price:150000},
        {id:2, title:"Hp probook", category:"laptops", price:150000},
        {id:3, title:"mi tab", category:"tablets", price:150000},
        {id:4, title:"camera", category:"mobiles", price:150000},
    ];

    const filterData = products.filter((data)=>data.category==="mobiles");
    console.log(filterData);
  return (
    <div>
      {
        filterData.map((data)=> <div key={data.id}>
            <h1>{data.title}</h1>
            <h2>{data.price}</h2>
        </div> )
      }
    </div>
  )
}

export default FilterProduct
