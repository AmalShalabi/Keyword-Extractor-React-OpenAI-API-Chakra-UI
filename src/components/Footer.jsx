import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from '../assets/openai.png'

const Footer = () => {
  return (
    <Box  bg="blue.800">
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo}  width={5}  />
        <Text color="white" >Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;