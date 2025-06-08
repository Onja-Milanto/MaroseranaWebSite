import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ResourcesPublications = () => {
  const { t } = useTranslation();

  const publications = [
    {
      title: "Formation des stagiaires de l'UC MaroSerana",
      authors: 'M. Flaubert Veriza, M. Manjaka Fereta',
      year: 2025,
      link: '#',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-10 min-h-[300px] md:min-h-[400px] overflow-hidden"
        style={{
          backgroundImage: "url('../../images/bg33.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
        }}
      >
        {/* Overlay à 50% */}
        <div className="absolute inset-0 bg-primary-700/50 backdrop-brightness-75 z-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mt-16">
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('about.titleResources')}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Publications */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-primary-900 text-center">
          {t('nav.publications')}
        </h1>
        <ul className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, idx) => (
            <li
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg transition hover:shadow-xl"
            >
              <h2 className="text-xl font-bold text-primary-800 mb-2">{pub.title}</h2>
              <p className="text-gray-600 italic mb-3">
                {pub.authors} — {pub.year}
              </p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-primary-700 text-white rounded-full hover:bg-primary-800 transition"
              >
                {t('common.readMore')}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Membership */}
      <div className="container mx-auto px-4 py-16 bg-primary-50 rounded-t-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-primary-900 text-center">
          {t('nav.membership')}
        </h1>

        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary-800">
            {t('resources.membership.benefitsTitle')}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Accès à toutes les publications et ressources exclusives.</li>
            <li>Participation aux événements réservés aux membres.</li>
            <li>Soumission de projets et demandes de subvention.</li>
            <li>Recevoir la newsletter mensuelle.</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary-800">
            {t('resources.membership.howToJoinTitle')}
          </h2>
          <p className="mb-4 text-gray-700 text-lg">
            Pour devenir membre, veuillez remplir le formulaire d’adhésion et payer la cotisation annuelle.
          </p>
          <button className="px-6 py-3 bg-primary-700 text-white rounded-full font-semibold hover:bg-primary-800 transition">
            {t('resources.membership.joinButton')}
          </button>
        </section>
      </div>

      {/* FAQ */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-primary-900 text-center">
          {t('nav.faq')}
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {[
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
          ].map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border-l-4 border-primary-700"
            >
              <h2 className="text-xl font-semibold mb-2 text-primary-800">{question}</h2>
              <p className="text-gray-700 text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResourcesPublications;
