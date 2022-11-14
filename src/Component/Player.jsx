import {
  Box,
  Flex,
  Center,
  Icon,
  Button,
  Progress,
  Image,
  Text,
} from "@chakra-ui/react";
import im from "../assets/mi.jpg";
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
import { Link } from "react-router-dom";
const Player = () => {
  return (
    <Box
      bg="#121212"
      pos="fixed"
      bottom="0"
      left="0"
      px={7}
      // opacity="0.6"
      zIndex={50}
      right="0"
      h={"12vh"}>
      <Flex justify="space-between" pt="1rem">
        {/* ==============MUSIC INFOR======== */}
        <Box color="white">
          <Center gap={5} fontSize={15}>
            <Image src={im} w={16} h={12} border="1px solid white" />
            <Box>
              <Text>Bigger Feat...</Text>
              <Text>
                <Link to="/artistDetail">M.I Abaga</Link>
              </Text>
            </Box>
            <Icon as={MdOutlineFavoriteBorder} fontSize={30} />
          </Center>
        </Box>
        {/* =================CONTROLS=============== */}
        <Box>
          <Center gap={5} fontSize={20}>
            <Icon as={BsShuffle} color="white" />
            <Icon as={FaBackward} color="white" />
            <Icon as={BsFillPlayCircleFill} color="white" fontSize={35} />
            <Icon as={FaForward} color="white" />
            <Icon as={FiRepeat} color="white" />
          </Center>
          <Progress
            mt={3}
            w="35rem"
            value={50}
            size="xs"
            colorScheme="green"
            borderRadius="7px"
            // color="#1db954"
          />
        </Box>
        {/* ==============volume================== */}
        <Box pt={5}>
          <Center gap={4}>
            <Icon as={GiMicrophone} color="white" />
            <Center gap={2}>
              <Icon as={BsFillVolumeUpFill} color="white" />
              <Progress
                w="6rem"
                value={50}
                size="xs"
                colorScheme="green"
                borderRadius="7px"
                // color="#1db954"
              />
            </Center>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default Player;
