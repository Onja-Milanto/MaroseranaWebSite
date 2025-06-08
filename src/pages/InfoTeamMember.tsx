"use client"

import type React from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { NavLink, useParams, Navigate } from "react-router-dom"
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Award } from "lucide-react"
import Section from "../components/ui/Section"

// Team member data
const teamMembersData = [
  {
    id: 1,
    name: "Dr. VERIZA Francis",
    title: "Directeur Académique",
    image: "../images/dr_veriza.jpg",
    bio: "Maître de conférences en géographie, enseignant actif et contributeur à des projets environnementaux internationaux.",
    email: "francis.veriza@maroserana.org",
    phone: "+261 34 12 345 67",
    location: "Toliara, Madagascar",
    joinDate: "2020-01-15",
    specialties: ["Géographie environnementale", "Développement durable", "Cartographie"],
    education: [
      "Doctorat en Géographie - Université de Toliara",
      "Master en Sciences Environnementales - Université d'Antananarivo",
    ],
    achievements: [
      "Auteur de 15+ publications scientifiques",
      "Coordinateur de 5 projets internationaux",
      "Expert consultant pour l'UNESCO",
    ],
    description:
      "Dr. Francis VERIZA est un géographe reconnu avec plus de 15 ans d'expérience dans la recherche environnementale. Il a dirigé de nombreux projets de recherche sur le changement climatique et le développement durable à Madagascar.",
  },
  {
    id: 2,
    name: "M. FERETA Manjaka Rodin",
    title: "Président",
    image: "../images/prez_fereta.jpg",
    bio: "Masterant en Géographie sociale, Assistant Académique en Géographie.",
    email: "manjaka.fereta@maroserana.org",
    phone: "+261 34 23 456 78",
    location: "Toliara, Madagascar",
    joinDate: "2019-03-10",
    specialties: ["Géographie sociale", "Recherche académique", "Leadership"],
    education: [
      "Master en Géographie sociale (en cours) - Université de Toliara",
      "Licence en Géographie - Université de Toliara",
    ],
    achievements: [
      "Fondateur de l'UC MaroSerana",
      "Assistant académique depuis 2019",
      "Organisateur de 10+ événements scientifiques",
    ],
    description:
      "Manjaka Rodin FERETA est le président fondateur de l'UC MaroSerana. Passionné par la géographie sociale, il œuvre pour le développement de la recherche scientifique à Madagascar.",
  },
  {
    id: 3,
    name: "VERIZA Espérant Flaubert",
    title: "Vice-Président",
    image: "../images/vp_flaubert.jpg",
    bio: "Spécialiste en Droit de l'environnement et Droit de la mer.",
    email: "flaubert.veriza@maroserana.org",
    phone: "+261 34 34 567 89",
    location: "Toliara, Madagascar",
    joinDate: "2020-06-20",
    specialties: ["Droit de l'environnement", "Droit de la mer", "Politique environnementale"],
    education: [
      "Master en Droit de l'environnement - Université d'Antananarivo",
      "Licence en Droit - Université de Toliara",
    ],
    achievements: [
      "Expert en législation environnementale",
      "Consultant pour plusieurs ONG",
      "Formateur en droit maritime",
    ],
    description:
      "Espérant Flaubert VERIZA apporte son expertise juridique à l'UC MaroSerana, particulièrement dans les domaines du droit environnemental et maritime.",
  },
  {
    id: 4,
    name: "M. RAZAFINTSEHENO Hasina Fortunat Raphael",
    title: "Secrétaire Générale",
    image: "../images/mr_fortunat.png",
    bio: "Spécialiste en écotourisme et méthodologie de recherche.",
    email: "fortunat.razafintseheno@maroserana.org",
    phone: "+261 34 45 678 90",
    location: "Toliara, Madagascar",
    joinDate: "2020-09-15",
    specialties: ["Écotourisme", "Méthodologie de recherche", "Gestion de projets"],
    education: ["Master en Écotourisme - Université de Toliara", "Licence en Géographie - Université de Toliara"],
    achievements: [
      "Développement de 3 circuits écotouristiques",
      "Formation de 50+ guides locaux",
      "Publication de guides méthodologiques",
    ],
    description:
      "Hasina Fortunat Raphael RAZAFINTSEHENO est un expert en écotourisme qui contribue au développement durable de la région de Toliara.",
  },
  {
    id: 5,
    name: "Mme HADIDJA Aboudou",
    title: "Trésorière",
    image: "../images/treso.png",
    bio: "Gestionnaire financière et administratrice.",
    email: "hadidja.aboudou@maroserana.org",
    phone: "+261 34 56 789 01",
    location: "Toliara, Madagascar",
    joinDate: "2021-01-10",
    specialties: ["Gestion financière", "Administration", "Comptabilité"],
    education: ["Master en Gestion - Université d'Antananarivo", "Licence en Comptabilité - Université de Toliara"],
    achievements: [
      "Gestion de budgets de 100K+ EUR",
      "Mise en place de systèmes comptables",
      "Formation en gestion financière",
    ],
    description:
      "Hadidja Aboudou assure la gestion financière rigoureuse de l'UC MaroSerana et veille à la bonne administration de l'organisation.",
  },
  {
    id: 6,
    name: "M. GENAKE MAKASARA Emmanuelson Johary",
    title: "Responsable de communication",
    image: "../images/johary.jpg",
    bio: "Expert en communication et sciences environnementales.",
    email: "johary.genake@maroserana.org",
    phone: "+261 34 67 890 12",
    location: "Toliara, Madagascar",
    joinDate: "2021-03-05",
    specialties: ["Communication scientifique", "Sciences environnementales", "Médias sociaux"],
    education: [
      "Master en Communication - Université d'Antananarivo",
      "Licence en Sciences Environnementales - Université de Toliara",
    ],
    achievements: [
      "Développement de la stratégie de communication",
      "Gestion de 5+ plateformes numériques",
      "Organisation d'événements médiatiques",
    ],
    description:
      "Emmanuelson Johary GENAKE MAKASARA développe la visibilité de l'UC MaroSerana et facilite la communication scientifique.",
  },
  // Add more team members as needed
]

