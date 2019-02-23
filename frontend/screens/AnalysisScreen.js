import React from 'react';
import {Image, ScrollView,StyleSheet,Text,Dimensions,TextInput,TouchableOpacity,View,Button,TouchableNativeFeedback, Alert,} from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import { LineChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width

export default class AnalysisScreen extends React.Component {
  handlPress = () =>{
    Alert.alert(
         'You need to...'
      );
  };
  static navigationOptions =  {
  header: null,
  };
  render() {
    return (
            <View>
              <View style = {styles.tbar}>
                <Text style = {styles.text} >DEEP SAVE</Text>
              </View>
            <View style = {styles.maincontainer}>
            <View style = {styles.midview}>
              <Text style = {{fontSize: 24,letterSpacing: 0.04,}}>Worried about someone?</Text>
              <Text style = {{fontSize: 24,letterSpacing: 0.04,}}>Enter twitter Id for Analysis</Text>
              </View>
              <View style = {{width:"90%",marginTop:10,}}>
              <View style = {styles.boxview}>
              <Text style = {styles.txt1}>Twitter Id</Text>
              </View>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handleid}/>
               </View>
                  <View>
                  <View style = {styles.btncontainer}>
                    <TouchableOpacity  onPress={this.handlPress}>
                        <Text style={styles.button1}>ANALYSE</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <LineChart
             data={{
               labels: ['January', 'February', 'March', 'April', 'May', 'June'],
               datasets: [{
                 data: [
                   Math.random() * 100,
                   Math.random() * 100,
                   Math.random() * 100,
                   Math.random() * 100,
                   Math.random() * 100,
                   Math.random() * 100
                 ]
               }]
             }}
             width={Dimensions.get('window').width * 0.95 } // from react-native
             height={220}
             chartConfig={{
               backgroundColor: '#e26a00',
               backgroundGradientFrom: '#fb8c00',
               backgroundGradientTo: '#ffa726',
               decimalPlaces: 2, // optional, defaults to 2dp
               color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
               style: {
                 borderRadius: 16
               }
             }}
             bezier
             style={{
               marginVertical: 8,
               borderRadius: 16
             }}
           />




           </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tbar: {
   height: 100,
   borderColor: 'black',
   backgroundColor: '#0E33BD',
   alignItems: 'center',
   justifyContent: 'center'
 },
 midview:{
   width: "95%",
   height: "auto",
   padding: 20,
   borderRadius: 15,
   borderWidth: 0.5,
   borderColor: '#23CFA5',
   alignItems: 'center',
   justifyContent: 'center'
 },
 text: {
  color: 'white',
  fontSize: 30,
},
  maincontainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',

  },
  input:{
    // width:  ,
    fontSize: 30,
    paddingLeft: 6,
    height: 60,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#23CFA5',
    // mix-blend-mode: normal;
  },
txt2:{
  width: 31,
  height: 55,
  fontSize: 30,
  textAlign: "center",
  color: "#0E33BD",
},
btncontainer:{
        flexDirection: 'column',
          justifyContent: 'center',
        backgroundColor: "#0E33BD",
        // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        borderRadius: 35,
        margin: 10,
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
  txt1:{
  // position: "absolute",
  width: 100,
  height: 28,
  // font-family: Martel Sans;
  fontStyle: "normal",
  fontWeight: "normal",
  // lineHeight: "normal",
  fontSize: 15,
  marginLeft:10,
  textAlign: "left",
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
},
  logoview: {
      flexDirection: 'column',
        justifyContent: 'center',
   alignItems: "center"
 },
 logo: {
   width: 82,
   height: 74,
 }
});
