import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
type GroupCategory = 'My Groups' | 'Temporary Groups' | 'Explore All';
const allGroups: { [key in GroupCategory]: { id: number; name: string; image: any; }[] } = {
    'My Groups': [
        { id: 1, name: 'iLaqa Chefs', image: require("../../src/assests/images/dummyAssets/cooking.png") },
        { id: 2, name: 'iLaqa Yoga', image: require("../../src/assests/images/dummyAssets/yoga.png") },
        { id: 3, name: 'iLaqa Carpool', image: require("../../src/assests/images/dummyAssets/sharing.png") },
        { id: 4, name: 'iLaqa Childcare ', image: require("../../src/assests/images/dummyAssets/hand.png") },
    ],
    'Temporary Groups': [
        { id: 3, name: 'iLaqa Carpool', image: require("../../src/assests/images/userIcon2.png") },
    ],
    'Explore All': [
        { id: 1, name: 'iLaqa Childcare ', image: require("../../src/assests/images/dummyAssets/exercising.png") },
        { id: 2, name: 'iLaqa Childcare ', image: require("../../src/assests/images/dummyAssets/people.png") },
        { id: 3, name: 'iLaqa Childcare ', image: require("../../src/assests/images/dummyAssets/maths.png") },
        { id: 4, name: 'iLaqa Childcare ', image: require("../../src/assests/images/dummyAssets/market.png") },
    ],
};

const GroupScreenComponent = () => {
    const [selectedGroup, setSelectedGroup] = useState<GroupCategory>("My Groups")

    return (
        <View>
            <View style={styles.navBar}>
                <TouchableOpacity style={[styles.navButton, selectedGroup === 'My Groups' && styles.navButtonSelected]} onPress={() => setSelectedGroup("My Groups")}>
                    <Text style={[styles.navButtonText, selectedGroup == "My Groups" && styles.navButtonSelectedText]}>My Groups</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navButton, selectedGroup === 'Temporary Groups' && styles.navButtonSelected]} onPress={() => setSelectedGroup("Temporary Groups")}>
                    <Text style={[styles.navButtonText, selectedGroup == "Temporary Groups" && styles.navButtonSelectedText]}>Temporary Groups</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navButton, selectedGroup === 'Explore All' && styles.navButtonSelected]} onPress={() => setSelectedGroup("Explore All")}>
                    <Text style={[styles.navButtonText, selectedGroup == "Explore All" && styles.navButtonSelectedText]}>Explore All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.groupsContainer}>
                {allGroups[selectedGroup].map(group => (
                    <View key={group.id} style={styles.groupItem}>
                        <View style={{ backgroundColor: '#E1EDFA', width: 100, height: 100, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={group.image} style={styles.groupImage} />
                        </View>
                        <Text style={styles.groupText}>{group.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginStart: 17,
        gap: 15,
        marginTop: 10,
        marginBottom: 15,
    },
    navButton: {
        paddingEnd: 4,
        paddingRight:4,
        paddingLeft:4,
        paddingTop:2,
        paddingBottom:2,
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: 'space-around',
    },
    groupItem: {
        width: 110,
        height: 120,
        borderRadius: 6,
        alignContent: 'center',
        marginVertical: 10,
        alignItems: 'center',
    },
    groupImage: {
        width: 60,
        height: 60,
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

export default GroupScreenComponent;