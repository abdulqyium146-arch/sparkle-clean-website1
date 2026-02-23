import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ── Old-domain redirect (client-side fallback) ──────────────────────────────
// The primary redirect is the server-side 301 in vercel.json / _redirects.
// This JS redirect catches any edge case where the old domain still serves
// this bundle (e.g. cached builds, preview deploys).
const { hostname, pathname, search, hash } = window.location;
if (hostname === "supremewashing.net" || hostname === "www.supremewashing.net") {
  window.location.replace(
    "https://kjsupremepressurewashing.com" + pathname + search + hash
  );
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}
