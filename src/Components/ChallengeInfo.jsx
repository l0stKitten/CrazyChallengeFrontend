import React from 'react';
import './styles.css';
import DateRangeIcon from '@mui/icons-material/DateRange';

function ChallengeInfo({challenge}) {
  return (
    <div className="challenge">
      <div className="challenge-info">
        <p className="descripcion-challenge">{challenge.descripcion}</p>
        <div className="fecha-challenge">
            <p className="fecha-inicio-challenge"><DateRangeIcon fontSize='small'/> Inicio: {challenge.fecha_inicio}</p>
            <p className="fecha-fin-challenge"><DateRangeIcon fontSize='small'/> Fin: {challenge.fecha_fin}</p>
        </div>
        <p className="participantes-challenge"><strong>{challenge.participantes}</strong> Participantes</p>
      </div>
    </div>
  );
}

export default ChallengeInfo;
