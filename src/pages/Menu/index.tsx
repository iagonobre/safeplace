import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { SvgCssUri } from 'react-native-svg'
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api'

const Menu = () => {
  const [totalMasks, setTotalMasks] = useState('');
  const [totalUse, setTotalUse] = useState('');
  const [totalActive, setTotalActive] = useState('');
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation();

  useEffect(() => {
    handleRefresh()
  }, []);

  function handleNavigateBack() {
    navigation.goBack()
  }

  function handleNavigateMasks() {
    navigation.navigate('Masks')
  }

  async function handleRefresh() {
    setLoading(true)
    const response = await api.get('/masks')
    setTotalMasks(response.data.totalMasks)
    setTotalUse(response.data.totalUse)
    setTotalActive(response.data.totalActive)
    setLoading(false)
  }

  if (loading) {
    return <ActivityIndicator size="large" color='#e9bf52' style={{ flex: 1 }} />
  }

  return (
    <>
      <View style={styles.container}>

        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={25} color='#e9bf52' />
        </TouchableOpacity>

        <Text style={styles.title}>
          Bem vindo
      </Text>
        <Text style={styles.description}>
          Selecione a opção desejada.
      </Text>
        <View style={styles.mapContainer}>
          <TouchableOpacity onPress={handleRefresh}>
            <MaterialIcons name="refresh" size={25} color='#e9bf52' />
          </TouchableOpacity>

          <View style={styles.mapContainerInfo}>
            <View style={styles.containerInfo}>
              <Text style={styles.titleInfo}>{totalActive}</Text>
              <Text style={styles.infoDescription}>Máscaras ATIVAS neste momento.</Text>
            </View>
            <View style={styles.containerInfo}>
<<<<<<< HEAD
              <Text style={styles.titleInfo}>{totalUse}</Text>
=======
              <Text style={styles.titleInfo}>0{totalUse}</Text>
>>>>>>> 78562dbb89457f13c16e0d73521be02646a825ed
              <Text style={styles.infoDescription}>Máscaras em USO neste momento.</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.titleInfo}>{totalMasks}</Text>
              <Text style={styles.infoDescription}>TOTAL de máscaras adquiridas.</Text>
            </View>
<<<<<<< HEAD
            <RectButton style={styles.button} onPress={handleNavigateMasks}>
              <Text style={styles.buttonText}>
                VER MAIS
            </Text>
            </RectButton>
          </View>
=======
          </View>

          <RectButton style={styles.button} onPress={handleNavigateMasks}>
            <Text style={styles.buttonText}>
              VER MAIS
            </Text>
          </RectButton>
>>>>>>> 78562dbb89457f13c16e0d73521be02646a825ed
        </View>
      </View >
      <View style={styles.itemsContainer}>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <TouchableOpacity style={styles.item} onPress={() => { }}>
            <SvgCssUri width={60} height={60} uri="https://api-protection.herokuapp.com/uploads/kip.svg" />
            <Text style={styles.itemTitle}>K.I.P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => { }}>
            <SvgCssUri width={60} height={60} uri="https://api-protection.herokuapp.com/uploads/comousar.svg" />
            <Text style={styles.itemTitle}>Como Usar?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => { }}>
            <SvgCssUri width={60} height={60} uri="https://api-protection.herokuapp.com/uploads/cuidados.svg" />
            <Text style={styles.itemTitle}>Cuidados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => { }}>
            <SvgCssUri width={60} height={60} uri="https://api-protection.herokuapp.com/uploads/frequencia.svg" />
            <Text style={styles.itemTitle}>Frequência</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => { }}>
            <SvgCssUri width={60} height={60} uri="https://api-protection.herokuapp.com/uploads/ranking.svg" />
            <Text style={styles.itemTitle}>Ranking</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => { }}>
            <SvgCssUri width={60} height={60} uri="https://api-protection.herokuapp.com/uploads/quemsomos.svg" />
            <Text style={styles.itemTitle}>Quem Somos</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  )
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
  },

  titleInfo: {
    fontSize: 40,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 15,
    color: '#e9bf52',
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },

  infoDescription: {
    color: '#6C6C80',
    fontSize: 15,
    width: 150,
    marginTop: 15,
    marginLeft: 8,
    textAlign: 'center',
    fontFamily: 'Roboto_400Regular',
  },

  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
    backgroundColor: '#FFF',
    padding: 5,
  },

  mapContainerInfo: {
    alignItems: 'center',
<<<<<<< HEAD
    flex: 1,
=======
>>>>>>> 78562dbb89457f13c16e0d73521be02646a825ed
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#e9bf52',
    height: 40,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 30,
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

export default Menu;