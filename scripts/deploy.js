// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const DegenGhosts = await hre.ethers.getContractFactory("DegenGhosts");
  const degenGhosts = await DegenGhosts.deploy("Degen Ghosts", "DG", "https://gateway.pinata.cloud/ipfs/Qma7N8BkZcjiaFo9qYKA8tcketiFq8AthYZYCrqSMnhiu9/", "noreveul");

  await degenGhosts.deployed();

  console.log("DegenGhosts deployed to:", degenGhosts.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
