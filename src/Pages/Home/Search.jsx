import {
  Box,
  Grid,
  GridItem,
  Heading,
  Input,
  Center,
  InputGroup,
  InputLeftElement,
  SelectField,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/all";

const Search = () => {
  return (
    <Box
      ml={20}
      py="2rem"
      // h="12vh"
      bg="#121212"
      pos="sticky"
      zIndex={10}
      top={0}
      right={0}
      left={0}>
      <Center gap={8} className="me">
        <Heading as="h5" fontSize={30} color="white">
          Discover
        </Heading>
        <InputGroup w="40%" border="#121212" bg="#212121" borderRadius="3xl">
          <InputLeftElement
            pointerEvents="none"
            children={<BiSearch color="white" />}
          />
          <Input type="tel" placeholder="Search music, artist, album..." />
        </InputGroup>
        <SelectField
          w="15%"
          p="9px"
          borderRadius="4px"
          bg="#212121"
          color="white">
          <option value="">Select Genere</option>
          <option value="">Pop</option>
          <option value="">Afro</option>
          <option value="">Rap</option>
        </SelectField>
      </Center>
    </Box>
  );
};

export default Search;
