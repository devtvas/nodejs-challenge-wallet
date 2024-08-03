//importando as dependencias
const bip32 = require("bip32")
const bip39 = require("bip39")
const bitcoin = require("bitcoinjs-lib")

//definir a rede 
const network = bitcoin.networks.testnet

//derivacao de carteiras HD
const path = `m/49'/1'/0'/0`