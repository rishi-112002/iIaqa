import React, { useState } from "react";
import { Alert, Dimensions, Image, ScrollView, TextInput, View } from "react-native";

import Welcome from "../../reuseableComponent/Welcome";
import TextComp from "../../reuseableComponent/RegisterComponent";
import ReuseableButton from "../../reuseableComponent/ReuseableButton";
import { useNavigation } from "@react-navigation/native";
function RegisterScreen() {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const [userName, setUserName] = useState("")
    const [userSociety, setUserSociety] = useState("")
    const navigation = useNavigation()
    const [userBlock, setUserBlock] = useState("")
    const [userFlatNumber, setUserFlatNumber] = useState("")
    const checkInput = () => {
        if (!userName) {
            Alert.alert(
                "Warning",
                "Please enter Full name",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
            return;
        }
        if (!userSociety) {
            Alert.alert(
                "Warning",
                "Please enter Society",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
            return;
        }
        if (!userBlock) {
            Alert.alert(
                "Warning",
                "Please enter Block",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
            return;
        }
        if (!userFlatNumber) {
            Alert.alert(
                "Warning",
                "Please enter Flat number",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
            return;
        }
        else {
            navigation.navigate("Home")
        }
    }
    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            style={{
                flex: 1,
                backgroundColor: "#fff",
            }}
        >
            <Welcome />
            <View style={{ paddingTop: 16, paddingEnd: 16, paddingLeft: 16, paddingRight: 16, paddingBottom: -10 }}>
                <TextComp text={"Full Name"} placeholder={"Enter full name"} value={userName} onChangeText={setUserName} secureTextEntry={false} errorMessage={""} keyBoardType={"none"} />
                <TextComp text={"Society"} placeholder={""} value={userSociety} onChangeText={setUserSociety} secureTextEntry={undefined} errorMessage={""} keyBoardType={"none"} />
                <View style={{ flexDirection: 'row', paddingHorizontal: 0, marginEnd: 0 }}>
                    <View style={{ flex: 1, marginHorizontal: 7.5 }}>
                        <TextComp text={"Block"} placeholder={""} value={userBlock} onChangeText={setUserBlock} secureTextEntry={undefined} errorMessage={""} keyBoardType={"none"} />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 7.5 }}>
                        <TextComp text={"Flat Number"} placeholder={""} value={userFlatNumber} onChangeText={setUserFlatNumber} secureTextEntry={undefined} errorMessage={""} keyBoardType={"none"} />
                    </View>
                </View>
            </View>
            <TextInput />
            <ReuseableButton buttonTittle={"Register"} onPress={checkInput} />
            <Image
                source={require("../../../src/assests/images/Illustration_Dummy.png")}
                style={{
                    width: screenWidth,
                    height: screenHeight * 0.3,
                    bottom: 10,
                }}
            />


        </ScrollView>
    )
}
export default RegisterScreen;