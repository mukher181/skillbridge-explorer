import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch data from server.');
        const users = await res.json();

        const categories = ['Engineering', 'Design', 'Consulting', 'Security'];
        const apiEnhanced = users.map((user, idx) => ({
          id: `api-${user.id}`,
          title: `${user.company.catchPhrase} Expert`,
          description: `Remote contract opportunity offered by ${user.company.name} (${user.email}). Specializing in high-performance digital workflows.`,
          category: categories[idx % categories.length],
          company: user.company.name,
          location: idx % 2 === 0 ? 'Remote (Live API)' : 'Global (Live API)'
        }));

        setItems(apiEnhanced);
      } catch (err) {
        const fallbackData = [
          { id: 'fb-1', title: 'Senior Cybersecurity Specialist', description: 'Protect cloud infrastructure, audit application vulnerabilities, and implement secure IAM policies.', category: 'Security', company: 'SecurGuard Systems', location: 'On-site (Fallback)' },
          { id: 'fb-2', title: 'Lead Cloud DevOps Architect', description: 'Design and manage automated CI/CD pipelines, Docker containers, and Kubernetes cluster orchestration.', category: 'Engineering', company: 'CloudScale Global', location: 'Remote (Fallback)' },
          { id: 'fb-3', title: 'Product Design Lead', description: 'Drive user research cycles, build design systems, and supervise cross-platform UI/UX consistency.', category: 'Design', company: 'PixelCraft Studio', location: 'Hybrid (Fallback)' },
          { id: 'fb-4', title: 'Enterprise Solutions Consultant', description: 'Bridge client technical requirements with agile engineering squads to deliver robust enterprise solutions.', category: 'Consulting', company: 'Apex Advisory', location: 'Remote (Fallback)' },
          { id: 'fb-5', title: 'Blockchain Smart Contract Dev', description: 'Write secure Solidity contracts, perform gas optimizations, and manage decentralized web3 protocols.', category: 'Engineering', company: 'BlockChain Labs', location: 'Remote (Fallback)' },
          { id: 'fb-6', title: 'Information Security Analyst', description: 'Monitor network traffic anomalies, respond to incident alerts, and enforce compliance guidelines.', category: 'Security', company: 'ShieldNet Corp', location: 'Hybrid (Fallback)' }
        ];
        setItems(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

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

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="app-layout">
        <nav className="navbar">
          <div className="nav-brand">SkillBridge <span>Explorer</span></div>
        </nav>
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading initial remote opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-layout">
      {/* Navbar Added */}
      <nav className="navbar">
        <div className="nav-brand">SkillBridge <span>Explorer</span></div>
        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <div className="main-container">
        <header className="explorer-header">
          <h1>Find Your Next Tech Opportunity</h1>
          <p>Discover and filter professional tech roles and remote contracts instantly with live API sync.</p>
        </header>

        <div className="controls-bar">
          <input 
            type="text" 
            placeholder="Search by keyword, title, company or category..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="category-filters">
            {['All', 'Engineering', 'Design', 'Consulting', 'Security'].map(cat => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="empty-state">
            <h3>🔍 No Results Match Your Search</h3>
            <p>Try adjusting your search keywords or category filters.</p>
          </div>
        ) : (
          <>
            <div className="listings-grid">
              {currentItems.map(item => (
                <div key={item.id} className="listing-card">
                  <div className="card-top">
                    <span className="badge">{item.category}</span>
                    <span className="location">{item.location}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p className="company">{item.company}</p>
                  <p className="desc">{item.description}</p>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  disabled={currentPage === 1} 
                  onClick={() => setCurrentPage(p => p - 1)}
                  className="page-btn"
                >
                  Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button 
                  disabled={currentPage === totalPages} 
                  onClick={() => setCurrentPage(p => p + 1)}
                  className="page-btn"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer Added */}
      <footer className="footer">
        <p>&copy; 2026 SkillBridge Explorer. All rights reserved by Mukher.</p>
      </footer>
    </div>
  );
}