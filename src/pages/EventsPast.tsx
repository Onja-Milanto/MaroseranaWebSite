import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, MapPin, Filter } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  image: string;
  description: string;
}

const EventsPast = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('Tous types');

  const filters = [
    { label: 'Tous types', value: '' },
    { label: 'conférence', value: 'conférence' },
    { label: 'étude', value: 'étude' },
    { label: 'séminaire', value: 'séminaire' },
    { label: 'formation', value: 'formation' },
    { label: 'activité', value: 'activité' },
    { label: 'partage', value: 'partage' },
    { label: 'meeting', value: 'meeting' }
  ];

  const pastEvents: Event[] = [
    {
      id: 101,
      title: "Etre femme dans le Sud-Ouest malgache : defis et perspectives",
      date: "2025-05-29",
      time: "15h30",
      location: "Bibliotheque DEGS, Toliara",
      type: "conférence",
      image: "../images/femme_passee.jpg",
      description: "/infosevents/101"
    },
    {
      id: 102,
      title: "Plurilinguisme et expression artistique : repenser l'inclusion",
      date: "2025-05-27",
      time: "15h30",
      location: "Bibliotheque DEGS, Toliara",
      type: "etude",
      image: "../images/etude_reunion_passee.jpg",
      description: "/infosevents/102"
    },
    {
      id: 103,
      title: "Etude comparative des variations des pluies et temperatures : cas du Sud-Ouest et d'Ihorombe",
      date: "2025-05-21",
      time: "15h30",
      location: "Bibliotheque DEGS, Toliara",
      type: "seminaire",
      image: "../images/geo_passee.jpg",
      description: "/infosevents/103"
    },
    {
      id: 107,
      title: "Marche pour l'océan 2025",
      date: "2025-05-17",
      time: "07:00 - 9:00",
      location: "Tsongobory, Toliara",
      type: "activité",
      image: "../images/marche_ucms.jpg",
      description: "/infosevents/107"
    },
    {
      id: 105,
      title: "Créer des ponts entre Histoire et Marché du travail / Décolonisation des patrimoines africains",
      date: "2025-05-14",
      time: "08h30",
      location: "Amphithéâtre Jean Ferlin, Université de Toliara",
      type: "conférence",
      image: "../images/deux_conf_passee.jpg",
      description: "/infosevents/105"
    },
    {
      id: 106,
      title: "Les réalités sociales face aux activités d'éducation environnementale",
      date: "2025-05-08",
      time: "15h30",
      location: "Alliance Française, Toliara",
      type: "séminaire",
      image: "../images/elite_passee.jpg",
      description: "/infosevents/106"
    },
    {
      id: 108,
      title: "L'eau, les vivants humains et non-humains en paysages nourriciers",
      date: "2025-05-03",
      time: "09:00 - 11:00",
      location: "UC MaroSerana, Toliara",
      type: "partage",
      image: "../images/partage_passee.jpg",
      description: "/infosevents/108"
    },
    {
      id: 110,
      title: "Etude de la criminalité à Toliara : outils et méthodes socio-criminologiques",
      date: "2025-04-10",
      time: "16h30",
      location: "Alliance Française, Toliara",
      type: "meeting",
      image: "../images/seminaire_passee_salohy.jpg",
      description: "/infosevents/110"
    },
    {
      id: 111,
      title: "Souveraineté des États africains sur les ressources naturelles",
      date: "2025-05-01",
      time: "16h30",
      location: "Bibliothèque DEGS, Toliara",
      type: "conférence",
      image: "../images/bonjour_passee.jpg",
      description: "/infosevents/111"
    },
    {
      id: 104,
      title: "Formation sur la transcription des bandes sonores à Sarodrano",
      date: "2025-04-28",
      time: "15h30",
      location: "UC MaroSerana, Toliara",
      type: "formation",
      image: "../images/formation_stagiaire.jpg",
      description: "/infosevents/104"
    },
    {
      id: 112,
      title: "Réflexion anthropo-politique sur le kokolampo",
      date: "2025-04-28",
      time: "16h00",
      location: "Alliance Française, Toliara",
      type: "conférence",
      image: "../images/manara_passee.jpg",
      description: "/infosevents/112"
    },
    {
      id: 113,
      title: "FOJAEB : Forum des Jeunes Africains pour l'Économie Bleue",
      date: "2025-04-17",
      type: "activité",
      location: "Score, Toliara",
      time: "08h00",
      image: "../images/fojaeb_passrr.jpg",
      description: "/infosevents/113"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

const sortedEvents = [...pastEvents].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const normalize = (str: string) =>
  str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const filteredEvents = activeFilter === 'Tous types'
  ? sortedEvents
  : sortedEvents.filter(
      event => normalize(event.type) === normalize(activeFilter)
    );

  return (
    <>
      {/* Hero Section avec overlay */}
      <section
        className="relative pt-24 pb-10 min-h-[300px] md:min-h-[400px] overflow-hidden"
        style={{
          backgroundImage: "url('../images/bg33.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary-700 opacity-50 z-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mb-4 mt-16 md:mt-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('events.past')}
          </motion.h1>
        </div>
      </section>

      <Section>
        {/* Filters */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center">
              <Filter size={18} className="mr-2 text-primary-700" />
              <span className="font-medium">{t('events.filter')}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.label)}
                  className={`px-3 py-1 border rounded-full text-sm ${
                    activeFilter === filter.label
                      ? 'bg-primary-700 text-white border-primary-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="flex flex-col h-full">
              <div className="relative h-48 mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <span className="absolute top-2 right-2 bg-primary-700 text-white px-3 py-1 rounded-full text-sm">
                  {event.type}
                </span>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{formatDate(event.date)} - {event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a
                  href={event.description}
                  className="inline-block w-full text-center px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors"
                >
                  {t('common.readMore')}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export default EventsPast;
