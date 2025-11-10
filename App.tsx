import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AnimatedBackground from './components/AnimatedBackground';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative flex flex-col min-h-screen text-text-light overflow-hidden bg-gradient-to-br from-[#0f0f12] to-[#1b1b22]">

        {/* 🧩 Animated Particle Background */}
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>

        {/* 🌈 Gradient Overlay */}
        <div className="gradient-overlay"></div>

        {/* 🧭 Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
