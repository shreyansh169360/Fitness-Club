import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Carousel from "react-elastic-carousel";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader/>
  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#6499E9", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise Videos
      </Typography>
      <Carousel
        itemsToShow={3}
        itemsToScroll={1}
        disableArrowsOnEnd={true}
        enableMouseSwipe={false}
        enableSwipe={true}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <Box m="0 40px">
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              style={{ justifyContent: "center", margin: "0 40px" }}
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                style={{ borderRadius: "5%" }}
              />
              <Box>
                <Typography
                  variant="h6"
                  color="#000"
                >
                  {item.video.title}
                </Typography>
                <Typography
                  variant="h7"
                  color="#000"
                >
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ExerciseVideos;
