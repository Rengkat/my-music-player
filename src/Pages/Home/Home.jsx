import { Grid, GridItem, Text, Heading, Flex, Box } from "@chakra-ui/react";
import Hero from "../../Component/Hero";
import TopArtist from "./TopArtist";
import TopChart from "./TopChart";
import { BiSearch } from "react-icons/all";
import Search from "./Search";
import MusicCard from "./MusicCard";
const Home = () => {
  const card = [1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  return (
    <Grid gridTemplateColumns="1fr 1fr 30%" bg="#121212" pb="7rem">
      {/* =============MAIN========= */}
      <GridItem gridColumn="1/3" colo="white" ml={12}>
        {/* ========== SEARCHING ============ */}
        <Search />
        {/* ===============MUSIC CARD========= */}
        <Grid gridTemplateColumns="repeat(4,1fr)" ml={"9rem"} gap={5} p={4}>
          {card.map((card) => {
            return <MusicCard key={card} card={card} />;
          })}
        </Grid>
      </GridItem>
      {/* ============LEFT MAIN TOP CHART AND TOP ARTIST===== */}
      <GridItem
        gridTemplateColumns="3/4"
        color="white"
        bg="#212121"
        // h="100vh"
        pos="fixed"
        top={0}
        right={0}
        overflow="hidden"
        bottom={0}>
        <Heading as="h4" fontSize={30} color="white" px={7} py={5}>
          Top Chart
        </Heading>
        {/* ===========ITERATING TOP CHART============ */}
        <Grid overflow="hidden">
          {card.slice(0, 4).map((card, i) => {
            return <TopChart key={i} />;
          })}
          <Flex justify="end" px={6} pb={1}>
            <Text>SEE MORE</Text>
          </Flex>
        </Grid>
        {/* =============ITERATING TOP ARTIST ====*/}
        <Box>
          <Heading as="h4" fontSize={25} color="white" pl={7} pb={4}>
            Popular Artist
          </Heading>
          <Flex
            overflow="hidden"
            w="22rem"
            mx="auto"
            gap={2}
            justify="space-around"
            p={0}>
            {card.slice(0, 3).map((card, i) => {
              return (
                <Box key={i}>
                  <TopArtist key={i} />
                </Box>
              );
            })}
          </Flex>
          <Flex justify="end" px={6} py={3}>
            <Text>SEE MORE</Text>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;
