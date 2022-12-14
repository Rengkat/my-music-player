import { Box, Text, Image, Grid } from "@chakra-ui/react";
import GridAlbum from "./GridAlbum";
import { useSelector, useDispatch } from "react-redux";
import { BsFillFileMusicFill } from "react-icons/all";
import Hero from "../../Component/Hero";
import { useState, useEffect } from "react";
import { useGetTopChartsByCountryQuery } from "../../Redux/api/Api";
import Loader from "../../Component/Loader";

const Album = () => {
  const [countryCode, setCountryCode] = useState("");
  const { data, isLoading, isError } =
    useGetTopChartsByCountryQuery(countryCode);
  const { activeSong, isPlaying, isActive } = useSelector(
    (store) => store.appstate
  );
  // console.log(data);
  useEffect(() => {
    try {
      fetch(
        "https://geo.ipify.org/api/v2/country?apiKey=at_iM3AVrQTQXPccE8XVQ8g3gxZ9MdwC"
      )
        .then((data) => data.json())
        .then((response) => setCountryCode(response?.location?.country));
    } catch (error) {}
  }, [countryCode]);
  // console.log(countryCode);
  return (
    <Box w="100%">
      <Box>
        <Hero
          name={`In Your Country - ${countryCode}`}
          temTyle="none"
          icon={<BsFillFileMusicFill />}
          subTitle="Sounds in your Country "
        />
      </Box>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid
          bg="#121212"
          gridTemplateColumns={{ base: "repeat(2,1fr)", lg: "repeat(6, 1fr)" }}
          gap={{ base: 3, lg: 5 }}
          pt="2rem"
          pb="8rem"
          pl={{ base: "1rem", lg: "4rem" }}
          pr="1rem">
          {data?.map((song, i) => {
            return (
              <GridAlbum
                key={song.key}
                song={song}
                activeSong={activeSong}
                i={i}
                isPlaying={isPlaying}
                isActive={isActive}
                data={data}
              />
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default Album;
