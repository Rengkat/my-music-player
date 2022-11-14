import { Box, Grid } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import GridTopArtist from "./GridTopArtist";
import { MdVerified } from "react-icons/all";

const ArtistDetails = () => {
  return (
    <Box>
      <Box>
        <Hero
          temTyle="flex"
          name="M.I. Abaga"
          icon={<MdVerified color="	#1DA1F2" />}
          subTitle="Verified Artist"
        />
      </Box>
    </Box>
  );
};

export default ArtistDetails;
