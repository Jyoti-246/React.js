import React from "react";
import { Link } from "react-router-dom";
import { courses } from "./course";
import { Box, Typography } from "@mui/material";

const Product = () => {
  return (
    <>
      <div>
        <Box
          sx={{
            backgroundColor: "blueviolet",
            height: "100vh",
          }}
        >
          <ul>
            {courses.map((data) => (
              <div key={data.id}>
                <li>
                  <Link
                    to={`/courses/${data.course_name}`}
                    style={{ color: "black" }}
                  >
                    {data.course_name}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </Box>
      </div>
    </>
  );
};

export default Product;
