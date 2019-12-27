import React, { Component } from 'react';
import {Image, Text, View,TouchableOpacity,StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


 
export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{paddingBottom:120}}>
        <ScrollView>
         <Image source={{uri:'data:image/png;base64,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'}}style={{ height:120,width:250,marginTop:10,marginLeft:55}}></Image>
        <View style={styles.enclosure}>
      <Text style={styles.container}>STORE ID-202</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>MANGO was founded in 1984 and is today one of the leading fashion groups in the world.Based in its city of origin, Barcelona, the company has an extensive store network of 2,200 stores (over 800,000 m2) in 109 countries.

From its “El Hangar” Design Centre in Palau-solità i Plegamans, every year it designs 18,000 garments and accessories for wearing the season’s trends. The company, which owns the MANGO Woman, Man, Kids and Violeta lines, closed 2015 with sales of 2.327 billion euros, representing a 15% increase on 2014. </Text>      
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