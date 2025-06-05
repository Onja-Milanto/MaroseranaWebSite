import { useTranslation } from 'react-i18next';

const ResearchGrants = () => {
  const { t } = useTranslation();

  // Exemple simple de données de subventions (grants)
  const grants = [
    {
      title: 'Fonds pour la recherche en environnement',
      organization: 'Ministère de l\'Environnement',
      amount: '50 000 €',
      deadline: '30 juin 2025',
      link: '#',
    },
    {
      title: 'Programme de soutien à l’innovation scientifique',
      organization: 'Agence Nationale de la Recherche',
      amount: '75 000 €',
      deadline: '15 septembre 2025',
      link: '#',
    },
    {
      title: 'Bourse pour la recherche en santé publique',
      organization: 'Fondation Santé Madagascar',
      amount: '40 000 €',
      deadline: '10 août 2025',
      link: '#',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t('research.grants.title')}</h1>

      <p className="text-gray-700 mb-6 leading-relaxed">{t('research.grants.content')}</p>

      <ul className="space-y-6">
        {grants.map((grant, index) => (
          <li key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold">{grant.title}</h3>
            <p className="text-gray-600">
              {grant.organization} — {grant.amount}
            </p>
            <p className="text-gray-500 italic">Date limite : {grant.deadline}</p>
            <a
              href={grant.link}
              className="text-primary-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('common.readMore')}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchGrants;
