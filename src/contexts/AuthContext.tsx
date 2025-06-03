import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  username: string
  email: string
  firstName: string
  lastName: string
  phone: string
  language: string
}

interface AuthContextProps {
  user: User | null;
  login: (identifier: string, password: string) => boolean
  register: (data: User & { password: string }) => void
  logout: () => void;
}

const dummyCredentials = {
  username: 'demo',
  email: 'demo@example.com',
  phone: '1234567890',
  password: 'password',
  firstName: 'Demo',
  lastName: 'User',
  language: 'English',
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('auth-user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (identifier: string, password: string) => {
    if (
      password === dummyCredentials.password &&
      [dummyCredentials.username, dummyCredentials.email, dummyCredentials.phone].includes(identifier)
    ) {
      const { username, email, firstName, lastName, phone, language } = dummyCredentials
      const u = { username, email, firstName, lastName, phone, language }
      setUser(u)
      localStorage.setItem('auth-user', JSON.stringify(u))
      return true
    }
    return false
  }

  const register = (data: User & { password: string }) => {
    const { password: _p, ...rest } = data
    const u: User = { ...rest }
    setUser(u)
    localStorage.setItem('auth-user', JSON.stringify(u))
  }

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
