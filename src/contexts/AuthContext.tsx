import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  username: string;
}

interface AuthContextProps {
  user: User | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => void;
  logout: () => void;
}

const dummyCredentials = { username: 'demo', password: 'password' };

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('auth-user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (username: string, password: string) => {
    if (username === dummyCredentials.username && password === dummyCredentials.password) {
      const u = { username };
      setUser(u);
      localStorage.setItem('auth-user', JSON.stringify(u));
      return true;
    }
    return false;
  };

  const register = (username: string, password: string) => {
    const u = { username };
    setUser(u);
    localStorage.setItem('auth-user', JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
