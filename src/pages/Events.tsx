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
  
  // Mock data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Scientific Conference 2025',
      date: '2025-06-15',
      time: '09:00 - 18:00',
      location: 'Casablanca, Morocco',
      type: 'conference',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Join us for our annual scientific conference featuring keynote speakers from around the world.'
    },
    {
      id: 2,
      title: 'Workshop on Research Methodology',
      date: '2025-05-20',
      time: '14:00 - 17:00',
      location: 'Online',
      type: 'workshop',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A hands-on workshop to improve your research methodology skills.'
    },
    {
      id: 3,
      title: 'Seminar on Publication Strategies',
      date: '2025-05-10',
      time: '10:00 - 12:00',
      location: 'Madagascar, Morocco',
      type: 'seminar',
      image: 'https://images.pexels.com/photos/5427670/pexels-photo-5427670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Learn effective strategies for publishing your research in high-impact journals.'
    },
    {
      id: 4,
      title: 'Grant Writing Workshop',
      date: '2025-07-05',
      time: '09:00 - 16:00',
      location: 'Marrakech, Morocco',
      type: 'workshop',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A comprehensive workshop on writing successful grant proposals.'
    },
    {
      id: 5,
      title: 'Networking Event for Young Researchers',
      date: '2025-06-28',
      time: '18:00 - 21:00',
      location: 'Tangier, Morocco',
      type: 'networking',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'An opportunity for young researchers to connect and share ideas.'
    }
  ];
  
  const pastEvents = [
    {
      id: 101,
      title: 'Research Symposium 2024',
      date: '2024-11-20',
      time: '09:00 - 17:00',
      location: 'Casablanca, Morocco',
      type: 'symposium',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A symposium featuring cutting-edge research from our members.'
    },
    {
      id: 102,
      title: 'Workshop on Data Analysis',
      date: '2024-10-15',
      time: '14:00 - 17:00',
      location: 'Online',
      type: 'workshop',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Learn advanced data analysis techniques for research.'
    },
    {
      id: 103,
      title: 'Annual General Meeting 2024',
      date: '2024-09-05',
      time: '10:00 - 12:00',
      location: 'Madagascar, Morocco',
      type: 'meeting',
      image: 'https://images.pexels.com/photos/5427670/pexels-photo-5427670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Annual general meeting for all members of UC MaroSerana.'
    }
  ];

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Filter events based on search term
  const filteredEvents = activeTab === 'upcoming'
    ? upcomingEvents.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : pastEvents.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.type.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-primary-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('events.title')}
          </motion.h1>
        </div>
      </section>

      <Section>
        {/* Tabs and Search */}
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

        {/* Filter Section */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center">
              <Filter size={18} className="mr-2 text-primary-700" />
              <span className="font-medium">{t('events.filter')}</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100">
                All Types
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100">
                Conference
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100">
                Workshop
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100">
                Seminar
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                title={event.title}
                image={event.image}
              >
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{formatDate(event.date)} • {event.time}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <NavLink to={`/events/${event.id}`}>
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