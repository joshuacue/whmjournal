import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  BackHandler,
  AppState, Dimensions, Platform, PixelRatio
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
import TimerClass from '../../classes/Timer';
import ListViewClass from '../../classes/ListView';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    fontFamily: 'malgun',
    alignItems: 'center',
    margin: 0,
    left: 0,
    right: 0,
  },
  itemMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    //paddingTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    fontSize: normalize(30),
    color: '#fff',
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

export default class AirfieldAction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goBack = this.goBack.bind(this);
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
    this.props.navigation.navigate(ActionClass.NAME);
    return true;
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
      this.props.navigation.navigate(ActionClass.NAME);
    }
    pressLen = 0;
  }
  goBack() {
    this.props.navigation.navigate(ActionClass.NAME);
  }
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Row>
            <TouchableHighlight
              style={styles.itemMenuContainer}
              onPress={() => {
                this.props.navigation.navigate(ActionClass.RELOCATION_NAME);
              }}>
              <Text style={styles.item}>RELOCATED ON AIRFIELD</Text>
            </TouchableHighlight>
          </Row>
          <Row>
            <TouchableHighlight
              style={styles.itemMenuContainer}
              onPress={() => {
                this.props.navigation.navigate(ActionClass.LOCATION_NAME);
              }}>
              <Text style={styles.item}>VACATED AIRFIELD</Text>
            </TouchableHighlight>
          </Row>
          <Row style={{backgroundColor: '#151515'}}>
            <Col style={{backgroundColor: '#151515'}}>
              <Row style={{backgroundColor: '#151515'}}>
                <View
                  style={{
                    ...styles.itemMenuContainer,
                    backgroundColor: '#000',
                  }}>
                  <Text style={styles.item}></Text>
                </View>
              </Row>
            </Col>
            <Col
              style={{
                width: '25%',
                backgroundColor: '#151515',
              }}>
              <Row style={{backgroundColor: '#151515'}}>
                <TouchableHighlight
                  style={{
                    ...styles.itemMenuContainer,
                    backgroundColor: '#151515',
                  }}
                  onLongPress={() => {
                    this.props.navigation.navigate(MenuClass.NAME);
                  }}
                  onPress={() => {
                    this.props.navigation.navigate(ActionClass.NAME);
                  }}>
                  <Image
                    style={styles.icons}
                    source={require('../../../assets/images/Misc/Backward.png')}
                  />
                </TouchableHighlight>
              </Row>
            </Col>
          </Row>
        </Grid>
      </View>
    );
  }
}
