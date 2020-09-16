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
import ActionClass from '../../classes/Action';
import TimerClass from '../../classes/Timer';
import User from '../../classes/User';
import Bird from '../../classes/Bird';

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
    fontSize: normalize(15),
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  value: {
    fontSize: normalize(80),
    color: '#FF7F27',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  itemContainerLabel: {
    fontSize: normalize(80),
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

export default class DispersalBehaviorAction extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.clear = this.clear.bind(this);
    this.pressedHome = this.pressedHome.bind(this);
    this.pressIn = this.pressIn.bind(this);
    this.pressOut = this.pressOut.bind(this);
  }
  pressedKey(item) {
    //User.setRecord(Bird.BIRD_BEHAVIOR, item); TODO record dispersal
    switch (item) {
      default:
        this.props.navigation.navigate(ActionClass.DISPERSAL_SUB_BEHAVIOR_NAME);
        break;
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
      this.props.navigation.navigate(ActionClass.DISPERSAL_NAME);
    }
    pressLen = 0;
  }
  pressedHome() {
    this.props.navigation.navigate(ActionClass.DISPERSAL_NAME);
  }
  clear() {
    this.setState({
      value: '',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'FEEDING')}>
                <Text style={styles.keys}>FEEDING</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'DRINKING')}>
                <Text style={styles.keys}>DRINKING</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'ROOSTING')}>
                <Text style={styles.keys}>ROOSTING</Text>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'SOARING')}>
                <Text style={styles.keys}>SOARING</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'BATHING')}>
                <Text style={styles.keys}>BATHING</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'NESTING')}>
                <Text style={styles.keys}>NESTING</Text>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'FLYING WITHIN')}>
                <Text style={styles.keys}>FLYING WITHIN</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'LOAFING')}>
                <Text style={styles.keys}>LOAFING</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'INJURED')}>
                <Text style={styles.keys}>INJURED</Text>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'FLYING OVER')}>
                <Text style={styles.keys}>FLYING OVER</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'STAGING')}>
                <Text style={styles.keys}>STAGING</Text>
              </TouchableHighlight>
            </Row>
            <Row style={{backgroundColor: '#151515'}}>
              <TouchableHighlight
                style={styles.itemContainer}
                onLongPress={() => {
                  this.props.navigation.navigate(MenuClass.NAME);
                }}
                onPress={() => {
                  this.props.navigation.navigate(ActionClass.DISPERSAL_NAME);
                }}>
                <Image
                  style={styles.icons}
                  source={require('../../../assets/images/Misc/Backward.png')}
                />
              </TouchableHighlight>
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}
