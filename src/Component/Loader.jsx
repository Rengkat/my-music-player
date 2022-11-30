import { Box, Flex } from "@chakra-ui/react";
import { SpinnerCircularFixed } from "spinners-react";

const Loader = () => {
  return (
    <Box h="100vh" bg="#121212">
      <Flex mx="auto" h="10rem" w="10rem" justifySelf="center" mt="5rem">
        <SpinnerCircularFixed
          size={{ base: 45, lg: 60 }}
          thickness={{ base: 100, lg: 117 }}
          speed={117}
          color="#36ad47"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </Flex>
    </Box>
  );
};

export default Loader;
