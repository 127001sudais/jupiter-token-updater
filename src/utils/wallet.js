"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Keypair = require("@solana/web3.js").Keypair;
var constant_1 = require("../constants/constant");
console.log(constant_1.SECRET_KEY);
// let keypair = Keypair.generate();
// console.log(`New keypair generated:\nPublic Key: ${keypair.publicKey}\nPrivate Key: ${keypair.secretKey}`);
var secretKeyArray = constant_1.SECRET_KEY ? constant_1.SECRET_KEY.split(',').map(Number) : [];
if (secretKeyArray.length === 0) {
    throw new Error('SECRET_KEY must be set in the constant file');
}
var secretKey = new Uint8Array(secretKeyArray);
var retrievedKeypair = Keypair.fromSecretKey(secretKey);
console.log("Retrieved keypair from secret key:\nPublic Key: ".concat(retrievedKeypair.publicKey));
