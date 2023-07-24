import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Box sx={{ transform: {lg: 'scale(1)', xs : 'scale(0.9)'} }}>
      <Link className="exercise-card" to={`/Gym-App/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction={"row"} pt='25px'>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#BB86FC",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#BB86FC",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          ml="10px"
          color={"#fff"}
          fontWeight={"bold"}
          mt={"11px"}
          p={"10px"}
          textTransform={"capitalize"}
          fontSize={"22px"}
        >
          {exercise.name}
        </Typography>
      </Link>
    </Box>
  );
};

export default ExerciseCard;
