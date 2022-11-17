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
          // icon={<BsBarChartLineFill />}
          subTitle="Album"
        />
      </Box>
      <Box>
        {/* <Flex align="center" gap={8} pb={3} ml="12rem">
          <Icon as={BsFillPlayCircleFill} fontSize="4rem" color="#1db954" />
          <Text border="2px solid white" fontSize={20} px={4} borderRadius={5}>
            Follow
          </Text>
        </Flex> */}

        <TableData date="DATE RELEASED" data={arr} display="none" />
      </Box>
    </Box>
  );
};

export default AlbumDetail;
