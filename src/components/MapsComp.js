import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; //
// import Geolocation from 'react-native-geolocation-service';

const _latLngArray = [];
export const MapsComp = (props) => {
  const [markersData, setMarkersData] = useState(null);
  const [latLngArray, setLatLngArray] = useState([]);
  // Set your initialRegion
  const [region, setRegion] = useState({
    latitude: 51.507877,
    longitude: -0.087732,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const refMapView = useRef();

  useEffect(() => {
    if (props.markersData) {
      setMarkersData(props.markersData);
    }
  }, [props.markersData]);

  useEffect(() => {
    if (refMapView && refMapView.current) {
      // setLatLngArray(_latLngArray);
      refMapView.current.fitToElements(true);
    }
  }, [markersData]);

  // Call fitToSuppliedMarkers() method on the MapView after markers get updated
  // useEffect(() => {
  //   if (markersData && refMapView.current) {
  //     // list of _id's must same that has been provided to the identifier props of the Marker
  //     refMapView.current.fitToSuppliedMarkers(
  //       markersData.map(({id}) => id),
  //       {
  //         edgePadding: {
  //           bottom: 200,
  //           right: 50,
  //           top: 150,
  //           left: 50,
  //         },
  //         animated: true,
  //       },
  //     );
  //   }
  // }, [markersData]);

  const renderMarkers = () => {
    if (!markersData) {
      return null;
    }
    const _latLngArray = [];
    const markers = markersData.map((item, index) => {
      const lat = item.geometry.location.lat;
      const lng = item.geometry.location.lng;
      _latLngArray[index] = {
        latitude: lat,
        longitude: lng,
      };
      const title = 'Address:';
      const address = `${item.addressLines[0]} ${item.postCode} ${item.countryCode}`;
      return (
        <Marker
          key={item.id}
          coordinate={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          title={title}
          description={address}
        />
      );
    });
    return markers;
  };

  const showMarkers = (_region) => {
    let zoom = Math.round(Math.log(360 / _region.longitudeDelta) / Math.LN2);
    console.log('_region: ', _region);
    // _region.longitudeDelta = 1;
    // _region.latitudeDelta = 1;
    console.log('zoom: ', zoom);
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={refMapView}
        // onMapReady={() => {
        //   this.map.fitToSuppliedMarkers(['mk1', 'mk2'], {
        //     edgePadding: {top: 50, right: 50, bottom: 50, left: 50},

        // })
        // onMapReady={() => {
        //   refMapView.current.fitToSuppliedMarkers(['1'], {
        //     edgePadding: {
        //       top: 50,
        //       right: 50,
        //       bottom: 50,
        //       left: 50,
        //       // animated: true,
        //     },
        //   });
        // }}
        // onLayout={() =>
        //   refMapView.current.fitToCoordinates(latLngArray, {
        //     edgePadding: {top: 10, right: 10, bottom: 10, left: 10},
        //     animated: true,
        //   })
        // }
        // onMapReady={() => refMapView.current.fitToElements(true)}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={region}
        region={region}
        // onRegionChange={(_region) => {
        //   clearTimeout(this.timerForMap);
        //   this.timerForMap = setTimeout(() => {
        //     showMarkers(_region);
        //   }, 100);
        // }}
        // region={{
        //   latitude: 37.78825, //coordinates.latitude,
        //   longitude: -122.4324, //coordinates.longitude,
        //   latitudeDelta: 0.015,
        //   longitudeDelta: 0.0121,
        // }}
      >
        {renderMarkers()}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    marginTop: 100,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
