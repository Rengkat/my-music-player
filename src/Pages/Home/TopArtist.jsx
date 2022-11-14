import img from "../../assets/mi.jpg";
import { Box, Image, Flex } from "@chakra-ui/react";

const TopArtist = () => {
  return (
    <Box>
      <Image src={img} h="7rem" w="7rem" rounded="full" objectFit="cover" />
    </Box>
  );
};

export default TopArtist;
