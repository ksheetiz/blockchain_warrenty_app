const hre = require("hardhat");

async function main() {
  const WarrentyNFT = await hre.ethers.getContractFactory("WarrentyNFT");
  const warrentyNFT = await WarrentyNFT.deploy();

  await warrentyNFT.deployed();

  console.log("WarrentyNFT deployed to : ", warrentyNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
