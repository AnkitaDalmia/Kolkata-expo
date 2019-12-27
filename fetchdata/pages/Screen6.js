import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  Picker,
  ScrollView,
  Button
} from "react-native";
import {
  createDrawerNavigator,
  DrawerItems,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import INTEL from "./INTEL";

//import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//import { Ionicons } from '@expo/vector-icons';
//import Icon from 'react-native-vector-icons/FontAwesome'
//import RNPickerSelect from 'react-native-picker-select';

export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: ""
    };
  }
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }
 // _navi=()=>this.props.navigation.navigate('INTEL');


  renderComp() {
    if (this.state.pickerValue == "Computer") {
        return(
        <View style={styles.container}>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('INTEL')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>INTEL                                                                301</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('APPLE')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>APPLE                                                             302</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('IBM')}
          background={
            Platform.OS === "android"
              ? TouchableNativeFeedback.SelectableBackground()
              : ""
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>IBM                                                                    303</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AMAZON')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>AMAZON                                                         304</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('HP')}
          
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>HP                                                                      305</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('GOOGLE')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>GOOGLE                                                           306</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MICROSOFT')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>MICROSOFT                                                   307</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('DANAHER')}
          
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>DANAHER                                                         308</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=>this.props.navigation.navigate('EBAY')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>EBAY                                                                  309</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('LENOVO')}
          // underlayColor="white"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>LENOVO                                                          310</Text>
          </View>
        </TouchableOpacity>
      </View>
      );
    }

  }
  renderClothes() {
    if (this.state.pickerValue == "Clothes") {
      return (
        <View style={styles.container}>
           
          <TouchableOpacity onPress ={()=>this.props.navigation.navigate('ZARA')} >
            <View style={styles.button}>
              <Text style={styles.buttonText}>ZARA                                                                 201</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('MANGO')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>MANGO                                                             202</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('AND')}
            background={
              Platform.OS === "android"
                ? TouchableNativeFeedback.SelectableBackground()
                : ""
            }
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>AND                                                                    203</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('VERSACE')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>VERSACE                                                          204</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('FOREVERNEW')}
            // underlayColor="white"
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>FOREVERNEW                                                205</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ONLY')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ONLY                                                                  206</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('FOREVER21')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>FOREVER21                                                      207</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('ALLENSOLLY')}
            
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>ALLENSOLLY                                                   208</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('BENETTON')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>BENETTON                                                     209</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('VEROMODA')}
            // underlayColor="white"
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>VEROMODA                                                     210</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  renderMobiles() {
    if (this.state.pickerValue == "Mobiles") {
        return(
            <View style={styles.container}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('NOKIA')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>NOKIA                                                              301</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('APPLE')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>APPLE                                                               302</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('TCL')}
              background={
                Platform.OS === "android"
                  ? TouchableNativeFeedback.SelectableBackground()
                  : ""
              }
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>TCL                                                                    303</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SAMSUNG')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>SAMSUNG                                                        304</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('LG')}
              // underlayColor="white"
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>LG                                                                      305</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ZTE')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>ZTE                                                                   306</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SONY')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>SONY                                                                307</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('HUAWEI')}
              
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>HUAWEI                                                           308</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('TCL')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TCL                                                                   309</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('LENOVO')}
              onLongPress={this._onLongPressButton}
              // underlayColor="white"
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>LENOVO                                                         310</Text>
              </View>
            </TouchableOpacity>
          </View>
          );
    }
  }
  renderShoes() {
    if (this.state.pickerValue == "Shoes") {
        return(
            <View style={styles.container}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('PUMA')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>PUMA                                                                 301</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('NIKE')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>NIKE                                                                   302</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('BATA')}
              background={
                Platform.OS === "android"
                  ? TouchableNativeFeedback.SelectableBackground()
                  : ""
              }
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>BATA                                                                  303</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('REEBOK')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>REEBOK                                                             304</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('VANS')}
              onLongPress={this._onLongPressButton}
              // underlayColor="white"
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>VANS                                                                 305</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ADIDAS')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>ADIDAS                                                           306</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('REDTAPE')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>RED TAPE                                                       307</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('LEECOOPER')}
              
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>LEE COOPER                                                 308</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('FILA')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>FILA                                                                   309</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('WOODLAND')}
              
              // underlayColor="white"
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>WOODLAND                                                   310</Text>
              </View>
            </TouchableOpacity>
          </View>
          );
    }
  }
  
  render() {
   
    return( 
    <View>
            
        <Picker
          style={styles.dropdown}
          selectedValue={this.state.pickerValue}
          onValueChange={(
            itemValue,
            itemIndex //if the value changes pickervalue will be set to the values selected by the user.
          ) => this.setState({ pickerValue: itemValue })}
        >
          <Picker.Item label="       SELECT A CATEGORY     " value="" />
          <Picker.Item label="Clothes" value="Clothes" />
          <Picker.Item label="Computer" value="Computer" />
          <Picker.Item label="Mobiles" value="Mobiles" />
          
          <Picker.Item label="Shoes" value="Shoes" />
          
          

        </Picker>
        <View style={styles.container2}>
          <View style={styles.buttonHeader}>
            <Text style={styles.buttonText2}>    BRAND                                                 STALL  NO.</Text>
            </View>
            </View>
        <ScrollView>
     

      {this.renderComp()}
      {this.renderShoes()}

      {this.renderMobiles()}
      {this.renderClothes()}
      </ScrollView>
      </View>
   
  );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    //paddingTop: 20,
    alignItems: "center"
    //marginTop: 50,
    //justifyContent: "center"
  },
  container: {
    paddingTop: 15,
    alignItems: "center",
    paddingBottom:140
  },
  container2: {
   // paddingTop: 15,
    alignItems: "center",
    //paddingBottom:10
  },
  dropdown: {
    color: "white",
    tintColor: "#674ea7ff",
   backgroundColor: "purple",
    width: "100%",
    fontSize: 22,
    borderColor: "purple",
    paddingTop: 15,
    //height:300
  },
  buttonHeader:{
//marginBottom: 10,
    width: 360,
    backgroundColor: "#7d7d7d68",
  },
  button: {
    marginBottom: 10,
    width: 340,
    // alignItems: "center",
    //backgroundColor: "#2196F3",
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#701982ff"
    // shadowColor: "#f3f3f3ff",
    //elevation: 40,
    //shadowRadius: 40
  },
  buttonText: {
    padding: 20,
    color: "black",
    fontSize: 15
  },
  buttonText2: {
    padding: 20,
    color: "black",
    fontSize: 15
  },
 
});
