import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setexercises, bodyPart, setbodyPart }) => {
  const [search, setsearch] = useState("");
  const [bodyParts, setbodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setbodyParts(["all", ...bodyPartsData]);
      // console.log(bodyPartsData);
    };

    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
        exerciseOptions
      );
      // console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setsearch("");
      setexercises(searchedExercises);

      console.log(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises you <br /> should know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1000px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "20px",
            "& fieldset": { border: "none" },
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value.toLowerCase());
          }}
          placeholder="search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            bgcolor: "#6499E9",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "0px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
            borderRadius: "20px",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setbodyPart={setbodyPart}
          isBodyPart={true}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
