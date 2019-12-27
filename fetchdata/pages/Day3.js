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

import Time7 from "../pages/Time7";
import Time8 from "../pages/Time8";
import Time9 from "../pages/Time9";
import Time13 from "../pages/Time13"
//import Day3 from "./pages/Day3";

//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
export default (TabScreen = createMaterialTopTabNavigator(
  {
    "12:00-01:00": { screen: Time7 },
    "03:00-04:00": { screen: Time8 },
    "05:00-06:00": { screen: Time9 },
    "07:30-08:00": { screen: Time13 },
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
