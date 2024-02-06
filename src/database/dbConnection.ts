import sqlite3 from "sqlite3";

console.log('⏳ Connecting SQLite database...');

const dbConnection = new sqlite3.Database('./tokens.db', (err) => {
 if (err) {
     console.error(err.message);
 } else {
     console.log('SQLite connected ✅');
 }
});

export default dbConnection;
