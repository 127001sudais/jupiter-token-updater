import sqlite3 from "sqlite3";

export const dbConnection = new sqlite3.Database('./tokens.db', (err) => {
 if (err) {
     console.error(err.message);
 } else {
     console.log('✅✅✅ Database connected');
 }
});
