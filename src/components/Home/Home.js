/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableHighlight,
  StatusBar,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  logoContainer: {
    marginTop: '4%',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: '100%',
    height: '43%',
  },
  interactionContainer: {
    width: '95%',
    height: '35%',
  },
  textContainer: {
    width: '96%',
    height: '29%',
    margin: '2%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    height: '27%',
    padding: '1%',
    paddingBottom: '2%',
  },
  button: {
    width: '100%',
    height: '40%',
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 17,
  },
  buttonText: {
    fontSize: normalize(15),
    color: '#FFF',
    fontFamily: 'malgun',
  },
  intro: {
    fontSize: normalize(40),
    color: '#000',
    marginTop: '8%',
    fontFamily: 'malgun',
  },
  message: {
    fontSize: normalize(25),
    color: '#000',
    textAlign: 'center',
    fontFamily: 'malgun',
    margin: 7,
  },
});

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.logoContainer}>
          <Image
            style={{
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined,
            }}
            resizeMode={'contain'}
            source={require('../../../assets/images/Misc/Logo.png')}
          />
        </View>
        <View style={styles.interactionContainer}></View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}
            underlayColor="#202020">
            <Text style={[styles.buttonText]}>Initialise WhmJournal</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
