import { Keypair } from '@solana/web3.js';
import fs from 'fs';
import { logError } from './utils';

/**
 * Loads a wallet from a local keypair file or creates a new one if it does not exist.
 * @returns {Promise<Keypair>} The Solana wallet keypair.
 */
export async function setupWallet(): Promise<Keypair> {
  try {
    const keypairPath = process.env.KEYPAIR_PATH || 'wallet/keypair.json';
    let wallet: Keypair;

    if (fs.existsSync(keypairPath)) {
      const keypairString = fs.readFileSync(keypairPath, 'utf8');
      const secretKey = Uint8Array.from(JSON.parse(keypairString));
      wallet = Keypair.fromSecretKey(secretKey);
    } else {
      wallet = Keypair.generate();
      fs.writeFileSync(keypairPath, JSON.stringify(Array.from(wallet.secretKey)));
    }

    return wallet;

  } catch (error) {
  if (error instanceof Error) {
    logError('Failed to setup wallet', error);
  } else {
    console.error('An unknown error occurred:', error);
  }
  throw error; // Re-throw the error to be handled by the caller
}
}