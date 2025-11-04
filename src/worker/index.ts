/**
 * Cloudflare Worker (ESM)
 * - Serves built Svelte SPA from ASSETS binding
 * - Provides minimal API stubs
 * - Adds security headers
 */
import { drizzle } from "drizzle-orm/d1";

export interface Env {
  ASSETS: Fetcher;
  DB?: D1Database; // Optional in Phase 1
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function withSecurityHeaders(res: Response): Response {
  const clone = new Response(res.body, res);
  clone.headers.set("x-frame-options", "DENY");
  clone.headers.set("x-content-type-options", "nosniff");
  clone.headers.set("referrer-policy", "no-referrer");
  // Allow assets and inline hashes if needed later; for Phase 1 keep simple.
  clone.headers.set(
    "content-security-policy",
    "default-src 'self'; img-src 'self' https://placehold.co data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'self';"
  );
  return clone;
}

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(req.url);
    try {
      if (url.pathname.startsWith("/api/health")) {
        return json({ ok: true, db_bound: Boolean(env.DB) });
      }

      if (url.pathname.startsWith("/api/tokens")) {
        if (!env.DB) return json({ tokens: {} });
        const db = drizzle(env.DB);
        // In Phase 1 just attempt to read tokens table if exists; otherwise empty.
        try {
          const rs = await env.DB.prepare("SELECT key, value FROM design_tokens").all();
          const tokens: Record<string, string> = {};
          (rs.results || []).forEach((r: any) => tokens[r.key] = r.value);
          return json({ tokens });
        } catch {
          return json({ tokens: {} });
        }
      }

      // Let ASSETS handle everything else (SPA)
      const assetRes = await env.ASSETS.fetch(req);
      // If not found, fall back to index.html for SPA routes
      if (assetRes.status === 404 && req.method === "GET" && req.headers.get("accept")?.includes("text/html")) {
        const indexReq = new Request(new URL("/", url).toString(), req);
        const indexRes = await env.ASSETS.fetch(indexReq);
        return withSecurityHeaders(indexRes);
      }
      return withSecurityHeaders(assetRes);
    } catch (err: any) {
      console.error("Worker error:", err);
      return json({ error: "Internal Error" }, 500);
    }
  }
};