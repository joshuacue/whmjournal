import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import MenuClass from '../../classes/Menu';
import TimerClass from '../../classes/Timer';
import User from '../../classes/User';
import MapClass from '../../classes/Map';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {
  StyleSheet,
  View,
  //Image,
  ImageBackground,
  Text,
  //Button,
  TouchableHighlight,
  BackHandler,
  AppState,
} from 'react-native';
import PinClass from '../../classes/Pin';

const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  itemContainer: {
    width: '100%',
    height: '100%',
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

export default class AreaMap extends Component {
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
    this.props.navigation.navigate(MenuClass.NAME);
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
      User.setAreaClear(MapClass.AREA, selected);
      this.props.navigation.navigate(TimerClass.NAME);
    }
  }
  renderGraph() {
    let cols = [];
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
      cols.push(<Col key={'main_' + i}>{this.renderRows(letters[i])}</Col>);
    }
    return cols;
  }
  renderRows(letter) {
    let rows = [];
    for (let i = 0; i < 12; i++) {
      rows.push(
        <Row key={'sub_' + i}>
          <TouchableHighlight
            style={styles.itemContainer}
            onPress={this.select.bind(this, letter + i)}>
            <View
              style={styles.item}
              ref={component => (this[letter + i] = component)}></View>
          </TouchableHighlight>
        </Row>,
      );
    }
    return rows;
  }
  render() {
    return (
      <ImageBackground
        source={require(`../../../assets/images/Misc/Map.png`)}
        style={styles.bg}>
        <Grid style={{width: '100%'}}>{this.renderGraph()}</Grid>
      </ImageBackground>
    );
  }
}
