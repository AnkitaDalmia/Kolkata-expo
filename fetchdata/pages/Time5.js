//This is an example code for NavigationDrawer//
import React, { Component } from "react";
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
          <Text style={{ fontSize: 23, fontWeight: "bold", paddingBottom: 20 }}>
            Female Entrepreneur Awards
          </Text>
          <Image
            style={{ width: 400, height: 200, paddingTop: 50 }}
            source={{
              uri:
                "https://content3.jdmagicbox.com/comp/kolkata/y6/033pxx33.xx33.130124174418.b4y6/catalogue/lmg-hydro-pneumatics-n-c-dutta-sarani-kolkata-hydraulic-pump-dealers-1ijczts-250.jpg"
            }}
          />
          <Text style={{ fontSize: 18, paddingTop: 20,paddingLeft:10,paddingRight:10,paddingBottom:20 }}>
            Swarm robots, sometimes referred to as insect robots, work in fleets
            ranging in number from a few to thousands, with all fleet members
            under the supervision of a single controller. The term arises from
            the similarity of the system to a colony of insects, where the
            individuals and behaviors are simple but the fleet as a whole can be
            sophisticated.Robots are sometimes grouped according to the time
            frame in which they were first widely used. First-generation robots
            date from the 1970s and consist of stationary, nonprogrammable,
            electromechanical devices without sensors. Second-generation robots
            were developed in the 1980s and can contain sensors and programmable
            controllers.
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
