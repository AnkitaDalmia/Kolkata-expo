//This is an example code for NavigationDrawer//
import React, { Component } from "react";
//import react in our code.
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
//import { ScrollView } from "react-native-gesture-handler";
//import { Image } from "native-base";
// import all basic components

export default class Screen1 extends Component {
  //Screen1 Component
  render() {
    return (
      <ScrollView>
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.zara.com/in/")}
            >
              <Image
                style={{ width: 150, height: 100, margin: 10 }}
                source={{
                  uri:
                    "https://lh5.googleusercontent.com/hXZex3OB-QsyxFdJ2eA6Q-yHZ1sCD-zgsy2B4Gv8KQsHhJgsWO5HYrs1bUHSmKm1joGM92pIit9lxpFJfrJvZtyBnOaOQGexgn2ysewvCGgLxaEtpImvkxP08lLVQGkCyG_avk9vVT0"
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://shop.mango.com/in")}
            >
            <Image
              style={{
                width: 150,
                height: 100,
                margin: 10
              }}
              source={{
                uri:
                  "https://lh6.googleusercontent.com/LVGElUTB_q0ISjVbSpkKTV6uMlaUmFvLRIFnPf2awOp5vGB5SKgOTGliRZbp3O44DcmB4McB4v_B8JIp8CqSiNvyAg07oB9omzbClGZ9H0IIWZ0Rkpay-cCIAk6ReR8uUfKJM-1WzJc"
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
              onPress={() => Linking.openURL("https://www.boseindia.com/en_in/index.html?mc=28_PS_BD_BO_00_GO_&&mc=20_PS_BD_BO_00_GO_&gclid=EAIaIQobChMI-ZHNq_zr4gIV1zUrCh35ewE4EAAYASAAEgKS7fD_BwE&gclsrc=aw.ds")}
            >
            <Image
              style={{ width: 150, height: 100, margin: 10 }}
              source={{
                uri:
                  "https://lh6.googleusercontent.com/rSITs6cDacv-SAOGuXVNrUS7pjq_BgpkpFRw1La_CTWRMOnTsGUJckUhQDAFnKaxooyRvuCj1CY0bywuZweJHWfQkBysRSSuNHEwzBng-Dbura2Je_bd9Pwb502XVu5QkXu6P3J3GxE"
              }}
            />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.coca-cola.com/")}
            >
            <Image
              style={{
                width: 150,
                height: 100,
                margin: 10
              }}
              source={{
                uri:
                  "https://lh6.googleusercontent.com/XukSX6t-WXe9m7PLJX9dXU_4LFy3Mj8deMOaT0Xqd-MS_Kb_4APZIp1ycb9jRKjxrwsMMMvLHhgGm-M_Yhq2AegnoRmqAM2kd5cGesFvD_EAoRMzokm72fL0FV7JtSKh8XrCc5LlC0g"
              }}
            />
             </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
              onPress={() => Linking.openURL("https://www.woodlandworldwide.com/")}
            >
            <Image
              style={{ width: 150, height: 100, margin: 10 }}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/BM547q1T3J0cLGxTRnD2rri2Q9k723xCnU7uX5WAPqHBnpRZSlVAOVeIcF9_X3D9uIzGGfkFkD6eFoV5lAEzSgN9APqm9Uukj1h8YvVe9mLLepJyFpSekPWMJyf9vGXhvFh-gWPXUKM"
              }}
            />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.intel.in/content/www/in/en/homepage.html?cid=sem&source=sa360&campid=2019_q2_gmc_in_mbcbu_mbcbu3_bp_text-link_brand_bmm_cd_intel-brand_3001703264&ad_group=intel_in_brand_intel&intel_term=%2Bintel&sa360id=43700041817091602&gclid=EAIaIQobChMIn96o7fzr4gIVjTgrCh39bARcEAAYASAAEgJh6fD_BwE&gclsrc=aw.ds")}
            >
            <Image
              style={{
                width: 150,
                height: 100,
                margin: 10
              }}
              source={{
                uri:
                  "https://lh6.googleusercontent.com/Qmn2KrSzN3-VbY-1XtikIJpmzSIEZ6ctOq4baWaCM2yJBN8h8tD3tNQtICzg-7QHe3Ol5F6Ho21X7LENnLpU7ENCXojcjMi9b_AmsKieI4u586-UM58eniScO2J_P-t6dZZJwd1CsE8"
              }}
            />
             </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
              onPress={() => Linking.openURL("https://store.hp.com/in-en/default/")}
            >
            <Image
              style={{ width: 150, height: 140, margin: 10 }}
              source={{
                uri:
                  "data:image/png;base64,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"
              }}
            />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.apple.com/in/")}
            >
            <Image
              style={{
                width: 150,
                height: 150,
                margin: 10
              }}
              source={{
                uri:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAgVBMVEX///8jHyAAAAAgHB0cFxjx8fH5+fkUDhAGAAAaFRYRCgwXEhPAv78OBQitrKz29vbq6upwbm/f398uKyyjoqJ7enrOzs5UUlKFg4SzsrLZ2NiQj4+Mi4u7u7tbWVlraWqbmpo/PD1HREVQTU7j4uNjYWI4NTYrJyjIyMhAPT5/fn4RGtlvAAAEnklEQVR4nO3cW3uiMBAGYJigEJBWitYzUq266///gSu21sJ6WHHWeaZ877UXyRhymiSOAwAAAAAAAAAAAAAAAAAAAAAAAADQDM/SBRDWGf4mI10ISeM+ke+ZBsdgPKDI3WluDForsu6eSaXLImT00QYK3kC6MDIScr/4fenSiFjExxC4cU+6OBLe/G8hcOlVujwCstAtxUC6PAKmVApBlEgX6PF+lUPg0i/pEj1cOzalEDRxhtQPK83gSbpED/dS+RKa2AxWUaUZNK836Faagb+SLtHj5eXewIRt6RI9XloeFGgsXaDHq3wKNJIukIBZKQaUS5dHQqk7oEauF53+cWT0qCNdGhkrexgQ6K0rXRghmf1sAw2cIR9koY1CorfmRsBxJoMsmcya+hWc12r90FzbeDRJsuUgmXQu/Omt2XTgUyFdTTqtx5XuAWZzoiCMrOcVH386OTkhfsnX+0TbxzBhi14i/ykfSXdIhwTSYV1Eplq7Vm9NYXnpsBstYhr8hJV0e0u++5ddGJaj4wpxllFcDcAHSwv1q6gRhSfrtvuTA1qNdq3hufhQ7Jkf7acOurNO7YxO/72ff3JANiWKLvykEG8Udwvv9lr1XHMpRsemoDbx9HqxEdzCaN1k5AuBq3V/6Z0zBLuWoHDG1I44Q7DrExSeTRlc7Q5vYmiobsP5ia7X6wZRpK8/aPGGIF6oawSOMz8xP64vmEvXp4YxazNQGYLDLiEPP5OuTh3VdPpdzEa6OrVsOXsDepeuTi2czSCeSNemlg5jDIwnXZt6EsYpotbUS8C3UjCBdGXq4RwVwql0beoZBXwx0Llt4DhDvpHRxNKVqWnpscXAqpwl75zJFNSh9SJDm7FL1HoypXro8q4YKO0SOYdGpWsF55UzBgo3kwuIAXMMlCYaWWPwIl2belhjoDTNyLmfGihdOb8zxsDfStemHs70illL16Ymzt1ErYPjPx0t+UeB0jsdGd/a2fWW0rWpB9kFx3li3EvTev+bc5KktSE8s8ZAaY+wYT2JpPOiV5/3KJLKhRNngsEtzncrnChx7igWvI3C00gp79FE16b6WsL03Hn9ujxfXZ/AO0MoGH05eMZU0wFlyvYWGdOuXyxNVV354z2feBCSqiC4/B/DriXoelIwj69X6WbKHslgPrP9GQPpWt1ozrtmKKh7WfI/9Ir6EvELxl3FPW8hXaWbVR8EvJvGMylr3oag8r1h5oZAM+kK1cHaIyjNurEODVqz8AnfysmqvM/jFJvsbKsGrYdyigcgmEIQ6LzMspfxzJhVjosHTF+DygzDF5arTdpfVezfv5Fg9S0UKu6eMqt8/aHs7qST1tnRd3euG0jxsHiU3xOEUOsEsaJfPwjRm3ThuSTngmCsH8dxePb5mChVmHE+Y3sqCFFAdjXMe71JktKph+Xc8Ld0wTnl1QmjR5R8e0L0udMnqo6i9MOen38Nv02WTEiLv7eFOoPSA4KhvlTzVVMKrCm6gJi8yekDd908pcC3xng+0VD91OiE9tPKEm3mvUsroO5omK3Xy63K3UMAAAAAAAAAAAAAAAAAAAAAAAAAAPj0ByOJPFSa7yV3AAAAAElFTkSuQmCC"
              }}
            />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 0,
    alignItems: "center",
    marginTop: 0,
    justifyContent: "center"
  }
});
