import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ── Old-domain client-side redirect (fallback) ───────────────────────────────
// The primary 301 is handled server-side in vercel.json.
// This catches any edge case where the old domain still serves this bundle.
const { hostname, pathname, search, hash } = window.location;
if (hostname === "supremewashing.net" || hostname === "www.supremewashing.net") {
  window.location.replace(
    "https://kjsupremepressurewashing.com" + pathname + search + hash
  );
} else {
  const rootEl = document.getElementById("root");
  if (!rootEl) {
    throw new Error(
      '[KJS] Mount failed: <div id="root"> not found in index.html'
    );
  }
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
