# Solana Sniper Bot (Raydium)

This project is a Solana Sniper Bot designed to operate on the Raydium decentralized exchange. It's built with Node.js and uses the Solana Web3.js library for interacting with the Solana blockchain.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/127001sudais/solana-sniper-bot.git
   ```
2. Navigate to the project directory:
   ```
   cd solana-sniper-bot
   ```
3. Install the dependencies:
   ```
   npm i
   ```

## Configuration

Before running the bot, you need to configure. Open the `.env` file in the root directory and fill in your details:

```
TOKENS_API="https://api.raydium.io/v2/sdk/token/raydium.mainnet.json"
LIQUIDITY_POOL_API="https://api.raydium.io/v2/sdk/liquidity/mainnet.json"
```

## Running the Bot

To start the bot, run the following command in your terminal:

```
node index.js
```


This project uses the following license: `<license>`.

---

Please replace the placeholders (`<your_email@domain.com>`, `<license>`, etc.) with your actual details. Also, remember to include any other important information about your project, such as its features, usage examples, screenshots, etc.