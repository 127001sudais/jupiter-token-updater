/** THIS CODE IS NOT BEING USED, A MODULARIZED VERSION OF THIS CODE IS BEING USED 
 * IN THE FOLDER src/database/token/storeData.ts
*/

import {dbConnection} from "./dbConnection";

export async function storeData(data: any[]): Promise<any[]> {
  console.log("⏳⌛⏳ Checking and storing data...");

  const stmtInsert = dbConnection.prepare(
    "INSERT INTO solana_jupiter_tokens (address, name, symbol) VALUES (?, ?, ?)"
  );
  const stmtSelect = dbConnection.prepare(
    "SELECT * FROM solana_jupiter_tokens WHERE address = ? AND name = ? AND symbol = ?"
  );

  let newTokensInserted: any[] = [];

  const checkPromises = data.map((token) => {
    return new Promise<void>((resolve, reject) => {
      const { address, name, symbol } = token;
      stmtSelect.get([address, name, symbol], (err, row) => {
        if (err) {
          console.error("❌ Error checking data:", err.message);
          reject(err.message);
        } else if (!row) {
          stmtInsert.run(address, name, symbol, (err: Error) => {
            if (err) {
              console.error("❌ Error inserting data:", err.message);
              reject(err.message);
            } else {
              newTokensInserted.push({ address, name, symbol });
            }
            resolve();
          });
        } else {
          resolve();
        }
      });
    });
  });

  try {
    await Promise.all(checkPromises);

    stmtInsert.finalize((err) => {
      if (err) {
        console.error("❌ Error storing data:", err.message);
        throw err;
      } else {
        if (newTokensInserted.length > 0) {
          console.log(`✅ ${newTokensInserted.length} new tokens 🪙 stored successfully, excluding duplicates.`);
          console.log('Newly listed tokens:', newTokensInserted);
        } else {
          console.log("⚠️ No new tokens 🪙 found!!!");
        }
      }
    });
  } catch (error) {
    console.error("❌ Error during data processing:", error);
    throw error;
  } finally {
    stmtSelect.finalize();
  }

  return newTokensInserted;
}