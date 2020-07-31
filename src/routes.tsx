import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Maps from './pages/Maps';
import Dashboard from './pages/Dashboard'

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f0',
          }
        }}
      >
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Menu" component={Menu} />
        <AppStack.Screen name="Maps" component={Maps} />
        <AppStack.Screen name="Dashboard" component={Dashboard} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};