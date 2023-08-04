'use client';

import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import toastHelper from '@/config/helpers/toast.helper';

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
  };

  const handleSuccess = async (response: TokenResponse) => {
    const accessToken = response?.access_token;

    // Make a request to the Google People API to fetch user profile data
    const profileResponse = await fetch(
      'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos,phoneNumbers',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const profileData = await profileResponse.json();
    console.log(profileData);
  };

  const handleSignIn = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      setIsAuth(true);
      // setCurrentUser(user);
      setLoading(false);
      toastHelper.success('Login');
      handleSuccess(tokenResponse);
    },
  });

  useEffect(() => {
    if (currentUser) {
      setIsAuth(true);
      setLoading(false);
    } else {
      setIsAuth(false);
      setLoading(false);
    }
  }, [currentUser]);

  const values: IAuthValue = {
    isAuth,
    currentUser,
    loading,
    signIn: async (user: string) => {
      // setIsAuth(true);
      // setCurrentUser(user);
      // setLoading(false);
      // toastHelper.success('Login');
      handleSignIn();
    },
    signOut: handleSignOut,
  };

  return values;
};

export const AuthProvider = ({ children }: IAuthProvider) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{!auth.loading ? children : null}</AuthContext.Provider>;
};

export default function AuthConsumer() {
  return useContext(AuthContext);
}
