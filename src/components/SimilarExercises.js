import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
        // if(!(targetMuscleExercises.length > 0)) return <Loader/>
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h4" mb={5}>
        Exercises that target similar Muscles
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : <Loader/>}
      </Stack>
      <br/>
      <br/>
      <Typography variant="h4" mb={5}>
        Exercises that target similar Equipments
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : <Loader/>}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
