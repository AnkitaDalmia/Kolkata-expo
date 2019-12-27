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
  Button,
  Modal,
  Image,
  Linking
} from "react-native";
import { Dialog } from 'react-native-simple-dialogs';
import {
  createDrawerNavigator,
  DrawerItems,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import INTEL from "./INTEL";
//import console = require("console");

//import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//import { Ionicons } from '@expo/vector-icons';
//import Icon from 'react-native-vector-icons/FontAwesome'
//import RNPickerSelect from 'react-native-picker-select';

export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: "Clothes",
      pickerDisplayed:false,
      dialogVisible:true
    };
  }
  setPickerValue(newValue){
    this.setState({pickerValue:newValue})
    this.togglePicker();
  }

  togglePicker(){
    this.setState({
      pickerDisplayed:!this.state.pickerDisplayed
    })
  }


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
                <Text style={styles.buttonText}>NOKIA                                                              401</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('apple2')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>APPLE                                                               402</Text>
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
                <Text style={styles.buttonText}>TCL                                                                    403</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SAMSUNG')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>SAMSUNG                                                        404</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('LG')}
              // underlayColor="white"
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>LG                                                                      405</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ZTE')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>ZTE                                                                  406</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SONY')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>SONY                                                                407</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('HUAWEI')}
              
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>HUAWEI                                                           408</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('TCL2')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TCL                                                                   409</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('Lenovo2')}
              onLongPress={this._onLongPressButton}
              // underlayColor="white"
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>LENOVO                                                         410</Text>
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
                <Text style={styles.buttonText}>PUMA                                                                 501</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('NIKE')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>NIKE                                                                   502</Text>
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
                <Text style={styles.buttonText}>BATA                                                                  503</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('REEBOK')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>REEBOK                                                             504</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('VANS')}
              onLongPress={this._onLongPressButton}
              // underlayColor="white"
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>VANS                                                                 505</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ADIDAS')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>ADIDAS                                                           506</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('REDTAPE')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>RED TAPE                                                       507</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('LEECOOPER')}
              
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>LEE COOPER                                                 508</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('FILA')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>FILA                                                                   509</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('WOODLAND')}
              
              // underlayColor="white"
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>WOODLAND                                                   510</Text>
              </View>
            </TouchableOpacity>
          </View>
          );
    }
  }
   
  render() {
   const pickerValues=[
     {
       title:'Clothes',
       value:'Clothes'
     },
     {
       title:'Computer',
       value:'Computer'
     },
     {
       title:'Mobiles', 
       value:'Mobiles'
     },
    {
      title:"Shoes",
      value:"Shoes"
    }
   ]
    return( 
    <View>
     
        <Dialog
    visible={this.state.dialogVisible}
   
    
    onTouchOutside={() => this.setState({dialogVisible: false})}
   
   >
    <View>
  
       
          <TouchableOpacity onPress= {()=>{this.setState({dialogVisible:false})}}>
          <Image source={{uri:'https://img.icons8.com/material-rounded/2x/close-window.png'}} style={{width:25,height:25,marginLeft:238}}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {Linking.openURL('https://aws.amazon.com/');
        this.setState({dialogVisible: false})}}>
        <Image source={{uri:'data:image/png;base64,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'}} 
          style={{height:300,width:260,marginRight:400,}}></Image> 
        </TouchableOpacity>
    
    </View>
    </Dialog>
       
        <TouchableOpacity  onPress={()=>this.togglePicker()}>
        <View style={styles.buttonHeader4}>
      <Text style={styles.buttonText3}>                            {this.state.pickerValue} </Text>
      <Image   style={{
              width: 20,
              height: 20,
              marginTop:23,
              backgroundColor:'#ccccccff',
              marginLeft:70
            
            }} source={require("../image/dd.png")} />
      </View>
    </TouchableOpacity>
       <Modal visible={this.state.pickerDisplayed} animationType={'slide'}  transparent={true} onRequestClose={()=>console.log('close was requested')}>
        
         <View style={{marginTop:10,backgroundColor:'#efefef',
        bottom:0,
        left:0,
        right:0,
        top:50,
        alignItems:"center",
        position:"absolute" }}> 
       <View style={{paddingTop:10}}>
      <Text style={styles.New}>SELECT A CATEGORY </Text>
      </View>
   {pickerValues.map((value,index)=>{
      return <TouchableOpacity key={index} onPress={()=>this.setPickerValue(value.value)}  style={{paddingTop:4,paddingBottom:4,alignItems:"center"}}>
        <View style={styles.buttonHeader3}>
      <Text style={styles.buttonText3}>{value.title} </Text>
      </View>
    </TouchableOpacity>
   })}
  
  
        <TouchableOpacity onPress={()=>this.togglePicker()}  style={{paddingTop:4,paddingBottom:4 }}>
          <Text style={{color:'#999',fontSize:18}}>Cancel </Text>
        </TouchableOpacity>
         </View>
       
       </Modal>
        <View style={styles.container2}>
          <View style={styles.buttonHeader}>
            <Text style={styles.buttonText2}>      BRAND                                                   STALL  NO.</Text>
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
    backgroundColor: "white",
  
  },
  buttonHeader3:{
    //marginBottom: 10,
        width: 360,
        backgroundColor: "#7d7d7d68",
      
      },
      buttonHeader4:{
        //marginBottom: 10,
            width: 360,
            backgroundColor: "#7d7d7d68",
            flexDirection:"row"
          
          },
         
  button: {
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#ddd',
    //borderBottomWidth: 0,
    shadowColor: '#f3f3f3ff',
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 15,
    backgroundColor:'#e4e4e4ff'
  
  },
  buttonText: {
    padding: 20,
    color: "black",
    fontSize: 15
  },
  buttonText2: {
    padding: 10,
    color:'#a1a1a1ff',
    //color: "#e4e4e4ff",
    fontSize: 15
  },
  buttonText3: {
    padding: 20,
    color: "black",
    fontSize: 18,
    alignItems:"center",
    justifyContent:"center"
    //alignText:"center"
  },
 New: {   fontWeight:"bold",marginBottom:10,fontSize:18},
 buttonText4: {
  paddingTop:4 ,
  paddingBottom:4,
  color: "black",
  fontSize: 15,
  alignItems:"center",
  justifyContent:"center"
  //alignText:"center"
},
});
