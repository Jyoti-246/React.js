import React, { useState } from "react";
import { movies } from "./data";

const Movies = () => {
  const navButtons = [
    { id: "All", title: "All", color: "yellow" },
    { id: "Action", title: "Action", color: "red" },
    { id: "Thriller", title: "Thriller", color: "blue" },
    { id: "Animation", title: "Animation", color: "gray" },
    { id: "Horror", title: "Horror", color: "green" },
    { id: "Drama", title: "Drama", color: "purple" },
    { id: "Sci-Fi", title: "Sci - Fi", color: "yellow" },
  ];

  const [movieList, setMovieList] = useState(movies);

  const handleCategoryClick = (id) => {
    if (id == "All") {
      setMovieList(movies);
      return;
    }

    const filterData = movies.filter((data) => data.category === id);
    setMovieList(filterData);
  };

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
          <div key={data.id} style={{ maxWidth: "250px" }}>
            <button
              style={{
                backgroundColor: "black",
                color: data.color,
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        //   gap: "2rem",
          flexWrap: "wrap",
          width: "1300px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "280px", textAlign:"center"}}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                alt="image"
                style={{
                  width: "200px",
                  height:"280px",
                  borderRadius: "10px",
                  border: "1px solid yellowgreen",
                }}
              />
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
