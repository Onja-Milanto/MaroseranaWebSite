"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, User, Mic, Type } from "lucide-react";
import Section from "../components/ui/Section";

const InfoEvent103 = () => {
  const { t } = useTranslation();

  const event = {
    id: 103,
    title: "L’innovation sociale au service du développement rural",
    date: "2025-05-12",
    time: "09h30",
    location: "Centre Universitaire de Fianarantsoa",
    type: "atelier participatif",
    mainSpeaker: "Mme. Saholy Andriambololona",
    moderator: "Prof. Hery Rakotozafy",
    summary:
      "Un atelier interactif sur les leviers d’innovation sociale dans les territoires ruraux malgaches, axé sur l’éducation, l’agriculture durable et les dynamiques communautaires.",
    fullDescription: `
      Cet atelier a rassemblé des chercheurs, des acteurs du développement local et des étudiants autour des problématiques clés du développement rural à Madagascar. 
      
      Mme. Saholy Andriambololona, experte en innovation territoriale, a introduit différentes approches d’innovation sociale testées dans les Hautes Terres. L’accent a été mis sur la co-construction de solutions adaptées au contexte local, en tenant compte des contraintes environnementales, culturelles et économiques.

      Des ateliers en petits groupes ont permis de travailler sur des cas concrets : amélioration des coopératives agricoles, accès équitable à l’eau, renforcement de la gouvernance locale, et intégration des savoirs autochtones dans les projets de développement.
    `,
    images: [
      "/images/atelier_dev1.jpg",
      "/images/atelier_dev2.jpg",
      "/images/atelier_dev3.jpg",
    ],
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-24 pb-10 min-h-[300px] md:min-h-[400px] bg-primary-700 text-white"
        style={{
          backgroundImage: `url('${event.images[0]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <NavLink to="/events/past" className="inline-flex items-center text-white mb-6">
            <ArrowLeft className="mr-2" size={20} />
            {t("common.back", "Retour aux événements")}
          </NavLink>
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {event.title}
          </motion.h1>
        </div>
      </section>

      {/* Event Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Images */}
          <div className="space-y-4">
            {event.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Photo de l'événement ${index + 1}`}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-primary-700">Résumé</h2>
              <p className="text-gray-700">{event.summary}</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-primary-700">Description complète</h2>
              <p className="text-gray-700 whitespace-pre-line">{event.fullDescription}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-primary-700 mb-4">Informations pratiques</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <Calendar className="mr-2" size={18} />
                  {formatDate(event.date)} — {event.time}
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2" size={18} />
                  {event.location}
                </li>
                <li className="flex items-center">
                  <Type className="mr-2" size={18} />
                  {event.type}
                </li>
                <li className="flex items-center">
                  <User className="mr-2" size={18} />
                  Intervenante : {event.mainSpeaker}
                </li>
                <li className="flex items-center">
                  <Mic className="mr-2" size={18} />
                  Modérateur : {event.moderator}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default InfoEvent103;
