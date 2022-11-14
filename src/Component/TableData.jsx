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
import { BiTime, BsPlayFill } from "react-icons/all";
import mi from "../assets/image-24-6-1920x1280.jpg";

const TableData = ({ date, data }) => {
  return (
    <TableContainer w="85%" ml="12rem">
      <Table variant="simple" colorScheme="black">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
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

                <Td border="none">
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
