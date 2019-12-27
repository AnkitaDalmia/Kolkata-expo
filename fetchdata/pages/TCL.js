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
      <Text style={styles.container}>STORE ID-403</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>TCL Corporation is a Chinese multinational electronics company headquartered in Huizhou, Guangdong Province. It designs, develops, manufactures and sells products including television sets, mobile phones, air conditioners, washing machines, refrigerators and small electrical appliances.</Text>      
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