import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Calendar, Users, BookOpen, ExternalLink } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Home: React.FC = () => {
  const { t } = useTranslation();
  
  // Mock data
  const latestNews = [
    {
      id: 1,
      title: 'New Research Partnership Announced',
      date: '2025-04-15',
      excerpt: 'UC MaroSerana partners with leading research institutions to advance scientific knowledge.',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Registration Open for Annual Conference',
      date: '2025-04-10',
      excerpt: 'Join us for our annual conference featuring keynote speakers from around the world.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'New Grant Opportunities Available',
      date: '2025-04-05',
      excerpt: 'Apply for our latest research grants in various scientific disciplines.',
      image: 'https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Scientific Conference 2025',
      date: '2025-06-15',
      location: 'Toliara, Madagascar',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
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
      location: 'Toliara, Madagascar',
      image: 'https://images.pexels.com/photos/5427670/pexels-photo-5427670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  const partners = [
    { id: 1, name: 'University of Science', logo: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 2, name: 'Research Institute', logo: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 3, name: 'National Science Foundation', logo: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 4, name: 'International Research Consortium', logo: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">

<style>
  {`
    .hero-carousel,
    .hero-carousel .carousel,
    .hero-carousel .carousel-slider,
    .hero-carousel .carousel .slide {
      height: 100vh !important;
      min-height: 500px;
      max-height: 900px;
    }
    .hero-carousel img {
      width: 100%;
      height: 100vh;
      min-height: 500px;
      max-height: 900px;
      object-fit: cover;
    }
  `}
</style>
<div className="hero-carousel">
  <Carousel
    autoPlay
    infiniteLoop
    interval={3000}
    transitionTime={1000}
    showThumbs={false}
    showStatus={false}
    swipeable
    emulateTouch
    showArrows={false}
    animationHandler="fade"
  >
    <div>
      <img
        src="../images/bg11.jpg"
        alt="Slide 1"
      />
    </div>
    <div>
      <img
        src="../images/bg22.jpg"
        alt="Slide 2"
      />
    </div>
    <div>
      <img
        src="../images/bg33.jpg"
        alt="Slide 3"
      />
    </div>
    <div>
      <img
        src="../images/bg4.jpg"
        alt="Slide 4"
      />
    </div>
  </Carousel>
  <div className="absolute inset-0 bg-primary-700 opacity-5 z-10"></div>
</div>

          <div className="absolute inset-0 bg-primary-700 opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
            <motion.div
              className="flex flex-col items-center justify-center mb-6"
              initial={false}
            >
              {/* "UC" slice in from left */}
              <motion.span
              className="block text-4xl md:text-6xl font-bold text-white"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
              >
              Unité des Chercheurs
              </motion.span>
                {/* "MaroSerana" with animated infinity gradient text */}
                <style></style>
                <motion.h1
                className="text-4xl md:text-6xl font-bold mt-2 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                >
                <span className="infinity-gradient-text">MaroSerana</span>
                <style>
                  {`
                  .infinity-gradient-text {
                  background: linear-gradient(
                    270deg,
                    #00eaff, /* fluo blue */
                    #003366, /* marine blue */
                    #ffffff, /* white */
                    #00eaff,
                    #003366,
                    #ffffff
                  );
                  background-size: 200% 200%;
                  background-clip: text;
                  -webkit-background-clip: text;
                  color: transparent;
                  -webkit-text-fill-color: transparent;
                  animation: infinity-gradient-move 6s linear infinite;
                  }
                  @keyframes infinity-gradient-move {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                  }
                  `}
                </style>
                </motion.h1>
              </motion.div>
              <motion.p 
                className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
            {t('home.hero.slogan')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
        <NavLink to="/about">
          <Button 
            variant="secondary" 
            size="lg"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            className="border-2 border-white rounded-full hover:bg-white hover:text-primary-700 transition-colors duration-300 bg-white bg-opacity-75"
          >
            {t('home.hero.cta')}
          </Button>
        </NavLink>
        
            <NavLink to="/resources/membership">
              <Button 
                variant="primary" 
                size="lg"
              >
                {t('resources.membership.joinButton')}
              </Button>
            </NavLink>
          </motion.div>

        </div>
        
      </section>

      {/* About Section */}
      <Section title={t('home.about.title')} titleCenter bgColor="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div className="flex flex-col items-center text-center">
              <Users size={48} className="text-primary-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t('home.about.mission')}</h3>
              <p className="text-gray-600">{t('home.about.missionText')}</p>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <BookOpen size={48} className="text-primary-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t('home.about.vision')}</h3>
              <p className="text-gray-600">{t('home.about.visionText')}</p>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <Calendar size={48} className="text-primary-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t('home.about.values')}</h3>
              <p className="text-gray-600">{t('home.about.valuesText')}</p>
            </div>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <NavLink to="/about">
            <Button variant="primary" size="md">
              {t('home.about.learnMore')} 
            </Button>
          </NavLink>
        </div>        
      </Section>
      
      {/* Latest News Section */}
      <Section title={t('home.news.title')}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((news) => (
            <Card
              key={news.id}
              title={news.title}
              subtitle={formatDate(news.date)}
              image={news.image}
            >
              <p className="text-gray-600 mb-4">{news.excerpt}</p>
              <Button variant="text" icon={<ArrowRight size={16} />} iconPosition="right">
                {t('common.readMore')}
              </Button>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <NavLink to="/news">
            <Button variant="outline">
              {t('home.news.viewAll')}
            </Button>
          </NavLink>
</div>

      </Section>
      
      {/* Upcoming Events Section */}
      <Section title={t('home.events.title')} bgColor="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              title={event.title}
              image={event.image}
            >
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar size={16} className="mr-2" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <ExternalLink size={16} className="mr-2" />
                <span>{event.location}</span>
              </div>
              <NavLink to={`/events/${event.id}`}>
                <Button variant="primary" fullWidth>
                  {t('common.learnMore')}
                </Button>
              </NavLink>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <NavLink to="/events">
            <Button variant="outline">
              {t('home.events.viewAll')}
            </Button>
          </NavLink>
        </div>
      </Section>
      
      {/* Partners Section */}
      <Section title={t('home.partners.title')}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <motion.div 
              key={partner.id}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
              whileHover={{ 
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-20 object-contain"
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
        <NavLink to="/about/partnerships">
          <Button variant="outline">
            {t('home.partners.viewAll')}
          </Button>
        </NavLink>

        </div>
      </Section>
      
      {/* Newsletter Section */}
      <Section bgColor="bg-primary-700 text-white" titleCenter>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('home.newsletter.title')}
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('home.newsletter.subtitle')}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="email"
              placeholder={t('home.newsletter.placeholder')}
              className="px-4 py-3 rounded-md flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-secondary-400"
            />
            <Button variant="secondary" size="lg">
              {t('home.newsletter.button')}
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Home;