import { dbConnection } from "../dbConnection";


export const insertStmt = dbConnection.prepare(
  "INSERT INTO solana_jupiter_tokens (address, name, symbol) VALUES (?, ?, ?)"
);

export const selectStmt = dbConnection.prepare(
  "SELECT * FROM solana_jupiter_tokens WHERE address = ? AND name = ? AND symbol = ?"
);