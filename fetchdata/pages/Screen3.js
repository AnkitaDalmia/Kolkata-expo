//This is an example code for NavigationDrawer//
import React, { Component } from "react";
//import react in our code.
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Card,
  TouchableOpacity,
  Linking
} from "react-native";
//import MapView from "react-native-maps";

import MapView, { Marker, } from "react-native-maps";
import call from "react-native-phone-call";
import Communications from "react-native-communications";
import {createOpenLink} from "react-native-open-maps";
// import all basic components

export default class Screen3 extends Component {
  constructor() {
    super();
  }
  _yosemite() {
    openMap({
      latitude: 22.595577,
      longitude: 88.470163,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121
    });
  }


  call = () => {
    //handler to make a call
    const args = {
      number: " +919831984346",
      prompt: false
    };
    call(args).catch(console.error);
  };
  //Screen3 Component
  render() {
    //recently added padding right in text
    return (
      <ScrollView>
        <View style={styles.MainContainer}>
          <Image
            style={{ width: 350, height: 215 }}
            source={{
              uri:
                "https://lh3.googleusercontent.com/-sAduHt3gZAE/XQHYlkD9lwI/AAAAAAAAEE0/oEagWVXsQt0s1LBg57RQ7kDaDDTQQ-FdQCK8BGAs/s512/2019-06-12.png"
            }}
          />

          <Text style={{ paddingLeft: 18, fontSize: 18, paddingRight: 18 }}>
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
          <Text style={{ paddingLeft: 18, fontSize: 18, paddingRight: 18 }}>
            Mr. Kamal Pugalia, the creative man behind the KFE has ensured that
            if you are truly committed towards something then you can actually
            make the difference in the long run. The indispensable culture of
            ethnic wear has ruled our country for many years and we have
            conceptualized the biggest fashion bandwagon on the similar concept
            where people get to notice the ever- changing fashion industry.
            Kolkata Fashion Expo Is Their First Consolidated Endeavor To
            Initiate A Global Dialogue About The Indispensable Culture Of
            Promoting, Encouraging And Sustaining Indian Ethnic Wear. Big Or
            Small, Our Event Shall Encompass Everybody Involved In Our Industry.
            We Are Grateful To Mr. Kamal Pugalia, Creative Curator Behind KFE
            For Instilling The Conviction In Us – That Together We Can Make a
            Difference.
          </Text>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
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
              <Text style={{ marginRight: 130, fontSize: 20,color:"black" }}>
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
              <Text style={{ fontSize: 20, marginRight: 5,color:"black" }}>
                info@kolkatafashionexpo.com
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10,marginBottom:30 }}>
            <TouchableOpacity
              style={{ flexDirection: "row", marginRight: 10 }}
              onPress={() => {Linking.openURL(`https://maps.apple.com/?q=Ice+Skating+Rink&ll=22.5346504,88.3644457`)}}
            >
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "#701982",
                  marginLeft: 53
                }}
                source={require("../image/addressicon.png")}
              />
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 24,
                  marginRight: 25,
                  color:"black"
                }}
              >
                AD-99, Kashish House, Salt Lake City, Kolkata - 700064
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ paddingLeft: 10 }}>
            Mr. Kamal Pugalia, the creative man behind the KFE has ensured that
            if you are truly committed towards something then you can actually
            make the difference in the long run. The indispensable culture of
            ethnic wear has ruled our country for many years and we have
            conceptualized the biggest fashion bandwagon on the similar concept
            where people get to notice the ever- changing fashion industry. A
            Global Dialogue About The Indispensable Culture Of Promoting,
            Encouraging And Sustaining Indian Ethnic Wear. Big Or Small, Our
            Event Shall Encompass Everybody Involved In Our Industry. We Are
            Grateful To Mr. Kamal Pugalia, Creative Curator Behind KFE For
            Instilling The Conviction In Us – That Together We Can Make a
            Difference. Mr. Kamal Pugalia, the creative man behind the KFE has
            ensured that if you are truly committed towards something then you
            can actually make the difference in the long run.
          </Text>
          
          <View style={styles.container}>
         <MapView
              style={styles.map}
              initialRegion={{
                latitude: 22.595577,
                longitude: 88.470163,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
              }}
              onPress={() => {Linking.openURL(`https://maps.apple.com/?q=Ice+Skating+Rink&ll=22.5346504,88.3644457`)}}
            
            >
                
            
              <Marker
                coordinate={{ latitude: 22.595577, longitude: 88.470163 }}
                title="Kolkata Fashion Expo"
                description=" AD - 99, Kashish House, Sector I, Salt Lake City, Kolkata - 700064"
                onPress={() => {Linking.openURL(`https://maps.apple.com/?q=Ice+Skating+Rink&ll=22.5346504,88.3644457`)}}
            
              />
             
            </MapView>
        
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    //paddingBottom: 0
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 1350,
    left: 5,
    right: 5,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
