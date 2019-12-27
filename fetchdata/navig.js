//This is an example code for NavigationDrawer//
import React, { Component } from "react";
//import react in our code.
import {
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  StyleSheet
} from "react-native";
import SplashScreen from 'react-native-splash-screen'
// import all basic components
//For React Navigation 2.+ import following
//import {DrawerNavigator, StackNavigator} from 'react-navigation';
//For React Navigation 3.+ import following
import {
  createDrawerNavigator,
  DrawerItems,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Container, Content, Header, Body } from 'native-base'

import Screen1 from "./pages/Screen1";
import Screen2 from "./pages/Screen2";
import Screen3 from "./pages/Screen3";
import Screen4 from "./pages/Screen4";
import Screen5 from "./pages/Screen6";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day4 from "./pages/Day4";
import INTEL from "./pages/INTEL";
import APPLE from "./pages/APPLE";
import IBM from "./pages/IBM";
import AMAZON from "./pages/AMAZON";
import HP from "./pages/HP";
import GOOGLE from "./pages/GOOGLE";
import MICROSOFT from "./pages/MICROSOFT";
import DANAHER from "./pages/DANAHER";
import EBAY from "./pages/EBAY";
import LENOVO from "./pages/LENOVO";
import ZARA from "./pages/ZARA";
import MANGO from "./pages/MANGO";
import AND from "./pages/AND";
import VERSACE from "./pages/VERSACE";
import FOREVERNEW from "./pages/FOREVERNEW";
import ONLY from "./pages/ONLY";
import FOREVER21 from "./pages/FOREVER21";
import ALLENSOLLY from "./pages/ALLENSOLLY";
import BENETTON from "./pages/BENETTON";
import VEROMODA from "./pages/VEROMODA";
import NOKIA from "./pages/NOKIA";
import TCL from "./pages/TCL";
import SAMSUNG from "./pages/SAMSUNG";
import LG from "./pages/LG";
import ZTE from "./pages/ZTE";
import SONY from "./pages/SONY";
import HUAWEI from "./pages/HUAWEI";
import PUMA from "./pages/PUMA";
import NIKE from "./pages/NIKE";
import BATA from "./pages/BATA";
import REEBOK from "./pages/REEBOK";
import VANS from "./pages/VANS";
import ADIDAS from "./pages/ADIDAS";
import REDTAPE from "./pages/REDTAPE";
import LEECOOPER from "./pages/LEECOOPER";
import FILA from "./pages/FILA";
import WOODLAND from "./pages/WOODLAND";
import TCL2 from "./pages/TCL2";
import apple2 from "./pages/apple2";
import Lenovo2 from "./pages/Lenovo2";
import Contact from "./pages/Contact";
import ENQUIRY from "./pages/Enquiry";

//global.currentScreenIndex = 0;

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <StatusBar backgroundColor="#b4a7d6" barStyle="light-content" />
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require("./image/drawer.png")}
            style={{
              width: 25,
              height: 25,
              marginLeft: 5,
              //backgroundColor: "#ffffff",
              tintColor: "#ffffff"
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 200, backgroundColor: '#b4a7d6ff', }}>
      <Body>
        <Image style={Styles.drawerImage} source={require("./image/expoapp.png")} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)
