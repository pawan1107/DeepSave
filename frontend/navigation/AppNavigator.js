import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AnalysisScreen from '../screens/AnalysisScreen';



const AppNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LinksScreen,
    Register: RegisterScreen,
    Analysis: AnalysisScreen,

  },
  {
    initialRouteName: "Register"
  }
);

export default createAppContainer(AppNavigation);
