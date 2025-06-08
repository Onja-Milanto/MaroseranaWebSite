import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const EventsPast = () => {
  const { t } = useTranslation();

  const pastEvents = [
    {
      title: 'Être femme dans le Sud-Ouest malgache : défis et perspectives',
      date: '2025-05-29',
      location: 'Bibliothèque DEGS, Toliara',
      organizer: 'UC MaroSerana',
      summary:
        'Une conférence sur la réflexion des défis et perspectives à être une femme dans le sud-ouest malgache.',
      link: '#',
    },
    {
      title: 'Plurilinguisme et expression artistique : repenser l’inclusion',
      date: '2025-05-27',
      location: 'Bibliothèque DEGS, Toliara',
      organizer: 'UC MaroSerana',
      summary:
        'Des présentations sur les avancées récentes en santé publique et stratégies d’intervention.',
      link: '#',
    },
    {
      title:
        'Étude comparative des variations des pluies et températures dans le contexte du changement climatique : cas du Sud-Ouest et d’Ihorombe',
      date: '2025-05-21',
      location: 'Bibliothèque DEGS, Toliara',
      organizer: 'UC MaroSerana',
      summary:
        'Analyse climatique régionale dans le cadre des évolutions environnementales récentes.',
      link: '#',
    },
    {
      title: "Marche pour l'océan 2025",
      date: '2025-05-17',
      location: 'Tsongobory, Toliara',
      organizer: 'UC MaroSerana',
      summary:
        'Mobilisation communautaire pour la préservation marine dans le sud-ouest malgache.',
      link: '#',
    },
    {
      title:
        'Créer des ponts entre Histoire et Marché du travail dans un monde en mutation / Décolonisation des patrimoines africains',
      date: '2025-05-14',
      location: 'Amphithéâtre Jean Ferlin, Université de Toliara',
      organizer: 'UC MaroSerana',
      summary:
        'Un double événement pour repenser l’histoire et les enjeux du patrimoine africain.',
      link: '#',
    },
    {
      title:
        'Les réalités sociales face aux activités d’éducation environnementale dans le cadre de l’Aire Marine Éducative à Ankalika – Toliara',
      date: '2025-05-08',
      location: 'Alliance Française, Toliara',
      organizer: 'UC MaroSerana',
      summary:
        'Éducation environnementale et dynamique sociale autour de l’AME à Ankalika.',
      link: '#',
    },
    {
      title: 'L’eau, les vivants humains et non-humains en paysages nourriciers',
      date: '2025-05-03',
      location: 'UC MaroSerana, Toliara',
      organizer: 'UC MaroSerana',
      summary:
        'Une réflexion interdisciplinaire sur l’eau et les écosystèmes vivants.',
      link: '#',
    },
    {
      title:
        'Etude de la criminalité à Toliara : les outils et méthodes socio-criminologiques mis à l’épreuve',
      date: '2025-04-10',
      location: 'Amphithéâtre Jean Ferlin, Université de Toliara',
      organizer: 'Alliance Française, Toliara',
      summary:
        'Approches de terrain et analyse des réalités criminelles locales.',
      link: '#',
    },
    {
      title:
        'Souveraineté des États africains sur les ressources naturelles dans le contexte de fragilité',
      date: '2025-05-01',
      location: 'Amphithéâtre Jean Ferlin, Université de Toliara',
      organizer: 'Bibliothèque DEGS, Toliara',
      summary:
        'Discussion sur la souveraineté et les enjeux géopolitiques autour des ressources.',
      link: '#',
    },
    {
      title:
        'Formation sur la transcription des bandes sonores, axée sur les données relatives aux réserves marines à Sarodrano',
      date: '2025-04-28',
      location: 'Amphithéâtre Jean Ferlin, Université de Toliara',
      organizer: 'UC MaroSerana',
      summary:
        'Atelier de transcription et archivage de données environnementales.',
      link: '#',
    },
    {
      title:
        'Réflexion anthropo-politique sur le kokolampo : Reconstruction du Hazomanga et de la souveraineté nationale',
      date: '2025-04-28',
      location: 'Amphithéâtre Jean Ferlin, Université de Toliara',
      organizer: 'Alliance Française, Toliara',
      summary:
        'Une approche culturelle et politique des symboles de gouvernance traditionnelle.',
      link: '#',
    },
    {
      title:
        "FOJAEB : Forum des Jeunes Africains pour l'Économie Bleue qui a lieu à Toliara",
      date: '2025-05-17',
      location: 'Amphithéâtre Jean Ferlin, Université de Toliara',
      organizer: 'UC MaroSerana',
      summary:
        'Forum régional autour de l’économie bleue, des ressources et de la jeunesse africaine.',
      link: '#',
    },
  ];

  return (
    <>
      {/* Hero Section avec overlay bleu semi-transparent */}
      <section
        className="relative pt-24 pb-10 min-h-[300px] md:min-h-[400px] overflow-hidden"
        style={{
          backgroundImage: "url('../../images/bg33.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary-700 opacity-50 z-0" />
        <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mt-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('about.title')}
          </motion.h1>
          <div className="w-full flex justify-center mt-8">
            <a
              href="/about"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 hover:from-primary-700 hover:to-primary-900 transition-all duration-300 text-lg"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              {t('common.goToAbout')}
            </a>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="bg-primary-40 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-10 text-center">
            {t('events.past')}
          </h1>

          {pastEvents.length === 0 ? (
            <p className="text-gray-700 text-center">{t('events.noEvents')}</p>
          ) : (
            <ul className="space-y-10">
              {pastEvents.map((event, index) => (
                <li
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-700 transition hover:shadow-lg"
                >
                  <h2 className="text-2xl font-semibold text-primary-700 mb-2">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 italic">
                    {new Date(event.date).toLocaleDateString()} — {event.location}
                  </p>
                  <p className="mt-3 text-gray-800">{event.summary}</p>
                  <p className="mt-2 text-gray-600">
                    <strong>{t('events.organizer')} :</strong> {event.organizer}
                  </p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 bg-primary-700 text-white rounded-full hover:bg-primary-800 transition"
                  >
                    {t('common.readMore')}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default EventsPast;
