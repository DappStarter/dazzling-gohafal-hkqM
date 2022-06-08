require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain unknown half arctic obscure sunny'; 
let testAccounts = [
"0x99f94c7e3388235bdf985418378d75809b0205d5c0f888f49a4b4dba9ba03a67",
"0xde3edd3ae63e77130d60ef8711232fa71c0bc83f1c39e1afb26cd5754632b976",
"0x292aee0c0781a752823bb983dc10b39bf480906c3662bbb61280cf74babf5ad8",
"0x20c9e08da005b4c154fb78c2e8d1d38366f010e2107c920d3b28709204e6c0f1",
"0xb7a819d593b6895b31f9336ad972f6f0382289c3dc7248df5be7f49a7486e701",
"0x6b00204a2936cd96023bc89b6ccf359fa44c57d7f9c26adc26e73120f863a59f",
"0x22d6d9e2afc9bff9eef7d93643b4b703d9181fc2905f1bc735490cc5e5bb0cd3",
"0xd133d8f90762bf62e12523950f9f4f2fc010fc8876be9aa14b0fb13ab8c08dac",
"0xd465e69e88e3a6b01465d944606b728543c7cc78c65637e784dcd7d1cfdd14d4",
"0x620ad86377ed19fdacea2485b6d50d180475ba70df8536cb12bfde6fdc597364"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

