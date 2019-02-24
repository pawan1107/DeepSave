import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AnalysisScreen from '../screens/AnalysisScreen';
import ShowTweetScreen from '../screens/ShowTweetScreen';



const AppNavigation = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen:LoginScreen },
    Register: { screen:RegisterScreen },
    Analysis: { screen:AnalysisScreen },
    ShowTweet: { screen:ShowTweetScreen }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigation);
