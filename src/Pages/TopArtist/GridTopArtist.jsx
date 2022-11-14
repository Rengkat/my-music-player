import { Box, Text, Image, Flex, Center } from "@chakra-ui/react";
import mi from "../../assets/image-24-6-1920x1280.jpg";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/all";

const GridTopArtist = () => {
  return (
    <Box
      className="album-card"
      p={1}
      my={2}
      color="white"
      //   border="1px solid "
      bg="#212121"
      borderRadius={7}>
      <Link to="/artistDetail">
        <Image
          src={mi}
          w="100%"
          h="12rem"
          alt="Image"
          p={2}
          objectFit="cover"
          borderRadius="full"
        />
        <Box>
          <Center>
            <Text>M.I Abaga </Text>
          </Center>
          <Center>
            <Text pt={2}>Artist</Text>
          </Center>
        </Box>
        <Box className="overlay-album">
          <BsFillPlayCircleFill fontSize={60} color="#1db954" />
        </Box>
      </Link>
    </Box>
  );
};

export default GridTopArtist;
