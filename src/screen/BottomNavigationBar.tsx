import React, { useContext } from "react";
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import { useTheme } from '@react-navigation/native';
import WelcomeScreen from "./authenticate/SplashScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Drawer from "./drawerScreen/Drawer";
import GroupScreen from "./tabScreen/GroupScreen";
import ChatScreen from "./tabScreen/ChatScreen";
import { useSelector } from "react-redux";
import { RootState } from "../reducer/Store";

const Tab = createBottomTabNavigator();

export function BottomNavigationBar() {
    const isDrawerOpen = useSelector((state: RootState) => state.drawer.isDrawerOpen);
    const { colors } = useTheme();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}
        >
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarStyle: {
                        ...styles.tabBarStyle,
                        display: isDrawerOpen ? 'flex' : "none",
                        borderColor: colors.background,
                    },
                    tabBarActiveTintColor: "#0077FF",
                    tabBarInactiveTintColor: 'pink',
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.tabBarLabel, { color: focused ? "#0077FF" : "white" }]}>
                            YourTabLabel
                        </Text>
                    ),
                    tabBarHideOnKeyboard: true,
                }}
            >
                <Tab.Screen
                    name="HomeScreen"
                    component={Drawer}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.tabBarIconContainer}>
                                <Image
                                    source={require("../../src/assests/images/ant-design_home-filled.png")}
                                    style={[styles.tabBarIcon, {
                                        height: focused ? 28 : 24,
                                        width: focused ? 40 : 35,
                                        tintColor: focused ? "#1D71D4" : "#5E5C5C"
                                    }]}
                                />
                                {focused && <View style={styles.focusedIndicator} />}
                            </View>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Service and Repair"
                    component={WelcomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.tabBarIconContainer}>
                                <Image
                                    source={require("../../src/assests/images/Group.png")}
                                    style={[styles.tabBarIcon, {
                                        height: focused ? 28 : 24,
                                        width: focused ? 40 : 35,
                                        tintColor: focused ? "#1D71D4" : "#5E5C5C"
                                    }]}
                                />
                                {focused && <View style={styles.focusedIndicator} />}
                            </View>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="funnny"
                    component={WelcomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.tabBarIconContainer}>
                                <Image
                                    source={require("../../src/assests/images/healthicons_happy.png")}
                                    style={[styles.tabBarIcon, {
                                        height: focused ? 28 : 24,
                                        width: focused ? 40 : 35,
                                        tintColor: focused ? "#1D71D4" : "#5E5C5C"
                                    }]}
                                />
                                {focused && <View style={styles.focusedIndicator} />}
                            </View>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Groups"
                    component={GroupScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.tabBarIconContainer}>
                                <Image
                                    source={require("../../src/assests/images/fluent_building-people-20-filled.png")}
                                    style={[styles.tabBarIcon, {
                                        height: focused ? 28 : 24,
                                        width: focused ? 40 : 35,
                                        tintColor: focused ? "#1D71D4" : "#5E5C5C"
                                    }]}
                                />
                                {focused && <View style={styles.focusedIndicator} />}
                            </View>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.tabBarIconContainer}>
                                <Image
                                    source={require("../../src/assests/images/flowbite_messages-solid.png")}
                                    style={[styles.tabBarIcon, {
                                        height: focused ? 28 : 24,
                                        width: focused ? 40 : 35,
                                        tintColor: focused ? "#1D71D4" : "#5E5C5C"
                                    }]}
                                />
                                {focused && <View style={styles.focusedIndicator} />}
                            </View>
                        ),
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    keyboardAvoidingView: {
        flex: 1,
        zIndex: 50,
    },
    tabBarStyle: {
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 10,
        borderRadius: 20,
        backgroundColor: "#D3E3F6",
        paddingBottom: 3,
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    tabBarLabel: {
        fontSize: 1,
    },
    tabBarIconContainer: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    tabBarIcon: {
        resizeMode: 'contain',
        marginTop: 5,
        marginBottom: 3,
    },
    focusedIndicator: {
        backgroundColor: '#1D71D4',
        height: 2,
        width: 24,
    },
});

export default BottomNavigationBar;
