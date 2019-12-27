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
      <Text style={styles.container}>STORE ID-309</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>eBay Inc. is an American multinational e-commerce corporation based in San Jose, California that facilitates consumer-to-consumer and business-to-consumer sales through its website. eBay was founded by Pierre Omidyar in the autumn of 1995, and became a notable success story of the dot-com bubble.</Text>      
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