import React from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import TextInPut from "./components/TextInPut";
import Footer from "./components/footer";

const App = () => {
  const  extractKeywords=(text)=>{
    console.log(text)
  }
  return (
    <Box bg="blue.800" color="white" height="100vh" paddingTop={8}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInPut extractKeywords={extractKeywords} />
        <Footer/>
      </Container>
    </Box>
  );
};

export default App;
