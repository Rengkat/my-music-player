import { Box, Grid } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import GridTopArtist from "./GridTopArtist";
import { FaMedal } from "react-icons/all";

const TopChart = () => {
  const arr = [2, 3, 4, 5, 6, 7, 7, 8, 9, 6, 5, 5, 5, 5, 5, 55, 5];
  return (
    <Box>
      <Box ml={20}>
        <Hero
          name="Popular Artists"
          temTyle="none"
          icon={<FaMedal />}
          subTitle="Must popular Artist"
        />
      </Box>
      <Grid
        bg="#121212"
        gridTemplateColumns="repeat(6, 1fr)"
        gap={5}
        ml="10rem"
        pb="6rem"
        pl="5rem"
        pr="2rem">
        {arr?.map((data, i) => {
          return <GridTopArtist key={i} />;
        })}
      </Grid>
    </Box>
  );
};

export default TopChart;
