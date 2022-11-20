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
    <>
      <TableContainer pr={2} bg="#121212">
        <Table
          ml="0rem"
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
                  <Td border="none">
                    <Text fontSize={10}>{i + 1}</Text>
                  </Td>
                  <Td border="none">
                    <Flex gap={1}>
                      <Image
                        display={{ base: "none", lg: "block" }}
                        src={mi}
                        h={{ base: 5, lg: 10 }}
                        w={12}
                      />{" "}
                      <Text fontSize={10}>M.I Abaga - Bigger...</Text>
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
                  <Td border="none" display={{ base: "none", lg: "block" }}>
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

export default TableData;

// <TableContainer
//     w={{ base: "100%", lg: "85%" }}
//     ml={{ base: "0rem", lg: "10rem" }}
//     >
//       <Flex align="center" gap={8} pb="-3rem">
//         <Icon
//           as={BsFillPlayCircleFill}
//           cursor="pointer"
//           fontSize={{ base: "2.5rem", lg: "4rem" }}
//           color="#1db954"
//         />
//         <Text
//           border="2px solid white"
//           display={display}
//           fontSize={20}
//           px={4}
//           borderRadius={5}>
//           Follow
//         </Text>
//       </Flex>
//       <Table
//         size={{ base: "sm", md: "md", lg: "lg" }}
//         variant="simple"
//         colorScheme="black">
//         <Thead>
//           <Tr>
//             <Th w="0.4rem" border="1px solid pink"></Th>
//             <Th w="0.3rem" border="1px solid orange" fontSize="8px">
//               TITLE
//             </Th>
//             <Th>ALBUM</Th>
//             <Th>Date</Th>
//             <Th>
//               <Icon as={BiTime} fontSize={25} />
//             </Th>
//             {/* <Th></Th> */}
//           </Tr>
//         </Thead>
//         {data?.map((data, i) => {
//           return (
//             <Tbody key={i}>
//               <Tr>
//                 <Td border="none">
//                   <Text fontSize="10px">{i + 1}</Text>
//                 </Td>
//                 <Td w="0.4rem" border="1px solid red">
//                   <Flex gap={1}>
//                     <Image
//                       display="none"
//                       border="1px solid red"
//                       src={mi}
//                       h={{ base: 5, lg: 10 }}
//                       w={12}
//                     />{" "}
//                     <Text fontSize="8px" pt={2}>
//                       M.I Abaga - Bigger...
//                     </Text>
//                   </Flex>
//                 </Td>
//                 <Td w="0.4rem" border="1px solid green">
//                   <Text fontSize="8px">The Guy</Text>
//                 </Td>
//                 <Td w="0.3rem" border="1px solid blue">
//                   {" "}
//                   <Text fontSize="8px">24 Dec., 2022</Text>
//                 </Td>
//                 <Td w="0.4rem" border="1px solid yellow">
//                   {" "}
//                   <Text fontSize="8px">25.4</Text>
//                 </Td>
//                 <Td w="1rem" border="none">
//                   <Icon className="play" as={BsPlayFill} fontSize={25} />
//                 </Td>
//               </Tr>
//             </Tbody>
//           );
//         })}
//       </Table>
//     </TableContainer>
