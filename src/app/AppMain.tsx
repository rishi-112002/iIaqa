import React from "react";
import { View } from "react-native";
import AppNavigation from "../navigation/AppNavgation";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "../reuseableComponent/Drawer";
import { BottomNavigationBar } from "../screen/BottomNavigationBar";
function AppMain() {
    return (<View style={{ flex: 1 }}>
       <NavigationContainer>
          <BottomNavigationBar/>
          </NavigationContainer>
      
    </View>)
}
export default AppMain;