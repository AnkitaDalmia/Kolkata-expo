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
      <Text style={styles.container}>STORE ID-310</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Lenovo is one of the world's leading personal technology companies, producing innovative PCs and mobile internet devices. Now, #286 on fortune 500 list, Lenovo is the world's largest PC vendor and fourth largest smartphone company.

 

While the Lenovo brand came into existence only in 2004, the company has a much longer history. In 1984, Legend Holdings was formed with 200,000 RMB (US$25,000) in a guard house in China. The company was incorporated in Hong Kong in 1988 and would grow to be the largest PC company in China. Legend Holdings changed its name to Lenovo in 2004 and, in 2005, acquired the former Personal Computer Division of IBM, the company that invented the PC industry in 1981.</Text>      
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