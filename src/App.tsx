import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

// Pages principales
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import NotFound from './pages/NotFound';

import NewsPage from './pages/NewsPage';
// Sous-pages About
import AboutTeam from './pages/AboutTeam';
import AboutPartnerships from './pages/AboutPartnerships';

// Sous-pages Research
import ResearchProjects from './pages/ResearchProjects';
import ResearchPublications from './pages/ResearchPublications';
import ResearchGrants from './pages/ResearchGrants';

// Sous-pages Events
import EventsUpcoming from './pages/EventsUpcoming';
import EventsPast from './pages/EventsPast';
import EventsCalendar from './pages/EventsCalendar';

// Sous-pages Resources
import ResourcesPublications from './pages/ResourcesPublications';
import ResourcesMembership from './pages/ResourcesMembership';
import ResourcesFAQ from './pages/ResourcesFAQ';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Routes principales */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events />} />

              {/* Sous-routes About */}
              <Route path="/about/team" element={<AboutTeam />} />
              <Route path="/about/partnerships" element={<AboutPartnerships />} />

              {/* Sous-routes Research */}
              <Route path="/research/projects" element={<ResearchProjects />} />
              <Route path="/research/publications" element={<ResearchPublications />} />
              <Route path="/research/grants" element={<ResearchGrants />} />

              {/* Sous-routes Events */}
              <Route path="/events/upcoming" element={<EventsUpcoming />} />
              <Route path="/events/past" element={<EventsPast />} />
              <Route path="/events/calendar" element={<EventsCalendar />} />

              {/* Sous-routes Resources */}
              <Route path="/resources/publications" element={<ResourcesPublications />} />
              <Route path="/resources/membership" element={<ResourcesMembership />} />
              <Route path="/resources/faq" element={<ResourcesFAQ />} />

              <Route path="/news" element={<NewsPage />} />

              {/* Page 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
