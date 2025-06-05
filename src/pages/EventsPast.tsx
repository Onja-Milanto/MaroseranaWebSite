import { useTranslation } from 'react-i18next';

const EventsPast = () => {
  const { t } = useTranslation();

  // Exemple simple d'événements passés
  const pastEvents = [
    {
      title: 'Symposium sur la biodiversité',
      date: '2024-11-20',
      location: 'Antananarivo, Madagascar',
      organizer: 'UC MaroSerana',
      summary:
        'Une conférence rassemblant des experts pour discuter de la conservation de la biodiversité à Madagascar.',
      link: '#',
    },
    {
      title: 'Colloque sur la santé publique',
      date: '2024-09-10',
      location: 'Fianarantsoa, Madagascar',
      organizer: 'UC MaroSerana',
      summary:
        'Des présentations sur les avancées récentes en santé publique et stratégies d’intervention.',
      link: '#',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t('events.past')}</h1>

      {pastEvents.length === 0 ? (
        <p className="text-gray-700">{t('events.noEvents')}</p>
      ) : (
        <ul className="space-y-8">
          {pastEvents.map((event, index) => (
            <li key={index} className="border-b pb-6">
              <h2 className="text-2xl font-semibold text-primary-700">{event.title}</h2>
              <p className="text-gray-600 italic">
                {new Date(event.date).toLocaleDateString()} — {event.location}
              </p>
              <p className="mt-2 text-gray-700">{event.summary}</p>
              <p className="mt-1 text-gray-500">
                <strong>{t('events.organizer')} :</strong> {event.organizer}
              </p>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-primary-700 text-white rounded hover:bg-primary-800 transition"
              >
                {t('common.readMore')}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventsPast;
