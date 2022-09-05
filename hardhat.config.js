// hardhat.config.js

require("@nomiclabs/hardhat-ethers");
require("dotenv").config()

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const NET_URL = process.env.NET_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const R_NET_URL = process.env.R_NET_URL;
const R_PRIVATE_KEY = process.env.R_PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    // This network is a test network, normally I use Ganache.
    local: {
      url: NET_URL,
      accounts: [PRIVATE_KEY]
    },
    test: {
      url: R_NET_URL,
      chainId: 5,
      accounts: [R_PRIVATE_KEY]
    }
  }
};
