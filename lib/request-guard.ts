import { NextRequest } from "next/server";

/**
 * Rejects cross-site POSTs to unauthenticated form endpoints by requiring the
 * Origin (or, failing that, Referer) header to match the request's own host.
 * Browsers always send Origin on cross-origin fetch/form POSTs, so this is a
 * lightweight CSRF mitigation that doesn't require a token/session.
 */
export function isSameOriginRequest(req: NextRequest): boolean {
  const host = req.headers.get("host");
  if (!host) return false;

  const origin = req.headers.get("origin");
  if (origin) {
    try {
      return new URL(origin).host === host;
    } catch {
      return false;
    }
  }

  const referer = req.headers.get("referer");
  if (referer) {
    try {
      return new URL(referer).host === host;
    } catch {
      return false;
    }
  }

  // No Origin/Referer at all (e.g. some non-browser clients) — be permissive
  // here since this only guards public form endpoints, not authenticated ones.
  return true;
}
