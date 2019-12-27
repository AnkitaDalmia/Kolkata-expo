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
      <Text style={styles.container}>STORE ID-304</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Amazon.com, Inc., is an American multinational technology company based in Seattle, Washington that focuses on e-commerce, cloud computing, digital streaming and artificial intelligence. It is considered one of the Big Four technology companies along with Google, Apple and Facebook.</Text>      
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