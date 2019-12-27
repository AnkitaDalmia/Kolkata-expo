import React, { Component } from 'react';
import {Image, Text, View,TouchableOpacity,StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


 
export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{paddingBottom:120}}>
        <ScrollView>
         <Image source={{uri:'data:image/png;base64,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'}}style={{ height:170,width:250,marginTop:10,marginLeft:55}}></Image>
        <View style={styles.enclosure}>
      <Text style={styles.container}>STORE ID-204</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Founded in 1978 in Milan,Gianni Versace S.r.l is one of the leading international fashion design houses and a symbol of Italian luxury world-wide. It designs, manufactures, distributes and retails fashion and lifestyle products including haute couture, prèt-à-porter, accessories, jewellery, watches, eyewear, fragrances, and home furnishings all bearing the distinctive Medusa logo. 

The Versace Group distributes its products through a world-wide D.O.S network which includes over 200 boutiques in the principal cities and over 1500 wholesalers worldwide.

Donatella Versace has been Artistic Director of Versace since 1997 and has steered the brand into the 21st century. Today, Versace represents its heritage through its strong and fearless designs, while addressing a new global audience which continues to strengthen Versace’s position in contemporary culture.
</Text>      
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