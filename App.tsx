import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import NetInfo from '@react-native-community/netinfo'
import { showMessage } from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message'

import Routes from './src/routes';

export default function App() {
  const [view, setView] = useState(false)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        setView(true)
        showMessage({
          type: 'danger',
          message: 'Erro de conexão',
          description: 'Verifique sua conexão com a internet.',
          autoHide: false,
        });
      }
      if (state.isConnected && view) {
        setView(false)
        showMessage({
          type: 'success',
          message: 'Conectado novamente',
          description: 'Você está conectado novamente.',
        });
      }
    });
    return () => {
      unsubscribe()
    }
  }, [view])

  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent></StatusBar>
      <Routes />
      <FlashMessage position="top" />
    </>
  );
} 
