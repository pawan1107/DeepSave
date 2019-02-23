import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AnalysisScreen from '../screens/AnalysisScreen';



const AppNavigation = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen:LoginScreen },
    Register: { screen:RegisterScreen },
    Analysis: { screen:AnalysisScreen }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigation);
