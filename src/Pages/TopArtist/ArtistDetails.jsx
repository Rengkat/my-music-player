import { Box, Grid } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import GridTopArtist from "./GridTopArtist";
import { MdVerified } from "react-icons/all";
import { useSelector, useDispatch } from "react-redux";
import TableData from "../../Component/TableData";
import { useParams } from "react-router-dom";
import { useGetArtistDetailQuery } from "../../Redux/api/Api";
import ArtistTable from "./ArtistTable";
import { useEffect, useState } from "react";

const ArtistDetails = () => {
  const { artistId } = useParams();
  // const [artistDetails, setArtistDetails] = useState([]);
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "77d43bc1d1msh7cfccdaeeac0d75p1245bejsn16d5ea6904fd",
  //     "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  //   },
  // };
  // useEffect(() => {
  //   fetch(
  //     `https://shazam-core.p.rapidapi.com/v2/artists/details?artist_id=${artistId}`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setArtistDetails(response && response))
  //     .catch((err) => console.error(err));
  // }, [artistId]);

  const { data, isLoading, error } = useGetArtistDetailQuery(artistId);
  // const part = artistDetails && Object.values(artistDetails);
  // const artistName = part && Object.values(part[0])[0].attributes.name;
  console.log(data);

  const { activeSong, isPlaying, isActive } = useSelector(
    (store) => store.appstate
  );
  return (
    <Box bg="#121212" color="white">
      <Box>
        <Hero
          temTyle="flex"
          // name={artistName}
          icon={<MdVerified color="	#1DA1F2" />}
          subTitle="Verified Artist"
        />
      </Box>
      <Box>
        {/* <ArtistTable
          data={artistDetails}
          activeSong={activeSong}
          isPlaying={isPlaying}
          isActive={isActive}
        /> */}
        {/* <TableData date="DATE RELEASED" data={arr} display="flex" /> */}
      </Box>
    </Box>
  );
};

export default ArtistDetails;
