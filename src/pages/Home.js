import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setexercises] = useState([]); // specific exercise that user has typed in input
  const [bodyPart, setbodyPart] = useState("all"); // the specific body part that user has selected from horizontal carousel

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setexercises={setexercises}
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
      />
      <Exercises
        setexercises={setexercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
