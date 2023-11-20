import React from 'react';

import ChallengeHeader from './ChallengeHeader';
import ChallengeHeaderInfo from './ChallengeHeaderInfo';
import ChallengeInfo from './ChallengeInfo';

import Box from '@mui/material/Box';

const ChallengeCard = ({ challenge }) => {
  return (
    <Box sx={{ maxWidth: 680, boxShadow:0, borderRadius: 3, backgroundColor:'#FFFFFF'}}>
      <ChallengeHeader/>
      <ChallengeHeaderInfo challenge={challenge} />
      <ChallengeInfo challenge={challenge} />
    </Box>
  );
};

export default ChallengeCard;
