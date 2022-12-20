import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { setActiveSong, playPause } from "../../Redux/Reducers/AppSlice";
import PlayPause from "../../Component/MusicPlayer/PlayPause";
const MusicCard = ({
  song,
  activeSong,
  i,
  isPlaying,
  isActive,
  data,
  setActiveSong,
  playPause,
}) => {
  const { images, title, subtitle } = song;
  console.log(isPlaying);
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, i }));
    dispatch(playPause(true));
    // console.log(me);
  };

  return (
    <Box
      border="1px solid white"
      borderRadius="xl"
      overflow="hidden"
      className="music-card">
      <Box>
        <Image
          src={images?.coverart}
          alt="Song image"
          w="full"
          height={40}
          objectFit="cover"
        />
        <Box p={3} fontSize={12} color="white">
          <Text>{title.slice(0, 50)}...</Text>
          <Text cursor="pointer">
            <Link to="/artistDetail">{subtitle}</Link>
          </Text>
        </Box>
      </Box>
      <PlayPause
        sty="over-play"
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

export default MusicCard;
