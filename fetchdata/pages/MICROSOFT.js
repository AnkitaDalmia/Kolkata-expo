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
      <Text style={styles.container}>STORE ID-307</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Customers often ask how Microsoft deploys its own technologies. What were the initial catalysts for change? The challenges? The benefits? You’ll find those answers here. Microsoft IT Showcase provides what no one else can—the inside story of how Microsoft does IT. By detailing how Microsoft rolls out technology solutions across its own enterprise environment, we will inspire and equip you with the resources to inform your most crucial IT business decisions.

We love to talk about IT. It’s our passion. And we’re armed with some of the best technical minds in the industry. Our IT experts know what they’re doing and pride themselves on digging in to get the most out of technology. Our entire platform is based on their knowledge and we’re better for it.

Microsoft IT Showcase offers a variety of technical resources including case studies, whitepapers, on-demand video, and even live-streaming roundtable sessions with IT experts. Our early adopter experiences, best practices, and proof points offer an inside view of the Microsoft enterprise in order to help you plan for, deploy, and manage Microsoft solutions in your own environment.</Text>      
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