import { Box, Text, Image, Flex } from "@chakra-ui/react";
import mi from "../../assets/image-24-6-1920x1280.jpg";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/all";

const GridAlbum = () => {
  return (
    <Box
      className="album-card"
      p={1}
      my={2}
      color="white"
      border="1px solid grey"
      bg="#212121"
      borderRadius={7}>
      <Link to="/albumDetail">
        <Image src={mi} w="100%" h="12rem" objectFit="cover" borderRadius={7} />
        <Box>
          <Text>M.I Abaga </Text>
          <Flex gap={2}>
            <Text pt={2}>2022</Text>
            <Text pt={2}>The Guy</Text>
          </Flex>
        </Box>
        <Box className="overlay-album">
          <BsFillPlayCircleFill fontSize={60} color="#1db954" />
        </Box>
      </Link>
    </Box>
  );
};

export default GridAlbum;
