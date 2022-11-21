import { Box, Image, Center, Text, Icon, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  MdFavorite,
  BsFillFileMusicFill,
  BsBarChartLineFill,
  FaMedal,
} from "react-icons/all";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <Box>
      {/* logo */}
      <Center mt={8} gap={2}>
        <Image src={logo} alt="Logo-Image" h={12} w={12} />
        <Text fontSize={"1.7rem"} fontWeight="bold" color="#1db954">
          Soundify
        </Text>
      </Center>
      {/* NAVS */}
      <Box ml={6} mt={8} lineHeight={10}>
        <NavLink to={"/"} className="nav">
          <Flex mb={3}>
            <Center gap={3}>
              <Icon as={AiFillHome} color="white" opacity="0.7" />
              <Text>Home</Text>
            </Center>
          </Flex>
        </NavLink>
        <NavLink to={"/top-chart"} className="nav">
          <Flex w="80%" mb={3}>
            <Center gap={3}>
              <Icon as={BsBarChartLineFill} color="white" opacity="0.7" />
              <Text>Top Chart</Text>
            </Center>
          </Flex>
        </NavLink>
        <NavLink to={"/albums"} className="nav">
          <Flex w="80%" mb={3}>
            <Center gap={3}>
              <Icon as={BsFillFileMusicFill} color="white" opacity="0.7" />
              <Text>Albums</Text>
            </Center>
          </Flex>
        </NavLink>
        <NavLink to={"/top-artist"} className="nav">
          <Flex w="80%" mb={3}>
            <Center gap={3}>
              <Icon as={FaMedal} color="white" opacity="0.7" />
              <Text>Top Artist</Text>
            </Center>
          </Flex>
        </NavLink>
        <NavLink to={"/favorite"} className="nav">
          <Flex w="80%" mb={3}>
            <Center gap={3}>
              <Icon as={MdFavorite} color="white" opacity="0.7" />
              <Text>Favorite</Text>
            </Center>
          </Flex>
        </NavLink>
      </Box>
    </Box>
  );
};

export default NavBar;
