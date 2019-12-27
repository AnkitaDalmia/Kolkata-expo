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
      <Text style={styles.container}>STORE ID-509</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Fila is an Italian sporting goods company founded in 1911 in Biella, Italy. It has been a subsidiary of Fila Korea since 2007. The Italian company passed through a number of ownerships before it was purchased in 2007 by Yoon Yoon-su, commonly known in English as Gene Yoon, who is the current chairman.</Text>      
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