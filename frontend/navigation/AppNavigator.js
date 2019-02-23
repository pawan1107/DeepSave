import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RegisterScreen from '../screens/RegisterScreen';


const AppNavigation = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen:LinksScreen },
    Register: { screen:RegisterScreen }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigation);
