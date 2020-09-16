import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import FontAwesome, {parseIconFromClassName} from 'react-native-fontawesome';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  BackHandler,
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
import ActionClass from '../../classes/Action';
import MapClass from '../../classes/Map';
import TimerClass from '../../classes/Timer';
import ListViewClass from '../../classes/ListView';
import User from '../../classes/User';
import Bird from '../../classes/Bird';
import Audio from '../../classes/Audio';
import Sound from 'react-native-sound';

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
  barWrapper: {
    width: '60%',
    height: 100,
    backgroundColor: '#ccc',
  },
  bar: {
    width: '60%',
    height: 100,
    backgroundColor: '#FF7F27',
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

export default class AudioPlayAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
      progress: 0,
    };
    this.goBack = this.goBack.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.pressIn = this.pressIn.bind(this);
    this.pressOut = this.pressOut.bind(this);
    this.audio = null;
    this.stateHandler = null;
  }
  componentDidMount() {
    Orientation.lockToLandscape();
    this.audio = Audio.getAudio();
    this.sound = new Sound(this.audio.fileName, Sound.MAIN_BUNDLE, error => {
      if (error) {
        alert(JSON.stringify(error));
        return;
      }
      this.interval = setInterval(() => {
        this.sound.getCurrentTime(seconds => {
          this.setState(
            {progress: ((seconds / this.sound.getDuration()) * 100).toFixed(0)},
            () => {
              if (this.interval && this.state.progress >= 100)
                clearInterval(this.interval);
            },
          );
        });
      }, 200);
      this.sound.play(success => {
        if (!success) {
          alert('Sound did not play');
        }
      });
    });
    this.stateHandler = appState => {
      this.sound.stop();
      if (appState === 'active') {
        if (this.interval) clearInterval(this.interval);
        this.props.navigation.navigate(PinClass.NAME, {
          hasPin: true,
          confirm: false,
        });
      }
    };
    AppState.addEventListener('change', this.stateHandler);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
    this.sound.stop();
    AppState.removeEventListener('change', this.stateHandler);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton() {
    this.sound.stop();
    this.props.navigation.navigate(ListViewClass.AUDIO_VIEW_NAME);
    return true;
  }
  pressIn() {
    timer = setInterval(() => {
      pressLen++;
    }, 50);
  }
  pressOut() {
    clearInterval(timer);
    this.sound.stop();
    if (pressLen > 6) {
      this.props.navigation.navigate(MenuClass.NAME);
    } else {
      this.props.navigation.navigate(ListViewClass.AUDIO_VIEW_NAME);
    }
    pressLen = 0;
  }
  goBack() {
    this.sound.stop();
    this.props.navigation.navigate(ListViewClass.AUDIO_VIEW_NAME);
  }
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Row>
            <TouchableHighlight
              style={styles.itemMenuContainer}
              onPress={() => {}}>
              <Text style={styles.item}>
                {this.audio ? this.audio.fileName : null}
              </Text>
            </TouchableHighlight>
          </Row>
          <Row>
            <View style={styles.itemMenuContainer}>
              <View style={styles.barWrapper}>
                <View
                  style={{
                    ...styles.bar,
                    width: this.state.progress + '%',
                  }}></View>
              </View>
            </View>
          </Row>
          <Row style={{backgroundColor: '#151515'}}>
            <Col
              style={{
                width: '25%',
                backgroundColor: '#151515',
              }}>
              <Row style={{backgroundColor: '#151515'}}>
                <TouchableHighlight
                  style={{
                    ...styles.itemMenuContainer,
                    backgroundColor: '#000',
                  }}
                  onLongPress={() => {
                    this.props.navigation.navigate(MenuClass.NAME);
                  }}
                  onPress={() => {
                    this.props.navigation.navigate(
                      ListViewClass.AUDIO_VIEW_NAME,
                    );
                  }}>
                  <FontAwesome
                    style={{...styles.item}}
                    icon={parseIconFromClassName('fa fa-music')}
                  />
                </TouchableHighlight>
              </Row>
            </Col>
            <Col style={{backgroundColor: '#151515'}}>
              <Row style={{backgroundColor: '#151515'}}>
                <TouchableHighlight
                  underlayColor="#151515"
                  style={{
                    ...styles.itemMenuContainer,
                    backgroundColor: '#000',
                  }}
                  onPress={() => {
                    this.sound.stop();
                    this.props.navigation.navigate(MapClass.AUDIO_MAP_NAME);
                  }}>
                  <Text style={styles.item}>CONTINUE</Text>
                </TouchableHighlight>
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
                    this.props.navigation.navigate(
                      ListViewClass.AUDIO_VIEW_NAME,
                    );
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
