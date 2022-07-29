import { Box, Flex, Text, Button } from "@chakra-ui/react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";

const Home = ({accounts}) => {
  let navigate = useNavigate();

  let isConnected = Boolean(accounts[0]);
  const handleMint = () =>{
    navigate(`/mint`);
  }

  return (
    <>
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
              color="white"
            >
              It's 2022. Can the Warranty card NFT's save the humans from
              destructive rampant NFT speculations ?
            </Text>
            {isConnected ? (
          <div>
            <Button
              backgroundColor="#D6517D"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="1.5em"
              marginTop="2em"
              onClick={handleMint}
            >
              Mint Now !
            </Button>
          </div>
        ) : (
          <Text
            marginTop="70px"
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 3px #000000"
            color="#D6517D"
          >
            You must be Connected to Mint !{" "}
          </Text>
        )}
          </div>
        </Box>
      </Flex>
      <div className="moving-background"></div>
    </>
  );
};

export default Home;
