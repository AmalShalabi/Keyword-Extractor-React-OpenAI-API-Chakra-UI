import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from '../assets/openai.png'

const Footer = () => {
  return (
    <Box marginTop={3} bg="blue.800">
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} marginRight={1} width={5} borderRadius="md" />
        <Text color="white" margin={3}>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;