import React, { useEffect, useState } from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1600, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box
      name="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt={"50px"}
      p={"20px"}
    >
      <Typography variant="h3" mb={"46px"}>
        Showing Results
      </Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        sx={{
          gap: { lg: "110px", sx: "50px" },
        }}
      >
        {currentExercises.length == 0 ? (
          <Typography variant="h6">Not Available Yet</Typography>
        ) : (
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))
        )}
      </Stack>
      <Stack mt="100px" alignItems={"center"}>
        {exercises.length > 6 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
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
