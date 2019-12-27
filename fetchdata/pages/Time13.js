//This is an example code for NavigationDrawer//
import React, { Component } from "react";
//import react in our code.
//import { StyleSheet, View, Text } from "react-native";
//This is an example code for NavigationDrawer//
//import React, { Component } from "react";
//import react in our code.
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default class Day3 extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>
            Closing ceremony
          </Text>
          <Text
            style={{
              fontSize: 20,
              paddingTop: 30,
              paddingBottom: 20,
              marginLeft: 20,
              color: "#000000"
            }}
          >
            Vote of thanks
          </Text>
          <Text
            style={{
              fontSize: 18,

              paddingBottom: 20,
              marginLeft: 20,
              marginRight: 10
            }}
          >
            Robots are sometimes grouped according to the time frame in which
            they were first widely used. First-generation robots date from the
            1970s and consist of stationary, nonprogrammable, electromechanical
            devices without sensors. Second-generation robots were developed in
            the 1980s and can contain sensors and programmable controllers.
          </Text>
          <Text
            style={{
              fontSize: 20,
              paddingTop: 10,
              paddingBottom: 20,
              //marginLeft: 20,
              marginRight: 10,
              color: "#000000"
            }}
          >
            Award for most innovative stall
          </Text>
          <Text
            style={{
              fontSize: 18,

              paddingBottom: 20,
              marginLeft: 20,
              marginRight: 10
            }}
          >
            Robots are sometimes grouped according to the time frame in which
            they were first widely used. First-generation robots date from the
            1970s and consist of stationary, nonprogrammable, electromechanical
            devices without sensors. Second-generation robots were developed in
            the 1980s and can contain sensors and programmable controllers.
          </Text>
          <Text
            style={{
              fontSize: 20,
              paddingTop: 10,
              paddingBottom: 20,
              // marginLeft: 20,
              color: "#000000",
              marginRight: 10
            }}
          >
            Award for most attended stalls
          </Text>
          <Text
            style={{
              fontSize: 18,

              paddingBottom: 20,
              marginLeft: 20,
              marginRight: 10
            }}
          >
            Robots are sometimes grouped according to the time frame in which
            they were first widely used. First-generation robots date from the
            1970s and consist of stationary, nonprogrammable, electromechanical
            devices without sensors. Second-generation robots were developed in
            the 1980s and can contain sensors and programmable controllers.
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    padding: 15
    //justifyContent: "center"
  }
});
