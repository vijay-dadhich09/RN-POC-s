import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import VideoView from './src/components/VideoView';
import {
  Header,
  Colors
} from 'react-native/Libraries/NewAppScreen';
export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <View 
          style={{ flex: 1 }}>
          
          <VideoView style={{ width: '100%', height: '50%' }}       
            url="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" 
          /> 
          {/* <Header /> */}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
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
});