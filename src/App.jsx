import { Text } from "@chakra-ui/react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider className="App">
      <Text>Hello</Text>
    </ChakraProvider>
  );
}

export default App;
