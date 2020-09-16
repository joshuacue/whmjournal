import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  horizontal2: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#FF7F27',
  },
});

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return this.props.visible || this.props.visible === undefined ? (
      <>
        <View
          style={[
            styles.container,
            this.props.updating ? styles.horizontal2 : styles.horizontal,
          ]}>
          <ActivityIndicator size="large" color="#FF7F27" />
        </View>
        {this.props.updating ? (
          <View style={[styles.container, styles.horizontal]}>
            <Text style={styles.text}>Updating</Text>
          </View>
        ) : null}
      </>
    ) : (
      <></>
    );
  }
}
