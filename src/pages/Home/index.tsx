import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToMenu() {
    navigation.navigate('Menu')
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Realize o login</Text>
        <Text style={styles.description}>Tenha em mãos a proteção necessária para os seus funcionários!</Text>
      </View>

      <View style={styles.main}>
        <Image style={styles.image} source={require('../../assets/home-background.png')} />
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'position'} >
        <View style={styles.footer}>
          <TextInput keyboardType="numeric" style={styles.input} placeholder='Digite o seu ID'></TextInput>
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
        </View>
      </KeyboardAvoidingView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  header: {
    alignItems: 'center',
  },

  logo: {
    width: 200,
  },

  image: {
    width: 100,
    height: 173,
    marginTop: 10,
  },

  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#e9bf52',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 8,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 270,
    lineHeight: 22,
    textAlign: 'center',
  },

  footer: {
    backgroundColor: '#f0f0f5',
<<<<<<< HEAD
    height: 500,
=======
    height: 200,
>>>>>>> 78562dbb89457f13c16e0d73521be02646a825ed
  },

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#e9bf52',
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