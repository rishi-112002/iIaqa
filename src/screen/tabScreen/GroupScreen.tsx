import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CustomSearchbar from '../../reuseableComponent/CustomSearchBar';
import GroupScreenComponent from '../../reuseableComponent/GroupScreenComponent';
function  GroupScreen(){
    return (
        <View style={{flex:1 , backgroundColor:'white'}}>
            <CustomSearchbar/>
            <GroupScreenComponent/>
        </View>
    );
};
export default GroupScreen;
