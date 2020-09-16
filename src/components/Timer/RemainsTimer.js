import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  BackHandler,
  AppState,Dimensions, Platform, PixelRatio,
  ImageBackground
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
import MapClass from '../../classes/Map';
import DialerClass from '../../classes/Dialer';
import User from '../../classes/User';
import Bird from '../../classes/Bird';

const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  bgKeys: {
    fontFamily: 'malgun',
    fontSize: normalize(40),
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
  },
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
    fontSize: normalize(100),
    color: '#FF7F27',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  icons: {
    width: 400,
    height: 400,
    resizeMode: 'center',
  },
  timerIcons: {
    width: '100%',
    height: '100%',
  },
  timerIcons2: {
    width: '70%',
    height: '70%',
  },
});
let pressLen = 0;
let timer = null;

export default class RemainsTimer extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.pressedHome = this.pressedHome.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.pressIn = this.pressIn.bind(this);
    this.pressOut = this.pressOut.bind(this);
  }
  componentDidMount() {
    // AppState.addEventListener('change', (appState)=>{
    //   if (appState === 'active') {
    //     this.props.navigation.navigate(PinClass.NAME, {
    //       hasPin: true,
    //       confirm: false,
    //     });
    //   }
    // });
    Orientation.lockToLandscape();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    this.props.navigation.navigate(ActionClass.REMAINS_NAME);
    return true;
  }
  pressedKey(item) {
    //TODO switch case to capture Road Time and Previous Time.
    //TODO set time as timestamp - item
    //User.setRecord(Bird.BIRD_TIME, item); TODO  record remains
    this.props.navigation.navigate(MapClass.REMAINS_CLEAR_NAME);
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
      this.pressedHome();
    }
    pressLen = 0;
  }
  pressedHome() {
    // if(ActionClass.isDispersal())
    //   this.props.navigation.navigate(ActionClass.AIRFIELD_NAME);
    // else
    this.props.navigation.navigate(ActionClass.REMAINS_NAME);
  }
  pressedCustom() {
    this.props.navigation.navigate(DialerClass.REMAINS_TIMESTAMP_NAME);
  }
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 0)}>
                <Text style={styles.keys}>NOW</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 4 * 60)}>
                <ImageBackground
                  source={require(`../../../assets/images/Misc/Time_1.png`)}
                  style={styles.bg}>
                  <Text style={styles.bgKeys}>4</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedCustom.bind(this)}>
                <Image
                  style={styles.timerIcons2}
                  resizeMode={'cover'}
                  source={require('../../../assets/images/Misc/Time_Custom.png')}
                />
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 1 * 60)}>
                <ImageBackground
                  source={require(`../../../assets/images/Misc/Time_1.png`)}
                  style={styles.bg}>
                  <Text style={styles.bgKeys}>1</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 5 * 60)}>
                <ImageBackground
                  source={require(`../../../assets/images/Misc/Time_1.png`)}
                  style={styles.bg}>
                  <Text style={styles.bgKeys}>5</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 0)}>
                <Image
                  style={styles.timerIcons2}
                  resizeMode={'cover'}
                  source={require('../../../assets/images/Misc/Time_Previous.png')}
                />
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 2 * 60)}>
                <ImageBackground
                  source={require(`../../../assets/images/Misc/Time_1.png`)}
                  style={styles.bg}>
                  <Text style={styles.bgKeys}>2</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 10 * 60)}>
                <ImageBackground
                  source={require(`../../../assets/images/Misc/Time_1.png`)}
                  style={styles.bg}>
                  <Text style={styles.bgKeys}>10</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 0)}>
                <Image
                  style={styles.timerIcons2}
                  source={require('../../../assets/images/Misc/Time_Runway.png')}
                />
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 3 * 60)}>
                <ImageBackground
                  source={require(`../../../assets/images/Misc/Time_1.png`)}
                  style={styles.bg}>
                  <Text style={styles.bgKeys}>3</Text>
                </ImageBackground>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 15 * 60)}>
                <ImageBackground
                  source={require(`../../../assets/images/Misc/Time_1.png`)}
                  style={styles.bg}>
                  <Text style={styles.bgKeys}>15</Text>
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
                  this.pressedHome();
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
