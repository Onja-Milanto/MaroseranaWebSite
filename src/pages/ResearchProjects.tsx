import { useTranslation } from 'react-i18next';

const ResearchProjects = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t('research.projects.title')}</h1>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {t('research.projects.content')}
      </p>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Exemple statique de projets. Tu peux les remplacer par des composants dynamiques plus tard */}
        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <h3 className="text-xl font-semibold mb-2">Projet 1 : Biodiversité locale</h3>
          <p className="text-gray-600">Étude de la faune et de la flore dans les forêts tropicales de Madagascar.</p>
        </div>

        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <h3 className="text-xl font-semibold mb-2">Projet 2 : Santé communautaire</h3>
          <p className="text-gray-600">Analyse des systèmes de santé dans les zones rurales du pays.</p>
        </div>

        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <h3 className="text-xl font-semibold mb-2">Projet 3 : Éducation scientifique</h3>
          <p className="text-gray-600">Promotion de l’enseignement des sciences dans les établissements secondaires.</p>
        </div>
      </section>
    </div>
  );
};

export default ResearchProjects;
