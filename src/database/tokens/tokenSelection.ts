import { selectStmt } from "./sqlStatements";

export async function selectToken(token: any): Promise<any | null> {
  return new Promise<any | null>((resolve, reject) => {
    const { address, name, symbol } = token;
    selectStmt.get([address, name, symbol], (err, row) => {
      if (err) {
        console.error("❌ Error checking data:", err.message);
        reject(err.message);
      } else {
        resolve(row);
      }
    });
  });
}