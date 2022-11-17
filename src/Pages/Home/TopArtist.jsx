import img from "../../assets/mi.jpg";
import { Box, Image, Flex } from "@chakra-ui/react";

const TopArtist = () => {
  return (
    <Box>
      <Image
        src={img}
        h={{ base: "6.5rem", lg: "7rem" }}
        w={{ base: "6.5rem", lg: "7rem" }}
        rounded="full"
        objectFit="cover"
      />
    </Box>
  );
};

export default TopArtist;
