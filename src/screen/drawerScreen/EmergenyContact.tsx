import React, { useState } from "react";
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomSearchbar from "../../reuseableComponent/CustomSearchBar";
import DrawerFlatlistComponent from "../../reuseableComponent/DrawerFlatlistComponent";
import forEmergencies, { EmergencyTypes } from "../../dummyData/ForEmergency";

function EmergencyContacts() {
    const [selectedType, setSelectedType] = useState<EmergencyTypes>("Emergency");

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <CustomSearchbar />
            <View style={styles.navBar}>
                <TouchableOpacity
                    style={[styles.navButton, selectedType === 'Emergency' && styles.navButtonSelected]}
                    onPress={() => setSelectedType("Emergency")}
                >
                    <Text style={[styles.navButtonText, selectedType === "Emergency" && styles.navButtonSelectedText]}>
                    Emergency
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.navButton, selectedType === 'Medical' && styles.navButtonSelected]}
                    onPress={() => setSelectedType("Medical")}
                >
                    <Text style={[styles.navButtonText, selectedType === "Medical" && styles.navButtonSelectedText]}>
                    Medical
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.navButton, selectedType === 'Other' && styles.navButtonSelected]}
                    onPress={() => setSelectedType("Other")}
                >
                    <Text style={[styles.navButtonText, selectedType === "Other" && styles.navButtonSelectedText]}>
                        Other
                    </Text>
                </TouchableOpacity>
            </View>
            <SectionList
                sections={forEmergencies[selectedType]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <DrawerFlatlistComponent item={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                contentContainerStyle={{ padding: 5, paddingBottom: 47 }}
            />
        </View>
    );
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
    navButtonSelected: {
        backgroundColor: '#1D71D4',
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1D71D4',
        marginStart: 16,
        marginTop: 10,
    },
});

export default EmergencyContacts;
