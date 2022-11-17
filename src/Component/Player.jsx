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
    <Box>
      <Flex
        justify="space-between"
        pt={{ base: "0.6rem", lg: "1rem" }}
        flexDir={{ base: "column", lg: "row" }}>
        {/* ==============MUSIC INFOR======== */}
        <Box color="white">
          <Center gap={{ base: 10, lg: 5 }} fontSize={15}>
            <Image
              src={im}
              w={{ base: 9, lg: 12 }}
              h={{ base: 9, lg: 12 }}
              border="1px solid white"
            />
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
        <Box py={{ base: 3, lg: 5 }}>
          <Center gap={5} fontSize={20}>
            <Icon as={BsShuffle} color="white" />
            <Icon as={FaBackward} color="white" />
            <Icon as={BsFillPlayCircleFill} color="white" fontSize={35} />
            <Icon as={FaForward} color="white" />
            <Icon as={FiRepeat} color="white" />
          </Center>
          <Progress
            mt={3}
            w={{ base: "15rem", lg: "32rem" }}
            mx="auto"
            value={50}
            size="xs"
            colorScheme="green"
            borderRadius="7px"
            // color="#1db954"
          />
        </Box>
        {/* ==============volume================== */}
        <Box pt={5} display={{ base: "none", lg: "block" }}>
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
