import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, User, Tag } from "lucide-react";
import Section from "../components/ui/Section";

const InfoEvent104: React.FC = () => {
  const { t } = useTranslation();

  const event = {
    id: 104,
    title: "Conférence Internationale sur l'Innovation",
    date: "2025-09-15",
    location: "Antananarivo, Madagascar",
    moderator: "Mme. Ranaivo Lala",
    speaker: "Dr. Rakotoarisoa Andry",
    type: "Conférence",
    summary:
      "Une conférence rassemblant des experts internationaux pour discuter des dernières innovations technologiques.",
    description:
      "Cette conférence a pour but de présenter les avancées majeures dans le domaine de l'innovation. De nombreux intervenants partageront leurs recherches et expériences afin de favoriser la collaboration entre institutions académiques et industrielles.",
    images: [
      "/images/events/conf-inno-1.jpg",
      "/images/events/conf-inno-2.jpg",
      "/images/events/conf-inno-3.jpg",
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-10 bg-primary-700 min-h-[300px] md:min-h-[400px]"
        style={{
          backgroundImage: "url('/images/bg-event-104.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-primary-700"
          style={{ opacity: 0.5, pointerEvents: "none" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="mt-16">
            <NavLink to="/events" className="inline-flex items-center text-white hover:text-gray-200 mb-6">
              <ArrowLeft size={20} className="mr-2" />
              {t("events.backToList", "Retour à la liste des événements")}
            </NavLink>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {event.title}
            </motion.h1>
            <motion.p
              className="text-xl text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {new Date(event.date).toLocaleDateString("fr-FR")} — {event.location}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Images */}
            <div className="lg:col-span-1 space-y-4">
              {event.images.map((img, idx) => (
                <img key={idx} src={img} alt={`${event.title} image ${idx + 1}`} className="rounded shadow-md" />
              ))}
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-primary-700 mb-2">{t("events.summary", "Résumé")}</h2>
                <p className="text-gray-700">{event.summary}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-700 mb-2">{t("events.description", "Description")}</h2>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </div>

              <div className="flex flex-wrap gap-6 text-gray-700">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-primary-700" />
                  <span>{new Date(event.date).toLocaleDateString("fr-FR")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-primary-700" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={20} className="text-primary-700" />
                  <span>{t("events.speaker", "Intervenant")}: {event.speaker}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={20} className="text-primary-700" />
                  <span>{t("events.moderator", "Modérateur")}: {event.moderator}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={20} className="text-primary-700" />
                  <span>{t("events.type", "Type")}: {event.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default InfoEvent104;
