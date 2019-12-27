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
      <Text style={styles.container}>STORE ID-205</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Forever New is a fashion clothing and accessories brand founded in Melbourne, Australia. One of the fastest growing Australian brands, Forever New emerged in late 2006 as a start up retailer and now trades over 250 stores across seven countries.

Our brand celebrates the feminine beauty of women, a signature style flowing through every creative element.

Collections are inspired by global trends in art, film, music and theatre, haute couture runway shows in Paris, London, Milan and New York.

Forever New creative teams work collaboratively to create unique harmonious collections, presented beautifully in elegant store environments for the shopping pleasure of our valued customers.

Superstar models such as Catherine McNeill, Cassie Davies, Skye Stracke, Samantha Harris, Juliana Georgeson, Abbey Lee Kershaw and Emma Ishta have featured as faces of Forever New with their natural feminine beauty and we continually search the world for inspiring talent to showcase our collections.</Text>      
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