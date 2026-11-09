import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

export default function BrowsePage({ items }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

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

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(start, start + itemsPerPage);
  }, [filteredItems, currentPage]);

  return (
    <div>
      <header className="explorer-header">
        <h1>Find Your Next Tech Opportunity</h1>
        <p>Discover and filter professional tech roles and remote contracts instantly with live API sync.</p>
      </header>

      <div className="controls-bar">
        <label htmlFor="search-input" className="sr-only">Search opportunities</label>
        <input 
          id="search-input"
          type="text" 
          placeholder="Search by keyword, title, company or category..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          aria-label="Search opportunities"
        />

        <div className="category-filters" role="group" aria-label="Category filters">
          {['All', 'Engineering', 'Design', 'Consulting', 'Security'].map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {filteredItems.length === 0 ? (
          <div className="empty-state">
            <h3>🔍 No Results Match Your Search</h3>
            <p>Try adjusting your search keywords or category filters.</p>
          </div>
        ) : (
          <>
            <div className="listings-grid">
              {currentItems.map(item => (
                <article key={item.id} className="listing-card">
                  <div className="card-top">
                    <span className="badge">{item.category}</span>
                    <span className="location">{item.location}</span>
                  </div>
                  <h2>{item.title}</h2>
                  <p className="company">{item.company}</p>
                  <p className="desc">{item.description}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <Link to={`/opportunities/${item.id}`} className="page-btn" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                      View Details & Apply
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <nav className="pagination" aria-label="Pagination Navigation">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="page-btn">Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="page-btn">Next</button>
              </nav>
            )}
          </>
        )}
      </div>
    </div>
  );
}