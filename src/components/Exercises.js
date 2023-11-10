import React from "react";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import Loader from "./Loader";

const Exercises = ({ setexercises, bodyPart, exercises }) => {
  console.log(exercises);

  const [currentPage, setcurrentPage] = useState(1);
  const paginate = (e, value) => {
    setcurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let data = [];
      if (bodyPart === "all") {
        data = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
          exerciseOptions
        );
      } else {
        data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`,
          exerciseOptions
        );
      }
      setexercises(data);
    };
    fetchExerciseData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * 8;
  const indexOfFirstExercise = indexOfLastExercise - 8;
  const currentExercisesArray = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  if(exercises?.length <= 0) return <Loader/>
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercisesArray?.map((exercise, index) => {
          return <ExerciseCard key={index} exercise={exercise} />;
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises?.length > 8 && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / 9.0)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
