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
  Linking,
} from "react-native";
//import MapView from "react-native-maps";
import MapView, { Marker } from "react-native-maps";
import call from "react-native-phone-call";
import Communications from "react-native-communications";

import { createOpenLink } from 'react-native-open-maps';
 
// import all basic components
const yosemite = { latitude: 22.595577,
  longitude: 88.470163,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
  
 };
const openYosemite = createOpenLink(yosemite);
const openYosemiteZoomedOut = createOpenLink({ ...yosemite, zoom: 19 });
 

export default class Screen3 extends Component {
  constructor() {
    super();
  }
 /* _goToYosemite() {
    openMap({
      latitude: 22.595577,
      longitude: 88.470163,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121
    });
  }*/
  
 
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
          

          <Text style={{  fontSize: 18,paddingTop:30,paddingLeft:20,paddingRight:20 }}>
            KOLKATA FASHION EXPO Is Eastern India's Biggest Fashion Event which
            is aimed towards bringing together the brightest and best fashion
            minds from the country. After the grand success in the KFE
            2015(KOLKATA), KFE 2016(KOLKATA, BANGLADESH, NEPAL), KFE
            2017(KOLKATA) and 
          </Text>
          <View style={{ flexDirection: "row", marginTop: 60 }}>
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
              style={{ flexDirection: "row",  }}
              onPress={() => {Linking.openURL(`https://maps.apple.com/?q=Ice+Skating+Rink&ll=22.5346504,88.3644457`)}}
              >
            
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "#701982",
                  marginLeft: 55
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
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ENQUIRY')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>                         ENQUIRE</Text>
              </View>
              </TouchableOpacity>
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
    top: 10,
    left:10,
    right:10,
    bottom: 320,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  button: {
    marginTop: 45,
    width: 340,
    
    // alignItems: "center",
    backgroundColor: "#351c75ff",
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#351c75ff"
    // shadowColor: "#f3f3f3ff",
    //elevation: 40,
    //shadowRadius: 40
  },
  buttonText: {
    padding: 20,
    color: "white",
    fontSize: 18
  },
});
