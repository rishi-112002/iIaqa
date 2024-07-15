import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomSearchbar from "../../reuseableComponent/CustomSearchBar";
import HomeDirectMessageComponent from "../../reuseableComponent/HomeDirectMessageComponent";
import { SectionList } from "react-native";
import chatData, { messageType } from "../../dummyData/forChatScreen";
import NeighboursData from "../../dummyData/forNeighours";
import ImageComponent from "../../reuseableComponent/ImageComponent";
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
            {selectedType != "Neighborhood" ?
                <FlatList
                    data={chatData[selectedType]}
                    renderItem={({ item }) => <HomeDirectMessageComponent item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ padding: 5 }}
                /> :
                <SectionList
                    sections={NeighboursData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={() => null}
                    renderSectionHeader={({ section }) => (
                        <View style={styles.sectionContainer}>
                            <Text style={styles.header}>{section.title}</Text>
                            <ScrollView horizontal contentContainerStyle={styles.imageRow}>
                                {section.data.map(item => (
                                    <ImageComponent key={item.id} item={item} />
                                ))}
                            </ScrollView>
                        </View>
                    )}
                    contentContainerStyle={{ padding: 5, paddingBottom: 47 }}
                />
            }

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
    sectionContainer: {
        paddingEnd:10,
        paddingStart:10
      },
      imageRow: {
        flexDirection: 'row',
        paddingHorizontal: 10,
      },
    header: {
        fontSize: 14,
        fontFamily:'Jost',
        color:'black',
        fontWeight: '800',
        marginVertical: 10,
        marginHorizontal: 10
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