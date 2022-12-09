import React from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/all";
import { Box, Image, Text } from "@chakra-ui/react";

const PlayPause = ({ sty }) => {
  return (
    <Box className={sty}>
      <BsFillPlayCircleFill fontSize={60} color="#1db954" />
    </Box>
  );
};

export default PlayPause;
