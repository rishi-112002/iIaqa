import React, { useState } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import UserDetailModal from './UsersModalComponent';
function ImageComponent(props: { item: any }) {
  const { item } = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.imageContainer}>
         {item.imagePath ? <Image source={{uri:item.imagePath}} style={styles.image} /> : <View style={{backgroundColor:'#E2E0E0' , height:60 , width:60 , borderRadius:30 , marginEnd:6}}/>} 
        </View>
      </TouchableOpacity>
      <UserDetailModal 
        visible={modalVisible} 
        user={item} 
        onClose={() => setModalVisible(false)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginEnd:6
  },
});

export default ImageComponent;