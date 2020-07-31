import React from 'react';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { SvgCssUri } from 'react-native-svg'

export default function Menu() {
  const navigation = useNavigation();

  function handleNavigateMasks() {
    navigation.navigate('Masks')
  }

  function handleNavigateBack() {
    navigation.goBack()
  }

  return (
    <>
      <LinearGradient colors={['#60AEB0', '#7509c1']} start={[0.0, 0.15]} end={[2.0, 1.0]} style={styles.container} >

        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={25} color='#FFF' />
        </TouchableOpacity>

        <Text style={styles.title}>
          Dashboard
        </Text>
        <Text style={styles.description}>
          Dados da Câmera 02
        </Text>
        <View style={styles.mapContainer}>
          <View style={{ alignItems: 'baseline', flexDirection: 'row', justifyContent: 'space-between', margin: 5, }}>
            <Text style={styles.titleInfo}>Câmera 02 - Bloco 3</Text>
            <TouchableOpacity onPress={() => { }}>
              <MaterialIcons name="refresh" size={25} color='#60AEB0' />
            </TouchableOpacity>
          </View>

          <View style={styles.mapContainerInfo}>
            <Image style={{ maxWidth: 300, height: 130, marginTop: 10, marginBottom: 15, borderRadius: 8 }} source={require('../../assets/2.jpg')} />
            <Text style={styles.info}>Infrações nos últimos 7 dias:</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.info}>HOJE:</Text>
              <Text style={styles.infoDescription}>  1 infração</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.info}>ONTEM: </Text>
              <Text style={styles.infoDescription}>  2 infrações</Text>
            </View>
            <SvgCssUri width={250} height={150} uri="https://svgshare.com/i/NRW.svg" />
          </View>

        </View>
      </LinearGradient >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  containerInfo: {
    width: '65%',
    alignItems: 'center',
    flexDirection: 'row',
  },

  title: {
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
    color: '#f0f0f0',
  },

  titleInfo: {
    fontSize: 18,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 15,
    color: '#60AEB0',
  },

  description: {
    color: '#f0f0f0',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },


  infoDescription: {
    color: '#60AEB0',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
  },

  info: {
    color: '#60AEB0',
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Ubuntu_700Bold',
  },

  mapContainer: {
    height: 450,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
    backgroundColor: '#FFF',
    padding: 5,
  },

  mapContainerInfo: {
    flex: 1,
    alignItems: 'center',
  },


  button: {
    backgroundColor: '#60AEB0',
    height: 40,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 13,
  },
});