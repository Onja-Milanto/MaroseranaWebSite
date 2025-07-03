"use client"

import type React from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { ArrowRight, Calendar, Users, BookOpen, ExternalLink } from "lucide-react"
import Section from "../components/ui/Section"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { t } = useTranslation()

  // Mock data
  const latestNews = [
    {
      id: 1,
      title: "Formation des stagiaires de l'Unité des Chercheurs MaroSerana.",
      date: "2025-04-15",
      excerpt: "Cette formation a pour but de renforcer les compétences des stagiaires dans divers domaines de recherche.",
      image: "./images/formation_stagiaire.jpg",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title:
        "La croissance économique malagasy : comprendre les facteurs qui la stimulent. Un essai de politique et perspectives pour Madagascar",
      date: "2025-06-15",
      location: "Hotel des Finances, Toliara",
      image: "../images/economie_venir.jpg",
    },
  ]

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <style>
            {`
              .hero-carousel,
              .hero-carousel .carousel,
              .hero-carousel .carousel-slider,
              .hero-carousel .carousel .slide {
                height: 100vh !important;
                min-height: 500px;
                max-height: 900px;
              }
              .hero-carousel img {
                width: 100%;
                height: 100vh;
                min-height: 500px;
                max-height: 900px;
                object-fit: cover;
              }
            `}
          </style>
          <div className="hero-carousel">
            <Carousel
              autoPlay
              infiniteLoop
              interval={3000}
              transitionTime={1000}
              showThumbs={false}
              showStatus={false}
              swipeable
              emulateTouch
              showArrows={false}
              animationHandler="fade"
            >
              <div>
                <img src="../images/bg11.jpg" alt="Slide 1" />
              </div>
              <div>
                <img src="../images/bg22.jpg" alt="Slide 2" />
              </div>
              <div>
                <img src="../images/bg33.jpg" alt="Slide 3" />
              </div>
              <div>
                <img src="../images/bg4.jpg" alt="Slide 4" />
              </div>
            </Carousel>
            <div className="absolute inset-0 bg-primary-700 opacity-5 z-10 "></div>
          </div>

          <div className="absolute inset-0 bg-primary-700 opacity-50 "></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center mt-20">
          <motion.div className="flex flex-col items-center justify-center mb-6" initial={false}>
            {/* "UC" slice in from left */}
            <motion.span
              className="block text-4xl md:text-6xl font-bold text-white"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
            >
              Unité des Chercheurs
            </motion.span>
            {/* "MaroSerana" with animated infinity gradient text */}
            <style></style>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mt-2 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              <span className="infinity-gradient-text">MaroSerana</span>
              <style>
                {`
                  .infinity-gradient-text {
                  background: linear-gradient(
                    270deg,
                    #00eaff, /* fluo blue */
                    #003366, /* marine blue */
                    #ffffff, /* white */
                    #00eaff,
                    #003366,
                    #ffffff
                  );
                  background-size: 200% 200%;
                  background-clip: text;
                  -webkit-background-clip: text;
                  color: transparent;
                  -webkit-text-fill-color: transparent;
                  animation: infinity-gradient-move 6s linear infinite;
                  }
                  @keyframes infinity-gradient-move {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                  }
                `}
              </style>
            </motion.h1>
          </motion.div>
          <motion.p
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            {t("home.hero.slogan")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <NavLink to="/about">
              <Button
                variant="secondary"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="border-2 border-white rounded-full hover:bg-white hover:text-primary-700 transition-colors duration-300 bg-white bg-opacity-75"
              >
                {t("home.hero.cta")}
              </Button>
            </NavLink>

            <NavLink to="/resources/membership">
              <Button variant="primary" size="lg">
                {t("resources.membership.joinButton")}
              </Button>
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <div className="relative z-10">
        {/* Flowlines SVG background */}
        <div className="absolute inset-0 pointer-events-none z-0 ">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 1200"
            preserveAspectRatio="none"
            className="w-full h-full"
            style={{ minHeight: 600, opacity: 0.55 }}
          >
            {/* Flexible, node/looping, side-originating flowlines with shining animation */}
            <defs>
              <linearGradient id="shine1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa">
                  <animate
                    attributeName="stop-color"
                    values="#60a5fa;#fff;#60a5fa"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#2563eb">
                  <animate
                    attributeName="stop-color"
                    values="#2563eb;#fff;#2563eb"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
              <linearGradient id="shine2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6">
                  <animate
                    attributeName="stop-color"
                    values="#3b82f6;#fff;#3b82f6"
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#1e40af">
                  <animate
                    attributeName="stop-color"
                    values="#1e40af;#fff;#1e40af"
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
              <linearGradient id="shine3" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb">
                  <animate
                    attributeName="stop-color"
                    values="#2563eb;#fff;#2563eb"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#60a5fa">
                  <animate
                    attributeName="stop-color"
                    values="#60a5fa;#fff;#60a5fa"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
              <linearGradient id="shine4" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#1e40af">
                  <animate
                    attributeName="stop-color"
                    values="#1e40af;#fff;#1e40af"
                    dur="2.1s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#3b82f6">
                  <animate
                    attributeName="stop-color"
                    values="#3b82f6;#fff;#3b82f6"
                    dur="2.1s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
            {/* Node/looping, flexible flowlines */}
            <path
              d="M0,150 
                Q180,250 100,400 
                T350,600 
                Q500,700 400,900 
                T700,1200"
              stroke="url(#shine1)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,600 
                Q200,500 250,700 
                Q300,900 600,900 
                Q900,900 900,1200"
              stroke="url(#shine2)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,1050 
                Q300,950 200,800 
                Q100,650 500,600 
                Q900,550 1200,900 
                Q1300,1050 1440,1200"
              stroke="url(#shine3)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M1440,300 
                Q1200,500 1300,700 
                Q1400,900 1000,900 
                Q600,900 700,1200"
              stroke="url(#shine4)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M1440,700 
                Q1100,600 1200,400 
                Q1300,200 900,200 
                Q500,200 500,600 
                Q500,1000 900,1200"
              stroke="url(#shine1)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M1440,1000 
                Q1200,1100 1000,1000 
                Q800,900 600,1100 
                Q400,1300 200,1200"
              stroke="url(#shine2)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,50 
                Q400,300 700,100 
                Q1000,-100 1200,300 
                Q1400,700 1440,1200"
              stroke="url(#shine3)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <Section title={t("home.about.title")} titleCenter bgColor="bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
            <Card className="relative z-20">
              <div className="flex flex-col items-center text-center z-10">
                <Users size={48} className="text-primary-700 mb-4 z-10" />
                <h3 className="text-xl font-semibold mb-3 z-10">{t("home.about.mission")}</h3>
                <p className="text-gray-600">{t("home.about.missionText")}</p>
              </div>
            </Card>
            <Card className="relative z-20">
              <div className="flex flex-col items-center text-center z-10">
                <BookOpen size={48} className="text-primary-700 mb-4 z-10" />
                <h3 className="text-xl font-semibold mb-3">{t("home.about.vision")}</h3>
                <p className="text-gray-600">{t("home.about.visionText")}</p>
              </div>
            </Card>
            <Card className="relative z-20">
              <div className="flex flex-col items-center text-center z-10">
                <Calendar size={48} className="text-primary-700 mb-4 z-10" />
                <h3 className="text-xl font-semibold mb-3">{t("home.about.values")}</h3>
                <p className="text-gray-600">{t("home.about.valuesText")}</p>
              </div>
            </Card>
          </div>
          <div className="mt-8 text-center relative z-20">
            <NavLink to="/about">
              <Button variant="primary" size="md">
                {t("home.about.learnMore")}
              </Button>
            </NavLink>
          </div>
        </Section>
        {/* Ressources Section */}
        <Section title={t("home.news.title")}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
            {/* 1er card: garder la news la plus récente */}
            <Card
              key={latestNews[0].id}
              title={latestNews[0].title}
              subtitle={formatDate(latestNews[0].date)}
              image={latestNews[0].image}
              className="border border-gray-200 flex flex-col h-full relative z-20"
            >
              <div className="flex-1">
                <p className="text-gray-600 mb-4">{latestNews[0].excerpt}</p>
              </div>
              <div className="mt-auto">
            <Link
              to="/infosevents/104"
              className="btn btn-outline w-full mt-2 flex items-center justify-center"
            >
              {t("common.readMore")}
              <ArrowRight size={16} className="ml-2" />
            </Link>

              </div>
            </Card>
            {/* 2ème card: fichier utile - formulaire d'adhésion (sans image, flèche vers le bas pour download) */}
            <Card
              title="Formulaire d'adhésion"
              subtitle={t("resources.membership.joinSubtitle") || "Devenez membre"}
              className="border border-gray-200 flex flex-col h-full relative z-20"
            >
              <div className="flex-1 ">
                <p className="text-gray-600 mb-4">
                  {t("resources.membership.cardText") ||
                    "Téléchargez et remplissez le formulaire pour rejoindre l'unité des chercheurs MaroSerana."}
                </p>
              </div>
              <div className="mt-auto">
                <a
                  href="/docs/formulaire_adhesion.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="block"
                >
                  <Button
                    variant="outline"
                    icon={<ArrowRight style={{ transform: "rotate(90deg)" }} size={16} />}
                    iconPosition="right"
                    className="w-full mt-2"
                  >
                    {t("resources.membership.downloadForm") || "Télécharger le formulaire"}
                  </Button>
                </a>
              </div>
            </Card>
            {/* 3ème card: 2 questions FAQ avec réponses pour aperçu (sans image, sans bouton) */}
            <Card title="FAQ" subtitle="" className="border border-gray-200 flex flex-col h-full relative z-20">
              <div className="flex-1">
                <div className="mb-4">
                  <p className="font-semibold">Comment puis-je devenir membre de l'unité&nbsp;?</p>
                  <p className="text-gray-600">
                    Pour devenir membre, veuillez consulter la section Adhésion de notre site et suivre les instructions
                    pour soumettre votre candidature.
                  </p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Comment puis-je m'inscrire à un événement&nbsp;?</p>
                  <p className="text-gray-600">
                    Vous pouvez vous inscrire à nos événements en visitant la page Événements et en cliquant sur le
                    bouton d'inscription de l'événement qui vous intéresse.
                  </p>
                </div>
              </div>
              <div className="mt-auto text-center">
                <NavLink to="/resources/faq">
                  <Button variant="outline" size="sm" className="w-full">
                    Accéder aux FAQ
                  </Button>
                </NavLink>
              </div>
            </Card>
          </div>
          <div className="mt-10 text-center relative z-20">
            <NavLink to="/resources/publications">
              <Button variant="outline">{t("home.news.viewAll")}</Button>
            </NavLink>
          </div>
        </Section>

        {/* Upcoming Events Section */}
        <Section title={t("home.events.title")} bgColor="bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
            {upcomingEvents.map((event) => (
              <Card key={event.id} title={event.title} image={event.image}>
                <div className="flex items-center text-gray-600 mb-2 z-10">
                  <Calendar size={16} className="mr-2" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <ExternalLink size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <NavLink to={`/events/${event.id}`}>
                  <Button variant="primary" fullWidth>
                    {t("common.learnMore")}
                  </Button>
                </NavLink>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center relative z-20">
            <NavLink to="/events">
              <Button variant="outline">{t("home.events.viewAll")}</Button>
            </NavLink>
          </div>
        </Section>

        {/* Partenariat Section */}
        <Section title="Nos partenaires" bgColor="bg-white">
          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10">
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
                href: "hhttps://www.facebook.com/p/ENS-Maninday-Tulear-100068540318245/?locale=fr_FR",
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
                className="transition-transform hover:scale-105"
                style={{ display: "inline-block" }}
              >
                <img
                  src={partner.src || "/placeholder.svg"}
                  alt={partner.alt}
                  className="h-24 w-auto object-contain filter grayscale hover:filter-none transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}

export default Home
