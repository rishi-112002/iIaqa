import { Image, StyleSheet, Text, View } from "react-native";

function HomeScreeenGroupsComponent(props: { item: any }) {
    const { item } = props
    return (
        <View style={styles.itemContainer}>
            <View style={{ backgroundColor: "#D3E3F6", borderRadius: 30, height: 50, width: 50, padding: 4 , marginEnd:5, marginTop:3}}>
                <Image source={item.icon} style={styles.icon} />
            </View>
            <View style={styles.textContainer}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
                    <Text style={styles.groupName}>{item.groupName}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
                <Text style={styles.message}>
          <Text style={styles.admin}>Admin: </Text>
          {item.message}
        </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
    },
    icon: {
        width: 25,
        height: 25,
        margin: 12,
        resizeMode: 'contain',
        position: 'absolute'
    },
    textContainer: {
        flex: 1,
    },
    groupName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#000000"
    },
    time: {
        color: '#000000',
        marginBottom: 5,
        fontWeight:'black',
        fontSize:10,
    },
    message: {
        fontSize:12,
        color: '#000000',
    },
    admin: {
        fontWeight: 'bold',
      },
});
export default HomeScreeenGroupsComponent;