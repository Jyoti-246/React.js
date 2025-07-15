import React from "react";
import Product from "./Product";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { courses } from "./course";
import { Box, Typography, Stack, Button } from "@mui/material";

const Course_Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const course = courses.filter((data) => data.course_name == id)[0];

  const handleBackClick = () => {
    navigate("/courses");
  };
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "gray",
          display: "flex", // Parent Box with flexbox
          justifyContent: "center", // Centers child horizontally
          alignItems: "center", // Centers child vertically
          height: "100vh", // Full viewport height for centering
        }}
      >
        <Box
          sx={{
            border: "2px solid black",
            padding: "50px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center", // Centers content horizontally
            alignItems: "center", // Centers content vertically
            borderRadius: "10px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: "50px" }}>Course</Typography>
            <Stack direction="row" gap={1}>
              <Typography fontWeight="bold">course id = </Typography>
              <Typography>{course.id}</Typography>
            </Stack>
            <Stack direction="row" gap={1}>
              <Typography fontWeight="bold">course name = </Typography>
              <Typography>{course.course_name}</Typography>
            </Stack>

            {location.pathname != "/courses/Python_Full_Stack" && (
              <>
                <Stack direction="row" gap={1}>
                  <Typography fontWeight="bold">course price = </Typography>
                  <Typography>{course.price}</Typography>
                </Stack>
                <Stack direction="row" gap={1}>
                  <Typography fontWeight="bold">course duration = </Typography>
                  <Typography>{course.duration}</Typography>
                </Stack>
              </>
            )}
            <Typography>
              <Button variant="contained" onClick={handleBackClick}>
                Back to All courses
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Course_Details;
