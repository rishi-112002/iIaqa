import { Image, StyleSheet, Text, View } from "react-native";

function DrawerFlatlistComponent(props: { item: any }) {
    const { item } = props
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.itemContainer}>
                <View style={{ backgroundColor: "#D3E3F6", borderRadius: 30, justifyContent: 'center', alignItems: "center", height: 45, width: 45, padding: 4, marginEnd: 5, marginTop: 3 }}>
                    <Image source={item.avatar} style={styles.icon} />
                </View>
                <View style={styles.textContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.groupName}>{item.name}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                    {item.address && <Text style={{ color: 'black', fontSize: 10 }}>
                        <Text style={{ color: 'black', fontSize: 10, fontWeight: '600' }}>
                            Address:
                        </Text>
                        {item.address}
                    </Text>}
                    <Text style={styles.message}>
                        {item.message}
                    </Text>
                </View>

            </View>
            <View style={{ backgroundColor: '#A6BAD2', height: 0.5, marginStart: 15, marginEnd: 15 }} />
        </View>
    )
}
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 12
    },
    icon: {
        resizeMode: 'contain',
        position: 'absolute',
        width: 30,
        height: 30
    },
    textContainer: {
        flex: 1,
        marginTop: 6,
        marginStart: 3
    },
    groupName: {
        fontWeight: '700',
        fontSize: 12,
        fontFamily: 'Jost',
        color: "#000000"
    },
    time: {
        color: '#000000',
        marginBottom: 5,
        fontWeight: '700',
        fontSize: 9,
        fontFamily: 'Jost',
    },
    message: {
        fontSize: 12,
        fontFamily: 'Jost',
        fontWeight: '400',
        color: '#000000',
    },
    admin: {
        fontWeight: 'bold',
    },
});
export default DrawerFlatlistComponent;