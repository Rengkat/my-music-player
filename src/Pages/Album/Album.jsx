import { Box, Text, Image, Grid } from "@chakra-ui/react";
// import Hero from "../../Component/Hero";
import GridAlbum from "./GridAlbum";
import { BsFillFileMusicFill } from "react-icons/all";
import Hero from "../../Component/Hero";
// import Hero2 from "../../Component/Hero2";

const arr = [1, 23, 4, 4, 4, 5, 6, , 4, 57, 5, 4, , 3, 2, 2, 2, 2, 2, 4];
const Album = () => {
  return (
    <Box>
      <Box ml={20}>
        <Hero
          name="Albums"
          temTyle="none"
          icon={<BsFillFileMusicFill />}
          subTitle="Albums released"
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
          return <GridAlbum key={i} />;
        })}
      </Grid>
    </Box>
  );
};

export default Album;
