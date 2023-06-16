import React from "react";
import { Box, Typography} from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from './ExerciseCard';

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts, isequipment }) =>{
  return (
    <div
      style={{
        position: "relative",
        alignItems: "center",
      }}
    >
      <img
        src={LeftArrowIcon}
        alt="left-arrow"
        className="left-arrow"
        onClick={() => {
          const slider = document.getElementById(isequipment ? "slider2" : "slider");
          isBodyParts ? slider.scrollLeft = slider.scrollLeft - 230 : slider.scrollLeft = slider.scrollLeft - 330;
        }}
        style={{ position: "absolute", left: '0px', top: "50%" }}
      />
      <div
        id={isequipment ? "slider2" : "slider"}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "scroll",
          overflowY: "hidden",
          marginLeft: "40px",
          marginRight: "40px",
          scrollBehavior: "smooth",
          scrollSnapAlign: "center",
          height: (isBodyParts ? "280px" : "630px"),
          alignItems: "center",
        }}
      >
        {data.map((item, index) => (
          <Box key={index} m = '0 15px'>
            {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            : <ExerciseCard exercise={item} />}
          </Box>
        ))}
      </div>
      <img
        src={RightArrowIcon}
        alt="right-arrow"
        className="right-arrow"
        onClick={() => {
          const slider = document.getElementById(isequipment ? "slider2" : "slider");
          isBodyParts ? slider.scrollLeft = slider.scrollLeft + 230 : slider.scrollLeft = slider.scrollLeft + 330;
        }}
        style={{ position: "absolute", right: "0px", top: "50%" }}
      />
    </div>
  );
};

export default HorizontalScrollbar;
