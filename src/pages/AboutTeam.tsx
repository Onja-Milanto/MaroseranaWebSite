"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"


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
    image: "../../images/vraiveriza.jpg",
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
    image: "../images/hadjida.jpg",
    bio: "Spécialiste en anthropologie de l'environnement.",
  },
  {
    id: 6,
    name: "M. GENAKE MAKASARA Emmanuelson Johary",
    title: "Responsable de communication",
    image: "../../images/johary.jpg",
    bio: "Expert in environmental science and sustainable development.",
  },
]

const boardMembers = [
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
]

const interns = [
  {
    name: "RATOVOSON SYLVER MARILLOS",
    title: "Géographie des énergies.",
    image: "../../images/marill.jpg",
  },
  {
    name: "Milanto RABARINARIVO",
    title: "Informatique",
    image: "../../images/staff3.jpg",
  },
  {
    name: "Ronaldo",
    title: "",
    image: "../../images/board4.jpg",
  },
  {
    name: "Miller",
    title: "Spécialiste en climat, géomatique, SIG et environnement",
    image: "../../images/stag1.jpg",
  },
]

const associates = [
  {
    name: "Ravaka RAZAFINTSEHENO",
    title: "",
    image: "../../images/staf2.jpg",
  },
  {
    name: "Sullah",
    title: "",
    image: "../../images/board9.jpg",
  },
]

const TeamMember = ({ id, name, title, image, bio }) => (
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

const HorizontalScrollList = ({ members, scrollId }) => (
  <div className="relative">
    <button
      type="button"
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-primary-100 transition"
      onClick={() => {
        const container = document.getElementById(scrollId)
        if (container) container.scrollBy({ left: -240, behavior: "smooth" })
      }}
      aria-label="Scroll left"
    >
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path d="M15 19l-7-7 7-7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    <div
      id={scrollId}
      className="flex overflow-x-auto gap-10 py-3 px-20 scrollbar-hide"
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        minHeight: 240,
      }}
    >
      {members.map((member, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center min-w-[220px] max-w-[220px] h-[240px] p-3 justify-between bg-white rounded-lg"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-200 mb-2">
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-center flex-1 flex flex-col justify-center">
            {member.id ? (
              <NavLink to={`/infoteam/${member.id}`}>
                <div className="font-semibold text-primary-700 text-lg hover:text-primary-900 cursor-pointer transition-colors duration-200">
                  {member.name}
                </div>
              </NavLink>
            ) : (
              <div className="font-semibold text-primary-700 text-lg">{member.name}</div>
            )}
            <div className="text-gray-500 text-sm">{member.title}</div>
          </div>
        </div>
      ))}
    </div>
    <button
      type="button"
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-primary-100 transition"
      onClick={() => {
        const container = document.getElementById(scrollId)
        if (container) container.scrollBy({ left: 240, behavior: "smooth" })
      }}
      aria-label="Scroll right"
    >
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </div>
)

const Section = ({ children, title }) => (
  <section className="py-12">
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
      {/* Header */}
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
              {t("about.title") || "Notre Équipe"}
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
            Aller à cet onglet
          </NavLink>
        </div>
      </section>



      {/* Section : Direction */}
      <Section title="Direction">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </Section>

      {/* Section : Conseil d'administration */}
      <Section title="Membres">
        <HorizontalScrollList members={boardMembers} scrollId="board-scroll" />
      </Section>

      {/* Section : Stagiaires */}
      <Section title="Stagiaires">
        <HorizontalScrollList members={interns} scrollId="interns-scroll" />
      </Section>

      {/* Section : Associés */}
      <Section title="Auxiliaires">
        <HorizontalScrollList members={associates} scrollId="associates-scroll" />
      </Section>
    </>
  )
}

export default AboutTeam
