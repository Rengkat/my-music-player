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
import desktopHeroImage from "../assets/ligtGreee.png";
import mobileHeroImage from "../assets/mobile.png";
import { MdVerified } from "react-icons/all";

const Hero = ({ name, nums, icon, subTitle, temTyle }) => {
  return (
    <Box ml={0}>
      <Box
        w="100%"
        h={{ base: "15vh", lg: "40vh" }}
        // backgroundPosition=""
        backgroundPosition={{ base: "bottom", lg: "left" }}
        backgroundSize="auto"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundImage={{ base: mobileHeroImage, lg: desktopHeroImage }}>
        <Box
          pl={{ base: "1rem", lg: "5rem" }}
          pt={{ base: "3rem", lg: "7rem" }}>
          <Flex flexDir="column" justify="end" color="white">
            <Flex
              alignItems="center"
              gap={1}
              mb={{ base: "-0.3rem", lg: "-1rem" }}>
              <Box fontSize={{ base: 10, lg: 30 }}> {icon} </Box>
              <Text>{subTitle}</Text>
            </Flex>
            <Heading
              pb="-20rem"
              as="h1"
              fontSize={{ base: "2rem", lg: "5.5rem" }}
              color="white">
              {name}
            </Heading>
            <Text fontWeight="bold">{nums}</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
