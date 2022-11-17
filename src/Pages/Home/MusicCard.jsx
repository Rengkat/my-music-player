import img from "../../assets/mi.jpg";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/all";
import { Box, Image, Text } from "@chakra-ui/react";

const MusicCard = ({ card }) => {
  return (
    <Box
      border="1px solid white"
      borderRadius="xl"
      overflow="hidden"
      className="music-card">
      <Box>
        <Image
          src={img}
          alt="Song image"
          w="full"
          height={40}
          objectFit="cover"
        />
        <Box p={3} fontSize={12} color="white">
          <Text>M.I Abaga - Bigger Feat...</Text>
          <Text>2022 Album</Text>
        </Box>
      </Box>
      <Box className="over-play">
        <BsFillPlayCircleFill fontSize={60} color="#1db954" />
      </Box>
    </Box>
  );
};

export default MusicCard;
