import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {StyleSheet, Text, View, TouchableHighlight, Image,
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
import {Col, Row, Grid} from 'react-native-easy-grid';

import MenuClass from '../../classes/Menu';
import User from '../../classes/User';
import MapClass from '../../classes/Map';
import TimerClass from '../../classes/Timer';

const maxInput = 4;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    fontFamily: 'malgun',
    alignItems: 'center',
  },
  itemContainer: {
    width: '90%',
    height: '90%',
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemHomeContainer: {
    width: '190%',
    height: '90%',
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keys: {
    fontFamily: 'malgun',
    fontSize: normalize(30),
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  value: {
    fontSize: normalize(20),
    color: '#FF7F27',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  itemContainerLabel: {
    fontSize: normalize(20),
    color: '#797979',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  icons: {
    width: 400,
    height: 400,
    resizeMode: 'center',
  },
});
let pressLen = 0;
let timer = null;

export default class Timestamp extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.clear = this.clear.bind(this);
    this.pressedHome = this.pressedHome.bind(this);
    this.pressedValue = this.pressedValue.bind(this);
    this.renderTime = this.renderTime.bind(this);
    this.pressIn = this.pressIn.bind(this);
    this.pressOut = this.pressOut.bind(this);
  }
  pressedKey(item) {
    let value = this.state.value;
    if (value.length < maxInput) {
      let isContinue = false;
      if (value.length == 0 && parseInt(item) < 3) isContinue = true;
      if (value.length == 1 && value[0] == 2 && parseInt(item) < 4)
        isContinue = true;
      if (value.length == 1 && value[0] != 2) isContinue = true;
      if (value.length == 2 && parseInt(item) < 6) isContinue = true;
      if (value.length == 3 && parseInt(item)) isContinue = true;
      if (isContinue) {
        value = value + '' + item;
        this.setState({
          value,
        });
      }
    }
  }
  pressedValue() {
    if (this.state.value.length > 0) {
      User.setAreaClear(
        TimerClass.AREA,
        parseInt(this.state.value[0] + this.state.value[1]) * 3600 +
          parseInt(this.state.value[2] + this.state.value[3]) * 60,
      );
      this.props.navigation.navigate(MapClass.AREA_CLEAR_NAME);
    }
  }
  pressIn() {
    timer = setInterval(() => {
      pressLen++;
    }, 50);
  }
  pressOut() {
    clearInterval(timer);
    if (pressLen > 6) {
      this.props.navigation.navigate(MenuClass.NAME);
    } else {
      this.props.navigation.navigate(MapClass.AREA_MAP_NAME);
    }
    pressLen = 0;
  }
  pressedHome() {
    this.props.navigation.navigate(MapClass.AREA_MAP_NAME);
  }
  clear() {
    this.setState({
      value: '',
    });
  }
  renderTime(time) {
    let value = '';
    switch (time.length) {
      case 1:
        value = time[0] + 'H:MM';
        break;
      case 2:
        value = time[0] + time[1] + ':MM';
        break;
      case 3:
        value = time[0] + time[1] + ':' + time[2] + 'M';
        break;
      case 4:
        value = time[0] + time[1] + ':' + time[2] + time[3];
        break;
    }
    return value;
  }
  render() {
    let hasValue = this.state.value.length > 0;
    let time = this.renderTime(this.state.value);
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 1)}>
                <Text style={styles.keys}>1</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 5)}>
                <Text style={styles.keys}>5</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 9)}>
                <Text style={styles.keys}>9</Text>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 2)}>
                <Text style={styles.keys}>2</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 6)}>
                <Text style={styles.keys}>6</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 0)}>
                <Text style={styles.keys}>0</Text>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 3)}>
                <Text style={styles.keys}>3</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 7)}>
                <Text style={styles.keys}>7</Text>
              </TouchableHighlight>
            </Row>
            {hasValue ? (
              <Row>
                <TouchableHighlight
                  style={styles.itemContainer}
                  onPress={this.pressedValue}>
                  <Text style={styles.value}>{time}</Text>
                </TouchableHighlight>
              </Row>
            ) : (
              <Row>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemContainerLabel}>HH:MM</Text>
                </View>
              </Row>
            )}
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 4)}>
                <Text style={styles.keys}>4</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 8)}>
                <Text style={styles.keys}>8</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              {hasValue ? (
                <TouchableHighlight
                  style={styles.itemContainer}
                  onPress={this.clear}>
                  <Image
                    style={styles.icons}
                    source={require('../../../assets/images/Misc/Trash.png')}
                  />
                </TouchableHighlight>
              ) : (
                <TouchableHighlight
                  style={styles.itemContainer}
                  onLongPress={() => {
                    this.props.navigation.navigate(MenuClass.NAME);
                  }}
                  onPress={() => {
                    this.props.navigation.navigate(MapClass.AREA_MAP_NAME);
                  }}>
                  <Image
                    style={styles.icons}
                    source={require('../../../assets/images/Misc/Backward.png')}
                  />
                </TouchableHighlight>
              )}
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}
