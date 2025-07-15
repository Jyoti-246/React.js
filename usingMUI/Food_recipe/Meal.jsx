import React, { useEffect, useState } from "react";
import "./meal.css"

const Meal = () => {
  const navButtons = [
    { id: "Indian", title: "Indian", color: "yellow" },
    { id: "Canadian", title: "Canadian", color: "red" },
    { id: "American", title: "American", color: "blue" },
    { id: "Thai", title: "Thai", color: "gray" },
    { id: "British", title: "British", color: "green" },
    { id: "Russian", title: "Russian", color: "purple" },
  ];
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("Indian");
  const [color, setColor] = useState("black");
  const [inputData, setInputData] = useState('');

  const handleCategoryClick = (id) => {
    setArea(id);
  };

  useEffect(() => {
    fetchDataFromAPI(area);
  }, [area]);

  const fetchDataFromAPI = async (area) => {
    console.log(
      "Loki90",
      `url - https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );

    const data = await api.json();
    console.log("Loki90", "data.meals:" + data);

    setMealData(data.meals);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );

    const data = await api.json();
    // console.log("meal data= ", data.meals)

    setMealData(data.meals);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "30px",
          justifyContent: "center",
          fontSize: "24px",
          gap: "1rem",
        }}
      >
        {navButtons.map((data) => ( 
          <div
            key={data.id}
            style={{ maxWidth: "250px" }}
            onMouseEnter={() => setColor(data.color)}
            onMouseLeave={() => setColor("black")}
          >
            <button
              style={{
                backgroundColor: color==data.color?color:"black",
                color: color==data.color?"black":data.color,
                border: `2px solid ${data.color}`,
                borderRadius: "8px",
                padding: "6px 14px",
              }}
              onClick={() => handleCategoryClick(data.id)}
            >
              {data.title}
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={submitHandler} className="mx-auto text-center my-3">
        <input onChange={(e) => setInputData(e.target.value)} type="text" />
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        {mealData.map((data) => (
          <div key={data.idMeal} style={{ textAlign: "center" }}>
            <div>
              <img
                src={data.strMealThumb}
                alt=""
                style={{
                  width: "220px",
                  borderRadius: "10px",
                  border: "2px solid blue",
                }}
              />
            </div>
            <h5>{data.strMeal}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;
