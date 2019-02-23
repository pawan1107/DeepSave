import React from 'react';
import axios from 'axios';
import {Image,Platform, KeyboardAvoidingView,Picker,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View,Button,TouchableNativeFeedback, Alert,} from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

export default class RegisterScreen extends React.Component {
  constructor(props) {
   super(props);
   this.state = { username: '', password: '', email:'',designation:'',};
   this.handlePress = this.handlePress.bind(this);
   this.handleEmail = this.handleEmail.bind(this);
   this.handleUsername = this.handleUsername.bind(this);
   this.handlePassword = this.handlePassword.bind(this);
   }
  handlePress() {
    axios.post("http://10.0.8.215:3000/api/auth/register", {
      username: this.state.username, password: this.state.password
    }).then(res => {
      console.log(res["data"]["message"])
      if(res["data"]["message"] == "User Created Successfully") {
        alert("Register Successfully");
      this.props.navigation.navigate('Analysis');
      }
      else {
        alert("Please Enter all the Details");
      }
    }).catch(function (error) {
        console.log(error);
      })
  };

  handleUsername(text) {
    this.setState({username: text});
  }
  handleEmail(text) {
    this.setState({email: text});
  }

  handlePassword(text) {
    this.setState({password: text});
  }


  static navigationOptions =  {
  header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
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
              <View style = {{width:"90%",marginTop:10,}}>
              <View style = {styles.boxview}>
              <Text style = {styles.txt1}>Username</Text>
              </View>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleUsername}/>
               </View>

               <View style = {{width:"90%",marginTop:10,}}>
                 <View style = {styles.boxview}>
                  <Text style = {styles.txt1}>Email</Text>
                 </View>
                   <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleEmail}/>
                  </View>

                <View style = {{width:"90%",marginTop:10,}}>
                  <View style = {styles.boxview}>
                   <Text style = {styles.txt1}>Password</Text>
                  </View>
                    <TextInput style = {styles.input}
                     underlineColorAndroid = "transparent"
                     placeholderTextColor = "#9a73ef"
                     autoCapitalize = "none"
                     onChangeText = {this.handlePassword}/>
                   </View>
                 <View style = {{width:"90%",marginTop:10,}}>
                   <View style = {styles.boxview}>
                    <Text style = {styles.txt1}>Designation</Text>
                   </View>
                   <Picker style = {styles.input}
                      selectedValue={this.state.selectedValue}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({designation: itemValue})
                      }>
                      <Picker.Item label="Parent" value="Parent" />
                      <Picker.Item label="Psychiatrist" value="Psychiatrist" />
                    </Picker>
                    </View>
                  <View>
                  <View style = {styles.btncontainer}>
                    <TouchableOpacity  onPress={this.handlePress}>
                        <Text style={styles.button1}>Register</Text>
                    </TouchableOpacity>
                  </View>
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
  pickerinput:{
  width: 100,

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
