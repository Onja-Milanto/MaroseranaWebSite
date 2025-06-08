import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Calendar, MapPin, Filter, Search } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Events: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('');

  const upcomingEvents = [
    {
      id: 1,
      title: 'La croissance économique malagasy : comprendre les facteurs qui la stimulent. Un essai de politique et perspectives pour Madagascar',
      date: '2025-06-15',
      time: '09:00 - 18:00',
      location: 'Hotel des Finances, Toliara',
      type: 'séminaire',
      image: '../images/economie_venir.jpg',
      description: 'https://meet.jit.si/Seminaire_Doctoral_Univ_Toliara'
    },
  ];

  const pastEvents = [
    {
      id: 101,
      title: 'Être femme dans le Sud-Ouest malgache : défis et perspectives',
      date: '2025-05-29',
      time: '15h30',
      location: 'Bibliothèque DEGS, Toliara',
      type: 'conférence',
      image: '../images/femme_passee.jpg',
      description: 'https://meet.jit.si/Seminaire_Doctoral_Univ_Toliara'
    },
    {
      id: 102,
      title: 'Plurilinguisme et expression artistique : repenser l’inclusion',
      date: '2025-05-27',
      time: '15h30',
      location: 'Bibliothèque DEGS, Toliara',
      type: 'étude',
      image: '../images/etude_reunion_passee.jpg',
      description: 'Organisée simultanément à Saint-Denis (Université de La Réunion)'
    },
    {
      id: 103,
      title: 'Étude comparative des variations des pluies et températures : cas du Sud-Ouest et d’Ihorombe',
      date: '2025-05-21',
      time: '15h30',
      location: 'Bibliothèque DEGS, Toliara',
      type: 'séminaire',
      image: '../images/geo_passee.jpg',
      description: 'https://meet.jit.si/Seminaire_Doctoral_Univ_Toliara'
    },
    {
      id: 107,
      title: 'Marche pour l\'océan 2025',
      date: '2025-05-17',
      time: '07:00 - 9:00',
      location: 'Tsongobory, Toliara',
      type: 'activité',
      image: '../images/marche_ucms.jpg',
      description: 'Marche vers Ambondrolava'
    },
    {
      id: 105,
      title: 'Créer des ponts entre Histoire et Marché du travail / Décolonisation des patrimoines africains',
      date: '2025-05-14',
      time: '08h30',
      location: 'Amphithéâtre Jean Ferlin, Université de Toliara',
      type: 'conférence',
      image: '../images/deux_conf_passee.jpg',
      description: 'https://meet.jit.si/Seminaire_Doctoral_Univ_Toliara'
    },
    {
      id: 106,
      title: 'Les réalités sociales face aux activités d’éducation environnementale',
      date: '2025-05-08',
      time: '15h30',
      location: 'Alliance Française, Toliara',
      type: 'séminaire',
      image: '../images/elite_passee.jpg',
      description: 'Deux conférences'
    },
    {
      id: 108,
      title: 'L’eau, les vivants humains et non-humains en paysages nourriciers',
      date: '2025-05-03',
      time: '09:00 - 11:00',
      location: 'UC MaroSerana, Toliara',
      type: 'partage',
      image: '../images/partage_passee.jpg',
      description: 'https://meet.jit.si/Seminaire_Doctoral_Univ_Toliara'
    },
    {
      id: 110,
      title: 'Etude de la criminalité à Toliara : outils et méthodes socio-criminologiques',
      date: '2025-04-10',
      time: '16h30',
      location: 'Alliance Française, Toliara',
      type: 'meeting',
      image: '../images/seminaire_passee_salohy.jpg',
      description: 'https://meet.jit.si/Seminaire_Doctoral_Univ_Toliara'
    },
    {
      id: 111,
      title: 'Souveraineté des États africains sur les ressources naturelles',
      date: '2025-05-01',
      time: '16h30',
      location: 'Bibliothèque DEGS, Toliara',
      type: 'conférence',
      image: '../images/bonjour_passee.jpg',
      description: 'https://meet.jit.si/Seminaire_Doctoral_Univ_Toliara'
    },
    {
      id: 104,
      title: 'Formation sur la transcription des bandes sonores à Sarodrano',
      date: '2025-04-28',
      time: '15h30',
      location: 'UC MaroSerana, Toliara',
      type: 'formation',
      image: '../images/formation_stagiaire.jpg',
      description: 'Formation par l\'équipe UC MaroSerana'
    },
    {
      id: 112,
      title: 'Réflexion anthropo-politique sur le kokolampo',
      date: '2025-04-28',
      time: '16h00',
      location: 'Alliance Française, Toliara',
      type: 'conférence',
      image: '../images/manara_passee.jpg',
      description: 'https://meet.jit.si/Seminaire_Doctoral_Univ_Toliara'
    },
    {
      id: 113,
      title: 'FOJAEB : Forum des Jeunes Africains pour l\'Économie Bleue',
      date: '2025-04-17',
      type: 'activité',
      image: '../images/fojaeb_passrr.jpg',
      description: 'On est ensemble'
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const filteredEvents = (activeTab === 'upcoming' ? upcomingEvents : pastEvents)
    .filter(event =>
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (event.location && event.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
        event.type.toLowerCase().includes(searchTerm.toLowerCase()))
      && (typeFilter === '' || event.type === typeFilter)
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
            {t('events.title')}
          </motion.h1>
        </div>
      </section>

      <Section>
        {/* Tabs + Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-primary-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              {t('events.upcoming')}
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'past'
                  ? 'bg-primary-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('past')}
            >
              {t('events.past')}
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder={`${t('common.search')}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center">
              <Filter size={18} className="mr-2 text-primary-700" />
              <span className="font-medium">{t('events.filter')}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Tous types', value: '' },
                { label: 'conférence', value: 'conférence' },
                { label: 'étude', value: 'étude' },
                { label: 'séminaire', value: 'séminaire' },
                { label: 'formation', value: 'formation' },
                { label: 'activité', value: 'activité' },
                { label: 'partage', value: 'partage' },
                { label: 'meeting', value: 'meeting' },
              ].map((type) => (
                <button
                  key={type.value}
                  className={`px-3 py-1 border rounded-full text-sm ${
                    typeFilter === type.value
                      ? 'bg-primary-700 text-white border-primary-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setTypeFilter(type.value)}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} title={event.title} image={event.image}>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{formatDate(event.date)} • {event.time}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                    <NavLink to={`/infoevents/${event.id}`}>
                    <Button variant="primary" fullWidth>
                      {t('common.learnMore')}
                    </Button>
                  </NavLink>

              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-xl text-gray-500">{t('events.noEvents')}</p>
          </div>
        )}
      </Section>
    </>
  );
};

export default Events;
