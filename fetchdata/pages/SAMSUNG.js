import React, { Component } from 'react';
import {Image, Text, View,TouchableOpacity,StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


 
export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{paddingBottom:120}}>
        <ScrollView>
         <Image source={{uri:'data:image/png;base64,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'}}style={{ height:100,width:250,marginTop:10,marginLeft:55}}></Image>
        <View style={styles.enclosure}>
      <Text style={styles.container}>STORE ID-404</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Samsung is a South Korean multinational conglomerate headquartered in Samsung Town, Seoul. It comprises numerous affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol. Samsung was founded by Lee Byung-chul in 1938 as a trading company.</Text>      
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