import CustomCheckBox from "./CustomCheckBox";
import ReuseableButton from "./ReuseableButton";
import React, { useRef, useState } from "react";
import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    TextInputKeyPressEventData,
    Alert,
    Text,
} from "react-native";
import CustomText from "./CustomText";
import { useNavigation } from "@react-navigation/native";

export default function OtpFillScreen() {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [isWhatsappNumber, setIsWhatsappNumber] = useState<boolean>(false);
    const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
    const [show, setShow] = useState(false)
    const [getOtp , setGetOtp] = useState("")
    const navigation = useNavigation()

    const refs = useRef<(TextInput | null)[]>([]);
    const setRef = (index: number, ref: TextInput | null) => {
        refs.current[index] = ref;
    };

    const handleGetOtp = () => {
        if(!Number){
            Alert.alert(
                "Warning", 
                "Please Enter Number", 
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
        console.log(phoneNumber.length)
        if(phoneNumber.length!=10){
            Alert.alert(
                "Warning", 
                "Please Enter Valid  Number", 
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
        else{
            // generateOtp({setGetOtp})
            setShow(true)
        }
    
    };

    const handleOtpChange = (index: number, value: string) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value !== "" && index < otp.length - 1) {
            refs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (index: number, key: string) => {
        if (key === "Backspace" && otp[index] === "" && index > 0) {
            refs.current[index - 1]?.focus();
        } else if (key === "Backspace" && otp[index] !== "") {
            handleOtpChange(index, "");
        }
    };

    const handleIsWhatsappNumber = () => {
        setIsWhatsappNumber(!isWhatsappNumber);
    };
    const handleVerify =() => {
       if(otp.length==4){
        navigation.navigate("Register")
       }
    }

    return (
        <View>
            <View style={{padding: 20 , opacity:0.3}} pointerEvents="none">
                <CustomText
                    content="Verify your mobile number"
                    style={styles.verifyText}
                />
                <View style={styles.containerForInputBtn}>
                   
                   <View  style={styles.inputForMobNum }>
                   <Text style={{color:'black' , margin:15, fontWeight:'500'}}>
                    +91
                   </Text>
                     <TextInput
                        keyboardType="numeric"
                        maxLength={10}
                        style={{color:'black'}}
                        placeholderTextColor={"gray"}
                        value={"*******09"}
                    />
                    </View>
                    <TouchableOpacity
                        style={styles.btnForGetOtp}
                        onPress={handleGetOtp}
                    >
                        <CustomText
                            content="Get OTP"
                            style={[styles.txtForGetOtp, { fontWeight: "500" }]}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerMyWappNum}>
                    <CustomText
                        content="This is my WhatsApp Number"
                        style={styles.txtMyWappNum}
                    />
                    <CustomCheckBox
                        checked={true}
                        onChange={handleIsWhatsappNumber} label={""} />
                </View>
            </View>
                <View style={{marginHorizontal: 20 , opacity:1}}>
                    <CustomText content="Enter OTP" style={styles.txtEnterOtp} />
                    <View style={styles.containerOtpInputs}>
                        {otp.map((value, index) => (
                            <TextInput
                                key={index}
                                keyboardType="number-pad"
                                style={styles.inputOtp}
                                onChangeText={(text) => handleOtpChange(index, text)}
                                maxLength={1}
                                onKeyPress={({ nativeEvent }: { nativeEvent: TextInputKeyPressEventData }) =>
                                    handleKeyPress(index, nativeEvent.key)
                                }
                                ref={(ref) => setRef(index, ref)}
                                value={value}
                            />
                        ))}
                    </View>
                    <View style={styles.containerDidnotRecieveResend}>
                        <CustomText
                            content="Didn't Recieve OTP?"
                            style={styles.txtDidnotRecieve}
                        />
                        <TouchableOpacity>
                            <CustomText content="Resend" style={styles.txtResend} />
                        </TouchableOpacity>
                    </View>
                    <ReuseableButton buttonTittle={"Verify"} onPress={handleVerify} />
                </View>
            
        </View>


    )
}

const styles = StyleSheet.create({
    containerA: { padding: 20 },
    verifyText: {
        color: "#1D71D4",
        fontSize: 16,
        fontWeight: "600",
    },
    containerForInputBtn: {
        display: "flex",
        marginTop:10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    inputForMobNum: {
        borderWidth: 1,
        borderColor: "#4A90E2",
        borderRadius: 15,
        flex: 1,
        flexDirection:'row',
        color:'black'
    },
    btnForGetOtp: {
        borderRadius: 15,
        backgroundColor: "#C7DDF6",
        padding: 10,
    },
    txtForGetOtp: { color: "#263238" },
    containerMyWappNum: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    txtMyWappNum: { fontSize: 12 },
    containerB: { marginHorizontal: 20  },
    txtEnterOtp: {
        color: "#1D71D4",
        fontSize: 16,
        fontWeight: "600",
    },
    containerOtpInputs: {
        display: "flex",
        flexDirection: "row",
        gap: 4,
        marginVertical: 10,
    },
    inputOtp: {
        borderWidth: 2,
        borderColor: "#4A90E2",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        textAlign: "center",
    },
    containerDidnotRecieveResend: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    txtDidnotRecieve: { fontSize: 12, color: "black" },
    txtResend: { color: "black", fontWeight: "900" },
    btnVerify: {
        backgroundColor: "#1D71D4",
        padding: 10,
        marginVertical: 20,
        borderRadius: 15,
        marginHorizontal: 30,
    },
    txtVerify: { color: "white", textAlign: "center", fontSize: 16 },
});
