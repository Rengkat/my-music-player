import { Box, Center, Icon, Image, Text } from "@chakra-ui/react";
import { MdOutlineFavoriteBorder } from "react-icons/all";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Track = ({ activeSong, addFavorite }) => {
  const dispatch = useDispatch();
  // const { artistId, songId } = useParams();

  // console.log(activeSong);
  return (
    <Box color="white">
      <Center gap={{ base: 10, lg: 5 }} fontSize={15}>
        <Image
          src={activeSong?.images?.coverart}
          w={{ base: 9, lg: 12 }}
          h={{ base: 9, lg: 12 }}
          border="1px solid white"
        />
        <Box>
          <Text>
            <Link to={`/song/${activeSong?.key}`}>
              {activeSong?.title?.slice(0, 12)}
            </Link>
          </Text>
          <Text>
            <Link to={`/artistDetail/${activeSong?.artists[0]?.adamid}`}>
              {activeSong?.subtitle?.slice(0, 12)}
            </Link>
          </Text>
        </Box>
        <Icon
          cursor="pointer"
          onClick={() => dispatch(addFavorite(activeSong))}
          as={MdOutlineFavoriteBorder}
          fontSize={30}
        />
      </Center>
    </Box>
  );
};

export default Track;
