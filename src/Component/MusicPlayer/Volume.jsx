import { Box, Center, Icon, Progress } from "@chakra-ui/react";

import {
  GiMicrophone,
  BsFillVolumeUpFill,
  IoMdVolumeOff,
  MdOutlineFavoriteBorder,
} from "react-icons/all";
import { Link } from "react-router-dom";
const Volume = ({ value, min, max, onChange, setVolume }) => {
  return (
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
  );
};

export default Volume;
