# Technical Planning & Architecture Note

## Page / Route List
1. **Home (`/`)**: High-converting SaaS landing page highlighting platform value and quick navigation.
2. **Opportunities Explorer (`/internships`)**: Searchable and filterable grid of remote contracts with domain categories.
3. **Opportunity Detail (`/opportunities/:id`)**: Dynamic route rendering comprehensive role descriptions and expectations.
4. **Application Form (`/opportunities/:id/apply`)**: Validated multi-field form capturing applicant details.
5. **My Applications (`/my-applications`)**: Client-side state view tracking submitted applications via `localStorage`.
6. **Contact & About (`/about`, `/contact`)**: Platform mission, compliance notes, and support form.
7. **404 Catch-All (`*`)**: Graceful fallback for non-existent routes.

## Component Tree Sketch
- `App` (Global router & application state orchestrator)
  ├── `Navbar` (Glassmorphism navigation with dynamic counter badge)
  ├── `Routes` / Page components (`HomePage`, `InternshipsPage`, `DetailPage`, `ApplyPage`, etc.)
  └── `Footer` (Platform compliance & architecture info)

## State Strategy
- **Local vs. Shared State**: Component-level state (`useState`, `useEffect`) handles search inputs, filtering, and form validation. Shared state (`myApplications` synchronized with `localStorage`) ensures user applications persist across browser reloads without requiring a global state library or heavy Redux setup.