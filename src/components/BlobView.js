import {requireNativeComponent, NativeModules} from 'react-native';
// var viewProps = {
//   name: 'VideoView',
//   propTypes: {
//     url: PropTypes.string,
//     ViewPropTypes,
//   }
// }
// var RCTVideoView = requireNativeComponent('VideoView', viewProps);
// export default RCTVideoView;
// module.exports = requireNativeComponent('VideoView', viewProps);

// const BulbView = requireNativeComponent('Bulb');
// console.log('BulbView::', BulbView);
// export default BulbView;
let BulbView = null;
if ('Bulb' in NativeModules.UIManager) {
  BulbView = requireNativeComponent('Bulb');
}
console.log('BulbView::', BulbView);
export default BulbView;
