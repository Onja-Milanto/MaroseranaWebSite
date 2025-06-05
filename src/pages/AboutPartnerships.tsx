import { useTranslation } from 'react-i18next';

const AboutPartnerships = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t('about.partnerships.title')}</h1>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {t('about.partnerships.content')}
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Nos partenaires principaux</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Universités et instituts de recherche nationaux</li>
          <li>Organisations non gouvernementales</li>
          <li>Fondations scientifiques internationales</li>
          <li>Entreprises engagées dans la recherche et l'innovation</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPartnerships;
