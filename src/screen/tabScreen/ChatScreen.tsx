import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomSearchbar from "../../reuseableComponent/CustomSearchBar";
import HomeDirectMessageComponent from "../../reuseableComponent/HomeDirectMessageComponent";
type messageType = "All" | "Unread" | "Neighborhood"
const allTypes: { [key in messageType]: { id: number; name: string; avatar: any; time: any; message: any }[] } = {
    All: [
        {
            name: "Your iLaqa Agent",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../../src/assests/images/dummyAssets/communitymanager.png'),
            id: 1
        },
        {
            name: "Piyush",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../../src/assests/images/userIcon3.png'),
            id: 2
        },
        {
            name: "Rahul",
            time: "Today 11:31 AM",
            message: "Hi, I have forwarded my CV. Can you please forward to your HR",
            avatar: require('../../../src/assests/images/userIcon2.png'),
            id: 3
        }],
    Unread: [
        {
            name: "Your iLaqa Agent",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../../src/assests/images/dummyAssets/communitymanager.png'),
            id: 1
        },
        {
            name: "Rajesh",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../../src/assests/images/userIcon3.png'),
            id: 2
        },
        {
            name: "umar",
            time: "Today 11:31 AM",
            message: "Hi, I have forwarded my CV. Can you please forward to your HR",
            avatar: require('../../../src/assests/images/userIcon2.png'),
            id: 3
        }],
    Neighborhood: [
        {
            name: "Your iLaqa Agent",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../../src/assests/images/dummyAssets/communitymanager.png'),
            id: 1
        },
        {
            name: "raju",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../../src/assests/images/userIcon3.png'),
            id: 2
        },
        {
            name: "gajodhar",
            time: "Today 11:31 AM",
            message: "Hi, I have forwarded my CV. Can you please forward to your HR",
            avatar: require('../../../src/assests/images/userIcon2.png'),
            id: 3
        }],

};
function ChatScreen() {
    const [selectedType, setSelectedType] = useState<messageType>("All")
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <CustomSearchbar />
            <View style={styles.navBar}>
                <TouchableOpacity style={[styles.navButton, selectedType === 'All' && styles.navButtonSelected]} onPress={() => setSelectedType("All")}>
                    <Text style={[styles.navButtonText, selectedType == "All" && styles.navButtonSelectedText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navButton, selectedType === 'Unread' && styles.navButtonSelected]} onPress={() => setSelectedType("Unread")}>
                    <Text style={[styles.navButtonText, selectedType == "Unread" && styles.navButtonSelectedText]}>Unread</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navButton, selectedType === 'Neighborhood' && styles.navButtonSelected]} onPress={() => setSelectedType("Neighborhood")}>
                    <Text style={[styles.navButtonText, selectedType == "Neighborhood" && styles.navButtonSelectedText]}>Neighborhood</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={allTypes[selectedType]}
                renderItem={({ item }) => <HomeDirectMessageComponent item={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ padding: 5 }}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginStart: 17,
        gap: 14,
        marginTop: 10,
        marginBottom: 15,
    },
    navButton: {
        paddingEnd: 4,
        paddingRight: 4,
        paddingLeft: 4,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 5,
        backgroundColor: '#D7E1ED',
    },
    navButtonText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#949292'
    },
    navButtonSelectedText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    groupsContainer: {

    },
    groupItem: {
        width: 113,
        height: 130,
        borderRadius: 6,
        alignContent: 'center',
        marginVertical: 10,
        alignItems: 'center',
    },
    groupImage: {
        width: 65,
        height: 65,
        marginBottom: 8,
    },
    groupText: {
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        color: '#1D71D4'
    },
    navButtonSelected: {
        backgroundColor: '#1D71D4',
    },
});
export default ChatScreen;