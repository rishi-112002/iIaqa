import { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

function UserScreen() {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const imagewidth = screenWidth * 0.5;
    const imageheight = screenHeight * 0.3;
    return (
        <View
            style={{
                display: "flex",
                backgroundColor: "white",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 20,
            }}
        >
            <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1, paddingTop: 100, paddingEnd: 20, paddingStart: 20 }}>

                <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/215f/3ecc/1598c10d8d6825836162a1096f6b3401?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hRcmEtgCXGyT6whLRz3Vgo-rfOCi~wtws~BW~~HXCHjpFZeNOu2TrTUz8v7SLj9m3A3TWjmIOt2-II6FOqtqpc7vRJwsiI3sIPgc1uHt-kGWTz3EO7AXSyeuvBZ6~4Rrqmy-UyK8BGBRA8XDJx6x-OhhuDKwviJRen38LdwbBziA-7Y9f6xiMavyxahi~N5xXj~9pixD9M5rJQN19-LJ14iYXZwvBkkuaR8GXk6fjL1T~ZVU0-GdSw6Dsk5snX-9K46bZRumfLhLX-2OPRohWUiw09eHMTjTRKlHcEw8aMrz3kC1ZZE1SZXW2t8PUMtcnhC1CxrT9ookYexK5uzYig__' }}
                    style={{ width: screenWidth * 0.215, height: screenHeight * 0.1 }} />
                <Image source={require("../../../src/assests/images/camera.png")}
                    style={{ position: 'static', marginStart: 80 }} />
                <Text style={{ color: 'black', fontFamily: 'Jost', fontWeight: '500', fontSize: 24, marginTop: 10 }}>
                    Piyush Tripathi
                </Text>
                <Text style={{ color: 'black', fontFamily: 'Jost', fontWeight: '400', fontSize: 14  , marginTop:5}}>
                    Aparna Hillpark
                </Text>
                <Text style={{ color: 'black', fontFamily: 'Jost', fontWeight: '500', fontSize: 12, marginTop:5}}>
                    Flat D 226
                </Text>
                <Text style={{ color: 'black', fontFamily: 'Jost', fontWeight: '500', fontSize: 12 , marginTop:5}}>
                    Mobile :7905421378
                </Text>
                <TouchableOpacity style={{backgroundColor:'#1D71D4' , paddingVertical:8 , paddingHorizontal:50 , borderRadius:15 , marginTop:100}}>
                    <Text style={{fontSize:16 , fontWeight:700 , color:'#FFFFFF'}}>
                        Details
                    </Text>
                </TouchableOpacity>

            </View>

            <Animatable.View animation={"fadeIn"} duration={1500} style={{ width: "100%", height: 225, position: "absolute", bottom: 3 }}>
                <Image
                    source={require("../../../src/assests/images/Illustration_Dummy.png")}
                    style={{ width: screenWidth, height: imageheight, position: "absolute", bottom: 3, end: -20 }}
                ></Image>
            </Animatable.View>
        </View>
    )
}
export default UserScreen;