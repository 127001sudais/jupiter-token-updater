import { Connection, clusterApiUrl } from '@solana/web3.js';
import { processLiquidityPools, processTokens } from './api/api';

const network = clusterApiUrl('devnet');

const connection = new Connection(network);

async function logConnection() {
    try {
        console.log('Connected to network:', network);
    } catch (error) {
        console.error('Error in logConnection:', error);
    }
}

async function processData() {
    try {
        await processTokens();
        await processLiquidityPools();
    } catch (error) {
        console.error('Error in processData:', error);
    }
}

async function main() {
    try {
        await logConnection();
        await processData();
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

setInterval(main, 30000);
