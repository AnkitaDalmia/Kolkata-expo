//This is an example code for NavigationDrawer//
import React, { Component } from "react";
//import react in our code.
import { StyleSheet, View, Text } from "react-native";
// import all basic components
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
//import Day3 from "../pages/Day3";

import Time3 from "../pages/Time3";
import Time2 from "../pages/Time2";
import Time1 from "../pages/Time1";
//import Day3 from "./pages/Day3";
import call from "react-native-phone-call";
import Communications from "react-native-communications";
import openMap from "react-native-open-maps";

//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
export default (TabScreen = createMaterialTopTabNavigator(
  {
    "05:00-06:00": { screen: Time1 },
    "06:00-07:00": { screen: Time2},
    "07:00-08:00": { screen: Time3 },
    
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#F8F8F8",
      style: {
        backgroundColor: "#701982ff"
      },
      labelStyle: {
        textAlign: "center"
      },
      indicatorStyle: {
        borderBottomColor: "#ffff00ff",
        borderBottomWidth: 5
      },
      scrollEnabled: true
    }
  }
));
console.disableYellowBox = true;
//making a StackNavigator to export as default

