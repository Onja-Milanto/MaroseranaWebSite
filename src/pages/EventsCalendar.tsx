import { useTranslation } from 'react-i18next';

const EventsCalendar = () => {
  const { t } = useTranslation();

  // Exemple simple d'événements avec dates
  const events = [
    {
      title: 'Atelier innovation',
      date: '2025-07-10',
      location: 'Antananarivo',
      link: '#',
    },
    {
      title: 'Conférence scientifique',
      date: '2025-07-15',
      location: 'Toamasina',
      link: '#',
    },
    {
      title: 'Journée portes ouvertes',
      date: '2025-07-20',
      location: 'Fianarantsoa',
      link: '#',
    },
  ];

  // Regroupement par mois (très basique)
  const groupedEvents = events.reduce((acc, event) => {
    const month = new Date(event.date).toLocaleString(undefined, { month: 'long', year: 'numeric' });
    if (!acc[month]) acc[month] = [];
    acc[month].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{t('events.calendar')}</h1>

      {Object.entries(groupedEvents).map(([month, monthEvents]) => (
        <section key={month} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary-700">{month}</h2>
          <ul className="space-y-6">
            {monthEvents.map((event, idx) => (
              <li key={idx} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600">
                  {new Date(event.date).toLocaleDateString()} — {event.location}
                </p>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-primary-700 text-white rounded hover:bg-primary-800 transition"
                >
                  {t('common.readMore')}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default EventsCalendar;
