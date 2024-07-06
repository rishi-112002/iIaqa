import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import CustomCheckBox from "./CustomCheckBox";


export default function OtpForm() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isWhatsappNumber, setIsWhatsappNumber] = useState(false);
    const [otp, setOtp] = useState(["", "", "", ""]);
    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };
    const HandleIsWhatsappNumber = () => {
        setIsWhatsappNumber(!isWhatsappNumber);
    };
    return (
        <View>
            <View style={{ padding: 20 }}>
                <Text
                    style={{
                        color: "#1D71D4",
                        fontSize: 16,
                        fontWeight: "600",
                    }}
                >
                    Verify your mobile number
                </Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                    }}
                >
                    <TextInput
                        inputMode="numeric"
                        style={{
                            marginVertical: 10,
                            borderWidth: 2,
                            borderColor: "#4A90E2",
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 15,
                            flex: 1,
                        }}
                        placeholder="Enter your mobile number "
                        onChangeText={(val) => {
                            setPhoneNumber(val);
                        }}
                    ></TextInput>

                    <TouchableOpacity
                        style={{
                            borderRadius: 15,
                            backgroundColor: "#C7DDF6",
                            padding: 10,
                        }}
                    >
                        <Text style={{ fontWeight: 500, color: "#263238" }}>Get OTP</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "left",
                    }}
                >
                    <Text style={{ fontSize: 12 }}>This is my WhatsApp Number</Text>
                    <CustomCheckBox
                        checked={isWhatsappNumber}
                        onChange={() => HandleIsWhatsappNumber()} label={undefined} />
                </View>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Text
                    style={{
                        color: "#1D71D4",
                        fontSize: 16,
                        fontWeight: "600",
                    }}
                >
                    Enter OTP
                </Text>

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 4,
                        marginVertical: 10,
                    }}
                >
                    {otp.map((a, i) => {
                        return (
                            <TextInput
                                key={i}
                                keyboardType="number-pad"
                                style={{
                                    borderWidth: 2,
                                    borderColor: "#4A90E2",
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    borderRadius: 15,
                                    textAlign: "center",
                                }}
                                onChangeText={(text) => {
                                    handleOtpChange(text.indexOf, text.valueOf);
                                }}
                                maxLength={1}
                            ></TextInput>
                        );
                    })}
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "ce",
                }}
                >
                    <Text style={{ fontSize: 12 }}>Didn't Recieve OTP? </Text>
                    <TouchableOpacity>
                        <Text style={{ color: "black", fontWeight: "900" }}>Resend</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: "#1D71D4",
                        padding: 10,
                        marginVertical: 20,
                        borderRadius: 15,
                        marginHorizontal: 30,
                    }}
                >
                    <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
                        Verify
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
