import React, {Component} from 'react';
import {Image,
  Dimensions, Platform, PixelRatio
} from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
import FitImage from 'react-native-fit-image';

export default class CustomImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!this.props.source) return null;
    //TODO REMOVE WHEN DONE TESTING
    return <FitImage resizeMode="cover" source={this.props.source} style={{
        width: normalize(125),
        height: normalize(120)

    }} />;
    return <Image source={{uri: this.props.source}} style={{
      width: normalize(80),
      height: normalize(65)
  }} />;
  }
}
