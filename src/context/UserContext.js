import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// TODO: Ce contexte doit être alimenté par les données réelles de l'utilisateur connecté depuis l'API backend (Utilisateur)
// Exemple de structure attendue : { id, nom, email, ... }
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  // TODO: Remplacer les données mockées par une récupération via API backend après authentification
  const [user, setUser] = useState({
    id: null,
    nom: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5223/api/utilisateur/1');
        setUser({
          id: response.data.id,
          nom: response.data.nom,
          email: response.data.email,
          password: response.data.password
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext); 