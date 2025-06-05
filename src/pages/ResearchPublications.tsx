import { useTranslation } from 'react-i18next';

const ResearchPublications = () => {
  const { t } = useTranslation();

  // Exemple simple de publications statiques, à remplacer par des données réelles plus tard
  const publications = [
    {
      title: 'Impact du changement climatique sur la biodiversité malgache',
      authors: 'Rakotoarisoa et al.',
      year: 2023,
      journal: 'Revue Scientifique de Madagascar',
      link: '#',
    },
    {
      title: 'Innovations dans la médecine traditionnelle',
      authors: 'Rasoa et al.',
      year: 2022,
      journal: 'Journal Africain de Médecine',
      link: '#',
    },
    {
      title: 'Éducation et inclusion numérique dans les zones rurales',
      authors: 'Andrianarivo et al.',
      year: 2021,
      journal: 'Pédagogie et Société',
      link: '#',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t('research.publications.title')}</h1>

      <p className="text-gray-700 mb-6 leading-relaxed">{t('research.publications.content')}</p>

      <ul className="space-y-6">
        {publications.map((pub, index) => (
          <li key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold">{pub.title}</h3>
            <p className="text-gray-600">
              {pub.authors} — <em>{pub.journal}</em> ({pub.year})
            </p>
            <a
              href={pub.link}
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

export default ResearchPublications;
