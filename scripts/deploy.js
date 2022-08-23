const { ethers } = require("hardhat");

async function main() {
  const nftContract = await ethers.getContractFactory("GameItem");

  const deployedNFTContract = await nftContract.deploy();

  await deployedNFTContract.deployed();

  console.log("NFT Contract Address: ", deployedNFTContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("------------->>>>>>\n", error);
    process.exit(1);
  });
