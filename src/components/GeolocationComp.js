import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';

export const GeolocationComp = ({onGetCurrentCords}) => {
  const [hasLocationPermission, setHasLocationPermission] = useState(true);
  // useEffect(() => {
  //   setModalVisible(showModal);
  // }, [showModal]);

  const getCurrentPosition = () => {
    if (hasLocationPermission) {
      console.log('Geolocation: ', Geolocation);
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('position: ', position);
          if (onGetCurrentCords && position) {
            onGetCurrentCords(position.coords);
          }
        },
        (error) => {
          // See error code charts below.
          console.log('error: ', error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };
  return (
    <View>
      <Text>Geolocation Demo</Text>
      <TouchableOpacity onPress={getCurrentPosition} style={styles.buttonStyle}>
        <Text>Get current position</Text>
      </TouchableOpacity>
    </View>
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
    width: '50%',
  },
});
