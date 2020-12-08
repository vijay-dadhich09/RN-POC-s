import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Signature from 'react-native-signature-canvas';

export const SignatureScreen = () => {
  const [signature, setSign] = useState(null);

  const handleSignature = (_signature) => {
    // console.log('_signature: ', _signature);
    setSign(_signature);
  };

  const handleEmpty = () => {
    console.log('Empty.....');
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: #2980B9;
      color: #F2F3F4;
    }`;
  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        <Text style={styles.titleStyle}>Preview</Text>
        <View style={styles.preview}>
          {signature ? (
            <Image
              resizeMode={'contain'}
              style={styles.imageStyle}
              source={{uri: signature}}
            />
          ) : null}
        </View>
      </View>
      <View style={styles.signatureContainer}>
        <Text style={styles.titleStyle}>Digital Signature</Text>
        <Signature
          onOK={handleSignature}
          onEmpty={handleEmpty}
          descriptionText=""
          clearText="Clear"
          confirmText="Save"
          autoClear={true}
          penColor="blue"
          webStyle={style}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  previewContainer: {
    flex: 0.5,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  preview: {
    width: '100%',
    height: 200,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  previewText: {
    color: '#FFF',
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#69B2FF',
    width: 120,
    textAlign: 'center',
    marginTop: 10,
  },
  signatureContainer: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  titleStyle: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#566573',
  },
});
