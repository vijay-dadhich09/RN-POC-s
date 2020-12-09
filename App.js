/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SignatureScreen} from './src/components/SignatureScreen';
import {ModalDialog} from './src/components/ModalDialog';
import {LocationFinder} from './src/components/LocationFinder';

const App: () => React$Node = () => {
  const [showModal, setShowModal] = React.useState(false);

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.signatureButtonContainer}>
            <TouchableOpacity onPress={onOpenModal} style={styles.buttonStyle}>
              <Text>Digital Signature</Text>
            </TouchableOpacity>
          </View>
          <LocationFinder />
        </ScrollView>
        <ModalDialog showModal={showModal} onCloseModal={onCloseModal}>
          <SignatureScreen />
        </ModalDialog>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    // flex: 1,
    // backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  signatureButtonContainer: {
    marginTop: 20,
    // width: '100%',
    // backgroundColor: '#ff0000',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
  },
});

export default App;
