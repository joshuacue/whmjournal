import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

import MenuClass from '../../classes/Menu';
import ActionClass from '../../classes/Action';
import ListViewClass from '../../classes/ListView';
import User from '../../classes/User';
import Bird from '../../classes/Bird';
import Loader from '../Common/Loader';

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
    fontSize: 100,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  value: {
    fontSize: 100,
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
let pressLen = 0;
let timer = null;

export default class RemainsCount extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.clear = this.clear.bind(this);
    this.pressedHome = this.pressedHome.bind(this);
    this.pressedValue = this.pressedValue.bind(this);
    this.pressIn = this.pressIn.bind(this);
    this.pressOut = this.pressOut.bind(this);
  }
  pressedKey(item) {
    let value = this.state.value;
    if (value.length < maxInput) {
      value = value + '' + item;
      this.setState({
        value,
      });
    }
  }
  pressedValue() {
    if (this.state.value.length > 0) {
      this.setState({isLoading: true}, () => {
        setTimeout(() => {
          //User.setRecord(Bird.BIRD_COUNT, this.state.value); TODO record remains
          this.props.navigation.navigate(ActionClass.REMAINS_NAME);
          this.setState({isLoading: false});
        }, 1);
      });
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
      this.props.navigation.navigate(ListViewClass.REMAINS_VIEW_NAME);
    }
    pressLen = 0;
  }
  pressedHome() {
    this.props.navigation.navigate(MenuClass.NAME);
  }
  clear() {
    this.setState({
      value: '',
    });
  }
  render() {
    if (this.state.isLoading) return <Loader />;
    let hasValue = this.state.value.length > 0;
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
                  <Text style={styles.value}>{this.state.value}</Text>
                </TouchableHighlight>
              </Row>
            ) : (
              <Row>
                <TouchableHighlight
                  style={styles.itemHomeContainer}
                  onLongPress={() => {
                    this.props.navigation.navigate(MenuClass.NAME);
                  }}
                  onPress={() => {
                    this.props.navigation.navigate(
                      ListViewClass.REMAINS_VIEW_NAME,
                    );
                  }}>
                  <Image
                    style={styles.icons}
                    source={require('../../../assets/images/Misc/Backward.png')}
                  />
                </TouchableHighlight>
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
              ) : null}
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}
