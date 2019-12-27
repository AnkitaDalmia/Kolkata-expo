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
import call from "react-native-phone-call";
import Communications from "react-native-communications";
import openMap from "react-native-open-maps";
//import { ScrollView } from "react-native-gesture-handler";
// import all basic components

export default class Day3 extends Component {
  call = () => {
    //handler to make a call
    const args = {
      number: " +919831984346",
      prompt: false
    };
    call(args).catch(console.error);
  };
  //Screen1 Component
  render() {
    return (
      <ScrollView>
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>
            Felicitation of Sponsor
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 125, height: 125, marginLeft: 100 }}
              source={require("../image/profile.png")}
            />
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                marginTop: 20,
               // fontWeight: "bold",
                marginRight: 70,
                color: "#000000"
              }}
            >
              MR. DINESH KUMAR BHATTER
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={this.call}
            >
              {/*Donute Button Image */}

              <Image
                style={{ width: 35, height: 25, marginRight: 20 }}
                source={{
                  uri:
                    "https://lh4.googleusercontent.com/hr5FWk54ONyFL6Kc1oPnGDY2RfRp3B3PZ0q9ZP0Sq2A8l0Fw15mHa0dHtCpY7KKOVH1Wc0lKIX0jKy6ON1qsrNp9f2_owbxfTjbSU6j0lyCx0r5YhRmPPH-TnTqNlj6Hmw_SZoEx6P4"
                }}
              />
              <Text style={{ marginRight: 130, fontSize: 20,color: "#353535" }}>
                +919831984346
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() =>
                Communications.email(
                  [" info@kolkatafashionexpo.com"],
                  null,
                  null,
                  null,
                  null
                )
              }
            >
              <Image
                style={{ width: 35, height: 25, marginRight: 20 }}
                source={{
                  uri:
                    "https://lh5.googleusercontent.com/IIKKSJmd1rdwmTfROlp93lWh7yezJPjzcLTmnyl1jQd8KH82L90FKjUauBh6IL6fmPSd9189G-Knd4W9PKsCSmC1bkaXbi3Fr6b1cVkeIWn1AkmooMYW6Jj1LYH1SpRwJxOFCkn2NCM"
                }}
              />
              <Text style={{ fontSize: 20, marginRight: 5 ,color: "#353535"}}>
                info@kolkatafashionexpo.com
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ paddingLeft: 4, fontSize: 18, paddingTop: 20, }}>
            KOLKATA FASHION EXPO Is Eastern India's Biggest Fashion Event which
            is aimed towards bringing together the brightest and best fashion
            minds from the country. After the grand success in the KFE
            2015(KOLKATA), KFE 2016(KOLKATA, BANGLADESH, NEPAL), KFE
            2017(KOLKATA) and KFE 2018(HYDERABAD), where hundreds of stalls had
            came together, now KFE is gearing up for the huge exposure at
            Kolkata in this August’18. Motive behind KFE is to promote and
            sustain the most imperative Indian ethnic culture. The event
            highlights the 2 days of fashion extravaganza where we get to
            experience the leading fashion houses. This event has been created
            to provide an ideal platform where leading manufacturers,
            wholesalers and buyers will come together under one umbrella to
            ideate and exchange thoughts on enhancing the fashion culture of
            India.
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