const InfoTeamMember: React.FC = () => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  // Find the member with the matching ID
  const member = teamMembersData.find((m) => m.id === Number(id))

  // If no member is found, redirect to the about page
  if (!member) {
    return <Navigate to="/about" replace />
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-10 bg-primary-700 min-h-[300px] md:min-h-[400px]"
        style={{
          backgroundImage: "url('../images/bg33.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-primary-700"
          style={{ opacity: 0.5, pointerEvents: "none" }}
          aria-hidden="true"
        />

        {/* Flowlines SVG background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
            className="w-full h-full"
            style={{ opacity: 0.3 }}
          >
            <defs>
              <linearGradient id="heroShine1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa">
                  <animate attributeName="stop-color" values="#60a5fa;#fff;#60a5fa" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#2563eb">
                  <animate attributeName="stop-color" values="#2563eb;#fff;#2563eb" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <path
              d="M0,100 Q360,200 720,100 T1440,150"
              stroke="url(#heroShine1)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,250 Q480,150 960,250 T1440,200"
              stroke="url(#heroShine1)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mt-16">
            <NavLink to="/about" className="inline-flex items-center text-white hover:text-gray-200 mb-6">
              <ArrowLeft size={20} className="mr-2" />
              {t("infoteam.backToTeam", "Retour à l'équipe")}
            </NavLink>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {member.name}
            </motion.h1>
            <motion.p
              className="text-xl text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {member.title}
            </motion.p>
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
            style={{ minHeight: 600, opacity: 0.4 }}
          >
            <defs>
              <linearGradient id="contentShine1" x1="0%" y1="0%" x2="100%" y2="100%">
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
              <linearGradient id="contentShine2" x1="100%" y1="0%" x2="0%" y2="100%">
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
            </defs>
            <path
              d="M0,150 Q360,300 720,150 T1440,200"
              stroke="url(#contentShine1)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,400 Q480,250 960,400 T1440,350"
              stroke="url(#contentShine2)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M1440,600 Q1080,750 720,600 T0,650"
              stroke="url(#contentShine1)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Member Details */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-20">
            {/* Profile Image and Basic Info */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-primary-700 mb-2">{member.name}</h2>
                  <p className="text-lg text-secondary-500 font-medium mb-4">{member.title}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Mail size={16} className="mr-3" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary-700">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone size={16} className="mr-3" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-3" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-3" />
                      <span>
                        {t("infoteam.memberSince", "Membre depuis")}{" "}
                        {new Date(member.joinDate).toLocaleDateString("fr-FR")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Detailed Information */}
            <div className="lg:col-span-2">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Description */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">{t("infoteam.about", "À propos")}</h3>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>

                {/* Specialties */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">
                    {t("infoteam.specialties", "Domaines d'expertise")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">
                    {t("infoteam.education", "Formation")}
                  </h3>
                  <ul className="space-y-2">
                    {member.education.map((edu, index) => (
                      <li key={index} className="flex items-start">
                        <Award size={16} className="text-primary-700 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">
                    {t("infoteam.achievements", "Réalisations")}
                  </h3>
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}

export default InfoTeamMember
