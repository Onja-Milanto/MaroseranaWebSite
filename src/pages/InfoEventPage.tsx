import React from 'react';
import { useParams } from 'react-router-dom';

const upcomingEvents = [
  {
    id: 1,
    title: 'La croissance économique malagasy',
    date: '2025-06-15',
    time: '09:00 - 18:00',
    location: 'Hotel des Finances, Toliara',
    type: 'séminaire',
    image: '../images/economie_venir.jpg',
    description: 'Séminaire sur la croissance économique...',
    link: 'https://meet.jit.si/Seminaire_Doctoral_Univ_Toliara'
  },
];

const pastEvents = [
  {
    id: 101,
    title: 'Être femme dans le Sud-Ouest malgache',
    date: '2025-05-29',
    time: '15h30',
    location: 'Bibliothèque DEGS, Toliara',
    type: 'conférence',
    image: '../images/femme_passee.jpg',
    description: 'Conférence sur les défis et perspectives des femmes...',
    link: 'https://meet.jit.si/Seminaire_Doctoral_Univ_Toliara'
  },
];

const InfoEventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const eventId = Number(id);

  // Recherche de l'événement dans les deux tableaux
  const event = [...upcomingEvents, ...pastEvents].find(e => e.id === eventId);

  if (!event) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Événement introuvable</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{event.title}</h1>
      <p><strong>Date :</strong> {event.date}</p>
      <p><strong>Heure :</strong> {event.time}</p>
      <p><strong>Lieu :</strong> {event.location}</p>
      <p><strong>Type :</strong> {event.type}</p>
      <p><strong>Description :</strong> {event.description}</p>
      {event.image && <img src={event.image} alt={event.title} style={{ maxWidth: '100%', marginTop: '1rem' }} />}
      <div style={{ marginTop: '1rem' }}>
        <a href={event.link} target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            Rejoindre l'événement
          </button>
        </a>
      </div>
    </div>
  );
};

export default InfoEventPage;
