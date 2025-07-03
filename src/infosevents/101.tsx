"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, User, Mic, Type } from "lucide-react";
import Section from "../components/ui/Section";

const InfoEvent101 = () => {
  const { t } = useTranslation();

  const event = {
    id: 101,
    title: "Être femme dans le Sud-Ouest malgache : défis et perspectives",
    date: "2025-05-29",
    time: "15h30",
    location: "Bibliothèque DEGS, Toliara",
    type: "conférence",
    mainSpeaker: "Dr. Hasina Rakoto",
    moderator: "Mme Sahondra Andrianasolo",
    summary:
      "Une conférence qui explore les réalités vécues par les femmes dans le Sud-Ouest malgache, les obstacles sociétaux, économiques et environnementaux auxquels elles font face, ainsi que les initiatives locales en faveur de leur autonomisation.",
    fullDescription: `
      Cette conférence a réuni chercheurs, étudiants, associations et citoyens engagés afin d'ouvrir un espace de réflexion collective sur les questions de genre dans le Sud-Ouest de Madagascar.
      Dr. Hasina Rakoto, sociologue spécialisée dans les études de genre, a présenté les résultats de ses travaux de terrain menés entre 2022 et 2024. Elle a mis en lumière la pluralité des défis auxquels les femmes font face : précarité, accès limité à l'éducation, poids des traditions, mais aussi leur rôle central dans les dynamiques économiques locales.
      L'échange a été modéré par Mme Sahondra Andrianasolo, militante féministe, qui a su animer des discussions riches avec le public autour de pistes concrètes d'amélioration.
    `,
    images: [
      "/images/femme_passee.jpg",
      "/images/femme_passee2.jpg",
      "/images/femme_passee3.jpg",
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

      {/* Event Info */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Photos */}
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

          {/* Infos */}
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
                  Intervenant : {event.mainSpeaker}
                </li>
                <li className="flex items-center">
                  <Mic className="mr-2" size={18} />
                  Modératrice : {event.moderator}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default InfoEvent101;
