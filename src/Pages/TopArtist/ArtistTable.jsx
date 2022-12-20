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
import { BiTime, BsPlayFill, BsFillPlayCircleFill } from "react-icons/all";
import ArtistTableDesktop from "./ArtistTableDesktop";

const ArtistTable = ({
  data,
  activeSong,
  date,
  display,
  isPlaying,
  isActive,
}) => {
  const part = data && Object.values(data);
  const ArtistName = part && Object.values(part[0])[0].attributes.name;
  const songs = data && Object.values(data.songs);
  //   console.log(data);
  //   console.log(songs);
  return (
    <>
      <TableContainer
        bg="#121212"
        h="100vh"
        overflow="hidden"
        padding={0}
        display={{ base: "block", md: "none" }}>
        <Flex align="center" gap={3} pb="1rem" pl={5} pt={3}>
          <Icon
            as={BsFillPlayCircleFill}
            cursor="pointer"
            fontSize="2rem"
            color="#1db954"
          />
          <Text
            border="2px solid white"
            // display={display}
            fontSize={12}
            px={4}
            borderRadius={5}>
            Follow
          </Text>
        </Flex>
        <Table
          className="table"
          size={{ base: "sm", md: "md", lg: "lg" }}
          mx="auto"
          variant="simple"
          colorScheme="black">
          <Thead>
            <Tr>
              <Th w="5px"></Th>
              <Th w="8rem">TITLE</Th>
              <Th w="5rem">ALBUM</Th>
              <Th w="6rem">DATE</Th>
              <Th>
                <Icon as={BiTime} fontSize={18} />
              </Th>
              {/* <Th></Th> */}
            </Tr>
          </Thead>
          {songs?.map((song, i) => {
            // console.log(song);
            return (
              <Tbody key={song.id}>
                <Tr>
                  <Td border="none" white-space="nowrap">
                    <Text fontSize={10}></Text>
                  </Td>
                  <Td border="none" wordBreak="break-all">
                    <Flex gap={1}>
                      <Text wordBreak="break-all" fontSize={10}>
                        {song?.attributes?.name?.slice(0, 20)}
                      </Text>
                    </Flex>
                  </Td>
                  <Td border="none">
                    <Text fontSize={10}>
                      {song?.attributes?.albumName.slice(0, 15)}
                    </Text>
                  </Td>
                  <Td border="none">
                    <Text fontSize={10}>{song?.attributes?.releaseDate}</Text>
                  </Td>
                  <Td border="none">
                    <Text fontSize={10}>
                      {(song?.attributes?.durationInMillis / 60000).toFixed(2)}
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>
      <Box display={{ base: "none", lg: "block" }}>
        <ArtistTableDesktop
          display={display}
          date={date}
          data={data}
          activeSong={activeSong}
          isPlaying={isPlaying}
          isActive={isActive}
        />
      </Box>
      {/* <TableDesktop date={date} data={data} display={display} /> */}
    </>
  );
};

export default ArtistTable;
