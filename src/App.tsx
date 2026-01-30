import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RevolutionPage from './pages/RevolutionPage';
import PartyPage from './pages/PartyPage';
import StatePage from './pages/StatePage';
import LegacyPage from './pages/LegacyPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/revolution" element={<RevolutionPage />} />
            <Route path="/party" element={<PartyPage />} />
            <Route path="/state" element={<StatePage />} />
            <Route path="/legacy" element={<LegacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
