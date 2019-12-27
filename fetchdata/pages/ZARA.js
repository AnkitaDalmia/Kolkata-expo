import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{ paddingBottom: 120 }}>
        <ScrollView>
          <Image source={{ uri: 'data:image/png;base64,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' }} style={{ height: 100, width: 250, marginTop: 10, marginLeft: 55 }}></Image>
          <View style={styles.enclosure}>
            <Text style={styles.container}>STORE ID-201</Text>
          </View>

          <Text style={{ fontSize: 18, color: 'black', marginLeft: 10, marginTop: 20, paddingLeft: 18, paddingRight: 18 }}>Zara is a Spanish clothes and accessories brand, it is the flagship brand of the Inditex group. Few clothing brands keep up with the latest fashion, are of high quality and yet, affordable. It is probably the amalgamation of all these qualities that made Zara, the Spanish clothing brand become the go-to fashion brand for all.</Text>
        </ScrollView>
        <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity  onPress={() => Linking.openURL("https://drive.google.com/file/d/1iBTUvou6yluFTCGfV8Fvg5rBck_rtiaU/view?usp=sharing")}>
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
    marginLeft: 30,
    marginRight: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#701982ff',

  },
  container: {
    marginTop: 10,
    marginLeft: 70,
    fontStyle: 'italic',
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 150,

  },
})