import React, { useState } from "react";
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomSearchbar from "../../reuseableComponent/CustomSearchBar";
import DrawerFlatlistComponent from "../../reuseableComponent/DrawerFlatlistComponent";
import forNearShops, { Shoptypes } from "../../dummyData/ForNearByShops";

function ShopsNearYou() {
    const [selectedType, setSelectedType] = useState<Shoptypes>("GroceryStores");

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <CustomSearchbar />
            <View style={styles.navBar}>
                <TouchableOpacity
                    style={[styles.navButton, selectedType === 'GroceryStores' && styles.navButtonSelected]}
                    onPress={() => setSelectedType("GroceryStores")}
                >
                    <Text style={[styles.navButtonText, selectedType === "GroceryStores" && styles.navButtonSelectedText]}>
                        Grocery Stores
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.navButton, selectedType === 'Pharmacy' && styles.navButtonSelected]}
                    onPress={() => setSelectedType("Pharmacy")}
                >
                    <Text style={[styles.navButtonText, selectedType === "Pharmacy" && styles.navButtonSelectedText]}>
                        Pharmacy
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.navButton, selectedType === 'Stationary' && styles.navButtonSelected]}
                    onPress={() => setSelectedType("Stationary")}
                >
                    <Text style={[styles.navButtonText, selectedType === "Stationary" && styles.navButtonSelectedText]}>
                        Stationary
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
                sections={forNearShops[selectedType]}
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

export default ShopsNearYou;
