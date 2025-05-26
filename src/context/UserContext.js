import React, { createContext, useContext, useState } from 'react';

// TODO: Ce contexte doit être alimenté par les données réelles de l'utilisateur connecté depuis l'API backend (Utilisateur)
// Exemple de structure attendue : { id, nom, email, ... }
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  // TODO: Remplacer les données mockées par une récupération via API backend après authentification
  const [user, setUser] = useState({
    id: null,
    nom: '',
    email: '',
    // ... autres champs si besoin
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext); 