import './App.css';
import React from 'react';
import AnalyticsTracker from './components/AnalyticsTracker';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Import Components
import Navigation from './components/Navigation';

// Import Pages
import AiImpactOnTeluguLiterature from './pages/blog/AiImpactOnTeluguLiterature';
import AiAndTeluguCinema from './pages/blog/AiAndTeluguCinema';
import WomenInTeluguAI from './pages/blog/WomenInTeluguAI';
import AiForTeluguEducation from './pages/blog/AiForTeluguEducation';
import EthicsOfAiInTeluguSociety from './pages/blog/EthicsOfAiInTeluguSociety';
import TeluguAiStartups from './pages/blog/TeluguAiStartups';
import TeluguAiForAgriculture from './pages/blog/TeluguAiForAgriculture';
import TeluguAiForSmartCities from './pages/blog/TeluguAiForSmartCities';
import TeluguAiForHealthcare from './pages/blog/TeluguAiForHealthcare';
import TeluguAiForSmallBusiness from './pages/blog/TeluguAiForSmallBusiness';
import HomePage from './pages/HomePage';
import Features from './pages/Features';
import HowToUse from './pages/HowToUse';
import Blog from './pages/Blog';
import FutureOfAiInTelugu from './pages/blog/FutureOfAiInTelugu';
import PracticeTeluguWithAi from './pages/blog/PracticeTeluguWithAi';
import HowAiVoiceWorks from './pages/blog/HowAiVoiceWorks';
import AiForEducation from './pages/blog/AiForEducation';
import TeluguLanguagePreservation from './pages/blog/TeluguLanguagePreservation';
import ConversationalAiTips from './pages/blog/ConversationalAiTips';
import TeluguAiForSeniors from './pages/blog/TeluguAiForSeniors';
import VoiceTechForKids from './pages/blog/VoiceTechForKids';
import TeluguAiForDiaspora from './pages/blog/TeluguAiForDiaspora';
import TeluguAiForAccessibility from './pages/blog/TeluguAiForAccessibility';
import TeluguAiTroubleshooting from './pages/blog/TeluguAiTroubleshooting';
import AiEthicsTelugu from './pages/blog/AiEthicsTelugu';
import AiInTeluguMedia from './pages/blog/AiInTeluguMedia';
import TeluguAiFutureTrends from './pages/blog/TeluguAiFutureTrends';
import TeluguAiForBusiness from './pages/blog/TeluguAiForBusiness';
import TeluguAiForHealth from './pages/blog/TeluguAiForHealth';
import TeluguAiResearchInnovation from './pages/blog/TeluguAiResearchInnovation';
import TeluguAiCybersecurity from './pages/blog/TeluguAiCybersecurity';
import TeluguAiMedicalDiagnostics from './pages/blog/TeluguAiMedicalDiagnostics';
import TeluguAiSmartFarming from './pages/blog/TeluguAiSmartFarming';
import TeluguAiFintech from './pages/blog/TeluguAiFintech';
import TeluguAiEntertainment from './pages/blog/TeluguAiEntertainment';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const Footer: React.FC = () => (
  <footer style={{ width: '100%', background: 'rgba(0,0,0,0.13)', padding: '1.1rem 0', marginTop: '2rem', borderTop: '1.5px solid rgba(255,255,255,0.13)', boxShadow: '0 2px 12px 0 rgba(31, 38, 135, 0.11)' }}>
    <div style={{ textAlign: 'center', fontSize: '1.05rem', color: '#fff', opacity: 0.94, fontWeight: 500, letterSpacing: '0.02em' }}>
      <span className="animate-gradient" style={{ fontWeight: 700, fontSize: '1.08rem', background: 'linear-gradient(90deg, #ff6ec4, #7873f5, #1fd1f9, #ff6ec4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        2025 Developed by Govardhan
      </span>
      <span style={{ margin: '0 0.7rem', color: '#fff', opacity: 0.6 }}>|</span>
      <a href="/privacy-policy" className="blog-link" style={{ color: '#a8b2ff', textDecoration: 'underline', margin: '0 0.3rem', fontWeight: 500 }}>Privacy Policy</a>
      <span style={{ margin: '0 0.5rem', color: '#fff', opacity: 0.6 }}>|</span>
      <a href="/terms-of-service" className="blog-link" style={{ color: '#a8b2ff', textDecoration: 'underline', margin: '0 0.3rem', fontWeight: 500 }}>Terms of Service</a>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <AnalyticsTracker />
      <ScrollToTop />
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/blog" element={<Blog />} />
  <Route path="/blog/future-of-ai-in-telugu" element={<FutureOfAiInTelugu />} />
  <Route path="/blog/practice-telugu-with-ai" element={<PracticeTeluguWithAi />} />
  <Route path="/blog/how-ai-voice-works" element={<HowAiVoiceWorks />} />
  <Route path="/blog/ai-for-education" element={<AiForEducation />} />
  <Route path="/blog/telugu-language-preservation" element={<TeluguLanguagePreservation />} />
  <Route path="/blog/conversational-ai-tips" element={<ConversationalAiTips />} />
  <Route path="/blog/telugu-ai-for-seniors" element={<TeluguAiForSeniors />} />
  <Route path="/blog/voice-tech-for-kids" element={<VoiceTechForKids />} />
  <Route path="/blog/telugu-ai-for-diaspora" element={<TeluguAiForDiaspora />} />
  <Route path="/blog/telugu-ai-for-accessibility" element={<TeluguAiForAccessibility />} />
  <Route path="/blog/telugu-ai-troubleshooting" element={<TeluguAiTroubleshooting />} />
  <Route path="/blog/ai-ethics-telugu" element={<AiEthicsTelugu />} />
  <Route path="/blog/ai-in-telugu-media" element={<AiInTeluguMedia />} />
  <Route path="/blog/telugu-ai-future-trends" element={<TeluguAiFutureTrends />} />
  <Route path="/blog/telugu-ai-for-business" element={<TeluguAiForBusiness />} />
  <Route path="/blog/telugu-ai-for-health" element={<TeluguAiForHealth />} />
<Route path="/blog/telugu-ai-research-innovation" element={<TeluguAiResearchInnovation />} />
<Route path="/blog/telugu-ai-cybersecurity" element={<TeluguAiCybersecurity />} />
<Route path="/blog/telugu-ai-medical-diagnostics" element={<TeluguAiMedicalDiagnostics />} />
<Route path="/blog/telugu-ai-smart-farming" element={<TeluguAiSmartFarming />} />
<Route path="/blog/telugu-ai-fintech" element={<TeluguAiFintech />} />
<Route path="/blog/telugu-ai-entertainment" element={<TeluguAiEntertainment />} />
<Route path="/blog/ai-impact-on-telugu-literature" element={<AiImpactOnTeluguLiterature />} />
<Route path="/blog/ai-and-telugu-cinema" element={<AiAndTeluguCinema />} />
<Route path="/blog/women-in-telugu-ai" element={<WomenInTeluguAI />} />
<Route path="/blog/ai-for-telugu-education" element={<AiForTeluguEducation />} />
<Route path="/blog/ethics-of-ai-in-telugu-society" element={<EthicsOfAiInTeluguSociety />} />
<Route path="/blog/telugu-ai-startups" element={<TeluguAiStartups />} />
<Route path="/blog/telugu-ai-for-agriculture" element={<TeluguAiForAgriculture />} />
<Route path="/blog/telugu-ai-for-smart-cities" element={<TeluguAiForSmartCities />} />
<Route path="/blog/telugu-ai-for-healthcare" element={<TeluguAiForHealthcare />} />
<Route path="/blog/telugu-ai-for-small-business" element={<TeluguAiForSmallBusiness />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;