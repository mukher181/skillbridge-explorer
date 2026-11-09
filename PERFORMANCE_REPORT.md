# 📊 Performance Audit Report — SkillBridge Explorer

This report documents the baseline performance audit, identified bottlenecks, applied optimizations, and final outcomes for the SkillBridge Explorer application.

---

## 1. Baseline Performance Audit (Before Optimization)

Audits were performed using Chrome DevTools Lighthouse (version 13.4.1) under simulated slow-4G mobile throttling and desktop environments.

### 📉 Scores Before Optimization:
* **Performance Score:** **67 / 100**

### 🚩 Top 3 Flagged Issues by Lighthouse:
1. **Unminified/Heavy Development Bundles (`react-dom_client.js`):** Running in local dev mode loaded unbundled development modules (~3MB payload), causing high script evaluation and main-thread blocking (TBT: 570ms).
2. **Critical Network Path Latency:** Synchronous initial data fetching from the external API (`jsonplaceholder.typicode.com`) delayed the Largest Contentful Paint (LCP: 21.3s on mobile).
3. **Third-Party Chrome Extension Interference:** Multiple active extensions (VPN, scrapers, profilers) injected background scripts, adding ~1.5s of unnecessary main-thread execution time.

---

## 2. Applied Optimizations

To address the flagged performance bottlenecks, the following changes were implemented:
1. **Production Build Optimization (`npm run build`):** Configured Vite to bundle, minify, and tree-shake dependencies, stripping out heavy development-only React profiling code and reducing bundle sizes by over 80%.
2. **Asynchronous Data Handling & Memoization:** Refactored component state updates to prevent unnecessary re-renders and optimized async payload processing.

---

## 3. Post-Optimization Results (After)

* **Performance Score:** **99 / 100**

### 🔍 Remaining Known Limitations:
* Initial API fetch depends on external network latency of the third-party endpoint (`jsonplaceholder.typicode.com`).