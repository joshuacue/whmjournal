import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageBackground,
  AppState,
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
import PinClass from '../../classes/Pin';
import {Col, Row, Grid} from 'react-native-easy-grid';

import MenuClass from '../../classes/Menu';
import MapClass from '../../classes/Map';
import ActionClass from '../../classes/Action';
import ListView from '../../classes/ListView';
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

export default class RemainsBehaviorAction extends Component {
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
    //User.setRecord(Bird.BIRD_BEHAVIOR, item); TODO record remains
    switch (item) {
      case 'PREDATED':
      case 'JET_WASH':
      case 'TRAPPED':
      case 'VORTEX':
      case 'STARVED':
      case 'ROADKILL':
      case 'DISEASED':
      case 'WINDOW_OR_FENCE':
        this.props.navigation.navigate(ListView.REMAINS_VIEW_NAME);
        break;
      case 'UNKNOWN':
        this.props.navigation.navigate(ActionClass.REMAINS_SUB_BEHAVIOR_NAME);
        break;
      default:
        this.props.navigation.navigate(ActionClass.REMAINS_SPECIFIC_NAME);
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
      this.props.navigation.navigate(MapClass.REMAINS_MAP_NAME);
    }
    pressLen = 0;
  }
  pressedHome() {
    this.props.navigation.navigate(MapClass.REMAINS_MAP_NAME);
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
                onPress={this.pressedKey.bind(this, 'PREDATED')}>
                <Text style={styles.keys}>PREDATED</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'JET_WASH')}>
                <Text style={styles.keys}>JET WASH</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'WITNESSED')}>
                <ImageBackground
                  style={styles.itemContainer}
                  source={require('../../../assets/images/Misc/Airplane.png')}>
                  <Text style={styles.keys}>WITNESSED</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'TRAPPED')}>
                <Text style={styles.keys}>TRAPPED</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'VORTEX')}>
                <Text style={styles.keys}>VORTEX</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'REPORTED')}>
                {/* <Text style={styles.keys}>REPORTED</Text> */}
                <ImageBackground
                  style={styles.itemContainer}
                  source={require('../../../assets/images/Misc/Airplane.png')}>
                  <Text style={styles.keys}>REPORTED</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'STARVED')}>
                <Text style={styles.keys}>STARVED</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'ROADKILL')}>
                <Text style={styles.keys}>ROADKILL</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'UNKNOWN')}>
                <Text style={styles.keys}>UNKNOWN</Text>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'DISEASED')}>
                <Text style={styles.keys}>DISEASED</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'WINDOW_OR_FENCE')}>
                <Text style={styles.keys}>WINDOW OR FENCE</Text>
              </TouchableHighlight>
            </Row>
            <Row style={{backgroundColor: '#151515'}}>
              <TouchableHighlight
                style={styles.itemContainer}
                onLongPress={() => {
                  this.props.navigation.navigate(MenuClass.NAME);
                }}
                onPress={() => {
                  this.props.navigation.navigate(MapClass.REMAINS_MAP_NAME);
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
