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
      <Text style={styles.container}>STORE ID-210</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>VERO MODA is the brand of choice for the fashion-conscious, independent young woman who wants to dress well and pay less. VERO MODA offers quality, affordable and inspiring clothing for the young woman who wants to look good and have fun with her look. At VERO MODA, the customer finds the right clothes at the right price and the opportunity to follow fashion on her own terms.

At VERO MODA we live and breathe trends. Our contemporary international collections offer ‘can’t-live-without’ pieces alongside essential wardrobe staples.</Text>      
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