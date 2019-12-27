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
      <Text style={styles.container}>STORE ID-407</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Sony Corporation is a Japanese multinational conglomerate corporation headquartered in Kōnan, Minato, Tokyo. Its diversified business includes consumer and professional electronics, gaming, entertainment and financial services.</Text>      
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