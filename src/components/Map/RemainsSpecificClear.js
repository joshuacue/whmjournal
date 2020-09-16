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
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    marginTop: 200,
  },
  container2: {
    alignItems: 'center',
    width: '100%',
    height: 80,
    backgroundColor: '#151515',
    marginBottom: 200,
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
    marginLeft: 20,
  },
  label2: {
    marginTop: 2,
    color: '#FF7F27',
    fontSize: normalize(15),
  },
});

export default class RemainsSpecificClear extends Component {
  constructor() {
    super();
    this.state = {};
    this.select = this.select.bind(this);
    //API.sendMessage('record',JSON.stringify(User.getRecord())); TODO save remains record
    //.clearRecord(); TODO clear remains
  }
  select() {
    //ActionClass.setDispersal(false);
    this.props.navigation.navigate(MenuClass.NAME);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableHighlight onPress={this.select} style={styles.container}>
          <>
            <View style={styles.icon}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                }}
                resizeMode={'cover'}
                source={require('../../../assets/images/Misc/Airplane_Active.png')}
              />
            </View>
            <View style={styles.message}>
              <Text style={styles.status}>
                {
                  // ActionClass.isDispersal()?
                  // 'DEPREDATION + DISPERSAL':
                  'STRIKE EVENT'
                }
              </Text>
              <Text style={styles.label}>PENDING COMPLETION</Text>
            </View>
          </>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.select} style={styles.container2}>
          <>
            <View style={styles.message}>
              <Text style={styles.label2}>TAP SCREEN TO ENTER FORM</Text>
            </View>
          </>
        </TouchableHighlight>
        {/* <TouchableHighlight onPress={this.select} style={styles.container2}>
          <>
            <View style={styles.message}>
              <Text style={styles.label2}>TAP SCREEN TO ENTER FORM</Text>
            </View>
          </>
        </TouchableHighlight> */}
      </View>
    );
  }
}
