# Baseball Workers + Svelte + Drizzle (Phase 1)

Minimal scaffold that **deploys on first try** — static SPA via Svelte, served by a Cloudflare Worker with Assets; optional D1/Drizzle ready for Phase 2.

## Quickstart

```bash
# 1) Install deps
npm i

# 2) (Optional for local DB) create D1 for dev
npm run db:create
npm run db:migrate

# 3) Dev
npm run dev

# 4) Deploy
npm run deploy
```

Notes:
- D1 binding is **dev-only** in `wrangler.jsonc` so production deploy never fails. In Phase 2, we'll add your production DB binding.
- All routes are hash-based in the SPA (e.g. `#/news`).

## API

- `GET /api/health` → `{ ok: true, db_bound: boolean }`
- `GET /api/tokens` → `{ tokens: { ... } }` (safe if table not created)