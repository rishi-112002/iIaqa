import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";

function CustomSearchbar() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [showCross , setShowCross] = useState(false)
    const onChangeSearch = (query: any) => {
        setSearchQuery(query);
        setShowOptions(true);
        setShowCross(true)
    };

    const handleOptionClick = (option: any) => {
        setSearchQuery(option);
        setShowOptions(false);
        setShowCross(true)
    };
    const handleCrossPress = () => {
        setSearchQuery("")
        setShowOptions(false)
        setShowCross(false)
    }
    const drawer =()=>{
        navigation.dispatch(DrawerActions.openDrawer())
    }

    const options = ['Announcement', 'Reviews', 'Photos', 'Food', 'Broadcast', 'Emergency'];

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={drawer} style={styles.drawerButton}>
                    <Image
                        source={require("../../src/assests/images/drawerIcon.png")}
                        style={styles.drawerIcon}
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchbar}
                />
              { showCross && <TouchableOpacity onPress={handleCrossPress} style={{ height:'100%' ,justifyContent:'center' , width:'9.8%' }}>
                    <Image
                        source={require("../../src/assests/images/crossIcon.png")}
                        style={{
                            width: 25,
                            height: 15,
                            resizeMode: 'contain',
                            tintColor: '#1581FF',
                           
                        }}
                    />
                </TouchableOpacity>}
            </View>
            {showOptions && (
                <View style={styles.optionsContainer}>
                    {options
                        .filter(option => option.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleOptionClick(option)}
                                style={styles.chip}
                            >
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={require("../../src/assests/images/announcment.png")} style={{ height: 14, width: 12, marginEnd: 3 }} />
                                    <Text style={{ fontFamily: 'Karla', fontSize: 10, fontWeight: '400', alignSelf: "center" }}>
                                        {option}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight:13,
        paddingLeft:13,
        paddingTop:5
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1.3,
        borderColor: '#1581FF',
        marginVertical: 10,
        height: 40,
    },
    drawerButton: {
        paddingHorizontal: 10,
    },
    drawerIcon: {
        width: 25,
        height: 10,
        resizeMode: 'contain',
        tintColor: '#1581FF',
    },
    searchbar: {
        height: '100%',
        width: '76%',
        paddingLeft: 10,
        backgroundColor: 'transparent',
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    chip: {
        marginEnd: 7,
        marginStart: 7,
        marginTop: 7,
        height: 24,
        borderRadius: 8,
        padding: 6,
        width: 'auto',
        backgroundColor: '#DBE3EC',
        elevation: 1
    },
});

export default CustomSearchbar;
