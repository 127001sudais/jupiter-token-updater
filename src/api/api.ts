import axios from 'axios';
import {LIQUIDITY_POOL_API,JUPITER_STRICT} from '../constants/constant';
require('dotenv').config();

// Function to get new token listings
export async function getTokens() {
     if (!JUPITER_STRICT) {
        throw new Error('JUPITER_STRICT is not defined');
    }
    try {
        const response = await axios.get(JUPITER_STRICT);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch tokens: ${error}`);
    }
}

// Function to query liquidity pools
export async function getLiquidityPools() {
     if (!LIQUIDITY_POOL_API) {
        throw new Error('TOKENS_API is not defined');
    }
    try {
        const response = await axios.get(LIQUIDITY_POOL_API);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch liquidity pools: ${error}`);
    }
}

// Function to process tokens
export async function processTokens() {
    const tokens = await getTokens();
    // console.log('Tokens:', tokens);
    return tokens;
}

// Function to process liquidity pools
export async function processLiquidityPools() {
    const liquidityPools = await getLiquidityPools();
    console.log('Liquidity Pools:', liquidityPools);
}
