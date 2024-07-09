import { Dimensions, Image, ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import Welcome from "../../reuseableComponent/Welcome";
import OtpForm from "../../reuseableComponent/OtpForm";

export default function OTPLogin() {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      style={{
        flex:1,
        backgroundColor: "#fff",
      }}
    >
      <Welcome/>
      <OtpForm/>
      <Image
        source={require("../../../src/assests/images/Illustration_Dummy.png")}
        style={[styles.bottomImage, { width: screenWidth, height: screenHeight * 0.3 }]}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: Dimensions.get('window').height * 0.3, 
  },
  bottomImage: {
    position: 'static',
    bottom: 0,
    left: 0,
    right: 0,
  },
});