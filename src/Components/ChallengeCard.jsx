import React from 'react';
import ChallengeHeader from './ChallengeHeader';
import ChallengeHeaderInfo from './ChallengeHeaderInfo';
import ChallengeInfo from './ChallengeInfo';

const ChallengeCard = ({ challenge }) => {
  return (
    <div>
      <ChallengeHeader/>
      <ChallengeHeaderInfo challenge={challenge} />
      <ChallengeInfo challenge={challenge} />
    </div>
  );
};

export default ChallengeCard;
