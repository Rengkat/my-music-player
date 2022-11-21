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
import TableDesktop from "./TableDesktop";

const TableData = ({ date, data, display }) => {
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
              <Th w="5rem">ALBUM</Th>
              <Th w="6rem">Date</Th>
              <Th>
                <Icon as={BiTime} fontSize={18} />
              </Th>
              {/* <Th></Th> */}
            </Tr>
          </Thead>
          {data?.map((data, i) => {
            return (
              <Tbody key={i}>
                <Tr>
                  <Td border="none" white-space="nowrap">
                    <Text fontSize={10}>{i + 1}</Text>
                  </Td>
                  <Td border="none" wordBreak="break-all">
                    <Flex gap={1}>
                      <Image
                        display="none"
                        border="none"
                        src={mi}
                        h={{ base: 5, lg: 10 }}
                        w={12}
                      />{" "}
                      <Text wordBreak="break-all" fontSize={10}>
                        M.I Abaga - Bigger
                      </Text>
                    </Flex>
                  </Td>
                  <Td border="none">
                    <Text fontSize={10}>The Guy</Text>
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
      <TableDesktop date={date} data={data} display={display} />
    </>
  );
};

export default TableData;
