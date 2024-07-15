import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import TextComponentUserScreen from "./TextComponentUserScreen";
import DropDownPicker from "react-native-dropdown-picker";
import BloodGroupOptions from '../dummyData/BloodGroupOtions';
import CustomDrawer from './CustomDrawer';
import ChildrenMemberOptions from '../dummyData/ChildrenOption';
import FamilyMemberOptions from '../dummyData/FamaliyMemberOptions';

function UserDetailComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [isFamilyDrawerOpen, setIsFamilyDrawerOpen] = useState(false);
    const [familyMemberNumber, setFamilyMemberNumber] = useState("");
    const [isChildrenDrawerOpen, setIsChildrenDrawerOpen] = useState(false);
    const [childrenNumber, setchildrenNumber] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextComponentUserScreen text={"Full Name"} />
                <TextInput style={styles.input} keyboardType="default" />
            </View>
            <View style={styles.row}>
                <View style={styles.halfWidthContainer}>
                    <TextComponentUserScreen text={"Society Name"} />
                    <TextInput style={styles.input} keyboardType="default" />
                </View>
                <View style={[styles.halfWidthContainer, styles.margin]}>
                    <TextComponentUserScreen text={"Flat No"} />
                    <TextInput style={styles.input} keyboardType="number-pad" />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <TextComponentUserScreen text={"Full Address"} />
                <TextInput style={styles.input} keyboardType="default" />
            </View>
            <View style={styles.row}>
                <View style={styles.halfWidthContainer}>
                    <TextComponentUserScreen text={"City"} />
                    <TextInput style={styles.input} keyboardType="default" />
                </View>
                <View style={styles.halfWidthContainer}>
                    <TextComponentUserScreen text={"Pin Code"} />
                    <TextInput style={styles.input} keyboardType="number-pad" />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.halfWidthContainer}>
                    <TextComponentUserScreen text={"Mobile Number"} />
                    <TextInput style={styles.input} keyboardType="phone-pad" />
                </View>
                <View style={styles.halfWidthContainer}>
                    <TextComponentUserScreen text={"Alternate Number"} />
                    <TextInput style={styles.input} keyboardType="phone-pad" />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.halfWidthContainer}>
                    <TextComponentUserScreen text={"Occupation"} />
                    <TextInput style={styles.input} keyboardType="default" />
                </View>
                <View style={styles.halfWidthContainer}>
                    <TextComponentUserScreen text={"Company Name"} />
                    <TextInput style={styles.input} keyboardType="default" />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                gap: 10,
                margin: 5
            }}>
                <View style={{
                    flexDirection: "column",
                    width: '33%'
                }}>
                    <TextComponentUserScreen text={"Blood Group"} />
                    <CustomDrawer items={BloodGroupOptions} isOpen={isOpen} selectedValue={selectedValue} setIsOpen={setIsOpen} setSelectedValue={setSelectedValue} placeHolder={""} />
                </View>
                <View style={{
                    flexDirection: "column",
                    width: '30%'
                }}>
                    <TextComponentUserScreen text={"Family member"} />
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        <CustomDrawer items={FamilyMemberOptions} isOpen={isFamilyDrawerOpen} selectedValue={familyMemberNumber} setIsOpen={setIsFamilyDrawerOpen} setSelectedValue={setFamilyMemberNumber} placeHolder={"adult"} />
                        <CustomDrawer items={ChildrenMemberOptions} isOpen={isChildrenDrawerOpen} selectedValue={childrenNumber} setIsOpen={setIsChildrenDrawerOpen} setSelectedValue={setchildrenNumber} placeHolder={"children"} />
                    </View>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <TextComponentUserScreen text={"Hobbies/ Interests"} />
                <TextInput style={styles.input} keyboardType="default" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: 'white',
        flex: 1,
        padding: 25
    },
    inputContainer: {
        margin: 5
    },
    row: {
        flexDirection: 'row',
        gap: 30,
        margin: 5
    },
    halfWidthContainer: {
        flexDirection: "column",
        width: '46%'
    },
    margin: {
        margin: 5
    },
    input: {
        width: '100%',
        paddingVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#1581FF',
        color: 'black',
        paddingHorizontal: 5
    }
});

export default UserDetailComponent;
