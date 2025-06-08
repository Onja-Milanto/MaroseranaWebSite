import { useTranslation } from 'react-i18next';

const ResourcesPublications = () => {
  const { t } = useTranslation();

  // Publications
  const publications = [
    {
      title: 'Étude sur la biodiversité à Madagascar',
      authors: 'R. Rakoto, A. Andriamasy',
      year: 2024,
      link: '#',
    },
    {
      title: 'Impact des changements climatiques',
      authors: 'L. Ramarolahy',
      year: 2023,
      link: '#',
    },
    {
      title: 'Technologies vertes et innovations',
      authors: 'F. Andrianarisoa',
      year: 2025,
      link: '#',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{t('nav.publications')}</h1>
      <ul className="space-y-6">
        {publications.map((pub, idx) => (
          <li
            key={idx}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{pub.title}</h2>
            <p className="text-gray-700 italic">{pub.authors} - {pub.year}</p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-3 py-1 bg-primary-700 text-white rounded hover:bg-primary-800 transition"
            >
              {t('common.readMore')}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcesPublications;
