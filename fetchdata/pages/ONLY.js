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
      <Text style={styles.container}>STORE ID-206</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Welcome to the world of ONLY, where we embrace the magic of the possibilities within everyday life. That is our philosophy – ONLY is about you – and ONLY you. An amalgamation of western fashion forward styles, high quality and great value is what makes ONLY truly unique. Each style is created with this special ONLY feeling, which resonates with the self -confidence, style and carefree attitude of the style conscious millennial.

We started operations in 1995 in Denmark, and forayed into the Indian market with the launch of the first store in Mumbai in 2010. Having received an overwhelming response, we have rapidly expanded our style footprint in the country with 53 Exclusive Brand Outlets, and 140 Shop in Shops till date.

Denims are our lifeblood and we pride ourselves in setting the paradigm for ‘denimizing’ the world with our range of runway inspired and trend driven collection of high on fashion denim wear for the fun fearless fashionistas! In effect, all ONLY collections reflect the denim attitude, look and image.

Incorporating the latest trends ONLY curates a unique version of fashion, keeping in mind the exclusive and differentiated fashion moments each ONLY girl comes across. The ONLY collections of high fashion western wear feature an inimitable, modern identity coupled with attractive styles and international class.</Text>      
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