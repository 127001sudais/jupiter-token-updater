import axios from 'axios';
require('dotenv').config();

const TOKENS_API = process.env.TOKENS_API;
const LIQUIDITY_POOL_API = process.env.LIQUIDITY_POOL_API;

// Function to get new token listings
export async function getTokens() {
     if (!TOKENS_API) {
        throw new Error('TOKENS_API is not defined');
    }
    try {
        const response = await axios.get(TOKENS_API);
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
    console.log('Tokens:', tokens);
}

// Function to process liquidity pools
export async function processLiquidityPools() {
    const liquidityPools = await getLiquidityPools();
    console.log('Liquidity Pools:', liquidityPools);
}
