import { Box, Button, Flex, Text, Image, Link, Spacer } from "@chakra-ui/react";
import logo from "../assets/Shiba_Inu-removebg-preview.png";

const NavBar = () => {
  return (
    <Flex justify="space-between" align="center" padding="1em">
      <Flex align="center">
        <Image src={logo} boxSize="5em" width="7em" />
        <Box>
          <Text fontSize="1.5em">WARRENTY MINTER</Text>
        </Box>
      </Flex>
      <Flex
        justify="space-around"
        align="center"
        width="40%"
        margin="-0.5em 0 0 0"
      >
        <Box margin="0 15px" cursor="pointer">
          About
        </Box>
        <Spacer />
        <Box margin="0 15px" cursor="pointer">
          Mint
        </Box>
        <Spacer />
        <Box margin="0 15px" cursor="pointer">
          Team
        </Box>
        <Spacer />
        <Button
          backgroundColor="#D6517D"
          borderRadius="5px"
          boxShadow="0px 2px 2px 1px #0F0F0F"
          color="white"
          cursor="pointer"
          fontFamily="inherit"
          padding="15px"
          margin="0 15px"
          //   onClick={connectAccount}
        >
          Connect
        </Button>
        {/* Connect */}
        {/* {isConnected ? (
          <Box margin="0 15px">Connected</Box>
        ) : (
          <Button
            backgroundColor="#D6517D"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            onClick={connectAccount}
          >
            Connect
          </Button>
        )} */}
      </Flex>
    </Flex>
  );
};

export default NavBar;
