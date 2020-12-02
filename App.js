import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import VideoView from './src/components/VideoView';
import BlobView from './src/components/BlobView';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
export default class App extends Component {
  constructor() {
    super();
    this.state = {isOn: false};
  }
  onStatusChange = (e) => {
    console.log('callback-isOn...: ', e.nativeEvent.isOn);
    this.setState({isOn: e.nativeEvent.isOn});
  };

  render() {
    const {isOn} = this.state;
    console.log('isOn: ', isOn);
    return (
      <>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text>This state of Bulb come from Native Code to JavaScript</Text>
            <Text style={styles.textStyle}>
              {this.state.isOn ? 'Bulb is On' : 'Bulb is Off'}
            </Text>
          </View>
          {/* <VideoView
            style={{width: '100%', height: '50%'}}
            url="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" 
          /> */}
          {/* <Header /> */}
          <BlobView
            style={styles.bottom}
            isOn={isOn}
            onStatusChange={this.onStatusChange}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '800',
  },
});
