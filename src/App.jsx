import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InternshipsPage from './pages/InternshipsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DetailPage from './pages/DetailPage';
import ApplyPage from './pages/ApplyPage';
import MyApplicationsPage from './pages/MyApplicationsPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

const FALLBACK_OPPORTUNITIES = [
  { id: 'fb-1', title: 'Senior Cybersecurity Specialist', description: 'Protect cloud infrastructure and audit application vulnerabilities.', category: 'Security', company: 'SecurGuard Systems', location: 'On-site (Fallback)' },
  { id: 'fb-2', title: 'Lead Cloud DevOps Architect', description: 'Design and manage automated CI/CD pipelines and Docker containers.', category: 'Engineering', company: 'CloudScale Global', location: 'Remote (Fallback)' },
  { id: 'fb-3', title: 'Product Design Lead', description: 'Drive user research cycles and build scalable design systems.', category: 'Design', company: 'PixelCraft Studio', location: 'Hybrid (Fallback)' },
  { id: 'fb-4', title: 'Enterprise Solutions Consultant', description: 'Bridge client technical requirements with agile engineering squads.', category: 'Consulting', company: 'Apex Advisory', location: 'Remote (Fallback)' }
];

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [myApplications, setMyApplications] = useState(() => {
    const saved = localStorage.getItem('skillbridge_applications');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('skillbridge_applications', JSON.stringify(myApplications));
  }, [myApplications]);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch');
        const users = await res.json();
        const categories = ['Engineering', 'Design', 'Consulting', 'Security'];
        const apiEnhanced = users.map((user, idx) => ({
          id: `api-${user.id}`,
          title: `${user.company.catchPhrase} Expert`,
          description: `Remote contract offered by ${user.company.name} (${user.email}).`,
          category: categories[idx % categories.length],
          company: user.company.name,
          location: idx % 2 === 0 ? 'Remote (Live API)' : 'Global (Live API)'
        }));
        setItems(apiEnhanced);
      } catch (err) {
        setItems(FALLBACK_OPPORTUNITIES);
      } finally {
        setLoading(false);
      }
    };
    fetchOpportunities();
  }, []);

  const addApplication = (newApp) => {
    setMyApplications(prev => [newApp, ...prev]);
  };

  if (loading) {
    return (
      <div className="app-layout">
        <Navbar appCount={myApplications.length} />
        <main className="loading-state">
          <div className="spinner" aria-hidden="true"></div>
          <p>Loading SkillBridge platform data...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-layout">
      <Navbar appCount={myApplications.length} />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/internships" element={<InternshipsPage items={items} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/opportunities/:id" element={<DetailPage items={items} />} />
          <Route path="/opportunities/:id/apply" element={<ApplyPage items={items} onApply={addApplication} />} />
          <Route path="/my-applications" element={<MyApplicationsPage applications={myApplications} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}