import React from "react";
import { View } from "react-native";
import AppNavigation from "../navigation/AppNavgation";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "../screen/drawerScreen/Drawer";
import { BottomNavigationBar } from "../screen/BottomNavigationBar";
import { Provider } from "react-redux";
import store from "../reducer/Store";
function AppMain() {
    return (<View style={{ flex: 1 }}>
        <Provider store={store}>
       <NavigationContainer>
          <BottomNavigationBar/>
          </NavigationContainer>
          </Provider>
      
    </View>)
}
export default AppMain;