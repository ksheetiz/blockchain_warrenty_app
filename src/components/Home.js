import { Box, Button, Flex, Text, Image, Link, Spacer } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex justify="space-between" align="center">
      <Box width="520px" marginTop="5em" marginLeft="1.5em">
        <div>
          {/* <Text align="left" fontSize="2em" textShadow="0 5px #000000">
            RoboPunks
          </Text> */}
          <Text
            fontSize="2em"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            It's 2022. Can the Warrenty card NFT's save the humans from
            destructive rampant NFT speculations ?
          </Text>
          <Text
            marginTop="1em"
            fontSize="2em"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 3px #000000"
            color="#D6517D"
          >
            You must be Connected to Mint !{" "}
          </Text>
        </div>
      </Box>
    </Flex>
  );
};

export default Home;
