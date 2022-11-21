import { Grid, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "./Component/NavBar";
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

function App() {
  return (
    <>
      <Grid gridTemplateColumns={{ base: "1fr", lg: "repeat(8,1fr)" }} gap={4}>
        <Box
          minWidth="15rem"
          bg="#212121"
          color="white"
          display={{ base: "none", lg: "block" }}
          h="100vh"
          pos="fixed"
          fontSize={20}
          zIndex={20}
          left={0}
          top={0}
          bottom={0}>
          <NavBar />
        </Box>
        <Box gridColumnStart={{ md: "2" }} gridColumnEnd={{ md: "9" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-chart" element={<TopChart />} />
            <Route path="/albums" element={<Album />} />
            <Route path="/top-artist" element={<TopArtist />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/artistDetail" element={<ArtistDetails />} />
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
        h={{ base: "20vh", lg: "7rem" }}>
        <Player />
      </Box>
    </>
  );
}
//  gridTemplateColumns = "repeat(5,1fr)";

export default App;
