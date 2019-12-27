import React, { Component } from 'react';
import {Image, Text, View,TouchableOpacity,StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


 
export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{paddingBottom:120}}>
        <ScrollView>
         <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///9TU1NMTExRUVH5+fny8vJISEi3t7eEhISenp7d3d3s7Ozj4+Nzc3Orq6vNzc3GxsZiYmJcXFxlZWV7e3uLi4uSkpJra2tDQ0Nubm7W1ta2trbu7u6wsLCdnZ2/v7+Hh4c9PT051ATXAAAEmklEQVR4nO3aa7OiOBAGYIRwl4uICCjg/P8/udxygTQea6om7uy+z4dTp+g2oQVJCFgWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAZ+cOnPHJmWRkdmwxDy5RWIj3zke96+iTnTyg9m+KVrmVVNRmbOKdL0MkafSLz8tz2FOo9eaWJCp0TxQmmCm0ytmbYdiFqHDwiY9h0dL7rPTkmKqyahNJUY4UpHZPuobu0kt+JJsJNRy2VUhmo8HwgHmPxUVBaK3SPmpA+SIHfw1xGcadfGBnRLM0ch3hHP2b8IWlFS8fOhz78QDu20pKZvXI17aiMvjNQYWk7FHseLTwytsuspu+ipkK1vJo+C6ofO/l2hXRs59JOowXZSCO68Q96MVBheCO9prO0Cz5RZuPsp6RD4neW0p/tDVT47gLC3I+w40zRzdFnDVT4v+E+Of1rJWNuzDfG8orJxEYeW0/T5y4Qmz941fW+uFbaGJVervcxPP55yTnIo7iuLonY3Vxs5LHHvP183W+/mShqI+DTYifQKgxtMVGWFXZiVu7ICrUJuBPMB7jTtxupShXwHbYD7QQSFdpqhWKn7Zv4TohbjGjaftnfVtjmKxzCdBEO2jHMRcyX1bep0IqNUaqZKwy1zcO+E4AfnaP1ji06azE3fkvJZET4SW41P1qUtbeoS63z/pd37Fep/G4HnlmfirXBumBpvfxf21fZi8niZh+NFgSnUI9hLjKbqlj/KzrRdlnJXgzWtvhotCAKvLZqphgtnLuf8GoKXqv9qGQv5kpbtRkXabEoP7ZdaInF9sxttdyByW2t1gvATwY52yDmNMeyTaac0zxiK9ul+szKvzinCfiSu6dfaXp64X9WbHZ1EIv7l9aKtiv9Xmixl+jl7xkt1qn1So4W4zWWNZu8IrPY7YujRfnuGB4/oBnzE3XEV4+hldabvPi7xxDg368vuVC70nQJj1Vy0WkQK6SlvJxmIvM1XYDOt2CTxFLRi4mF0q1389KeXsUQC9cv8Z3kYl66zFcTsWheTzdl7CZbMlHUhlKhdgz7H1aiGrnWtquwk5+cV5i/WaF4FNz0+mqiiClnqc+XH+93eUeZ8ee8TTAPk+6Fr1HOZzILG5MPf+E/4+iZynSu/rBAo6y56K2szT+XFHbQmYlnwK8LqbiN+xgWdHDrlI9jxz4zWaarrJ8CRbIsb7Fqn2ZievrufZr+7ZSbu4/FDPtMvrqRq/NsOfMWl1gTFf7eO1FKZs/UKbcy856cm7F9/rRbzrzFdNxAhb6+EC9uhNvD19rUN9ymM1Bbzu/4yJlNr6/xn2G+T/MNVAh/P7mMuDW9XBkdxBTryRhrATHPOWfyPU2tQROLikFBe03X0tNBkDtVayHDPrMR+x55Kf+XVfu0b799+X60sItSXCgOR4uxrEasx31ntEhq7WGLeEBT0bGJUyShPBMtf/fwpi7k+ZeLp1ks2DVYmxgtzhFt2q34IDbHN+v5rhaX8zH2pjP9UR4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfMc/H8qD2/wqUiYAAAAASUVORK5CYII='}}style={{ height:100,width:250,marginTop:10,marginLeft:55}}></Image>
        <View style={styles.enclosure}>
      <Text style={styles.container}>STORE ID-303</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>IBM’s greatest invention is the IBMer. We believe that progress is made through progressive thinking, progressive leadership, progressive policy and progressive action. For that reason, we manage the brand to be highly esteemed and valued by forward-thinking clients, employees, communities, investors and the general public worldwide.</Text>      
      </ScrollView>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity  onPress={() => Linking.openURL("https://drive.google.com/file/d/1iBTUvou6yluFTCGfV8Fvg5rBck_rtiaU/view?usp=sharing")}>
        <Image source={{uri:'https://lh5.googleusercontent.com/0ywChJXZWBtH69WyowQjDbMOeHuLbKSf0jt3jwevqwThNws8JVFHV7N8AK1BOc7L-wMsYEMsfpLRlYGOLCshWII-U1Dbs8bkECJBb7s'}}style={{height:60,width:50,marginTop:20,marginLeft:80}}></Image>
       </TouchableOpacity>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('Contact')}>
        <Image source={{uri:'https://lh6.googleusercontent.com/XGv7BPNhRekKxLs9Lr8oaSc8-QFvtuGkMyV7k76tZ2tBZMLGnzVSQti1YIWwCcT27n4am4QWBQacAJb5_ibv6qnImioJQ_0M0vNHa4ryZcdpItxbOsR3V3Fvo9eoEK_lTAPfmVpaRxY'}}style={{height:70,width:50,marginTop:15,marginLeft:90,paddingBottom:10}}></Image>
        </TouchableOpacity>
        

        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:20,fontWeight:'bold',height:50,width:90,marginLeft:60}}>CATALOG</Text>
        <Text style={{fontSize:20,fontWeight:'bold',height:40,width:100,marginLeft:55}}>CONTACT</Text>
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  enclosure:{
    marginTop:20,
    marginLeft:30,
    marginRight:40,
    borderRadius: 10,
    borderWidth:2,
    borderColor:'#701982ff',

  },
  container: {
    marginTop:10,
    marginLeft:70,
    fontStyle:'italic',
    fontSize:22,
    alignItems:'center',
    justifyContent:'center',
    height:40,
    width:150,
    
  },})