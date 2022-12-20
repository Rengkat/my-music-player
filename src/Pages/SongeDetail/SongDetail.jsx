import { useGetSongDetailQuery } from "../../Redux/api/Api";
import { Box, Text, Image, Center } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
const SongDetail = () => {
  const { songId } = useParams();
  const { data, isLoading, error } = useGetSongDetailQuery(songId);
  console.log(data);
  return (
    <Box bg="#121212">
      <Box p={5}>
        <Center gap={5}>
          <Image
            src={data?.images?.coverart}
            h="4rem"
            w="4rem"
            rounded="full"
          />
          <Box color="green" fontSize="xl">
            <Text>{data?.title}</Text>
            <Text>{data?.subtitle}</Text>
          </Box>
        </Center>
      </Box>
      <Box
        px={{ base: 8, lg: 10 }}
        ml={{ lg: 10 }}
        fontSize={{ base: "sm", lg: "3xl" }}>
        {data?.sections[1]?.type === "LYRICS"
          ? data?.sections[1]?.text.map((lyricLine, i) => {
              return (
                <Box color="white" key={`lyric-line${lyricLine}-${i}`}>
                  <Text>{lyricLine}</Text>
                </Box>
              );
            })
          : "Sorry, No lyrics "}
      </Box>
      <Box
        pb="10rem"
        color="green"
        pt={8}
        ml={{ base: 8, lg: 20 }}
        fontSize={{ base: "sm", lg: "xl" }}>
        <Text>{data?.sections[1]?.footer}</Text>
      </Box>
    </Box>
  );
};

export default SongDetail;
