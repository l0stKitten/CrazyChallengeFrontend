import React from 'react';
import Chip from '@mui/material/Chip';

function CreadorChip() {
 const label = 
      <span style={{ fontWeight: 'bold'}}>
        Creador
      </span>;

 return (
    <Chip
      label={label}
    />
 );
}

export default CreadorChip;