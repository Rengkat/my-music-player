import { Grid, Flex, Text, Icon, IconButton } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "./Component/NavBar";
import { BiMenuAltRight } from "react-icons/all";
import "./style.css";
import {
  Home,
  Favorite,
  TopChart,
  SongDetail,
  TopArtist,
  ArtistDetails,
  Album,
  AlbumDetail,
} from "./Pages/index";
import Player from "./Component/Player";
import { useDispatch, useSelector } from "react-redux";
import { openMobileNav } from "./Redux/Reducers/AppSlice";
function App() {
  const dispatch = useDispatch();
  const { isMobileNavOpen } = useSelector((store) => store.appstate);
  // console.log(openMobileNav);
  return (
    <>
      <Grid gridTemplateColumns={{ base: "1fr", lg: "repeat(8,1fr)" }} gap={4}>
        <IconButton
          onClick={() => dispatch(openMobileNav())}
          display={{ base: isMobileNavOpen ? "none" : "block", lg: "none" }}
          boxShadow="lg"
          // border="1px solid white"
          zIndex={100}
          pos="fixed"
          top={1}
          right={1}
          color="white">
          <Icon as={BiMenuAltRight} fontSize={"3rem"} color="green" />
        </IconButton>
        <Box
          className="mobileNav"
          minWidth="15rem"
          bg="#212121"
          color="white"
          // display={{ base: "none", lg: "block" }}
          borderRight="1px solid black"
          ml={{ base: isMobileNavOpen ? "0%" : "-100%", lg: "0%" }}
          h="100vh"
          pos="fixed"
          fontSize={20}
          zIndex={{ base: 60, lg: 40 }}
          left={0}
          top={0}
          bottom={0}>
          <NavBar />
        </Box>
        <Box gridColumnStart={{ md: "2" }} gridColumnEnd={{ md: "9" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-chart" element={<TopChart />} />
            <Route path="/sound-around-you" element={<Album />} />
            <Route path="/top-artist" element={<TopArtist />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/artistDetail/:artistId" element={<ArtistDetails />} />
            <Route path="/albumDetail" element={<AlbumDetail />} />
          </Routes>
        </Box>
      </Grid>
      <Box
        colSpan={8}
        bg="#121212"
        pos="fixed"
        bottom="0"
        left="0"
        px={7}
        zIndex={50}
        right="0"
        h={{ base: "20vh", lg: "6rem" }}>
        <Player />
      </Box>
    </>
  );
}
//  gridTemplateColumns = "repeat(5,1fr)";

export default App;
