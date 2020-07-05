import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { SvgCssUri } from 'react-native-svg'
import api from '../../services/api'
import { ScrollView } from 'react-native-gesture-handler';

const Masks = () => {

  interface Mask {
    id: Number,
    use: Number,
    mask_name: String,
    user_name: String,
    status: Number,
  }

  const [masks, setMasks] = useState<Mask[]>([])
  const [loading, setLoading] = useState(false)

  async function openMasks() {
    setLoading(true)
    const response = await api.get('/masks')
    setMasks(response.data.masks)
    setLoading(false)
  }

  useEffect(() => {
    openMasks()
  }, []);

  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack()
  }

  if (loading) {
    return <ActivityIndicator size="large" color='#e9bf52' style={{ flex: 1 }} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={25} color='#e9bf52' />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Máscaras Disponíveis</Text>
        <TouchableOpacity onPress={openMasks}>
          <MaterialIcons name="refresh" size={25} color='#e9bf52' />
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>

        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10 }}
          showsVerticalScrollIndicator={false}
        >

          {masks.map(mask => (
            <TouchableOpacity
              key={Number(mask.id)}
              style={styles.maskContainer}
            >
              <View>
                <Text style={styles.title}>{mask.mask_name}</Text>
                <Text style={styles.name}>{mask.user_name}</Text>
                {mask.use === 1 ? <Text style={styles.status}>Em Uso</Text> : <Text style={styles.status}>Fora de Uso</Text>}
                {mask.status === 1 ? <Text style={styles.status}>Status: Online</Text> : <Text style={styles.status}>Status: Offline</Text>}
              </View>
              <SvgCssUri width={50} style={{ marginLeft: 30 }} height={50} uri="https://api-protection.herokuapp.com/uploads/cuidados.svg" />
            </TouchableOpacity>
          ))}

        </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    marginTop: 20 + Constants.statusBarHeight,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 15,
  },

  titleHeader: {
    fontSize: 18,
    fontFamily: 'Ubuntu_700Bold',
    textAlign: 'center',
  },

  maskContainer: {
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 4,
    height: 120,
  },

  title: {
    fontSize: 17,
    fontFamily: 'Ubuntu_700Bold',
    color: '#e9bf52',
    textAlign: 'left',
  },

  name: {
    color: '#000',
    fontSize: 15,
    marginTop: 3,
    fontFamily: 'Roboto_500Medium',
  },

  status: {
    color: '#6C6C80',
    fontSize: 13,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'left',
  },

  listContainer: {
    width: '100%',
    height: '88%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    padding: 5,
  }
});

export default Masks;