import React from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/all";
import { Box, Image, Text } from "@chakra-ui/react";

const PlayPause = ({
  sty,
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  // console.log(isPlaying);
  return (
    <>
      <Box className={sty}>
        {isPlaying ? (
          <BsFillPauseCircleFill
            onClick={handlePause}
            fontSize={60}
            color="#1db954"
          />
        ) : (
          <BsFillPlayCircleFill
            onClick={handlePlay}
            fontSize={60}
            color="#1db954"
          />
        )}
      </Box>
    </>
  );
};

export default PlayPause;

{
  /* {isPlaying && activeSong?.title === song.title ? (
      <FaPauseCircle size={35} onClick={handlePause} />
      ) : (
      <FaPlayCircle size={35} onClick={handlePlay} />} */
}
