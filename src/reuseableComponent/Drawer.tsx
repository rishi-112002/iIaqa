import React from "react";
import CustomDrawerContent from "./CustomDrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screen/authenticate/SplashScreen";
import Home from "../screen/tabScreen/Home";
function Drawer(){
const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator  
      drawerContent={() => <CustomDrawerContent/>}  screenOptions={{
        drawerStyle: {
          width: 180,
        },
      }}  >
      <Drawer.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
}
export default Drawer;