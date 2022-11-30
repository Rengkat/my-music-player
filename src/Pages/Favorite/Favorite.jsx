import { Box, Icon, Image, Center, Text, Flex } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import TableData from "../../Component/TableData";
import { MdFavorite } from "react-icons/all";

const arr = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const Favorite = () => {
  return (
    <Box bg="#121212" color="white" pb="7rem">
      <Hero
        name="Favorites"
        temTyle="none"
        nums="12 Favorites"
        icon={<MdFavorite />}
        subTitle="Favorite songs"
      />
      {/* <TableData data={arr} date="DATE ADDED" display="none" /> */}
    </Box>
  );
};

export default Favorite;
