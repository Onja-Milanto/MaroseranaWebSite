"use client"

import type React from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Award } from "lucide-react"
import Section from "../components/ui/Section"

const InfoTeam2: React.FC = () => {
  const { t } = useTranslation()

  const member = {
    id: 1,
    name: "M. FERETA Manjaka Rodin",
    title: "Président",
    image: "../../../images/fereta3.jpg",
    bio: "Masterant en Géographie sociale, Assistant Académique en Géographie.",
    email: "manjaka.fereta@maroserana.org",
    phone: "+261 32 89 685 19 ",
    location: "Toliara, Madagascar",
    joinDate: "2019-03-10",
    specialties: ["Géographie sociale", "Recherche académique", "Leadership", "Géographie sociale", "Anthropologie de l'environnement"],
    education: [
      "Master en Géographie sociale (en cours) - Université de Toliara",
      "Licence en Géographie - Université de Toliara",
    ],
    achievements: [
      "Co-Fondateur de l'UC MaroSerana",
      "Assistant académique depuis 2019",
      "Organisateur de 10+ événements scientifiques",
    ],
    description:
      "Manjaka Rodin FERETA est le président co-fondateur de l'UC MaroSerana. Passionné par la géographie sociale, il œuvre pour le développement de la recherche scientifique à Madagascar.",
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-10 bg-primary-700 min-h-[300px] md:min-h-[400px]"
        style={{
          backgroundImage: "url('../../../images/bg33.jpg')",
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
            <NavLink to="/about/team" className="inline-flex items-center text-white hover:text-gray-200 mb-6">
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

export default InfoTeam2
