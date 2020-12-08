import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';

export const ModalDialog = ({children, showModal, onCloseModal}) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(showModal);
  }, [showModal]);
  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has now been closed.');
      }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              setModalVisible(!modalVisible);
              if (onCloseModal) {
                onCloseModal();
              }
            }}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 60,
  },
});
