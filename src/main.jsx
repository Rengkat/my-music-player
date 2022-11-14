import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./Redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    background: {
      ligtBlack: "#212121",
      darkBlack: "#121212",
      green: "#1db954",
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </Provider>
);
