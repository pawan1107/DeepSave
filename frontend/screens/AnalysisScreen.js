import React from 'react';
import {Image, ScrollView,StyleSheet,Text,Dimensions,TextInput,TouchableOpacity,View,Button,TouchableNativeFeedback, Alert,} from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width

export default class AnalysisScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { twitter_id: '', data: [[0],[]], showGraph: false };
    this.handlePress = this.handlePress.bind(this);
    this.handleId = this.handleId.bind(this);
  }
    static navigationOptions =  {
    header: null,
    }; 

  handlePress() {
    axios.post("http://10.0.8.215:3000/api/dashboard/twitter", {
      twitter_id: this.state.twitter_id
    }).then(res => {
      console.log(JSON.stringify(res))
      if(res["data"]["message"] == "success") {
        this.setState({data: res["data"]["data"], showGraph: true})
        console.log(this.state.data)
      }
      else {
        alert("Twitter Id Not Found")
      }
    }).catch(function (error) {
      console.log(error);
    })
  }

  handleId(text) {
    this.setState({twitter_id: text, showGraph: false})
  }

  render() {
    return (
            <View>
              <View style = {styles.tbar}>
                <Text style = {styles.text} >DEEP SAVE</Text>
              </View>
            <View style = {styles.maincontainer}>
            <ScrollView style = {styles.main}>
            <View style = {styles.midview}>
              <Text style = {{fontSize: 24,letterSpacing: 0.04,}}>Worried about someone?</Text>
              <Text style = {{fontSize: 24,letterSpacing: 0.04,}}>Enter twitter Id for Analysis</Text>
              </View>
              <View style = {{width:"90%",marginTop:10,}}>
              <View style = {styles.boxview}>
              <Text style = {styles.txt1}>Twitter Id</Text>
              </View>
              <TextInput style={styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handleId}/>
               </View>
                  <View>
                  <View style = {styles.btncontainer}>
                    <TouchableOpacity  onPress={this.handlePress}>
                        <Text style={styles.button1}>ANALYSE</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <LineChart
             data={{
               labels: this.state.data[1],
               datasets: [{
                 data: this.state.data[0]
               }]
             }}
             width={Dimensions.get('window').width * 0.95 }
             height={220}
             chartConfig={{
               backgroundColor: '#e26a00',
               backgroundGradientFrom: '#fb8c00',
               backgroundGradientTo: '#ffa726',
               decimalPlaces: 2,
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
            </ScrollView>
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
