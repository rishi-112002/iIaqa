import { Modal, TouchableWithoutFeedback, View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

function CustomModalForSearchBar(props: { showOptions: any, setShowOption: any, searchQuery: any, onPress: any, options: any }) {
    const { showOptions, setShowOption, searchQuery, onPress, options } = props
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showOptions}
            onRequestClose={() => setShowOption(false)}
        >
            <TouchableWithoutFeedback onPress={() => setShowOption(false)}>
                <View style={styles.modalBackground}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContainer}>
                            <FlatList
                                data={options.filter((option: string) => option.toLowerCase().includes(searchQuery.toLowerCase()))}
                                keyExtractor={(_item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={onPress}
                                        style={styles.chip}
                                    >
                                        <View style={styles.chipContent}>
                                            <Image source={require("../../src/assests/images/announcment.png")} style={styles.chipIcon} />
                                            <Text style={styles.chipText}>
                                                {item}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                             contentContainerStyle={{
                                flexDirection:'row'
                             }}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )

}
const styles = StyleSheet.create({

    modalBackground: {
        flex: 1,
        marginTop: 70,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '90%',
        maxHeight: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
    },
    chip: {
        marginBottom: 10,
        height: 24,
        borderRadius: 8,
        padding: 6,
        width: 'auto',
        backgroundColor: '#DBE3EC',
        elevation: 1,
    },
    chipContent: {
        flexDirection: "row",
    },
    chipIcon: {
        height: 14,
        width: 12,
        marginEnd: 3,
    },
    chipText: {
        fontFamily: 'Karla',
        fontSize: 10,
        fontWeight: '400',
        alignSelf: "center",
    },
});
export default CustomModalForSearchBar;