import { Box, Center, Icon, Button } from "@chakra-ui/react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
  FaForward,
  FaBackward,
  FiRepeat,
  RiRepeatOneLine,
} from "react-icons/all";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SeekBar from "./SeekBar";
import {
  playPause,
  addFavorite,
  setShuffle,
  setRepeat,
} from "../../Redux/Reducers/AppSlice";
const Controls = (
  isPlaying,
  isActive,
  currentSongs,
  // handlePlayPause,
  handlePrevSong,
  handleNextSong,
  volume,
  setVolume,
  duration,
  setDuration,
  seekTime,
  setSeekTime,
  appTime,
  setAppTime
) => {
  const { shuffle, repeat } = useSelector((store) => store.appstate);
  // console.log(isPlaying);
  const dispatch = useDispatch();
  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    }
    dispatch(playPause(true));
  };
  return (
    <Box py={{ base: 3, lg: 5 }}>
      <Center gap={5} fontSize={20}>
        <Icon
          cursor="pointer"
          as={BsShuffle}
          onClick={() => dispatch(setShuffle())}
          color={shuffle ? "#1db954" : "white"}
        />
        {/* {currentSongs?.length && ( */}
        <Icon as={FaBackward} onClick={handlePrevSong} color="white" />
        {/* )} */}
        {isPlaying ? (
          <Icon
            as={BsFillPauseCircleFill}
            onClick={handlePlayPause}
            color="white"
            cursor="pointer"
            fontSize={35}
          />
        ) : (
          <Icon
            cursor="pointer"
            as={BsFillPlayCircleFill}
            onClick={handlePlayPause}
            color="white"
            fontSize={35}
          />
        )}
        {/* {currentSongs?.length && ( */}
        <Icon as={FaForward} color="white" onClick={handleNextSong} />
        {/* )} */}

        <Icon
          cursor="pointer"
          as={repeat ? RiRepeatOneLine : FiRepeat}
          onClick={() => dispatch(setRepeat())}
          color={repeat ? "#1db954" : "white"}
        />
      </Center>
      <SeekBar
        value={appTime}
        min="0"
        max={duration}
        onInput={(event) => setSeekTime(event.target.value)}
        setSeekTime={setSeekTime}
        appTime={appTime}
      />
    </Box>
  );
};

export default Controls;
