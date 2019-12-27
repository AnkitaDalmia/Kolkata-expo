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
import { Dialog } from 'react-native-simple-dialogs';

export default class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
          dialogVisible:true
        };
      }
      backButtonFun22(){
        setTimeout(() => {
            this.props.navigation.navigate('First')  ;
            }, 2000);
        
       }

  

    render() {
        
      return (
          <View style={styles.container}>
      <Dialog
    visible={this.state.dialogVisible}
   
    
    onTouchOutside={() => this.setState({dialogVisible: true})}
   
   >
    <View>
  
       
          <Text style={{fontSize:18,color:'black'}}>YOUR ENQUIRY HAS BEEN SENT SUCCESSFULLY</Text>
        
        <Image source={{uri:'https://img.icons8.com/flat_round/2x/checkmark.png'}} style={{height:40,width:40,marginLeft:110}}></Image> 
      
    
    </View>
    </Dialog>
    <Image source={{uri:'https://lh3.googleusercontent.com/g6PACJP3SwByCbTM26LS74S7VAH2Ew25dVPcWYoTprb2ll7jZVP0bCoFFLwSKqXWwY8i3kWcUHCF15sJ16ZJELfJjqkYhYUgigAADvNy'}} style={styles.container}></Image>
    {this.backButtonFun22()}
    </View>
    
        );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // remove width and height to override fixed static size
      width: null,
      height: null,
    }
  });