import { Box, Button, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import logo from "../assets/output-onlinepngtools.png";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <Flex justify="space-between" align="center" padding="1em">
      <Flex align="center">
        <Image src={logo} boxSize="3em" width="3em" />
        <Box>
          <Link to="/" className="link">
            <Text fontSize="1.5em" color="white" marginLeft="10">
              WARRANTY MINTER
            </Text>
          </Link>
        </Box>
      </Flex>
      <Flex
        justify="space-around"
        align="center"
        width="40%"
        margin="-0.5em 0 0 0"
      >
        <Box margin="0 15px" cursor="pointer">
          <Link to="/about" className="link">
            <Text textDecoration="none" color="white">
              About
            </Text>
          </Link>
        </Box>
        <Spacer />
        <Box margin="0 15px" cursor="pointer">
          <Link to="/mint" className="link">
            <Text color="white">Mint</Text>
          </Link>
        </Box>
        <Spacer />
        <Box margin="0 15px" cursor="pointer">
          <Link to="/team" className="link">
            <Text color="white">Team</Text>
          </Link>
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
