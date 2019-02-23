import React from 'react';
import {Image,Platform, ScrollView,StyleSheet,Text,TouchableOpacity,View,Button,TouchableNativeFeedback, Alert,} from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  handlPress = () =>{
    Alert.alert(
         'You need to...'
      );
  };

  render() {
    return (
            <View>
             <View style = {styles.logoview}>
               <Image style={styles.logo} source = {require("../assets/images/logo-main.png")} />
             </View>
              <View style = {styles.boxview}>
              <Text style = {styles.textview}>DEEP SAVE</Text>
              </View>
              <View style = {styles.boxview}>
              <Text style = {styles.txt1}>Username</Text>
              </View>
           </View>
    );
  }
}

const styles = StyleSheet.create({
  txt1:{
  position: "absolute",
  width: 73,
  height: 28,
  left: 18,
  top: 30,
  // font-family: Martel Sans;
  fontStyle: "normal",
  fontWeight: "normal",
  // lineHeight: "normal",
  fontSize: 15,
  textAlign: "center",
  color: "#0E33BD",
  },
textview:{
  // fontFamily:"MedusaGothic",
  color: "#0E33BD",
 lineHeight:75,
 fontSize:50,
 textAlign:"center",
  width: 312,
  height: 70,
  left: 49,
  top: 23,
},
  logoview: {
      flexDirection: 'column',
        justifyContent: 'center',
   alignItems: "center"
 },
 logo: {
   position: "relative",
   width: 82,
   height: 74,
   top: 33,
 }
});
