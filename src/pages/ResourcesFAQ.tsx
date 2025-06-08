import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const ResourcesFAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('resources.faq.questions.membership.question'),
      answer: t('resources.faq.questions.membership.answer'),
    },
    {
      question: t('resources.faq.questions.events.question'),
      answer: t('resources.faq.questions.events.answer'),
    },
    {
      question: t('resources.faq.questions.contact.question'),
      answer: t('resources.faq.questions.contact.answer'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-10 min-h-[300px] md:min-h-[400px]"
        style={{
          backgroundImage: "url('../../images/bg33.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-primary-700"
          style={{ opacity: 0.3, pointerEvents: 'none' }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-white mt-16 mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('nav.faq')}
          </motion.h1>

          {/* Redirection vers publications */}
          <div className="flex justify-center mt-6">
            <NavLink
              to="../resources/publications"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 hover:from-primary-700 hover:to-primary-900 transition-all duration-300 text-lg"
            >
              <svg
                className="w-6 h-6"
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
              {t('common.goToPublications') || 'Aller aux publications'}
            </NavLink>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary-900 mb-10 text-center">
          {t('nav.faq')}
        </h2>

        <div className="space-y-8">
          {faqs.map(({ question, answer }, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                {question}
              </h3>
              <p className="text-gray-700 leading-relaxed">{answer}</p>
            </motion.div>
          ))}
        </div>

        {/* Poser une question button */}
        <div className="text-center mt-16">
          <NavLink
            to="/contact"
            className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            {t('resources.faq.askQuestion') || 'Poser une question'}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ResourcesFAQ;
