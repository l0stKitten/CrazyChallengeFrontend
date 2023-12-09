import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const TemporalUserProvider = ({ children }) => {
  const [sharedVariable, setSharedVariable] = useState('');

  return (
    <UserContext.Provider value={{ sharedVariable, setSharedVariable }}>
      {children}
    </UserContext.Provider>
  );
};
