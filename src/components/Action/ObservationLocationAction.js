import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
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
    fontSize: 100,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  keys2: {
    fontSize: 65,
    color: '#151515',
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

export default class LocationAction extends Component {
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
    //User.setRecord(Bird.BIRD_HEADING,item); //TODO record observation
    this.props.navigation.navigate(TimerClass.OBSERVATION_NAME);
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
      this.props.navigation.navigate(ActionClass.OBSERVATION_BEHAVIOR_NAME);
    }
    pressLen = 0;
  }
  pressedHome() {
    this.props.navigation.navigate(ActionClass.OBSERVATION_BEHAVIOR_NAME);
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
                onPress={this.pressedKey.bind(this, 'NW')}>
                <Text style={styles.keys}>NW</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'W')}>
                <Text style={styles.keys}>W</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'SW')}>
                <Text style={styles.keys}>SW</Text>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'N')}>
                <Text style={styles.keys}>N</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={() => {}}>
                <Text style={styles.keys2}>HEADING</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'S')}>
                <Text style={styles.keys}>S</Text>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'NE')}>
                <Text style={styles.keys}>NE</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'E')}>
                <Text style={styles.keys}>E</Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemContainer}
                onPress={this.pressedKey.bind(this, 'SE')}>
                <Text style={styles.keys}>SE</Text>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row></Row>
            <Row></Row>
            <Row style={{backgroundColor: '#151515'}}>
              <TouchableHighlight
                style={styles.itemContainer}
                onLongPress={() => {
                  this.props.navigation.navigate(MenuClass.NAME);
                }}
                onPress={() => {
                  this.props.navigation.navigate(
                    ActionClass.OBSERVATION_BEHAVIOR_NAME,
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
