import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/all";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const MusicCard = ({ song }) => {
  const { background, images, title, subtitle } = song;
  return (
    <Box
      border="1px solid white"
      borderRadius="xl"
      overflow="hidden"
      className="music-card">
      <Box>
        <Image
          src={images?.coverart}
          alt="Song image"
          w="full"
          height={40}
          objectFit="cover"
        />
        <Box p={3} fontSize={12} color="white">
          <Text>{title.slice(0, 50)}...</Text>
          <Text cursor="pointer">
            <Link to="/artistDetail">{subtitle}</Link>
          </Text>
        </Box>
      </Box>
      <Box className="over-play">
        <BsFillPlayCircleFill fontSize={60} color="#1db954" />
      </Box>
    </Box>
  );
};

export default MusicCard;
