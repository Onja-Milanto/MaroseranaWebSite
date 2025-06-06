import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';

const About: React.FC = () => {
  const { t } = useTranslation();

  // Mock team data
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. VERIZA Francis',
      title: 'Directeur Académique',
      image: '../../images/dr_veriza.jpg',
      bio: 'Professor of Molecular Biology with over 20 years of research experience.'
    },
    {
      id: 2,
      name: 'M. FERETA Manjaka Rodin',
      title: 'Président',
      image: '../../images/prez_fereta.jpg',
      bio: 'Associate Professor of Chemistry and specialist in sustainable materials.'
    },
    {
      id: 3,
      name: 'VERIZA Espérant Flaubert',
      title: 'Vice-Président',
      image: '../images/vp_flaubert.jpg',
      bio: 'Renowned physicist with contributions to quantum computing research.'
    },
    {
      id: 4,
      name: 'M. RAZAFINTSEHENO Hasina Fortunat Raphael',
      title: 'Secrétaire Générale',
      image: '../../images/mr_fortunat.png',
      bio: 'Specialist in research methodology and academic publishing.'
    }, 
    {
      id: 5,
      name: 'Mme HADIDJA Aboudou',
      title: 'Trésorière',
      image: '../images/treso.png',
      bio: 'Renowned physicist with contributions to quantum computing research.'
    },
    {
      id: 6,
      name: 'M. GENAKE MAKASARA Emmanuelson Johary',
      title: 'Responsable de communication',
      image: '../../images/johary.jpg',
      bio: 'Expert in environmental science and sustainable development.'
    },
  ];

  // Make TeamMember container a bit smaller
  // (Reduce h-64 to h-48, p-6 to p-4, and image size)

  const TeamMember: React.FC<{
    name: string;
    title: string;
    image: string;
    bio: string;
  }> = ({ name, title, image, bio }) => {
    return (
      <motion.div 
        className="bg-white rounded-lg shadow-md overflow-hidden"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-primary-700">{name}</h3>
          <p className="text-secondary-500 font-medium mb-3">{title}</p>
          <p className="text-gray-600">{bio}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section
      className="relative pt-24 pb-10 bg-primary-700 min-h-[300px] md:min-h-[400px]"
      style={{
        backgroundImage: "url('../../images/bg33.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
      <div className="container mx-auto px-4 text-center">
            <div className="mt-16">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('about.title')}
            </motion.h1>
            </div>
      </div>
      </section>

      {/* History Section */}
      <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
        <motion.h2 
          className="text-3xl font-bold text-primary-700 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('about.history.title')}
        </motion.h2>
        <motion.p 
          className="text-gray-600 mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t('about.history.content')}
        </motion.p>
        <motion.p 
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        </motion.p>
        </div>
        <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        >
        <img 
          src="../../images/history.jpg" 
          alt="UC MaroSerana History" 
          className="rounded-lg shadow-md w-full h-auto"
        />
        </motion.div>
      </div>
      </Section>

      {/* Mission, Vision, Values Section */}
      <Section bgColor="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
        className="bg-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        >
        <h3 className="text-2xl font-bold text-primary-700 mb-4">{t('about.mission.title')}</h3>
        <p className="text-gray-600">{t('about.mission.content')}</p>
        </motion.div>
        
        <motion.div 
        className="bg-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        >
        <h3 className="text-2xl font-bold text-primary-700 mb-4">{t('about.vision.title')}</h3>
        <p className="text-gray-600">{t('about.vision.content')}</p>
        </motion.div>
        
        <motion.div 
        className="bg-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        >
        <h3 className="text-2xl font-bold text-primary-700 mb-4">{t('about.values.title')}</h3>
        <ul className="space-y-3">
          <li>
          <span className="font-semibold text-primary-700">{t('about.values.excellence')}: </span>
          <span className="text-gray-600">{t('about.values.excellenceText')}</span>
          </li>
          <li>
          <span className="font-semibold text-primary-700">{t('about.values.integrity')}: </span>
          <span className="text-gray-600">{t('about.values.integrityText')}</span>
          </li>
          <li>
          <span className="font-semibold text-primary-700">{t('about.values.collaboration')}: </span>
          <span className="text-gray-600">{t('about.values.collaborationText')}</span>
          </li>
          <li>
          <span className="font-semibold text-primary-700">{t('about.values.innovation')}: </span>
          <span className="text-gray-600">{t('about.values.innovationText')}</span>
          </li>
        </ul>
        </motion.div>
      </div>
      </Section>
      {/* Team Section */}
      <Section title={t('about.team.title')}>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-primary-700 mb-8">{t('about.team.leadership')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member) => (
          <TeamMember
          key={member.id}
          name={member.name}
          title={member.title}
          image={member.image}
          bio={member.bio}
          />
        ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold text-primary-700 mb-8">{t('about.team.board')}</h3>
        <div className="relative">
        {/* Scroll buttons */}
        <button
          type="button"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-primary-100 transition"
          onClick={() => {
          const container = document.getElementById('board-scroll');
          if (container) container.scrollBy({ left: -240, behavior: 'smooth' });
          }}
          aria-label="Scroll left"
          tabIndex={0}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div
          id="board-scroll"
          className="flex overflow-x-auto gap-10 py-6 px-20 scrollbar-hide"
          style={{
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
          minHeight: 300, // bigger container
          }}
          tabIndex={0}
          role="region"
          aria-label="Board members"
        >
            {[
            {
            name: 'Jsp',
            title: 'Prof de jsp',
            image: '../../images/stag1.jpg',
            },
            {
            name: 'Ravaka RAZAFINTSEHENO',
            title: 'Professeur de jsp',
            image: '../../images/staf2.jpg',
            },
            {
            name: 'Milanto RABARINARIVO',
            title: 'Informatique',
            image: '../../images/staff3.jpg',
            },
            {
            name: 'jsp',
            title: 'Professeur de jsp',
            image: '../../images/board4.jpg',
            },
            {
            name: 'jsp',
            title: 'Professeur de jsp',
            image: '../../images/board5.jpg',
            },
            {
            name: 'Diva',
            title: 'Professeur de jsp',
            image: '../../images/board6.jpg',
            },
            {
            name: 'Miangola RABARINARIVO',
            title: 'Rédactrice',
            image: '../../images/board8.jpg',
            },
            {
            name: 'Ullah',
            title: 'Professeur de jsp',
            image: '../../images/board9.jpg',
            },
            ].map((member, idx) => (
            <div
            key={idx}
            className="flex flex-col items-center min-w-[220px] max-w-[220px] h-[280px] p-6 justify-between bg-white rounded-lg"
            style={{ flex: '0 0 220px' }}
            >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-200 mb-3">
            <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
            <div className="font-semibold text-primary-700 text-lg">{member.name}</div>
            <div className="text-gray-500 text-base">{member.title}</div>
            </div>
            </div>
            ))}
            <style>
            {`
            #board-scroll::-webkit-scrollbar {
            display: none;
            }
            `}
            </style>
            </div>
            {/* Scroll right button */}
            <button
            type="button"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-primary-100 transition"
            onClick={() => {
            const container = document.getElementById('board-scroll');
            if (container) container.scrollBy({ left: 240, behavior: 'smooth' });
            }}
            aria-label="Scroll right"
            tabIndex={0}
            >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
            </div>
            </div>
            {/* Partenariat Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-primary-700 mb-8">
                Partenariat
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10">
                {[
                  {
                    href: "https://univ-toliara.com",
                    src: "../../images/cirad_parte.png",
                    alt: "Partenaire 1",
                  },
                  {
                    href: "https://example.com/partenaire2",
                    src: "../../images/univ_tol_parte.png",
                    alt: "Partenaire 2",
                  },
                  {
                    href: "https://example.com/partenaire3",
                    src: "../../images/ens_parte.png",
                    alt: "Partenaire 3",
                  },
                  {
                    href: "https://example.com/partenaire4",
                    src: "../../images/misafiry_parte.png",
                    alt: "Partenaire 4",
                  },
                  {
                    href: "https://example.com/partenaire5",
                    src: "../../images/af_parte.png",
                    alt: "Partenaire 5",
                  },
                  {
                    href: "https://example.com/partenaire6",
                    src: "../../images/ihsm_parte.png",
                    alt: "Partenaire 6",
                  },
                  {
                    href: "https://example.com/partenaire6",
                    src: "../../images/sens_parte.png",
                    alt: "Partenaire 7",
                  },
                ].map((partner, idx) => (
                  <a
                    key={idx}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                    style={{ display: 'inline-block' }}
                  >
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="h-24 w-auto object-contain filter grayscale hover:filter-none transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
      </Section>
    </>
  );
};

export default About;