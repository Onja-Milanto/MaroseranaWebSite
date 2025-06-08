"use client"

import type React from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Section from "../components/ui/Section"
import { NavLink } from "react-router-dom"

const About: React.FC = () => {
  const { t } = useTranslation()

  // Mock team data
  const teamMembers = [
    
    {
      id: 1,
      name: "M. FERETA Manjaka Rodin",
      title: "Président",
      image: "../../images/fereta3.jpg",
      bio: "Masterant en Géographie sociale, Assistant Académique en Géographie.",
    },
    {
      id: 2,
      
      name: "Dr. VERIZA Francis",
      title: "Directeur Académique",
      image: "../../images/dr_veriza.jpg",
      bio: "Maître de conférences en géographie, enseignant actif et contributeur à des projets environnementaux internationaux.",
    },
    {
      id: 3,
      name: "VERIZA Espérant Flaubert",
      title: "Vice-Président",
      image: "../images/flaubert.jpg",
      bio: "Droit de l'environnement et Droit de la mer.",
    },
    {
      id: 4,
      name: "M. RAZAFINTSEHENO Hasina Fortunat Raphael",
      title: "Secrétaire Général",
      image: "../../images/fortunat.jpg",
      bio: "Spécialisé en Ecotourisme.",
    },
    {
      id: 5,
      name: "Mme HADIDJA Aboudou",
      title: "Trésorière",
      image: "../images/treso.png",
      bio: "Renowned physicist with contributions to quantum computing research.",
    },
    {
      id: 6,
      name: "M. GENAKE MAKASARA Emmanuelson Johary",
      title: "Responsable de communication",
      image: "../../images/johary.jpg",
      bio: "Expert in environmental science and sustainable development.",
    },
  ]

  // Make TeamMember container a bit smaller
  // (Reduce h-64 to h-48, p-6 to p-4, and image size)

  const TeamMember: React.FC<{
    id: number
    name: string
    title: string
    image: string
    bio: string
  }> = ({ id, name, title, image, bio }) => {
    return (
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-48 overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <NavLink to={`/infoteam/${id}`}>
            <h3 className="text-xl font-semibold text-primary-700 hover:text-primary-900 cursor-pointer transition-colors duration-200">
              {name}
            </h3>
          </NavLink>
          <p className="text-secondary-500 font-medium mb-3">{title}</p>
          <p className="text-gray-600">{bio}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-10 bg-primary-700 min-h-[300px] md:min-h-[400px]"
        style={{
          backgroundImage: "url('../../images/bg33.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blue overlay */}
        <div
          className="absolute inset-0 bg-primary-700"
          style={{ opacity: 0.5, pointerEvents: "none" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mt-16">
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t("about.title")}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content with SVG Background */}
      <div className="relative z-10">
        {/* Flowlines SVG background */}
        <div className="absolute inset-0 pointer-events-none z-0">
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

        {/* History Section */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20">
            <div>
              <motion.h2
                className="text-3xl font-bold text-primary-700 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t("about.history.title")}
              </motion.h2>
              <motion.p
                className="text-gray-600 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t("about.history.content")}
              </motion.p>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="../../images/history.jpg"
                alt="UC MaroSerana History"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </motion.div>
          </div>
        </Section>

        {/* Mission, Vision, Values Section */}
        <Section bgColor="bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary-700 mb-4">{t("about.mission.title")}</h3>
              <p className="text-gray-600">{t("about.mission.content")}</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-primary-700 mb-4">{t("about.vision.title")}</h3>
              <p className="text-gray-600">{t("about.vision.content")}</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-primary-700 mb-4">{t("about.values.title")}</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold text-primary-700">{t("about.values.excellence")}: </span>
                  <span className="text-gray-600">{t("about.values.excellenceText")}</span>
                </li>
                <li>
                  <span className="font-semibold text-primary-700">{t("about.values.integrity")}: </span>
                  <span className="text-gray-600">{t("about.values.integrityText")}</span>
                </li>
                <li>
                  <span className="font-semibold text-primary-700">{t("about.values.collaboration")}: </span>
                  <span className="text-gray-600">{t("about.values.collaborationText")}</span>
                </li>
                <li>
                  <span className="font-semibold text-primary-700">{t("about.values.innovation")}: </span>
                  <span className="text-gray-600">{t("about.values.innovationText")}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Section>

        {/* Team Section */}
        <Section title={t("about.team.title")}>
          <div className="mb-12 relative z-20">
            <h3 className="text-2xl font-semibold text-primary-700 mb-8">{t("about.team.leadership")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {teamMembers.map((member) => (
                <TeamMember
                  key={member.id}
                  id={member.id}
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  bio={member.bio}
                />
              ))}
            </div>
          </div>

          <div className="relative z-20">
            <h3 className="text-2xl font-semibold text-primary-700 mb-8">{t("about.team.board")}</h3>
            <div className="relative">
              {/* Scroll buttons */}
              <button
                type="button"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-primary-100 transition"
                onClick={() => {
                  const container = document.getElementById("board-scroll-1")
                  if (container) container.scrollBy({ left: -240, behavior: "smooth" })
                }}
                aria-label="Scroll left"
                tabIndex={0}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id="board-scroll-1"
                className="flex overflow-x-auto gap-10 py-3 px-20 scrollbar-hide"
                style={{
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none", // Firefox
                  msOverflowStyle: "none", // IE/Edge
                  minHeight: 240, // reduced height
                }}
                tabIndex={0}
                role="region"
                aria-label="Board members"
              >
                {[
                  {
                    id: 12,
                    name: "Toziny Viva ELIANAH",
                    title: "Genre, insécurité alimentaire, ethno- écologie",
                    image: "../../images/viva.jpg",
                  },
                  {
                    id: 13,
                    name: "Miangola RABARINARIVO",
                    title: "Assistante Communication",
                    image: "../../images/board8.jpg",
                  },
                  {
                    id: 14,
                    name: "RAVANOMANANTSOA HERY NANTENAINA",
                    title: "Climat, géomatique, SIG et  environnement",
                    image: "../../images/RAVANOMANA.jpg",
                  },
                ].map((member, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center min-w-[220px] max-w-[220px] h-[280px] p-6 justify-between bg-white rounded-lg"
                    style={{ flex: "0 0 220px" }}
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-200 mb-3">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                      <div className="text-center flex-1 flex flex-col justify-center">
                        <NavLink to={`/infoteam/${member.id}`}>
                          <div className="font-semibold text-primary-700 text-lg hover:text-primary-900 cursor-pointer transition-colors duration-200">
                            {member.name}
                          </div>
                        </NavLink>

                        <div className="text-gray-500 text-sm">{member.title}</div>
                      </div>

                  </div>
                ))}
                <style>
                  {`
                  #board-scroll-1::-webkit-scrollbar {
                    display: none;
                  }
                  `}
                </style>
              </div>
              {/* Scroll right button */}
              <button
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-primary-100 transition"
                onClick={() => {
                  const container = document.getElementById("board-scroll-1")
                  if (container) container.scrollBy({ left: 240, behavior: "smooth" })
                }}
                aria-label="Scroll right"
                tabIndex={0}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative z-20">
            <h3 className="text-2xl font-semibold text-primary-700 mb-8 mt-12">{t("about.team.stagiaires")}</h3>
            <div className="relative">
              {/* Scroll buttons */}
              <button
                type="button"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-primary-100 transition"
                onClick={() => {
                  const container = document.getElementById("board-scroll-2")
                  if (container) container.scrollBy({ left: -240, behavior: "smooth" })
                }}
                aria-label="Scroll left"
                tabIndex={0}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id="board-scroll-2"
                className="flex overflow-x-auto gap-10 py-3 px-20 scrollbar-hide"
                style={{
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none", // Firefox
                  msOverflowStyle: "none", // IE/Edge
                  minHeight: 240, // reduced height
                }}
                tabIndex={0}
                role="region"
                aria-label="Stagiaires"
              >
                {[
                  {
                    id: 21,
                    name: "RATOVOSON SYLVER MARILLOS",
                    title: "Géographie des énergies.",
                    image: "../../images/marill.jpg",
                  },
                  {
                    id: 22,
                    name: "Milanto RABARINARIVO",
                    title: "Informatique",
                    image: "../../images/staff3.jpg",
                  },
                  {
                    id: 23,
                    name: "Ronaldo",
                    title: "",
                    image: "../../images/board4.jpg",
                  },
                  {
                    id: 24,
                    name: "Miller",
                    title: "Spécialiste en climat, géomatique, SIG et environnement",
                    image: "../../images/stag1.jpg",
                  },
                ].map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col items-center min-w-[220px] max-w-[220px] h-[240px] p-3 justify-between bg-white rounded-lg"
                    style={{ flex: "0 0 220px" }}
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-200 mb-2">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <NavLink to={`/infoteam/${member.id}`}>
                        <div className="font-semibold text-primary-700 text-lg hover:text-primary-900 cursor-pointer transition-colors duration-200">
                          {member.name}
                        </div>
                      </NavLink>
                      <div className="text-gray-500 text-sm">{member.title}</div>
                    </div>
                  </div>
                ))}

                <style>
                  {`
                  #board-scroll-2::-webkit-scrollbar {
                    display: none;
                  }
                  `}
                </style>
              </div>
              {/* Scroll right button */}
              <button
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-primary-100 transition"
                onClick={() => {
                  const container = document.getElementById("board-scroll-2")
                  if (container) container.scrollBy({ left: 240, behavior: "smooth" })
                }}
                aria-label="Scroll right"
                tabIndex={0}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative z-20">
            <h3 className="text-2xl font-semibold text-primary-700 mb-8 mt-12">{t("about.team.associés")}</h3>
            <div className="relative">
              {/* Scroll buttons */}
              <button
                type="button"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-primary-100 transition"
                onClick={() => {
                  const container = document.getElementById("board-scroll-3")
                  if (container) container.scrollBy({ left: -240, behavior: "smooth" })
                }}
                aria-label="Scroll left"
                tabIndex={0}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id="board-scroll-3"
                className="flex overflow-x-auto gap-10 py-3 px-20 scrollbar-hide"
                style={{
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none", // Firefox
                  msOverflowStyle: "none", // IE/Edge
                  minHeight: 240, // reduced height
                }}
                tabIndex={0}
                role="region"
                aria-label="Associates"
              >
                {[
                  {
                    id: 31,
                    name: "Ravaka RAZAFINTSEHENO",
                    title: "",
                    image: "../../images/staf2.jpg",
                  },
                  {
                    id: 32,
                    name: "Sullah",
                    title: "",
                    image: "../../images/board9.jpg",
                  },
                ].map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col items-center min-w-[220px] max-w-[220px] h-[240px] p-3 justify-between bg-white rounded-lg"
                    style={{ flex: "0 0 220px" }}
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-200 mb-2">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <NavLink to={`/infoteam/${member.id}`}>
                        <div className="font-semibold text-primary-700 text-lg hover:text-primary-900 cursor-pointer transition-colors duration-200">
                          {member.name}
                        </div>
                      </NavLink>
                      <div className="text-gray-500 text-sm">{member.title}</div>
                    </div>
                  </div>
                ))}

                <style>
                  {`
                  #board-scroll-3::-webkit-scrollbar {
                    display: none;
                  }
                  `}
                </style>
              </div>
              {/* Scroll right button */}
              <button
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-primary-100 transition"
                onClick={() => {
                  const container = document.getElementById("board-scroll-3")
                  if (container) container.scrollBy({ left: 240, behavior: "smooth" })
                }}
                aria-label="Scroll right"
                tabIndex={0}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Partenariat Section */}
          <div className="mt-16 relative z-20">
            <h3 className="text-2xl font-semibold text-primary-700 mb-8">Partenaires</h3>
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
          </div>
        </Section>
      </div>
    </>
  )
}

export default About
