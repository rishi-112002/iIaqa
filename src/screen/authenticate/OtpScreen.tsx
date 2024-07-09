import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet } from "react-native";
import OtpForm from "../../reuseableComponent/OtpForm";
import Welcome from "../../reuseableComponent/Welcome";
import OtpFillScreen from "../../reuseableComponent/OtpFillScreen";
function OtpScreen(){
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
      <OtpFillScreen/>
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
export default OtpScreen;