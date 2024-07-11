import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Chip } from 'react-native-paper';

function CustomSearchbar() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const onChangeSearch = (query: any) => {
        setSearchQuery(query);
        setShowOptions(true);
    };

    const handleOptionClick = (option: any) => {
        setSearchQuery(option);
        setShowOptions(false);
    };

    const options = ['Announcement', 'Reviews', 'Photos', 'Food', 'Broadcast', 'Emergency'];

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.drawerButton}>
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
            </View>
            {showOptions && (
                <View style={styles.optionsContainer}>
                    {options
                        .filter(option => option.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((option, index) => (
                            <Chip
                                key={index}
                                onPress={() => handleOptionClick(option)}
                                style={styles.chip}
                            >
                                <View style={{flexDirection:"row"}}>
                                    <Image source={require("../../src/assests/images/announcment.png")}/>
                                    <Text>
                                    {option}
                                    </Text>
                                </View>
                            </Chip>
                        ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
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
        height: 25,
        resizeMode: 'contain',
        tintColor: '#1581FF',
    },
    searchbar: {
        flex: 1,
        height: '100%',
        paddingLeft: 10,
        backgroundColor: 'transparent',
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    chip: {
        margin: 4,
        backgroundColor:'#FFFFFF',
        elevation:10
    },
});

export default CustomSearchbar;
