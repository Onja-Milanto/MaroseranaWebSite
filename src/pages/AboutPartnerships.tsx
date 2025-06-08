import { useTranslation } from 'react-i18next';

const AboutPartnerships = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-10 bg-primary-700 min-h-[300px] md:min-h-[400px]"
        style={{
          backgroundImage: "url('../../images/bg33.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-700/50 backdrop-brightness-75 z-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-16 mb-6 drop-shadow-lg">
            {t('about.title')}
          </h1>
          <div className="flex justify-center">
            <a
              href="/about"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 hover:from-primary-700 hover:to-primary-900 transition-all duration-300 text-lg"
            >
              <svg
                className="w-6 h-6"
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
              Aller à cet onglet
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-primary-700 mb-6">
          {t('about.partnerships.title')}
        </h2>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          {t('about.partnerships.content')}
        </p>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-primary-600 mb-3">Nos partenaires principaux</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Universités et instituts de recherche nationaux</li>
            <li>Organisations non gouvernementales</li>
            <li>Fondations scientifiques internationales</li>
            <li>Entreprises engagées dans la recherche et l'innovation</li>
          </ul>
        </section>

        {/* Logos partenaires sans titre, en couleur, et plus grands */}
        <div className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-items-center">
            {[
              {
                href: "https://www.cirad.fr/",
                src: "../../images/cirad_parte.png",
                alt: "Partenaire 1",
              },
              {
                href: "https://www.univ-toliara.mg/",
                src: "../../images/univ_tol_parte.png",
                alt: "Partenaire 2",
              },
              {
                href: "https://www.facebook.com/p/ENS-Maninday-Tulear-100068540318245/?locale=fr_FR",
                src: "../../images/ens_parte.png",
                alt: "Partenaire 3",
              },
              {
                href: "https://www.facebook.com/p/Mpikaroky-Misafiry-2M-100078101409691/",
                src: "../../images/misafiry_parte.png",
                alt: "Partenaire 4",
              },
              {
                href: "https://www.facebook.com/alliancetulear/?locale=fr_FR",
                src: "../../images/af_parte.png",
                alt: "Partenaire 5",
              },
              {
                href: "https://student.ihsm.mg/",
                src: "../../images/ihsm_parte.png",
                alt: "Partenaire 6",
              },
              {
                href: "https://www.umr-sens.fr/",
                src: "../../images/sens_parte.png",
                alt: "Partenaire 7",
              },
            ].map((partner, idx) => (
              <a
                key={idx}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-28 w-auto object-contain transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPartnerships;
