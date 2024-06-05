'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import toast, { Toaster } from 'react-hot-toast';

type AuthContextType = {
  user: { id: string, email: string, name: string } | null;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<{ id: string, email: string, name: string } | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const defaultProvider: AuthContextType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => false,
  login: () => Promise.resolve(),
  logout: () => null,
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<{ id: string, email: string, name: string } | null>(defaultProvider.user); // Corrigindo o tipo aqui
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  const router = useRouter();

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem('token');
      if (storedToken) {
        const decodedToken: any = jwt.decode(storedToken);
        if (decodedToken?.exp >= Date.now() / 1000) {
          setUser({
            id: decodedToken.userID,
            email: decodedToken.email,
            name: decodedToken.name
          });
        } else {
          handleLogout();
        }
      }
      setLoading(false);
    };
    initAuth();
  }, [router]);

  const handleLogin = async (email: string, password: string): Promise<void> => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/users/login`, { email, password });
      const token = response.data.token;
      const decodedToken: any = jwt.decode(token);

      if (response.data?.status === 401) {
        toast.error("Usuário e senha inválidos.")
      } else {
        setUser({
          id: decodedToken?.userID,
          email: decodedToken?.email,
          name: decodedToken?.name
        });

        window.localStorage.setItem('token', token);
        router.push('/dashboard');
      }
    } catch (err) {
      toast.error("Usuário e senha inválidos.")
    }
  };

  const handleLogout = (): void => {
    setUser(null);
    window.localStorage.removeItem('token');
    router.push('/login');
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

