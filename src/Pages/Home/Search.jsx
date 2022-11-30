import {
  Box,
  Heading,
  Input,
  InputGroup,
  Flex,
  InputLeftElement,
  SelectField,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/all";
import { genres } from "../../assets/constants";

const Search = () => {
  return (
    <Box
      // ml={20}
      py="2rem"
      // h="12vh"
      bg="#121212"
      pos="sticky"
      zIndex={10}
      top={0}
      right={0}
      left={0}>
      <Flex gap={{ base: 2, lg: 8 }} justify="space-around">
        <Heading
          display={{ base: "none", lg: "block" }}
          as="h5"
          ml="3rem"
          fontSize={30}
          color="white">
          Discover
        </Heading>
        <SelectField
          fontSize={{ base: 12, lg: 18 }}
          w={{ base: "30%", lg: "18%" }}
          p="9px"
          borderRadius="4px"
          bg="#212121"
          color="white">
          <option value="">Select Genere</option>
          {genres.map((genre) => {
            return (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            );
          })}
        </SelectField>
        <InputGroup
          w={{ base: "60%", lg: "50%" }}
          border="#121212"
          bg="#212121"
          borderRadius="3xl">
          <InputLeftElement
            pointerEvents="none"
            children={<BiSearch color="white" />}
          />
          <Input type="tel" placeholder="Search music, artist, album..." />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Search;
