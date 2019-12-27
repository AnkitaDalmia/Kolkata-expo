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
      <Text style={styles.container}>STORE ID-209</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Today Benetton Group is one of the best-known fashion companies in the world, present in the most important markets
in the world with a network of about 5,000 stores; a responsible group that plans for the future and lives in the present,
with a watchful eye to the environment, to human dignity, and to a society in transformation.</Text>      
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