import { useTranslation } from 'react-i18next';

const EventsUpcoming = () => {
  const { t } = useTranslation();

  // Exemple simple d'événements à venir
  const upcomingEvents = [
    {
      title: 'Conférence sur les énergies renouvelables',
      date: '2025-07-15',
      location: 'Antananarivo, Madagascar',
      organizer: 'UC MaroSerana',
      description:
        'Rejoignez-nous pour une journée dédiée aux innovations dans le domaine des énergies renouvelables.',
      link: '#',
    },
    {
      title: 'Atelier sur la recherche collaborative',
      date: '2025-08-05',
      location: 'Toamasina, Madagascar',
      organizer: 'UC MaroSerana',
      description:
        'Un atelier pratique pour renforcer les collaborations entre chercheurs locaux et internationaux.',
      link: '#',
    },
    {
      title: 'Webinaire sur les nouvelles méthodologies',
      date: '2025-09-10',
      location: 'En ligne',
      organizer: 'UC MaroSerana',
      description:
        'Explorez les dernières méthodologies en recherche scientifique avec des experts du domaine.',
      link: '#',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t('events.upcoming')}</h1>

      {upcomingEvents.length === 0 ? (
        <p className="text-gray-700">{t('events.noEvents')}</p>
      ) : (
        <ul className="space-y-8">
          {upcomingEvents.map((event, index) => (
            <li key={index} className="border-b pb-6">
              <h2 className="text-2xl font-semibold text-primary-700">{event.title}</h2>
              <p className="text-gray-600 italic">
                {new Date(event.date).toLocaleDateString()} — {event.location}
              </p>
              <p className="mt-2 text-gray-700">{event.description}</p>
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

export default EventsUpcoming;
