import { Box, Icon, Image, Center, Text, Flex } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import TableData from "../../Component/TableData";
import { MdFavorite } from "react-icons/all";
import { useSelector, useDispatch } from "react-redux";

const arr = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const Favorite = () => {
  const {
    activeSong,
    favorites,
    isPlaying,
    isActive,
    currentSongIndex,
    currentSongs,
  } = useSelector((store) => store.appstate);
  const dispatch = useDispatch();
  console.log(favorites);
  return (
    <Box bg="#121212" color="white" pb="7rem">
      <Hero
        name="Favorites"
        temTyle="none"
        nums={`${favorites.length} Favorites`}
        icon={<MdFavorite />}
        subTitle="Favorite songs"
      />
      {/* <TableData data={arr} date="DATE ADDED" display="none" /> */}
    </Box>
  );
};

export default Favorite;
