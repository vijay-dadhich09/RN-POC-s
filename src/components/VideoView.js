import PropTypes from 'prop-types';
import {requireNativeComponent, ViewPropTypes} from 'react-native';
var viewProps = {
  name: 'VideoView',
  propTypes: {
    url: PropTypes.string,
    ViewPropTypes,
  },
};
// var RCTVideoView = requireNativeComponent('VideoView', viewProps);
// export default RCTVideoView;
module.exports = requireNativeComponent('VideoView', viewProps);

// const RCTVideoView = requireNativeComponent('VideoView', VideoView, {});

// class VideoView extends React.PureComponent {
//   render() {
//     return <RCTVideoView {...this.props}/>
//   }
// }

// export default VideoView;
