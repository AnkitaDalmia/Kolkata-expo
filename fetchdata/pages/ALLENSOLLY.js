import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{ paddingBottom: 120 }}>
        <ScrollView>
          <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={{ height: 150, width: 250, marginTop: 10, marginLeft: 55 }}></Image>
          <View style={styles.enclosure}>
            <Text style={styles.container}>STORE ID-208</Text>
          </View>

          <Text style={{ fontSize: 18, color: 'black', marginLeft: 10, marginTop: 20, paddingLeft: 18, paddingRight: 18 }}>www.allensolly.com an initiative of Madura Fashion & Lifestyle, a division of Aditya Birla Fashion and Lifestyle is India’s largest and fastest growing branded apparel companies and a premium lifestyle player in the retail sector. After consolidating its market leadership with its own brands, it introduced premier international labels, enabling Indian consumers to buy the most prestigious global fashionwear and accessories within the country.</Text>
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