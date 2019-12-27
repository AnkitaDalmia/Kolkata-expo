import React, { Component } from 'react';
import {Image, Text, View,TouchableOpacity,StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


 
export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{paddingBottom:120}}>
        <ScrollView>
         <Image source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDw0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ4NFREWFhURExUYHSkgGBomGxUVLTEmKikvLi8xGCszRD8sNyotNisBCgoKDg0NFQ8QFSsdFR0tLTcuKysrLy0tLSsrLS0tLy8rLS0uLy0tKysrLTctLi0tKysrLisrNysrKy0rLS0rK//AABEIAG8BxgMBEQACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EAEYQAAICAQIEAgQLAwcNAAAAAAABAgMRBBIFBhMhMVEUIkFxBzJSVGGBkZKTodIWs9EjJHOxstPwFyU0QkRVYmNlcoTB4v/EABoBAQEBAQEBAQAAAAAAAAAAAAEAAgQDBQb/xAA7EQEBAAEDAQILBgQFBQAAAAAAAQIDBBESBSETFTFBUWFxkcHR4VJTgaGx8BQiIzIzNEJj8SRUgpLS/9oADAMBAAIRAxEAPwD85PlP1YImCBIyIIgkZEwJgTImgMUgKkDRomotGWopA3FIGotIG4tIy3ItIGpFJA0aQNKRE8AlJEj2gj2khtJFtJDBJLQosEiaFJaIE0LNiGhZqWjUYqGhZqGhYqWhYqGaZqWLNSLKWLJECEETJCCYomQBAEiIAkQoEASBEwQREyQIgkpATQE0RNATRGKQNQ0DUUgrUWgaikDcWkZbi0DcWkDUUjLcUkDSkRUkCUkCWkQUokOVKBDk9hLknAlylxI8oaJpDQomiSRSWiCWhjNS0aYqGhYqGLFQzTKGLFSxZqWLKWLNSxZIgQghBMgQgEASIgCRCgQBEAjJAiZIETJGgJgTImDRoipA1FIGopBWotGWopBW4tA3GiRmtxSQNxaRlpSRNGkCWkCXFEGkYkza0jAGbWigTPJ7CXKXAjyzlEWpWcok1GbRNIaFJaJE0KS0TNQ0aZqGMYqJGmKhjGKhixUs0xUMWaTFmpYspZAMQTEEQSIBIECZIECYoEARMECQImSCImiJgTBGTRgVIipGWjRNLRluLQNRcUZbi4oK3GkUDUaRiZbWogVbQa5UoguVqBDlpGBM2vd4Dy1fr1J0W6bdB+tVZZOFkV7JY2vK+k99Hb5as/lscG77Q09tZNTHLi+eScfq9lfB7xD5Wl/Fn+g9fF+t6vf9HFe29t6MvdPmw1/Jus06g59CTsthTXCuyUpyslnCWYpex+32HnqbPVwk5477x3f8PTS7V0NW2TmcTm8zzT8XV+wGv+VpvxZ/oN+L9b1e/wCjx8dbf0Ze6fMn8H+v+VpfxZ/oHxfrer3/AEPjrb+jL3T5s5fB5xD5Wl/Fs/QXi/V9Xv8Ao1O3Nt6MvdPm+V4ho+jZKrqVWuDw50yc68+1KTSycuePTl088+x9bR1fCYTLizn0+VxygZe8rNxI8pcSXJOIrlDiIRJCzWckaYqJIYzWbFioZpipYsVDNM1LFmpYskTJCCZAmIIQRIECZIECYoEgSMECRkQSCImiJgTAwwJojFIGlIGlIGopA1FoK3GkTLUaRRmtxtFA01jEyeWsYBTytQBcrVYLlSrIctIwBm10af1ZRltjLa09s4qUH9DXkXPF5eeffLOeOfQ+94NHR6uG6rg9E5RwrIxvri4v3Sw8M+pozS1ZzNGc+2Pz25utoZcZ7myXyd1+Du0OgrWu00Y6GGklVVdqJbZwm5ppVx+L4d5P7D0w0sZr4yafTxLfh8Xhq62V2udurc5bJ5LPXf0aOjTTru1d2lhqrL9bKqmM1FyceoqYRTfgsRz9bHp07jdTLDqty4nv4nzZmerjnjo4alwxxx5vu6r+vCnwuv8A3HT+Lpx8Dj9xPyH8Rl/3V92T5PmnV6dbtNToNNp7F2tsj07Zx/4E4rCfn9nY4dznhP5MdOS+fyPr7HT1Lxq562WU8075+Pe+WnA431pWMoC3KzcCa5S4CeUuBLlnKAxcs5REMZI1GWUkMZrORpioZpmoYsVDNMUiZSzTKSBCCJkmIIQRIECJAgQoEgSMECRkQSCImBMipAQgKkRhoGopA1FIK1FxBuLRmtRpEG42ijLTaCM0uiETNXLeMAXLRQBnlagC5UoEOVxgQtaRiDNrposnB7oTlCWMboScJY8soZbLzLxXlnjMpxlOY9ThHG79Nd1t0rW4OuSsnKTcM5WG84w/8dz20dxnpZ9Xl9rk3Gz09bT6OOnv57npQ5jpemo01ulnN0KLjKGonVmyKaU8x7rxf2ntN3j4LHTywt6fXx3ua7DOa2epjnJ1ernu9Hf3PDs4hqG3/L3JNv1VdbhLyWX4HL4XO/6r7783fNDTn+ie6fJwSRh0RjOJNyspQFqVLgTXKHAVyhwE8s5xI8sJxGJjNGomEkaZrKRpms2ajFQxYqWLFSxZSzTKSBCCJkmKIRSZAECJAgRICgSMECRkQSBE0BMipAYEBUiMUgaNA1FxCtRUQbi4mW41iDUbQMl01oyX1XK3KkuIV2WxvjUq7Om1Ktzz6qec5XmdGhtbrY29XHD5m97Rm1zmNw55nPl4+D248gf9Qo/D/wDs9fF/+5Pd9XJ46/2b7/ox4ryVZpqJ6iGorvjWt01GDg9vtaeWng8tbY5aeFzmUsj12/a2OrqzTuFxtdGm5Eusrrs9JpirIQmk4yytyzg1j2dlcZeqd7zz7ZwxyuPRe5p+wF3zqj7sjXi3L7cZ8dYfd1hLkyxX1af0ipu2u2xSUZNJQcU019O/8jzuxymcw6p3y/lx83pO1cbpZanRe6ye/n5Oz9grF/tdX4cv4np4ty+3Pd9Xj46x+7vv+glyJdh7NTTOSXaO2UU35Zy8Bezc+O7ODxzhz34WRwcD5eerhZJ3woddjrcJx3PKSbfivP8AI8NDa3VlvV08Xj997p3W+8BlJMLlzOe7/h6keRpNZWsraXi1U2v7R7+LL95Pd9XJe2JLx4O+/wCjl4hyl0arbvS6p9OEp7FDDlheC9YxqbG4YXLrl49X1e2l2n4TUxw8HZzfLz9GfCOT7dXTG93RpU29kZVubcfleK8e4aGxy1cJn1cc+prcdqYaOpdPp6uPW8XjnCZ6K6VM2pdoyhNLCnF+1L35X1HhraN0s+mu3a7nHcaczx7vV6HXwDlezXwnZC2FahZsanGTbe1PPb3npt9rlrY2y8cPLd9o47bKY5Y28zl6P+T6751R92R0eLcvtxy+O9P7uuHjXJmo0lM9R1arYV4c1BSUlHOMrPieWtss9LC588yOjbdq6evqTT6bLfI65fB3f86oXvhM9fF2f257nP480/u6zl8HV3zvT/dmPi7L7cPjzD7uvluZeCS0FsaZ2Qtcqo27oJpJOUljv/2nNraN0sum3l9PZ7ubnTucnHF47/w+bw5o8462EzQYyNM1mxjFQzTFQxZSxZSxYqRBCCZMkxRMQTIAgRIECZICgSMECRkQSBE0BMipAYEBUiMUgaNA1FxCtRUQbi4mW41iDUb1maXTWZqfpvwaf6HrP6aX7lH09h/hZ+34PzXbX+Y0/Z8XPylwXhWvrScbYaiEV1a+r4r5cO3eP9X2N+G10NvrY+T+bz97o3+73m2z8suF8l4/K+v9Xp8c1uj4fpLuG1K3fKE1GM4ywo2PLnvaw13fh5YPTcamlo6WWhjzzx+vrc200tbc7jHc5ccS/p5uHTzDGh6Lhq1MnGh2afqSim5JejWeGE/bj2Gt10eB0vCf28zn3V57O6k3Ov4Kc58Xj/2jxvRuXfnN/wBy3+7OTp2H2r7r8nb19p/Yn5fN08rQ0keJY0U5WU+ize6aalv3LK7pfR7D02k0puf6X9vS899da7P+tOMuqe783h8349P1Xh8eH7uJy7yT+Iz5/fdHd2dz/C6f4/rXv/BljdrMY+Lp/D32HZ2XJLnx6vi+f235NL8fg+S18l1rv6a3+2z52pJc8vbf1fY0p/Tx9k/R9ryq/wDNWr/8r90j6u0n/S5/j+j4e/8A89p/+P6vlOAcNes1FdKWI/Htkv8AVqXi/wCpe9nzdvoeF1Jj5vP7H193r+A0rnfL5va+55hlrJOrT8Orz6PKqy1qUIRjjvXV3ayu2WvLHmfX3N1bxhozyeX4T5/V8DZzRnVqbi/3c8ef235evn0J5x4XLV6SNyrcdRRHqbMqUtrS315Xj4ez5P0lvNG6ulMuP5p+7D2buJo69w55wy7uf0v79Li+D1/zTVv/AJsv3UTy7O/ws/b8I9+2P8xp+z4189w2ngk6oS1FmqptxicEnZHPnFqD7fmcWnjtLhLlzL7/AIPpa2W/xzswmOWPp8nxenxPjnDquHT0OjnZbujKEd8JRaUpuUpNuK82dGpuNHDb3S07a5NDZ7nPeTX1pJ7L6Jx6a9XnmGklLRLWzlXp86jdKCblu2Rx4Jvx+g6d7NO9Hhbxj3uTsu60x1fAznPu/W+x81PS8s/OtR9y3+7OTp2P2r+fyfR8J2r93Py/+nyfGY6aN9q0cpT0ycelKaak/UjuzlJ/G3ew5tSYTO+D/tfV291bpY3WnGfn9/yeXYEeznmaTGRpmsmMYqWaYqGLNSxZSxjNSLJCCZMkxRMQTIAgRIECZICgSMECRkQSBEwJkVIDAgKkRhoGopA1FRCtRcQbi4ma1GkQbjeDMl0VszS+t5U5jlo6b6VTGzqzctzscHHMFHw2vPgdW33F08bjxzy+Tv8AY+H1Mc+rjj1ev2vH4fqrqbK7KZOFsGnCUfFP+ByYW42XG98d2rhM8LjnOca+r4/zJHWURhfpa+tFfyd1drUozx3aTj8V+1Z/PDOvcbiauHGWPf6Xytpss9DU6tPO9Pnlnm9/l9b0dNzhJU01y0tM1CuuKc7H4qOM4cT2x3nGMlxnc58+zbdTLKZ2W2+b6q/a+PzLTffX6S/jJ9ifv8B4tz+8y/f4uZ81fzmm6Gmpi4VX1uMJ4Utzg8tqPs2/mY/iv6kymM7pfz4evi++BywudvNn5c+v1t7eb65SbnodJKT8XKacn78xN3eY29+E5/fqYx7N1JOJqZcfv1ivnJxU+hpNNXJrxjLtn2bkorJTecc9OMlF7Mts688rP363wtl83KTl3k5NyfnJvuz5lnf3vvSWSSTufScF5inRor9N0Yy6nX9d2OLW6GPDb/7OzR1+jRuHHl5fM3OzupucdXnjjju49FLlLmBaKFuNPGyyclunK1wexLtFLa+2c/aW11ppS8Tm1b/aZ6+WPOXEnm4+rz7eNcRc7ZxuvhvslOSrslCG5+ST8sfUjyurqc2zK973m20ZjjLhLxPPHscvc16zTqxXqWpUnFx610lKDXjhtPt4dvoOjQ3WeEvV/N7a4912fp6tnROn2QuD8y+jw1katNHp33WWRj1mlWnBLavV7rt2DR3E05nMce630tbjY5auWnc8u/GTzeXv9r5JWS8jgknD6/8AN6A5t9vPsVkq7/Q+9v55csb9HRLHhvtbx9sT6t33pwnv+j4GPZPHk1LPw+rmnztD5hpfvr9Afxs+xP3+D0nZOX3uX7/F8jzPxVay5WqqFKVUa9lbzF4cnnwXf1vyOPX1fCZ9XHD62y290NPouVy7/O8ObPOOtzzNBjI0KzZqMVDFipYs1LFlLNMJIEIImSYohBMgCBEgQIkBQJGCBIyIJBETAmRMDDQE0RikDSkDUUgaikDUaIK3GkTLUawZmtNoMzWnZp7cFyzljy3ovUff5mZeBlha2lapLPtK94mNjR6hOMU+6WO31Fb3CYd9LrQ+SHd6D05ekV3pSylhYKeVXC2cVldbmTYXytY48Remv25+nBrG8DPDljKzu/ezLcjaq/EGveal7mMsOcuWdV7i8r6/cEvDWWHM4bT1D8YvGfH+I2sTCecW6p4xnx7FasdPvTTfiLXvKXiHLDmojZHHhkO43Gic44ylgu5cVNt2cZ7+I2jHHhhOxeRNcVzzkLTCbNQMZsYzWUjTLNmmKhizUs0xUkylmmUkCEETJMQQgiQIESBAiQFAkYIEjIgkERNETAmgJkTAxSAqQNKRNRSMtxaBuLiZajSLCtRrGRlttGRk8NY2AuFqwDwtWkuk+qS6S6hHpLqkukdUl0l1CPSOqS6R1CXSOoQ6R1CPA6hLpHUIdJOwlwlzFcIlMRwylIgykzQrOTNRispMWahmmKlixUM0zUkyk0yRMkIIgTEEIIkCBEgQJigSBIAjJAiZIIiaImgRgTJowJoipGWlImopA1Foy3FphWouLMtxomDUWmDa1Iy1FqRE1IDwe4FwNxHgbiXA3EuBuI8DcS4G4lwNxLgZJcDcQ4LcSJyEcE5CKlyIVEmaZrOTFis5M0zUNjGKhixUs0xUMWaTEVLFkiZIQTIEISIBIECZIECYoEARBIwQImSBEyRoCaAmRMCaJpSAxSBqKQVqKQNxaCtRUWZbi0wbi0waikzNbi0waPJE8gRkkeSIySBIEgSBIEiyQDZIsiEtkKlsYzUtmmKhsWKhsWahs0xUMWKliyliylizUsWaTIExBCCZAhAJAgTIAkQoEASCImCBEyQIgkaAmRUgIQE0RikDSkDRoisy3FIGotA1FJg3FpmW4tMGopA0pMGjIgCZIEQSBIEgSBAiQEJbIJbFkmxZqGzTNQ2LFQxYqWLFSxZqGaZqSZJmmUkCEETJCiYgmQBAEiIAkQoEH//Z'}}style={{ height:100,width:250,marginTop:10,marginLeft:55}}></Image>
        <View style={styles.enclosure}>
      <Text style={styles.container}>STORE ID-507</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>Red Tape is a brand known for its unparalleled Comfort, International Styles and Finesse. It is the brand for Hi-Fashion & Lifestyle, owing to its unmatched quality, skilled craftsmanship and trendy products. Endorsed in the past by the style icon Salman Khan, Red Tape has become India’s most Loved Premium Lifestyle Brand.

Emerging as a leader in the High-End Fashion Footwear segment, the Footwear range is designed in our in-house design studios in UK and Italy, with manufacturing them to International Standard of Quality and Materials.</Text>      
      </ScrollView>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity  onPress={() => Linking.openURL("https://drive.google.com/file/d/1iBTUvou6yluFTCGfV8Fvg5rBck_rtiaU/view?usp=sharing")}>
        <Image source={{uri:'https://lh5.googleusercontent.com/0ywChJXZWBtH69WyowQjDbMOeHuLbKSf0jt3jwevqwThNws8JVFHV7N8AK1BOc7L-wMsYEMsfpLRlYGOLCshWII-U1Dbs8bkECJBb7s'}}style={{height:60,width:50,marginTop:10,marginLeft:80}}></Image>
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