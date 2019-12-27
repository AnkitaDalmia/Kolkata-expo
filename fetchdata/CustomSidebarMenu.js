//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Icon } from "react-native-elements";

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      "https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png";
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={require("./image/expoapp.png")}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#e2e2e2",
            marginTop: 15
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2
  }
});
