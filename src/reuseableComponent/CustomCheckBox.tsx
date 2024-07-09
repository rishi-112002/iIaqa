import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


const CustomCheckBox = (props:{ label: any, checked: any, onChange: any }) => {
  const {label , checked , onChange} = props
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChange(!checked)}
    >
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Icon name="check" size={10} color="white" />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#6DAC1C",
  },
  label: {
    marginLeft: 8,
    fontSize: 18,
  },
});

export default CustomCheckBox;
