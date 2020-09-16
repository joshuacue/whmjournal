/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import RNFS from 'react-native-fs';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  Alert,
  BackHandler,Dimensions, Platform, PixelRatio
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
import FontAwesome, {parseIconFromClassName} from 'react-native-fontawesome';
import Loader from '../Common/Loader';

import MenuClass from '../../classes/Menu';
import PinClass from '../../classes/Pin';
import User from '../../classes/User';

const maxInput = 4;
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
    alignItems: 'center',
    width: '100%',
    flex: 1,
    alignSelf: 'stretch',
  },
  interactionContainer: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '30%',
    height: '60%',
    alignItems: 'center',
  },
  intro: {
    fontSize: normalize(20),
    color: '#FF7F27',
    fontFamily: 'malgun',
  },
  message: {
    fontSize: normalize(40),
    color: '#FF7F27',
    fontFamily: 'malgun',
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
    color: '#797979',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
    marginBottom: 10,
  },
  darkKeys: {
    // Delete key
    fontSize: normalize(20),
    color: '#FF7F27',
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
});

export default class Pin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      retry: 0,
      tried: 0,
      isLoading: false,
    };
    this.clear = this.clear.bind(this);
  }
  componentDidMount() {
    let path = RNFS.DocumentDirectoryPath + '/whmjournal.data';
    RNFS.readFile(path, 'utf8')
      .then(data => {
        data = JSON.parse(data);
        if (data.disablePin) {
          this.pressedKey('****');
        }
      })
      .catch(err => {
        alert(err.message);
      });
  }
  pressedKey(item) {
    let path = RNFS.DocumentDirectoryPath + '/whmjournal.data';
    if (this.state.retry) return;
    let value = this.state.value;
    if (value.length < maxInput) {
      value = value + '' + item;
      if (value.length === maxInput) {
        if (this.props.navigation.getParam('hasPin', null)) {
          if (User.checkPin(value)) {
            this.setState({value: '', retry: 0, tried: 0}, () => {
              this.props.navigation.navigate(MenuClass.NAME);
            });
          } else {
            RNFS.readFile(path, 'utf8')
              .then(data => {
                data = JSON.parse(data);
                let newRetry = 0;
                let newTried = 0;
                if (this.state.tried === 0 && data.disablePin)
                  newTried = data.disablePin - 1;
                else newTried = this.state.tried;
                newTried++;
                if (newTried === 1) newRetry = 30;
                else if (newTried === 2) newRetry = 60;
                else if (newTried >= 3) newRetry = 60 * 5;
                data.disablePin = newTried;
                RNFS.unlink(path).then(() => {
                  RNFS.writeFile(path, JSON.stringify(data), 'utf8')
                    .then(success => {})
                    .catch(err => {});
                  this.setState(
                    {retry: newRetry, tried: newTried, value: ''},
                    () => {
                      let timer = null;
                      timer = setInterval(() => {
                        let newRetry = this.state.retry;
                        if (newRetry < 2) {
                          clearInterval(timer);
                          data.disablePin = 0;
                          RNFS.unlink(path).then(() => {
                            RNFS.writeFile(path, JSON.stringify(data), 'utf8')
                              .then(success => {
                                isWriting = false;
                              })
                              .catch(err => {});
                          });
                        }
                        newRetry--;
                        this.setState({retry: newRetry});
                      }, 1000);
                    },
                  );
                });
              })
              .catch(err => {
                alert(err.message);
              });
          }
        } else {
          if (this.props.navigation.getParam('confirm', null)) {
            if (PinClass.checkPin(value)) {
              this.setState({isLoading: true}, () => {
                User.savePin(
                  value,
                  () => {
                    this.setState({isLoading: false}, () => {
                      this.props.navigation.navigate(MenuClass.NAME);
                    });
                  },
                  () => {
                    Alert.alert(
                      'Login',
                      'Something went wrong! App will close...',
                    );
                    BackHandler.exitApp();
                  },
                );
              });
            } else {
              Alert.alert('Pin', 'Pin does not match');
              PinClass.setPin(null);
              this.props.navigation.navigate(PinClass.NAME, {
                hasPin: false,
                confirm: false,
              });
              this.setState({value: ''});
            }
          } else {
            PinClass.setPin(value);
            this.props.navigation.navigate(PinClass.NAME, {
              hasPin: false,
              confirm: true,
            });
            this.setState({value: ''});
          }
        }
      } else
        this.setState({
          value,
        });
    }
  }
  clear() {
    this.setState({
      value: '',
    });
  }
  maskValue(value) {
    return value.replace(/\d/g, '*');
  }
  render() {
    if (this.state.isLoading) return <Loader />;
    let hasPin = this.props.navigation.getParam('hasPin', null);
    let confirm = this.props.navigation.getParam('confirm', null);
    let retry = this.state.retry;
    let tried = this.state.tried;
    let message = 'Please select a memorable pin';
    if (hasPin) message = 'Enter your pin';
    if (confirm) message = 'Confirm your pin';
    if (retry) {
      if (tried <= 2) message = `Wrong Pin! Retry in ${retry} seconds`;
      if (tried >= 3) {
        if (Math.round(retry / 60) > 0)
          message = `Wrong Pin! Retry in ${Math.round(retry / 60)} minutes`;
        else message = `Wrong Pin! Retry in ${retry} seconds`;
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={{
              flex: 1,
            }}
            resizeMode={'contain'}
            source={require(`../../../assets/images/Bottom_Nav/Nav_Avian_Selected.png`)}
          />
        </View>
        <View style={styles.interactionContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.intro}>{message}</Text>
            <Text style={styles.message}>
              {this.maskValue(this.state.value)}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
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
                    onPress={this.pressedKey.bind(this, 4)}>
                    <Text style={styles.keys}>4</Text>
                  </TouchableHighlight>
                </Row>
                <Row>
                  <TouchableHighlight
                    style={styles.itemContainer}
                    onPress={this.pressedKey.bind(this, 7)}>
                    <Text style={styles.keys}>7</Text>
                  </TouchableHighlight>
                </Row>
                <Row />
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
                    onPress={this.pressedKey.bind(this, 5)}>
                    <Text style={styles.keys}>5</Text>
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
                    onPress={this.pressedKey.bind(this, 6)}>
                    <Text style={styles.keys}>6</Text>
                  </TouchableHighlight>
                </Row>
                <Row>
                  <TouchableHighlight
                    style={styles.itemContainer}
                    onPress={this.pressedKey.bind(this, 9)}>
                    <Text style={styles.keys}>9</Text>
                  </TouchableHighlight>
                </Row>
                <Row>
                  <TouchableHighlight
                    style={styles.itemContainer}
                    onPress={this.clear}>
                    <FontAwesome
                      style={styles.darkKeys}
                      icon={parseIconFromClassName('fa fa-backspace')}
                    />
                  </TouchableHighlight>
                </Row>
              </Col>
            </Grid>
          </View>
        </View>
      </View>
    );
  }
}
