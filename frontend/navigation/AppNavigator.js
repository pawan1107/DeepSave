import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RegisterScreen from '../screens/RegisterScreen';


const AppNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LinksScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: "Register"
  }
);

export default createAppContainer(AppNavigation);
