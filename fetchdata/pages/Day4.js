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

import Time10 from "../pages/Time10";
import Time11 from "../pages/Time11";
import Time12 from "../pages/Time12";
//import Day3 from "./pages/Day3";

//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
export default (TabScreen = createMaterialTopTabNavigator(
  {
    "12:00-01:00": { screen: Time10 },
    "02:00-03:00": { screen: Time11},
    "04:00-05:00": { screen: Time12 },
    
    
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



