import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
  name: string;
  picture: string;
  givenName: string;
  familyName: string;
  locale: string;
  email: string;
}

interface AuthContextData {
  user: User;
  signIn(idToken: string): Promise<void>;
  signOut(): void;
}

interface AuthState {
  idToken: string;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const idToken = localStorage.getItem('@Litterae:idToken');
    const user = localStorage.getItem('@Litterae:user');
    if (idToken && user) {
      api.defaults.headers.authorization = `Bearer ${idToken}`;
      return { idToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async (idToken: string) => {
    const response = await api.post<User>('sessions', { idToken });
    const user = response.data;
    localStorage.setItem('@Litterae:idToken', idToken);
    localStorage.setItem('@Litterae:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${idToken}`;

    setData({ idToken, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Litterae:idToken');
    localStorage.removeItem('@Litterae:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}
