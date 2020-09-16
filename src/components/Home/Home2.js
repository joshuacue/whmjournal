/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginTop: '4%',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: '100%',
    height: '43%',
  },
  interactionContainer: {
    width: '95%',
    height: '20%',
    //backgroundColor: 'red'
  },
  textContainer: {
    width: '96%',
    height: '29%',
    margin: '2%',
    //alignItems: 'center',
    //backgroundColor: 'yellow'
  },
  buttonContainer: {
    width: '100%',
    height: '27%',
    //backgroundColor: 'green'
  },
  button: {
    width: '100%',
    height: '70%',
    color: '#202020',
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  intro: {
    fontSize: 40,
    color: '#000',
    marginTop: '8%',
    fontFamily: 'malgun',
  },
  message: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'malgun',
    margin: 7,
  },
});

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={{
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined,
            }}
            resizeMode={'cover'}
            source={require('../../../assets/images/Misc/Logo.png')}
          />
        </View>
        <View style={styles.interactionContainer}></View>
        <View style={styles.textContainer}>
          <TouchableOpacity
            style={styles.button}
            color="#202020"
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{fontSize: 30, color: '#fff'}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
