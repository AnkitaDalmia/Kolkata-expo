import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{ paddingBottom: 120 }}>
        <ScrollView>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBSHFxM70wXnBVBzpGOePxbhdqKmInRxnW-fU4kBR4qbNGRXJ7g' }} style={{ height: 100, width: 250, marginTop: 10, marginLeft: 55 }}></Image>
          <View style={styles.enclosure}>
            <Text style={styles.container}>STORE ID-406</Text>
          </View>

          <Text style={{ fontSize: 18, color: 'black', marginLeft: 10, marginTop: 20, paddingLeft: 18, paddingRight: 18 }}>ZTE Corporation is a Chinese multinational telecommunications equipment and systems company headquartered in Shenzhen, Guangdong, China. It is one of China's leading telecom equipment manufacturers.ZTE Corporation is a leading global provider of telecommunications equipment and network solutions. ... Founded in 1985, ZTE is listed on both the Hong Kong and Shenzhen Stock Exchanges and is China’s largest listed telecoms equipment company.</Text>
        </ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL("https://drive.google.com/file/d/1iBTUvou6yluFTCGfV8Fvg5rBck_rtiaU/view?usp=sharing")}>
            <Image source={{ uri: 'https://lh5.googleusercontent.com/0ywChJXZWBtH69WyowQjDbMOeHuLbKSf0jt3jwevqwThNws8JVFHV7N8AK1BOc7L-wMsYEMsfpLRlYGOLCshWII-U1Dbs8bkECJBb7s' }} style={{ height: 60, width: 50, marginTop: 20, marginLeft: 80 }}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')}>
              <Image source={{ uri: 'https://lh6.googleusercontent.com/XGv7BPNhRekKxLs9Lr8oaSc8-QFvtuGkMyV7k76tZ2tBZMLGnzVSQti1YIWwCcT27n4am4QWBQacAJb5_ibv6qnImioJQ_0M0vNHa4ryZcdpItxbOsR3V3Fvo9eoEK_lTAPfmVpaRxY' }} style={{ height: 70, width: 50, marginTop: 15, marginLeft: 90, paddingBottom: 10 }}></Image>
            </TouchableOpacity>
        

        </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', height: 50, width: 90, marginLeft: 60 }}>CATALOG</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', height: 40, width: 100, marginLeft: 55 }}>CONTACT</Text>
          </View>


        </View>
        );
      }
    }
const styles = StyleSheet.create({
          enclosure: {
          marginTop: 20,
        marginLeft:30,
        marginRight:40,
        borderRadius: 10,
        borderWidth:2,
        borderColor:'#701982ff',
    
      },
  container: {
          marginTop: 10,
        marginLeft:70,
        fontStyle:'italic',
        fontSize:22,
        alignItems:'center',
        justifyContent:'center',
        height:40,
        width:150,
        
  },})