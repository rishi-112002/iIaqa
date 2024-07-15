import React from 'react';
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

function UserDetailModal(props: { visible: any, user: any, onClose: any }) {
    const { visible, user, onClose } = props;

    if (!user) return null;
    console.log("users data ", user);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.userHeader}>
                           {user.imagePath ? <Image source={{uri:user.imagePath}} style={styles.userImage} />:  <View style={{backgroundColor:'#E2E0E0' , height:60 , width:60 , borderRadius:30 , marginEnd:6}}/>}
                            <View style={styles.userDetails}>
                                <Text style={styles.userName}>{user.name}</Text>
                                <Text style={styles.userAddress}>{user.address}</Text>
                                <Text style={styles.userFlat}>Flat no - {user.flat}</Text>
                            </View>
                            <Image source={require("../../src/assests/images/likeBorder.png")} style={styles.likeIcon} />
                        </View>
                        <View style={styles.actionButtons}>
                            <TouchableOpacity style={styles.callButton}>
                                <Text style={styles.callButtonText}>Call</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.chatButton}>
                                <Text style={styles.chatButtonText}>Chat</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.userInfo}>Mobile</Text>
                            <Text style={styles.userInfoDetail}>{user.mobile}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.userInfo}>Address</Text>
                            <Text style={styles.userInfoDetail}>{user.address}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.userInfo}>Company</Text>
                            <Text style={styles.userInfoDetail}>{user.company}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.userInfo}>Occupation</Text>
                            <Text style={styles.userInfoDetail}>{user.occcupation}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.userInfo}>Blood Group</Text>
                            <Text style={styles.userInfoDetail}>{user.bloodGroup}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.userInfo}>Mutual Groups</Text>
                            <Text style={styles.userInfoDetail}>{user.mutualGroups}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalView: {
        width: "70%",
        margin: 10,
        backgroundColor: '#D7E1ED',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    userHeader: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginEnd: 10,
        marginTop: 3,
        marginBottom: 10,
    },
    userDetails: {
        flexDirection: 'column',
    },
    userName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        fontFamily: 'Jost',
    },
    userAddress: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000000',
        fontFamily: 'Jost',
    },
    userFlat: {
        fontSize: 12,
        fontWeight: '400',
        color: '#000000',
        fontFamily: 'Jost',
    },
    likeIcon: {
        width: 25,
        height: 25,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 20,
    },
    callButton: {
        backgroundColor: '#D9D9D9',
        paddingEnd: 30,
        paddingStart: 30,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 8,
    },
    callButtonText: {
        fontSize: 12,
        fontWeight: '300',
        color: '#000000',
        fontFamily: 'Jost',
    },
    chatButton: {
        backgroundColor: '#1D71D4',
        paddingEnd: 30,
        paddingStart: 30,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 8,
    },
    chatButtonText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FFFFFF',
        fontFamily: 'Jost',
    },
    infoRow: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: "95%",
        marginTop: 5,
    },
    userInfo: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Jost',
        fontWeight: '400',
        textAlign: "left",
    },
    userInfoDetail: {
        backgroundColor: '#FFFFFF',
        width: "100%",
        padding: 6,
        borderRadius: 6,
    },
});

export default UserDetailModal;
