import { useTranslation } from 'react-i18next';

const ResourcesMembership = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{t('nav.membership')}</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('resources.membership.benefitsTitle')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Accès à toutes les publications et ressources exclusives.</li>
          <li>Participation aux événements réservés aux membres.</li>
          <li>Possibilité de soumettre des projets et demandes de subvention.</li>
          <li>Recevoir la newsletter mensuelle.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t('resources.membership.howToJoinTitle')}</h2>
        <p className="mb-4 text-gray-700">
          Pour devenir membre, veuillez remplir le formulaire d’adhésion et payer la cotisation annuelle.
        </p>
        <button className="px-6 py-3 bg-primary-700 text-white rounded hover:bg-primary-800 transition">
          {t('resources.membership.joinButton')}
        </button>
      </section>
    </div>
  );
};

export default ResourcesMembership;
