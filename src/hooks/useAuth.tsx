'use client'

import toastHelper from '@/config/helpers/toast.helper';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { useLocalStorage } from 'usehooks-ts';

interface IAuthValue {
  isAuth: boolean;
  currentUser: string | null;
  loading: boolean;
  signIn(user: string): Promise<void>;
  signOut(): Promise<void>;
}

interface IAuthProvider {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

export const AuthContext = createContext<IAuthValue>({
  isAuth: false,
  currentUser: null,
  loading: false,
  signIn: async () => {},
  signOut: async () => {},
});

const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useLocalStorage<string | null>('user', null);
  
  const handleSignOut = async () => {
    setIsAuth(false);
    setCurrentUser(null);
    setLoading(false);
    toastHelper.success('Logout');
  }

  useEffect(() => {
    if (currentUser) {
      setIsAuth(true);
      setLoading(false);
    } else {
      setIsAuth(false);
      setLoading(false);
    }
  }, [currentUser])

  const values: IAuthValue = {
    isAuth,
    currentUser,
    loading,
    signIn: async (user: string) => {
      setIsAuth(true);
      setCurrentUser(user);
      setLoading(false);
      toastHelper.success('Login');
    },
    signOut: handleSignOut,
  }

  return values
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{!auth.loading ? children : null}</AuthContext.Provider>
}

export default function AuthConsumer() {
  return useContext(AuthContext);
}
