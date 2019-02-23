import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LinksScreen,
    Register: SettingsScreen
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigation);
