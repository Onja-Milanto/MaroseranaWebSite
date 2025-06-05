import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, NavLink } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, FileText, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const EventDetail: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  
  // Mock event data - in a real app, you would fetch this from an API
  const event = {
    id: Number(id),
    title: 'Annual Scientific Conference 2025',
    date: '2025-06-15',
    time: '09:00 - 18:00',
    location: 'Hotel Sofitel, Casablanca, Morocco',
    type: 'conference',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Join us for our annual scientific conference featuring keynote speakers from around the world. This event brings together researchers, academics, and industry professionals to discuss the latest advancements in various scientific fields.',
    organizer: 'UC MaroSerana Scientific Committee',
    speakers: [
      {
        name: 'Prof. Ahmed Najjar',
        title: 'Quantum Computing: Present and Future',
        affiliation: 'University of Science',
        image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Dr. Sarah Bennani',
        title: 'Advances in Medical Research',
        affiliation: 'National Institute of Health',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Dr. Mohammed Alami',
        title: 'Sustainable Development Goals in Research',
        affiliation: 'Environmental Research Center',
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    program: [
      {
        time: '09:00 - 09:30',
        title: 'Registration and Welcome Coffee'
      },
      {
        time: '09:30 - 10:00',
        title: 'Opening Ceremony'
      },
      {
        time: '10:00 - 11:30',
        title: 'Keynote Speech: Quantum Computing: Present and Future'
      },
      {
        time: '11:30 - 12:30',
        title: 'Panel Discussion: Future of Scientific Research'
      },
      {
        time: '12:30 - 14:00',
        title: 'Lunch Break'
      },
      {
        time: '14:00 - 15:30',
        title: 'Keynote Speech: Advances in Medical Research'
      },
      {
        time: '15:30 - 16:00',
        title: 'Coffee Break'
      },
      {
        time: '16:00 - 17:30',
        title: 'Keynote Speech: Sustainable Development Goals in Research'
      },
      {
        time: '17:30 - 18:00',
        title: 'Closing Remarks and Networking'
      }
    ],
    relatedEvents: [
      {
        id: 2,
        title: 'Workshop on Research Methodology',
        date: '2025-05-20',
        location: 'Online',
        image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 3,
        title: 'Seminar on Publication Strategies',
        date: '2025-05-10',
        location: 'Madagascar, Morocco',
        image: 'https://images.pexels.com/photos/5427670/pexels-photo-5427670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-700">
        <div className="container mx-auto px-4">
          <NavLink to="/events" className="inline-flex items-center text-white mb-6 hover:text-secondary-400 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            {t('events.title')}
          </NavLink>
          <motion.h1 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {event.title}
          </motion.h1>
          <div className="flex flex-wrap gap-6 text-white">
            <div className="flex items-center">
              <Calendar size={20} className="mr-2 text-secondary-400" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="mr-2 text-secondary-400" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="mr-2 text-secondary-400" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center">
              <Users size={20} className="mr-2 text-secondary-400" />
              <span>{event.organizer}</span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-auto rounded-lg shadow-md mb-6"
              />
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-primary-700 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc sit amet nisl. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc sit amet nisl.
                </p>
              </div>
            </div>

            {/* Speakers */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-primary-700 mb-6">{t('events.detail.speakers')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {event.speakers.map((speaker, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-primary-700">{speaker.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{speaker.affiliation}</p>
                      <p className="text-sm text-gray-700">{speaker.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Program */}
            <div>
              <h2 className="text-2xl font-bold text-primary-700 mb-6">{t('events.detail.program')}</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-4">
                  {event.program.map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="w-32 font-medium text-primary-700">{item.time}</div>
                      <div className="flex-1 text-gray-700">{item.title}</div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Registration */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-700 mb-4">{t('events.register')}</h3>
              <p className="text-gray-600 mb-6">
                Register now to secure your spot at this event. Limited seats available!
              </p>
              <Button 
                variant="accent" 
                fullWidth
                icon={<FileText size={18} />}
              >
                {t('events.detail.register')}
              </Button>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-700 mb-4">{t('events.location')}</h3>
              <div className="flex items-start mb-4">
                <MapPin size={20} className="mr-2 text-primary-700 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{event.location}</p>
              </div>
              <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Map Placeholder</p>
              </div>
            </div>

            {/* Related Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-4">{t('events.detail.related')}</h3>
              <div className="space-y-4">
                {event.relatedEvents.map((relEvent) => (
                  <NavLink 
                    key={relEvent.id} 
                    to={`/events/${relEvent.id}`}
                    className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <img 
                      src={relEvent.image} 
                      alt={relEvent.title} 
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h4 className="font-medium text-primary-700">{relEvent.title}</h4>
                      <p className="text-sm text-gray-500">{formatDate(relEvent.date)}</p>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default EventDetail;