import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

// Composants principaux
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import InfoEventPage from './pages/InfoEventPage';



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

// Pages dynamiques
import InfoTeamMember from './pages/infoteam/InfoTeamMember';

// Pages individuelles (si tu veux remplacer le fichier dynamique petit à petit)
import Event1 from './infosevents/1';
import Event101 from './infosevents/101';
import Event102 from './infosevents/102';

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
              <Route path="/news" element={<NewsPage />} />
              <Route path="/infosevents/:id" element={<InfoEventPage />} />


              {/* Sous-routes dynamiques */}
              <Route path="/infoteam/:id" element={<InfoTeamMember />} />
              <Route path="/infosevents/:id" element={<InfoEventPage />} />

              {/* Pages spécifiques (si tu veux remplacer [id].tsx petit à petit) */}
              <Route path="/infosevents/1" element={<Event1 />} />
              <Route path="/infosevents/101" element={<Event101 />} />
              <Route path="/infosevents/102" element={<Event102 />} />

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
