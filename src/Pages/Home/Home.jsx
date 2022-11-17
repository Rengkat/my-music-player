import { Grid, GridItem, Text, Heading, Flex, Box } from "@chakra-ui/react";
import TopArtist from "./TopArtist";
import TopChart from "./TopChart";
import Search from "./Search";
import MusicCard from "./MusicCard";
import { Link } from "react-router-dom";
const Home = () => {
  const card = [1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  return (
    <Flex w="100%" bg="pink" flexDir={{ base: "column-reverse", lg: "row" }}>
      <Box w={{ base: "100%", lg: "73%" }}>
        <Box bg="#121212" pb={"10rem"}>
          <Grid
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            ml={{ base: "0rem", md: "12rem" }}
            gap={5}
            p={5}>
            {card.map((card) => {
              return <MusicCard key={card} card={card} />;
            })}
          </Grid>
        </Box>
      </Box>
      <Box
        bg="#212121"
        color="white"
        w={{ base: "100%", lg: "27%" }}
        h={{ lg: "100vh" }}
        pos={{ base: "relative", md: "fixed" }}
        py={{ base: "2rem", lg: 0 }}
        top={0}
        right={0}
        bottom={0}>
        <Heading as="h4" fontSize={30} color="white" px={7} py={5}>
          Top Chart
        </Heading>
        {/* ===========ITERATING TOP CHART============ */}
        <Grid overflow="hidden" pb={{ base: 7, lg: 0 }}>
          {card.slice(0, 4).map((card, i) => {
            return <TopChart key={i} />;
          })}
          <Flex justify="end" px={10} pb={1}>
            <Text>
              <Link to="/top-chart">SEE MORE</Link>
            </Text>
          </Flex>
        </Grid>
        {/* =============ITERATING TOP ARTIST ====*/}
        <Box>
          <Heading
            as="h4"
            fontSize={25}
            color="white"
            pl={7}
            pb={{ base: "2rem", lg: 3 }}>
            Popular Artist
          </Heading>
          <Flex
            overflow="hidden"
            w={{ base: "100%", lg: "25rem" }}
            px={{ base: 8, lg: 3 }}
            // mx="auto"
            gap={2}
            justify="space-around"
            // px={5}
          >
            {card.slice(0, 3).map((card, i) => {
              return (
                <Box key={i}>
                  <TopArtist key={i} />
                </Box>
              );
            })}
          </Flex>
          <Flex justify="end" px={10} pt={3}>
            <Link to="/top-artist">SEE MORE</Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;

//  <Grid
//       gridTemplateColumns={{
//         base: "1fr",
//         sm: "1fr",
//         md: "1fr 1fr",
//         lg: "1fr 1fr 30%",
//       }}
//       bg="#121212"
//       pb="7rem">
//       {/* =============MAIN========= */}
//       <GridItem
//         gridColumn="1/3"
//         className="me"
//         colo="white"
//         ml={{ base: 0, md: 12 }}>
//         {/* ========== SEARCHING ============ */}
//         {/* <Search /> */}
//         {/* ===============MUSIC CARD========= */}
//         <Grid
//           gridTemplateColumns={{
//             base: "repeat(2, 1fr)",
//             md: "repeat(3,1fr)",
//             lg: "repeat(4,1fr)",
//           }}
//           ml={{ base: "0rem", md: "9rem" }}
//           gap={5}
//           p={4}>
//           {card.map((card) => {
//             return <MusicCard key={card} card={card} />;
//           })}
//         </Grid>
//       </GridItem>
//       {/* ============LEFT MAIN TOP CHART AND TOP ARTIST===== */}
//       <GridItem
//         className="mi"
//         gridTemplateColumns="3/4"
//         color="white"
//         bg="#212121"
//         // h="100vh"
//         pos={{ base: "relative", md: "fixed" }}
//         top={0}
//         right={0}
//         overflow="hidden"
//         bottom={0}>
//         <Heading as="h4" fontSize={30} color="white" px={7} py={5}>
//           Top Chart
//         </Heading>
//         {/* ===========ITERATING TOP CHART============ */}
//         <Grid overflow="hidden">
//           {card.slice(0, 4).map((card, i) => {
//             return <TopChart key={i} />;
//           })}
//           <Flex justify="end" px={6} pb={1}>
//             <Text>
//               <Link to="/top-chart">SEE MORE</Link>
//             </Text>
//           </Flex>
//         </Grid>
//         {/* =============ITERATING TOP ARTIST ====*/}
//         <Box>
//           <Heading as="h4" fontSize={25} color="white" pl={7} pb={4}>
//             Popular Artist
//           </Heading>
//           <Flex
//             overflow="hidden"
//             w="22rem"
//             mx="auto"
//             gap={2}
//             justify="space-around"
//             p={0}>
//             {card.slice(0, 3).map((card, i) => {
//               return (
//                 <Box key={i}>
//                   <TopArtist key={i} />
//                 </Box>
//               );
//             })}
//           </Flex>
//           <Flex justify="end" px={6} py={3}>
//             <Link to="/top-artist">SEE MORE</Link>
//           </Flex>
//         </Box>
//       </GridItem>
//     </Grid>
