import dbConnection from "./dbConnection";

export async function storeData(data: any[]): Promise<void> {
  console.log("⏳⌛⏳ Checking and storing data...");

  const stmtInsert = dbConnection.prepare(
    "INSERT INTO solana_jupiter_tokens (address, name, symbol) VALUES (?, ?, ?)"
  );
  const stmtSelect = dbConnection.prepare(
    "SELECT * FROM solana_jupiter_tokens WHERE address = ? AND name = ? AND symbol = ?"
  );

  let newRowsInserted = 0;

  const checkPromises = data.map((token) => {
    return new Promise<void>((resolve, reject) => {
      const { address, name, symbol } = token;
      stmtSelect.get([address, name, symbol], (err, row) => {
        if (err) {
          console.error("❌ Error checking data:", err.message);
          reject(err.message);
        } else if (!row) {
          stmtInsert.run(address, name, symbol);
          newRowsInserted++;
        }
        resolve();
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
        if (newRowsInserted > 0) {
          console.log(`✅ ${newRowsInserted} new tokens 🪙 stored successfully, excluding duplicates.`);
        } else {
          console.log("⚠️ No new tokens 🪙 found!!");
        }
      }
    });
  } catch (error) {
    console.error("❌ Error during data processing:", error);
    throw error;
  } finally {
    stmtSelect.finalize();
  }
}