import { Box, Text, Image, Flex } from "@chakra-ui/react";
import mi from "../../assets/image-24-6-1920x1280.jpg";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/all";

const GridAlbum = ({ song }) => {
  return (
    <Box
      className="album-card"
      p={1}
      my={1}
      color="white"
      border="1px solid grey"
      bg="#212121"
      borderRadius={7}>
      <Link to="/albumDetail">
        <Image
          src={song?.images.coverarthq}
          w="100%"
          h="10rem"
          objectFit="cover"
          borderRadius={7}
        />
        <Box px={2}>
          <Text>{song?.title.slice(0, 20)}</Text>
          <Text pt={2}>{song?.subtitle}</Text>
        </Box>
        <Box className="overlay-album">
          <BsFillPlayCircleFill fontSize={60} color="#1db954" />
        </Box>
      </Link>
    </Box>
  );
};

export default GridAlbum;
