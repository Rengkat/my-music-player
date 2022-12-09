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
import mi from "../assets/image-24-6-1920x1280.jpg";
import TablePhonePlayer from "./MusicPlayer/TablePlayerSingle";
import TableDesktop from "./TableDesktop";

const TableData = ({
  date,
  data,
  display,
  activeSong,
  isPlaying,
  isActive,
}) => {
  // const { background, images, title, subtitle } = data;
  // console.log(data?.subtitle);

  return (
    <>
      <TableContainer
        bg="#121212"
        h="100vh"
        overflow="hidden"
        padding={0}
        display={{ base: "block", md: "none" }}>
        <Flex align="center" gap={3} pb="1rem" pl={5} pt={3}>
          <Text
            border="2px solid white"
            display={display}
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
              <Th w="5rem">ARTIST</Th>
              <Th w="6rem">DATE</Th>
              <Th>
                <Icon as={BiTime} fontSize={18} />
              </Th>
            </Tr>
          </Thead>
          {data?.map((data, i) => {
            // console.log(data?.artists[0]?.adamid);
            return (
              <Tbody key={i}>
                {/* <TablePlayerSinglesize='2rem' /> */}

                <Tr>
                  <Td border="none" white-space="nowrap">
                    <Text fontSize={10}>{i + 1}</Text>
                  </Td>
                  <Td border="none" wordBreak="break-all">
                    <Flex gap={1}>
                      <Text wordBreak="break-all" fontSize={10}>
                        {data?.title?.slice(0, 20)}...
                      </Text>
                    </Flex>
                  </Td>
                  <Td border="none">
                    <Text fontSize={10}>{data?.subtitle.slice(0, 12)}</Text>
                  </Td>
                  <Td border="none">
                    <Text fontSize={10}>24 Dec., 2022</Text>
                  </Td>
                  <Td border="none">
                    <Text fontSize={10}>25.4</Text>
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>
      <TableDesktop
        date={date}
        data={data}
        display={display}
        activeSong={activeSong}
        isPlaying={isPlaying}
        isActive={isActive}
      />
    </>
  );
};

export default TableData;
