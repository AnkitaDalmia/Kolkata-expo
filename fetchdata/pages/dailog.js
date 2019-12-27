import Dialog, { DialogContent } from 'react-native-popup-dialog';
import React, { Component } from 'react';
import {Button} from 'react-native';
 
export default class Ads extends Component
{
constructor()
{
  super()
  this.state={
    visible:true
  }
}
render()
{

return(
<View >
 
 
  <Dialog
    visible={this.state.visible}
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
    />
  <Text>hfhugfujgf</Text>
</View>
)
  }
}