import React from 'react';
import { Font } from 'expo';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
   TouchableNativeFeedback,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  componentDidMount() {
    // Font.loadAsync({
    //   MedusaGothic: require('../assets/fonts/MedusaGothic.otf'),
    // });
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (

        <View>
         <View style = {styles.logoview}>
           <Image style={styles.logo} source = {require("../assets/images/logo-main.png")} />
         </View>
          <View style = {styles.boxview}>
          <Text style = {styles.textview}>DEEP</Text>
          <Text style = {{ ...styles.textview, color: '#23CFA5'}} >SAVE</Text>
          </View>

          <View style = {styles.btncontainer} >
            <TouchableOpacity onPress={this.handlPress}>
                <Text style={styles.button1}>Get Started</Text>
            </TouchableOpacity>
          </View>
       </View>
    );
  }
handlePress(){
alert("heelo")
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
  btncontainer:{
    backgroundColor: "#0E33BD",
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    borderRadius: 35,
    position: "absolute",
    width: 309,
    height: 59,
    left: 50,
    top: 578,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1:{
    width: 166,
    fontSize: 30,
    margin: "auto",
    // font-family: Martel Sans;
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#FFFFFF",

  },
  boxview: {
    position: "absolute",
    width: 228,
    height: 200,
    left: 88,
    top: 372,

 },
 textview:{
   // fontFamily:"MedusaGothic",
   color: "#0E33BD",
  lineHeight:75,
  fontSize:72,
  textAlign:"center"
},
  logoview: {
   justifyContent: "center",
   alignItems: "center"
 },
 logo: {
   position: "relative",
   width: 274,
   height: 246,
   top: 72
 }
});
