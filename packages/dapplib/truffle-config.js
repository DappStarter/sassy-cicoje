require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture stomach regret misery unhappy gown light army gas'; 
let testAccounts = [
"0x385cb55eec3b90a2e9f5026bff3dd4f015fe862e1617ce9537858219f62d1892",
"0x70a0b8fc9e547920300baef633a29e9ae2c965d823ca051ce98a3673a8224b2b",
"0x8fb841099104466a7767fcdfc9ff620bf294267a837f759272f864dd3dc606dd",
"0xf99374ab973f86ac5c0d43773b603c867924f61da5b953e23bd1c7126aae396c",
"0x3ddc08691f3e0aaef53c499f6b31cfaa002e34464f3ee5770e55e5ae808c6aa8",
"0x9d75801088f1f115750ba87b0d5b5e2345845e1ba389030a5a6c011369ebb2fb",
"0x98b20d767784284f41fce8be6013b57d5e35cae80d59c8700f93e86147e7fed6",
"0x4b9f41e2f8705436af92469747df41eb6e300b026ea4c96a09f2211566e8d6be",
"0xf5597629228b6c4f036aa773f6d930a7326bfc119d9070e62fc1d1cc903659fb",
"0x0b0b14c70d6e03db5e708d0b8d0865581fb864c29382b8affeaab9a4fa71b9ff"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
