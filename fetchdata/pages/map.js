/*This is an Example of React Native Map*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView ,{marker}from 'react-native-maps';
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 22.595577,
            longitude: 88.470163,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
             <Marker
                coordinate={{ latitude: 22.595577, longitude: 88.470163 }}
                title="Kolkata Fashion Expo"
                description=" AD - 99, Kashish House, Sector I, Salt Lake City, Kolkata - 700064"
              />
            </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
    MainContainer: {
       flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    container: {
        ...StyleSheet.absoluteFillObject,
      top: 1000,
      left: 20,
      right: 20,
      bottom: 0,
      alignItems: "center",
      justifyContent: "flex-end"
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
  });