import { Box, Grid } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import GridTopArtist from "./GridTopArtist";
import { MdVerified } from "react-icons/all";
import TableData from "../../Component/TableData";
const arr = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

const ArtistDetails = () => {
  return (
    <Box bg="#121212" color="white">
      <Box>
        <Hero
          temTyle="flex"
          name="M.I. Abaga"
          icon={<MdVerified color="	#1DA1F2" />}
          subTitle="Verified Artist"
        />
      </Box>
      <Box>
        <TableData date="DATE RELEASED" data={arr} display="flex" />
      </Box>
    </Box>
  );
};

export default ArtistDetails;
