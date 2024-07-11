import React, {  } from "react";
import CustomDrawerContent from "../../reuseableComponent/CustomDrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../tabScreen/Home";
import ShopsNearYou from "./ShopNearYouScreen";
import EmergencyContacts from "./EmergenyContact";

function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent />} screenOptions={{
        drawerStyle: {
          width: 180,
        }

      }}>
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="ShopNearYou" component={ShopsNearYou} options={{ headerShown: false }} />
      <Drawer.Screen name="EmergencyContacts" component={EmergencyContacts} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
export default Drawer;
