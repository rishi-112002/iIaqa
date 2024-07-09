import { View, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable" ;
function WelcomeScreen() {
  const [showImage, setShowImage] = useState(true);
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const imagewidth = screenWidth*0.5;
  const imageheight = screenHeight*0.3;

  useEffect(()=>{
    const timer = setTimeout(()=>{ setShowImage(false)} , 2000)
    return ()=> clearTimeout(timer)
  })
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingHorizontal: 20,
      }}
    >
      <Animatable.View  animation={showImage? "fadeOut":"fadeIn"} duration={1500} style={{position:'absolute' , top:"15%"}}>
        <Image
          source={require("../../../src/assests/images/image.png")}
          style={{ width: imagewidth, height: imageheight}}
        />
        </Animatable.View>
        <Animatable.View animation={showImage ? "fadeOut" : "fadeIn"} duration={1500} style={{ width: "100%", height: 225, position: "absolute", bottom: 3 }}> 
      <Image
        source={require("../../../src/assests/images/Illustration_Dummy.png")}
        style={{ width: screenWidth, height: imageheight, position: "absolute", bottom: 3  , end:-20}}
      ></Image>
      </Animatable.View>
    </View>
  );
}
export default WelcomeScreen;
