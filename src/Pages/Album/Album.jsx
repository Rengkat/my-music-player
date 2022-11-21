import { Box, Text, Image, Grid } from "@chakra-ui/react";
import GridAlbum from "./GridAlbum";
import { BsFillFileMusicFill } from "react-icons/all";
import Hero from "../../Component/Hero";

const arr = [1, 23, 4, 4, 4, 5, 6, , 4, 57, 5, 4, , 3, 2, 2, 2, 2, 2, 4];
const Album = () => {
  return (
    <Box w="100%">
      <Box>
        <Hero
          name="Albums"
          temTyle="none"
          icon={<BsFillFileMusicFill />}
          subTitle="Albums released"
        />
      </Box>
      <Grid
        bg="#121212"
        gridTemplateColumns={{ base: "repeat(2,1fr)", lg: "repeat(6, 1fr)" }}
        gap={{ base: 3, lg: 5 }}
        pt="2rem"
        pb="8rem"
        pl={{ base: "1rem", lg: "4rem" }}
        pr="1rem">
        {arr?.map((data, i) => {
          return <GridAlbum key={i} />;
        })}
      </Grid>
    </Box>
  );
};

export default Album;
