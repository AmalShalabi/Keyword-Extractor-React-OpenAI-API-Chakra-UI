import React from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInPut from "./components/TextInPut";

const App = () => {
  return (
    <Box bg="blue.800" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent >
        <Header />
        <TextInPut />
        <Footer  />
      </Container>
    </Box>
  );
};

export default App;
