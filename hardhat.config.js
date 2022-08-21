require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.9",
    defaultNetwork: "rinkeby",
    networks: {
        rinkeby: {
            url: process.env.ALCHEMY_RINKEBY_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
        mumbai: {
            url: process.env.ALCHEMY_POLYGON_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
}
