import React from "react";
import { Text, TouchableOpacity } from "react-native";
function ReuseableButton(props: { buttonTittle: any, onPress: any }) {
    const { buttonTittle, onPress } = props
    return(
        <TouchableOpacity
        style={{
            backgroundColor: "#1D71D4",
            padding: 10,
            marginVertical:10,
            borderRadius: 15,
            marginHorizontal: 30,
        }}
        onPress={onPress}
      
    >
        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
            {buttonTittle}
        </Text>
    </TouchableOpacity>
    )

}
export default ReuseableButton;
