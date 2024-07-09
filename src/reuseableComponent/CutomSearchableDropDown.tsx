import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet, LayoutChangeEvent } from 'react-native';

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  data: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, data, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const DropdownButton = useRef<TouchableOpacity>(null);

  const toggleDropdown = () => {
    if (visible) {
      setVisible(false);
    } else {
      DropdownButton.current?.measure((_fx, _fy, _w, h, _px, py) => {
        setDropdownTop(py + h);
        setVisible(true);
      });
    }
  };

  const renderItem = ({ item }: { item: DropdownItem }) => (
    <TouchableOpacity style={styles.item} onPress={() => { onSelect(item); setVisible(false); }}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity ref={DropdownButton} style={styles.button} onPress={toggleDropdown}>
        <Text>{label}</Text>
      </TouchableOpacity>
      {visible && (
        <Modal transparent visible={visible} animationType="none">
          <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)}>
            <View style={[styles.dropdown, { top: dropdownTop }]}>
              <FlatList 
                data={data} 
                renderItem={renderItem} 
                keyExtractor={(item, index) => index.toString()} 
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#ddd',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Dropdown;
