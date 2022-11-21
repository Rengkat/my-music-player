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

const TableDesktop = ({ date, data, display }) => {
  return (
    <>
      <TableContainer
        overflow="hidden"
        bg="#121212"
        display={{ base: "none", lg: "block" }}
        w={{ base: "100%", lg: "90%" }}
        ml={{ base: "0rem", lg: "3rem" }}>
        <Flex align="center" gap={8} pb="-3rem" pl="2rem" pt={4}>
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
              <Th border="none">ALBUM</Th>
              <Th border="none">{date}</Th>
              <Th border="none">
                <Icon as={BiTime} fontSize={25} />
              </Th>
              {/* <Th></Th> */}
            </Tr>
          </Thead>
          {data?.map((data, i) => {
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
                        src={mi}
                        h={{ base: 5, lg: 10 }}
                        w={12}
                        objectFit="cover"
                      />
                      <Text pt={2}>M.I Abaga - Bigger fit Olamide & Nas</Text>
                    </Flex>
                  </Td>
                  <Td border="none">
                    <Text>The Guy</Text>
                  </Td>
                  <Td border="none">
                    <Text>24 Dec., 2022</Text>
                  </Td>
                  <Td border="none">
                    <Text>25.4</Text>
                  </Td>
                  <Td border="none">
                    <Icon
                      //   color="white"
                      className="play"
                      as={BsPlayFill}
                      fontSize={25}
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
