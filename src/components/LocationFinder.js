import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
import {GeolocationComp} from './GeolocationComp';
import {MapsComp} from './MapsComp';
import {DismissKeyboard} from './DismissKeyboard';

export const LocationFinder = () => {
  const [markersData, setMarkersData] = useState(null);

  const onDrawMarkers = (_markersData) => {
    setMarkersData(_markersData);
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <GeolocationComp onDrawMarkers={onDrawMarkers} />
        <MapsComp markersData={markersData} />
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: '100%',
  },
});
