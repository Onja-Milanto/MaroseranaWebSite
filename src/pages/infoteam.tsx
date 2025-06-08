"use client"

import type React from "react"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

const teamMembers = [
  {
    id: 1,
    name: "Dr. VERIZA Francis",
    title: "Directeur Académique",
    image: "../../images/dr_veriza.jpg",
    bio: "Maître de conférences en géographie, enseignant actif et contributeur à des projets environnementaux internationaux.",
  },
  {
    id: 2,
    name: "M. FERETA Manjaka Rodin",
    title: "Président",
    image: "../../images/prez_fereta.jpg",
    bio: "Associate Professor of Chemistry and specialist in sustainable materials.",
  },
  {
    id: 3,
    name: "VERIZA Espérant Flaubert",
    title: "Vice-Président",
    image: "../images/vp_flaubert.jpg",
    bio: "Renowned physicist with contributions to quantum computing research.",
  },
  {
    id: 4,
    name: "M. RAZAFINTSEHENO Hasina Fortunat Raphael",
    title: "Secrétaire Générale",
    image: "../../images/mr_fortunat.png",
    bio: "Specialist in research methodology and academic publishing.",
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
      <div className="h-64 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
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

const Section: React.FC<{
  children: React.ReactNode
  title?: string
  bgColor?: string
}> = ({ children, title, bgColor }) => (
  <section className={`${bgColor || ""} py-12`}>
    <div className="max-w-6xl mx-auto px-4">
      {title && <h2 className="text-3xl font-bold text-primary-700 mb-8">{title}</h2>}
      {children}
    </div>
  </section>
)

const AboutTeam = () => {
  const { t } = useTranslation()

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
        {/* Blue overlay with 30% opacity */}
        <div
          className="absolute inset-0 bg-primary-700"
          style={{ opacity: 0.3, pointerEvents: "none" }}
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
              {t("about.team.title", "Notre Équipe")}
            </motion.h1>
          </div>
        </div>

        {/* Go to About button */}
        <div className="flex justify-center mt-12 relative z-10">
          <NavLink
            to="/about"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 hover:from-primary-700 hover:to-primary-900 transition-all duration-300 text-lg"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {t("about.team.goToTab", "Aller à cet onglet")}
          </NavLink>
        </div>
      </section>

      {/* Team Section */}
      <Section title={t("about.team.title") || "Notre Équipe"}>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary-700 mb-8">{t("about.team.leadership", "Direction")}</h3>
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

        <div>
          <h3 className="text-2xl font-semibold text-primary-700 mb-8">
            {t("about.team.board", "Conseil d'Administration")}
          </h3>
          <div className="relative">
            {/* Scroll buttons */}
            <button
              type="button"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-primary-100 transition"
              onClick={() => {
                const container = document.getElementById("board-scroll")
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
              id="board-scroll"
              className="flex overflow-x-auto gap-10 py-6 px-20 scrollbar-hide"
              style={{
                scrollBehavior: "smooth",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE/Edge
                minHeight: 300, // bigger container
              }}
              tabIndex={0}
              role="region"
              aria-label="Board members"
            >
              {[
                {
                  id: 7,
                  name: "Jsp",
                  title: "Prof de jsp",
                  image: "../../images/stag1.jpg",
                },
                {
                  id: 8,
                  name: "Ravaka RAZAFINTSEHENO",
                  title: "Professeur de jsp",
                  image: "../../images/staf2.jpg",
                },
                {
                  id: 9,
                  name: "Milanto RABARINARIVO",
                  title: "Informatique",
                  image: "../../images/staff3.jpg",
                },
                {
                  id: 10,
                  name: "jsp",
                  title: "Professeur de jsp",
                  image: "../../images/board4.jpg",
                },
                {
                  id: 11,
                  name: "jsp",
                  title: "Professeur de jsp",
                  image: "../../images/board5.jpg",
                },
                {
                  id: 12,
                  name: "Diva",
                  title: "Professeur de jsp",
                  image: "../../images/board6.jpg",
                },
                {
                  id: 13,
                  name: "Miangola RABARINARIVO",
                  title: "Rédactrice",
                  image: "../../images/board8.jpg",
                },
                {
                  id: 14,
                  name: "Ullah",
                  title: "Professeur de jsp",
                  image: "../../images/board9.jpg",
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
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <NavLink to={`/infoteam/${member.id}`}>
                      <div className="font-semibold text-primary-700 text-lg hover:text-primary-900 cursor-pointer transition-colors duration-200">
                        {member.name}
                      </div>
                    </NavLink>
                    <div className="text-gray-500 text-base">{member.title}</div>
                  </div>
                </div>
              ))}
              <style>
                {`
                #board-scroll::-webkit-scrollbar {
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
                const container = document.getElementById("board-scroll")
                if (container) container.scrollBy({ left: 240, behavior: "smooth" })
              }}
              aria-label="Scroll right"
              tabIndex={0}
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </Section>
    </>
  )
}

export default AboutTeam
