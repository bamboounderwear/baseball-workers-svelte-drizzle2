-- Initial tables for Phase 1 (safe to apply multiple times)
CREATE TABLE IF NOT EXISTS design_tokens (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  created_at TEXT DEFAULT (strftime('%s','now'))
);