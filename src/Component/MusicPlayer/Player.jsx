import { Box, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Audio from "./Audio";
import Controls from "./Controls";
import Track from "./Track";
import Volume from "./Volume";
import {
  playPause,
  addFavorite,
  setShuffle,
  setRepeat,
} from "../../Redux/Reducers/AppSlice";

const Player = () => {
  const {
    activeSong,
    isPlaying,
    isActive,
    currentSongIndex,
    currentSongs,
    shuffle,
    repeat,
  } = useSelector((store) => store.appstate);
  // console.log(shuffle);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentSongIndex]);
  // console.log(isPlaying);
  const handlePlayPause = () => {
    // if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentSongIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentSongIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentSongIndex - 1));
    }
  };
  // console.log(shuffle);
  return (
    <Box>
      <Flex
        justify="space-between"
        pt={{ base: "0.6rem", lg: "1rem" }}
        flexDir={{ base: "column", lg: "row" }}>
        {/* ==========TRACK DETAILS====== */}
        <Track activeSong={activeSong} addFavorite={addFavorite} />
        {/* ==============AUDIO======== */}
        {/* <Audio
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentSongIndex={currentSongIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        /> */}
        {/* =================CONTROLS=============== */}
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
          volume={volume}
          setVolume={setVolume}
          duration={duration}
          setDuration={setDuration}
          seekTime={seekTime}
          setSeekTime={setSeekTime}
          appTime={appTime}
          setAppTime={setAppTime}
        />
        {/* ==============volume================== */}
        <Volume
          value={volume}
          min="0"
          max="1"
          onChange={(event) => setVolume(event.target.value)}
          setVolume={setVolume}
        />
      </Flex>
    </Box>
  );
};

export default Player;
