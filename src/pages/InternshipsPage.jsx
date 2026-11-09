import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

export default function InternshipsPage({ items }) {
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
        <h1>Explore Tech Opportunities</h1>
        <p>Discover verified remote internships and professional contracts using the search and category filters below.</p>
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
          aria-label="Search opportunities by keyword, title, company or category"
        />

        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <label htmlFor="category-select" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Domain:</label>
          <select 
            id="category-select"
            value={selectedCategory} 
            onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
            className="search-input"
            style={{ cursor: 'pointer', minWidth: '180px' }}
            aria-label="Filter opportunities by domain category"
          >
            <option value="All">All Domains</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Consulting">Consulting</option>
            <option value="Security">Security</option>
          </select>
        </div>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {filteredItems.length === 0 ? (
          <div className="empty-state">
            <h3>🔍 No Results Match Your Search</h3>
            <p>Try adjusting your search keywords or switching domain categories.</p>
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
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="page-btn" aria-label="Go to previous page">Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="page-btn" aria-label="Go to next page">Next</button>
              </nav>
            )}
          </>
        )}
      </div>
    </div>
  );
}