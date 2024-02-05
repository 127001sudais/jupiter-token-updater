import dbConnection from "./dbConnection";

export async function storeData(data: any[]): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    console.log("⏳ Storing data...");
    const stmt = dbConnection.prepare(
      "INSERT INTO solana_jupiter_tokens (address, name, symbol) VALUES (?, ?, ?)"
    );
    for (const token of data) {
      const { address, name, symbol } = token;
      stmt.run(address, name, symbol);
    }
    stmt.finalize((err) => {
      if (err) {
        console.error("❌ Error storing data:", err.message);
        reject(err.message);
      } else {
        console.log("✅ Data stored successfully!");
        resolve();
      }
    });
  });
}