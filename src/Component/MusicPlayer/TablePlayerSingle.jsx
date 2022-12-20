import React from "react";
import { Box, Icon, Image, Center, Text, Flex } from "@chakra-ui/react";
import { BiTime, BsPlayFill, BsFillPlayCircleFill } from "react-icons/all";

const TablePlayerSingle = ({ size }) => {
  return (
    <Box>
      <Icon className="play" as={BsPlayFill} fontSize={25} />
      {/* <Icon
        as={BsFillPlayCircleFill}
        cursor="pointer"
        fontSize={size}
        color="#1db954"
      /> */}
    </Box>
  );
};

export default TablePlayerSingle;
