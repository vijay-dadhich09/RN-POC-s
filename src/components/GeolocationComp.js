import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

const latLongData = [
  {
    id: 1,
    addressLines: ['27 Old Gloucester Street', 'London'],
    geometry: {
      location: {
        lat: 51.51952,
        lng: -0.12078,
      },
    },
    postCode: 'WC1N 3AX',
    countryCode: 'GBR',
    deliveryPointSuffix: '',
  },
  {
    id: 2,
    addressLines: ['Debenhams', '334-348 Oxford St', 'Marylebone', 'London'],
    geometry: {
      location: {
        lat: 51.515259,
        lng: -0.14213,
      },
    },
    postCode: 'W1C 1JG',
    countryCode: 'GBR',
    deliveryPointSuffix: '',
  },
  {
    id: 3,
    addressLines: ['42 Queen Square', 'Bloomsbury', 'London'],
    geometry: {
      location: {
        lat: 51.52187,
        lng: -0.12217,
      },
    },
    postCode: 'WC1N 3AQ',
    countryCode: 'GBR',
    deliveryPointSuffix: '',
  },
  {
    id: 4,
    addressLines: ['400 Oxford St', 'Bloomsbury', 'London'],
    geometry: {
      location: {
        lat: 51.514587,
        lng: -0.152839,
      },
    },
    postCode: 'W1A 1AB',
    countryCode: 'GBR',
    deliveryPointSuffix: '',
  },
  {
    id: 5,
    addressLines: ['1 Horner Square', 'London'],
    geometry: {
      location: {
        lat: 51.519794,
        lng: -0.075685,
      },
    },
    postCode: 'E1 6EW',
    countryCode: 'GBR',
    deliveryPointSuffix: '',
  },
  {
    id: 6,
    addressLines: ['24 Old Gloucester Street', 'London'],
    geometry: {
      location: {
        lat: 51.52024,
        lng: -0.12146,
      },
    },
    postCode: 'WC1N 3AL',
    countryCode: 'GBR',
    deliveryPointSuffix: '',
  },
  {
    id: 7,
    addressLines: ['8-11 Queen Square', 'Bloomsbury', 'London'],
    geometry: {
      location: {
        lat: 51.52127,
        lng: -0.12241,
      },
    },
    postCode: 'WC1N 3AR',
    countryCode: 'GBR',
    deliveryPointSuffix: '',
  },
  {
    id: 8,
    addressLines: ['23 Queen Square', 'London'],
    geometry: {
      location: {
        lat: 51.522163,
        lng: -0.122203,
      },
    },
    postCode: 'WC1N 3BG',
    countryCode: 'GBR',
    deliveryPointSuffix: '',
  },
  {
    id: 9,
    addressLines: ['57 Whitecross St', 'London'],
    geometry: {
      location: {
        lat: 51.5226,
        lng: -0.0927,
      },
    },
    postCode: 'EC1Y 8AA',
    countryCode: 'GBR',
    deliveryPointSuffix: '',
  },
  {
    id: 10,
    addressLines: ['1 Ropemaker St', 'London'],
    geometry: {
      location: {
        lat: 51.51968,
        lng: -0.08891,
      },
    },
    postCode: 'EC2Y 9AW',
    countryCode: 'GBR',
    deliveryPointSuffix: '',
  },
];
export const GeolocationComp = ({onGetCurrentCords, onDrawMarkers}) => {
  const [hasLocationPermission, setHasLocationPermission] = useState(true);
  const [searchValue, setSearchValue] = useState();
  useEffect(() => {
    Geocoder.init('XXXX');
  }, []);

  const getGeoLocation = (lat, long) => {
    const _lat = 26.83;
    const _long = 75.63;
    console.log('lat, long: ', lat, long);
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        _lat +
        ',' +
        _long +
        '&key=XXXX',
    )
      .then((response) => {
        const res = response.json();
        console.log('res: ', res);
        return res;
      })
      .then((responseJson) => {
        console.log(
          'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
        );
      })
      .catch((error) => {
        console.log('error: ', error);
      });

    Geocoder.from(lat, long)
      .then((json) => {
        console.log('json: ', json);
        // const addressComponent = json.results[0].address_components[0];
        // console.log('addressComponent:', addressComponent);
      })
      .catch((error) => console.log(error));
  };
  const getCurrentPosition = () => {
    Keyboard.dismiss();
    if (hasLocationPermission) {
      // console.log('Geolocation: ', Geolocation);
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('position: ', position);
          if (position) {
            const {latitude, longitude} = position.coords;
            const _latLongData = {
              id: 1,
              addressLines: ['118 Gerry Raffles Square, London E15 1BQ, UK'],
              geometry: {
                location: {
                  lat: latitude,
                  lng: longitude,
                },
              },
              postCode: 'E15 1BQ',
              countryCode: 'GBR',
              deliveryPointSuffix: '',
            };
            console.log('_latLongData:', _latLongData);
            if (onDrawMarkers) {
              onDrawMarkers([_latLongData]);
            }
            // getGeoLocation(latitude, longitude);
            // onGetCurrentCords(position.coords);
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
  const onDrawMarkersHandler = () => {
    Keyboard.dismiss();
    if (onDrawMarkers) {
      onDrawMarkers(latLongData);
    }
  };

  const onSearchChangeText = (_text) => {
    setSearchValue(_text);
  };

  const onSearchHandler = () => {
    Keyboard.dismiss();
    const searchResult = latLongData.find((item, index) => {
      return item.postCode === searchValue;
    });
    console.log('searchResult: ', searchResult);
    if (searchResult && onDrawMarkers) {
      onDrawMarkers([searchResult]);
    }
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={getCurrentPosition}
          style={styles.buttonStyle}>
          <Text>Get current position</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onDrawMarkersHandler}
          style={styles.buttonStyle}>
          <Text>Draw all markers</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInputText}
          onChangeText={(text) => onSearchChangeText(text)}
          value={searchValue}
          placeholder="Search by Post code"
        />
        <TouchableOpacity onPress={onSearchHandler} style={styles.buttonStyle}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '48%',
  },
  searchContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInputText: {
    height: 40,
    width: '48%',
    borderColor: 'gray',
    borderWidth: 1,
  },
});
