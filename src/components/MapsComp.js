import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; //
// import Geolocation from 'react-native-geolocation-service';

export const MapsComp = ({coords}) => {
  // const [coordinates, setCoordinates] = useState({
  //   latitude: 20.593683, //37.78825,
  //   longitude: 78.962883, // -122.4324,
  // });
  const [coordinates, setCoordinates] = useState(null);
  const refMapView = useRef();
  useEffect(() => {
    if (coords) {
      setCoordinates(coords);
    }
  }, [coords]);

  useEffect(() => {
    console.log('coordinates: ', coordinates);
    if (refMapView && refMapView.current) {
      refMapView.current.fitToElements(true);
    }
  }, [coordinates]);

  return (
    <View style={styles.container}>
      <MapView
        ref={refMapView}
        onMapReady={() => refMapView.current.fitToElements(true)}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        // region={{
        //   latitude: 37.78825, //coordinates.latitude,
        //   longitude: -122.4324, //coordinates.longitude,
        //   latitudeDelta: 0.015,
        //   longitudeDelta: 0.0121,
        // }}
      >
        {coordinates && (
          <Marker
            key={1}
            coordinate={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
            }}
            title={'Omaxe City'}
            description={'Omaxe Executive homes'}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    // width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    marginTop: 60,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
