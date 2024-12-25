require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    //sepolia: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/si60pp5twjv924wfgsJ1zRa11Ru1UDtI',
      // url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['3f878381f758b76848dcce2f9c5da9f541db19fc830cd61fb3d026caf2193aff'],
    },
  },
};