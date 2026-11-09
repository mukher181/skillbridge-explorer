# Known Issues Found & Fixed During Development

### Bug 1: Cumulative Layout Shift (CLS) Spike on Initial API Fetch
- **Symptoms**: Lighthouse audit reported a high CLS score (0.903) because opportunity cards loaded asynchronously from the external JSONPlaceholder API, pushing down the layout.
- **Root Cause**: The `.listings-grid` container lacked a reserved minimum height during the initial data-fetching state.
- **Fix**: Added `min-height: 500px` to `.listings-grid` and `.main-container` in `src/App.css` to reserve layout space beforehand, dropping CLS to `0`.

### Bug 2: Esbuild Compatibility Error During Production Build
- **Symptoms**: Running `npm run build` threw an error: `Failed to load transformWithEsbuild. Cannot find package 'esbuild'`.
- **Root Cause**: Vite 8+ configuration changes required explicit esbuild installation or simplified rollup options.
- **Fix**: Installed `-D esbuild` and streamlined `vite.config.js` to rely on standard Vite esbuild bundling without redundant transformer plugins.
