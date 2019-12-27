<Dialog
    visible={this.state.dialogVisible}
   
    
    onTouchOutside={() => this.setState({dialogVisible: true})}
   
   >
    <View>
  
       
          <Text>YOUR ENQUIRY HAS BEEN SENT SUCCESSFULLY</Text>
        
        <Image source={{uri:'https://img.icons8.com/flat_round/2x/checkmark.png'}} style={{height:30,width:60,marginRight:400,}}></Image> 
        {this.backButtonFun22()}
    
    </View>
    </Dialog>

