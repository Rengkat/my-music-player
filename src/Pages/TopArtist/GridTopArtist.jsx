import { Box, Text, Image, Flex, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/all";

const GridTopArtist = ({ data }) => {
  console
    .log
    //  `/artists/${song?.artists[0]?.adamid}` : "/top-artists"
    ();
  return (
    <Box
      className="album-card"
      p={1}
      my={1}
      // artistDetail/:artistId
      color="white"
      // {`/${data?.artists[0]?.adamid}`}
      //   border="1px solid "
      bg="#212121"
      borderRadius={7}>
      <Link
        to={
          data.artists
            ? `/artistDetail/${data?.artists[0]?.adamid}`
            : "top-artist"
        }>
        <Image
          src={data?.images?.background}
          w="100%"
          h={{ base: "10rem", lg: "12rem" }}
          alt="Image"
          p={2}
          objectFit="cover"
          borderRadius="full"
        />
        <Box>
          <Center>
            <Text>{data?.subtitle.slice(0, 10)}</Text>
          </Center>
          <Center>
            <Text pt={2}>Artist</Text>
          </Center>
        </Box>
        <Box className="overlay-album">
          <BsFillPlayCircleFill fontSize={60} color="#1db954" />
        </Box>
      </Link>
    </Box>
  );
};

export default GridTopArtist;
