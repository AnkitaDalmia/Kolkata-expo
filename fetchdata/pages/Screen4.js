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
import Title_Sponsor from "../pages/Sponsors";
//import Day1 from "./pages/Sponsors";
import Co_sponsors from "../pages/Cosponsors";
//import Day3 from "./pages/Day3";

//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
export default (TabScreen = createMaterialTopTabNavigator(
  {
    "Title Sponsor": { screen: Title_Sponsor },
    "Co-sponsors": { screen: Co_sponsors }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#F8F8F8",
      style: {
        backgroundColor: "#633689"
      },
      labelStyle: {
        textAlign: "center"
      },
      indicatorStyle: {
        borderBottomColor: "#ffff00ff",
        borderBottomWidth: 5
      }
    }
  }
));
console.disableYellowBox = true;

//making a StackNavigator to export as default
