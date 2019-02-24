import React from 'react';
import {Image,ActivityIndicator, ScrollView,StyleSheet,Text,Dimensions,TextInput,TouchableOpacity,View,Button,TouchableNativeFeedback, Alert,} from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit'
import Spinner from 'react-native-loading-spinner-overlay';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const screenWidth = Dimensions.get('window').width

export default class ShowTweetScreen extends React.Component {
  constructor(props) {
    super(props);
      console.log(this.props.navigation.state.params.tweets)
      this.state = {
      tableHead: ['Tweets', 'Emotions'],
      tableData: this.props.navigation.state.params.tweets
      // tableData: [this.props.navigation.state.params.tweets[0],   this.props.navigation.state.params.tweets[1]  ]
    }
  }

    static navigationOptions =  {
    header: null,
    };

  render() {
    // const Tweet = this.props.navigation.state.params.tweets;
    // const TweetItems = Tweet.map((Tweet) => <View style = {styles.textview}><Text style = {styles.txt2}>{Tweet[0]}</Text><Text style = {styles.txt2}>{Tweet[1]}</Text></View>);
    return (
            <View>
                <View style = {styles.tbar}>
                  <Text style = {styles.text} >DEEP SAVE</Text>
                </View>
                <ScrollView>
              <View style = {styles.maincontainer}>
              <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>

                <Row data={this.state.tableHead} widthArr={[screenWidth*0.65,screenWidth*0.25]} style={styles.head} textStyle={styles.tabletext}/>
                <Rows data={this.state.tableData} widthArr={[screenWidth*0.65,screenWidth*0.25]} textStyle={styles.tabletext}/>
              </Table>

             </View>
             </ScrollView>
           </View>
    );
  }
}

const styles = StyleSheet.create({

  head: { height: 40, backgroundColor: '#f1f8ff' },
  tabletext: { margin: 6 ,height: "auto"},
  tbar: {
   height: 60,
   borderColor: 'black',
   backgroundColor: '#0E33BD',
   alignItems: 'center',
   justifyContent: 'center'
 },
 text: {
  color: 'white',
  fontSize: 30,
},
  maincontainer:{flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',marginBottom:30,
  },

});
