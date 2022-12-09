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
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../Redux/Reducers/AppSlice";

const ArtistTableDesktop = ({ data }) => {
  const part = data && Object.values(data);
  const ArtistName = part && Object.values(part[0])[0].attributes.name;
  const songs = data && Object.values(data.songs);
  return (
    <>
      <TableContainer
        overflow="hidden"
        bg="#121212"
        display={{ base: "none", lg: "block" }}
        w={{ base: "100%", lg: "90%" }}
        ml={{ base: "0rem", lg: "3rem" }}
        pb="2rem">
        <Flex align="center" gap={8} pb="-3rem" pl="2rem" pt={4}>
          <Icon
            as={BsFillPlayCircleFill}
            cursor="pointer"
            fontSize="4rem"
            color="#1db954"
          />
          <Text
            border="2px solid white"
            // display={display}
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
              <Th border="none">DATE RELEASED</Th>
              <Th border="none">
                <Icon as={BiTime} fontSize={25} />
              </Th>
              {/* <Th></Th> */}
            </Tr>
          </Thead>
          {songs?.map((song, i) => {
            return (
              <Tbody key={song.id}>
                <Tr className="tr">
                  <Td border="none">
                    <Text>{i + 1}</Text>
                  </Td>
                  <Td border="none">
                    <Flex gap={3}>
                      {/* <Image
                        border="none"
                        src={data?.images?.coverart}
                        h={{ base: 5, lg: 10 }}
                        w={12}
                        objectFit="cover"
                      /> */}
                      <Text pt={2}>{song?.attributes?.name?.slice(0, 30)}</Text>
                    </Flex>
                  </Td>
                  <Td border="none">
                    <Text> {song?.attributes?.albumName.slice(0, 15)}</Text>
                  </Td>
                  <Td border="none">
                    <Text>{song.attributes.releaseDate}</Text>
                  </Td>
                  <Td border="none">
                    <Text>
                      {(song.attributes.durationInMillis / 60000).toFixed(2)}
                    </Text>
                  </Td>
                  <Td border="none">
                    <Icon className="play" as={BsPlayFill} fontSize={25} />
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

export default ArtistTableDesktop;
