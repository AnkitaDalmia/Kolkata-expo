

import React, { Component } from 'react';
import {Image, Text, View,TouchableOpacity,StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


 
export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{paddingBottom:120}}>
        <ScrollView>
         <Image source={{uri:'data:image/jpeg;base64,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'}}style={{ height:100,width:250,marginTop:10,marginLeft:55}}></Image>
        <View style={styles.enclosure}>
      <Text style={styles.container}>STORE ID-405</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>LG’s philosophy revolves around people, sincerity, and sticking to the fundamentals. It is to understand our customers and to offer optimum solutions and new experiences through ceaseless innovation, thus helping our customers lead better lives.
We are reaching out to discerning consumers with keen sensibilities - people who continue to explore new activities and take on new challenges to experience more and achieve a better life. We have developed our brand image gradually and consistently, always to communicate, “Life’s Good.” We are contemporary yet authentic, always evolving our fundamental philosophies to the modern arena.</Text>      
      </ScrollView>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity  onPress={() => Linking.openURL("https://drive.google.com/file/d/1iBTUvou6yluFTCGfV8Fvg5rBck_rtiaU/view?usp=sharing")}>
        <Image source={{uri:'https://lh5.googleusercontent.com/0ywChJXZWBtH69WyowQjDbMOeHuLbKSf0jt3jwevqwThNws8JVFHV7N8AK1BOc7L-wMsYEMsfpLRlYGOLCshWII-U1Dbs8bkECJBb7s'}}style={{height:60,width:50,marginTop:20,marginLeft:80}}></Image>
       </TouchableOpacity>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('Contact')}>
        <Image source={{uri:'https://lh6.googleusercontent.com/XGv7BPNhRekKxLs9Lr8oaSc8-QFvtuGkMyV7k76tZ2tBZMLGnzVSQti1YIWwCcT27n4am4QWBQacAJb5_ibv6qnImioJQ_0M0vNHa4ryZcdpItxbOsR3V3Fvo9eoEK_lTAPfmVpaRxY'}}style={{height:70,width:50,marginTop:15,marginLeft:90,paddingBottom:10}}></Image>
        </TouchableOpacity>
        

        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:20,fontWeight:'bold',height:50,width:90,marginLeft:60}}>CATALOG</Text>
        <Text style={{fontSize:20,fontWeight:'bold',height:40,width:100,marginLeft:55}}>CONTACT</Text>
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  enclosure:{
    marginTop:20,
    marginLeft:30,
    marginRight:40,
    borderRadius: 10,
    borderWidth:2,
    borderColor:'#701982ff',

  },
  container: {
    marginTop:10,
    marginLeft:70,
    fontStyle:'italic',
    fontSize:22,
    alignItems:'center',
    justifyContent:'center',
    height:40,
    width:150,
    
  },})