import React from 'react'
import { Box } from '@mui/system';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function RegisterConfirmation() {
  return (
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="Acepto términos y condiciones" />
    </FormGroup>
  );
}