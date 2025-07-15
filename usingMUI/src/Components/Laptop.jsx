import React from "react";
import './laptop.css'

const Laptop = ({ brand, model, price }) => {
    // const obj = {
    //     backgroundColor: "blue", 
    //     padding: "10px", 
    //     margin: "20px",
    //     border: "20px"
    // }
  return (
    <div 
    // style={{ backgroundColor: "gray", padding: "10px", margin: "20px" }}
    //  style={obj}
    className = "div"
    >
      <h3>Brand Name = {brand}</h3>
      <h3>Model = {model}</h3>
      <h3>Price = {price}</h3>
    </div>
  );
};

export default Laptop;
