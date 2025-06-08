// src/pages/infosevents/InfoEventPage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

const InfoEventPage = () => {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Événement #{id}</h1>
      <p>Voici les détails de l'événement numéro {id}.</p>
    </div>
  );
};

export default InfoEventPage;
