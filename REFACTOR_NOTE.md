# 🔍 Code Review & Refactor Note — SkillBridge Explorer

## 1. Before Concern (The Problem)
* **Component:** `src/App.jsx`
* **Issue Identified:** Monolithic state management and performance overhead during real-time filtering and pagination calculations. Without memoization, filtering and slicing large arrays on every keystroke in the search bar caused redundant recalculations and blocked the main thread.

---

## 2. The Refactor Solution
* **Action Taken:** Implemented **`useMemo`** hook to cache filtered items and paginated views. Added debounced search state (`debouncedSearch`) to prevent filtering execution on every single character keystroke, drastically reducing CPU cycles.

### 📝 Optimized Code Section (`src/App.jsx`)
```jsx
// Memoized filtering logic to prevent unnecessary re-computations
const filteredItems = useMemo(() => {
  return items.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const searchLower = debouncedSearch.toLowerCase();

    const matchesSearch = 
      item.title.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower) ||
      item.company.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });
}, [items, debouncedSearch, selectedCategory]);