import React from 'react';
import { Font } from 'expo';

import {Image,Platform, ScrollView,StyleSheet,Text,TouchableOpacity,View,Button,TouchableNativeFeedback, Alert,} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  handlPress = () =>{
    Alert.alert(
         'You need to...'
      );
  };
  componentDidMount() {
    // Font.loadAsync({
    //   MedusaGothic: require('../assets/fonts/MedusaGothic.otf'),
    // });

  }
  static navigationOptions = {
    header: null,
  };


  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>

        <View style = {styles.maincontainer}>
         <View style = {styles.logoview}>
           <Image style={styles.logo} source = {require("../assets/images/logo-main.png")} />
         </View>
          <View style = {styles.boxview}>
          <Text style = {styles.textview}>DEEP</Text>
          <Text style = {{ ...styles.textview, color: '#23CFA5'}} >SAVE</Text>
          </View>

          <TouchableOpacity  onPress={() => navigate('Login')}>
              <View style = {styles.btncontainer}>
                    <Text style={styles.button1}>Get Started</Text>
              </View>
          </TouchableOpacity>
       </View>
       </View>
    );
  }
  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}
const styles = StyleSheet.create({
  maincontainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',

  },
  btncontainer:{
          flexDirection: 'column',
            justifyContent: 'center',
          backgroundColor: "#0E33BD",
          // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
          borderRadius: 35,
          margin: 10,
          marginTop: 20,
          width: 309,
          height: 59,
          justifyContent: 'center',
          alignItems: 'center',
      },
      button1 :{
        width: 166,
        fontSize: 30,
        margin: "auto",
        textAlign: 'center',
        // font-family: Martel Sans;
        fontStyle: "normal",
        fontWeight: "normal",
        color: "#FFFFFF",
      },
  boxview: {
      flexDirection: 'column',
        justifyContent: 'center',
    width: 228,
    height: 200,

 },
 textview:{
   // fontFamily:"MedusaGothic",
   color: "#0E33BD",
  lineHeight:75,
  fontSize:72,
  textAlign:"center"
},
  logoview: {
      flexDirection: 'column',
        justifyContent: 'center',
   alignItems: "center"
 },
 logo: {
   width: 274,
   height: 246,
 }
});
