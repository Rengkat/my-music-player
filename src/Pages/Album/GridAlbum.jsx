import { Box, Text, Image, Flex } from "@chakra-ui/react";
import mi from "../../assets/image-24-6-1920x1280.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../../Redux/Reducers/AppSlice";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/all";
import PlayPause from "../../Component/MusicPlayer/PlayPause";

const GridAlbum = ({ song, activeSong, i, isPlaying, isActive, data }) => {
  // console.log(song);
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const dispatch = useDispatch();
  return (
    <Box
      className="album-card"
      p={1}
      my={1}
      color="white"
      border="1px solid grey"
      bg="#212121"
      borderRadius={7}>
      <Image
        src={song?.images?.coverarthq}
        w="100%"
        h="10rem"
        objectFit="cover"
        borderRadius={7}
      />
      <Box px={2}>
        <Text>{song?.title.slice(0, 20)}</Text>
        <Text pt={2}>{song?.subtitle}</Text>
      </Box>
      <PlayPause
        sty="overlay-album"
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
        i={i}
        data={data}
      />
    </Box>
  );
};

export default GridAlbum;
