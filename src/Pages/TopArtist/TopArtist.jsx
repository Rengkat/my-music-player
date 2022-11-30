import { Box, Grid } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import GridTopArtist from "./GridTopArtist";
import { FaMedal } from "react-icons/all";
import { useGetTopChartsQuery } from "../../Redux/api/Api";

const TopChart = () => {
  const { data, error, isLoading } = useGetTopChartsQuery();
  return (
    <Box>
      <Box>
        <Hero
          name="Popular Artists"
          temTyle="none"
          icon={<FaMedal />}
          subTitle="Must popular Artist"
        />
      </Box>
      <Grid
        bg="#121212"
        py="2rem"
        gridTemplateColumns={{ base: "1fr 1fr", lg: "repeat(6, 1fr)" }}
        gap={{ base: 3, lg: 5 }}
        // ml="10rem"
        pb="8rem"
        pl={{ base: "1rem", lg: "4rem" }}
        pr="1rem">
        {data?.map((data, i) => {
          return <GridTopArtist key={i} data={data} />;
        })}
      </Grid>
    </Box>
  );
};

export default TopChart;
