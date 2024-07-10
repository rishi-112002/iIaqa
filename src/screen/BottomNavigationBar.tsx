import React from "react";
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import { useTheme } from '@react-navigation/native';
import WelcomeScreen from "./authenticate/SplashScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Drawer from "../reuseableComponent/Drawer";
import Home from "./tabScreen/Home";
import GroupScreen from "./tabScreen/GroupScreen";
import ChatScreen from "./tabScreen/ChatScreen";
const Tab = createBottomTabNavigator();
export function BottomNavigationBar() {
    const { colors, dark } = useTheme();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <Tab.Navigator
                initialRouteName="Home"

                screenOptions={{
                    tabBarStyle: {
                        position: "absolute",
                        bottom: 5,
                        left: 10,
                        right: 10,
                        borderRadius: 20,
                        backgroundColor: "#D3E3F6",
                        borderColor: colors.background,
                        paddingBottom: 3,
                        shadowColor: "#7F5DF0",
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.5,
                        elevation: 5
                    },

                    tabBarActiveTintColor: "#0077FF",
                    tabBarInactiveTintColor: 'pink',
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ fontSize: 1, color: focused ? "#0077FF" : "white" }}>
                            YourTabLabel
                        </Text>
                    ),
                    tabBarHideOnKeyboard: true
                }}
            >
                <Tab.Screen
                    name="0"
                    component={Drawer}

                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ fontSize: 12, color: focused ? "#0077FF" : colors.text }}>

                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={require("../../src/assests/images/ant-design_home-filled.png")}
                                    style={{
                                        height: focused ? 28 : 24,
                                        width: focused ? 40 : 35,
                                        resizeMode: 'contain',
                                        marginTop: 5,
                                        tintColor: focused ? "#1D71D4" : "#5E5C5C"
                                    }}
                                />
                            </View>
                        ),
                        headerShown: false
                    }} />

                <Tab.Screen
                    name="Search"
                    component={WelcomeScreen}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ fontSize: 12, color: focused ? "#0077FF" : colors.text }}>

                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image source={require("../../src/assests/images/Group.png")}
                                style={{
                                    height: focused ? 28 : 24,
                                    width: focused ? 40 : 35,
                                    resizeMode: 'contain',
                                    marginTop: 5,
                                    tintColor: focused ? "#1D71D4" : "#5E5C5C"
                                }} />

                        ),
                        headerShown: false
                    }} />
                <Tab.Screen
                    name="AddPost"
                    component={WelcomeScreen}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ fontSize: 12, color: focused ? "#0077FF" : colors.text }}>

                            </Text>
                        ),

                        tabBarIcon: ({ focused }) => (
                            <Image source={require("../../src/assests/images/healthicons_happy.png")}
                                style={{
                                    height: focused ? 28 : 24,
                                    width: focused ? 40 : 35,
                                    resizeMode: 'contain',
                                    marginTop: 5,
                                    tintColor: focused ? "#1D71D4" : "#5E5C5C"
                                }} />

                        ),
                        headerShown: false
                    }} />

                <Tab.Screen
                    name="Library"
                    component={GroupScreen}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ fontSize: 12, color: focused ? "#0077FF" : colors.text }}>
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image source={require("../../src/assests/images/fluent_building-people-20-filled.png")}
                                style={{
                                    height: focused ? 28 : 24,
                                    width: focused ? 40 : 35,
                                    resizeMode: 'contain',
                                    marginTop: 5,
                                    tintColor: focused ? "#1D71D4" : "#5E5C5C"
                                }} />
                        ),
                        headerShown: false
                    }} />
                <Tab.Screen
                    name="Account"
                    component={ChatScreen}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ fontSize: 12, color: focused ? "#0077FF" : colors.text }}>

                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image source={require("../../src/assests/images/flowbite_messages-solid.png")}
                                style={{
                                    height: focused ? 28 : 24,
                                    width: focused ? 40 : 35,
                                    resizeMode: 'contain',
                                    marginTop: 5,
                                    tintColor: focused ? "#1D71D4" : "#5E5C5C"
                                }} />
                        ),
                        headerShown: false
                    }} />
            </Tab.Navigator>
        </KeyboardAvoidingView>
    );
}
const style = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})