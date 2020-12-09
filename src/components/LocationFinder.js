import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; //
// import Geolocation from 'react-native-geolocation-service';
import {GeolocationComp} from './GeolocationComp';
import {MapsComp} from './MapsComp';

export const LocationFinder = () => {
  const [coords, setCoords] = useState(null);
  // useEffect(() => {
  //   setModalVisible(showModal);
  // }, [showModal]);

  const onGetCurrentCords = (_coords) => {
    console.log('coords: ', _coords);
    setCoords(_coords);
  };

  return (
    <View style={styles.container}>
      <GeolocationComp onGetCurrentCords={onGetCurrentCords} />
      <MapsComp coords={coords} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    // flex: 1,
    height: 400,
    // backgroundColor: '#ff0000',
    borderWidth: 1,
    borderColor: '#ff0000',
  },
});
