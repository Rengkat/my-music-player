import img from "../../assets/mi.jpg";
import { Box, Image, Flex } from "@chakra-ui/react";

const TopArtist = ({ song }) => {
  return (
    <Box>
      <Image
        src={song?.images?.background}
        h={{ base: "6.5rem", lg: "7rem" }}
        w={{ base: "6.5rem", lg: "7rem" }}
        rounded="full"
        objectFit="cover"
      />
    </Box>
  );
};

export default TopArtist;
