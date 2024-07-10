import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
function CustomSearchbar(){
    const navigation = useNavigation();
return(
    <View style={{flexDirection:'row', justifyContent:"flex-start"  , alignItems:'center' , borderRadius:4, borderWidth:1.3, marginTop:20,marginEnd:15, marginStart:15,height:37,
        borderColor:'#1581FF'}}>
    <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} style={{width:30}}>
     <Image source={require("../../src/assests/images/drawerIcon.png")}style={{width:25 , height:10 , resizeMode:'contain' , tintColor:'#1581FF' , marginTop:-2.5,
     }}/>
     </TouchableOpacity>
     <TextInput 
     placeholder="Search"
     style={{alignContent:'center' , justifyContent:'center' , width:'90%'}}
     placeholderTextColor={"#CCCCCC"}/>
    </View>
)
}
export default CustomSearchbar;