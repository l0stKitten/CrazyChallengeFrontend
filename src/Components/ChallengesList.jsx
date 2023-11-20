import React, { useEffect } from 'react'

import ChallengeCard from './Challenge/ChallengeCard';
import ChatsandContact from './ChatsandContact';

import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

const challenges = [
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


export default function ChallengesList() {

	const isXs = useMediaQuery('(max-width:996px)'); // Adjust the width to match your "xs" breakpoint

	return (
		<Grid container spacing={2} marginRight={2}>
			<Grid container item xs={isXs ? 12 : 10} 
				direction="column"
				justifyContent="flex-start"
				alignItems="center"
				gap={4}
			>
				{challenges.map(challenge => (
					<ChallengeCard key={challenge.id} challenge={challenge}/>
				))}
			</Grid>
			{isXs ? null : <Grid item xs={2} container
				direction="column"
				justifyContent="flex-start"
				alignItems="flex-end">
				
				<ChatsandContact></ChatsandContact>
				
			</Grid>}
		</Grid>
	);
}