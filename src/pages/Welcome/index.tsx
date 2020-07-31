import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Image, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { SvgCssUri } from 'react-native-svg'

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToMenu() {
    navigation.navigate('Home')
  }

  function handleNavigateToMaps() {
    navigation.navigate('Maps')
  }

  return (
    <LinearGradient colors={['#60AEB0', '#7509c1']} start={[0.0, 0.15]} end={[2.0, 1.0]} style={styles.container} >
      <View style={styles.header}>
        <Image style={{ maxWidth: 147, height: 60, marginTop: 60 }} source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu sistema de proteção ao cliente!</Text>
      </View>

      <View style={styles.main}>
        <SvgCssUri width={300} height={220} uri="https://svgshare.com/i/NPP.svg" />
      </View>

      <View style={styles.buttonBackground}>
        <RectButton style={styles.button} onPress={handleNavigateToMaps}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="search" color="#FFF" size={24}></Icon>
            </Text>
          </View>
          <Text style={styles.buttonText}>
            Encontre locais seguros
          </Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleNavigateToMenu}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="log-in" color="#FFF" size={24}></Icon>
            </Text>
          </View>
          <Text style={styles.buttonText}>
            Sou um funcionário
          </Text>
        </RectButton>
      </View>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 173,
    marginTop: 5,
  },

  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },

  buttonBackground: {
    width: 360,
    height: 208,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 48,
    paddingTop: 26,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },

  title: {
    color: '#f0f0f0',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 26,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 300,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 10,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 270,
    lineHeight: 22,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#60BEA0',
    height: 60,
    width: 320,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    textAlign: 'left',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;