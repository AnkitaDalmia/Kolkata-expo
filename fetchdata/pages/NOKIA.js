import React, { Component } from 'react';
import {Image, Text, View,TouchableOpacity,StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


 
export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{paddingBottom:120}}>
        <ScrollView>
         <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACMCAMAAADvAVSuAAAAM1BMVEUSQZH///9Nca2JoMjE0OQhTZjx9PkwWZ8/ZaanuNbT3Otribri6PKYrM+2xN1cfbR6lMGlKxnUAAADsUlEQVR4nO2Z67KyOgxAuVhBRd3v/7RH5ZKkCRu/YWtnzqz1T7m0WbRpKFUFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8H26pmkureXy+K8r3bFPUVsu2eFmPtBOv0/Heo3jrRlPaud/DuZe6axOvuu2m7xXg7pr+kDU/0QeZ9ZbqyidVv1MTl7xxIp6ZejYm7ZzRT/6nu3HYn8TNxTsfLGKbhuG6vr8PC1U1Kvhd+5s25miZEbqsfQM9kGagW0UXTYNjedFiu4q7FvK2s4UteaO9emzBjbxQZoeGUVnf7JjqEJF2u7VtW0Vdfk9Xar6LkGUP+qwUfSGobruIkVqXBwvvm3rwE1nm/W/ThTlXQ5rRU10rqMJFKksPybqrG2jKGjmXpVk7sWgcoUKI1R08glU1jqvKKlhYTJdrOiwnLscHz4T+5ss0eiHJ4GEisIlZlWRLodOKbrEKJKs1cjgK7rwSzS6GLnNh0NFv94oV6TLoTa+RCtKg1wsebto/aii0XXhHMxuRaocOuYpJVIkif0xVq/Lj2tVDv3A8xeEar8iVQ4N/dolSpFUjSfzK57c30ErSj5l71SkyqGznyuBomUkjzW1jKmCC7/pQi8R1cMrpH2K9IuEG0ORIunAONMlMxWsH+1T0kXw65+do0gXRPkmQqRoWfDn/CwdOv956O9iFZmU/UyRe3ORJNxg5XaKpPBYKnwZRl7xl8gUyXMcO7V7RdPj8pTiSxZFiw+pFcVasYU/V5T0blb/B3WRdpSl7FyRVGbDYUGuLlU/5orMvs4x7Vdkb9hHl0yK0vqG5kihhd8pso/9DxRZR5fgkklRtk3kKbRx5BWZFLtUk1rRT3Cf5WDwpt/pmlRNF6vIbRN5yiz8gaJw/9Vshhw8Ogy3GWI29iVp29C3d30L1Y9R6ynYXnwoStsxrCgy+yGStI2it3ajiiz84QPqfeJ8zo/B/RtQxXvXuuCak7ZRJI/lmn2kawtvHIWKqnuoaDOf1mNKDb+A6Aw3JW2tSBYJP5tUliqx8K90zNl49m1zVZ7ePuPvaOb7Savbfij6/WVMhmCJ+nHt2eUfFV8xBRMwM/SaQitfY42jZ9JWVuSR3CqPGkYFFv41RXnKnt68f/8cO21qryiyhh9JWxR1GxtDalB/v35sJtxeRWoM3fJ3ew3W/MPh2t7nSdCt3bTTd+yXtpvUNWuXuM6U/jYLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wf+A3P+F/BW8G34AAAAAElFTkSuQmCC'}}style={{ height:100,width:250,marginTop:10,marginLeft:55}}></Image>
        <View style={styles.enclosure}>
      <Text style={styles.container}>STORE ID-401</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>The company has operated in various industries over the past 150 years. It was founded as a pulp mill and had long been associated with rubber and cables, but since the 1990s has focused on large-scale telecommunications infrastructures, technology development, and licensing.Nokia is a major contributor to the mobile telephony industry, having assisted in the development of the GSM, 3G and LTE standards (and currently in 5G), and was once the largest worldwide vendor of mobile phones and smartphones.</Text>      
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