import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

function CustomDrawerContent() {
    return (
        <DrawerContentScrollView  style={{
            backgroundColor: "#C7DDF6"
        }}>
            <View style={styles.header}>
               <View>
               <Image
                    source={require("../../src/assests/images/userIcon.png")}
                    style={styles.profileImage}
                />
                <Image
                    source={require("../../src/assests/images/changeUserIcon.png")}
                    style={{resizeMode:'contain' , width:13 , height:13, marginStart:'auto', marginTop:-7}}
                />
                  </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Piyush Tripathi</Text>
                    <Text style={styles.address}>Aparna Hillpark</Text>
                    <Text style={styles.flat}>Flat D 226</Text>
                </View>
            </View>
            <DrawerItem
                label="Vendor Blacklists"
                onPress={() => Alert.alert('Vendor Blacklists')}
                style={{backgroundColor:'#E5ECF5'}}
            />
            <DrawerItem
                label="Shops Near you"
                onPress={() => Alert.alert('Shops Near you')}
                style={{backgroundColor:'#E5ECF5'}}

            />
            <DrawerItem
                label="Emergency Contacts"
                onPress={() => Alert.alert('Emergency Contacts')}
                style={{backgroundColor:'#E5ECF5'}}

            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#E5ECF5'
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    profileInfo: {
        marginLeft: 16,
    },
    name: {
        fontWeight: 'bold',
        color:"#333333"
    },
    address: {
        fontSize: 12,
          color:"#333333"
    },
    flat: {
        fontSize: 12,
        color:"#333333"
    },
});

export default CustomDrawerContent;
