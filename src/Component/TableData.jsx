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

const TableData = ({ date, data, display }) => {
  return (
    <TableContainer
      w={{ base: "100%", lg: "85%" }}
      ml={{ base: "0rem", lg: "10rem" }}>
      <Flex align="center" gap={8} p={3}>
        <Icon
          as={BsFillPlayCircleFill}
          cursor="pointer"
          fontSize="4rem"
          color="#1db954"
        />
        <Text
          border="2px solid white"
          display={display}
          fontSize={20}
          px={4}
          borderRadius={5}>
          Follow
        </Text>
      </Flex>
      <Table variant="simple" colorScheme="black">
        <Thead>
          <Tr>
            <Th w="0.5rem"></Th>
            <Th pl="3rem">TITLE</Th>
            <Th>ALBUM</Th>
            <Th>{date}</Th>
            <Th>
              <Icon as={BiTime} fontSize={25} />
            </Th>
            {/* <Th></Th> */}
          </Tr>
        </Thead>
        {data?.map((data, i) => {
          return (
            <Tbody key={i}>
              <Tr className="tr">
                <Td border="none">{i + 1}</Td>

                <Td w="0.4rem" border="none">
                  <Flex gap={3}>
                    <Image src={mi} h={10} w={12} />{" "}
                    <Text pt={2}>M.I Abaga - Bigger Feat. Nas...</Text>
                  </Flex>
                </Td>
                <Td border="none">The Guy</Td>
                <Td border="none">24 December, 2022</Td>
                <Td border="none">25.4</Td>
                <Td w="1rem" border="none">
                  <Icon className="play" as={BsPlayFill} fontSize={25} />
                </Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </TableContainer>
  );
};

export default TableData;
