import React from 'react';
import CreadorChip from './Label';

import './styles.css';

function ProfileInfo({challenge}) {
  return (
    <div className="profile-info">
      <h2 style={{ margin: 0 }}>{challenge.nombre_reto}</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
        <p className="challenge-creator" style={{ margin: 0 , color: "gray"}}>@{challenge.creador_reto}</p>
        <div style={{ marginLeft: '12px' }}>
          <CreadorChip/>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
