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
      <Text style={styles.container}>STORE ID-504</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Reebok is an English footwear and apparel company, subsidiary of German sportsgiant Adidas since 2005. Reebok produces and distributes fitness, running and CrossFit sportswear including clothing and footwear.Reebok is an American-inspired global brand with a deep fitness heritage and a clear mission: To be the best fitness brand in the world. Not an easy one. But if there is one brand that can make it happen, it is Reebok, the brand that was fundamentally part of a fitness movement that forever changed the way we look at spandex and headbands. </Text>      
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