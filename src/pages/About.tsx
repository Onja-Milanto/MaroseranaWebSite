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
      name: 'Dr. Mohammed Alami',
      title: 'President',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Professor of Molecular Biology with over 20 years of research experience.'
    },
    {
      id: 2,
      name: 'Dr. Fatima Benali',
      title: 'Vice President',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Associate Professor of Chemistry and specialist in sustainable materials.'
    },
    {
      id: 3,
      name: 'Prof. Ahmed Najjar',
      title: 'Scientific Director',
      image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Renowned physicist with contributions to quantum computing research.'
    },
    {
      id: 4,
      name: 'Dr. Sarah Bennani',
      title: 'Secretary General',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Specialist in research methodology and academic publishing.'
    }
  ];

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
      <section className="relative pt-32 pb-16 bg-primary-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('about.title')}
          </motion.h1>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc sit amet nisl. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc sit amet nisl.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Board members would go here, using a simpler card design */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-primary-700">Dr. Rachid El Fassi</h4>
              <p className="text-gray-600 text-sm">Professor of Mathematics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-primary-700">Dr. Nadia Tazi</h4>
              <p className="text-gray-600 text-sm">Associate Professor of Computer Science</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-primary-700">Prof. Omar Belkheir</h4>
              <p className="text-gray-600 text-sm">Head of Research Department</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;