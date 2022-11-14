import img from "../../assets/mi.jpg";
import { Box, Image, Text, Flex, Center, Icon } from "@chakra-ui/react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/all";

const TopChart = () => {
  return (
    <Box px={2} py={1} w="90%" mx="auto">
      <Flex gap={10}>
        {/* <Center> */}
        <Image src={img} alt="Image" w="6rem" h="4.5rem" objectFit="cover" />
        <Center>
          <Text>Lorem ipsum dolor sit amet.</Text>
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
