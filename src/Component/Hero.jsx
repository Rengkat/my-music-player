import { Image, Box, Heading, Icon, Flex, Text } from "@chakra-ui/react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  MdFavorite,
  BsShuffle,
  FaForward,
  FaBackward,
  FiRepeat,
  RiRepeatOneLine,
  GiMicrophone,
  BsFillVolumeUpFill,
  IoMdVolumeOff,
  MdOutlineFavoriteBorder,
} from "react-icons/all";
import Mi from "../assets/image-24-6-1920x1280.jpg";
import { MdVerified } from "react-icons/all";

const Hero = ({ name, nums, icon, subTitle, temTyle }) => {
  return (
    <Box ml={2}>
      <Box
        w="100%"
        h="40vh"
        backgroundPosition="center center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundImage={Mi}>
        <Box ml="10rem">
          <Flex flexDir="column" justify="end" height="40vh" color="white">
            <Flex alignItems="center" gap={2}>
              <Box fontSize={30}> {icon} </Box>
              <Text>{subTitle}</Text>
            </Flex>
            <Heading as="h1" fontSize="5.5rem" color="white">
              {name}
            </Heading>
            <Text fontWeight="bold" py={2}>
              {nums}
            </Text>
            <Flex align="center" gap={8} py={3} display={temTyle}>
              <Icon as={BsFillPlayCircleFill} fontSize="4rem" color="#1db954" />
              <Text
                border="2px solid white"
                fontSize={20}
                px={4}
                borderRadius={5}>
                Follow
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
