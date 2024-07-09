import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import Drawer from "./Drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
function CustomSearchbar(){
    const navigation = useNavigation();
return(
    <View style={{flexDirection:'row', justifyContent:"flex-start" , padding:4 , alignItems:'center' , borderRadius:10, borderWidth:1.5, marginTop:20,marginEnd:15, marginStart:15,height:45,
        borderColor:'#1581FF'}}>
    <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
     <Image source={require("../../src/assests/images/menu.png")}style={{width:30 , height:15 , resizeMode:'contain' , tintColor:'#1581FF'}}/>
     </TouchableOpacity>
     <TextInput 
     placeholder="Search"

     style={{alignContent:'center' , justifyContent:'center' , width:'90%' }}
     placeholderTextColor={"gray"}/>
    </View>
)
}
export default CustomSearchbar;