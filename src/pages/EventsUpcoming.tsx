import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const EventsUpcoming = () => {
  const { t } = useTranslation();

  const upcomingEvents = [
    {
      title:
        'La croissance économique malagasy : comprendre les facteurs qui la stimulent. Un essai de politique et perspectives pour Madagascar',
      date: '2025-06-15',
      location: 'Hotel des Finances, Toliara',
      organizer: 'UC MaroSerana',
      description:
        "Rejoignez-nous pour en apprendre plus sur la croissance de l'économie à Madagascar.",
      link: '#',
    },
  ];

  return (
    <>
      {/* Hero Section avec calque bleu 30% */}
      <section
        className="relative pt-24 pb-10 min-h-[300px] md:min-h-[400px] overflow-hidden"
        style={{
          backgroundImage: "url('../../images/bg33.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Calque bleu semi-transparent */}
        <div className="absolute inset-0 bg-primary-700 opacity-50 z-0"></div>

        {/* Contenu au-dessus du calque */}
        <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mt-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('about.title')}
          </motion.h1>
          <div className="w-full flex justify-center mt-8">
            <a
              href="/about"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 hover:from-primary-700 hover:to-primary-900 transition-all duration-300 text-lg"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              {t('common.goToAbout')}
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-primary-40 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-10 text-center">
            {t('events.upcoming')}
          </h1>

          {upcomingEvents.length === 0 ? (
            <p className="text-gray-700 text-center">{t('events.noEvents')}</p>
          ) : (
            <ul className="space-y-10">
              {upcomingEvents.map((event, index) => (
                <li
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-700 transition hover:shadow-lg"
                >
                  <h2 className="text-2xl font-semibold text-primary-700 mb-2">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 italic">
                    {new Date(event.date).toLocaleDateString()} — {event.location}
                  </p>
                  <p className="mt-3 text-gray-800">{event.description}</p>
                  <p className="mt-2 text-gray-600">
                    <strong>{t('events.organizer')} :</strong> {event.organizer}
                  </p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 bg-primary-700 text-white rounded-full hover:bg-primary-800 transition"
                  >
                    {t('common.readMore')}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default EventsUpcoming;
