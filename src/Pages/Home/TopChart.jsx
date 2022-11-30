import img from "../../assets/mi.jpg";
import { Box, Image, Text, Flex, Center, Icon } from "@chakra-ui/react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/all";

const TopChart = ({ topSong }) => {
  const { images, title, subtitle } = topSong;

  return (
    <Box
      px={{ base: 10, lg: 2 }}
      py={{ base: 2, lg: 1.5 }}
      w={{ base: "100%", lg: "90%" }}
      mx="auto"
      // px={{ base: "3rem", lg: "0px" }}
    >
      <Flex gap={5} justify="space-between">
        {/* <Center> */}
        <Image
          src={images?.coverart}
          alt="Image"
          w="6rem"
          h="4.5rem"
          objectFit="cover"
        />
        <Center>
          <Text>{title.slice(0, 30)}</Text>
        </Center>
        <Center>
          <Icon as={BsFillPlayCircleFill} fontSize={40} />
        </Center>
        {/* </Center> */}
      </Flex>
    </Box>
  );
};

export default TopChart;
