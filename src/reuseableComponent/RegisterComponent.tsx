import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
function TextComp(props: { text:string , placeholder: any; value: any; onChangeText: any; secureTextEntry: any; errorMessage: String, keyBoardType: any }) {
    const { text , placeholder, value, onChangeText, secureTextEntry, errorMessage, keyBoardType } = props;
    return (
        <View>
            <Text style={{color:"#4A90E2", fontSize:16 , fontWeight:'700'}}>
                {text}{<Text style={{color:'red'}}> *</Text>}
            </Text>
            <TextInput 
                value= {value}
                style={{
                    marginVertical: 10,
                    borderWidth: 1,
                    borderColor: "#4A90E2",
                    borderRadius: 13,
                }}
                placeholder={placeholder}
                placeholderTextColor={'grey'}
                onChangeText={(text) => onChangeText(text)}
                secureTextEntry={secureTextEntry}
                keyboardType={keyBoardType}
                autoCapitalize='none'
            />
              {errorMessage && (<Text style={{ color: 'red', fontSize: 12, alignSelf: "flex-start", marginStart: 23 }}> {errorMessage}</Text>)}
        </View>

    )
}
export default TextComp;
