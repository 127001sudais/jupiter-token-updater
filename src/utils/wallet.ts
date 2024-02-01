const { Keypair } = require("@solana/web3.js");
import { SECRET_KEY } from "../constants/constant";

let secretKeyArray: number[] = SECRET_KEY ? SECRET_KEY.split(',').map(Number) : [];

let secretKey = new Uint8Array(secretKeyArray);

let retrievedKeypair = Keypair.fromSecretKey(secretKey);
console.log(`Retrieved keypair from secret key:\nPublic Key: ${retrievedKeypair.publicKey}`);