//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: "               STALLS",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })

  },
  INTEL: {
    screen: INTEL,
    navigationOptions: ({ navigation }) => ({
      title: "                 INTEL",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  APPLE: {
    screen: APPLE,
    navigationOptions: ({ navigation }) => ({
      title: "               APPLE",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  IBM: {
    screen: IBM,
    navigationOptions: ({ navigation }) => ({
      title: "                  IBM",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  AMAZON: {
    screen: AMAZON,
    navigationOptions: ({ navigation }) => ({
      title: "              AMAZON",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  HP: {
    screen: HP,
    navigationOptions: ({ navigation }) => ({
      title: "                    HP",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  GOOGLE: {
    screen: GOOGLE,
    navigationOptions: ({ navigation }) => ({
      title: "               GOOGLE",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  MICROSOFT: {
    screen: MICROSOFT,
    navigationOptions: ({ navigation }) => ({
      title: "             MICROSOFT",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  DANAHER: {
    screen: DANAHER,
    navigationOptions: ({ navigation }) => ({
      title: "             DANAHER",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  EBAY: {
    screen: EBAY,
    navigationOptions: ({ navigation }) => ({
      title: "                 EBAY",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  LENOVO: {
    screen: LENOVO,
    navigationOptions: ({ navigation }) => ({
      title: "               LENOVO",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  ZARA: {
    screen: ZARA,
    navigationOptions: ({ navigation }) => ({
      title: "                ZARA",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  MANGO: {
    screen: MANGO,
    navigationOptions: ({ navigation }) => ({
      title: "             MANGO",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  AND: {
    screen: AND,
    navigationOptions: ({ navigation }) => ({
      title: "                  AND",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  VERSACE: {
    screen: VERSACE,
    navigationOptions: ({ navigation }) => ({
      title: "             VERSACE",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  FOREVERNEW: {
    screen: FOREVERNEW,
    navigationOptions: ({ navigation }) => ({
      title: "         FOREVER NEW",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  ONLY: {
    screen: ONLY,
    navigationOptions: ({ navigation }) => ({
      title: "                 ONLY",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  FOREVER21: {
    screen: FOREVER21,
    navigationOptions: ({ navigation }) => ({
      title: "            FOREVER 21",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  ALLENSOLLY: {
    screen: ALLENSOLLY,
    navigationOptions: ({ navigation }) => ({
      title: "          ALLEN SOLLY",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  BENETTON: {
    screen: BENETTON,
    navigationOptions: ({ navigation }) => ({
      title: "             BENETTON",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  VEROMODA: {
    screen: VEROMODA,
    navigationOptions: ({ navigation }) => ({
      title: "            VEROMODA",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  NOKIA: {
    screen: NOKIA,
    navigationOptions: ({ navigation }) => ({
      title: "                NOKIA",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  TCL: {
    screen: TCL,
    navigationOptions: ({ navigation }) => ({
      title: "                 TCL",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  SAMSUNG: {
    screen: SAMSUNG,
    navigationOptions: ({ navigation }) => ({
      title: "             SAMSUNG",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  LG: {
    screen: LG,
    navigationOptions: ({ navigation }) => ({
      title: "                  LG",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  ZTE: {
    screen: ZTE,
    navigationOptions: ({ navigation }) => ({
      title: "                  ZTE",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  SONY: {
    screen: SONY,
    navigationOptions: ({ navigation }) => ({
      title: "                SONY",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  HUAWEI: {
    screen: HUAWEI,
    navigationOptions: ({ navigation }) => ({
      title: "              HUAWEI",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  PUMA: {
    screen: PUMA,
    navigationOptions: ({ navigation }) => ({
      title: "                PUMA",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  NIKE: {
    screen: NIKE,
    navigationOptions: ({ navigation }) => ({
      title: "                NIKE",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  BATA: {
    screen: BATA,
    navigationOptions: ({ navigation }) => ({
      title: "                 BATA",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  REEBOK: {
    screen: REEBOK,
    navigationOptions: ({ navigation }) => ({
      title: "             REEBOK",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  VANS: {
    screen: VANS,
    navigationOptions: ({ navigation }) => ({
      title: "                VANS",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  ADIDAS: {
    screen: ADIDAS,
    navigationOptions: ({ navigation }) => ({
      title: "                ADIDAS",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  REDTAPE: {
    screen: REDTAPE,
    navigationOptions: ({ navigation }) => ({
      title: "             REDTAPE",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  LEECOOPER: {
    screen: LEECOOPER,
    navigationOptions: ({ navigation }) => ({
      title: "            LEE COOPER",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  FILA: {
    screen: FILA,
    navigationOptions: ({ navigation }) => ({
      title: "                 FILA",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  WOODLAND: {
    screen: WOODLAND,
    navigationOptions: ({ navigation }) => ({
      title: "             WOODLAND",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  Lenovo2: {
    screen: Lenovo2,
    navigationOptions: ({ navigation }) => ({
      title: "             LENOVO",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  apple2: {
    screen: apple2,
    navigationOptions: ({ navigation }) => ({
      title: "                APPLE",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  TCL2: {
    screen: TCL2,
    navigationOptions: ({ navigation }) => ({
      title: "                 TCL",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  Contact: {
    screen: Contact,
    navigationOptions: ({ navigation }) => ({
      title: "             CONTACT",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  ENQUIRY: {
    screen: ENQUIRY,
    navigationOptions: ({ navigation }) => ({
      title: "              ENQUIRY",

      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second:
  {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: "             ITINERARY",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  },
  Fifth:
  {
    screen: Day1,
  },
  Sixth:
  {
    screen: Day2
  },
  Seventh:
  {
    screen: Day3
  },
  Eigth:
  {
    screen: Day4
  }
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: "                ABOUT",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  }
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Fourth: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: "            SPONSORS",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  }
});
const Screen5_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Ninth: {
    screen: Screen5,
    navigationOptions: ({ navigation }) => ({
      title: "          SELECT",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#351c75ff"
      },
      headerTintColor: "#fff"
    })
  }
});


//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({
//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    /* Screen0: {
      navigationOptions: {
        drawerLable: <Logo />
      }
    },*/
    Screen1: {
      //Title
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "                          STALLS"
      }
    },
    Screen2: {
      //Title
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: "                       ITINERARY"
      }
    },
    Screen3: {
      //Title
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: "                          ABOUT"
      }
    },

    Screen4: {
      //Title
      screen: Screen4_StackNavigator,
      navigationOptions: {
        drawerLabel: "                        SPONSORS"
      }
    },

    Screen5: {
      //Title
      screen: Screen5_StackNavigator,
      navigationOptions: {
        drawerLabel: "                           SELECT"
      }
    }
  },
  {
    initialRouteName: "Screen1",
    contentComponent: CustomDrawerContentComponent,
    drawerToggleRoute: 'DrawerToggle',
    drawerBackgroundColor: "#9400D3",
    contentOptions: {
      activeTintColor: "#351c75",
      inactiveTintColor: "black",
    }
  },

);

//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(DrawerNavigatorExample);
Styles = StyleSheet.create({
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginLeft: 52
    //borderColor:"white",
    //borderWidth:3,
    //paddingVertical:30
  }
})