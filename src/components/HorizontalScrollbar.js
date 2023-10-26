import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import { useContext } from "react";
import { Typography } from "@mui/material";
import Carousel from "react-elastic-carousel";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const HorizontalScrollbar = ({ data, bodyPart, setbodyPart ,isBodyPart }) => {
  if(data.length <= 0) return <Loader/>
  return (
    <Carousel
      itemsToShow={isBodyPart ? 4 : 2}
      itemsToScroll={2}
      disableArrowsOnEnd={true}
      enableMouseSwipe={false}
      enableSwipe={true}
    >
      {data.map((item) => {
        // console.log("hi " ,item)
        return (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {isBodyPart ? <BodyPart
              item={item}
              bodyPart={bodyPart}
              setbodyPart={setbodyPart}
            /> : <ExerciseCard exercise={item}/>}
          </Box>
        );
      })}
    </Carousel>
  );
};

export default HorizontalScrollbar;
