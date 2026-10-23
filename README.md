# SkillBridge Explorer — API-Integrated Listings Search & Filter

A production-grade React application featuring asynchronous data fetching, 300ms debounced search, category filtering, pagination, and distinct UI states (loading, error, and empty states)., and WCAG 2.1 AA accessibility compliance.
---

## 🛠️ Tech Stack & Tools
- **React (v18+)** (`useState`, `useEffect`, `useMemo`)
- **Vite** (Build tool & bundler)
- **CSS3** (Modern responsive layout with clean UI theme, Navbar, and Footer)
- **Public API:** JSONPlaceholder Users API (`https://jsonplaceholder.typicode.com/users`) simulating professional opportunities, with a built-in offline fallback mock dataset.
- **Audit Tools:** Chrome Lighthouse, axe DevTools, WebAIM Contrast Checker

---

## 🚀 Setup & Run Instructions (For Reviewers)

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/mukher181/skillbridge-explorer.git](https://github.com/mukher181/skillbridge-explorer.git)

   ---

---

## ♿ Accessibility (a11y) Audit & Remediation

This project underwent a comprehensive WCAG 2.1 AA accessibility audit using Chrome Lighthouse, axe DevTools, and manual keyboard navigation testing.

### Audit & Remediation Progress:
- **Chrome Lighthouse Score:** Improved from **85** to **100**.
- **axe DevTools Scan:** Successfully resolved all initial automatic issues (including 6 color contrast violations on listing location badges), achieving **0 violations**.
- **Manual Keyboard Testing:** Verified full sequential keyboard navigation (`Tab` and `Shift + Tab`), correct focus management, and element activation (`Enter` / `Space`) across all search inputs, category filter buttons, and pagination controls with custom `:focus-visible` outlines.

### Summary of Improvements:
- **Color Contrast:** Resolved all contrast violations by adjusting CSS text color variables (e.g., `.location`) to meet WCAG AA standards (minimum 4.5:1 ratio).
- **Semantics & Landmarks:** Wrapped core page contents in `<main>` semantic landmarks and restructured heading tags (`<h1>`, `<h2>`) sequentially.
- **Form Controls:** Added proper `aria-label` and associated `<label>` attributes to the search bar and filter controls.
- **Screen Reader Live Announcements:** Implemented `aria-live="polite"` regions so dynamically changing search results are announced automatically.
- **Keyboard Navigation:** Verified complete keyboard accessibility with clear, high-contrast focus indicators.