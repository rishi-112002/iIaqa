import { Image, ScrollView, Text } from "react-native";
import React from "react";
import Welcome from "../reuseableComponent/Welcome";
import OtpForm from "../reuseableComponent/OtpForm";

export default function OTPLogin() {
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      style={{
        width: "full",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      <Welcome/>
      <OtpForm/>
      <Image
        source={require("../../src/assests/images/Illustration_Dummy.png")}
        style={{
          width: "100%",
          height: 225,
          bottom: 0,
        }}
      />
    </ScrollView>
  );
}
