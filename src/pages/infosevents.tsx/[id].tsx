// src/pages/infosevents/[id].tsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function InfoEventPage() {
  const { id } = useParams<{ id: string }>();
  return <div>Page de l'événement avec l’ID : {id}</div>;
}
