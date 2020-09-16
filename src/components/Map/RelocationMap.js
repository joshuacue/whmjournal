import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import ActionClass from '../../classes/Action';
import TimerClass from '../../classes/Timer';
import User from '../../classes/User';
import Bird from '../../classes/Bird';

import {
  StyleSheet,
  View,
  //Image,
  ImageBackground,
  Text,
  //Button,
  TouchableHighlight,
  BackHandler,
  AppState
} from 'react-native';
import PinClass from '../../classes/Pin';

const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  itemContainer: {
    width: '4.5%',
    height: '100%',
    borderTopColor: '#ccc',
    borderTopWidth: 0,
    borderLeftColor: '#ccc',
    borderLeftWidth: 0,
    borderRightColor: '#ccc',
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  selectedItem: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(249,67,67,0.4)',
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
});
let selected = null;

export default class RelocationMap extends Component {
  constructor() {
    super();
    this.state = {};
    this.select = this.select.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
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
    this.props.navigation.navigate(ActionClass.AIRFIELD_NAME);
    return true;
  }
  select(text) {
    let isNavigate = true; // 1 tap or 2 tap
    if (selected)
      this[selected].setNativeProps({
        style: styles.item,
      });
    if (selected == text) isNavigate = true;
    selected = text;
    this[selected].setNativeProps({
      style: styles.selectedItem,
    });
    if (isNavigate) {
      User.setRecord(Bird.BIRD_HEADING, selected);
      this.props.navigation.navigate(TimerClass.DEPREDATION_NAME);
    }
  }
  renderGraph() {
    let components = [];
    let letters = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
    ];
    for (let i = 0; i < letters.length; i++) {
      components.push(
        <View key={'main_' + i} style={styles.container}>
          {this.renderSubGraph(letters[i])}
        </View>,
      );
    }
    return components;
  }
  renderSubGraph(letter) {
    let components = [];
    for (let j = 0; j < 12; j++) {
      components.push(
        <TouchableHighlight
          key={'main_' + j}
          style={styles.itemContainer}
          onPress={this.select.bind(this, letter + j)}>
          <View
            style={styles.item}
            ref={component => (this[letter + j] = component)}></View>
        </TouchableHighlight>,
      );
    }
    return components;
  }
  render() {
    return (
      <ImageBackground
        source={require(`../../../assets/images/Misc/Map.png`)}
        style={styles.bg}>
        {this.renderGraph()}
      </ImageBackground>
    );
  }
}
