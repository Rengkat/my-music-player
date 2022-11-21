import {
  Box,
  Grid,
  GridItem,
  Heading,
  Input,
  Center,
  InputGroup,
  Flex,
  InputLeftElement,
  SelectField,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/all";

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
          ml="5rem"
          fontSize={30}
          color="white">
          Discover
        </Heading>
        <SelectField
          w={{ base: "30%", lg: "12%" }}
          p="9px"
          borderRadius="4px"
          bg="#212121"
          color="white">
          <option value="">Select Genere</option>
          <option value="">Pop</option>
          <option value="">Afro</option>
          <option value="">Rap</option>
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
