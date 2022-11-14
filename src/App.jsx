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
      <Grid templatec={"repeat(8,1fr)"} gap={4}>
        <NavBar />
        <Box gridColumnStart="2" gridColumnEnd="9">
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
      <Player />
    </>
  );
}
//  gridTemplateColumns = "repeat(5,1fr)";

export default App;
