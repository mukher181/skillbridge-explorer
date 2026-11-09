# SkillBridge — Student Internship & Opportunity Discovery Platform

> A high-performance, accessible, and modern web frontend designed to centralize verified tech internships, remote contracts, and early-career professional opportunities for students.

## 🚀 Live Demo & Deployment
- **Live URL**: [Deploy on Vercel / Netlify](https://your-deployment-url.vercel.app) *(Simulated / Public)*
- **Repository**: [GitHub Repository](https://github.com/your-username/skillbridge-explorer)

---

## 📂 Project Structure
**```text**
skillbridge-explorer/
├── public/                 # Static assets & favicon
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, Cards, etc.)
│   ├── pages/              # Route views (Home, Internships, Detail, Apply, MyApplications, 404)
│   ├── hooks/              # Custom React hooks (Data fetching & LocalStorage sync)
│   ├── __tests__/          # Vitest & RTL automated test suite
│   ├── App.jsx             # Main routing & application layout
│   ├── App.css             # Advanced SaaS styling, animations, & glassmorphism
│   └── main.jsx            # React root entry point
├── .env.example            # Environment variables template
├── .gitignore              # Ignored node_modules, build outputs, & env files
├── package.json            # Project dependencies & scripts
└── README.md               # Complete project documentation
---

## 🛠️ Tech Stack & Tools
- **React (v18+)** (`useState`, `useEffect`, `useMemo`)
- **Vite** (Build tool & bundler)
- **CSS3** (Modern responsive layout with clean UI theme, Navbar, and Footer)
- **Public API:** JSONPlaceholder Users API (`https://jsonplaceholder.typicode.com/users`) simulating professional opportunities, with a built-in offline fallback mock dataset.
- **Audit Tools:** Chrome Lighthouse, axe DevTools, WebAIM Contrast Checker
- **Frontend:** React, Vite, JavaScript (ES6+), Modern CSS (Flexbox & CSS Grid)
- **Testing & Quality:** Vitest, React Testing Library, Lighthouse
- **Deployment Platform:** Vercel / Netlify (with secure environment variable management)
- **Framework**: React 18 (Vite)
- **Routing**: React Router DOM (v6)
- **Styling**: Custom modern CSS (Glassmorphism, High-contrast SaaS aesthetic, CSS Variables)
- **Testing**: Vitest & React Testing Library (RTL)
- **API**: JSONPlaceholder (Simulated mock data source with robust fallback handling)

---

## 🚀 Setup & Run Instructions (For Reviewers)

Follow these steps to run the project locally on your machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed.

### 2. Clone the Repository
```bash
git clone [https://github.com/mukher181/skillbridge-explorer.git](https://github.com/mukher181/skillbridge-explorer.git)
cd skillbridge-explorer