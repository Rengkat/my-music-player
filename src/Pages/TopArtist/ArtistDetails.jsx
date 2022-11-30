import { Box, Grid } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import GridTopArtist from "./GridTopArtist";
import { MdVerified } from "react-icons/all";
import TableData from "../../Component/TableData";
import { useParams } from "react-router-dom";
import { useGetArtistDetailQuery } from "../../Redux/api/Api";
import ArtistTable from "./ArtistTable";

const ArtistDetails = () => {
  const { artistId } = useParams();
  const { data, isLoading, error } = useGetArtistDetailQuery(artistId);
  const part = data && Object.values(data);
  const artistName = part && Object.values(part[0])[0].attributes.name;
  // console.log(si);
  return (
    <Box bg="#121212" color="white">
      <Box>
        <Hero
          temTyle="flex"
          name={artistName}
          icon={<MdVerified color="	#1DA1F2" />}
          subTitle="Verified Artist"
        />
      </Box>
      <Box>
        <ArtistTable data={data} />
        {/* <TableData date="DATE RELEASED" data={arr} display="flex" /> */}
      </Box>
    </Box>
  );
};

export default ArtistDetails;
