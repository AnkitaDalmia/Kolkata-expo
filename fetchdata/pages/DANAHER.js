import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{ paddingBottom: 120 }}>
        <ScrollView>
          <Image source={{ uri: 'data:image/png;base64,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' }} style={{ height: 130, width: 250, marginTop: 10, marginLeft: 55 }}></Image>
          <View style={styles.enclosure}>
            <Text style={styles.container}>STORE ID-308</Text>
          </View>

          <Text style={{ fontSize: 18, color: 'black', marginLeft: 10, marginTop: 20, paddingLeft: 18, paddingRight: 18 }}>At Danaher, you have the opportunity to advance your career in a way no other company or environment can offer.Exceptional people accomplish outstanding things here, in a dynamic atmosphere of collaboration, professional growth and continuous improvement.</Text>
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