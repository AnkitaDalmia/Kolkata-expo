//This is an example code for NavigationDrawer//
import React, { Component } from "react";
//import react in our code.
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
// import all basic components

export default class Screen1 extends Component {
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}>Presented by </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.amazon.in/?ie=UTF8&tag=googinabkkenshoo-21&ascsubtag=_k_EAIaIQobChMI7cGP5_vr4gIVjx0rCh2VDw4nEAAYASAAEgKk7PD_BwE_k_&gclid=EAIaIQobChMI7cGP5_vr4gIVjx0rCh2VDw4nEAAYASAAEgKk7PD_BwE")}
        >
          <Image
            style={{ width: 200, height: 200 }}
            source={{
              uri:
                "https://lh4.googleusercontent.com/IqUwKrpMyq7sHT0ovY5K6aohOSm8F2ykGZweVSdF_w_tqE5Epwzr0DCzCTlkb7ddCwuCrhimNyO7qEBIelfSrpA9aYKFShtJLkBCpDhvgA2cyavsAPQ_Y5nzUirIOx1vmxmc1cdibes"
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
