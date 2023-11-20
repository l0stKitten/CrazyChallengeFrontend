import React from 'react';
import ChallengeCard from './ChallengeCard';

let challenges = [
  {
    nombre_reto : "Matar a Jiren",
    creador_reto: "bradlymachado",
    descripcion: "Derrotar a Jiren en una batalla usando todos los recursos que tengas.",
    fecha_inicio: "Diciembre 2023",
    fecha_fin: "Enero 2024",
    participantes: 25
  },
  {
    nombre_reto : "Matar a Jiren 2",
    creador_reto: "bradlymachado",
    descripcion: "Derrotar a Jiren en una batalla usando todos los recursos que tengas. Lo mismo pero más barato",
    fecha_inicio: "Diciembre 2023",
    fecha_fin: "Enero 2024",
    participantes: 58
  }
]
        

function ChallengeList () {
  return (
    <div>
      <h2>Retos Disponibles</h2>
      {challenges.map(challenge => (
        <ChallengeCard key={challenge.id} challenge={challenge}/>
      ))}
    </div>
  );
};

export default ChallengeList;