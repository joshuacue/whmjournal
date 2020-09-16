/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {StyleSheet, View, Image, Text, TouchableHighlight,
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
import MenuClass from '../../classes/Menu';
import ActionClass from '../../classes/Action';
import User from '../../classes/User';
import API from '../../classes/API';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  icon: {
    width: normalize(80),
    height: normalize(80),
  },
  status: {
    color: '#fff',
    fontSize: normalize(15),
  },
  label: {
    color: '#797979',
    fontSize: normalize(15),
  },
});

export default class DispersalClear extends Component {
  constructor() {
    super();
    this.state = {};
    this.select = this.select.bind(this);
    //API.sendMessage('record',JSON.stringify(User.getRecord())); TODO save dispersal record
    //.clearRecord(); TODO clear dispersal
  }
  select() {
    //ActionClass.setDispersal(false);
    this.props.navigation.navigate(MenuClass.NAME);
  }
  render() {
    return (
      <TouchableHighlight onPress={this.select} style={styles.container}>
        <>
          <View style={styles.icon}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode={'cover'}
              source={require('../../../assets/images/Misc/Completion.png')}
            />
          </View>
          <View style={styles.message}>
            <Text style={styles.status}>
              {
                // ActionClass.isDispersal()?
                // 'DEPREDATION + DISPERSAL':
                'DISPERSAL'
              }
            </Text>
            <Text style={styles.label}>ADDED TO WATCH LOG</Text>
          </View>
        </>
      </TouchableHighlight>
    );
  }
}
