import { useTranslation } from 'react-i18next';

const AboutTeam = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t('about.team.title')}</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">{t('about.team.leadership')}</h2>
        <p className="text-gray-700 leading-relaxed">
          Notre équipe dirigeante supervise les initiatives de recherche et veille à la bonne gestion de l'association.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">{t('about.team.board')}</h2>
        <p className="text-gray-700 leading-relaxed">
          Le conseil d'administration est composé de membres engagés issus de divers horizons scientifiques et académiques.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">{t('about.team.scientific')}</h2>
        <p className="text-gray-700 leading-relaxed">
          Le comité scientifique évalue les projets, valide les publications et oriente les priorités de recherche.
        </p>
      </section>
    </div>
  );
};

export default AboutTeam;
