import { Box, Icon, Image, Center, Text, Flex } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BiTime, BsPlayFill, BsFillPlayCircleFill } from "react-icons/all";
import mi from "../assets/image-24-6-1920x1280.jpg";
import TablePlayerSingle from "./MusicPlayer/TablePlayerSingle";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../Redux/Reducers/AppSlice";

const TableDesktop = ({
  date,
  data,
  display,
  activeSong,
  isPlaying,
  isActive,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <>
      <TableContainer
        overflow="hidden"
        bg="#121212"
        display={{ base: "none", lg: "block" }}
        w={{ base: "100%", lg: "90%" }}
        ml={{ base: "0rem", lg: "3rem" }}>
        <Flex align="center" gap={8} pb="-3rem" pl="2rem" pt={4}>
          <Text
            border="2px solid white"
            display={display}
            fontSize={20}
            px={4}
            borderRadius={5}>
            Follow
          </Text>
        </Flex>
        <Table
          className="tableDesktop"
          size="lg"
          variant="simple"
          colorScheme="black">
          <Thead>
            <Tr>
              <Th border="none"></Th>
              <Th border="none">
                <Text pl="5rem">TITLE</Text>
              </Th>
              <Th border="none">ARTIST</Th>
              <Th border="none">{date}</Th>
              <Th border="none">
                <Icon as={BiTime} fontSize={25} />
              </Th>
              {/* <Th></Th> */}
            </Tr>
          </Thead>
          {data?.map((song, i) => {
            return (
              <Tbody key={i}>
                <Tr className="tr">
                  <Td border="none">
                    <Text>{i + 1}</Text>
                  </Td>
                  <Td border="none">
                    <Flex gap={3}>
                      <Image
                        border="none"
                        src={song?.images?.coverart}
                        h={{ base: 5, lg: 10 }}
                        w={12}
                        objectFit="cover"
                      />
                      <Text pt={2}>{song?.title.slice(0, 30)}</Text>
                    </Flex>
                  </Td>
                  <Td border="none">
                    <Text
                      cursor="pointer"
                      onClick={() =>
                        song.artists
                          ? `/artistDetail/${song?.artists[0]?.adamid}`
                          : "top-artist"
                      }>
                      {song?.subtitle.slice(0, 12)}
                    </Text>
                  </Td>
                  <Td border="none">
                    <Text>{new Date().toDateString()}</Text>
                  </Td>
                  <Td border="none">
                    <Text>25.4</Text>
                  </Td>
                  <Td border="none">
                    <TablePlayerSingle
                      handlePause={handlePauseClick}
                      handlePlay={() => handlePlayClick(song, i)}
                      isPlaying={isPlaying}
                      isActive={isActive}
                      activeSong={activeSong}
                      i={i}
                      song={song}
                    />
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>
    </>
  );
};

export default TableDesktop;
