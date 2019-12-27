import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';
import {Alert , ToastAndroid} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
 

let enquiryDetails = {};

const styles = {
  wrapper: {
    justifyContent:'center',
    
    marginTop: 5,
    backgroundColor: '#ffffff',
  },
  submitButton: {
    backgroundColor:'#351c75ff',
    marginTop: 40,
    borderRadius: 20,
    borderWidth:2,
    borderColor:'#351c75ff',
    marginLeft:100,
    marginRight:100,
    paddingVertical: 10,

},
Button:{
    marginLeft:42,
    fontSize:20,
  color:'white'
}
};
// These Fields will create a login form with three fields
const fields = [
  {
    type: 'text',
    name: 'name',
    required: true,
    icon: 'person',
    label: 'Name',

  },
 
  {
    type: 'text',
    name: 'email',
    icon: 'mail',
    required: true,
    label: 'Email ID',
  },
  {
    type: 'number',
    name: 'phone',
    icon: 'call',
    required: true,
    label: 'Phone Number',
  },
  {
    type: 'text',
    name: 'requirment',
    required: true,
    label: 'Your Requirements',
  },
  
];

export default class FormGenerator extends Component {

  callEnquiryAPI(){

      const URL = 'http://13.233.85.41/api/v1/enquiry';
   
      const response = fetch(URL , {
        method: 'POST',
        headers: {
          Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryDetails),
        }) 
        .then((response) => { return  response.json() } ) 
        .catch((error) => console.warn("fetch error:", error))
        .then((response) => {
  
            if(response.error.toString() === "false")
            {
             
              ToastAndroid.showWithGravity(
                'Your enquiry data sent successfully.',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
              );

              this.backButtonFun22()
            }
              
          })
  
  
  }
  
    backButtonFun22(){
      this.props.navigation.navigate('Success')
     // this.props.navigation.navigate('First')
    }
  


  login() {
   
     enquiryDetails = this.formGenerator.getValues();
    //console.log('FORM VALUES', formValues);
    this.callEnquiryAPI()
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <GenerateForm
            ref={(c) => {
              this.formGenerator = c;
            }}
            fields={fields}
          />
        </View>
        <View style={styles.submitButton}>
        <TouchableOpacity  onPress={() => this.login()} >
            <Text style={styles.Button}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}