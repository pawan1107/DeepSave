import React from 'react';
import axios from 'axios';

import {Image,Platform,KeyboardAvoidingView, ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View,Button,TouchableNativeFeedback, Alert,} from 'react-native';
// import { ExpoLinksView } from '@expo/samples';



class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handlePress = this.handlePress.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
    static navigationOptions =  {
    header: null,
    };

  handlePress() {
    console.log("Hello");
    axios.post("https://thawing-hollows-21538.herokuapp.com/api/auth/login", {
      username: this.state.username, password: this.state.password
    }).then(res => {
      console.log(res["data"])
      if(res["data"]["message"] == "success") {
        alert("Login Successfully");
        this.props.navigation.navigate('Analysis');
      }
      else {
        alert("Wrong Username Or Password")
      }
    }).catch(function (error) {
        console.log(error);
      })
  };

  handleEmail(text) {
    this.setState({username: text});
  }

  handlePassword(text) {
    this.setState({password: text});
  }
  render() {
    const {navigate} = this.props.navigation;

    const paddingTop = 110 - this.state.keyboardSpace / 3;
    return (
            <View style = {styles.maincontainer}>
              <View >
                <View style = {styles.logoview}>
                  <Image style={styles.logo} source = {require("../assets/images/logo-main.png")} />
                </View>
              </View>
              <View>
                <View style = {styles.boxview}>
                  <Text style = {styles.textview}>DEEP SAVE</Text>
                </View>
              </View>
              <View style = {{width:"90%"}}>
                <View style = {styles.boxview}>
                  <Text style = {styles.txt1}>Username</Text>
                </View>
                  <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                   onChangeText = {this.handleEmail}/>
               </View>

               <View style = {{width:"90%"}}>
                 <View style = {styles.boxview}>
                  <Text style = {styles.txt1}>Password</Text>
                 </View>
                 <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handlePassword}/>
                </View>
                <View>
                  <TouchableOpacity  onPress={this.handlePress}>
                  <View style = {styles.btncontainer}>
                      <Text style={styles.button1}>Login</Text>
                  </View>
                </TouchableOpacity>
                </View>
                <Text style={styles.txt2}>or</Text>
                <View>
                  <TouchableOpacity  onPress={() => {navigate('Register')}}>
                    <View style = {styles.btncontainer}>
                        <Text style={styles.button1}>Register</Text>
                    </View>
                  </TouchableOpacity>
                </View>
           </View>

    );
  }
}

const styles = StyleSheet.create({
  maincontainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',

  },
  input:{
    // width:  ,
    paddingLeft: 6,
    height: 45,
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
  width: 73,
  height: 28,
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

export default LoginScreen;
