import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

// Persist the SQLite file at the project root (./data/waitlist.db).
const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "waitlist.db");

declare global {
  var __waitlistDb: Database.Database | undefined;
}

function createConnection() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      email      TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
  return db;
}

// Reuse a single connection across hot reloads in dev.
export const db = global.__waitlistDb ?? createConnection();
if (process.env.NODE_ENV !== "production") {
  global.__waitlistDb = db;
}
