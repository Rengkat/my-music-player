import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import TableData from "../../Component/TableData";

import { BsFillPlayCircleFill } from "react-icons/all";
const arr = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

const AlbumDetail = () => {
  return (
    <Box bg="#121212" color="white">
      <Box>
        <Hero
          name="Name of Album"
          temTyle="flex"
          nums="12 tracks"
          subTitle="Album"
        />
      </Box>
      <Box>
        <TableData date="DATE RELEASED" data={arr} display="none" />
      </Box>
    </Box>
  );
};

export default AlbumDetail;
