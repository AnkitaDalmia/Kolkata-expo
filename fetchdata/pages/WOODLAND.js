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
      <Text style={styles.container}>STORE ID-510</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Woodland's parent company, Aero Group, has been a well known name in the outdoor shoe industry since the early 50s. Founded in Quebec, Canada, it entered the Indian market in 1992. Before that, Aero Group was majorly exporting its leather shoes to USSR. After the dissolution of the Soviet Union into various states, the group decided to launch some of its products in India. Hence, the first hand-stitched leather shoe was launched, which took the entire shoe market by storm. That shoe made the brand 'Woodland'.</Text>      
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