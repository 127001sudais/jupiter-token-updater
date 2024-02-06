import { insertStmt } from "./sqlStatements";

export async function insertToken(token: any): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const { address, name, symbol } = token;
    insertStmt.run(address, name, symbol, (err: Error) => {
      if (err) {
        console.error("❌ Error inserting data:", err.message);
        reject(err.message);
      } else {
        resolve();
      }
    });
  });
}