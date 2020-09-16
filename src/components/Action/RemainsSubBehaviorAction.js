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
} from 'react-native';
import PinClass from '../../classes/Pin';
import {Col, Row, Grid} from 'react-native-easy-grid';

import MenuClass from '../../classes/Menu';
import MapClass from '../../classes/Map';
import ActionClass from '../../classes/Action';
import ListView from '../../classes/ListView';
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
    fontSize: 50,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  value: {
    fontSize: 80,
    color: '#FF7F27',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  itemContainerLabel: {
    fontSize: 80,
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

export default class RemainsSubBehaviorAction extends Component {
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
      case 'PRESTINE':
      case 'DISEMBOWELED':
      case 'DOUGHY':
      case 'BONES_BROKEN':
      case 'DECAYED':
      case 'CARCASS_SPLIT':
      case 'EATEN':
        this.props.navigation.navigate(ListView.REMAINS_VIEW_NAME);
        break;
      default:
        this.props.navigation.navigate(TimerClass.REMAINS_NAME);
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
      this.props.navigation.navigate(ActionClass.REMAINS_BEHAVIOR_NAME);
    }
    pressLen = 0;
  }
  pressedHome() {
    this.props.navigation.navigate(ActionClass.REMAINS_BEHAVIOR_NAME);
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
                onPress={this.pressedKey.bind(this, 'PRESTINE')}>
                <Text style={styles.keys}>PRESTINE</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'DISEMBOWELED')}>
                <Text style={styles.keys}>DISEMBOWELED</Text>
              </TouchableHighlight>
            </Row>
            <Row></Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'DOUGHY')}>
                <Text style={styles.keys}>DOUGHY</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'BONES_BROKEN')}>
                <Text style={styles.keys}>BONES BROKEN</Text>
              </TouchableHighlight>
            </Row>
            <Row></Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'DECAYED')}>
                <Text style={styles.keys}>DECAYED</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'CARCASS_SPLIT')}>
                <Text style={styles.keys}>CARCASS SPLIT</Text>
              </TouchableHighlight>
            </Row>
            <Row></Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'EATEN')}>
                <Text style={styles.keys}>EATEN</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'UNKNOWN_DNA_ONLY')}>
                <Text style={styles.keys}>UNKNOWN DNA ONLY</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onLongPress={() => {
                  this.props.navigation.navigate(MenuClass.NAME);
                }}
                onPress={() => {
                  this.props.navigation.navigate(
                    ActionClass.REMAINS_BEHAVIOR_NAME,
                  );
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
