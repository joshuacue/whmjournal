import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageBackground,
  AppState,Dimensions, Platform, PixelRatio
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
import ActionClass from '../../classes/Action';
import DialerClass from '../../classes/Dialer';
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
    fontSize: normalize(20),
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

export default class DepredationSubBehaviorAction extends Component {
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
    User.setRecord(Bird.BIRD_NON_LETHAL, item);
    switch (item) {
      case 'BLANK_ROUND':
      case 'BIRD_SCARING_CARTRIDGE':
      case 'MISSED_SHOTGUN_CARTRIDGE':
      case 'MISSED_RIFLE_ROUND':
        this.props.navigation.navigate(
          DialerClass.DEPREDATION_SUB_BEHAVIOR_NAME,
        );
        break;
      default:
        this.props.navigation.navigate(ActionClass.DISPERSAL_MENU_NAME);
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
      this.props.navigation.navigate(ActionClass.LOAFING_NAME);
    }
    pressLen = 0;
  }
  pressedHome() {
    this.props.navigation.navigate(ActionClass.LOAFING_NAME);
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
                onPress={this.pressedKey.bind(this, 'VEHICLE')}>
                <ImageBackground
                  style={styles.itemContainer}
                  source={null}
                  //require('../../../assets/images/Screen_Avian/Avian_Area_Clear2.png')
                >
                  <Text style={styles.keys}>VEHICLE</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'AIR_HORN')}>
                <ImageBackground style={styles.itemContainer} source={null}>
                  <Text style={styles.keys}>AIR HORN</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'BIRD_SCARING_CARTRIDGE')}>
                <ImageBackground style={styles.itemContainer} source={null}>
                  <Text style={styles.keys}>BIRD SCARING CARTRIDGE</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'OPERATOR')}>
                <ImageBackground style={styles.itemContainer} source={null}>
                  <Text style={styles.keys}>OPERATOR</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'AUDIBLE_TONE')}>
                <ImageBackground style={styles.itemContainer} source={null}>
                  <Text style={styles.keys}>AUDIBLE TONE</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(
                  this,
                  'MISSED_SHOTGUN_CARTRIDGE',
                )}>
                <ImageBackground style={styles.itemContainer} source={null}>
                  <Text style={styles.keys}>MISSED SHOTGUN CARTRIDGE</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'LASER')}>
                <ImageBackground style={styles.itemContainer} source={null}>
                  <Text style={styles.keys}>LASER</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'DISTRESS_CALL')}>
                <ImageBackground style={styles.itemContainer} source={null}>
                  <Text style={styles.keys}>DISTRESS CALL</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'MISSED_RIFLE_ROUND')}>
                <ImageBackground style={styles.itemContainer} source={null}>
                  <Text style={styles.keys}>MISSED RIFLE ROUND</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'DECOY')}>
                <ImageBackground style={styles.itemContainer} source={null}>
                  <Text style={styles.keys}>DECOY</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'BLANK_ROUND')}>
                <ImageBackground style={styles.itemContainer} source={null}>
                  <Text style={styles.keys}>BLANK ROUND</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row style={{backgroundColor: '#151515'}}>
              <TouchableHighlight
                style={styles.itemContainer}
                onLongPress={() => {
                  this.props.navigation.navigate(MenuClass.NAME);
                }}
                onPress={() => {
                  this.props.navigation.navigate(ActionClass.LOAFING_NAME);
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
