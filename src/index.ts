import { Connection, clusterApiUrl } from '@solana/web3.js';
import { processLiquidityPools,processTokens } from './api/api';

// Define the network to connect to
const network = clusterApiUrl('devnet');

// Create a connection to the network
const connection = new Connection(network);

// Define an async function to log the connection
async function logConnection() {
    console.log('Connected to network:', network);
}


(async function main() {
    try {
        await logConnection();
        await processTokens();
        await processLiquidityPools()
    } catch (error) {
        console.error('Error in main function:', error);
    }
})();

