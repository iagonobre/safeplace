import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToMenu() {
    navigation.navigate('Menu')
  }

  function handleNavigateBack() {
    navigation.goBack()
  }

  return (
    <LinearGradient colors={['#60AEB0', '#7509c1']} start={[0.0, 0.15]} end={[2.0, 1.0]} style={styles.container} >
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon name="arrow-left" size={25} style={{ marginTop: 20 }} color='#FFF' />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image style={{ maxWidth: 147, height: 60, marginTop: 60, marginBottom: 45 }} source={require('../../assets/logo.png')} />
      </View>

      <KeyboardAvoidingView
        behavior={"padding"}
        style={{ flex: 1 }}
      >
        <TextInput style={styles.input} placeholder='Digite o seu ID'></TextInput>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Digite sua senha'></TextInput>
        <RectButton style={styles.button} onPress={handleNavigateToMenu}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={24}></Icon>
            </Text>
          </View>
          <Text style={styles.buttonText}>
            Entrar
            </Text>
        </RectButton>
      </KeyboardAvoidingView>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'space-around',
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
    backgroundColor: '#eee'
  },

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#60AEB0',
    height: 60,
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
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;