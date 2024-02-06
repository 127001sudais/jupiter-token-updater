import { Connection, clusterApiUrl } from '@solana/web3.js';
import { processLiquidityPools,processTokens } from '../api/api';

import {dbConnection} from '../database/dbConnection';
import { storeData } from '../database/tokens/storeData';

const network = clusterApiUrl('devnet');

const connection = new Connection(network);

 async function logConnection() {
    try {
        console.log('⏳ Connecting....to network:', network);
        console.log('✅ Connected to network:', network);
    } catch (error) {
        console.error('❌ Error in logConnection:', error);
    }
}

async function processData() {
    try {
        const apiResponse = await processTokens();
        await storeData(apiResponse);
        // await processLiquidityPools();
        console.log('✅ Data processed successfully!')
    } catch (error) {
        console.error('Error in processData:', error);
    }
}

export async function main() {
    try {
        console.log('🚀 Starting main function...')
        await dbConnection;
        await logConnection();
        await processData();
    } catch (error) {
        console.error('❌ Error in main function:', error);
    }
}