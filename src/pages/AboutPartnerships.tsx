import { useTranslation } from 'react-i18next';

const AboutPartnerships = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="relative pt-24 pb-10 bg-primary-700 min-h-[300px] md:min-h-[400px]"
        style={{
          backgroundImage: "url('../../images/bg33.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mt-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('about.title')}
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-12">
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
            Aller à cet onglet
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">{t('about.partnerships.title')}</h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {t('about.partnerships.content')}
        </p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Nos partenaires principaux</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Universités et instituts de recherche nationaux</li>
            <li>Organisations non gouvernementales</li>
            <li>Fondations scientifiques internationales</li>
            <li>Entreprises engagées dans la recherche et l'innovation</li>
          </ul>
        </section>
      </div>

      {/* Partenariat Section */}
      <div className="mt-16 mb-16">
        <h3 className="text-2xl font-semibold text-primary-700 mb-8">
          Partenariat
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10">
          {[
            {
              href: "https://univ-toliara.com",
              src: "../../images/cirad_parte.png",
              alt: "Partenaire 1",
            },
            {
              href: "https://example.com/partenaire2",
              src: "../../images/univ_tol_parte.png",
              alt: "Partenaire 2",
            },
            {
              href: "https://example.com/partenaire3",
              src: "../../images/ens_parte.png",
              alt: "Partenaire 3",
            },
            {
              href: "https://example.com/partenaire4",
              src: "../../images/misafiry_parte.png",
              alt: "Partenaire 4",
            },
            {
              href: "https://example.com/partenaire5",
              src: "../../images/af_parte.png",
              alt: "Partenaire 5",
            },
            {
              href: "https://example.com/partenaire6",
              src: "../../images/ihsm_parte.png",
              alt: "Partenaire 6",
            },
            {
              href: "https://example.com/partenaire6",
              src: "../../images/sens_parte.png",
              alt: "Partenaire 7",
            },
          ].map((partner, idx) => (
            <a
              key={idx}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
              style={{ display: 'inline-block' }}
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-24 w-auto object-contain filter grayscale hover:filter-none transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPartnerships;
