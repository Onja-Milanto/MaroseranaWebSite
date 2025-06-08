import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ResourcesMembership = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section avec overlay */}
      <section
        className="relative pt-24 pb-10 min-h-[300px] md:min-h-[400px]"
        style={{
          backgroundImage: "url('../../images/bg33.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
        }}
      >
        {/* Overlay sombre à 50% */}
        <div className="absolute inset-0 bg-primary-700/50 backdrop-brightness-75 z-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg mt-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('about.title')}
          </motion.h1>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-primary-900 text-center">
          {t('nav.membership')}
        </h1>

        {/* Avantages */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-primary-800">
            {t('resources.membership.benefitsTitle')}
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>Accès à toutes les publications et ressources exclusives.</li>
            <li>Participation aux événements réservés aux membres.</li>
            <li>Possibilité de soumettre des projets et demandes de subvention.</li>
            <li>Recevoir la newsletter mensuelle.</li>
          </ul>
        </section>

        {/* Comment adhérer */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-primary-800">
            {t('resources.membership.howToJoinTitle')}
          </h2>
          <p className="mb-4 text-gray-700 text-lg leading-relaxed">
            Pour devenir membre, veuillez remplir le formulaire d’adhésion et payer la cotisation annuelle.
          </p>
          <button className="px-6 py-3 bg-primary-700 text-white rounded-full hover:bg-primary-800 transition font-semibold shadow-md">
            {t('resources.membership.joinButton')}
          </button>
        </section>
      </div>
    </>
  );
};

export default ResourcesMembership;
